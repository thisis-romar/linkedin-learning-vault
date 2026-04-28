---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures
url: "https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures"
duration_minutes: 39
duration: 39m
level: Intermediate
updated: 10/25/2023
learners: 177777
skills:
  - OWASP
  - Application Security
  - Secure Authentication
  - Identity and Access Management (IAM)
  - Data Integrity
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGnb7pdkDwkiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698103237077?e=2147483647&amp;v=beta&amp;t=2cbMXy-nXNx-pCPx4P7H51UiVDrhs6dSjrgJtF3jOFU"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Master the OWASP Top 10]]'
prev_courses:
  - '[[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]]'
next_courses:
  - '[[OWASP Top 10- -9 Security Logging and Monitoring Failures and -10 Server-Side Request Forgery]]'
path_nav: '[{"path":"Master the OWASP Top 10","position":5,"total":6,"prev":"OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components","next":"OWASP Top 10- -9 Security Logging and Monitoring Failures and -10 Server-Side Request Forgery"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/owasp
  - skill/application-security
  - skill/secure-authentication
  - skill/identity-and-access-management-iam
  - skill/data-integrity
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/OWASP%20Top%2010-%20-7%20Identification%20and%20Authentication%20Failures%20and%20-8%20Software%20and%20Data%20Integrity%20Failures.md)

![OWASP Top 10: #7 Identification and Authentication Failures and #8 Software and Data Integrity Failures](https://media.licdn.com/dms/image/v2/D560DAQGnb7pdkDwkiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698103237077?e=2147483647&amp;v=beta&amp;t=2cbMXy-nXNx-pCPx4P7H51UiVDrhs6dSjrgJtF3jOFU)

# OWASP Top 10: #7 Identification and Authentication Failures and #8 Software and Data Integrity Failures

> Failures related to identity, authentication, and software and data integrity loom large in web application development. You need to keep security vulnerabilities top of mind, but how do you prepare for a possible attack? In this course, instructor and application security expert Caroline Wong gives you an overview of the seventh and eighth most common vulnerabilities listed on the 2021 Open Web A

> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures) | 39m | Intermediate | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Identification and Authentication Failures** (6 videos)
- **3. 2. Software and Data Integrity Failures** (6 videos)
- **4. Conclusion** (1 videos)

### 1. Introduction

#### OWASP Top 10
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=0)** - We use web applications every day, in both our personal and our professional lives.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=6)** We want them to be safe and secure.
>
> **[0:08](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=8)** The best way to secure web apps is to find and fix security vulnerabilities.
>
> **[0:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=14)** OWASP stands for Open Web Application Security Project and the top 10 list is a resource for any and everyone who is involved in building web applications.
>
> **[0:24](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=24)** This course covers the seventh and eighth categories in the 2021 OWASP top 10.
>
> **[0:31](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=31)** Identification and authentication failures and software and data integrity failures.
>
> **[0:36](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=36)** I'm Caroline Wong, Chief Strategy Officer at Cobalt.
>
> **[0:40](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=40)** Come and join me.
>
> **[0:41](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=41)** Let's empower ourselves so that we can build more secure web applications.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - we (1)

#### OWASP Top 10 series
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980&t=0)** - [Instructor] Here are a few things that may be helpful to know so that you can get the most out of this course.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980&t=6)** First, this course covers the seventh and eighth categories in the 2021 OWASP Top 10.
>
> **[0:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980&t=14)** I recommend watching my previous courses that cover the first several categories.
>
> **[0:19](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980&t=19)** You may also want to watch my OWASP Basics course, which provides a high-level overview of all of the items in the 2021 Top 10.
>
> **[0:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980&t=30)** This course is designed for anyone who is involved in building web applications and wants to make them secure.
>
> **[0:39](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980&t=39)** This includes software developers, architects, product and project managers, and, of course, cybersecurity professionals.
>
> **[0:48](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980&t=48)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Identification and Authentication Failures

#### What are identification and authentication failures?
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=0)** - [Instructor] The seventh item in the 2021 OWASP Top 10 is Identification and Authentication Failures.
>
> **[0:08](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=8)** OWASP says confirmation of the user's identity, authentication, and session management is critical to protect against authentication related attacks.
>
> **[0:20](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=20)** What does this mean in plain language?
>
> **[0:23](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=23)** Basically, a web application should confirm that you are who you say you are.
>
> **[0:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=30)** A web application that is vulnerable to identification and authentication failures might have one of the following types of problems.
>
> **[0:40](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=40)** A web application may allow easily compromised passwords.
>
> **[0:46](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=46)** If a web app does not require strong, complex passwords and allows weak passwords like password, password123, or admin, then user accounts are vulnerable to compromise, and bad actors can gain control of accounts that do not belong to them.
>
> **[1:05](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=65)** If you're watching this course and thinking to yourself, "Uh-oh, I actually use password123 for my online banking.", then now is a great time to pause this video and change your password.
>
> **[1:20](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=80)** A web application may not use or require multi-factor authentication.
>
> **[1:28](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=88)** Multi-factor authentication, commonly referred to in practice as two factor-authentication, is an excellent security control for preventing account compromise by bad actors.
>
> **[1:41](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=101)** Without it, passwords are easily guessed, and accounts are easily taken over.
>
> **[1:47](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=107)** A more secure web app needs to not only ask for evidence that a user is who they claim to be, it also needs to check that evidence against some sort of validation data.
>
> **[2:01](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=121)** An example of this might be confirming that a user's responses to security questions match the data which was previously provided by a legitimate user.
>
> **[2:13](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=133)** A web application may fail to terminate a previously authenticated session before allowing a new user to establish a new session.
>
> **[2:23](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=143)** A secure session assumes that the identity of a legitimate user has been confirmed.
>
> **[2:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=150)** An insecure session might assume the identity of a legitimate user has been confirmed, and then fail to terminate the session when the user is done using it.
>
> **[2:41](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=161)** At this point, the previous session may also be available for use by bad actors.
>
> **[2:48](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=168)** For those interested in a bit of OWASP history, it may be worth noting that this category is largely a repeat of a category previously known as Broken Authentication.
>
> **[3:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=180)** Personally, I'm pleased to see that the category has officially expanded to include identification failures, in addition to just authentication failures.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (3)
> **Definitions:** is a  (1), is an  (1), known as (1)
> **Code Keywords:** require (2)
> **Speakers:** - [instructor] (1)

#### Example 1: Pwned Passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=0)** - [Instructor] One of the possible attacks when a web application is vulnerable to broken authentication and identification is called credential stuffing.
>
> **[0:10](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=10)** Security researcher, Troy Hunt, describes credential stuffing in this way.
>
> **[0:16](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=16)** Credential stuffing is the automated injection of breached username and password pairs in order to fraudulently gain access to user accounts.
>
> **[0:27](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=27)** In other words, people take lists like these that contain our email addresses and passwords, then they attempt to see where else they work.
>
> **[0:38](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=38)** The success of this approach is predicated on the fact that people reuse the same credentials on multiple services.
>
> **[0:46](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=46)** If you used a particular username and password combination for an account that got compromised, then attackers are probably trying that same username and password combination on lots of different accounts.
>
> **[1:01](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=61)** If you happen to use the same username and password on different accounts for various websites, applications, software programs, et cetera, then you are more vulnerable to account compromise simply because a combination that you have used in the past, which was compromised, matches one or more of the combinations that you're currently using.
>
> **[1:26](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=86)** There have been so many data breaches with passwords compromised in the past several years.
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=93)** Each time this happens, hundreds, thousands, or hundreds of thousands of passwords are stolen by malicious attackers or happened upon by mistake.
>
> **[1:45](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=105)** In many cases, these passwords become public.
>
> **[1:49](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=109)** Hackers like to collect all of the known breached passwords so they can try them against new accounts in the future.
>
> **[1:57](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=117)** I want to tell you about a couple of very cool resources that you can use to check to see if your current passwords have been compromised in a previous data breach.
>
> **[2:08](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=128)** Malicious people collect these previously compromised passwords and information security professionals do too.
>
> **[2:16](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=136)** Troy Hunt uses this information to help people secure their accounts with the Have I Been Pwned website.
>
> **[2:23](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=143)** This website allows you to check to see if your email or phone number has been compromised in a known data breach.
>
> **[2:31](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=151)** The Have I Been Pwned website also includes a special feature called pwned passwords.
>
> **[2:38](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=158)** Here, you can type in any of your passwords to determine if they have already been compromised in a known data breach.
>
> **[2:48](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=168)** If you're thinking very critically about this, you might be wondering, Caroline, is it really safe for me to type my password into this random website?
>
> **[2:57](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=177)** The short answer is yes, and you can read more about the technical details about how your anonymity is protected when using this site.
>
> **[3:07](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=187)** The pwned password site also contains helpful information on password reuse and credential stuffing.
>
> **[3:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=194)** It also references the National Institute of Standards and Technology or NIST guidance on checking passwords against those obtained in previous data breaches.
>
> **[3:27](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=207)** If you want, you can even download the entire list to use it as you please.
>
> **[3:34](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=214)** Pause this course right now and check out the Have I Been Pwned website and the pwned passwords feature.
>
> **[3:41](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=221)** If you find that your emails, phone numbers or passwords have been compromised in a known data breach, change them right away.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), this, (1), protected (1)
> **Definitions:** is called (1), in other words (1)
> **CLI Commands:** find (1)
> **Env Vars:** nist (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Example 2: 2021 Verkada data breach
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=0)** - [Instructor] Verkada is a California-based company that builds security cameras, augmented with facial recognition capabilities.
>
> **[0:09](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=9)** Their security cameras are used in hospitals, prisons, mental health institutions, schools, office, factories, and many other buildings.
>
> **[0:19](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=19)** News reports from 2021 State that Verkada was breached, leading to the compromise of private data from approximately 150,000 customers.
>
> **[0:32](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=32)** This enormous privacy breach occurred because of identification and authentication failures.
>
> **[0:39](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=39)** If someone can get a hold of your real credentials and use them to access private systems, that's an identification and authentication failure.
>
> **[0:50](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=50)** Unfortunately, that's exactly what happened here.
>
> **[0:55](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=55)** Reports say that Verkada had left an internal development system unprotected and open to the public-facing internet.
>
> **[1:03](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=63)** The exposed data included hard-coded passwords and super admin rights.
>
> **[1:10](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=70)** Super admin rights, referred to as God-like power by technologists, allow a user to make critical changes to an application.
>
> **[1:21](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=81)** This high-powered role typically has the ability to add or delete users, configure various settings and profiles, and change access to different types of information.
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=94)** In the case of Verkada's exposed data, anyone who came across this publicly available information would've been able to use it to view feeds from security camera installations across Verkada's customer base.
>
> **[1:48](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=108)** Verkada's security incident report states that 97 customers had their cameras accessed and video or image data viewed.
>
> **[1:58](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=118)** The hacker behind the Verkada attack was Tillie Kottmann, who according to Wikipedia, has cited anarchism, anti-capitalism, and their opposition to the concept of intellectual property as the motives for their hacking activities.
>
> **[2:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=134)** They reportedly told Bloomberg that it's just too much fun not to do it.
>
> **[2:18](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=138)** Kottmann said "This incident exposes just how broadly we're being surveilled, and how little care is put into at least securing the platforms used to do so, pursuing nothing but profit.
>
> **[2:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=150)** It's just wild how I can just see the things we always knew are happening, but we never got to see."
>
> **[2:37](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=157)** In addition to the Verkada breach, Kottmann is also believed to be responsible for an Intel breach in 2020 and a Nissan breach in 2021.
>
> **[2:48](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=168)** Just a couple of weeks after the Verkada breach, the US Department of Justice announced that a federal grand jury had indicted Kottmann for conspiracy to commit computer fraud and abuse.

> [!info]- Semantic Content
>
> **Code Keywords:** private (2), super (2), public (1), delete (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique: Check for weak passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=0)** - [Narrator] Think about the hundreds of online accounts that you have.
>
> **[0:03](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=3)** How many of them are protected by a simple password as their primary authentication mechanism?
>
> **[0:10](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=10)** A password can be strong, which means it is harder to guess.
>
> **[0:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=14)** An account protected by a strong password is also more difficult to compromise.
>
> **[0:21](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=21)** On the flip side, a password can be weak, which means it is easier to guess.
>
> **[0:26](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=26)** An account that has a weak password is much easier to compromise.
>
> **[0:32](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=32)** In order to increase security of web applications, we want to ensure that we're using strong passwords.
>
> **[0:40](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=40)** One way to do this is to check for weak passwords.
>
> **[0:45](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=45)** By the way, if you're wondering about how to actually manage hundreds of strong passwords, I recommend checking out a password manager application.
>
> **[0:55](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=55)** Personally, I like One Password.
>
> **[0:58](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=58)** A couple of key characteristics of passwords to consider include password length and the use of different characters in a password.
>
> **[1:08](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=68)** Minimum password length should be 16 characters.
>
> **[1:13](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=73)** Passwords with fewer than 16 characters are too easy for hackers to guess.
>
> **[1:19](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=79)** Passwords with less than eight characters are particularly weak, and in my personal opinion, unacceptable for use in web applications.
>
> **[1:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=90)** Strong passwords should allow the use of all characters, including letters, numbers, special characters, and spaces.
>
> **[1:39](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=99)** Limiting the use of certain character types will naturally lead to less complex passwords, which are easier for a bad actor to compromise.
>
> **[1:49](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=109)** Beyond the requirements for what makes a secure password, web applications should also proactively enforce a process that makes it harder for an attacker to gain unauthenticated access to an account.
>
> **[2:04](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=124)** First, web applications should require that passwords be changed on a regular basis.
>
> **[2:10](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=130)** The rationale behind this idea, is that if a password has been compromised, changing that password would remove the access of an unauthorized user.
>
> **[2:20](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=140)** PCI DSS, the Payment Card Industry Data Security Standard is a cybersecurity standard that applies to the use of credit cards in web applications.
>
> **[2:32](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=152)** PCI, as that's commonly referred to, requires that passwords be changed every 90 days.
>
> **[2:39](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=159)** Secondly, web applications should not allow certain insecure passwords.
>
> **[2:44](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=164)** For example, a password should not be allowed to match the username for the account.
>
> **[2:50](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=170)** Common passwords such as password1 or 123456, should not be allowed.
>
> **[2:58](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=178)** Third, web applications should require complexity.
>
> **[3:03](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=183)** They should not only allow the use of all characters, but they should require that users set passwords with a combination of upper and lowercase letters, numbers, and symbols.

> [!info]- Semantic Content
>
> **Code Keywords:** require (3), protected (2)
> **Env Vars:** pci (2), dss (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Prevention technique: Use multi-factor authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=0)** - [Instructor] Let's talk about multi-factor authentication.
>
> **[0:03](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=3)** MFA is literally one of my favorite security controls.
>
> **[0:08](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=8)** I love it because it's pretty simple and very effective.
>
> **[0:13](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=13)** Authentication is about performing a check to ensure that a user is actually who they claim to be.
>
> **[0:21](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=21)** Multifactor authentication uses multiple different factors, or pieces of evidence, in order to do this.
>
> **[0:29](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=29)** It's way more secure than single-factor authentication.
>
> **[0:33](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=33)** The most common single-factor authentication is a simple password.
>
> **[0:39](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=39)** There are four different types of evidence that are typically used by web applications to do multifactor authentication.
>
> **[0:47](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=47)** The first is something you know, like a password or a PIN number.
>
> **[0:53](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=53)** The second is something you have, like an SMS code or a token from a software application or physical dongle.
>
> **[1:01](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=61)** The third is something you are, like a digital representation of your fingerprint, face shape, or eyeball.
>
> **[1:09](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=69)** The fourth is location, which can be indicated by an IP address or geolocation identifier.
>
> **[1:17](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=77)** A web app that requires the use of multifactor authentication will check not only one, but two or more of these pieces of evidence in order to confirm that a user is actually who they claim to be.
>
> **[1:31](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=91)** They have to pass all of the checks before they are granted access.
>
> **[1:37](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=97)** Whereas it's relatively easy for a hacker to guess or compromise a password or a PIN number, it's harder for them to do this and provide one of the other types of evidence.
>
> **[1:49](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=109)** Consider an example where you're using an online account and your account requires both a password, as well as a code that is sent to your mobile device via SMS.
>
> **[2:01](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=121)** In order for an attacker to obtain and use both pieces of evidence, they would need to guess your password and convince you to give them the code that you received via SMS.
>
> **[2:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=134)** Most of the time, multifactor authentication actually refers to two-factor authentication.
>
> **[2:21](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=141)** More than two factors is fairly uncommon, and folks will often use the terms multifactor authentication and two-factor authentication interchangeably.

> [!info]- Semantic Content
>
> **Env Vars:** sms (3), pin (2), mfa (1)
> **Code Keywords:** let (1), this. (1), pass (1)
> **Definitions:** is a  (1), refers to (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique: Log and limit repeated login attempts
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=0)** - Have you ever been locked out of one of your apps because of too many login attempts?
>
> **[0:05](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=5)** This can be so frustrating.
>
> **[0:08](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=8)** But consider a bad actor trying to guess a password.
>
> **[0:12](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=12)** They might be conducting a brute force attack in which they're trying to test multiple different passwords against a single account.
>
> **[0:21](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=21)** A common protection mechanism that a web application can use in this case is to limit the number of attempts that are allowed.
>
> **[0:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=30)** This is called login throttling.
>
> **[0:33](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=33)** Simply put, a web app should not allow any user to attempt an infinite number of different passwords at login.
>
> **[0:41](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=41)** After a finite number of incorrect attempts, the web app should stop allowing additional tries.
>
> **[0:48](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=48)** The important factors to consider when designing login throttling for a web application are number one, the lockout threshold.
>
> **[0:58](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=58)** How many attempts are allowed before the user is locked out, and prevented from additional tries?
>
> **[1:04](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=64)** Number two, the observation window.
>
> **[1:07](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=67)** What is the time period in which these attempts are monitored by the web app?
>
> **[1:11](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=71)** Number three, lockout duration.
>
> **[1:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=74)** How much time has passed before the user is allowed to try again?
>
> **[1:19](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=79)** The specific decisions for each of these factors comes down to making thoughtful trade-offs between keeping bad actors out, and allowing legitimate users in.
>
> **[1:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=90)** Ideally, the web app prevents bad actors from being able to guess enough passwords that they discover the correct one.
>
> **[1:38](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=98)** However, it's important to design the login throttling so that it doesn't lock out legitimate users and prevent them from using the application.
>
> **[1:48](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=108)** If the number of attempts is too low, and the lockout duration is too long, then it's possible that a bad actor might intentionally prevent a legitimate user from accessing the web application, by exceeding the lockout threshold on purpose and triggering the lockout duration.
>
> **[2:06](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=126)** If the bad actor is trying to disable an application and make it so that legitimate users cannot use it, then this type of attack known as a denial-of-service or DoS attack can be quite effective.
>
> **[2:20](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=140)** There are a number of interesting cases where login throttling can backfire if it's not designed correctly.
>
> **[2:28](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=148)** Sometimes, my young son takes my iPhone and tries to guess the passcode.
>
> **[2:33](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=153)** He tries once, and then twice, and then three times.
>
> **[2:37](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=157)** And then I'm locked out for multiple minutes.
>
> **[2:41](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=161)** If you're interested in learning more, I recommend reading "Blocking Brute Force Attacks", an OWASP resource that can be found online.
>
> **[2:50](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=170)** Another important security activity to consider when it comes to detecting these types of attacks is logging and monitoring.
>
> **[2:58](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=178)** A web app might be designed to keep a log of the various attempts that a user makes to log in.
>
> **[3:04](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=184)** Particularly the attempts that do not work.
>
> **[3:08](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=188)** This log captures information about problems and unusual conditions which can then be reviewed and analyzed.
>
> **[3:17](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=197)** The key concept to remember, when it comes to identification and authentication issues, is that hackers will and do try to compromise accounts.
>
> **[3:27](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=207)** Keep these prevention techniques in mind, and know that for every prevention technique that is implemented, several attempted attacks are likely thwarted.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), known as (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** iphone (1)
> **Env Vars:** owasp (1)
> **Speakers:** - have (1)


### 3. 2. Software and Data Integrity Failures

#### What are software and data integrity failures?
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=0)** - [Instructor] The eighth item in the 2021 OWASP Top 10 is software and data integrity failures.
>
> **[0:08](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=8)** OWASP says, "A new category for 2021 focuses on making assumptions related to software updates, critical data, and CI/CD pipelines without verifying integrity."
>
> **[0:21](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=21)** An important concept to understand about modern web applications is how incredibly interconnected they are with various third party or open source software components like plugins, libraries, or modules.
>
> **[0:36](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=36)** When the software components that a web application uses come from an untrusted source, that might lead to a software and data integrity failure.
>
> **[0:48](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=48)** Here are a few recent statistics that illuminate the importance of this interconnectedness topic for modern web applications.
>
> **[0:58](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=58)** According to the blog post, "A (Partial) History of Software Supply Chain Attacks", by ReversingLabs, attacks on software development organizations and software supply chains are increasing at an alarming rate.
>
> **[1:13](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=73)** Of the 42 attacks included in the post, half occurred in 2021 and 2022.
>
> **[1:22](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=82)** The "NVD Analysis 2022 Report" says that more than 75% of code today uses open source.
>
> **[1:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=90)** Malicious package submissions to repositories also increased substantially over the years 2020 to 2022.
>
> **[1:39](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=99)** A continuous integration/continuous deployment pipeline, commonly referred to as CI/CD, is a modern way of building and releasing software quickly.
>
> **[1:51](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=111)** This methodology incorporates a lot of automation.
>
> **[1:55](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=115)** Every time a CI/CD process does not include security considerations, there is the potential for bad actors to have inappropriate access to distribute malicious code, or to compromise systems.
>
> **[2:09](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=129)** Security vulnerabilities in a CI/CD pipeline can be amplified in cases where auto update functionality exists.
>
> **[2:18](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=138)** If a web application is set up to automatically download and install updates without sufficient verification and integrity controls in place, then software and data integrity failures are not only possible, but more likely.
>
> **[2:34](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=154)** If an attacker can gain control over an automatic update, then the attacker can essentially install malware via a regular CI/CD process.
>
> **[2:45](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=165)** For those interested in a bit of OWASP history, it may be worth noting that this category is technically new, but it also includes concepts from a previous category from the 2018 version of the OWASP Top 10, insecure deserialization.
>
> **[3:04](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=184)** If you're interested in learning more about how insecure deserialization works, then I recommend checking out my course on the seventh and eighth categories from the 2018 OWASP Top 10.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (5), nvd (1)
> **CLI Commands:** cd (5)
> **Prerequisites:** install (2), set up (1)
> **Code Keywords:** new, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Example 1: Solar Winds software supply chain attack
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=0)** - [Narrator] What is a software supply chain attack?
>
> **[0:03](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=3)** Here's how NIST, the National Institute of Standards and Technology, describes it.
>
> **[0:10](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=10)** A software supply chain attack occurs when a cyber threat actor infiltrates a software vendor's network and employs malicious code to compromise the software before the vendor sends it to their customers.
>
> **[0:25](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=25)** The compromised software then compromises the customer's data or system.
>
> **[0:31](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=31)** What does this have to do with software and data integrity?
>
> **[0:36](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=36)** To put it simply, software and data with integrity has not been messed with, either on purpose by a malicious actor or by accident, perhaps, when an employee made a simple mistake.
>
> **[0:49](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=49)** The customers of a software vendor rely on the fact that the vendor's software has integrity.
>
> **[0:56](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=56)** If it doesn't, then the customer and the vendor may be affected as victims of a software supply chain attack.
>
> **[1:04](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=64)** SolarWinds is a software vendor that provides infrastructure monitoring and other services to hundreds of thousands of customers around the world.
>
> **[1:15](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=75)** In the 2020 breach, a network management system called Orion was compromised.
>
> **[1:21](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=81)** Threat actors placed malware into an Orion software update, which infected all of the customers who installed that particular update.
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=92)** The updates containing malware were released between March and June, 2020 and are believed to have affected 18,000 SolarWinds customers who installed Orion updates during this time.
>
> **[1:46](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=106)** When SolarWinds became aware of the breach, they partnered with Microsoft, FireEye and GoDaddy to release a software fix, which included an emergency off switch for the malware.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** switch (1)
> **Env Vars:** nist (1)
> **Speakers:** - [narrator] (1)

#### Example 2: 2021 Codecov bash uploader compromise
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=0)** - [Narrator] Codecov is a popular software testing platform with tens of thousands of enterprise customers including Google, Proctor and Gamble, IBM, and Atlassian.
>
> **[0:11](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=11)** It provides code coverage functionality to enable its customers to know how much of their code is covered by automated tests and how much is not.
>
> **[0:22](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=22)** Codecov's bash uploader was compromised in January, 2021.
>
> **[0:27](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=27)** What is a bash uploader?
>
> **[0:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=30)** Basically, it's a software platform that sends information from the customer environment to Codecov for further analysis.
>
> **[0:38](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=38)** The Codecov breach of 2021 is known as a supply chain attack.
>
> **[0:44](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=44)** This is because the way that Codecov customers use their software is highly integrated into the way that they do software development.
>
> **[0:54](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=54)** During the months when this component had been compromised but undetected, customers incorrectly assumed that their software environment data was being sent to Codecov, their trusted vendor.
>
> **[1:07](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=67)** Actually, all of this data was getting automatically sent to malicious hackers.
>
> **[1:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=74)** While Codecov's batch uploader was the hacker's initial point of entry, their actual targets and the true victims of this attack were Codecov's customers.
>
> **[1:26](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=86)** Depending on the type of environment variables that were being sent to the hackers when they should have been sent over to Codecov, this potentially valuable information may have allowed hackers to access high impact, sensitive or confidential data of any of the potentially thousands of Codecov customers who were using their compromised bash uploader during this time.
>
> **[1:51](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=111)** It's not a perfect analogy but here's one way to think about it.
>
> **[1:55](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=115)** Imagine you've got a school, and inside the school building are hundreds of student lockers.
>
> **[2:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=120)** Students store all sorts of different things in their lockers, books, clothes, snacks.
>
> **[2:06](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=126)** Some students store valuable things in their lockers like cash or the keys to their car or their homes.
>
> **[2:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=134)** What kind of stuff did you store in your locker when you were in high school?
>
> **[2:18](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=138)** I'm guessing you would not have liked it if someone else had access to what was inside your private locker, valuable or not.
>
> **[2:27](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=147)** If a thief is somehow able to break into the school and obtain the master key for all of the student lockers, then they can access everything inside those lockers.
>
> **[2:38](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=158)** In some cases, what's actually inside the lockers is valuable in of itself, like cash or credit cards.
>
> **[2:46](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=166)** In other cases, what's inside the lockers might allow the thief to gain access to other valuable resources, such as a car or a home.
>
> **[2:57](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=177)** The breach wasn't discovered until April 1st when a customer noticed that an IP address previously pointing to Codecov was then pointing to an unknown server.
>
> **[3:09](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=189)** The reality of many data breaches is that sometimes the affected company discovers the incident first and other times, they don't even know about it until a customer brings it up to them.
>
> **[3:22](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=202)** In this case, Codecov investigated and alerted all of its customers about the breach a couple of weeks later on April 15th

> [!info]- Semantic Content
>
> **Tools:** bash (3)
> **Definitions:** is a  (2), known as (1)
> **Code Keywords:** private (1), case, (1)
> **Analogies:** imagine (1), such as (1)
> **Env Vars:** ibm (1)
> **Speakers:** - [narrator] (1)

#### Prevention technique: Use digital signatures
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=0)** - [Instructor] The first bullet point in the How to Prevent section of the OWASP Top 10 description of the vulnerability category for Software and Data Integrity Failures says, "Use digital signatures or similar mechanisms "to verify the software or data "is from the expected source and has not been altered."
>
> **[0:21](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=21)** So, what's a digital signature?
>
> **[0:25](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=25)** First, it's important to distinguish a digital signature from an electronic signature.
>
> **[0:32](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=32)** I know, I know, these terms sound maddeningly similar.
>
> **[0:38](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=38)** If you've ever signed a contract or agreement online, it's likely that you used an electronic signature.
>
> **[0:46](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=46)** Common software platforms that utilize electronic signature for legal agreements include DocuSign and PandaDoc.
>
> **[0:55](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=55)** In this use case, you'd receive a digital document in your email and select a graphic that represents your electronic signature.
>
> **[1:06](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=66)** This is not the same thing as a digital signature, which we'll describe in just a moment.
>
> **[1:12](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=72)** Whereas electronic signature is a legal term, digital signature is actually a technical term.
>
> **[1:19](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=79)** A digital signature uses math to validate the integrity of a digital message, document, or piece of software.
>
> **[1:27](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=87)** The type of math involved is called asymmetric encryption.
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=92)** Asymmetric encryption is fairly complicated, and I won't be going into the details of how it works here.
>
> **[1:40](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=100)** The important concept to understand is that when asymmetric encryption algorithms are implemented correctly, data and software can be signed using digital signatures.
>
> **[1:51](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=111)** When someone wants to use that data or software, they can validate that the digitally signed data or software was indeed signed by the legitimate software manufacturer, and not tampered with or changed by a malicious actor.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **Code Keywords:** case, (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique: Ensure repositories are trustworthy
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=0)** - [Instructor] Here's what the How to Prevent section says about repositories in use for this vulnerability category.
>
> **[0:08](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=8)** "Ensure libraries and dependencies, such as npm or Maven are consuming trusted repositories.
>
> **[0:15](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=15)** If you have a higher risk profile, consider hosting an internal known-good repository that is vetted."
>
> **[0:24](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=24)** Some of these terms may be new to you if you're not a professional software developer.
>
> **[0:30](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=30)** Let's learn about some of these coding concepts together.
>
> **[0:35](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=35)** One of the really interesting realities about web application development is that developers are very rarely creating new applications completely from scratch.
>
> **[0:47](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=47)** They're usually working on adding new features to an existing piece of software.
>
> **[0:53](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=53)** You can think about it kind of like making modifications to an airplane when it's actively carrying passengers and flying in the air.
>
> **[1:03](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=63)** It's critical to ensure that changes to the software don't accidentally break the existing software.
>
> **[1:11](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=71)** You want both the older versions and the newer versions of the software to work properly.
>
> **[1:18](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=78)** A repository, or repo for short, allows software developers to keep track of the new changes they're making while managing different versions.
>
> **[1:28](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=88)** It can be thought of as a collection of many assets.
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=93)** GitHub is a popular cloud-based repo that is built on Git, a version and control system.
>
> **[1:41](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=101)** Conceptually, a library is like a set of pre-built functions.
>
> **[1:46](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=106)** A dependency is when one piece of code depends on another piece of code, such as a library, to be able to perform its intended functionality.
>
> **[1:58](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=118)** Node package manager called npm for short, and Maven are build automation tools.
>
> **[2:06](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=126)** These help to automate as many steps as possible in the process of building, testing and deploying software.
>
> **[2:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=134)** Automating the build process is a critical part of being able to continuously deliver software.
>
> **[2:22](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=142)** These and other similar tools sort of put all the libraries and dependencies together to make software work the way it's supposed to.
>
> **[2:31](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=151)** The critical thing to understand from a security perspective is that any given software dependency might contain security vulnerabilities.
>
> **[2:42](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=162)** Modern software involves a lot of dependencies on various libraries and components.
>
> **[2:48](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=168)** The process of building and deploying modern software is largely automated, and this automation allows for continuous delivery, which means more frequent and faster software deployments.
>
> **[3:03](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=183)** It is as important as ever to ensure that each and every single dependency that's being used to support a web application is being assessed for risk.
>
> **[3:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=194)** A web app that utilizes a vulnerable dependency will be vulnerable.
>
> **[3:19](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=199)** If it's important to you and your organization that your web apps are not vulnerable then you need to put a process in place that ensures that dependencies are not vulnerable either.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (2), git (1), node (1), make (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique: Review code and configuration changes
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=0)** - [Instructor] Prevention technique number three for the software and data integrity failures category of the 2021 OWASP Top 10 is to review code and configuration changes.
>
> **[0:13](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=13)** In modern software development environments utilizing continuous integration and continuous delivery, CICD, it remains critically important to ensure that code and configuration changes are assessed with proper oversight.
>
> **[0:29](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=29)** The introduction of auto-updates and automation when it comes to code and configuration changes for modern software development involves trade-offs.
>
> **[0:39](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=39)** On one hand, they allow for speed, continuous integration, and continuous delivery.
>
> **[0:47](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=47)** Not requiring manual activity for software updates mean that teams can focus on other activities that do require a person to be involved.
>
> **[0:57](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=57)** All of these benefits assume that the updates are clean and secure.
>
> **[1:02](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=62)** In the case of a patch that needs to be installed in order to address a known security vulnerability, an update could actually lead to more secure software, but being able to automatically install updates also means that if an update makes changes to the code or to the configurations that result in a higher risk, lower security posture, then these are also happening without human intervention, and they're happening quickly.
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=92)** Whereas the fifth category of the 2021 OWASP Top 10, security misconfiguration, focuses on ensuring the configurations of your web application's tech stack are set to more secure rather than less secure defaults, this eighth category draws our attention to the fact that the vast majority of modern software is extremely matrixed and dependent on third party software components.
>
> **[2:01](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=121)** If your web app is dependent on some third party software and that third party software is set to automatically install updates, then it remains your responsibility to ensure that any updates installed by the third party software do not result in code or configuration changes that increase your organization's risk profile or decrease your organization's security posture.
>
> **[2:28](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=148)** My recommendation is to take a risk-based policy approach.
>
> **[2:33](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=153)** All third party vendor software should pass through a third party vendor risk management evaluation process.
>
> **[2:41](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=161)** Third party software dependencies that impact critical functions or systems that store or process highly sensitive or confidential information should take a more conservative approach to allowing automatic updates without a manual review.
>
> **[2:58](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=178)** In any case, be sure to stay informed and up to date with regards to any third-party software products that are incorporated into your web application ecosystem.
>
> **[3:11](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=191)** If a third party does install a malicious update, then you'll want to stay current with regards to availability of a patch to address the issue.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), pass (1), case, (1)
> **Env Vars:** owasp (2), cicd (1)
> **Prerequisites:** install (3)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 4. Conclusion

#### OWASP Top 10 keep learning
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=0)** - [Instructor] And here you have it.
>
> **[0:02](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=2)** Items number seven and eight in the OWASP Top 10.
>
> **[0:07](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=7)** Identification, authentication, and integrity failures have been key information security concepts for decades now.
>
> **[0:16](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=16)** The problems that lead to data breaches are known, and we must continue to find, fix, and prevent these security vulnerabilities.
>
> **[0:27](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=27)** We have an opportunity to build more secure web applications in the future.
>
> **[0:33](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=33)** I hope you'll join me in my next course that covers the 9th and 10th vulnerability categories, security logging and monitoring failures, and server-side request forgery, commonly referred to as SSRF.
>
> **[0:50](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=50)** Similar to this course, we'll learn about each vulnerability category, dive into real life examples, and discuss prevention techniques.
>
> **[1:01](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=61)** Let's keep learning together.
>
> **[1:04](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=64)** There's more to explore in the 2021 OWASP Top 10.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (2), ssrf (1)
> **Code Keywords:** continue (1), let (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Caroline Wong]]

## Skills Covered

- OWASP
- Application Security
- Secure Authentication
- Identity and Access Management (IAM)
- Data Integrity

## Path Context

### In [[Master the OWASP Top 10]]
← [[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]] | **5 of 6** | [[OWASP Top 10- -9 Security Logging and Monitoring Failures and -10 Server-Side Request Forgery]] →

## Appears In

- [[Master the OWASP Top 10]]

## Related Courses

_Courses sharing skills:_

- [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] — OWASP, Application Security
- [[OWASP Top 10- -9 Security Logging and Monitoring Failures and -10 Server-Side Request Forgery]] — OWASP
- [[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]] — Application Security
- [[React- Securing Applications]] — Secure Authentication
- [[Node Js Security]] — Application Security

---

[↑ Back to top](#)