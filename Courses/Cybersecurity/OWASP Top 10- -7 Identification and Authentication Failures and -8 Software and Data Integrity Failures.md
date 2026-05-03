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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/OWASP%20Top%2010-%20-7%20Identification%20and%20Authentication%20Failures%20and%20-8%20Software%20and%20Data%20Integrity%20Failures.md)

![OWASP Top 10: #7 Identification and Authentication Failures and #8 Software and Data Integrity Failures](https://media.licdn.com/dms/image/v2/D560DAQGnb7pdkDwkiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698103237077?e=2147483647&amp;v=beta&amp;t=2cbMXy-nXNx-pCPx4P7H51UiVDrhs6dSjrgJtF3jOFU)

# OWASP Top 10: #7 Identification and Authentication Failures and #8 Software and Data Integrity Failures

> Failures related to identity, authentication, and software and data integrity loom large in web application development. You need to keep security vulnerabilities top of mind, but how do you prepare for a possible attack? In this course, instructor and application security expert Caroline Wong gives you an overview of the seventh and eighth most common vulnerabilities listed on the 2021 Open Web A

> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures) | 39m | Intermediate | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [OWASP Top 10](#owasp-top-10)
  - [OWASP Top 10 series](#owasp-top-10-series)
- [**1. Identification and Authentication Failures**](#1-identification-and-authentication-failures) (6 videos)
  - [What are identification and authentication failures?](#what-are-identification-and-authentication-failures)
  - [Example 1: Pwned Passwords](#example-1-pwned-passwords)
  - [Example 2: 2021 Verkada data breach](#example-2-2021-verkada-data-breach)
  - [Prevention technique: Check for weak passwords](#prevention-technique-check-for-weak-passwords)
  - [Prevention technique: Use multi-factor authentication](#prevention-technique-use-multi-factor-authentication)
  - [Prevention technique: Log and limit repeated login attempts](#prevention-technique-log-and-limit-repeated-login-attempts)
- [**2. Software and Data Integrity Failures**](#2-software-and-data-integrity-failures) (6 videos)
  - [What are software and data integrity failures?](#what-are-software-and-data-integrity-failures)
  - [Example 1: Solar Winds software supply chain attack](#example-1-solar-winds-software-supply-chain-attack)
  - [Example 2: 2021 Codecov bash uploader compromise](#example-2-2021-codecov-bash-uploader-compromise)
  - [Prevention technique: Use digital signatures](#prevention-technique-use-digital-signatures)
  - [Prevention technique: Ensure repositories are trustworthy](#prevention-technique-ensure-repositories-are-trustworthy)
  - [Prevention technique: Review code and configuration changes](#prevention-technique-review-code-and-configuration-changes)
- [**Conclusion**](#conclusion) (1 videos)
  - [OWASP Top 10 keep learning](#owasp-top-10-keep-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [OWASP Top 10](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10?u=76281980&t=0)** - We use web applications every day, in both our personal and our professional lives. We want them to be safe and secure. The best way to secure web apps is to find and fix security vulnerabilities. [[OWASP]] stands for Open [[Web Application Security]] Project and the top 10 list is a resource for any and everyone who is involved in building web applications. This course covers the seventh and eighth categories in the 2021 OWASP top 10. Identification and authentication failures and software and [[Data Integrity]] failures. I'm Caroline Wong, Chief Strategy Officer at Cobalt. Come and join me. Let's empower ourselves so that we can build more secure web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Web Application Security]] (1), [[Data Integrity]] (1)
> **Env Vars:** owasp (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - we (1)

#### [OWASP Top 10 series](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-series?u=76281980&t=0)** - [Instructor] Here are a few things that may be helpful to know so that you can get the most out of this course. First, this course covers the seventh and eighth categories in the 2021 [[OWASP]] Top 10. I recommend watching my previous courses that cover the first several categories. You may also want to watch my OWASP Basics course, which provides a high-level overview of all of the items in the 2021 Top 10. This course is designed for anyone who is involved in building web applications and wants to make them secure. This includes software developers, architects, product and project managers, and, of course, [[Cybersecurity]] professionals. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Cybersecurity]] (1)
> **Env Vars:** owasp (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 1. Identification and Authentication Failures

[↑ Back to Table of Contents](#table-of-contents)

#### [What are identification and authentication failures?](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=0)** - [Instructor] The seventh item in the 2021 [[OWASP]] Top 10 is Identification and Authentication Failures. OWASP says confirmation of the user's identity, authentication, and session management is critical to protect against authentication related attacks. What does this mean in plain language? Basically, a web application should confirm that you are who you say you are. A web application that is vulnerable to identification and authentication failures might have one of the following types of problems. A web application may allow easily compromised passwords. If a web app does not require strong, complex passwords and allows weak passwords like password, password123, or admin, then user accounts are vulnerable to compromise, and bad actors can gain control of accounts that do not belong to them. If you're watching this course and thinking to yourself, "Uh-oh, I actually use password123 for my online [[Banking]].", then now is a great time to pause this video and change your password. A web application may not use or require [[Multi-factor Authentication]]. Multi-factor authentication, commonly referred to in practice as two factor-authentication,
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-identification-and-authentication-failures?u=76281980&t=94)** is an excellent security control for preventing account compromise by bad actors. Without it, passwords are easily guessed, and accounts are easily taken over. A more secure web app needs to not only ask for evidence that a user is who they claim to be, it also needs to check that evidence against some sort of validation data. An example of this might be confirming that a user's responses to security questions match the data which was previously provided by a legitimate user. A web application may fail to terminate a previously authenticated session before allowing a new user to establish a new session. A secure session assumes that the identity of a legitimate user has been confirmed. An insecure session might assume the identity of a legitimate user has been confirmed, and then fail to terminate the session when the user is done using it. At this point, the previous session may also be available for use by bad actors. For those interested in a bit of OWASP history, it may be worth noting that this category is largely a repeat of a category previously known as Broken Authentication. Personally, I'm pleased to see that the category has officially expanded to include identification failures, in addition to just authentication failures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[Multi-factor Authentication]] (2), [[Banking]] (1)
> **Env Vars:** owasp (3)
> **Definitions:** is a  (1), is an  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### [Example 1: Pwned Passwords](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=0)** - [Instructor] One of the possible attacks when a web application is vulnerable to broken authentication and identification is called credential stuffing. Security researcher, Troy Hunt, describes credential stuffing in this way. Credential stuffing is the automated injection of breached username and password pairs in order to fraudulently gain access to user accounts. In other words, people take lists like these that contain our email addresses and passwords, then they attempt to see where else they work. The success of this approach is predicated on the fact that people reuse the same credentials on multiple services. If you used a particular username and password combination for an account that got compromised, then attackers are probably trying that same username and password combination on lots of different accounts. If you happen to use the same username and password on different accounts for various websites, applications, software programs, et cetera, then you are more vulnerable to account compromise simply because a combination that you have used in the past, which was compromised, matches one or more of the combinations that you're currently using. There have been so many data breaches with passwords compromised in the past several years. Each time this happens, hundreds, thousands,
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=96)** or hundreds of thousands of passwords are stolen by malicious attackers or happened upon by mistake. In many cases, these passwords become public. Hackers like to collect all of the known breached passwords so they can try them against new accounts in the future. I want to tell you about a couple of very cool resources that you can use to check to see if your current passwords have been compromised in a previous data breach. Malicious people collect these previously compromised passwords and information security professionals do too. Troy Hunt uses this information to help people secure their accounts with the Have I Been Pwned website. This website allows you to check to see if your email or phone number has been compromised in a known data breach. The Have I Been Pwned website also includes a special feature called pwned passwords. Here, you can type in any of your passwords to determine if they have already been compromised in a known data breach. If you're thinking very critically about this, you might be wondering, Caroline, is it really safe for me to type my password into this random website? The short answer is yes, and you can read more about the technical details about how your anonymity is protected when using this site. The pwned password site also contains helpful information
>
> **[3:11](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-pwned-passwords?u=76281980&t=191)** on password reuse and credential stuffing. It also references the National Institute of Standards and Technology or [[NIST]] guidance on checking passwords against those obtained in previous data breaches. If you want, you can even download the entire list to use it as you please. Pause this course right now and check out the Have I Been Pwned website and the pwned passwords feature. If you find that your emails, phone numbers or passwords have been compromised in a known data breach, change them right away.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (1)
> **Definitions:** is called (1), in other words (1)
> **CLI Commands:** find (1)
> **Env Vars:** nist (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Example 2: 2021 Verkada data breach](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=0)** - [Instructor] Verkada is a California-based company that builds security cameras, augmented with facial recognition capabilities. Their security cameras are used in hospitals, prisons, mental health institutions, schools, [[Microsoft Office|office]], factories, and many other buildings. News reports from 2021 State that Verkada was breached, leading to the compromise of private data from approximately 150,000 customers. This enormous [[Privacy]] breach occurred because of identification and authentication failures. If someone can get a hold of your real credentials and use them to access private systems, that's an identification and authentication failure. Unfortunately, that's exactly what happened here. Reports say that Verkada had left an internal development system unprotected and open to the public-facing internet. The exposed data included hard-coded passwords and super admin rights. Super admin rights, referred to as God-like power by technologists, allow a user to make critical changes to an application. This high-powered role typically has the ability to add or delete users, configure various settings and profiles, and change access to different types of information. In the case of Verkada's exposed data,
>
> **[1:37](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-verkada-data-breach?u=76281980&t=97)** anyone who came across this publicly available information would've been able to use it to view feeds from security camera installations across Verkada's customer base. Verkada's security incident report states that 97 customers had their cameras accessed and video or image data viewed. The hacker behind the Verkada attack was Tillie Kottmann, who according to Wikipedia, has cited anarchism, anti-capitalism, and their opposition to the concept of intellectual property as the motives for their hacking activities. They reportedly told Bloomberg that it's just too much fun not to do it. Kottmann said "This incident exposes just how broadly we're being surveilled, and how little care is put into at least securing the platforms used to do so, pursuing nothing but profit. It's just wild how I can just see the things we always knew are happening, but we never got to see." In addition to the Verkada breach, Kottmann is also believed to be responsible for an Intel breach in 2020 and a Nissan breach in 2021. Just a couple of weeks after the Verkada breach, the US Department of Justice announced that a federal grand jury had indicted Kottmann for conspiracy to commit computer fraud and abuse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[Privacy]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique: Check for weak passwords](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=0)** - [Narrator] Think about the hundreds of online accounts that you have. How many of them are protected by a simple password as their primary authentication mechanism? A password can be strong, which means it is harder to guess. An account protected by a strong password is also more difficult to compromise. On the flip side, a password can be weak, which means it is easier to guess. An account that has a weak password is much easier to compromise. In order to increase security of web applications, we want to ensure that we're using strong passwords. One way to do this is to check for weak passwords. By the way, if you're wondering about how to actually manage hundreds of strong passwords, I recommend checking out a password manager application. Personally, I like One Password. A couple of key characteristics of passwords to consider include password length and the use of different characters in a password. Minimum password length should be 16 characters. Passwords with fewer than 16 characters are too easy for hackers to guess. Passwords with less than eight characters are particularly weak, and in my personal opinion, unacceptable for use in web applications. Strong passwords should allow the use of all characters, including letters, numbers, special characters, and spaces.
>
> **[1:39](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=99)** Limiting the use of certain character types will naturally lead to less complex passwords, which are easier for a bad actor to compromise. Beyond the requirements for what makes a secure password, web applications should also proactively enforce a process that makes it harder for an attacker to gain unauthenticated access to an account. First, web applications should require that passwords be changed on a regular basis. The rationale behind this idea, is that if a password has been compromised, changing that password would remove the access of an unauthorized user. [[PCI DSS]], the [[PCI DSS|Payment Card Industry Data Security Standard]] is a [[Cybersecurity]] standard that applies to the use of credit cards in web applications. PCI, as that's commonly referred to, requires that passwords be changed every 90 days. Secondly, web applications should not allow certain insecure passwords. For example, a password should not be allowed to match the username for the account. Common passwords such as password1 or 123456, should not be allowed. Third, web applications should require complexity. They should not only allow the use of all characters, but they should require that users set passwords with a combination of upper and lowercase letters,
>
> **[3:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-check-for-weak-passwords?u=76281980&t=194)** numbers, and symbols.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PCI DSS]] (1), [[PCI DSS|Payment card industry data security standard]] (1), [[Cybersecurity]] (1)
> **Env Vars:** pci (2), dss (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Prevention technique: Use multi-factor authentication](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=0)** - [Instructor] Let's talk about [[Multi-factor Authentication]]. MFA is literally one of my favorite security controls. I love it because it's pretty simple and very effective. Authentication is about performing a check to ensure that a user is actually who they claim to be. Multifactor authentication uses multiple different factors, or pieces of evidence, in order to do this. It's way more secure than single-factor authentication. The most common single-factor authentication is a simple password. There are four different types of evidence that are typically used by web applications to do multifactor authentication. The first is something you know, like a password or a PIN number. The second is something you have, like an SMS code or a token from a software application or physical dongle. The third is something you are, like a digital representation of your fingerprint, face shape, or eyeball. The fourth is location, which can be indicated by an IP address or geolocation identifier. A web app that requires the use of multifactor authentication will check not only one, but two or more of these pieces of evidence in order to confirm that a user is actually who they claim to be. They have to pass all of the checks
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-multi-factor-authentication?u=76281980&t=94)** before they are granted access. Whereas it's relatively easy for a hacker to guess or compromise a password or a PIN number, it's harder for them to do this and provide one of the other types of evidence. Consider an example where you're using an online account and your account requires both a password, as well as a code that is sent to your mobile device via SMS. In order for an attacker to obtain and use both pieces of evidence, they would need to guess your password and convince you to give them the code that you received via SMS. Most of the time, multifactor authentication actually refers to two-factor authentication. More than two factors is fairly uncommon, and folks will often use the terms multifactor authentication and two-factor authentication interchangeably.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multi-factor Authentication]] (1)
> **Env Vars:** sms (3), pin (2), mfa (1)
> **Definitions:** is a  (1), refers to (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique: Log and limit repeated login attempts](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=0)** - Have you ever been locked out of one of your apps because of too many login attempts? This can be so frustrating. But consider a bad actor trying to guess a password. They might be conducting a brute force attack in which they're trying to test multiple different passwords against a single account. A common protection mechanism that a web application can use in this case is to limit the number of attempts that are allowed. This is called login throttling. Simply put, a web app should not allow any user to attempt an infinite number of different passwords at login. After a finite number of incorrect attempts, the web app should stop allowing additional tries. The important factors to consider when designing login throttling for a web application are number one, the lockout threshold. How many attempts are allowed before the user is locked out, and prevented from additional tries? Number two, the observation window. What is the time period in which these attempts are monitored by the web app? Number three, lockout duration. How much time has passed before the user is allowed to try again? The specific decisions for each of these factors comes down to making thoughtful trade-offs between keeping bad actors out, and allowing legitimate users in. Ideally, the web app prevents bad actors from being able to guess enough passwords
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=95)** that they discover the correct one. However, it's important to design the login throttling so that it doesn't lock out legitimate users and prevent them from using the application. If the number of attempts is too low, and the lockout duration is too long, then it's possible that a bad actor might intentionally prevent a legitimate user from accessing the web application, by exceeding the lockout threshold on purpose and triggering the lockout duration. If the bad actor is trying to disable an application and make it so that legitimate users cannot use it, then this type of attack known as a denial-of-service or DoS attack can be quite effective. There are a number of interesting cases where login throttling can backfire if it's not designed correctly. Sometimes, my young son takes my iPhone and tries to guess the passcode. He tries once, and then twice, and then three times. And then I'm locked out for multiple minutes. If you're interested in learning more, I recommend reading "Blocking Brute Force Attacks", an [[OWASP]] resource that can be found online. Another important security activity to consider when it comes to detecting these types of attacks is logging and monitoring. A web app might be designed to keep a log of the various attempts that a user makes to log in. Particularly the attempts that do not work. This log captures information
>
> **[3:10](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-log-and-limit-repeated-login-attempts?u=76281980&t=190)** about problems and unusual conditions which can then be reviewed and analyzed. The key concept to remember, when it comes to identification and authentication issues, is that hackers will and do try to compromise accounts. Keep these prevention techniques in mind, and know that for every prevention technique that is implemented, several attempted attacks are likely thwarted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1)
> **Definitions:** is called (1), known as (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** iphone (1)
> **Env Vars:** owasp (1)
> **Speakers:** - have (1)


### 2. Software and Data Integrity Failures

[↑ Back to Table of Contents](#table-of-contents)

#### [What are software and data integrity failures?](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=0)** - [Instructor] The eighth item in the 2021 [[OWASP]] Top 10 is software and [[Data Integrity]] failures. OWASP says, "A new category for 2021 focuses on making assumptions related to software updates, critical data, and CI/CD pipelines without verifying integrity." An important concept to understand about modern web applications is how incredibly interconnected they are with various third party or open source software components like plugins, libraries, or modules. When the software components that a web application uses come from an untrusted source, that might lead to a software and data integrity failure. Here are a few recent [[Statistics]] that illuminate the importance of this interconnectedness topic for modern web applications. According to the blog post, "A (Partial) History of Software Supply Chain Attacks", by ReversingLabs, attacks on [[Software Development]] organizations and software supply chains are increasing at an alarming rate. Of the 42 attacks included in the post, half occurred in 2021 and 2022. The "NVD Analysis 2022 Report" says that more than 75% of code today uses open source. Malicious package submissions to repositories also increased substantially over the years 2020 to 2022.
>
> **[1:39](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=99)** A [[Continuous Integration (CI)|continuous integration]]/continuous deployment pipeline, commonly referred to as CI/CD, is a modern way of building and releasing software quickly. This methodology incorporates a lot of automation. Every time a CI/CD process does not include security considerations, there is the potential for bad actors to have inappropriate access to distribute malicious code, or to compromise systems. Security vulnerabilities in a CI/CD pipeline can be amplified in cases where auto update functionality exists. If a web application is set up to automatically download and install updates without sufficient verification and integrity controls in place, then software and data integrity failures are not only possible, but more likely. If an attacker can gain control over an automatic update, then the attacker can essentially install malware via a regular CI/CD process. For those interested in a bit of OWASP history, it may be worth noting that this category is technically new, but it also includes concepts from a previous category from the 2018 version of the OWASP Top 10, insecure deserialization. If you're interested in learning more about how insecure deserialization works, then I recommend checking out my course
>
> **[3:11](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/what-are-software-and-data-integrity-failures?u=76281980&t=191)** on the seventh and eighth categories from the 2018 OWASP Top 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (5), [[Data Integrity]] (3), [[Statistics]] (1), [[Software Development]] (1), [[Continuous Integration (CI)|Continuous integration]] (1)
> **Env Vars:** owasp (5), nvd (1)
> **CLI Commands:** cd (5)
> **Prerequisites:** install (2), set up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example 1: Solar Winds software supply chain attack](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=0)** - [Narrator] What is a software supply chain attack? Here's how [[NIST]], the National Institute of Standards and Technology, describes it. A software supply chain attack occurs when a cyber threat actor infiltrates a software vendor's network and employs malicious code to compromise the software before the vendor sends it to their customers. The compromised software then compromises the customer's data or system. What does this have to do with software and [[Data Integrity]]? To put it simply, software and data with integrity has not been messed with, either on purpose by a malicious actor or by accident, perhaps, when an employee made a simple mistake. The customers of a software vendor rely on the fact that the vendor's software has integrity. If it doesn't, then the customer and the vendor may be affected as victims of a software supply chain attack. SolarWinds is a software vendor that provides infrastructure monitoring and other services to hundreds of thousands of customers around the world. In the 2020 breach, a network management system called Orion was compromised. Threat actors placed malware into an Orion software update, which infected all of the customers who installed that particular update. The updates containing malware were released
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-1-solar-winds-software-supply-chain-attack?u=76281980&t=94)** between March and June, 2020 and are believed to have affected 18,000 SolarWinds customers who installed Orion updates during this time. When SolarWinds became aware of the breach, they partnered with [[Microsoft]], FireEye and GoDaddy to release a software fix, which included an emergency off switch for the malware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (1), [[Data Integrity]] (1), [[Microsoft]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** nist (1)
> **Speakers:** - [narrator] (1)

#### [Example 2: 2021 Codecov bash uploader compromise](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=0)** - [Narrator] Codecov is a popular [[Software Testing]] platform with tens of thousands of enterprise customers including [[Google]], Proctor and Gamble, IBM, and [[Atlassian]]. It provides code coverage functionality to enable its customers to know how much of their code is covered by automated tests and how much is not. Codecov's bash uploader was compromised in January, 2021. What is a bash uploader? Basically, it's a software platform that sends information from the customer environment to Codecov for further analysis. The Codecov breach of 2021 is known as a supply chain attack. This is because the way that Codecov customers use their software is highly integrated into the way that they do [[Software Development]]. During the months when this component had been compromised but undetected, customers incorrectly assumed that their software environment data was being sent to Codecov, their trusted vendor. Actually, all of this data was getting automatically sent to malicious hackers. While Codecov's batch uploader was the hacker's initial point of entry, their actual targets and the true victims of this attack were Codecov's customers. Depending on the type of environment variables that were being sent to the hackers when they should have been sent over to Codecov,
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=93)** this potentially valuable information may have allowed hackers to access high impact, sensitive or confidential data of any of the potentially thousands of Codecov customers who were using their compromised bash uploader during this time. It's not a perfect analogy but here's one way to think about it. Imagine you've got a school, and inside the school building are hundreds of student lockers. Students store all sorts of different things in their lockers, books, clothes, snacks. Some students store valuable things in their lockers like cash or the keys to their car or their homes. What kind of stuff did you store in your locker when you were in high school? I'm guessing you would not have liked it if someone else had access to what was inside your private locker, valuable or not. If a thief is somehow able to break into the school and obtain the master key for all of the student lockers, then they can access everything inside those lockers. In some cases, what's actually inside the lockers is valuable in of itself, like cash or credit cards. In other cases, what's inside the lockers might allow the thief to gain access to other valuable resources, such as a car or a home. The breach wasn't discovered until April 1st when a customer noticed that an IP address previously pointing to Codecov was then pointing to an unknown server.
>
> **[3:09](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/example-2-2021-codecov-bash-uploader-compromise?u=76281980&t=189)** The reality of many data breaches is that sometimes the affected company discovers the incident first and other times, they don't even know about it until a customer brings it up to them. In this case, Codecov investigated and alerted all of its customers about the breach a couple of weeks later on April 15th

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Atlassian]] (1), [[Software Development]] (1)
> **Tools:** bash (3)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** imagine (1), such as (1)
> **Env Vars:** ibm (1)
> **Speakers:** - [narrator] (1)

#### [Prevention technique: Use digital signatures](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=0)** - [Instructor] The first bullet point in the How to Prevent section of the [[OWASP]] Top 10 description of the vulnerability category for Software and [[Data Integrity]] Failures says, "Use digital signatures or similar mechanisms "to verify the software or data "is from the expected source and has not been altered." So, what's a digital signature? First, it's important to distinguish a digital signature from an electronic signature. I know, I know, these terms sound maddeningly similar. If you've ever signed a contract or agreement online, it's likely that you used an electronic signature. Common software platforms that utilize electronic signature for legal agreements include DocuSign and PandaDoc. In this use case, you'd receive a digital document in your email and select a graphic that represents your electronic signature. This is not the same thing as a digital signature, which we'll describe in just a moment. Whereas electronic signature is a legal term, digital signature is actually a technical term. A digital signature uses math to validate the integrity of a digital message, document, or piece of software. The type of math involved is called asymmetric encryption. Asymmetric encryption is fairly complicated,
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-use-digital-signatures?u=76281980&t=95)** and I won't be going into the details of how it works here. The important concept to understand is that when asymmetric encryption [[Algorithms]] are implemented correctly, data and software can be signed using digital signatures. When someone wants to use that data or software, they can validate that the digitally signed data or software was indeed signed by the legitimate software manufacturer, and not tampered with or changed by a malicious actor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1), [[Data Integrity]] (1), [[Algorithms]] (1)
> **Definitions:** is a  (1), is called (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique: Ensure repositories are trustworthy](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=0)** - [Instructor] Here's what the How to Prevent section says about repositories in use for this vulnerability category. "Ensure libraries and dependencies, such as [[npm]] or Maven are consuming trusted repositories. If you have a higher risk profile, consider hosting an internal known-good repository that is vetted." Some of these terms may be new to you if you're not a professional software developer. Let's learn about some of these coding concepts together. One of the really interesting realities about [[Web Application Development]] is that developers are very rarely creating new applications completely from scratch. They're usually working on adding new features to an existing piece of software. You can think about it kind of like making modifications to an airplane when it's actively carrying passengers and flying in the air. It's critical to ensure that changes to the software don't accidentally break the existing software. You want both the older versions and the newer versions of the software to work properly. A repository, or repo for short, allows software developers to keep track of the new changes they're making while managing different versions. It can be thought of as a collection of many assets. [[GitHub]] is a popular cloud-based repo that is built on [[Git]],
>
> **[1:38](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=98)** a version and control system. Conceptually, a library is like a set of pre-built functions. A dependency is when one piece of code depends on another piece of code, such as a library, to be able to perform its intended functionality. Node package manager called npm for short, and Maven are build automation tools. These help to automate as many steps as possible in the process of building, testing and deploying software. Automating the build process is a critical part of being able to continuously deliver software. These and other similar tools sort of put all the libraries and dependencies together to make software work the way it's supposed to. The critical thing to understand from a security perspective is that any given software dependency might contain security vulnerabilities. Modern software involves a lot of dependencies on various libraries and components. The process of building and deploying modern software is largely automated, and this automation allows for [[Continuous Delivery (CD)|continuous delivery]], which means more frequent and faster software deployments. It is as important as ever to ensure that each and every single dependency that's being used to support a web application is being assessed for risk.
>
> **[3:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-ensure-repositories-are-trustworthy?u=76281980&t=194)** A web app that utilizes a vulnerable dependency will be vulnerable. If it's important to you and your organization that your web apps are not vulnerable then you need to put a process in place that ensures that dependencies are not vulnerable either.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[Web Application Development]] (1), [[GitHub]] (1), [[Git]] (1), [[Continuous Delivery (CD)|Continuous delivery]] (1)
> **CLI Commands:** npm (2), git (1), node (1), make (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique: Review code and configuration changes](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=0)** - [Instructor] Prevention technique number three for the software and [[Data Integrity]] failures category of the 2021 [[OWASP]] Top 10 is to review code and configuration changes. In modern [[Software Development]] environments utilizing [[Continuous Integration (CI)|continuous integration]] and [[Continuous Delivery (CD)|continuous delivery]], CICD, it remains critically important to ensure that code and configuration changes are assessed with proper oversight. The introduction of auto-updates and automation when it comes to code and configuration changes for modern software development involves trade-offs. On one hand, they allow for speed, continuous integration, and continuous delivery. Not requiring manual activity for software updates mean that teams can focus on other activities that do require a person to be involved. All of these benefits assume that the updates are clean and secure. In the case of a patch that needs to be installed in order to address a known security vulnerability, an update could actually lead to more secure software, but being able to automatically install updates also means that if an update makes changes to the code or to the configurations that result in a higher risk, lower security posture, then these are also happening without human intervention, and they're happening quickly. Whereas the fifth category of the 2021 OWASP Top 10,
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=96)** security misconfiguration, focuses on ensuring the configurations of your web application's tech stack are set to more secure rather than less secure defaults, this eighth category draws our attention to the fact that the vast majority of modern software is extremely matrixed and dependent on third party software components. If your web app is dependent on some third party software and that third party software is set to automatically install updates, then it remains your responsibility to ensure that any updates installed by the third party software do not result in code or configuration changes that increase your organization's risk profile or decrease your organization's security posture. My recommendation is to take a risk-based policy approach. All third party vendor software should pass through a third party vendor risk management evaluation process. Third party software dependencies that impact critical functions or systems that store or process highly sensitive or confidential information should take a more conservative approach to allowing automatic updates without a manual review. In any case, be sure to stay informed and up to date with regards to any third-party software [[Microsoft Products|products]] that are incorporated into your web application ecosystem. If a third party does install a malicious update,
>
> **[3:14](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/prevention-technique-review-code-and-configuration-changes?u=76281980&t=194)** then you'll want to stay current with regards to availability of a patch to address the issue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Software Development]] (2), [[Continuous Integration (CI)|Continuous integration]] (2), [[Continuous Delivery (CD)|Continuous delivery]] (2), [[Data Integrity]] (1)
> **Env Vars:** owasp (2), cicd (1)
> **Prerequisites:** install (3)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [OWASP Top 10 keep learning](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-7-identification-and-authentication-failures-and-8-software-and-data-integrity-failures/owasp-top-10-keep-learning?u=76281980&t=0)** - [Instructor] And here you have it. Items number seven and eight in the [[OWASP]] Top 10. Identification, authentication, and integrity failures have been key information security concepts for decades now. The problems that lead to data breaches are known, and we must continue to find, fix, and prevent these security vulnerabilities. We have an opportunity to build more secure web applications in the future. I hope you'll join me in my next course that covers the 9th and 10th vulnerability categories, security logging and monitoring failures, and server-side request forgery, commonly referred to as SSRF. Similar to this course, we'll learn about each vulnerability category, dive into real life examples, and discuss prevention techniques. Let's keep learning together. There's more to explore in the 2021 OWASP Top 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2)
> **Env Vars:** owasp (2), ssrf (1)
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