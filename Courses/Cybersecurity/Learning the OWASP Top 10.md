---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-the-owasp-top-10-9364599
url: "https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599"
duration_minutes: 35
duration: 35m
level: Beginner
updated: 8/23/2024
learners: 67716
skills:
  - OWASP
  - Web Application Security
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGSBppCTJII3g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1638474196848?e=2147483647&amp;v=beta&amp;t=s3ov-JYKHSr9S8zJMdon91wmNJLa1ski9OqwjTUzwuc"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Navigating the Cybersecurity Threat Landscape](../../Paths/Cybersecurity/Learning%20Paths/Navigating%20the%20Cybersecurity%20Threat%20Landscape.md)'
  - '[Become a Cybersecurity Professional](../../Paths/Cybersecurity/Learning%20Paths/Become%20a%20Cybersecurity%20Professional.md)'
  - '[Explore a Career in Application Security](../../Paths/Cybersecurity/Learning%20Paths/Explore%20a%20Career%20in%20Application%20Security.md)'
  - '[Master the OWASP Top 10](../../Paths/Cybersecurity/Learning%20Paths/Master%20the%20OWASP%20Top%2010.md)'
prev_courses:
  - '[Demystifying Advanced and Complex Security Topics](Demystifying%20Advanced%20and%20Complex%20Security%20Topics.md)'
  - '[The Cybersecurity Threat Landscape](The%20Cybersecurity%20Threat%20Landscape.md)'
  - '[Penetration Testing Essential Training](Penetration%20Testing%20Essential%20Training.md)'
  - null
next_courses:
  - '[Introduction to Identity and Access Management](Introduction%20to%20Identity%20and%20Access%20Management.md)'
  - '[Cybersecurity Careers and Certifications](Cybersecurity%20Careers%20and%20Certifications.md)'
  - '[Security Testing Essential Training (2022)](Security%20Testing%20Essential%20Training%20(2022).md)'
  - '[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures](OWASP%20Top%2010-%20-1%20Broken%20Access%20Control%20and%20-2%20Cryptographic%20Failures.md)'
path_nav: '[{"path":"Navigating the Cybersecurity Threat Landscape","position":3,"total":8,"prev":"Demystifying Advanced and Complex Security Topics","next":"Introduction to Identity and Access Management"},{"path":"Become a Cybersecurity Professional","position":3,"total":5,"prev":"The Cybersecurity Threat Landscape","next":"Cybersecurity Careers and Certifications"},{"path":"Explore a Career in Application Security","position":3,"total":7,"prev":"Penetration Testing Essential Training","next":"Security Testing Essential Training (2022)"},{"path":"Master the OWASP Top 10","position":1,"total":6,"prev":null,"next":"OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures"}]'
path_count: 4
tags:
  - course
  - topic/security
  - skill/owasp
  - skill/web-application-security
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Learning%20the%20OWASP%20Top%2010.md)

![Learning the OWASP Top 10](https://media.licdn.com/dms/image/v2/C560DAQGSBppCTJII3g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1638474196848?e=2147483647&amp;v=beta&amp;t=s3ov-JYKHSr9S8zJMdon91wmNJLa1ski9OqwjTUzwuc)

# Learning the OWASP Top 10

> No organization—no matter how large or small—is invulnerable to security breaches. What makes all of these systems, and the software that runs them, susceptible to attack? The Open Web Application Security Project (OWASP) was formed to provide the public with the resources to understand key risks and improve software security. And every few years, they publish a list of the ten biggest application

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599) | 35m | Beginner | 68K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [A first look at the 2021 OWASP Top Ten](#a-first-look-at-the-2021-owasp-top-ten)
- [**1. New to the Top Ten**](#1-new-to-the-top-ten) (10 videos)
  - [Broken access control](#broken-access-control)
  - [Cryptographic failures](#cryptographic-failures)
  - [Injection](#injection)
  - [Insecure design](#insecure-design)
  - [Security misconfiguration](#security-misconfiguration)
  - [Vulnerable and outdated components](#vulnerable-and-outdated-components)
  - [Identification and authentication failures](#identification-and-authentication-failures)
  - [Software and data integrity failures](#software-and-data-integrity-failures)
  - [Security logging and monitoring failures](#security-logging-and-monitoring-failures)
  - [Server-side request forgery (SSRF)](#server-side-request-forgery-ssrf)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go from here with the 2021 OWASP Top Ten](#where-to-go-from-here-with-the-2021-owasp-top-ten)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [A first look at the 2021 OWASP Top Ten](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=0)** - Every day we see news reports of major companies getting breached. When it comes to [Cybersecurity](../../Topics/Cybersecurity.md), it can feel overwhelming to know where to focus. Fortunately, [OWASP](../../Skills/Cybersecurity/OWASP.md) narrows it down for us. OWASP stands for Open [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) Project. For decades, this group has been providing resources to educate and inform technology professionals about security best practices. Every few years, they publish a list of the top 10 most common AppSec vulnerabilities. In this course, we'll look at the most recent OWASP top 10 vulnerabilities and discuss some of the implications for your organization and what you're building. I'm Caroline and I'm the Chief Strategy Officer at Cobalt. I've been working in cybersecurity for nearly two decades. I am so excited to share this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course so let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (3), [Cybersecurity](../../Topics/Cybersecurity.md) (2), [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** owasp (3)
> **Definitions:** stands for (1)
> **Speakers:** - every (1)


### 1. New to the Top Ten

[↑ Back to Table of Contents](#table-of-contents)

#### [Broken access control](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=0)** - [Instructor] The first item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 is Broken Access Control. OWASP says this exposure occurs when confidential information is viewed by a user who should not have permission to access that data. Let's break it down. In order to talk about Broken Access Control, first, we should define Access Control. Access Control is making sure that people have access to what they're supposed to have access to and making sure people don't have access to what they're not. Broken Access Control is exactly the opposite. You have access to information you shouldn't. And what happens when people have access to information they're not supposed to? Well, this is a perfect way to breach the confidentiality, integrity and availability of a web application. A person with unintended access might be able to read, edit, or delete private data. Let's explore a couple different examples. The first scenario is when sensitive information is exposed to an unauthorized person, software is built assuming that different people are going to use it. And each user will have permissions that are specific to their user role. Typical roles might include an anonymous user, a visitor, an employee, a content contributor, an administrator or developer. Broken Access Control occurs when a user is able to act beyond the permissions of their role. This might happen if a web app
>
> **[1:35](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=95)** accidentally shares information with users who are not supposed to have it. If I have a social media account that's private, the only people that are supposed to see it are my friends and family that I've approved. If someone else goes to my profile and can see all the photos, my kids and pets, that's Broken Access Control. It's also kind of like if someone in the [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) department prints out a document that has all the employee performance evaluations and forgets to pick up the paper from the printer, leaving it out in plain view for anyone who walks by to see that confidential information. The key takeaway here is to make sure that you're not unintentionally leaving private data around for just anyone to stumble upon physically or on the web. Our second scenario is conceptually similar to the previous example, but instead of just leaving sensitive data out in plain sight available for anyone to view, it accidentally gets sent to someone who is not supposed to have it. The subtle difference here is in the first scenario, the private data is just there for anyone to see, it's accidentally shared. In this case, the private data is actually sent to the person who shouldn't have it. Imagine if that same human resources person from scenario one tries to send all employee performance evaluations, to someone else in the human resources department in an email, but accidentally
>
> **[3:09](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=189)** types the wrong email address into the to field and it unintentionally gets sent to everyone in the company instead. Another example to consider might be if you're at the doctor's [office](../../Skills/Web%20Development/Microsoft%20Office.md) and you finished your appointment, you're just waiting for the nurse to bring you a printed summary of your diagnosis and treatment. The nurse comes in, and hands you the paperwork, you look at it and it's actually not yours, it's someone else's, the nurse made a mistake, and now you have access to someone else's medical data. The takeaway here is that when you're sending private information, you need to really make sure that you're sending it to the right person. These examples might seem kind of obvious, but this is the most common vulnerability in the 2021, OWASP Top 10. When we're building and testing new web applications, we tend to test the positive path a lot, but we don't always consider what an alternative path might be. People aren't as altruistic as we'd like to believe, and people misuse and abuse things all the time. If we don't take into account that people are going to do the wrong thing, a lot more than we want them to, it has the potential to result in huge problems. The bottom line is that when you're building a web app, you have to be really intentional about building solid access control into your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (3), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (3), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** owasp (3)
> **Analogies:** kind of like (1), similar to (1), imagine (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Cryptographic failures](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=1)** - [Instructor] The second item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 is cryptographic failure. OWASP says, the first thing is to determine the protection needs of data in transit and at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). Passwords, credit card numbers, health records, personal information, and business secrets require extra protection. This vulnerability category actually has two parts. The first part recommends that folks who build web applications think about the data that's being collected, stored, and used. Data that is more sensitive, restricted, regulated, or otherwise private, should be more protected than less sensitive data. One important lever that we have to protect data is to encrypt it. The second part recommends that once a decision has been made to encrypt certain data types, that web app developers follow well-known proven procedures to ensure that encryption is effective. Encryption involves many different steps and folks frequently make mistakes when trying to implement them. In our digital and our physical lives alike, we want to protect that, which we value the most. I value my young children. And so I make sure that when they're riding in the car, they sit in protective car seats. I value my online [Banking](../../Skills/Software%20Development/Banking.md) password, and I expect that the web app that allows me to bank online is encrypting my password.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=94)** Once the decision has been made to protect something of value, steps, need to be taken, to implement the additional protection. First, if you don't have to store sensitive data in the first place, don't. If your web app needs to process payments, consider integrating with a payment platform like PayPal, which can handle the payment data on your behalf. If you don't store sensitive data, then you don't have to worry about how to protect it. Secondly, if you are storing sensitive data, encrypt it both at rest and in transit. Third, if you are encrypting data, use known strong cryptographic [Algorithms](../../Skills/Software%20Development/Algorithms.md). For example, MD5 is a weak algorithm and should not be used, while AES is a strong algorithm, which should be used. The full text for this vulnerability category in the OWASP Top 10 also includes several additional techniques that I encourage you to read If you're interested in learning more. OWASP also has several cheat sheets that cover various aspects related to cryptographic failure. The two takeaways here are number one, if you have data that needs protecting in a web app, you should encrypt it. And number two, if you've decided to encrypt some data, make sure you're following best practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Banking](../../Skills/Software%20Development/Banking.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** owasp (4), md5 (1), aes (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Injection](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=1)** - [Instructor] The third item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 is injection. Here's a thing about computer science, code can either represent data or be an instruction. Injection happens when an application accepts data as input and processes it as an instruction rather than just as data. OWASP says an application is vulnerable to attack when hostile data is directly used. One analogy to consider might be if you adopt a dog from an animal rescue and the paperwork that you have to fill out requires that you give the dog a name. What if you picked a name like Sit? Because Sit happens to be a very common command that you would ask a dog to obey, that particular name could be really confusing for the dog. Sit, come here, Sit. Is a dog supposed to respond to the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) sit as though it's its name, or is it supposed to respond to the word sit as though it's an instruction for what to do? Injection vulnerabilities occur in web applications when there's an opportunity for a user to provide some input and the application handles it incorrectly. A bad actor could actually inject some malicious code that ends up being interpreted as an instruction for the web app to follow. Think about it, web apps ask users for input all the time. Whether you're typing a comment into a community forum or submitting data in a web form,
>
> **[1:34](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=94)** there's the intended way that the app is supposed to handle the data, but if the application is vulnerable to injection, then malicious input could result in an unintended outcome. One version of injection is cross-site scripting in which the application does not neutralize user input. This means that the application does not somehow make sure that whatever input is provided by the user is actually safe, legitimate and in the format that the app intends for it to be. Going back to the rescue dog analogy. One way that the folks at the animal rescue might prevent confusing names that sound like commands is checking the name against a list that includes words like sit, come and [Fetch](../../Skills/Web%20Development/Fetch.md). This could go a long way to preventing a situation where a dog might be named Sit and interpret its name as an instruction. To bring it back to web apps, a web form might ask you for your birthday, something the web app could do to make sure you're inputting data that is expected into the field might be to confirm that the user input consists of six digits, two to represent your birthday month, two to represent the day of the month and two to represent your birthday year. If someone types all letters or include special characters in the birthday field, the web app could check and determine that the formatting is not correct. And maybe it displays a user error
>
> **[3:08](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=188)** instead of further interpreting that data. Injection attacks can also be used against web apps that connect to backend [Databases](../../Skills/Software%20Development/Databases.md) in order to carry out instructions that violate the confidentiality, integrity or availability of the information in those databases. These databases are frequently coded in a language called [SQL](../../Skills/Data%20Science/SQL.md) and a malicious attacker launching a SQL injection attack is attempting to create, read, update, or delete something that they're not supposed to in a backend SQL database. They take advantage of a user input field that doesn't check to make sure that user input is appropriate and trick the software application into following their instructions. The takeaway here is that if your web application takes user input, you need to make sure input is neutralized or otherwise verified so a malicious attacker can't send instructions directly to the app. If you don't, you're potentially letting bad actors give commands to your application, and that's something that should only be done by you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (3), [OWASP](../../Skills/Cybersecurity/OWASP.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** sql (3), owasp (2)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Insecure design](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=0)** - [Instructor] The fourth item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 is a new one, insecure design. OWASP calls it a new category focusing on risks related to design and architectural flaws. Personally, I think this is super exciting. Historically, most of the items in the OWASP Top 10 focus on code-level bug-type vulnerabilities, and this one actually addresses design-level flaw-type vulnerabilities. In some ways, building a web app is like building a house. You can think about bugs in the application as being similar to smaller problems that might affect your house, like a broken dishwasher seal or a light bulb that needs to be replaced. In the grand scheme of things, these are relatively minor problems with straightforward fixes. A design error, however, can be the root cause of a much larger problem. Imagine you're planning to build a house that's going to reside on the side of a hill. If you don't plan for a strong foundation in the design phase, then it's going to be fundamentally unstable. One type of insecure design happens when the web application generates an error message that includes sensitive information. There are many valid reasons why a web app might generate an error message. During the development phase, error messages can help with troubleshooting. However, it's important to eliminate unnecessary error messages
>
> **[1:33](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=93)** before the code is pushed to production, especially because these types of error messages may contain information that can be used by malicious actors to craft an attack. Let's say you're interacting with a web application. You're typing and clicking and all of a sudden, you receive an error message. The error includes the exact location of an important configuration file. A malicious user could use that information to obtain private information or change the file. Another type of design flaw is when passwords are stored in plaintext. This kind of vulnerability is not a mistake in the cryptographic implementation. This is an intentional design decision not to encrypt the passwords. Clearly, this is not an ideal setup for a secure web application. The full text for this vulnerability category in the OWASP Top 10 also includes dozens of examples that I encourage you to explore if you're interested in learning more. The bottom line is that security matters not only when code is being developed and in production, but in the design phase as well. Teams that work together to build web applications should consult with security experts to ensure that appropriate requirements and design decisions are being made early in the [Software Development](../../Topics/Software%20Development.md) lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (4), [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** owasp (4)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** similar to (1), imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Security misconfiguration](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=1)** - [Instructor] The fifth item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) top 10 is security misconfiguration. OWASP says the application might be vulnerable if it is without a concerted, repeatable [Application Security](../../Skills/Cybersecurity/Application%20Security.md) configuration process. You can think of security misconfiguration as having a default setup that is not very secure. For example, if you decide to go on a bike ride and you don't wear a helmet, that might be considered a security misconfiguration. If, on the other hand, you do decide to wear a helmet and it's properly fitted and appropriate for the type of riding that you're doing, that would be considered a more secure configuration. Security folks use the term hardened to describe something that is securely configured. Some other physical analogies for security misconfiguration include leaving your house and forgetting to lock the door, going for a drive in the car and deciding not to buckle your seatbelt. A digital security misconfiguration would be if you chose not to use a passcode on your mobile device. In the case of web applications, examples of security misconfiguration include failing to change default passwords, enabling unnecessary services or features, insecurely configuring [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) permissions, and failing to update software. Security misconfigurations include both a failure to change default passwords,
>
> **[1:35](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=95)** as well as a failure to use strong passwords, especially for critical systems like update servers. Given this highly vulnerable scenario, it's unfortunately not surprising that malicious threat actors took advantage of the situation and planted some malware. In order to address security misconfiguration, ideally, each and every setting or configuration should be identified and evaluated to determine if the most appropriate security setting has been implemented. I've worked directly with technology teams to harden systems according to the industry's standard guidelines for securely configuring software, the Center for Internet Security, or CIS, Benchmarks. Today, the CIS Benchmarks include a group of more than 100 configuration guidelines across dozens of technologies in use today, from AWS to [Zoom](../../Skills/Software%20Development/Zoom.md). From a security perspective, it would be ideal to always comply perfectly with these hardening standards. However, the reality is that each organization has a different risk tolerance and different types of requirements that must be met. The best practical scenario involves one where all the teams involved understand the fundamental concept of security misconfiguration and make decisions purposefully with knowledge of the risks involved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (2), [Application Security](../../Skills/Cybersecurity/Application%20Security.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Env Vars:** owasp (2), cis (2), aws (1)
> **CLI Commands:** aws (1), make (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Vulnerable and outdated components](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=1)** - [Instructor] The sixth item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 is vulnerable and outdated components. OWASP says, "You're likely vulnerable: if you don't know all the versions of all the components you use, and if the software is vulnerable, unsupported, or out of date." The thing about modern software is that the vast majority of web applications are built using open source or third-party components. Naturally, if the components that are used to build the web application are vulnerable, then the web app will be vulnerable as well. Consider the physical analogy of building a house. If you're building a house and using insulation materials that contain asbestos, then the house is going to contain asbestos and anyone who spends time in that house is vulnerable to disease. If you're making a ceramic bowl, and the glaze that you use to decorate the bowl contains lead, then anyone who eats food out of that bowl is vulnerable to lead poisoning. You can see how this might manifest when it comes to web applications that are built using different software components. A vulnerable and outdated software component problem is actually exactly what led to the 2017 Equifax breach. Equifax was using a component called Apache Struts, which was known to be vulnerable and for which a patch was available. Unfortunately, Equifax did not deploy the patch and malicious actors took advantage of the vulnerability. To be far to Equifax,
>
> **[1:32](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=92)** it's not easy to install software updates and deploy patches across a huge enterprise organization. Doing this effectively requires stakeholder buy-in and collaboration between technology and security teams. There is also a trade-off that every software organization must consider. Any time spent addressing a security vulnerability is time that is not being used to build new product features. In order to prevent this type of vulnerability from being exploited, there are a few important steps that organizations must take. First, you need to know what your assets are. You should always have a complete and up-to-date list of all software components and their versions. Second, you need to know if each component is vulnerable or not. You can do this by researching known vulnerabilities, as well as proactively testing your applications. Third, you need to update software which is out of date, and you need to patch known vulnerabilities. The most interesting thing about this vulnerability is that it's not really a technical problem, it's more of a people and process problem. This makes it a bit different from some others in the OWASP Top 10. The solution requires effective buy-in from stakeholders and a robust and repeatable process that covers asset inventory, vulnerability discovery, and remediation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (3)
> **Env Vars:** owasp (3)
> **CLI Commands:** apache (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Identification and authentication failures](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=1)** - [Instructor] The seventh item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 is identification and authentication failures. OWASP says confirmation of the user's identity, authentication, and session management is critical to protect against authentication-related attacks. Basically, a web app should confirm that you are who you say you are. One type of failure is when an actor claims to have a given identity and the software does not prove that the claim is correct. Imagine you show up to the airport and you claim to be the pilot. You're about to fly a plane. What if no one checks your identity to confirm that you have the proper documentation? What if they don't ask for ID at all? In a web application, this could happen during a forgot my password flow. Say I forget the password to one of my hundreds of online accounts and I click the button that says I forgot my password. At this point, a check is supposed to be done, like I have to type in a code that I get via an SMS in order to prove that I am who I claim to be so that I can get back into my account. The application needs to ask me for the code and verify that the code is correct. If either of these steps is skipped or done incorrectly, then that is considered an identification and authentication failure. Another type of failure is when the software communicates with a host that provides a certificate,
>
> **[1:33](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=93)** but does not ensure that their certificate is actually associated with that host. Whereas in the former case with the pilot where no one is asking for ID at all, in this case, they ask to see your ID, but don't confirm that it's the right one. They just assume that because you're providing ID, it's correct without actually checking. This type of vulnerability is exploited by attackers who want to send their victims to a fake website. If the attacker can convince the web app that their host is legitimate by using a certificate that doesn't get validated, then the users could be sent to a fake, potentially malicious website. A third type is when a web app establishes a new user session without closing out the previous one. This is like if someone drives up to a gas station and your credit card is still in the machine. Even though it's not their card, your session is still active and they can use it to pay for their gas. When a web app has this vulnerability, it does not invalidate the previous session before authenticating a new user. It's kind of like if you log onto your email from a computer in the library and then forget to log out before you leave. The next person who sits down may be able to access your account. The common theme for this seventh item in the OWASP Top 10 is that web applications should identify users and authenticate them properly.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=188)** Conceptually, it sounds so simple, right? In reality, it can be more complex for a variety of reasons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (3)
> **Env Vars:** owasp (3), sms (1)
> **Analogies:** imagine (1), kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Software and data integrity failures](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=1)** - [Instructor] The eighth item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) top 10 is software and [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) failures. OWSP says, "An insecure CI/CD pipeline can introduce the potential for system compromise. Many applications now include auto-update functionality, where updates are downloaded without sufficient verification." The eighth item is actually a subset of the sixth, specifically, vulnerabilities that happen as a result of an insecure CI/CD pipeline. Modern [Software Development](../../Topics/Software%20Development.md) processes like [Agile](../../Skills/DevOps/Agile%20Development.md), [DevOps](../../Topics/DevOps.md) and CI/CD have changed the way that web applications are built. These processes are optimized for rapid iterative development, and naturally include a lot of automation. From a delivery side, this is great news, but from a security perspective, there's a potential problem. Sometimes the automated process takes something insecure and puts it into the software automatically, creating a security vulnerability. If automated processes are not subject to security validation, then the software is potentially vulnerable. You might be wondering, why didn't the OWASP folks combine the sixth and the eighth into a single vulnerability category? I think it's because they really want to highlight and address the security risks involved in today's modern and pervasive approach to rapid and iterative software development. Consider a fun process in the analog world, a chocolate making factory.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=95)** There's a series of machines that process raw material, like cacao beans, sugar, and milk, into a final product, chocolate, that is ready for customers to purchase. These raw materials come from external sources outside of the factory, and the quality of these raw materials will naturally affect the quality of the finished product. If the raw materials are of poor quality, then the chocolate won't be as good. You can think about making software in the same way. The raw ingredients that go into making the software, various plugins, libraries, et cetera, from sources like repositories and content delivery networks affect the quality and the security of the final software product. The other key difference between the eighth, software and data integrity failures, and the sixth, vulnerable and outdated components, is that the eighth places additional emphasis on the fact that software applications often receive updates from the vendor. And if these updates are not secured, then naturally the update will result in an insecure software application. Malicious attackers are taking advantage of these software updates and using them to install their malware as well. Finally, if you're familiar with insecure deserialization from the 2017 version, this category also includes that same fundamental concept. In a nutshell, serialization is the process of taking a digital object and reformatting it for easy transport or storage. Deserialization is when you take that version
>
> **[3:11](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=191)** and transform it back into the original object. If someone malicious messes with the reformatted version before it's transformed back, it can result in undesirable consequences. The key takeaway here is to be aware of automated processes in the software development life cycle, and to ensure that these are verified to be secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (3), [OWASP](../../Skills/Cybersecurity/OWASP.md) (2), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (2), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **CLI Commands:** cd (3)
> **Env Vars:** owasp (2), owsp (1)
> **Warnings:** be aware (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Security logging and monitoring failures](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=1)** - [Instructor] The ninth item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) top 10 is security logging and monitoring failures. OWASP says, "Without logging and monitoring, breaches cannot be detected." When I started my career in this field, I found it somewhat challenging to explain to my friends and family what I do for work. Now, everyone gets it because we see it all the time in mainstream media. Unfortunately, most people have also had their own personal information compromised as the result of a data breach. The ninth item in the OWASP top 10 is rooted in this fundamental belief that security incidents are bound to happen. The thing about security breaches is that it's not all or nothing. Hackers do their work one step at a time, and each step builds upon the previous one. Consider a burglar who's walking down the street, checking car doors to see if someone left their car unlocked. They find one and they get in. In the center console, they find a garage door opener, and in the glove box, they find the registration papers. Next, the burglar goes to the address listed on the papers and uses the garage door opener to open the garage. They explore the garage, opening drawers and peeking into cabinets. One of the cabinets has several keys hanging on hooks and they are conveniently labeled. One of them says House. After that, the burglar uses the key to open the door to the main house and the burglary continues.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=98)** Now, imagine if there had been a detection or logging mechanism at each step. What if the car doors were monitored and the owner received a notification every time a car door was opened? What about for the glove box and the garage door? At each step of the attack, logging and monitoring gives us an opportunity to stop the attacker in their tracks. The UK National [Cybersecurity](../../Topics/Cybersecurity.md) Center in their Introduction to Logging for Security Purposes Guide has a useful table of questions that helps security practitioners design their logging and monitoring setups. And some questions include: Who has viewed or downloaded a specific file? Have any incorrect authentication attempts occurred? Who has logged in recently? Have authentication events happened at unexpected times or from unexpected locations? The crazy thing about security breaches is that they often go undetected for weeks, months, even years. The 2021 Data Breach Investigations Report shows that about 20% of breaches go undiscovered for months. The longer they go undetected, the more steps an attacker can take and the more negative impact they can cause. So, what can be done to reduce the damage caused by an attack? Logging, monitoring, and alerting allows for security and technology teams to discover that an attacker has infiltrated systems
>
> **[3:12](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=192)** and ideally stop them before they can do more damage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (3), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **CLI Commands:** find (3)
> **Env Vars:** owasp (3)
> **UI Navigation:** open the (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Server-side request forgery (SSRF)](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=1)** - [Instructor] The 10th and final item in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 is Server Side Request Forgery, also known as SSRF. OWASP says, "SSRF flaws allow an attacker to coerce the application, to send a crafted request to an unexpected destination." When SSRF is present in a web application, the attackers can send requests while pretending to be the victim server. Because the server is a trusted entity, these requests may result in access to sensitive, and administrative functions like internal API calls and [Database Queries](../../Skills/Software%20Development/Database%20Queries.md). SSRF can occur when servers send requests to [Fetch](../../Skills/Web%20Development/Fetch.md) external resources, this is a normal behavior. For example, when a web app needs to display a graphic that is stored somewhere else. However, to prevent SSRF, an only-allowed or not-allowed list should be enforced. If you know that legitimate external resources are coming from a specific location, then you can allow only that IP address or host name. If not, you can use a not-allowed list, and make sure that the server is not allowed to request sensitive internal resources. The key takeaway for this category is that when web applications are vulnerable to SSRF, attackers may be able to bypass regular access controls by masquerading as the server. The official OWASP Top 10 documentation
>
> **[1:37](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=97)** contains several references, which I encourage you to explore if you want to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (3), [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** ssrf (6), owasp (3), api (1)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go from here with the 2021 OWASP Top Ten](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=1)** - [Instructor] And that's the [OWASP](../../Skills/Cybersecurity/OWASP.md) top 10. Now that we've gone through all 10 items, I want to remind you that while they are presented in order, the practical reality is that all of these issues are extremely pervasive. The web apps that your organization is building do have security vulnerabilities, and you need to be on the lookout. So while these are the latest top 10 for the industry, what I think is actually most important for you to focus on is the top 10 or top three or top five for your specific organization. Talk to your security team, ask about the types of issues that have been found in recent scans and pen tests. If you can become an expert on the top three security vulnerabilities that are in your code, then you're in a stronger position to be able to find, fix and prevent those issues. Finally, it's not just the security team who is responsible for the security of your web applications. It's not just the developers either. There are a lot of people who come together to build software: product managers, designers, developers, testers, operations folks, and the only way to truly build secure web apps is to have all of these folks on the same page and working together to make it happen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Caroline Wong](../../Instructors/Cybersecurity/Caroline%20Wong.md)

## Skills Covered

- OWASP
- Web Application Security

## Path Context

### In [Navigating the Cybersecurity Threat Landscape](../../Paths/Cybersecurity/Learning%20Paths/Navigating%20the%20Cybersecurity%20Threat%20Landscape.md)
← [Demystifying Advanced and Complex Security Topics](Demystifying%20Advanced%20and%20Complex%20Security%20Topics.md) | **3 of 8** | [Introduction to Identity and Access Management](Introduction%20to%20Identity%20and%20Access%20Management.md) →

### In [Become a Cybersecurity Professional](../../Paths/Cybersecurity/Learning%20Paths/Become%20a%20Cybersecurity%20Professional.md)
← [The Cybersecurity Threat Landscape](The%20Cybersecurity%20Threat%20Landscape.md) | **3 of 5** | [Cybersecurity Careers and Certifications](Cybersecurity%20Careers%20and%20Certifications.md) →

### In [Explore a Career in Application Security](../../Paths/Cybersecurity/Learning%20Paths/Explore%20a%20Career%20in%20Application%20Security.md)
← [Penetration Testing Essential Training](Penetration%20Testing%20Essential%20Training.md) | **3 of 7** | [Security Testing Essential Training (2022)](Security%20Testing%20Essential%20Training%20(2022).md) →

### In [Master the OWASP Top 10](../../Paths/Cybersecurity/Learning%20Paths/Master%20the%20OWASP%20Top%2010.md)
**1 of 6** | [OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures](OWASP%20Top%2010-%20-1%20Broken%20Access%20Control%20and%20-2%20Cryptographic%20Failures.md) →

## Appears In

- [Navigating the Cybersecurity Threat Landscape](../../Paths/Cybersecurity/Learning%20Paths/Navigating%20the%20Cybersecurity%20Threat%20Landscape.md)
- [Become a Cybersecurity Professional](../../Paths/Cybersecurity/Learning%20Paths/Become%20a%20Cybersecurity%20Professional.md)
- [Explore a Career in Application Security](../../Paths/Cybersecurity/Learning%20Paths/Explore%20a%20Career%20in%20Application%20Security.md)
- [Master the OWASP Top 10](../../Paths/Cybersecurity/Learning%20Paths/Master%20the%20OWASP%20Top%2010.md)

## Related Courses

_Courses sharing skills:_

- [OWASP Top 10- -9 Security Logging and Monitoring Failures and -10 Server-Side Request Forgery](OWASP%20Top%2010-%20-9%20Security%20Logging%20and%20Monitoring%20Failures%20and%20-10%20Server-Side%20Request%20Forgery.md) — OWASP, Web Application Security
- [Wordpress Building A Secure Site](../Web%20Development/Wordpress%20Building%20A%20Secure%20Site.md) — Web Application Security
- [OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures](OWASP%20Top%2010-%20-7%20Identification%20and%20Authentication%20Failures%20and%20-8%20Software%20and%20Data%20Integrity%20Failures.md) — OWASP
- [OWASP Top 10- -3 Injection and -4 Insecure Design](OWASP%20Top%2010-%20-3%20Injection%20and%20-4%20Insecure%20Design.md) — Web Application Security
- [OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures](OWASP%20Top%2010-%20-1%20Broken%20Access%20Control%20and%20-2%20Cryptographic%20Failures.md) — OWASP

---

[↑ Back to top](#)