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
created: 2026-05-03
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
  - [2021 OWASP Top 10](#2021-owasp-top-10)
  - [What you should know](#what-you-should-know)
- [**1. Injection**](#1-injection) (6 videos)
  - [What is injection?](#what-is-injection)
  - [Example #1: 2008 Heartland data breach](#example-1-2008-heartland-data-breach)
  - [Example #2: 2020 Accellion data breach](#example-2-2020-accellion-data-breach)
  - [Prevention technique #1: Prepared statements](#prevention-technique-1-prepared-statements)
  - [Prevention technique #2: Input validation](#prevention-technique-2-input-validation)
  - [Prevention technique #3: Escape special characters](#prevention-technique-3-escape-special-characters)
- [**2. Insecure Design**](#2-insecure-design) (6 videos)
  - [What is insecure design?](#what-is-insecure-design)
  - [Real-world example #1: G Suite accounts in 2018](#real-world-example-1-g-suite-accounts-in-2018)
  - [Real-world example #2: 2021 manufacturing data risk report](#real-world-example-2-2021-manufacturing-data-risk-report)
  - [Prevention technique #1: Threat modeling](#prevention-technique-1-threat-modeling)
  - [Prevention technique #2: Secure design patterns and principles](#prevention-technique-2-secure-design-patterns-and-principles)
  - [Prevention technique #3: Secure development lifecycle](#prevention-technique-3-secure-development-lifecycle)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [2021 OWASP Top 10](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/2021-owasp-top-10?u=76281980&t=0)** - [Narrator] We use web applications every day in both our personal and our professional lives. We want them to be safe and secure. The best way to secure web applications is to find and fix security vulnerabilities. [[OWASP]] stands for Open [[Web Application Security]] Project. And the Top 10 list is a resource for any and everyone who is involved in building web applications. It helps us to understand the most common types of security vulnerabilities. This course covers the third and fourth categories in the 2021 OWASP Top 10, injection and insecure design. I'll describe each one and we'll review a couple of real-world examples. I'll share what I know about how to prevent these types of vulnerabilities. I'm Caroline Wong, Chief Strategy Officer at Cobalt. I've worked in the [[Cybersecurity]] field since 2005. In my various roles as a security practitioner, a product manager, a management consultant, and a tech company executive, I've seen firsthand how security vulnerabilities get introduced into web applications. I've also learned how to identify and address them. Come and join me. Let's empower ourselves so that we can build more secure web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Web Application Security]] (1), [[Cybersecurity]] (1)
> **Env Vars:** owasp (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [What you should know](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-you-should-know?u=76281980&t=0)** - [Instructor] Here are a few things that may be helpful to know so that you can get the most out of this course. First, this course covers the third and fourth categories in the 2021 [[OWASP]] Top 10. I recommend watching my previous course that covers the first and second categories. You may also want to watch my OWASP basics course, which provides a high level overview of all of the items in the 2021 Top 10. This course is designed for anyone who is involved in building web applications and wants to make them more secure. This includes software developers, architects, product and project managers, and of course security professionals. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2)
> **Env Vars:** owasp (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 1. Injection

[↑ Back to Table of Contents](#table-of-contents)

#### [What is injection?](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=0)** - [Instructor] Injection is an attack on a web application that compromises information stored in an underlying database. This type of attack is very attractive to malicious hackers, because it allows them to view, change, or delete sensitive data. Injection attacks are potentially very high impact, because they can affect each of the three principles of the Information Security Triad. Confidentiality, Integrity, and Availability. If an attacker can access information in a database that they should not be able to access, that is a breach of confidentiality. If an attacker can change information in a database, this violates the integrity of that information. If an attacker can delete information in a database, this compromises the availability of that information as it will no longer be available to the legitimate users who need to use it. These outcomes are possible, because web apps need to interact with [[Databases]] and attackers can exploit vulnerabilities to direct that interaction and use it for their own malicious purposes. Ultimately, injection attacks occur when web apps don't have proper boundaries set up. Intentionally [[Secure Coding]] practices are required to protect the sensitive information in a database from being accessed or manipulated by untrusted user input. It's completely normal for a web app to interact with a database.
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-injection?u=76281980&t=93)** If I'm shopping on a website that I visit frequently, then I'll log in with my account, this allows me to easily access information about my previous orders, mailing addresses, and saved payment information. All of this information is accessed via the web app in a database. The thing about web apps and databases is that ultimately, the way they interact is all done through code, and code has this cool, but weird and potentially dangerous attribute, which is that a piece of code can represent data or it can represent an instruction. Hackers take advantage by putting code into web app fields. This tricks the web application into interpreting their user input as an instruction rather than is data. Instead of receiving safe data from user input and passing it to a database query, a web app that is vulnerable to injection allows the hacker to tell the database what to do. This is not good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Secure Coding]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (1), required to (1)
> **Speakers:** - [instructor] (1)

#### [Example #1: 2008 Heartland data breach](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=0)** - [Instructor] Heartland Payment Systems is a United States based payment processing provider. They offer services to hundreds of thousands of businesses and process tens of millions of transactions per day. In 2008, Heartland found out about a major security breach on their systems. Hundreds of millions of credit cards were compromised. Unfortunately, credit card breaches are not uncommon. Usually only the last four digits of a credit card number are captured in this type of attack. In the Heartland breach, full credit card numbers and all the additional information required to produce fake counterfeit cards were compromised. The attackers even took the data on the digital strip on the back of the cards. How did this happen? Malicious hackers exploited a vulnerability using a [[SQL]] injection attack. A blog on the Komodo website says the breach was discovered after Visa and MasterCard notified Heartland of suspicious transactions. It started with a SQL injection attack in late 2007 that compromised their database. The hackers then spent eight months working to access the payment processing system while avoiding detection by Heartland. They eventually installed a type of spyware program called a sniffer that captured the card data as payments were processed. Heartland suffered massive consequences as a result of the data breach. They paid hundreds of millions of dollars to compensate for fraudulent payments and even lost
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-1-2008-heartland-data-breach?u=76281980&t=93)** their PCI compliance status for several months. PCI, or the [[PCI DSS|Payment Card Industry data security standard]] is required by credit card providers like visa and MasterCard in order to process payments. The hacker behind the attack, Albert Gonzalez was eventually indicted for the breach and sentenced to 20 years in United States federal prison.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[PCI DSS|Payment card industry data security standard]] (1)
> **Env Vars:** sql (2), pci (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example #2: 2020 Accellion data breach](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=0)** - [Instructor] Kiteworks, formerly known as Accellion, is a security technology company that protects sensitive data on digital channels, like email, web [[Forms]], and APIs. More than 3000 global companies use their [[Microsoft Products|products]]. In 2020, Accellion rebranded as Kiteworks. That same year, several vulnerabilities in their legacy product were exploited by malicious attackers, impacting hundreds of customers. One of these vulnerabilities was [[SQL]] injection. Kiteworks has multiple product lines. Some of their products have old legacy software and new updated software. It's critically important for software manufacturers to continuously look for and address security vulnerabilities in all of their software, both old and new. This particular injection vulnerability was found and exploited in an old version of a Kiteworks product called the Accellion File Transfer Application. When the software was hacked, 75% of customers had moved on and were using the new software, but 25% were still using the old, vulnerable legacy software. Here's how a PurpleSec blog post describes the data breach. "The SQL injection vulnerability "allows an attacker to use a web shell "to run arbitrary commands and extract data." CISA, a United States government agency focused on [[Cybersecurity]] and infrastructure security, describes the exploit as follows.
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/example-2-2020-accellion-data-breach?u=76281980&t=95)** "One of the exploited vulnerabilities is a SQL injection "that allows an unauthenticated user "to run remote commands on targeted devices. "The web shell allows the attacker "to send commands to targeted devices, "exfiltrate data, and clean up logs." Hundreds of companies were affected by this breach, including an Australian government agency, a Canadian aviation company, multiple financial services companies, a law firm, a grocery store, an energy company, several academic institutions, and several healthcare organizations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft Products|Products]] (2), [[Forms]] (1), [[Cybersecurity]] (1)
> **Env Vars:** sql (3), cisa (1)
> **Definitions:** is a  (2), known as (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique #1: Prepared statements](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=0)** - [Instructor] If you want to get information out of a database, you've got a couple of different options. Consider a [[SQL]] database. One way is to execute a SQL statement directly. This approach is called the dynamic query and it is more vulnerable to injection attacks. Executing a SQL statement directly is kind of like baking a cake from scratch. You have more granular control, which also means you're more prone to making mistakes. It's less efficient than using a box of cake mix because you're personally collecting and mixing every single ingredient. The other way to get information out of a database is to use a prepared statement, also known as a parameterized query. This approach protects against injection attacks. You can think about using prepared statements kind of like using boxed cake mix. It's more efficient than baking a cake from scratch because most of the ingredients have already been put together. The [[OWASP]] SQL injection cheat sheet says, "Parameterized queries force the developer "to first define all the SQL code, "and then pass in each parameter to the query. "This coding style allows the database "to distinguish between code and data, "regardless of what user input is supplied." Different coding languages have different prepared statements.
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-prepared-statements?u=76281980&t=94)** OWASP provides specific recommendations for [[Java]] Enterprise Edition, .NET, [[PHP]], Hibernate and SQLite. Prepared statements work to prevent injection attacks because they separate the code that specifies the action or the instruction from the code that represents the data. This makes it harder for a malicious attacker to trick a web application into interpreting their user input as an instruction. We never want to make it easy for hackers to tell our web apps what to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[OWASP]] (2), [[Java]] (1), [[PHP]] (1)
> **Env Vars:** sql (5), owasp (2), net (1), php (1)
> **CLI Commands:** php (1), make (1)
> **Definitions:** is called (1), known as (1)
> **Analogies:** kind of like (2)
> **Speakers:** - [instructor] (1)

#### [Prevention technique #2: Input validation](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=0)** - [Instructor] Input validation is exactly what it sounds like. Web applications take input from users, that input needs to be validated to make sure that it's safe and not dangerous. This is kind of like when my kids go trick or treating on Halloween and they get candy from the neighborhood homes that we visit, in this analogy the treats are the user supplied input. As a responsible parent, I won't allow my kids to eat the candy before I inspect it and decide that it's safe for them to consume. In a sense, I am performing input validation before they are allowed to eat their Halloween treats. There are two different ways to perform input validation. One way is to define what is allowed, the other way is to define what is not allowed. A web application will validate user input by evaluating one or more attributes and determining if it matches what is expected by the application. These attributes might include data type, data size, data range, or data content. For example, a web app might expect to receive a calendar date as input. The application can be programmed to check to see if the user input is actually in calendar date format, consisting of a year, a month, and a day. If the input matches the required format, the data will be accepted, otherwise it should be rejected.
>
> **[1:38](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-input-validation?u=76281980&t=98)** I am a huge fan of [[OWASP]] cheat sheets and the one they have on input validation is particularly good. This resource describes different input validation strategies and provides information on how to implement input validation. It includes recommendations on using an allow list versus a block list, validating freeform text, and using regular expressions. It also discusses related topics such as client versus server side validation and content security policy. If you want to learn more about how to do input validation, be sure to check it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1)
> **Analogies:** kind of like (1), for example (1), such as (1)
> **CLI Commands:** make (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique #3: Escape special characters](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=0)** - [Instructor] Sometimes, when you're developing a web application, you want to use a prepared statement, but you can't. You might need to accommodate a performance requirement that doesn't allow it, or you might be retrofitting legacy code. If you must use a dynamic query, you can still take steps to prevent injection attacks by escaping special characters. A special character is any character on the keyboard that is not a letter or a number. These include percent, underscore, single quote, backslash and double quote. Special characters often have special meaning when they're being read and parsed by interpreters. Specifically, some special characters tell an interpreter whether code should be read as instruction or as data. When certain special characters are submitted via user input and interpreted as though they are supposed to have special meaning, that can result in an injection attack. In order to prevent injection attacks, we must escape special characters. Escaping a special character simply means telling the interpreter that it should be read as a normal character and not as a character with special meaning. The [[OWASP]] Cheat Sheet Series includes a cheat sheet on [[SQL]] injection prevention, which provides specific actionable detail on how to escape user input before it gets put into a database query. These recommendations are specific to each database type.
>
> **[1:37](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-escape-special-characters?u=76281980&t=97)** Here, you can find database-specific escaping details for Oracle, SQL [[MySQL]] and Db2. It's important to note that escaping special characters should be used as a last resort. It's much better to use parameterized queries and to perform input validation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[OWASP]] (1), [[MySQL]] (1)
> **Env Vars:** sql (2), owasp (1)
> **CLI Commands:** find (1), mysql (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Insecure Design

[↑ Back to Table of Contents](#table-of-contents)

#### [What is insecure design?](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=0)** - [Narrator] The fourth item in the 2021 [[OWASP]] top 10 is a new one, insecure design. Historically, most OWASP top 10 items have focused on technical coding errors. This one addresses security vulnerabilities at a higher level of abstraction, design and architecture flaws. OWASP says, "There's a difference between insecure design and insecure implementation." And this vulnerability category is about the former. Insecure design in web applications means that a problem with the design or the architecture creates a vulnerability which can be exploited by a malicious attacker. Sometimes these design decisions are made by mistake, like when a password recovery flow does not compare the response to a secret question with the known authenticated response. In other cases, this type of vulnerability happens because someone made a decision on purpose that results in an insecure design scenario, like when a decision is made not to encrypt highly sensitive data. Solving insecure design issues in web applications can be particularly challenging because the wrinkles to be ironed out don't only take place between fingers and a keyboard. These discussions involve a lot of different stakeholders whose responsibility it is to figure out
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/what-is-insecure-design?u=76281980&t=94)** how a web application is supposed to work, product teams, engineering teams, go-to-market teams, and hopefully security teams. Security is an emergent property and solving the problem of insecure design requires getting the right people to engage throughout the process. Unlike other items in the OWASP top 10, which can be pinned down to one or maybe two different phases in the [[Software Development]] lifecycle, insecure design has implications across each and every single one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[Software Development]] (1)
> **Env Vars:** owasp (4)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### [Real-world example #1: G Suite accounts in 2018](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=0)** - [Narrator] In 2018, security researcher Cameron Vincent discovered an insecure design vulnerability in [[Google]] Workspace, known at the time as Google G Suite. Vincent figured out a way for anyone to add a new super user to someone else's G Suite account. Google Workspace includes Gmail, Google Calendar, and [[Google Drive]]. I don't know about you, but I definitely don't want strangers accessing my email, calendar, and files. Here's how Vincent describes the role of a G Suite super admin in his blog post about the vulnerability. "They are exactly what they sound like as they have super admin privileges over everything. They can create groups, manage users, and change passwords. It is really important to not have that many super admins in a G Suite org as the more super admins you have, the higher chances you have of a super admin account being compromised." The insecure design vulnerability that Vincent found was an extremely big deal. Anyone being able to add themselves to someone else's G Suite organization and make themselves a super admin no less would be able to access a treasure trove of private information and potentially cause a great deal of damage. Vincent's blog post further explains the technical details of how to manipulate requests during the add a new user
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-1-g-suite-accounts-in-2018?u=76281980&t=96)** and pay for that new user workflows which he demonstrates using the domain and ID of the victim's G Suite organization. He submitted the vulnerability finding to Google's Vulnerability Reward Program and the vulnerability was fixed. He did not publish his public blog post which explains exactly how to exploit the vulnerability until a few years later, long after the fix had been implemented.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (5), [[Google Drive]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Real-world example #2: 2021 manufacturing data risk report](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=0)** - [Presenter] A data protection company called Varonis released several research reports in 2021 highlighting data risk [[Statistics]] in different industry sectors. These are unfortunately textbook perfect examples of insecure design. I'm going to describe some of the key findings from this research on the financial services, manufacturing, and healthcare sectors. The financial services data-risk report contains data from 4 billion files across 50 different organizations. On average, a new employee starting at a financial services organization has access to 11 million files, or 13% of the overall data held by the company. At larger organizations, this number goes up to 20 million files. Every single employee has the ability to view, copy, move, change, or delete the data in these files. 20% of these files contain sensitive information. The manufacturing data-risk report presents statistics from a similar data set. The average worker was found to have access to more than 5 million documents on their very first day of work. The report also revealed more than 1,000 open accounts which were no longer actually being used. Every single one of these inactive accounts, until closed, represents an opportunity for a hacker to compromise the account
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=95)** and gain further access to data inside the organization. The healthcare report contains data from about 3 billion files across more than 50 different healthcare organizations. These include hospitals, pharmaceutical companies, and biotech companies. Similar to the findings in the financial services and manufacturing industry reports, the healthcare research discovered that the average healthcare worker has access to more than 30,000 sensitive files on their first day of work. Nearly 20% of all files are accessible to each and every single employee. One in 10 of these files contains sensitive information. And two thirds of the companies surveyed have hundreds of accounts with passwords that never expire. This is problematic because without multifactor authentication hackers can easily guess passwords and compromise accounts. The insecure design vulnerabilities discussed in the Varonis research reports do not exist because of implementation mistakes by software developers. They're not exploitable because of technical loopholes in programming languages. These exist because of the way that access to information has been designed in these organizations. Every organization has a choice and a responsibility when it comes to determining how much information any given employee can access. Remember that a failure to intentionally design
>
> **[3:13](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/real-world-example-2-2021-manufacturing-data-risk-report?u=76281980&t=193)** is by default a design decision in itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2)
> **Analogies:** similar to (1)
> **Speakers:** - [presenter] (1)

#### [Prevention technique #1: Threat modeling](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=0)** - [Narrator] [[Threat Modeling]] is a fancy term that [[Cybersecurity]] people use to describe the process of thinking through any and everything that could possibly go wrong. And then implementing a plan to prevent the worst from happening. While there are frameworks for how to structure a threat modeling practice, the process is inevitably subjective. Every system is unique in one way or another and therefore no two threat models will be exactly the same. My friend and colleague Adam Shostack says that the easiest way to get started with threat modeling is by asking the following four questions. Number one, what are we working on? Number two, what can go wrong? Number three, what are we going to do? Number four, did we do a good job? There are many different models for how to do threat modeling. Some of them have funny names. These include STRIDE, PASTA, TRIKE, VAST, DREAD and OCTAVE. As an example, I'm going to briefly describe the steps involved in using the STRIDE model. Each letter in the [[Microsoft Word|word]] STRIDE stands for a type of threat. S stands for spoofing. Spoofing is when a malicious person pretends to be someone that is known and trusted. T is for tampering. Tampering occurs when a malicious person can make an unauthorized change to data.
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-1-threat-modeling?u=76281980&t=95)** R stands for repudiation. Repudiation describes a situation where a hacker does something malicious but they've been able to cover their tracks so that their bad actions cannot be tracked or linked to them. I is for information disclosure. Information disclosure simply means that information can be accessed by someone who is not supposed to have access to it. D stands for denial of service. A denial of service attack takes down a critical service so that it is unavailable to legitimate users. It affects the availability of an application so it doesn't work and cannot be used as intended. E is for elevation of privilege. Elevation of privilege means that a user has the ability to perform actions beyond what their role is supposed to do. For example, if a regular user can perform administrative functions that's an elevation of privilege. If you are interested in learning more about threat modeling, I highly recommend that you check out Adam Shostack's linked in learning courses. He is my favorite subject matter expert on this topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (5), [[Cybersecurity]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** stride (3), pasta (1), trike (1), vast (1), dread (1)
> **Definitions:** stands for (4), is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Prevention technique #2: Secure design patterns and principles](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=0)** - [Instructor] When an engineer develops a secure way to do something, secure [[Design Patterns]] and principles allow their colleagues to basically copy and paste their code so that they can reuse the same method. You can think about it like not having to "reinvent the wheel" every time you want to use a function and do it securely. There are many different opportunities to use secure design patterns when building web applications. These include the following capabilities, authentication, role management, key management, logging, [[Cryptography]], protocols, defined configuration templates. Secure design patterns and principles applied both at the code level as well as at the design level. Instead of starting from scratch every time one of these capabilities is needed, a [[Software Development]] team can leverage an already known secure version of the capability that's already been built. This is described well in the security features and design domain of the BSIMM Framework. BSIMM stands for building security in maturity model. Here's what it says. "Each mobile and cloud platform will likely need their own means by which users are authenticated and authorized, secrets are managed, and user actions are centrally logged and monitored. Project teams benefit from implementations that come pre-approved."
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-2-secure-design-patterns-and-principles?u=76281980&t=96)** It's not enough however, just to have a list of secure features. People need to know about it, and they need to actually use it. It's critical to have an effective place to share this information with software architects and developers. Important conversations on these topics are most likely to take place at an architectural review board, or other design committee meeting. Ultimately, if a software security group has engaging and frequent conversations with software architects and developers, folks are likely to know about and use secure design patterns and principles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (4), [[Cryptography]] (1), [[Software Development]] (1)
> **Env Vars:** bsimm (2)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique #3: Secure development lifecycle](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=0)** - [Narrator] The only truly effective way to prevent insecure design for web apps is to integrate security activities into each phase of the [[Software Development]] life cycle. This is because every phase is an opportunity to introduce insecure design and it's much more efficient to remove vulnerabilities as soon as they are identified or even better to prevent them from being introduced in the first place. Broadly speaking, the software development life cycle consists of the following five phases, each of which ideally includes appropriate security activities. Requirements, design, development, testing, operations and maintenance. During the requirements phase of developing a web app, ideally, a security perspective is invited to the table. This allows for feedback and input, particularly on workflows and items, which might be intended as features but could also introduce security flaws. When security is engaged at this earliest stage, they can apply misuse and abuse thinking to identify potential insecure design possibilities. During the design phase of web app development, the best security activity to accompany architecture discussions is [[Threat Modeling]]. Threat modeling involves analyzing a design to identify security flaws.
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=96)** This phase may involve the meeting of a formal group like an architecture review board, which goes over the key design decisions that will determine how the web application will be built. During the development phase of web app development, the typical security activity, which accompanies writing code is coder review. [[Code Review]] tends to be more about bugs than about flaws. I generally think about security bugs as coding errors and flaws as logic and design problems. But in any case, a security vulnerability is a vulnerability. The most important thing is that it's identified and addressed. The testing phase of web app development is particularly critical when it comes to identifying insecure design. [[Security Testing]] must look beyond positive path, feature-based, check the box style testing. It must evaluate the security of a system as a whole and not only as individual parts. Security is an emergent attribute that requires both automatic and [[Manual Testing]] in order to discover design flaws. Insecure design, in particular, can only be found by humans. Manual pen testing is an important activity for this phase. Finally, operations and maintenance requires periodic security testing, both automated and manual.
>
> **[3:10](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/prevention-technique-3-secure-development-lifecycle?u=76281980&t=190)** This ensures that insecure design is not introduced as the web application evolves and further develops over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (2), [[Threat Modeling]] (2), [[Security Testing]] (2), [[Code Review]] (1), [[Manual Testing]] (1)
> **Definitions:** is an  (3), is a  (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-3-injection-and-4-insecure-design/next-steps?u=76281980&t=0)** - [Instructor] And there you have it. Items number three and four in the [[OWASP]] Top 10. Both injection and insecure design have been key information security concepts for decades. The problems that lead to data breaches are known, and we must continue to find, fix and prevent these security vulnerabilities. We have an opportunity to build more secure web applications in the future. I hope you'll join me in my next course that covers the fifth and sixth vulnerability categories, security misconfiguration, and vulnerable and outdated components. Similar to this course, we'll learn about each vulnerability category, dive into real life examples and discuss prevention techniques. Let's keep learning together. There's more to explore in the 2021 OWASP Top 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2)
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