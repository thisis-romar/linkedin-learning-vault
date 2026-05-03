---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: secure-data-management-for-ai-implementation
url: "https://www.linkedin.com/learning/secure-data-management-for-ai-implementation"
duration_minutes: 62
duration: 1h 2m
level: Intermediate
updated: 11/26/2025
learners: 2273
skills:
  - Data Management
  - Artificial Intelligence (AI)
  - AI Security
  - Data Security
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFaOJuzsD37dw/learning-public-crop_675_1200/B4DZWmXFzLHYAY-/0/1742252826072?e=2147483647&amp;v=beta&amp;t=0HlVubzti3pTdKmgKsy8juzWDUDrfLbRnWp2sZLLtuE"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Management]]'
  - '[[Working with Data- Collecting, Processing, and Storing Data for AI]]'
prev_courses:
  - '[[Learning Data Governance]]'
  - '[[Data Preparation, Feature Engineering, and Augmentation for AI Models]]'
next_courses:
  - '[[Data Steward Foundations]]'
  - '[[Scalable Data Storage and Processing for AI Workloads]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Management","position":5,"total":6,"prev":"Learning Data Governance","next":"Data Steward Foundations"},{"path":"Working with Data- Collecting, Processing, and Storing Data for AI","position":4,"total":6,"prev":"Data Preparation, Feature Engineering, and Augmentation for AI Models","next":"Scalable Data Storage and Processing for AI Workloads"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/cloud-computing
  - skill/data-management
  - skill/artificial-intelligence-ai
  - skill/ai-security
  - skill/data-security
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Secure%20Data%20Management%20for%20AI%20Implementation.md)

![Secure Data Management for AI Implementation](https://media.licdn.com/dms/image/v2/D4D0DAQFaOJuzsD37dw/learning-public-crop_675_1200/B4DZWmXFzLHYAY-/0/1742252826072?e=2147483647&amp;v=beta&amp;t=0HlVubzti3pTdKmgKsy8juzWDUDrfLbRnWp2sZLLtuE)

# Secure Data Management for AI Implementation

> At the core of many businesses is data, which requires organization, security, mining, and analysis. The operating logistics of data stewardship, data security, data, and database administration can become complicated and overwhelming for organizations that are executing without a stable roadmap. This course aims to introduce the security of business enterprise infrastructure and operating needs. 

> [LinkedIn Learning](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation) | 1h 2m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Protecting data communications in AI systems](#protecting-data-communications-in-ai-systems)
- [**1. Data Security Fundamentals**](#1-data-security-fundamentals) (4 videos)
  - [Database security overview](#database-security-overview)
  - [What's security architecture?](#whats-security-architecture)
  - [Identifying database threats and vulnerabilities](#identifying-database-threats-and-vulnerabilities)
  - [Protecting against malware](#protecting-against-malware)
- [**2. Granular Access Control**](#2-granular-access-control) (4 videos)
  - [Database control language overview](#database-control-language-overview)
  - [Authentication schemes](#authentication-schemes)
  - [Authorization methods](#authorization-methods)
  - [Encryption practices](#encryption-practices)
- [**3.  Securing database-to-database communications**](#3-securing-database-to-database-communications) (4 videos)
  - [Monitoring and protecting data sources](#monitoring-and-protecting-data-sources)
  - [Replication: to-dos and to-don'ts](#replication-to-dos-and-to-donts)
  - [Transfer Issues from applications to the cloud](#transfer-issues-from-applications-to-the-cloud)
  - [Security auditing](#security-auditing)
- [**4. Multi-level security in database systems**](#4-multi-level-security-in-database-systems) (3 videos)
  - [Vulnerability assessment and patch management](#vulnerability-assessment-and-patch-management)
  - [Reinforcing and enforcing application security](#reinforcing-and-enforcing-application-security)
  - [Reinforcing and enforcing security management](#reinforcing-and-enforcing-security-management)
- [**5. Case study: Use AI to Secure Your Data**](#5-case-study-use-ai-to-secure-your-data) (2 videos)
  - [Case study setup](#case-study-setup)
  - [Case study walkthrough](#case-study-walkthrough)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Protecting data communications in AI systems](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/protecting-data-communications-in-ai-systems-25589366?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/protecting-data-communications-in-ai-systems-25589366?u=76281980&t=0)** - How often are you sharing your company's information with your team and service providers? It's likely many times per day. In this course, I'll teach you the fundamentals of database security, the threat landscape, and opportunities to better secure database communications. We'll examine how AI Tools can be helpful in specific tasks, and manage the operating logistics of data and [[Database Administration]]. I'll share with you best practices, while making them relatable and accessible. So, let me be your personal coach as we set out to secure your [[Databases]] together. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Administration]] (1), [[Databases]] (1)
> **Speakers:** - how (1)


### 1. Data Security Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Database security overview](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/database-security-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/database-security-overview?u=76281980&t=0)** - [Instructor] So how does your organization instruct you on handling your data [[Microsoft Products|products]]? Whether it's shared through guiding principles or formal processes, you're part of a chain of command to ensure data systems remain secure throughout the organization. You're helping to protect [[Databases]] from unauthorized access, misuse, and threats. The [[Statistics]] are [[Stark (Accessibility Software)|stark]]. On average, it takes 277 days. That's nearly nine months to identify and contain a data breach. Nearly three out of four of all data breaches involve the human element, and two out of three organizations are concerned about the strength of their database security approach. Automation and AI capabilities can be skillfully implemented to better protect the data and the systems that house them. Organizations can possibly reduce the data breach identification and containment timeline from 277 to less than 170 days, and the cost savings could reach $1 million. So whatever steps you can take to curtail any accidental or intentional threats is worthwhile. Since stolen data typically contains personal identifiable information, we turn to database security as a way
>
> **[1:35](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/database-security-overview?u=76281980&t=95)** to maintain the confidentiality, availability, and integrity of the database. There's four controls that can be implemented to protect these data systems. There's authentication, authorization, encryption, and database activity monitoring, authentication, and authorization are performed as a 1-2 defense sequence. Authentication focuses on verifying the user's identity when accessing the database. And authorization controls which operations the verified user can perform. We'll discuss these in more detail in the next chapter. Encryption offers an alternative line of defense if authentication and authorization processes fail. It encodes data so that only authorized users can access it. Typically, a mathematical algorithm is applied to the original data to create the encrypted data format. Encryption can help reduce the impact of a data breach. We'll describe a few encryption practices in the next chapter as well. Lastly, the other proactive security control is the database activity monitoring. It monitors user actions, their queries, and their transaction in [[Real-Time]]. Database activity monitoring can identify
>
> **[3:11](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/database-security-overview?u=76281980&t=191)** potential threats and unauthorized access before they become significantly harmful. Monitoring database activity has a number of moving parts. It'll take us two chapters to cover the suite of tools and processes to securely support database, to database communications, as well as multiple security layers within a database. Now that you have an overview of database security, let's walk through its architecture, including the main pillars of its structure, components, and relationships. See you in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Databases]] (1), [[Statistics]] (1), [[Stark (Accessibility Software)|Stark]] (1), [[Real-Time]] (1)
> **Cross-References:** in the next (3)
> **Speakers:** - [instructor] (1)

#### [What's security architecture?](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/what-s-security-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/what-s-security-architecture?u=76281980&t=0)** - [Instructor] To proactively protect data from internal and external attacks, a database's security architecture involves implementing certain control features based on the type of security control focus. Ideally, this is a three by three matrix chart your organization would manage and revise periodically. There are three types of security controls: physical, technical, and administrative. And for each security control, your organization should have three types of control measures: preventative, detective, and corrective. This provides a holistic approach to protecting systems, networks, and data. Let's discuss each security control type one by one. Your organization should be securing your onsite [[Databases]] physically. Physical structures like gates and fences, as well as monitoring systems, like surveillance cameras, keep bad actors from in-person access. If they do breakthrough, your organization needs to repair the physical damage and revise their access protocols. And yes, changing the access codes for all physical structures would be the first order of business. The technical security controls are much more robust. Your organization needs to set guidelines and procedures that help them protect their data
>
> **[1:35](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/what-s-security-architecture?u=76281980&t=95)** and comply with laws and regulations. Here are a few of the standard security guidelines, your industry may have others. These guidelines help you minimize access to data systems. Firewalls and intrusion prevention systems serve as a great digital deterrent network. [[Intrusion Detection]] systems and other [[Forms]] of monitoring are used to lure bad actors away from their intended targets. And of course, when these technical controls fail, your organization needs to contain the impact of an attack. Identified vulnerabilities need to be patched. Any unwanted users need to be identified and blocked from reentry. And malicious software needs to be removed from all parts of the data systems. Lastly, there are the administrative controls. These include the organization's policies with respect to how their employees engage with data systems, documentation of activities, and audit logs and response plans in case of a security breach. Administrative controls need to sufficiently cover the spectrum of potential database security access points, which include people, applications, the network operating system, the data system, its data files, and finally, the data itself.
>
> **[3:11](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/what-s-security-architecture?u=76281980&t=191)** In order for database security to be enforced well, it requires coordinated and thoughtful implementation plans that address known gaps for each access point. As you can imagine, database security requires all facets of an organization to work together to guard against the internal and external attacks. Next lesson, we describe how you can help identify threats and vulnerabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Intrusion Detection]] (1), [[Forms]] (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Identifying database threats and vulnerabilities](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/identifying-database-threats-and-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/identifying-database-threats-and-vulnerabilities?u=76281980&t=0)** - [Narrator] Your ability to support your organization's database security efforts hinge on you being aware of common threats and vulnerabilities. Depending on your job and database access permissions, you may be privy to one or more of these tactics. Poorly managed sensitive data, denial of service, [[SQL]] injection, weak audit trails or misconfigured [[Databases]]. Let's start with when you may encounter poorly managed sensitive data. You could actually stumble upon it if you recognize that you have access to content you shouldn't. Time to inform your manager, so they can inform leadership. If you notice higher than normal lag time in accessing data systems, then it's a good indicator that a cyber attack is underway. Your organization's IT team should be notified immediately. It'll be helpful to share with them as much detail of your activities on the system, so that they can isolate the potential intended target faster. The remaining three common tactics, SQL injection, weak audit trails and misconfigured databases are often visible to those who are performing [[Database Administration]] duties. SQL injection is discovered when bad actors' code is found.
>
> **[1:35](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/identifying-database-threats-and-vulnerabilities?u=76281980&t=95)** There's a number of prevention methods to better monitor differences in data input, code format, and so on. Weak audit trails and misconfigured databases are the bane of every database administrator's existence. It's an uphill battle to align the organization's structure to the back end of the database. Poor documentation of database events make database backup and recovery more challenging and default settings leave the database open to a cyber attack. If your organization wants to tighten its threat identification processes, then it's important to follow three steps. First, your organization needs to assess their database vulnerabilities. Pay special attention to what's deemed critical assets, redundancies, known violations, and outdated systems. Second, it's time to review and enforce user rights access protocols. Granting users excessive database privileges can threaten security, so conduct an inventory to ensure the appropriate level of access is assigned. If not, update accordingly. And third, your organization should have a comprehensive user activity monitoring plan. The goal is to track users' unauthorized changes
>
> **[3:11](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/identifying-database-threats-and-vulnerabilities?u=76281980&t=191)** and flagging abnormal interactions. It's possible to spot ransomware or identify a data breach this way. With threats and vulnerabilities covered, let's wrap up this chapter by discussing [[Malware Detection]] techniques. See you in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Databases]] (3), [[Database Administration]] (1), [[Malware Detection]] (1)
> **Env Vars:** sql (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [Protecting against malware](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/protecting-against-malware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/protecting-against-malware?u=76281980&t=0)** - [Instructor] To protect your data systems from malware, there's a series of common internal and external tactics you can employ, and your organization needs to implement protections from both sides simultaneously. Otherwise, you won't be able to keep malware at bay. Recent reports state that there's over 190,000 new malware attacks per day. Internally, you want to implement data sanitation processes to clean up any data input before transferring it to another internal structure, such as an AI model, system, or tool. You don't want malicious data to propagate throughout your organization. The next technique is whitelisting. You create whitelist to restrict execution to only trusted applications and scripts on certain systems running AI models and [[Databases]]. By having only trusted applications, any other application could be easily identified and flagged as suspicious. As a corollary to whitelisting, anomaly detection [[Algorithms]] help to isolate unusual patterns in data or system behavior. Augmenting these algorithms with AI can suss out malicious activity sooner. The last internally focused [[Malware Detection]] technique we'll cover is sandboxing.
>
> **[1:36](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/protecting-against-malware?u=76281980&t=96)** Sandboxing isolates AI models within a closed environment to prevent malware from spreading to other system components. While this should be standard practice for organizations that develop AI, over 40% of organizations don't. External methods of protection cover well-known techniques like deploying antivirus solutions, performing regular operating system and software updates, and monitoring network traffic. Each of these has AI-powered features included. It's important to vet whether these AI add-ons better protect or introduce more harms to the organization's system. Make that determination on a case-by-case basis. The final common malware protection technique we'll discuss is access control. Malware often enters the digital environment when the bad actor takes control of an authorized user's account. The ability to limit access to critical AI components and data to only authorized users who use strong authentication methods remains a very powerful shield. Access control is a big topic, so let's stop here for now. You've learned a lot already, and we've covered the basics of database security. Don't worry, we won't be moving on from access control yet.
>
> **[3:14](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/protecting-against-malware?u=76281980&t=194)** Next chapter, we'll take a much closer look.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Databases]] (1), [[Malware Detection]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** next chapter (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Granular Access Control

[↑ Back to Table of Contents](#table-of-contents)

#### [Database control language overview](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/database-control-language-overview-25588516?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/database-control-language-overview-25588516?u=76281980&t=0)** - [Instructor] Effective database security requires robust permissions, assignment, and protection. Your organization's database administrators are typically in charge of managing user access and privileges. But it's good for you to know what they do in why their work is so important. Database administrators cover the [[SQL]] data control language or DCL activities. They serve as the main stewards of access control. Users' rights in the database is their domain. These rights are applied or removed using two SQL DCL commands. The grant or revoke statement. As you've probably guessed, the grant statement assigns a user one or more privileges. The syntax is GRANT privileges_names ON object TO user, where privileges underscore names are the access rights granted to the user, object is the name of the database table or set of tables, and user is the name of the user to whom the privileges would be granted. And naturally, the opposite of the GRANT statement is the REVOKE statement. The syntax mirrors the GRANT statement and it's REVOKE privileges_names ON object TO user;
>
> **[1:37](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/database-control-language-overview-25588516?u=76281980&t=97)** where privileges names are the access rights being revoked to the user, object is the name of the database table or set of tables, and user is the name of the user to whom the privileges are being removed. These SQL DCL commands provide a number of benefits. First, it restricts the user from accessing data in the database. Second, it ensures security in the database when the data is exposed to multiple users. And third, it prevents other users from making changes in the database who have no access to that database. But there are quite a few gaps that SQL DCL commands don't fulfill. The limitations include its dependency on the completion of the SQL data definition language, and [[Data Manipulation]] language commands. The permissions management becomes complex as the number of tables and number of users increase. Security risks also increase when an improper grant is assigned and or a revoke isn't executed. Remember, it's the database administrator who establishes protocols on who gains access to which part of their [[Databases]]. In the next lesson, we describe how a user would gain access
>
> **[3:17](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/database-control-language-overview-25588516?u=76281980&t=197)** with what's called authentication schemes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Data Manipulation]] (1), [[Databases]] (1)
> **Env Vars:** sql (5), dcl (4), grant (3), revoke (2)
> **Code Identifiers:** privileges_names (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Authentication schemes](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/authentication-schemes-25583599?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/authentication-schemes-25583599?u=76281980&t=0)** - [Instructor] Authenticating a user acts like a gatekeeper to only allow prescreened individuals to access specific aspects of a database. The goal is twofold: protect sensitive information from prescreened users and prevent unauthorized access for illegitimate users. User credentialing is pretty commonplace. We all have a username and password to most online platforms, right? This is what's called basic authentication. And it's becoming a less reliable option as people reuse passwords across multiple accounts. People also select weak passwords because they're easy to remember, making them easy to crack. Authentication methods have advanced over the years to make data more secure. A user is typically required to provide a piece of evidence verifying their identity. This evidence is either: a knowledge factor, which is something only the user knows, such as a password, PIN, or the answer to a security question, a possession factor, which is something only the user has, such as a one-time PIN, or an inherent factor, which is commonly biometrics, such as facial recognition or fingerprint scans. These authentication factors show up as part
>
> **[1:34](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/authentication-schemes-25583599?u=76281980&t=94)** of emerging standard practice. They fall into three common authentication factor categories: multifactor authentication, passwordless authentication, or adaptive authentication. Multifactor authentication, or MFA, requires at least two authentication factors of two different types, such as a password, or knowledge factor, and a fingerprint scan, an inherent factor. Next up, your option is passwordless authentication. As evident by the name, there's no passwords, but it may include possession or inherent factor authentication. For example, a fingerprint scan or a magic link that's emailed to you for one-time access. And lastly, there's adaptive authentication. User identity verification is based on contextual factors, like location, device status, and/or account use patterns. Machine learning techniques are set up to trigger an action based on receiving any abnormal response. These protocols help keep unapproved people out, but even amongst approved users, not all data elements need to be viewable. In the next lesson,
>
> **[3:08](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/authentication-schemes-25583599?u=76281980&t=188)** we dig into which database parts a validated user should have access. It's time to talk about authorization methods.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (1)
> **Env Vars:** pin (2), mfa (1)
> **Prerequisites:** required to (1), set up (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Authorization methods](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/authorization-methods-25588515?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/authorization-methods-25588515?u=76281980&t=0)** - [Instructor] Now that a user has been verified, they are allowed access to the database. However, that user can't roam freely. There are certain resources and objects they can view and others that's off limits. This situation mirrors that of how you would navigate any commercial building. You might be allowed access based on the reason of your visit to that facility. Once inside the building, you may be combined to specific floors or rooms. Authorization methods focus on ways to control access based on a user's role, permission structure, or other attributes. Here's the list of common methods. Role-based access control, attribute-based access control, mandatory access control, and discretionary access control. Let's discuss each one, so that you recognize their distinctive features. First, there's role-based access control. Our back methods determine user access permissions based on their job responsibilities. For example, HR staff might have access to payroll while finance staff might have access to the company's invoicing platform. The next option is attribute-based access control. ABAC methods use the attributes of users, objects, and actions to determine access levels.
>
> **[1:35](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/authorization-methods-25588515?u=76281980&t=95)** For instance, a user can only access a resource when predefined criteria has been met. A great practical AAC method implementation is when certain sensitive data can't be accessed outside of company business hours. Switching gears, mandatory access control, or MAC methods, determine authorization at the operating system level. They determine which files and objects users can access based on set clearance levels. You may encounter a Mac method if you work with a government agency. The last and most flexible method is discretionary access control. DAC methods enable resource owners to set their own access control rules for those resources. For example, an administrator might grant admin privileges to other users. Open authorization, or OAuth, remains the industry standard protocol, allowing users to grant third-party applications access without sharing their passwords. OAuth strikes a balance between convenience and security. It also keeps users' credentials safe in case another service suffers a data breach. To wrap up this chapter,
>
> **[3:09](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/authorization-methods-25588515?u=76281980&t=189)** we'll discuss the next level in data protection, data in transit using encryption techniques. See you in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** abac (1), aac (1), mac (1), dac (1)
> **Analogies:** for example (2), for instance (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Encryption practices](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/encryption-practices-25589367?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/encryption-practices-25589367?u=76281980&t=0)** - [Instructor] Data encryption techniques help safeguard information from unauthorized viewership. These techniques essentially scramble data as a means to better secure it. Data encryption works like this: The data to be encrypted is called plain text. Now, this plain text is passed to one or more encryption [[Algorithms]] to be scrambled. The scrambled plain text is called a cipher text. The cipher text is then sent through insecure digital channels to the recipient. The recipient holds the decryption key to convert the cipher text back to plain text. This decryption key must be kept secret always and may differ from the encryption key used to make the cipher text. Given the multiple types of data and different security use cases, there are many kinds of encryption techniques. We can broadly group them into two categories: symmetric and asymmetric data encryption. Symmetric data encryption uses a single secret key to encrypt plain text and decrypt cipher text. Both the sender and receiver have private access to the secret key, which is usable by authorized recipients. It's also a faster and more efficient option
>
> **[1:37](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/encryption-practices-25589367?u=76281980&t=97)** than asymmetric data encryption. Two common symmetric data encryption algorithms are: Advanced Encryption Standard. So, AES is a more secure version of the Data Encryption Standard, which is vulnerable to brute-force attacks. AES encrypts 128-bit data blocks at a time. It's widely used for [[Wi-Fi]] security and VPNs. Triple Data Encryption Standard, TDES, applies DES to each 56-bit data block three times with three different keys. It was created in response to hackers who figured out how to breach DES, traditionally used to encrypt unit's passwords and ATM PINs. It's now being phased out. Asymmetric data encryption eliminates the need to share a private key with the receiver. A public key and a private key are used for both encryption and decryption processes. As expected, this technique takes longer in practice than symmetric data encryption. And a common asymmetric data encryption technique is Rivest-Shamir-Adleman. RSA is a standard for encrypting information transmitted over the internet.
>
> **[3:12](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/encryption-practices-25589367?u=76281980&t=192)** It's robust and reliable by frustrating would-be bad actors with overwhelming amounts of gibberish. Data encryption supports authentication efforts, helps ensure security, and preserves information [[Privacy]]. It lays the foundation for how [[Databases]] communicate with each other, which we'll discuss in the next chapter. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Wi-Fi]] (1), [[Privacy]] (1), [[Databases]] (1)
> **Env Vars:** aes (2), des (2), tdes (1), atm (1), rsa (1)
> **Definitions:** is called (2), is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3.  Securing database-to-database communications

[↑ Back to Table of Contents](#table-of-contents)

#### [Monitoring and protecting data sources](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/monitoring-and-protecting-data-sources-25583597?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/monitoring-and-protecting-data-sources-25583597?u=76281980&t=0)** - [Narrator] Each database request, be it upload, retrieval, update, or user permissions change, makes the database, its indices, its tables and its entries susceptible to a security breach. Your goal is to go beyond implementing access controls and encryptions, like we covered in the last chapter. Selecting and safeguarding quality data sources help to ensure the confidentiality, integrity and availability of information. Data loss and data corruption issues need to be detected and blocked. Data protection protocols rely on monitoring data access patterns, unusual activity and potential security threats in [[Real-Time]] to detect anomalies and respond quickly. There's three additional methods used to better protect data. They're to improve [[Network Security]], establish backup and recovery processes and improve physical security. Improving network security involves a series of measures to help prevent unauthorized access. Setting up robust firewalls, implementing [[Intrusion Detection]] systems and monitoring network logs are the most critical steps. Your database backup and recovery protocols
>
> **[1:36](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/monitoring-and-protecting-data-sources-25583597?u=76281980&t=96)** remain a cornerstone of minimizing any impact of data loss or corruption. The "3, 2, 1 Backup Strategy" details best practices. Practice one is to keep three different copies of data, while you'll retain the original and at least two backup copies. Practice two is to store the data on two different types of devices in case of data failure. And practice three is to maintain one copy of the data offsite, preferably only accessible offline and air gapped. And this leads us to the last data protection method, improving the physical security of your [[Databases]]. This includes secure storage cabinets, vaults and rooms using security cameras and alarms in sensitive areas. Key card requirements and other authentication methods help track user access. Underneath all of these methods lie a system of [[Algorithms]] that perform [[Data Streaming]], real-time analysis and alert generation. They monitor for abnormal behavior as part of user access and database activity patterns. These algorithms generally help improve the system reliability and operational efficiency. In the next lesson, we discuss data replication strategies.
>
> **[3:14](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/monitoring-and-protecting-data-sources-25583597?u=76281980&t=194)** It's a series of processes that support both database backup and physical security methods we covered here. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Network Security]] (2), [[Algorithms]] (2), [[Intrusion Detection]] (1), [[Databases]] (1)
> **Cross-References:** we covered (2), in the last (1), in the next (1)
> **Speakers:** - [narrator] (1)

#### [Replication: to-dos and to-don'ts](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/replication-to-dos-and-to-don-ts-25588518?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/replication-to-dos-and-to-don-ts-25588518?u=76281980&t=0)** - [Instructor] In a nutshell, data replication is data copy management. This encompasses the process of creating, keeping, and maintaining identical copies of data across multiple storage locations, systems, or [[Databases]]. And this data copy management happens at least periodically, but most likely in [[Real-Time]]. Data replication keeps data availability and fault tolerance high, while ensuring adequate redundancy and reducing latency issues. There's a diverse set of approaches for maintaining data copy consistency. In fact, the seven data replication types are: transactional replication captures and synchronizes individual data transactions in real-time. Snapshot replication creates and duplicates point in time copies incrementally. Merge replication combines changes made in both the source and target databases. Key base replication duplicates data based on specific key fields such as unique identifiers. Peer-to-peer replication sends data copies to multiple geographically distributed databases. Synchronous replication immediately commits changes to both the source and target databases. Asynchronous replication allows some delay
>
> **[1:37](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/replication-to-dos-and-to-don-ts-25588518?u=76281980&t=97)** between changes being made and duplicated for greater performance. While replication is categorized in one of seven buckets, data copies are implemented using one of three schemes there. Their full table replication, key-based incremental, or log-based incremental. Full table replication consists of making a complete duplication of all existing new and updated data from the primary data repository to the target. It offers higher data availability, but increases network bandwidth loads. Key based incremental replication uses a specific replication key column in the primary database to identify updated and/or new data. Data is selectively updated in the replica database. This scheme provides better efficiency but fails when the original data has been deleted. Log base incremental replication copies data according to the content of the database's binary log file, including inserts, updates, and deletes. It's the most efficient option since it captures changes at the granular level, but it's highly sensitive to database structure changes. Managing copies of data typically rely
>
> **[3:14](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/replication-to-dos-and-to-don-ts-25588518?u=76281980&t=194)** heavily on transferring that data across multiple storage locations. We'll discuss data transfer in greater detail, especially cloud migration in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (4), [[Real-Time]] (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Transfer Issues from applications to the cloud](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/transfer-issues-from-applications-to-the-cloud-25583600?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/transfer-issues-from-applications-to-the-cloud-25583600?u=76281980&t=0)** - [Lecturer] Securely transferring data comes with its own challenges. In transit, unauthorized access to the data can happen. It's referred to as man-in-the-middle attacks. This is when data can be stolen, resulting in data loss, or the data is altered with malware attached. And once data is shared outside of your organization, you lose control over how the data is used or shared by other parties. It's important to consider the details of how and where your organization's data is sent. Traditionally, data transfer techniques primarily involve invoking specific encryption protocols. These include SFTP, or Secure File Transfer Protocol, HTTPS or Hypertext Transfer Protocol Secure, and FTPS, or File Transfer Protocol over Secure Socket Layers. SFTP remains one of the safest ways to transfer data online due to its strong encryption and authentication mechanisms. HTTPS encrypts any inbound web traffic and works to ensure [[Data Integrity]] and [[Privacy]]. And FTPS establishes a secure, encrypted connection using an application layer wrapper known as SSL
>
> **[1:36](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/transfer-issues-from-applications-to-the-cloud-25583600?u=76281980&t=96)** to enable private communications across a network. These methods are still in frequent use, and they aren't going anywhere, given that the majority of organizations rely on them. But what has been added to the data transfer landscape is the move of data, applications, and their resources to a cloud environment. Selecting a suitable cloud service provider to host your data on their servers requires thoughtful evaluation. You want to ensure that your chosen cloud provider maintains a stable security posture, updated compliance certifications, and adheres to data residency requirements. Once the cloud provider is selected, data migration activities can happen to reduce costs, improve performance, and increase [[Scalability]] for your organization. Commonly referred to as The 7 R's of Cloud Migration, these strategies help determine the best data transfer approach. The most popular R strategies in cloud migration are rehost, relocate, replatform, and retire. So learn more about those four if you find yourself part of a team that manages cloud migration. As you're performing data source tracking,
>
> **[3:10](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/transfer-issues-from-applications-to-the-cloud-25583600?u=76281980&t=190)** data copy management, and data transfers, you're continually assessing your organization's risks exposure. We discuss this in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (1), [[Privacy]] (1), [[Scalability]] (1)
> **Env Vars:** sftp (2), https (2), ftps (2), ssl (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Speakers:** - [lecturer] (1)

#### [Security auditing](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/security-auditing-25584598?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/security-auditing-25584598?u=76281980&t=0)** - [Instructor] When was the last time your company performed a security audit of all their [[Databases]]? Is it twice a year? That's the standard recommendation for most industries. Depending on the company's size, industry regulations, and perceived risk level, you may want to increase it. And for the curious, most companies perform security audits once a year. This annual comprehensive security audit may be sufficient with appropriate effort and time. Security audits usually cover four different arenas. The four types are configuration audit, vulnerability audit, compliance audit and performance audit. A configuration audit, verifies [[Hardware]] and software settings, as well as parameters of your organization's system. You're checking resources like firewalls and servers. A vulnerability audit identifies and evaluates the potential weaknesses and flaws within your environment that could be exploited by bad actors. The compliance audit focuses on ensuring your organization's environment aligns with certain regulations, laws, and policies as part of your industry. The financial and healthcare industries contend with this audit often.
>
> **[1:33](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/security-auditing-25584598?u=76281980&t=93)** And lastly, the performance audit measures and evaluates the efficiency and effectiveness of the safety controls and processes of your organization's environment. It's important to recognize that each audit type has its own distinctive process steps. In general, there's a review planning step, an examination or analysis step, and a reporting step. While you have many security audit tool options, the high priority features include compliance specific scans, remediation support, [[Penetration Testing]], and vulnerability scanning. Now back to the vulnerability audit. A large chunk of the work involves penetration testing. It's key you know this security exercise. Penetration testing simulates real world attacks to test how your security protections perform, and then provides recommendations for improvement. The three main types of penetration tests are white-box testing, which uncovers vulnerabilities that might not be visible from the outside. Simulating an insider threat scenario. Black-box testing, which mimics an external attacker, and evaluate security controls against outside threats. And gray-box testing,
>
> **[3:10](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/security-auditing-25584598?u=76281980&t=190)** which balances the in-depth analysis of white-box testing and the external perspective of black-box testing. Dedicating three to six people for three months, you'll be able to achieve a comprehensive security audit. Next chapter, we turn our attention to a more complex management arena, the multi-level database environment. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (3), [[Databases]] (1), [[Hardware]] (1)
> **Cross-References:** next chapter (1)
> **Speakers:** - [instructor] (1)


### 4. Multi-level security in database systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Vulnerability assessment and patch management](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/vulnerability-assessment-and-patch-management-25587518?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/vulnerability-assessment-and-patch-management-25587518?u=76281980&t=0)** - [Presenter] Data systems, since their inception, have set and reinforced boundaries around data assets. These systems have protected data by classifying users and objects using predetermined security labels. Multi-level security prevents unauthorized users from accessing information at a higher classification than their authorization, and prevents users from declassifying information. AI power techniques, such as [[Vulnerability Assessment]] and patch management, have made multi-level security execution easier. AI approaches increase the likelihood of proactively identifying issues, and hopefully patching them before they affect other parts of the system. Vulnerability assessment is the first stage of vulnerability management. It targets defining, identifying, classifying, and prioritizing vulnerabilities across computing systems, applications, and network infrastructures. These vulnerabilities infiltrate our environment via people, [[Hardware]], and software. Vulnerability assessments focus on how well sensitive data is protected and leverages AI tools to scan the entire database environment.
>
> **[1:36](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/vulnerability-assessment-and-patch-management-25587518?u=76281980&t=96)** Common vulnerabilities include misconfigured database settings, like unnecessary services running; improper access controls, like weak passwords; unpatched or not up to date software; and [[SQL]] injection flaws, usually seen as irregular SQL query statements. Vulnerability assessment and management works in conjunction with patch management. Patch management serves as the remediation arm for vulnerabilities. Much of the work centers on finding, testing, and rolling out an operating system and/or application patches. The goal is to maintain the most recent software versions across all data systems. Prioritizing which patch to deploy and when can be a complicated balance, so here is an order of importance in case you need to make a decision. Security patches. Then hotfixes. Next, bug fixes. And lastly, feature patches. Security patches are the most critical ones since they addressed known vulnerabilities that could be exploited by hackers. Hotfixes are released quickly to address a critical issue affecting live systems. Bug fixes target non-security related bugs
>
> **[3:13](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/vulnerability-assessment-and-patch-management-25587518?u=76281980&t=193)** that help stabilize the software. And feature patches tend to add new and enhance features to the software. Let's view vulnerability and patch management side by side before we wrap up. There are distinct differences, but they overlap in three key ways: categorization of issues and remediations, monitoring of systems, and verification of actions taken. Next, you'll pivot to [[Application Security]] since [[Databases]] are routinely connected to other applications. It's yet another possible security gap hub. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vulnerability Assessment]] (3), [[SQL]] (2), [[Hardware]] (1), [[Application Security]] (1), [[Databases]] (1)
> **Env Vars:** sql (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### [Reinforcing and enforcing application security](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/reinforcing-and-enforcing-application-security-25583598?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/reinforcing-and-enforcing-application-security-25583598?u=76281980&t=0)** - [Instructor] Protecting [[Databases]] cascades to also securing applications. Bad actors see these applications as riddled with vulnerabilities. Each one makes achieving unauthorized access easier. For instance, security misconfigurations exploit default configurations, incomplete setups, or overly verbose error messages to gain unauthorized access. Since you know the goal is to manipulate data and/or code, you're working to counteract these attacks. It requires establishing and strengthening the foundation of [[Application Security]] through process, people, and technology. The process pillar covers the policies, procedures, and workflows used to manage applications through security requirements and [[Threat Modeling]]. Now, the people pillar focuses on managing human risk. You're most concerned about the actions and behaviors of your workforce on the company's systems. The technology pillar gets the most attention since it handles the security controls used to protect applications. A bulk of this pillar is dedicated to source code analysis tools. These code scanning tools test and analyze code to identify bugs and vulnerabilities
>
> **[1:35](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/reinforcing-and-enforcing-application-security-25583598?u=76281980&t=95)** before the software is deployed. The three types of source code analysis tools are [[Static Application Security Testing]], [[Dynamic Application Security Testing]], and interactive application security testing. [[Static Application Security Testing]] analyzes the application security code and spot potential issues in the early development stages. The seven stages are code input, code parsing, vulnerability detection, reporting, remediation, retesting, and [[Continuous Integration (CI)|continuous integration]] within the development process. It's rules-based and may produce false positive. So confirm any concerns. [[Dynamic Application Security Testing]] examines a running web application from the outside by simulating an external attack. Since these tests are run live, it can be more expensive to remedy any vulnerabilities. Common activities include sending numerous requests, including unexpected or malicious inputs to check for security weaknesses. And lastly, there's interactive application security testing. It analyzes the application's source code while it's running
>
> **[3:09](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/reinforcing-and-enforcing-application-security-25583598?u=76281980&t=189)** and identifies more vulnerabilities with a lower rate of false positives. Vulnerabilities are identified in real time, usually during [[Quality Assurance]]. Each one of these code scanning tools have their benefits and limitations. However, when security measures are performed within applications, there's a lower likelihood of security risks transferring to the database environment, and that's what we want to accomplish. We'll wrap up this chapter by getting acquainted with a [[Security Management]] framework. It'll bring the security pieces together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (8), [[Databases]] (1), [[Threat Modeling]] (1), [[Continuous Integration (CI)|Continuous integration]] (1), [[Quality Assurance]] (1)
> **Exercise Files:** source code (3)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Reinforcing and enforcing security management](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/reinforcing-and-enforcing-security-management-25587517?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/reinforcing-and-enforcing-security-management-25587517?u=76281980&t=0)** - [Narrator] Crafting a database [[Security Management]] plan is undoubtedly a daunting task. There's both external and internal considerations you'll need to balance. Most prominent of the external protocols is deploying physical database security. Minimizing physical attacks by outsiders or even insider threats reduce the likelihood of the data being stolen, corrupted, or modified with malware. Adding physical security measures like surveillance cameras and key card access are recommended, but these measures are the primary responsibility of the IT team. [[Application Security]] is a collaborative partnership between IT and data, or AI teams. Process, people and technology work together to shore up firewalls and fill security gaps, especially with AI-powered code scanning tools. On the flip side, the internal protocols uphold confidentiality, integrity, and availability of your data from inside the database environment. In this course, you learned which database security measures to help prioritize your implementation strategy. And here's a recap. Establish strong access controls, deploy data encryption protocols, create regular backups to your database,
>
> **[1:36](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/reinforcing-and-enforcing-security-management-25587517?u=76281980&t=96)** and perform regular security audits. Two more measures complete the best practices list for database security. They are regular patch updates and database activity monitoring. Keeping tabs on software changes alongside shifts in users' actions and behaviors expose security vulnerabilities sooner, and addressing these vulnerabilities can happen before impact is widespread. It's important to recognize that you're executing data hardening processes. This means you're reducing the number of ways it can be attacked. You're reducing the attack surface by removing unnecessary software, services and accounts. You engage in monitoring practices in an effort to deter bad actors from making an attack, and you are creating a digital environment that protects the database in the event of an attack. Next up, you gain practice in identifying and working through database security issues. See you in the last chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Management]] (1), [[Application Security]] (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 5. Case study: Use AI to Secure Your Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Case study setup](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/case-study-setup-25586542?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/case-study-setup-25586542?u=76281980&t=0)** - [Instructor] Ideally, the best way to affirm what you've learned in this course is to explicitly apply it. Open source [[Database Management]] systems like [[MySQL]] Workbench and PostgresSQL aren't the preferred choice since they need significant security configuration and maintenance. Many secure database activities also assume a robust application layer is in place to interact directly and exclusively with the database environment. One other notable limitation of open source database management systems is that there's no automatic compliance to security standards. Regular and active measures must be performed. And given our focus on a purchase order or procurement use case, your practical option is investing in proprietary domain-specific database management services. AI has reshaped procurement management by automating inventory data extraction, purchase order creation and approval, [[Data Validation]] with invoices and receipts, and payment processes. All of these moving parts within procurement make assessing confidentiality, integrity, and availability of your purchase order data more difficult. So for your use case,
>
> **[1:33](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/case-study-setup-25586542?u=76281980&t=93)** you'll vet one of your company's procurement services options. Let's say your company is looking to select a business spend management service. The final two options are COPA and SAP Ariba. You're tasked with evaluating COPA according to these four database security measures. Establish strong access controls, deploy data encryption protocols, create regular backups of your database, and perform regular security audits. You are to clarify what is COPA's strong access control and chosen data encryption protocol. These two measures are relatively straightforward. You learn the difference amongst [[Multi-factor Authentication]], biometrics, and password list authentication. Which one does COPA use? The list of data encryption protocols includes AES, RSA, and triple DES. Which one does COPA use? You'll also need to research COPA's data backup plans along with how they determined which security audits to perform and with what frequency. That'll require searching COPA's publicly accessible documentation. It's time to get to work.
>
> **[3:07](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/case-study-setup-25586542?u=76281980&t=187)** Get to know COPA's database management and security landscape. Once you're done, head over to the last lesson to see my findings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Management]] (4), [[MySQL]] (1), [[Data Validation]] (1), [[Multi-factor Authentication]] (1)
> **Env Vars:** copa (8), sap (1), aes (1), rsa (1), des (1)
> **CLI Commands:** mysql (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Case study walkthrough](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/case-study-walkthrough-25586543?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/case-study-walkthrough-25586543?u=76281980&t=0)** - [Instructor] Full disclosure, your responses to each of the [[Database Management]] and security measures may differ from mine and that's okay. The case study intends to help you critically think about which functionalities and features are most important. So let's discuss each one, shall we? First, there's understanding Coupa's strong access control. Which type of access control do they use? The options are [[Multi-factor Authentication]], biometric authentication or passwordless authentication. Coupa uses two-factor authentication using an authenticator app or SMS integration. Second, you are trying to determine their data encryption protocols. Which protocol does Coupa use? The options are AES, RSA or Triple DES. Coupa imposes the high-grade, AES-256 bit encryption. Then you're reviewing Coupa's data backup schemes. So what are their plans? For this one, publicly accessible documentation is available. Coupa Platform Security and Architecture white paper, released in July, 2024, actually details their backup schedule and retention period on page eight
>
> **[1:37](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/case-study-walkthrough-25586543?u=76281980&t=97)** and lastly, you are wondering about Coupa's security audit sequences. Which audit and compliance programs do they participate in? Coupa participated in 30 compliance certifications in total, according to their white paper. Actually see page 12 if you're interested in more details. The list is very long, including SOC and ISO compliance certifications with regular security audits. Coupa maintains a high database security rating and according to UpGuard, Coupa has a 887 out of 950 security score based on an analysis of their external attack surface. Now that you've seen this assessment, you're likely curious about how SAP Ariba measures up. Feel free to do that one on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Management]] (1), [[Multi-factor Authentication]] (1)
> **Env Vars:** aes (2), sms (1), rsa (1), des (1), soc (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/next-steps-25585563?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/secure-data-management-for-ai-implementation/next-steps-25585563?u=76281980&t=0)** - Congratulations, give yourself a pat on the back. You've done it. If you're interested in gaining more [[Data Engineering]] practice, check out Mark Friedman's [[Data Engineering With Dbt]] course. Or to get a brief refresher on [[SQL]], my other course, Practical [[Database Design]], is a great option. We've reached the end of our time together for now. Thanks for taking this course. For more conversations about [[Data Ethics]] and building more responsible data practices, follow me on [[LinkedIn]], or visit my company website at [Dataedx.com](https://Dataedx.com). Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (2), [[SQL]] (1), [[Database Design]] (1), [[Data Ethics]] (1), [[LinkedIn]] (1)
> **URLs:** [dataedx.com](https://dataedx.com) (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Dr. Brandeis Marshall]]

## Skills Covered

- Data Management
- Artificial Intelligence (AI)
- AI Security
- Data Security

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Management]]
← [[Learning Data Governance]] | **5 of 6** | [[Data Steward Foundations]] →

### In [[Working with Data- Collecting, Processing, and Storing Data for AI]]
← [[Data Preparation, Feature Engineering, and Augmentation for AI Models]] | **4 of 6** | [[Scalable Data Storage and Processing for AI Workloads]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Management]]
- [[Working with Data- Collecting, Processing, and Storing Data for AI]]

## Related Courses

_Courses sharing skills:_

- [[AI Product Security- Foundations and Proactive Security for AI]] — Artificial Intelligence (AI), AI Security
- [[Threat Modeling for AI-ML Systems]] — Artificial Intelligence (AI), AI Security
- [[Leveraging AI for Security Testing]] — Artificial Intelligence (AI), AI Security
- [[Artificial Intelligence and Application Security]] — Artificial Intelligence (AI), AI Security
- [[AI in Cybersecurity- The Future of Red Teaming and Blue Teaming]] — Artificial Intelligence (AI), AI Security

---

[↑ Back to top](#)