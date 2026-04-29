---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: owasp-top-10-3-injection-and-4-insecure-design
url: "https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design"
duration_minutes: 32
duration: 32m
level: Intermediate
updated: 8/23/2022
learners: 177777
skills:
  - Web Application Security
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFnOxWt9_bH0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661193633042?e=2147483647&amp;v=beta&amp;t=YvxdkzPtZ2ZCEBcncSPI9ytSt_Uf2OUjp0RSLgMg0YY"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Master the OWASP Top 10]]'
prev_courses:
  - '[[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]]'
next_courses:
  - '[[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]]'
path_nav: '[{"path":"Master the OWASP Top 10","position":3,"total":6,"prev":"OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures","next":"OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/web-application-security
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/OWASP%20Top%2010-%20-3%20Injection%20and%20-4%20Insecure%20Design.md)

![OWASP Top 10: #3 Injection and #4 Insecure Design](https://media.licdn.com/dms/image/v2/C4E0DAQFnOxWt9_bH0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661193633042?e=2147483647&amp;v=beta&amp;t=YvxdkzPtZ2ZCEBcncSPI9ytSt_Uf2OUjp0RSLgMg0YY)

# OWASP Top 10: #3 Injection and #4 Insecure Design

> The Open Web Application Security Project (OWASP) was formed to provide the public with the resources needed to understand and enhance software security. The OWASP Top 10 list describes the ten biggest vulnerabilities. In this course, Caroline Wong takes a deep dive into the third and fourth categories of security vulnerabilities in the 2021 OWASP Top 10: injection and insecure design. They are ex

> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design) | 32m | Intermediate | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - 2021 OWASP Top 10
  - What you should know
- [**1. Injection**](#1-injection) (6 videos)
  - What is injection?
  - Example #1: 2008 Heartland data breach
  - Example #2: 2020 Accellion data breach
  - Prevention technique #1: Prepared statements
  - Prevention technique #2: Input validation
  - Prevention technique #3: Escape special characters
- [**2. Insecure Design**](#2-insecure-design) (6 videos)
  - What is insecure design?
  - Real-world example #1: G Suite accounts in 2018
  - Real-world example #2: 2021 manufacturing data risk report
  - Prevention technique #1: Threat modeling
  - Prevention technique #2: Secure design patterns and principles
  - Prevention technique #3: Secure development lifecycle
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### 2021 OWASP Top 10
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=0)** - [Narrator] We use web applications every day in both our personal and our professional lives.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=6)** We want them to be safe and secure.
>
> **[0:09](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=9)** The best way to secure web applications is to find and fix security vulnerabilities.
>
> **[0:16](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=16)** OWASP stands for Open Web Application Security Project.
>
> **[0:19](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=19)** And the Top 10 list is a resource for any and everyone who is involved in building web applications.
>
> **[0:27](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=27)** It helps us to understand the most common types of security vulnerabilities.
>
> **[0:32](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=32)** This course covers the third and fourth categories in the 2021 OWASP Top 10, injection and insecure design.
>
> **[0:41](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=41)** I'll describe each one and we'll review a couple of real-world examples.
>
> **[0:46](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=46)** I'll share what I know about how to prevent these types of vulnerabilities.
>
> **[0:52](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=52)** I'm Caroline Wong, Chief Strategy Officer at Cobalt.
>
> **[0:55](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=55)** I've worked in the cybersecurity field since 2005.
>
> **[0:58](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=58)** In my various roles as a security practitioner, a product manager, a management consultant, and a tech company executive, I've seen firsthand how security vulnerabilities get introduced into web applications.
>
> **[1:11](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=71)** I've also learned how to identify and address them.
>
> **[1:15](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=75)** Come and join me.
>
> **[1:16](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=76)** Let's empower ourselves so that we can build more secure web applications.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980&t=0)** - [Instructor] Here are a few things that may be helpful to know so that you can get the most out of this course.
>
> **[0:07](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980&t=7)** First, this course covers the third and fourth categories in the 2021 OWASP Top 10.
>
> **[0:14](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980&t=14)** I recommend watching my previous course that covers the first and second categories.
>
> **[0:19](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980&t=19)** You may also want to watch my OWASP basics course, which provides a high level overview of all of the items in the 2021 Top 10.
>
> **[0:29](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980&t=29)** This course is designed for anyone who is involved in building web applications and wants to make them more secure.
>
> **[0:37](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980&t=37)** This includes software developers, architects, product and project managers, and of course security professionals.
>
> **[0:44](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980&t=44)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 1. Injection

> [↑ Back to Table of Contents](#table-of-contents)

#### What is injection?
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=0)** - [Instructor] Injection is an attack on a web application that compromises information stored in an underlying database.
>
> **[0:08](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=8)** This type of attack is very attractive to malicious hackers, because it allows them to view, change, or delete sensitive data.
>
> **[0:17](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=17)** Injection attacks are potentially very high impact, because they can affect each of the three principles of the Information Security Triad.
>
> **[0:25](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=25)** Confidentiality, Integrity, and Availability.
>
> **[0:29](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=29)** If an attacker can access information in a database that they should not be able to access, that is a breach of confidentiality.
>
> **[0:37](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=37)** If an attacker can change information in a database, this violates the integrity of that information.
>
> **[0:43](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=43)** If an attacker can delete information in a database, this compromises the availability of that information as it will no longer be available to the legitimate users who need to use it.
>
> **[0:55](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=55)** These outcomes are possible, because web apps need to interact with databases and attackers can exploit vulnerabilities to direct that interaction and use it for their own malicious purposes.
>
> **[1:09](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=69)** Ultimately, injection attacks occur when web apps don't have proper boundaries set up.
>
> **[1:16](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=76)** Intentionally secure coding practices are required to protect the sensitive information in a database from being accessed or manipulated by untrusted user input.
>
> **[1:28](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=88)** It's completely normal for a web app to interact with a database.
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=93)** If I'm shopping on a website that I visit frequently, then I'll log in with my account, this allows me to easily access information about my previous orders, mailing addresses, and saved payment information.
>
> **[1:46](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=106)** All of this information is accessed via the web app in a database.
>
> **[1:51](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=111)** The thing about web apps and databases is that ultimately, the way they interact is all done through code, and code has this cool, but weird and potentially dangerous attribute, which is that a piece of code can represent data or it can represent an instruction.
>
> **[2:08](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=128)** Hackers take advantage by putting code into web app fields.
>
> **[2:12](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=132)** This tricks the web application into interpreting their user input as an instruction rather than is data.
>
> **[2:20](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=140)** Instead of receiving safe data from user input and passing it to a database query, a web app that is vulnerable to injection allows the hacker to tell the database what to do.
>
> **[2:33](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=153)** This is not good.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (1), required to (1)
> **Speakers:** - [instructor] (1)

#### Example #1: 2008 Heartland data breach
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=0)** - [Instructor] Heartland Payment Systems is a United States based payment processing provider.
>
> **[0:05](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=5)** They offer services to hundreds of thousands of businesses and process tens of millions of transactions per day.
>
> **[0:13](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=13)** In 2008, Heartland found out about a major security breach on their systems.
>
> **[0:18](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=18)** Hundreds of millions of credit cards were compromised.
>
> **[0:21](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=21)** Unfortunately, credit card breaches are not uncommon.
>
> **[0:25](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=25)** Usually only the last four digits of a credit card number are captured in this type of attack.
>
> **[0:31](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=31)** In the Heartland breach, full credit card numbers and all the additional information required to produce fake counterfeit cards were compromised.
>
> **[0:39](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=39)** The attackers even took the data on the digital strip on the back of the cards.
>
> **[0:44](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=44)** How did this happen?
>
> **[0:46](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=46)** Malicious hackers exploited a vulnerability using a SQL injection attack.
>
> **[0:51](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=51)** A blog on the Komodo website says the breach was discovered after Visa and MasterCard notified Heartland of suspicious transactions.
>
> **[1:01](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=61)** It started with a SQL injection attack in late 2007 that compromised their database.
>
> **[1:07](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=67)** The hackers then spent eight months working to access the payment processing system while avoiding detection by Heartland.
>
> **[1:15](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=75)** They eventually installed a type of spyware program called a sniffer that captured the card data as payments were processed.
>
> **[1:23](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=83)** Heartland suffered massive consequences as a result of the data breach.
>
> **[1:28](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=88)** They paid hundreds of millions of dollars to compensate for fraudulent payments and even lost their PCI compliance status for several months.
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=96)** PCI, or the Payment Card Industry data security standard is required by credit card providers like visa and MasterCard in order to process payments.
>
> **[1:47](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=107)** The hacker behind the attack, Albert Gonzalez was eventually indicted for the breach and sentenced to 20 years in United States federal prison.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), pci (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Example #2: 2020 Accellion data breach
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=0)** - [Instructor] Kiteworks, formerly known as Accellion, is a security technology company that protects sensitive data on digital channels, like email, web forms, and APIs.
>
> **[0:11](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=11)** More than 3000 global companies use their products.
>
> **[0:15](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=15)** In 2020, Accellion rebranded as Kiteworks.
>
> **[0:19](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=19)** That same year, several vulnerabilities in their legacy product were exploited by malicious attackers, impacting hundreds of customers.
>
> **[0:28](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=28)** One of these vulnerabilities was SQL injection.
>
> **[0:31](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=31)** Kiteworks has multiple product lines.
>
> **[0:34](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=34)** Some of their products have old legacy software and new updated software.
>
> **[0:40](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=40)** It's critically important for software manufacturers to continuously look for and address security vulnerabilities in all of their software, both old and new.
>
> **[0:50](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=50)** This particular injection vulnerability was found and exploited in an old version of a Kiteworks product called the Accellion File Transfer Application.
>
> **[1:01](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=61)** When the software was hacked, 75% of customers had moved on and were using the new software, but 25% were still using the old, vulnerable legacy software.
>
> **[1:13](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=73)** Here's how a PurpleSec blog post describes the data breach.
>
> **[1:18](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=78)** "The SQL injection vulnerability "allows an attacker to use a web shell "to run arbitrary commands and extract data."
>
> **[1:27](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=87)** CISA, a United States government agency focused on cybersecurity and infrastructure security, describes the exploit as follows.
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=95)** "One of the exploited vulnerabilities is a SQL injection "that allows an unauthenticated user "to run remote commands on targeted devices.
>
> **[1:45](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=105)** "The web shell allows the attacker "to send commands to targeted devices, "exfiltrate data, and clean up logs."
>
> **[1:52](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=112)** Hundreds of companies were affected by this breach, including an Australian government agency, a Canadian aviation company, multiple financial services companies, a law firm, a grocery store, an energy company, several academic institutions, and several healthcare organizations.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), cisa (1)
> **Definitions:** is a  (2), known as (1)
> **Code Keywords:** new. (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique #1: Prepared statements
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=0)** - [Instructor] If you want to get information out of a database, you've got a couple of different options.
>
> **[0:05](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=5)** Consider a SQL database.
>
> **[0:08](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=8)** One way is to execute a SQL statement directly.
>
> **[0:13](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=13)** This approach is called the dynamic query and it is more vulnerable to injection attacks.
>
> **[0:19](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=19)** Executing a SQL statement directly is kind of like baking a cake from scratch.
>
> **[0:25](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=25)** You have more granular control, which also means you're more prone to making mistakes.
>
> **[0:31](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=31)** It's less efficient than using a box of cake mix because you're personally collecting and mixing every single ingredient.
>
> **[0:39](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=39)** The other way to get information out of a database is to use a prepared statement, also known as a parameterized query.
>
> **[0:49](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=49)** This approach protects against injection attacks.
>
> **[0:53](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=53)** You can think about using prepared statements kind of like using boxed cake mix.
>
> **[0:59](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=59)** It's more efficient than baking a cake from scratch because most of the ingredients have already been put together.
>
> **[1:06](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=66)** The OWASP SQL injection cheat sheet says, "Parameterized queries force the developer "to first define all the SQL code, "and then pass in each parameter to the query.
>
> **[1:20](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=80)** "This coding style allows the database "to distinguish between code and data, "regardless of what user input is supplied."
>
> **[1:30](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=90)** Different coding languages have different prepared statements.
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=94)** OWASP provides specific recommendations for Java Enterprise Edition, .NET, PHP, Hibernate and SQLite.
>
> **[1:43](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=103)** Prepared statements work to prevent injection attacks because they separate the code that specifies the action or the instruction from the code that represents the data.
>
> **[1:55](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=115)** This makes it harder for a malicious attacker to trick a web application into interpreting their user input as an instruction.
>
> **[2:04](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=124)** We never want to make it easy for hackers to tell our web apps what to do.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), owasp (2), net (1), php (1)
> **CLI Commands:** php (1), make (1)
> **Definitions:** is called (1), known as (1)
> **Analogies:** kind of like (2)
> **Code Keywords:** pass (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique #2: Input validation
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=0)** - [Instructor] Input validation is exactly what it sounds like.
>
> **[0:04](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=4)** Web applications take input from users, that input needs to be validated to make sure that it's safe and not dangerous.
>
> **[0:14](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=14)** This is kind of like when my kids go trick or treating on Halloween and they get candy from the neighborhood homes that we visit, in this analogy the treats are the user supplied input.
>
> **[0:27](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=27)** As a responsible parent, I won't allow my kids to eat the candy before I inspect it and decide that it's safe for them to consume.
>
> **[0:35](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=35)** In a sense, I am performing input validation before they are allowed to eat their Halloween treats.
>
> **[0:42](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=42)** There are two different ways to perform input validation.
>
> **[0:47](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=47)** One way is to define what is allowed, the other way is to define what is not allowed.
>
> **[0:55](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=55)** A web application will validate user input by evaluating one or more attributes and determining if it matches what is expected by the application.
>
> **[1:05](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=65)** These attributes might include data type, data size, data range, or data content.
>
> **[1:12](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=72)** For example, a web app might expect to receive a calendar date as input.
>
> **[1:18](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=78)** The application can be programmed to check to see if the user input is actually in calendar date format, consisting of a year, a month, and a day.
>
> **[1:30](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=90)** If the input matches the required format, the data will be accepted, otherwise it should be rejected.
>
> **[1:38](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=98)** I am a huge fan of OWASP cheat sheets and the one they have on input validation is particularly good.
>
> **[1:45](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=105)** This resource describes different input validation strategies and provides information on how to implement input validation.
>
> **[1:55](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=115)** It includes recommendations on using an allow list versus a block list, validating freeform text, and using regular expressions.
>
> **[2:06](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=126)** It also discusses related topics such as client versus server side validation and content security policy.
>
> **[2:14](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=134)** If you want to learn more about how to do input validation, be sure to check it out.

> [!info]- Semantic Content
>
> **Analogies:** kind of like (1), for example (1), such as (1)
> **CLI Commands:** make (1)
> **Code Keywords:** type, (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique #3: Escape special characters
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=0)** - [Instructor] Sometimes, when you're developing a web application, you want to use a prepared statement, but you can't.
>
> **[0:07](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=7)** You might need to accommodate a performance requirement that doesn't allow it, or you might be retrofitting legacy code.
>
> **[0:14](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=14)** If you must use a dynamic query, you can still take steps to prevent injection attacks by escaping special characters.
>
> **[0:23](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=23)** A special character is any character on the keyboard that is not a letter or a number.
>
> **[0:29](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=29)** These include percent, underscore, single quote, backslash and double quote.
>
> **[0:35](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=35)** Special characters often have special meaning when they're being read and parsed by interpreters.
>
> **[0:41](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=41)** Specifically, some special characters tell an interpreter whether code should be read as instruction or as data.
>
> **[0:49](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=49)** When certain special characters are submitted via user input and interpreted as though they are supposed to have special meaning, that can result in an injection attack.
>
> **[1:01](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=61)** In order to prevent injection attacks, we must escape special characters.
>
> **[1:06](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=66)** Escaping a special character simply means telling the interpreter that it should be read as a normal character and not as a character with special meaning.
>
> **[1:17](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=77)** The OWASP Cheat Sheet Series includes a cheat sheet on SQL injection prevention, which provides specific actionable detail on how to escape user input before it gets put into a database query.
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=92)** These recommendations are specific to each database type.
>
> **[1:37](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=97)** Here, you can find database-specific escaping details for Oracle, SQL MySQL and Db2.
>
> **[1:44](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=104)** It's important to note that escaping special characters should be used as a last resort.
>
> **[1:50](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=110)** It's much better to use parameterized queries and to perform input validation.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), owasp (1)
> **CLI Commands:** find (1), mysql (1)
> **Code Keywords:** type. (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Insecure Design

> [↑ Back to Table of Contents](#table-of-contents)

#### What is insecure design?
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=0)** - [Narrator] The fourth item in the 2021 OWASP top 10 is a new one, insecure design.
>
> **[0:07](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=7)** Historically, most OWASP top 10 items have focused on technical coding errors.
>
> **[0:13](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=13)** This one addresses security vulnerabilities at a higher level of abstraction, design and architecture flaws.
>
> **[0:22](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=22)** OWASP says, "There's a difference between insecure design and insecure implementation."
>
> **[0:28](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=28)** And this vulnerability category is about the former.
>
> **[0:33](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=33)** Insecure design in web applications means that a problem with the design or the architecture creates a vulnerability which can be exploited by a malicious attacker.
>
> **[0:45](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=45)** Sometimes these design decisions are made by mistake, like when a password recovery flow does not compare the response to a secret question with the known authenticated response.
>
> **[0:59](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=59)** In other cases, this type of vulnerability happens because someone made a decision on purpose that results in an insecure design scenario, like when a decision is made not to encrypt highly sensitive data.
>
> **[1:16](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=76)** Solving insecure design issues in web applications can be particularly challenging because the wrinkles to be ironed out don't only take place between fingers and a keyboard.
>
> **[1:28](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=88)** These discussions involve a lot of different stakeholders whose responsibility it is to figure out how a web application is supposed to work, product teams, engineering teams, go-to-market teams, and hopefully security teams.
>
> **[1:44](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=104)** Security is an emergent property and solving the problem of insecure design requires getting the right people to engage throughout the process.
>
> **[1:55](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=115)** Unlike other items in the OWASP top 10, which can be pinned down to one or maybe two different phases in the software development lifecycle, insecure design has implications across each and every single one.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (4)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### Real-world example #1: G Suite accounts in 2018
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=0)** - [Narrator] In 2018, security researcher Cameron Vincent discovered an insecure design vulnerability in Google Workspace, known at the time as Google G Suite.
>
> **[0:12](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=12)** Vincent figured out a way for anyone to add a new super user to someone else's G Suite account.
>
> **[0:19](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=19)** Google Workspace includes Gmail, Google Calendar, and Google Drive.
>
> **[0:24](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=24)** I don't know about you, but I definitely don't want strangers accessing my email, calendar, and files.
>
> **[0:32](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=32)** Here's how Vincent describes the role of a G Suite super admin in his blog post about the vulnerability.
>
> **[0:40](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=40)** "They are exactly what they sound like as they have super admin privileges over everything.
>
> **[0:46](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=46)** They can create groups, manage users, and change passwords.
>
> **[0:50](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=50)** It is really important to not have that many super admins in a G Suite org as the more super admins you have, the higher chances you have of a super admin account being compromised."
>
> **[1:03](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=63)** The insecure design vulnerability that Vincent found was an extremely big deal.
>
> **[1:09](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=69)** Anyone being able to add themselves to someone else's G Suite organization and make themselves a super admin no less would be able to access a treasure trove of private information and potentially cause a great deal of damage.
>
> **[1:28](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=88)** Vincent's blog post further explains the technical details of how to manipulate requests during the add a new user and pay for that new user workflows which he demonstrates using the domain and ID of the victim's G Suite organization.
>
> **[1:46](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=106)** He submitted the vulnerability finding to Google's Vulnerability Reward Program and the vulnerability was fixed.
>
> **[1:53](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=113)** He did not publish his public blog post which explains exactly how to exploit the vulnerability until a few years later, long after the fix had been implemented.

> [!info]- Semantic Content
>
> **Code Keywords:** super (7), private (1), public (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Real-world example #2: 2021 manufacturing data risk report
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=0)** - [Presenter] A data protection company called Varonis released several research reports in 2021 highlighting data risk statistics in different industry sectors.
>
> **[0:11](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=11)** These are unfortunately textbook perfect examples of insecure design.
>
> **[0:18](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=18)** I'm going to describe some of the key findings from this research on the financial services, manufacturing, and healthcare sectors.
>
> **[0:26](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=26)** The financial services data-risk report contains data from 4 billion files across 50 different organizations.
>
> **[0:35](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=35)** On average, a new employee starting at a financial services organization has access to 11 million files, or 13% of the overall data held by the company.
>
> **[0:47](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=47)** At larger organizations, this number goes up to 20 million files.
>
> **[0:53](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=53)** Every single employee has the ability to view, copy, move, change, or delete the data in these files.
>
> **[1:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=60)** 20% of these files contain sensitive information.
>
> **[1:05](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=65)** The manufacturing data-risk report presents statistics from a similar data set.
>
> **[1:11](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=71)** The average worker was found to have access to more than 5 million documents on their very first day of work.
>
> **[1:18](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=78)** The report also revealed more than 1,000 open accounts which were no longer actually being used.
>
> **[1:26](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=86)** Every single one of these inactive accounts, until closed, represents an opportunity for a hacker to compromise the account and gain further access to data inside the organization.
>
> **[1:39](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=99)** The healthcare report contains data from about 3 billion files across more than 50 different healthcare organizations.
>
> **[1:48](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=108)** These include hospitals, pharmaceutical companies, and biotech companies.
>
> **[1:53](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=113)** Similar to the findings in the financial services and manufacturing industry reports, the healthcare research discovered that the average healthcare worker has access to more than 30,000 sensitive files on their first day of work.
>
> **[2:08](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=128)** Nearly 20% of all files are accessible to each and every single employee.
>
> **[2:14](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=134)** One in 10 of these files contains sensitive information.
>
> **[2:18](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=138)** And two thirds of the companies surveyed have hundreds of accounts with passwords that never expire.
>
> **[2:25](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=145)** This is problematic because without multifactor authentication hackers can easily guess passwords and compromise accounts.
>
> **[2:35](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=155)** The insecure design vulnerabilities discussed in the Varonis research reports do not exist because of implementation mistakes by software developers.
>
> **[2:45](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=165)** They're not exploitable because of technical loopholes in programming languages.
>
> **[2:50](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=170)** These exist because of the way that access to information has been designed in these organizations.
>
> **[2:59](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=179)** Every organization has a choice and a responsibility when it comes to determining how much information any given employee can access.
>
> **[3:09](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=189)** Remember that a failure to intentionally design is by default a design decision in itself.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (1)
> **Analogies:** similar to (1)
> **Speakers:** - [presenter] (1)

#### Prevention technique #1: Threat modeling
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=0)** - [Narrator] Threat modeling is a fancy term that cybersecurity people use to describe the process of thinking through any and everything that could possibly go wrong.
>
> **[0:10](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=10)** And then implementing a plan to prevent the worst from happening.
>
> **[0:15](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=15)** While there are frameworks for how to structure a threat modeling practice, the process is inevitably subjective.
>
> **[0:23](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=23)** Every system is unique in one way or another and therefore no two threat models will be exactly the same.
>
> **[0:31](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=31)** My friend and colleague Adam Shostack says that the easiest way to get started with threat modeling is by asking the following four questions.
>
> **[0:41](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=41)** Number one, what are we working on?
>
> **[0:43](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=43)** Number two, what can go wrong?
>
> **[0:45](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=45)** Number three, what are we going to do?
>
> **[0:48](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=48)** Number four, did we do a good job?
>
> **[0:52](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=52)** There are many different models for how to do threat modeling.
>
> **[0:56](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=56)** Some of them have funny names.
>
> **[0:58](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=58)** These include STRIDE, PASTA, TRIKE, VAST, DREAD and OCTAVE.
>
> **[1:06](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=66)** As an example, I'm going to briefly describe the steps involved in using the STRIDE model.
>
> **[1:13](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=73)** Each letter in the word STRIDE stands for a type of threat.
>
> **[1:18](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=78)** S stands for spoofing.
>
> **[1:20](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=80)** Spoofing is when a malicious person pretends to be someone that is known and trusted.
>
> **[1:27](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=87)** T is for tampering.
>
> **[1:29](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=89)** Tampering occurs when a malicious person can make an unauthorized change to data.
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=95)** R stands for repudiation.
>
> **[1:38](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=98)** Repudiation describes a situation where a hacker does something malicious but they've been able to cover their tracks so that their bad actions cannot be tracked or linked to them.
>
> **[1:51](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=111)** I is for information disclosure.
>
> **[1:54](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=114)** Information disclosure simply means that information can be accessed by someone who is not supposed to have access to it.
>
> **[2:02](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=122)** D stands for denial of service.
>
> **[2:05](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=125)** A denial of service attack takes down a critical service so that it is unavailable to legitimate users.
>
> **[2:12](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=132)** It affects the availability of an application so it doesn't work and cannot be used as intended.
>
> **[2:19](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=139)** E is for elevation of privilege.
>
> **[2:23](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=143)** Elevation of privilege means that a user has the ability to perform actions beyond what their role is supposed to do.
>
> **[2:30](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=150)** For example, if a regular user can perform administrative functions that's an elevation of privilege.
>
> **[2:39](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=159)** If you are interested in learning more about threat modeling, I highly recommend that you check out Adam Shostack's linked in learning courses.
>
> **[2:48](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=168)** He is my favorite subject matter expert on this topic.

> [!info]- Semantic Content
>
> **Env Vars:** stride (3), pasta (1), trike (1), vast (1), dread (1)
> **Definitions:** stands for (4), is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Prevention technique #2: Secure design patterns and principles
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=0)** - [Instructor] When an engineer develops a secure way to do something, secure design patterns and principles allow their colleagues to basically copy and paste their code so that they can reuse the same method.
>
> **[0:15](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=15)** You can think about it like not having to "reinvent the wheel" every time you want to use a function and do it securely.
>
> **[0:25](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=25)** There are many different opportunities to use secure design patterns when building web applications.
>
> **[0:32](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=32)** These include the following capabilities, authentication, role management, key management, logging, cryptography, protocols, defined configuration templates.
>
> **[0:43](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=43)** Secure design patterns and principles applied both at the code level as well as at the design level.
>
> **[0:51](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=51)** Instead of starting from scratch every time one of these capabilities is needed, a software development team can leverage an already known secure version of the capability that's already been built.
>
> **[1:05](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=65)** This is described well in the security features and design domain of the BSIMM Framework.
>
> **[1:12](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=72)** BSIMM stands for building security in maturity model.
>
> **[1:17](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=77)** Here's what it says.
>
> **[1:19](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=79)** "Each mobile and cloud platform will likely need their own means by which users are authenticated and authorized, secrets are managed, and user actions are centrally logged and monitored.
>
> **[1:30](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=90)** Project teams benefit from implementations that come pre-approved."
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=96)** It's not enough however, just to have a list of secure features.
>
> **[1:41](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=101)** People need to know about it, and they need to actually use it.
>
> **[1:46](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=106)** It's critical to have an effective place to share this information with software architects and developers.
>
> **[1:53](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=113)** Important conversations on these topics are most likely to take place at an architectural review board, or other design committee meeting.
>
> **[2:03](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=123)** Ultimately, if a software security group has engaging and frequent conversations with software architects and developers, folks are likely to know about and use secure design patterns and principles.

> [!info]- Semantic Content
>
> **Env Vars:** bsimm (2)
> **Code Keywords:** function (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique #3: Secure development lifecycle
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=0)** - [Narrator] The only truly effective way to prevent insecure design for web apps is to integrate security activities into each phase of the software development life cycle.
>
> **[0:11](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=11)** This is because every phase is an opportunity to introduce insecure design and it's much more efficient to remove vulnerabilities as soon as they are identified or even better to prevent them from being introduced in the first place.
>
> **[0:28](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=28)** Broadly speaking, the software development life cycle consists of the following five phases, each of which ideally includes appropriate security activities.
>
> **[0:40](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=40)** Requirements, design, development, testing, operations and maintenance.
>
> **[0:48](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=48)** During the requirements phase of developing a web app, ideally, a security perspective is invited to the table.
>
> **[0:56](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=56)** This allows for feedback and input, particularly on workflows and items, which might be intended as features but could also introduce security flaws.
>
> **[1:09](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=69)** When security is engaged at this earliest stage, they can apply misuse and abuse thinking to identify potential insecure design possibilities.
>
> **[1:20](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=80)** During the design phase of web app development, the best security activity to accompany architecture discussions is threat modeling.
>
> **[1:30](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=90)** Threat modeling involves analyzing a design to identify security flaws.
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=96)** This phase may involve the meeting of a formal group like an architecture review board, which goes over the key design decisions that will determine how the web application will be built.
>
> **[1:49](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=109)** During the development phase of web app development, the typical security activity, which accompanies writing code is coder review.
>
> **[1:58](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=118)** Code review tends to be more about bugs than about flaws.
>
> **[2:02](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=122)** I generally think about security bugs as coding errors and flaws as logic and design problems.
>
> **[2:09](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=129)** But in any case, a security vulnerability is a vulnerability.
>
> **[2:13](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=133)** The most important thing is that it's identified and addressed.
>
> **[2:18](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=138)** The testing phase of web app development is particularly critical when it comes to identifying insecure design.
>
> **[2:27](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=147)** Security testing must look beyond positive path, feature-based, check the box style testing.
>
> **[2:34](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=154)** It must evaluate the security of a system as a whole and not only as individual parts.
>
> **[2:41](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=161)** Security is an emergent attribute that requires both automatic and manual testing in order to discover design flaws.
>
> **[2:51](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=171)** Insecure design, in particular, can only be found by humans.
>
> **[2:56](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=176)** Manual pen testing is an important activity for this phase.
>
> **[3:01](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=181)** Finally, operations and maintenance requires periodic security testing, both automated and manual.
>
> **[3:10](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=190)** This ensures that insecure design is not introduced as the web application evolves and further develops over time.

> [!info]- Semantic Content
>
> **Definitions:** is an  (3), is a  (1)
> **Code Keywords:** case, (1), finally, (1)
> **Speakers:** - [narrator] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=0)** - [Instructor] And there you have it.
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=1)** Items number three and four in the OWASP Top 10.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=6)** Both injection and insecure design have been key information security concepts for decades.
>
> **[0:13](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=13)** The problems that lead to data breaches are known, and we must continue to find, fix and prevent these security vulnerabilities.
>
> **[0:23](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=23)** We have an opportunity to build more secure web applications in the future.
>
> **[0:30](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=30)** I hope you'll join me in my next course that covers the fifth and sixth vulnerability categories, security misconfiguration, and vulnerable and outdated components.
>
> **[0:42](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=42)** Similar to this course, we'll learn about each vulnerability category, dive into real life examples and discuss prevention techniques.
>
> **[0:52](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=52)** Let's keep learning together.
>
> **[0:55](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=55)** There's more to explore in the 2021 OWASP Top 10.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1)
> **Env Vars:** owasp (2)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Caroline Wong]]

## Skills Covered

- Web Application Security

## Path Context

### In [[Master the OWASP Top 10]]
← [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] | **3 of 6** | [[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]] →

## Appears In

- [[Master the OWASP Top 10]]

## Related Courses

_Courses sharing skills:_

- [[Wordpress Building A Secure Site]] — Web Application Security
- [[OWASP Top 10- -9 Security Logging and Monitoring Failures and -10 Server-Side Request Forgery]] — Web Application Security
- [[Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security]] — Web Application Security
- [[Learning the OWASP Top 10]] — Web Application Security

---

[↑ Back to top](#)