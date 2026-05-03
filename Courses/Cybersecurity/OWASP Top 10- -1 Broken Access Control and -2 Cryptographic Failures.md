---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: owasp-top-10-1-broken-access-control-and-2-cryptographic-failures
url: "https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures"
duration_minutes: 29
duration: 29m
level: Intermediate
updated: 7/1/2022
learners: 177777
skills:
  - OWASP
  - Application Security
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGN7PmUw7HXOg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1656529950285?e=2147483647&amp;v=beta&amp;t=VV3yJNSfy_7slewYI3rTef3tqLprrwNR3bad4PjlPA4"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Master the OWASP Top 10]]'
prev_courses:
  - '[[Learning the OWASP Top 10]]'
next_courses:
  - '[[OWASP Top 10- -3 Injection and -4 Insecure Design]]'
path_nav: '[{"path":"Master the OWASP Top 10","position":2,"total":6,"prev":"Learning the OWASP Top 10","next":"OWASP Top 10- -3 Injection and -4 Insecure Design"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/owasp
  - skill/application-security
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/OWASP%20Top%2010-%20-1%20Broken%20Access%20Control%20and%20-2%20Cryptographic%20Failures.md)

![OWASP Top 10: #1 Broken Access Control and #2 Cryptographic Failures](https://media.licdn.com/dms/image/v2/C560DAQGN7PmUw7HXOg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1656529950285?e=2147483647&amp;v=beta&amp;t=VV3yJNSfy_7slewYI3rTef3tqLprrwNR3bad4PjlPA4)

# OWASP Top 10: #1 Broken Access Control and #2 Cryptographic Failures

> No one is immune to security vulnerabilities when it comes to web applications. We all live with the looming possibility that something could go wrong in any instant. That’s why the Open Web Application Security Project (OWASP) was formed to provide key resources that educate the public about how to navigate risk on the web. One such resource is the OWASP Top 10, a list of the ten biggest applicat

> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures) | 29m | Intermediate | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [OWASP Top 10](#owasp-top-10)
- [**1. Broken Access Control**](#1-broken-access-control) (6 videos)
  - [What is broken access control?](#what-is-broken-access-control)
  - [Example 1: 2021 Facebook broken access control vulnerability](#example-1-2021-facebook-broken-access-control-vulnerability)
  - [Example 2: 2021 personal data travel breach](#example-2-2021-personal-data-travel-breach)
  - [Prevention techniques: Least privilege](#prevention-techniques-least-privilege)
  - [Prevention techniques: Record ownership and logging](#prevention-techniques-record-ownership-and-logging)
  - [Prevention techniques: Functional access control testing](#prevention-techniques-functional-access-control-testing)
- [**2. Cryptographic Failure**](#2-cryptographic-failure) (6 videos)
  - [What is cryptographic failure?](#what-is-cryptographic-failure)
  - [Example 1: 2021 GoDaddy plaintext passwords](#example-1-2021-godaddy-plaintext-passwords)
  - [Example 2: Using a broken or risky cryptographic algorithm](#example-2-using-a-broken-or-risky-cryptographic-algorithm)
  - [Prevention techniques: Data classification](#prevention-techniques-data-classification)
  - [Prevention techniques: Proper key management](#prevention-techniques-proper-key-management)
  - [Prevention techniques: Secure protocols](#prevention-techniques-secure-protocols)
- [**Conclusion**](#conclusion) (1 videos)
  - [OWASP Top 10 keep learning](#owasp-top-10-keep-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [OWASP Top 10](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/owasp-top-10?u=76281980&t=0)** - [Caroline] I use web applications every day in my personal and my professional life. I bet you do too. We all want the web applications that we use to be safe and secure. A great way to secure web applications is to find and fix security vulnerabilities. [[OWASP]] stands for, Open [[Web Application Security]] Project, and the Top 10 list is an educational resource that is intended to raise awareness of the most common vulnerability types found in web applications. The process of updating the list is both art and science. [[Application Security]] practitioners from around the world provide data sets to the working group that writes and publishes the Top 10. I'm Caroline Wong, and I've worked in the [[Cybersecurity]] field since 2005. I've held leadership roles as a practitioner, a product manager, a management consultant, and an exec at a technology startup. I've seen firsthand how security vulnerabilities get introduced into web applications, and how they can be identified and addressed. This course covers the first two categories in the 2021 OWASP Top 10. Broken access control and cryptographic failure. I'll describe each one, and will review a couple of real world examples. I'll share what I know about how to prevent these types of vulnerabilities from occurring. Come on and join me. Let's empower ourselves so that we can build more secure web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Web Application Security]] (1), [[Application Security]] (1), [[Cybersecurity]] (1)
> **Env Vars:** owasp (2)
> **Definitions:** stands for (1), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [caroline] (1)


### 1. Broken Access Control

[↑ Back to Table of Contents](#table-of-contents)

#### [What is broken access control?](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/what-is-broken-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/what-is-broken-access-control?u=76281980&t=0)** - [Presenter] Sometimes [[Cybersecurity]] folks use complicated terms like XML external entity injection. Try saying that three times fast. Occasionally, cybersecurity terms are straightforward and make intuitive sense. Luckily for us, that is the case with the first item in the 2021 [[OWASP]] Top 10, broken access control. We all experience the effects of access control in both our physical and our digital lives. Permission is a key term having to do with access control. And this is a concept that we're already familiar with. When I go to a restaurant, I have permission to access the dining room and the restrooms. I'm not supposed to go into the kitchen or touch the cash register. Broken access control happens when permissions are not specified or properly enforced. In web applications, this occurs when a user has privileges that are beyond what are intended for their particular role. If a customer has the same access as a vendor, for example, or if an end user has the same access as an admin account. The impact of broken access control might be an unintended change to the integrity of an asset. This is kind of like if a diner at a restaurant walks into the kitchen, starts cooking and changes the ingredients in a recipe. Alternatively, the impact of broken access control might be a failure to protect the confidentiality of information, such as if a patient in a medical [[Microsoft Office|office]]
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/what-is-broken-access-control?u=76281980&t=96)** is somehow able to access the medical history of another patient. If I have a customer account on an [[E-Commerce]] site, and I can access someone else's account information, that's broken access control. Broken access control can also lead to a breach, which results in theft of a stolen asset, like if a customer steals money out of the cash register of a clothing store or goes into the back room and steals a jacket or a pair of shoes. When it comes to web applications, data breaches occur because of broken access control. Simply put, if someone has access to information that their role is not supposed to have access to, they can manipulate, change or steal that data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (2), [[OWASP]] (1), [[Microsoft Office|Office]] (1), [[E-Commerce]] (1)
> **Analogies:** for example (1), kind of like (1), such as (1)
> **Env Vars:** xml (1), owasp (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [presenter] (1)

#### [Example 1: 2021 Facebook broken access control vulnerability](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-1-2021-facebook-broken-access-control-vulnerability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-1-2021-facebook-broken-access-control-vulnerability?u=76281980&t=0)** - [Instructor] In 2021, security researcher Laxman Muthiyah reported a broken access control vulnerability to [[Facebook]]. He received $2,500 compensation as part of their Bug Bounty Program. While the average payment for a valid bug is around $250 USD, there are some security researchers who have received six figure payments for their vulnerability reporting. Muthiyah describes the situation on his blog, The Zero Hack. Facebook Business Manager allows small and large businesses to organize and manage a company account on Facebook. As the world's third most visited website with an advertising audience of more than 2 billion people, it makes perfect sense that Facebook would make a portal to allow their users to manage their business accounts. Even a small business is likely to have more than one person behind the scenes. Facebook Business Manager allows adding roles that include employee, admin, finance analyst and finance editor. A security vulnerability in Facebook Business Manager allowed a third-party application to hack a Facebook account page with limited permissions. As a result, the victim would permanently lose admin access to the page. Separately, Facebook's API also allows third-party applications to connect with user accounts in order to perform actions like accessing your photos or posting on your behalf. Personally, I have allowed third-party applications,
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-1-2021-facebook-broken-access-control-vulnerability?u=76281980&t=93)** like photo printing software, to create books of my Facebook photos. I've also connected to donation websites using Facebook and allowed them to post a status on my behalf to further promote their cause. The particular broken access control vulnerability, which was identified and reported by Muthiyah, would allow a third-party application to add a new page admin. This is an activity which should only be done by existing admins and not by third-party applications or total strangers. Once a new admin was added, the attacker could also remove the legitimate admins from the Facebook Business Manager, resulting in them not being able to manage their Facebook business presence, employees or advertisements. When Muthiyah reported this vulnerability to Facebook, they took it seriously and fixed it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (13)
> **Env Vars:** usd (1), api (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Example 2: 2021 personal data travel breach](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-2-2021-personal-data-travel-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-2-2021-personal-data-travel-breach?u=76281980&t=0)** - [Narrator] In 2021, security researcher Bob Diachenko discovered a database containing personal information of more than 100 million international travelers to Thailand on the internet. This data was available in plain text, not encrypted, and it was not protected by a password. Exposed data included names, passport numbers, dates of travel and residency status of individuals who had traveled to Thailand between the years of 2011 and 2021. Although there was no financial impact to these individuals, this breach did violate their [[Privacy]], and the confidentiality of their personal information. The only people who should have had access to this information were the travelers themselves, the airlines, and the Thai authorities, but due to a lack of proper access control, it was instead accessible by anyone on the public-facing internet. When Diachenko reported this incident to the Thai authorities, they took action immediately, and addressed the broken access control vulnerability. The incident was resolved in a matter of days.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (1)
> **Speakers:** - [narrator] (1)

#### [Prevention techniques: Least privilege](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-least-privilege?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-least-privilege?u=76281980&t=0)** - [Instructor] Least privilege is a well-established, classic information security principle that can be applied to create strong access controls. The idea is simply that access should be restricted to the minimum required to perform work. Access should be denied by default. Access expectations for every role should start with zero and be added granularly depending on what is necessary for that specific role. A common analogy that can be used to describe the principle of least privilege is key cards at a hotel. If I am a hotel guest my key card should give me access to public spaces and my individual room. If I'm a member of the staff who performs maintenance or cleaning then my key card should give me access to public spaces, staff-only spaces, where equipment is stored, and the rooms where I need to do my work. If maintenance and cleaning staff have key cards that can access all guest rooms in a hotel that is not least privilege. One way to implement least privilege might be to grant access to the specific rooms that are scheduled for cleaning or maintenance each day. These might stay the same or change from day to day, but it is not necessary for these staff roles to have access to all the guest rooms every day. Practically speaking, [[Web Application Security]] developers should implement the principle of least privilege when it comes to access control for accounts that are used by humans as well as those used by machines. In other words, service accounts. One example that we can look at is how
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-least-privilege?u=76281980&t=93)** [[Google]] Secret Manager limits access to secrets like [[Twilio]] public keys. Twilio is a developer API company, and their security and enterprise editions support public key client validation. Different roles using Google Secret Manager will need to perform work such as managing secrets, auditing secrets, rotating secrets, and accessing secrets. Secret Manager offers five granular roles, which were designed with a principle of least privilege in mind. These include an admin role which has full access, a viewer role which has access to view [[Metadata]] but not the details, an accessor role, which has access to the secret workloads so that the secret can be used by these accounts, whether human or application, and an adder role, which can add new versions to existing secrets but does not have access to secret payloads. There is a key technique that you can use in order to implement the principle of least privilege when managing access control. Allow access based on the most granular control possible. This means that, to the extent that you can, get as specific about which data, what kind of access, and who, what role, gets access to that data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Twilio]] (2), [[Web Application Security]] (1), [[Metadata]] (1)
> **Definitions:** is a  (3), in other words (1), means that (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Prevention techniques: Record ownership and logging](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-record-ownership-and-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-record-ownership-and-logging?u=76281980&t=0)** - [Instructor] A record is a single unit of data that should be classified and protected. You can think of a record as all of the fields that are associated with a specific object. For example, a customer record in the database of an eCommerce application might include a customer ID, customer name, address, phone number, and payment information. Typical ways for a user to access a record include read, write, modify, and delete. The record ownership model of access control requires that in order to access a record, a user must be authenticated to the application and given access to that record. Another phrase used to describe this concept is personal access control because access is granted based on record rather than on fields within an object. In the example of customer records in the database of an eCommerce app, record level access control gives permission to users to access the data by record, rather than by field. This allows a specific user to access the records of specific customers, rather than all of the customer phone numbers in the whole database which would be an example of field level record ownership. Ideally, access control is granted at the most granular level, which would be restricted by both specific fields as well as specific records. A less secure way to approach access control would be to allow any user to read, edit, or delete any and all records instead of allowing access to individual records for individual users. A related activity that complements record ownership for access control is logging.
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-record-ownership-and-logging?u=76281980&t=94)** Logging is simply keeping track of certain activities. In this case, which user accounts access which records and what type of access is requested. If a user accesses, deletes, or changes a record, that goes into the log. The nice thing about having an access control log is that you can look at it and see who accessed what. This includes both successful and unsuccessful attempts. If you see a user trying to access information that they should not have access to, the log will provide you with the information to look into it further. Monitoring access control logs can be a great way to detect security incidents. Looking at the past patterns of how different user accounts access data and comparing that to recent activity to determine if there have been any anomalies can alert a security team to possible hacking activity by a malicious actor.

> [!info]- Semantic Content
>
> **Code Identifiers:** ecommerce (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Prevention techniques: Functional access control testing](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-functional-access-control-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-functional-access-control-testing?u=76281980&t=0)** - [Instructor] Access control is one example of a typical information security control. There's a policy that needs to be decided on, [[Data Classification]], that policy needs to be put into practice during [[Software Development]], and then the software needs to be tested to determine if it's actually working according to the policy as intended. Each of these steps involved in making access control intentional and effective is typically performed by different roles throughout an organization. Every step is equally critical and required in order to result in the desired outcome of effective access control. If one of these steps is skipped, then you get broken access control. Security leaders typically involve key stakeholders, such as engineering management, to define a data classification policy. What types of data need to be protected, and how? Software developers write application code in a way such that it should reflect the guidance provided in the data classification policy. [[Quality Assurance]] engineers test the software once it is developed to ensure that it behaves as expected in accordance with the development requirements. QA performs a particularly important role when it comes to testing for [[Cybersecurity]] because it's necessary to test not only the positive expected path, but also to see what happens when unexpected actions are taken. These tests can and should be crafted purposefully to identify opportunities for misuse and abuse cases. In addition to the [[OWASP]] Top 10,
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-functional-access-control-testing?u=76281980&t=94)** OWASP also produces a web testing guide. This guide includes a section on authorization testing, which is another way to say access control testing. Here are some of the actions that OWASP recommends that a tester verify in order to prevent broken access control. Can sensitive data be accessed if a user is not authenticated? Can sensitive data be accessed after a user has logged out? Can sensitive data, which should only be accessed by privileged roles, be accessed by non-privileged roles? Can admin functions be accessed if the tester is logged in as a non-administrative user? Can admin functions be accessed if the tester is logged in as any user which should not be able to access admin functions? These test cases can and should be used by both developers as well as QA engineers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Classification]] (3), [[OWASP]] (3), [[Software Development]] (1), [[Quality Assurance]] (1), [[Cybersecurity]] (1)
> **Env Vars:** owasp (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Cryptographic Failure

[↑ Back to Table of Contents](#table-of-contents)

#### [What is cryptographic failure?](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/what-is-cryptographic-failure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/what-is-cryptographic-failure?u=76281980&t=0)** - [Instructor] Cryptographic failure happens when [[Cryptography]] doesn't work the way it's supposed to. What is cryptography? People have used cryptography for centuries to protect their private messages from being read by people who are not supposed to read it. Julius Caesar, for example, encrypted messages to protect them from being read by opposing military forces. He used what is called a substitution cipher to transform plain text, or a regular message that can be easily read by anyone, into ciphertext, or a scrambled message, that can only be read by someone who has the key to transform it back into plain text. For example, you could use a substitution cipher of shift 3 to transform the plain text Rome, R-O-M-E, into the cipher text U-R-P-H. This is done by taking each original plain text character and replacing it with the letter in the alphabet that is three letters after the original letter. This worked extremely well in a time before computers and before most people were literate. In today's modern world, with literacy rates and computer processing power, these ancient encryption methods are easy to crack. Today, we have modern encryption [[Algorithms]] that are strong and protect data well, if they are used correctly. If data that needs to be protected is not encrypted, or if encryption is implemented poorly, then confidential data can be accessed and will no longer be kept private
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/what-is-cryptographic-failure?u=76281980&t=92)** between the parties that are supposed to access it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (3), [[Algorithms]] (1)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Example 1: 2021 GoDaddy plaintext passwords](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-1-2021-godaddy-plaintext-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-1-2021-godaddy-plaintext-passwords?u=76281980&t=0)** - [Instructor] In November 2021, the web hosting provider GoDaddy filed a report with the SEC describing a data breach that included plaintext passwords. GoDaddy was using a protocol called SFTP, Secure File Transfer Protocol, to transfer large files over the internet for their [[WordPress]] sites. WordPress is a tool that helps users to create blogs and websites. SFTP can be used to help with troubleshooting, changing file permissions, managing configuration files and creating different templates and styles. Whenever someone uses SFTP, they can choose how to do authentication. Authentication is a fancy [[Microsoft Word|word]] for logging in so that you can use a service. Some authentication options are more secure than others. One authentication option, which is less secure is passwords, particularly if the passwords are stores in plaintext and not encrypted properly. Unfortunately, it seems as though GoDaddy was using this less secure method. The SEC filing indicates that during the period from September 6th, 2021 to November 17th, 2021, the SFTP and database usernames and passwords of active customers were accessible to the hacker. This means that for about a month and a half, attackers may have been able to authenticate to SFTP and access files, change configurations, or change file permissions for WordPress sites. Upon discovery of the breach,
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-1-2021-godaddy-plaintext-passwords?u=76281980&t=92)** GoDaddy immediately took action to reset the SFTP passwords of all the impacted sites. In the six months that followed the security fix, GoDaddy's stock price increased by 25%.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[Microsoft Word|Word]] (1)
> **Env Vars:** sftp (6), sec (2)
> **Definitions:** is a  (2), means that (1)
> **Speakers:** - [instructor] (1)

#### [Example 2: Using a broken or risky cryptographic algorithm](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-2-using-a-broken-or-risky-cryptographic-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-2-using-a-broken-or-risky-cryptographic-algorithm?u=76281980&t=0)** - [Instructor] NVD is the National Vulnerability Database. A repository of vulnerability information managed by the US Government and publicly accessible to all. It provides some very interesting data including NVD Visualizations, a graphic that is generated by calculating the frequency of words that are part of the vulnerability summary descriptions. If you're new to using NVD, the NVD dashboard is a great place to start. It provides a variety of fascinating [[Statistics]] in both table and chart format. When I run a search on NVD using the terms Broken or Risky Cryptographic Algorithm, I get nine results which were published between 2017 and 2021. These vulnerabilities were found to be present in a mail server, medical equipment software, an email forwarding service, electrical equipment, two kinds of security software, and video conference software. It's likely that each of these vulnerabilities involved the use of an out-of-date cryptographic algorithm, such as MD5 or SHA1. Here's what Miter, an American nonprofit public interest organization with a respected [[Cybersecurity]] arm, has to say about various cryptographic [[Algorithms]]. "Cryptographic algorithms are the methods by which data is scrambled. There are a small number of well understood and heavily studied algorithms that should be used by most applications. It is quite difficult to produce a secure algorithm and even high profile algorithms
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/example-2-using-a-broken-or-risky-cryptographic-algorithm?u=76281980&t=94)** by accomplished cryptographic experts have been broken. Since the state of [[Cryptography]] advances so rapidly, it is common for an algorithm to be considered unsafe even if it was once thought to be strong. This can happen when new attacks against the algorithm are discovered or if computing power increases so much that the cryptographic algorithm no longer provides the amount of protection that was originally thought."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[Statistics]] (1), [[Cybersecurity]] (1), [[Cryptography]] (1)
> **Env Vars:** nvd (5), md5 (1), sha1 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Prevention techniques: Data classification](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-data-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-data-classification?u=76281980&t=0)** - [Instructor] The first thing that needs to be done in order to prevent cryptographic failure is to figure out what needs to be encrypted in the first place, make a purposeful decision to encrypt sensitive data and put a plan together to encrypt that data properly. Modern organizations with digital infrastructure have a lot of data, not all of it needs to be encrypted. Consider a retailer with an online presence, they might have a web application, an API, and a mobile app. These applications store and transfer product data like SKUs, and photos, and prices, customer data like login information and contact information, and payment data like credit card information. Someone needs to decide what information should be encrypted and what information does not need to be encrypted. If I [[Zoom]] out a bit, a higher level version of this exercise is called [[Data Classification]]. Simply put, data classification means defining different categories of data and identifying the appropriate protections for each category. Encryption is one example of a protection activity for very sensitive data. A typical data classification scheme might have three categories, confidential, sensitive, and public, confidential data is considered high risk if compromised, sensitive data is considered medium risk, and public data is considered low or no risk. Sometimes data classification is driven by [[Regulatory Compliance]] that applies to a particular region or to a particular industry. The EU's General Data Protection Regulation
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-data-classification?u=76281980&t=95)** or GDPR specifies seven principles of data protection that must be applied to personal data of EU citizens. The Health Insurance Portability and [[Accountability]] Act or HIPAA is a United States federal statute that protects all individually identifiable health information. The California Consumer [[Privacy]] Act or CCPA specify safeguards that apply to personal information of California residents, defined as name plus social security number, driver's license or state ID, financial account number, username or email address in combination with password or a security question and answer, and health insurance information. Every outcome in [[Cybersecurity]] is a result of a business process. The first prevention technique is deciding which data should be encrypted in the first place. This often stems from a data classification policy which involves key stakeholders deciding how to categorize and protect different types of data. What are the steps involved in creating a data classification policy? First, determine what types of data your organization collects, creates, stores, and provides, next review the laws, standards and regulations that apply to those data types. Use the prescriptive directions in these compliance regimes to categorize regulated data. If you put regulated data into its own category or categories, this will make it easier to treat it appropriately. These regulated data categories are likely to be your most restricted and sensitive data types. You can also identify what types
>
> **[3:09](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-data-classification?u=76281980&t=189)** of data are public and okay for anyone to view, this is likely to be your least restricted and sensitive data type. At this point, you probably have two or more categories of data. For each data category, list the types of data which are included in that category and the security requirements that apply to those data types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Classification]] (5), [[Zoom]] (1), [[Regulatory Compliance]] (1), [[Accountability]] (1), [[Privacy]] (1)
> **Env Vars:** api (1), gdpr (1), hipaa (1), ccpa (1)
> **Definitions:** is a  (2), is called (1), defined as (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Prevention techniques: Proper key management](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-proper-key-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-proper-key-management?u=76281980&t=0)** - [Instructor] Perhaps the most important security control that is used to prevent cryptographic failure is proper key management. A key is used to decrypt data. If you have encrypted data and the right key, then you can use that key to turn the cipher text into plain text. It's very similar conceptually to having the physical key to a lockbox. If you have the lockbox and the right key, you can use the key to open the box and access whatever is inside. Just as you need to protect the key to your lockbox if you don't want anyone else to access the contents inside, you need to properly protect cryptographic keys as well. Many modern [[Databases]] support encryption key management, which gives you a choice as to where to store your encryption keys. Your first option is to use local storage for the encryption key. In this case, the key is on the same server as the data. You're basically keeping the encryption key right next to the data. This option may be convenient and easy, but it's often not the most secure choice. Think about it. It's probably not the best idea to store your house key right next to your front door, or your car key right next to your vehicle. Your second option is to store the key away from the data and not on the same server. It may seem obvious that this is best practice. Instead of keeping your house and car keys right next to the things that they unlock, you could keep them in a private and secure location. Encryption key management systems
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-proper-key-management?u=76281980&t=94)** also help to perform a variety of activities that are intended to prevent cryptographic failure. These include access control, logging, backups, and rotation. Access control and logging for keys simply means managing and keeping track of which individuals and which applications can access the keys. Keys are often considered to be critical infrastructure, since without them, encrypted data cannot be interpreted. Just as it is important to create backups for all critical data, it's important for keys to be backed up too. Keys need to be rotated on a regular basis, just like passwords should be changed periodically. This reduces the impact of compromised data if a malicious person does manage to get ahold of a secret key.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Best Practices:** the key is (1), best practice (1)
> **UI Navigation:** open the (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Prevention techniques: Secure protocols](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-secure-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-secure-protocols?u=76281980&t=0)** - [Instructor] Prevention technique number three for avoiding cryptographic failure is to use secure protocols. Here I'm using the term protocol broadly to refer to encryption [[Algorithms]] and hash functions. A key concept is the difference between encryption and hashing. Encryption is a two-way function, meaning that plaintext can be encrypted into ciphertext and ciphertext can be decrypted back into plaintext. Hashing is a one-way function, meaning that once plaintext is converted into a hash, you can't take that hash and get the plaintext back from it. Another difference between encryption and hashing is that when you use a hash function, no matter what you put into it, the output will always be the same size. In contrast, when you put different plaintext into an encryption algorithm, the resulting ciphertext might be a different size. It is incorrect to use a hash function such as MD5 or SHA1 and call it encryption. If you want the security benefits of encryption and you're using a hash function instead of an encryption algorithm, you're not going to get the results you want. One of the reasons why hashing can be inferior to encryption is because hash functions are vulnerable to brute force attacks. Consider a database of hashed passwords. It is possible and actually relatively easy to guess the plaintext of a password, run it through the same hash function, and simply see if it matches an entry in the database. If there's a match, then you know the password. Computer processing power is so accessible
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/prevention-techniques-secure-protocols?u=76281980&t=95)** and affordable these days that they can run through 10,000 to 1 billion passwords per second, depending on password length and complexity requirements. Encryption algorithms have a drawback too. If an attacker has an encryption key, then they can use it to convert ciphertext back into plaintext. So what's a responsible [[Cybersecurity]] or technology professional to do? One of the best approaches is to use both encryption and hashing. Dropbox is an example of a company that does this well. First they take your password and run it through a hash function. Then they take the result and hash it again. But they also add a salt, a random number, and slow down the hashing function. Finally, they take that result and they encrypt it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Cybersecurity]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** md5 (1), sha1 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [OWASP Top 10 keep learning](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/owasp-top-10-keep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-1-broken-access-control-and-2-cryptographic-failures/owasp-top-10-keep-learning?u=76281980&t=0)** - [Narrator] And there you have it. The first two categories in the [[OWASP]] Top 10. Access control and [[Cryptography]] have been key information security concepts for decades now. The mistakes that lead to data breaches are known and we can learn from them. We have an opportunity to build more secure web applications in the future. I hope you'll join me in my next course that covers the third, and fourth vulnerability categories, injection and insecure design. Similar to this course, we'll explore real-world cases together and discuss prevention techniques. Let's keep learning. There are eight more vulnerability categories to explore in the 2021 OWASP Top 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Cryptography]] (1)
> **Env Vars:** owasp (2)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Caroline Wong]]

## Skills Covered

- OWASP
- Application Security

## Path Context

### In [[Master the OWASP Top 10]]
← [[Learning the OWASP Top 10]] | **2 of 6** | [[OWASP Top 10- -3 Injection and -4 Insecure Design]] →

## Appears In

- [[Master the OWASP Top 10]]

## Related Courses

_Courses sharing skills:_

- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — OWASP, Application Security
- [[OWASP Top 10- -9 Security Logging and Monitoring Failures and -10 Server-Side Request Forgery]] — OWASP
- [[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]] — Application Security
- [[Node Js Security]] — Application Security
- [[Microservices- Security]] — Application Security

---

[↑ Back to top](#)