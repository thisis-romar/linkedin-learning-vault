---
type: course
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
tags:
  - course
  - topic/security
  - skill/owasp
  - skill/web-application-security
status: not-started
created: 2026-04-17
---

# Learning the OWASP Top 10

> No organization—no matter how large or small—is invulnerable to security breaches. What makes all of these systems, and the software that runs them, susceptible to attack? The Open Web Application Security Project (OWASP) was formed to provide the public with the resources to understand key risks and improve software security. And every few years, they publish a list of the ten biggest application

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599) | 35m | Beginner | 68K learners

## Instructor

- [[Caroline Wong]]

## Skills Covered

- OWASP
- Web Application Security

## Table of Contents

### Introduction

#### A first look at the 2021 OWASP Top Ten
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=0)** - Every day we see news reports of major companies getting breached.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=5)** When it comes to cybersecurity, it can feel overwhelming to know where to focus.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=10)** Fortunately, OWASP narrows it down for us.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=14)** OWASP stands for Open Web Application Security Project.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=18)** For decades, this group has been providing resources to educate and inform technology professionals about security best practices.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=27)** Every few years, they publish a list of the top 10 most common AppSec vulnerabilities.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=34)** In this course, we'll look at the most recent OWASP top 10 vulnerabilities and discuss some of the implications for your organization and what you're building.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=43)** I'm Caroline and I'm the Chief Strategy Officer at Cobalt.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=47)** I've been working in cybersecurity for nearly two decades.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/a-first-look-at-the-2021-owasp-top-ten-23316459?u=76281980&t=51)** I am so excited to share this LinkedIn learning course so let's dive in.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (3)
> **Code Keywords:** let (1)
> **Definitions:** stands for (1)
> **Speakers:** - every (1)


### 1. New to the Top Ten

#### Broken access control
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=0)** - [Instructor] The first item in the 2021 OWASP Top 10 is Broken Access Control.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=6)** OWASP says this exposure occurs when confidential information is viewed by a user who should not have permission to access that data.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=15)** Let's break it down.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=17)** In order to talk about Broken Access Control, first, we should define Access Control.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=24)** Access Control is making sure that people have access to what they're supposed to have access to and making sure people don't have access to what they're not.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=34)** Broken Access Control is exactly the opposite.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=39)** You have access to information you shouldn't.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=42)** And what happens when people have access to information they're not supposed to?
>
> **[0:46](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=46)** Well, this is a perfect way to breach the confidentiality, integrity and availability of a web application.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=54)** A person with unintended access might be able to read, edit, or delete private data.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=60)** Let's explore a couple different examples.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=63)** The first scenario is when sensitive information is exposed to an unauthorized person, software is built assuming that different people are going to use it.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=73)** And each user will have permissions that are specific to their user role.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=78)** Typical roles might include an anonymous user, a visitor, an employee, a content contributor, an administrator or developer.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=86)** Broken Access Control occurs when a user is able to act beyond the permissions of their role.
>
> **[1:32](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=92)** This might happen if a web app accidentally shares information with users who are not supposed to have it.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=100)** If I have a social media account that's private, the only people that are supposed to see it are my friends and family that I've approved.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=109)** If someone else goes to my profile and can see all the photos, my kids and pets, that's Broken Access Control.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=117)** It's also kind of like if someone in the human resources department prints out a document that has all the employee performance evaluations and forgets to pick up the paper from the printer, leaving it out in plain view for anyone who walks by to see that confidential information.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=135)** The key takeaway here is to make sure that you're not unintentionally leaving private data around for just anyone to stumble upon physically or on the web.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=146)** Our second scenario is conceptually similar to the previous example, but instead of just leaving sensitive data out in plain sight available for anyone to view, it accidentally gets sent to someone who is not supposed to have it.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=160)** The subtle difference here is in the first scenario, the private data is just there for anyone to see, it's accidentally shared.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=169)** In this case, the private data is actually sent to the person who shouldn't have it.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=175)** Imagine if that same human resources person from scenario one tries to send all employee performance evaluations, to someone else in the human resources department in an email, but accidentally types the wrong email address into the to field and it unintentionally gets sent to everyone in the company instead.
>
> **[3:17](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=197)** Another example to consider might be if you're at the doctor's office and you finished your appointment, you're just waiting for the nurse to bring you a printed summary of your diagnosis and treatment.
>
> **[3:28](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=208)** The nurse comes in, and hands you the paperwork, you look at it and it's actually not yours, it's someone else's, the nurse made a mistake, and now you have access to someone else's medical data.
>
> **[3:42](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=222)** The takeaway here is that when you're sending private information, you need to really make sure that you're sending it to the right person.
>
> **[3:51](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=231)** These examples might seem kind of obvious, but this is the most common vulnerability in the 2021, OWASP Top 10.
>
> **[3:59](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=239)** When we're building and testing new web applications, we tend to test the positive path a lot, but we don't always consider what an alternative path might be.
>
> **[4:10](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=250)** People aren't as altruistic as we'd like to believe, and people misuse and abuse things all the time.
>
> **[4:17](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=257)** If we don't take into account that people are going to do the wrong thing, a lot more than we want them to, it has the potential to result in huge problems.
>
> **[4:28](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/broken-access-control?u=76281980&t=268)** The bottom line is that when you're building a web app, you have to be really intentional about building solid access control into your system.

> [!info]- Semantic Content
>
> **Code Keywords:** private (6), let (2), delete (1), case, (1)
> **Env Vars:** owasp (3)
> **Analogies:** kind of like (1), similar to (1), imagine (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Cryptographic failures
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=1)** - [Instructor] The second item in the 2021 OWASP Top 10 is cryptographic failure.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=7)** OWASP says, the first thing is to determine the protection needs of data in transit and at rest.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=14)** Passwords, credit card numbers, health records, personal information, and business secrets require extra protection.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=22)** This vulnerability category actually has two parts.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=26)** The first part recommends that folks who build web applications think about the data that's being collected, stored, and used.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=34)** Data that is more sensitive, restricted, regulated, or otherwise private, should be more protected than less sensitive data.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=42)** One important lever that we have to protect data is to encrypt it.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=48)** The second part recommends that once a decision has been made to encrypt certain data types, that web app developers follow well-known proven procedures to ensure that encryption is effective.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=62)** Encryption involves many different steps and folks frequently make mistakes when trying to implement them.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=69)** In our digital and our physical lives alike, we want to protect that, which we value the most.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=76)** I value my young children.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=78)** And so I make sure that when they're riding in the car, they sit in protective car seats.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=84)** I value my online banking password, and I expect that the web app that allows me to bank online is encrypting my password.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=94)** Once the decision has been made to protect something of value, steps, need to be taken, to implement the additional protection.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=102)** First, if you don't have to store sensitive data in the first place, don't.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=108)** If your web app needs to process payments, consider integrating with a payment platform like PayPal, which can handle the payment data on your behalf.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=117)** If you don't store sensitive data, then you don't have to worry about how to protect it.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=123)** Secondly, if you are storing sensitive data, encrypt it both at rest and in transit.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=130)** Third, if you are encrypting data, use known strong cryptographic algorithms.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=136)** For example, MD5 is a weak algorithm and should not be used, while AES is a strong algorithm, which should be used.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=145)** The full text for this vulnerability category in the OWASP Top 10 also includes several additional techniques that I encourage you to read If you're interested in learning more.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=157)** OWASP also has several cheat sheets that cover various aspects related to cryptographic failure.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=165)** The two takeaways here are number one, if you have data that needs protecting in a web app, you should encrypt it.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/cryptographic-failures?u=76281980&t=172)** And number two, if you've decided to encrypt some data, make sure you're following best practices.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (4), md5 (1), aes (1)
> **CLI Commands:** make (3)
> **Code Keywords:** require (1), private (1), protected (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Injection
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=1)** - [Instructor] The third item in the 2021 OWASP Top 10 is injection.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=6)** Here's a thing about computer science, code can either represent data or be an instruction.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=12)** Injection happens when an application accepts data as input and processes it as an instruction rather than just as data.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=21)** OWASP says an application is vulnerable to attack when hostile data is directly used.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=28)** One analogy to consider might be if you adopt a dog from an animal rescue and the paperwork that you have to fill out requires that you give the dog a name.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=38)** What if you picked a name like Sit?
>
> **[0:41](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=41)** Because Sit happens to be a very common command that you would ask a dog to obey, that particular name could be really confusing for the dog.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=50)** Sit, come here, Sit.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=54)** Is a dog supposed to respond to the word sit as though it's its name, or is it supposed to respond to the word sit as though it's an instruction for what to do?
>
> **[1:04](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=64)** Injection vulnerabilities occur in web applications when there's an opportunity for a user to provide some input and the application handles it incorrectly.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=75)** A bad actor could actually inject some malicious code that ends up being interpreted as an instruction for the web app to follow.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=83)** Think about it, web apps ask users for input all the time.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=88)** Whether you're typing a comment into a community forum or submitting data in a web form, there's the intended way that the app is supposed to handle the data, but if the application is vulnerable to injection, then malicious input could result in an unintended outcome.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=107)** One version of injection is cross-site scripting in which the application does not neutralize user input.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=114)** This means that the application does not somehow make sure that whatever input is provided by the user is actually safe, legitimate and in the format that the app intends for it to be.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=127)** Going back to the rescue dog analogy.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=130)** One way that the folks at the animal rescue might prevent confusing names that sound like commands is checking the name against a list that includes words like sit, come and fetch.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=143)** This could go a long way to preventing a situation where a dog might be named Sit and interpret its name as an instruction.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=153)** To bring it back to web apps, a web form might ask you for your birthday, something the web app could do to make sure you're inputting data that is expected into the field might be to confirm that the user input consists of six digits, two to represent your birthday month, two to represent the day of the month and two to represent your birthday year.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=177)** If someone types all letters or include special characters in the birthday field, the web app could check and determine that the formatting is not correct.
>
> **[3:06](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=186)** And maybe it displays a user error instead of further interpreting that data.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=192)** Injection attacks can also be used against web apps that connect to backend databases in order to carry out instructions that violate the confidentiality, integrity or availability of the information in those databases.
>
> **[3:28](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=208)** These databases are frequently coded in a language called SQL and a malicious attacker launching a SQL injection attack is attempting to create, read, update, or delete something that they're not supposed to in a backend SQL database.
>
> **[3:43](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=223)** They take advantage of a user input field that doesn't check to make sure that user input is appropriate and trick the software application into following their instructions.
>
> **[3:55](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=235)** The takeaway here is that if your web application takes user input, you need to make sure input is neutralized or otherwise verified so a malicious attacker can't send instructions directly to the app.
>
> **[4:09](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/injection?u=76281980&t=249)** If you don't, you're potentially letting bad actors give commands to your application, and that's something that should only be done by you.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), owasp (2)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** delete (1)
> **Speakers:** - [instructor] (1)

#### Insecure design
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=0)** - [Instructor] The fourth item in the 2021 OWASP Top 10 is a new one, insecure design.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=8)** OWASP calls it a new category focusing on risks related to design and architectural flaws.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=15)** Personally, I think this is super exciting.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=18)** Historically, most of the items in the OWASP Top 10 focus on code-level bug-type vulnerabilities, and this one actually addresses design-level flaw-type vulnerabilities.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=31)** In some ways, building a web app is like building a house.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=35)** You can think about bugs in the application as being similar to smaller problems that might affect your house, like a broken dishwasher seal or a light bulb that needs to be replaced.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=45)** In the grand scheme of things, these are relatively minor problems with straightforward fixes.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=52)** A design error, however, can be the root cause of a much larger problem.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=58)** Imagine you're planning to build a house that's going to reside on the side of a hill.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=63)** If you don't plan for a strong foundation in the design phase, then it's going to be fundamentally unstable.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=72)** One type of insecure design happens when the web application generates an error message that includes sensitive information.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=81)** There are many valid reasons why a web app might generate an error message.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=86)** During the development phase, error messages can help with troubleshooting.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=90)** However, it's important to eliminate unnecessary error messages before the code is pushed to production, especially because these types of error messages may contain information that can be used by malicious actors to craft an attack.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=105)** Let's say you're interacting with a web application.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=108)** You're typing and clicking and all of a sudden, you receive an error message.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=112)** The error includes the exact location of an important configuration file.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=118)** A malicious user could use that information to obtain private information or change the file.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=125)** Another type of design flaw is when passwords are stored in plaintext.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=130)** This kind of vulnerability is not a mistake in the cryptographic implementation.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=134)** This is an intentional design decision not to encrypt the passwords.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=140)** Clearly, this is not an ideal setup for a secure web application.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=146)** The full text for this vulnerability category in the OWASP Top 10 also includes dozens of examples that I encourage you to explore if you're interested in learning more.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=157)** The bottom line is that security matters not only when code is being developed and in production, but in the design phase as well.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/insecure-design?u=76281980&t=165)** Teams that work together to build web applications should consult with security experts to ensure that appropriate requirements and design decisions are being made early in the software development lifecycle.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (4)
> **Code Keywords:** super (1), let (1), private (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** similar to (1), imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Security misconfiguration
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=1)** - [Instructor] The fifth item in the 2021 OWASP top 10 is security misconfiguration.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=7)** OWASP says the application might be vulnerable if it is without a concerted, repeatable application security configuration process.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=16)** You can think of security misconfiguration as having a default setup that is not very secure.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=22)** For example, if you decide to go on a bike ride and you don't wear a helmet, that might be considered a security misconfiguration.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=31)** If, on the other hand, you do decide to wear a helmet and it's properly fitted and appropriate for the type of riding that you're doing, that would be considered a more secure configuration.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=43)** Security folks use the term hardened to describe something that is securely configured.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=50)** Some other physical analogies for security misconfiguration include leaving your house and forgetting to lock the door, going for a drive in the car and deciding not to buckle your seatbelt.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=63)** A digital security misconfiguration would be if you chose not to use a passcode on your mobile device.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=71)** In the case of web applications, examples of security misconfiguration include failing to change default passwords, enabling unnecessary services or features, insecurely configuring cloud services permissions, and failing to update software.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=89)** Security misconfigurations include both a failure to change default passwords, as well as a failure to use strong passwords, especially for critical systems like update servers.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=103)** Given this highly vulnerable scenario, it's unfortunately not surprising that malicious threat actors took advantage of the situation and planted some malware.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=114)** In order to address security misconfiguration, ideally, each and every setting or configuration should be identified and evaluated to determine if the most appropriate security setting has been implemented.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=130)** I've worked directly with technology teams to harden systems according to the industry's standard guidelines for securely configuring software, the Center for Internet Security, or CIS, Benchmarks.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=144)** Today, the CIS Benchmarks include a group of more than 100 configuration guidelines across dozens of technologies in use today, from AWS to Zoom.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=156)** From a security perspective, it would be ideal to always comply perfectly with these hardening standards.
>
> **[2:42](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=162)** However, the reality is that each organization has a different risk tolerance and different types of requirements that must be met.
>
> **[2:51](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-misconfiguration-24396269?u=76281980&t=171)** The best practical scenario involves one where all the teams involved understand the fundamental concept of security misconfiguration and make decisions purposefully with knowledge of the risks involved.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (2), cis (2), aws (1)
> **CLI Commands:** aws (1), make (1)
> **Code Keywords:** if, (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Vulnerable and outdated components
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=1)** - [Instructor] The sixth item in the 2021 OWASP Top 10 is vulnerable and outdated components.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=7)** OWASP says, "You're likely vulnerable: if you don't know all the versions of all the components you use, and if the software is vulnerable, unsupported, or out of date."
>
> **[0:18](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=18)** The thing about modern software is that the vast majority of web applications are built using open source or third-party components.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=26)** Naturally, if the components that are used to build the web application are vulnerable, then the web app will be vulnerable as well.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=34)** Consider the physical analogy of building a house.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=38)** If you're building a house and using insulation materials that contain asbestos, then the house is going to contain asbestos and anyone who spends time in that house is vulnerable to disease.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=49)** If you're making a ceramic bowl, and the glaze that you use to decorate the bowl contains lead, then anyone who eats food out of that bowl is vulnerable to lead poisoning.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=60)** You can see how this might manifest when it comes to web applications that are built using different software components.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=67)** A vulnerable and outdated software component problem is actually exactly what led to the 2017 Equifax breach.
>
> **[1:16](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=76)** Equifax was using a component called Apache Struts, which was known to be vulnerable and for which a patch was available.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=83)** Unfortunately, Equifax did not deploy the patch and malicious actors took advantage of the vulnerability.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=91)** To be far to Equifax, it's not easy to install software updates and deploy patches across a huge enterprise organization.
>
> **[1:39](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=99)** Doing this effectively requires stakeholder buy-in and collaboration between technology and security teams.
>
> **[1:47](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=107)** There is also a trade-off that every software organization must consider.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=112)** Any time spent addressing a security vulnerability is time that is not being used to build new product features.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=120)** In order to prevent this type of vulnerability from being exploited, there are a few important steps that organizations must take.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=129)** First, you need to know what your assets are.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=132)** You should always have a complete and up-to-date list of all software components and their versions.
>
> **[2:18](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=138)** Second, you need to know if each component is vulnerable or not.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=142)** You can do this by researching known vulnerabilities, as well as proactively testing your applications.
>
> **[2:29](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=149)** Third, you need to update software which is out of date, and you need to patch known vulnerabilities.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=157)** The most interesting thing about this vulnerability is that it's not really a technical problem, it's more of a people and process problem.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=165)** This makes it a bit different from some others in the OWASP Top 10.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/vulnerable-and-outdated-components?u=76281980&t=170)** The solution requires effective buy-in from stakeholders and a robust and repeatable process that covers asset inventory, vulnerability discovery, and remediation.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (3)
> **CLI Commands:** apache (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Identification and authentication failures
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=1)** - [Instructor] The seventh item in the 2021 OWASP Top 10 is identification and authentication failures.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=8)** OWASP says confirmation of the user's identity, authentication, and session management is critical to protect against authentication-related attacks.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=19)** Basically, a web app should confirm that you are who you say you are.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=25)** One type of failure is when an actor claims to have a given identity and the software does not prove that the claim is correct.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=33)** Imagine you show up to the airport and you claim to be the pilot.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=36)** You're about to fly a plane.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=38)** What if no one checks your identity to confirm that you have the proper documentation?
>
> **[0:44](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=44)** What if they don't ask for ID at all?
>
> **[0:46](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=46)** In a web application, this could happen during a forgot my password flow.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=52)** Say I forget the password to one of my hundreds of online accounts and I click the button that says I forgot my password.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=59)** At this point, a check is supposed to be done, like I have to type in a code that I get via an SMS in order to prove that I am who I claim to be so that I can get back into my account.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=72)** The application needs to ask me for the code and verify that the code is correct.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=78)** If either of these steps is skipped or done incorrectly, then that is considered an identification and authentication failure.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=87)** Another type of failure is when the software communicates with a host that provides a certificate, but does not ensure that their certificate is actually associated with that host.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=98)** Whereas in the former case with the pilot where no one is asking for ID at all, in this case, they ask to see your ID, but don't confirm that it's the right one.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=109)** They just assume that because you're providing ID, it's correct without actually checking.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=116)** This type of vulnerability is exploited by attackers who want to send their victims to a fake website.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=122)** If the attacker can convince the web app that their host is legitimate by using a certificate that doesn't get validated, then the users could be sent to a fake, potentially malicious website.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=136)** A third type is when a web app establishes a new user session without closing out the previous one.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=144)** This is like if someone drives up to a gas station and your credit card is still in the machine.
>
> **[2:29](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=149)** Even though it's not their card, your session is still active and they can use it to pay for their gas.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=158)** When a web app has this vulnerability, it does not invalidate the previous session before authenticating a new user.
>
> **[2:46](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=166)** It's kind of like if you log onto your email from a computer in the library and then forget to log out before you leave.
>
> **[2:53](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=173)** The next person who sits down may be able to access your account.
>
> **[2:58](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=178)** The common theme for this seventh item in the OWASP Top 10 is that web applications should identify users and authenticate them properly.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=188)** Conceptually, it sounds so simple, right?
>
> **[3:11](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/identification-and-authentication-failures?u=76281980&t=191)** In reality, it can be more complex for a variety of reasons.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (3), sms (1)
> **Analogies:** imagine (1), kind of like (1)
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)

#### Software and data integrity failures
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=1)** - [Instructor] The eighth item in the 2021 OWASP top 10 is software and data integrity failures.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=7)** OWSP says, "An insecure CI/CD pipeline can introduce the potential for system compromise.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=14)** Many applications now include auto-update functionality, where updates are downloaded without sufficient verification."
>
> **[0:22](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=22)** The eighth item is actually a subset of the sixth, specifically, vulnerabilities that happen as a result of an insecure CI/CD pipeline.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=32)** Modern software development processes like Agile, DevOps and CI/CD have changed the way that web applications are built.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=40)** These processes are optimized for rapid iterative development, and naturally include a lot of automation.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=48)** From a delivery side, this is great news, but from a security perspective, there's a potential problem.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=55)** Sometimes the automated process takes something insecure and puts it into the software automatically, creating a security vulnerability.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=64)** If automated processes are not subject to security validation, then the software is potentially vulnerable.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=71)** You might be wondering, why didn't the OWASP folks combine the sixth and the eighth into a single vulnerability category?
>
> **[1:18](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=78)** I think it's because they really want to highlight and address the security risks involved in today's modern and pervasive approach to rapid and iterative software development.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=90)** Consider a fun process in the analog world, a chocolate making factory.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=95)** There's a series of machines that process raw material, like cacao beans, sugar, and milk, into a final product, chocolate, that is ready for customers to purchase.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=105)** These raw materials come from external sources outside of the factory, and the quality of these raw materials will naturally affect the quality of the finished product.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=114)** If the raw materials are of poor quality, then the chocolate won't be as good.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=120)** You can think about making software in the same way.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=123)** The raw ingredients that go into making the software, various plugins, libraries, et cetera, from sources like repositories and content delivery networks affect the quality and the security of the final software product.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=136)** The other key difference between the eighth, software and data integrity failures, and the sixth, vulnerable and outdated components, is that the eighth places additional emphasis on the fact that software applications often receive updates from the vendor.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=152)** And if these updates are not secured, then naturally the update will result in an insecure software application.
>
> **[2:39](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=159)** Malicious attackers are taking advantage of these software updates and using them to install their malware as well.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=167)** Finally, if you're familiar with insecure deserialization from the 2017 version, this category also includes that same fundamental concept.
>
> **[2:58](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=178)** In a nutshell, serialization is the process of taking a digital object and reformatting it for easy transport or storage.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=188)** Deserialization is when you take that version and transform it back into the original object.
>
> **[3:15](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=195)** If someone malicious messes with the reformatted version before it's transformed back, it can result in undesirable consequences.
>
> **[3:24](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/software-and-data-integrity-failures?u=76281980&t=204)** The key takeaway here is to be aware of automated processes in the software development life cycle, and to ensure that these are verified to be secure.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (3)
> **Env Vars:** owasp (2), owsp (1)
> **Code Keywords:** finally, (1)
> **Warnings:** be aware (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Security logging and monitoring failures
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=1)** - [Instructor] The ninth item in the 2021 OWASP top 10 is security logging and monitoring failures.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=7)** OWASP says, "Without logging and monitoring, breaches cannot be detected."
>
> **[0:13](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=13)** When I started my career in this field, I found it somewhat challenging to explain to my friends and family what I do for work.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=20)** Now, everyone gets it because we see it all the time in mainstream media.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=24)** Unfortunately, most people have also had their own personal information compromised as the result of a data breach.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=32)** The ninth item in the OWASP top 10 is rooted in this fundamental belief that security incidents are bound to happen.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=41)** The thing about security breaches is that it's not all or nothing.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=45)** Hackers do their work one step at a time, and each step builds upon the previous one.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=52)** Consider a burglar who's walking down the street, checking car doors to see if someone left their car unlocked.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=59)** They find one and they get in.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=62)** In the center console, they find a garage door opener, and in the glove box, they find the registration papers.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=70)** Next, the burglar goes to the address listed on the papers and uses the garage door opener to open the garage.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=78)** They explore the garage, opening drawers and peeking into cabinets.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=82)** One of the cabinets has several keys hanging on hooks and they are conveniently labeled.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=87)** One of them says House.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=90)** After that, the burglar uses the key to open the door to the main house and the burglary continues.
>
> **[1:38](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=98)** Now, imagine if there had been a detection or logging mechanism at each step.
>
> **[1:43](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=103)** What if the car doors were monitored and the owner received a notification every time a car door was opened?
>
> **[1:50](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=110)** What about for the glove box and the garage door?
>
> **[1:54](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=114)** At each step of the attack, logging and monitoring gives us an opportunity to stop the attacker in their tracks.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=122)** The UK National Cybersecurity Center in their Introduction to Logging for Security Purposes Guide has a useful table of questions that helps security practitioners design their logging and monitoring setups.
>
> **[2:15](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=135)** And some questions include: Who has viewed or downloaded a specific file?
>
> **[2:20](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=140)** Have any incorrect authentication attempts occurred?
>
> **[2:24](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=144)** Who has logged in recently?
>
> **[2:26](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=146)** Have authentication events happened at unexpected times or from unexpected locations?
>
> **[2:32](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=152)** The crazy thing about security breaches is that they often go undetected for weeks, months, even years.
>
> **[2:40](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=160)** The 2021 Data Breach Investigations Report shows that about 20% of breaches go undiscovered for months.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=169)** The longer they go undetected, the more steps an attacker can take and the more negative impact they can cause.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=177)** So, what can be done to reduce the damage caused by an attack?
>
> **[3:03](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/security-logging-and-monitoring-failures?u=76281980&t=183)** Logging, monitoring, and alerting allows for security and technology teams to discover that an attacker has infiltrated systems and ideally stop them before they can do more damage.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Env Vars:** owasp (3)
> **UI Navigation:** open the (2)
> **Code Keywords:** include: (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Server-side request forgery (SSRF)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=1)** - [Instructor] The 10th and final item in the 2021 OWASP Top 10 is Server Side Request Forgery, also known as SSRF.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=11)** OWASP says, "SSRF flaws allow an attacker to coerce the application, to send a crafted request to an unexpected destination."
>
> **[0:21](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=21)** When SSRF is present in a web application, the attackers can send requests while pretending to be the victim server.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=29)** Because the server is a trusted entity, these requests may result in access to sensitive, and administrative functions like internal API calls and database queries.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=42)** SSRF can occur when servers send requests to fetch external resources, this is a normal behavior.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=50)** For example, when a web app needs to display a graphic that is stored somewhere else.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=54)** However, to prevent SSRF, an only-allowed or not-allowed list should be enforced.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=62)** If you know that legitimate external resources are coming from a specific location, then you can allow only that IP address or host name.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=72)** If not, you can use a not-allowed list, and make sure that the server is not allowed to request sensitive internal resources.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=81)** The key takeaway for this category is that when web applications are vulnerable to SSRF, attackers may be able to bypass regular access controls by masquerading as the server.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/server-side-request-forgery-ssrf?u=76281980&t=94)** The official OWASP Top 10 documentation contains several references, which I encourage you to explore if you want to learn more.

> [!info]- Semantic Content
>
> **Env Vars:** ssrf (6), owasp (3), api (1)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** make (1)
> **Code Keywords:** else. (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Where to go from here with the 2021 OWASP Top Ten
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=1)** - [Instructor] And that's the OWASP top 10.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=4)** Now that we've gone through all 10 items, I want to remind you that while they are presented in order, the practical reality is that all of these issues are extremely pervasive.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=14)** The web apps that your organization is building do have security vulnerabilities, and you need to be on the lookout.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=22)** So while these are the latest top 10 for the industry, what I think is actually most important for you to focus on is the top 10 or top three or top five for your specific organization.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=35)** Talk to your security team, ask about the types of issues that have been found in recent scans and pen tests.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=42)** If you can become an expert on the top three security vulnerabilities that are in your code, then you're in a stronger position to be able to find, fix and prevent those issues.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=53)** Finally, it's not just the security team who is responsible for the security of your web applications.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=60)** It's not just the developers either.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-owasp-top-10-9364599/where-to-go-from-here-with-the-2021-owasp-top-ten?u=76281980&t=62)** There are a lot of people who come together to build software: product managers, designers, developers, testers, operations folks, and the only way to truly build secure web apps is to have all of these folks on the same page and working together to make it happen.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Navigating the Cybersecurity Threat Landscape]]
← [[Demystifying Advanced and Complex Security Topics]] | **3 of 8** | [[Introduction to Identity and Access Management]] →

### In [[Become a Cybersecurity Professional]]
← [[The Cybersecurity Threat Landscape]] | **3 of 5** | [[Cybersecurity Careers and Certifications]] →

### In [[Explore a Career in Application Security]]
← [[Penetration Testing Essential Training]] | **3 of 7** | [[Security Testing Essential Training (2022)]] →

### In [[Master the OWASP Top 10]]
**1 of 6** | [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] →

## Appears In

- [[Navigating the Cybersecurity Threat Landscape]]
- [[Become a Cybersecurity Professional]]
- [[Explore a Career in Application Security]]
- [[Master the OWASP Top 10]]

## Related Courses

_Courses sharing skills:_

- [[OWASP Top 10- -9 Security Logging and Monitoring Failures and -10 Server-Side Request Forgery]] — OWASP, Web Application Security
- [[Wordpress Building A Secure Site]] — Web Application Security
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — OWASP
- [[OWASP Top 10- -3 Injection and -4 Insecure Design]] — Web Application Security
- [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] — OWASP
