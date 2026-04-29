---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security
url: "https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security"
duration_minutes: 100
duration: 1h 40m
level: Intermediate
updated: 2/10/2023
learners: 27378
skills:
  - ASP.NET Core
  - Web Application Security
exercise_files: true
github: "https://github.com/LinkedInLearning/aspdotnet-core-security-4310099"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFBrzLL9d6MUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1675902640846?e=2147483647&amp;v=beta&amp;t=xVhuNqX8KVDIMyW5xfjRG_gRglVxHxaWZklNbQDJa2Q"
linkedin_topic: Web Development
learning_paths:
  - '[[Getting Started as an ASP.NET Core Developer]]'
prev_courses:
  - '[[Building Angular and ASP.NET Core Applications]]'
next_courses:
  - '[[ASP.NET Core- Token-Based Authentication]]'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":5,"total":9,"prev":"Building Angular and ASP.NET Core Applications","next":"ASP.NET Core- Token-Based Authentication"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/asp-net-core
  - skill/web-application-security
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Securing%20ASP.NET%20Core%20Apps-%20Advanced%20Techniques%20for%20Web%20Application%20Security.md)

![Securing ASP.NET Core Apps: Advanced Techniques for Web Application Security](https://media.licdn.com/dms/image/v2/C560DAQFBrzLL9d6MUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1675902640846?e=2147483647&amp;v=beta&amp;t=xVhuNqX8KVDIMyW5xfjRG_gRglVxHxaWZklNbQDJa2Q)

# Securing ASP.NET Core Apps: Advanced Techniques for Web Application Security

> Software security is an important consideration when designing and developing web applications. While security breaches and threats can have serious consequences, there are steps you can take as a software developer to keep your applications safe. In this course, instructor Ervis Trupja explores techniques for securing and controlling access to your ASP.NET Core applications. Ervis begins by going

> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security) | 1h 40m | Intermediate | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Common Vulnerabilities in Apps]]** (6 videos)
- **[[#2. Securing .NET Web Applications with Authentication]]** (8 videos)
- **[[#3. Securing .NET Web API Applications with Authorization]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Secure your .NET Core apps
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/secure-your-dot-net-core-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/secure-your-dot-net-core-apps?u=76281980&t=0)** - [Ervis] Don't let these security concerns hold your app back.
>
> **[0:03](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/secure-your-dot-net-core-apps?u=76281980&t=3)** As a web developer, you know the importance of protecting the user's personal data and securing your applications.
>
> **[0:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/secure-your-dot-net-core-apps?u=76281980&t=12)** But with the constant threat of the malicious attacks, it's essential to stay on top of the latest security measures.
>
> **[0:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/secure-your-dot-net-core-apps?u=76281980&t=19)** Hi, my name is Ervis Trupja and I'm a freelance full stack developer and trainer.
>
> **[0:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/secure-your-dot-net-core-apps?u=76281980&t=25)** In this course, you learn how to prevent common vulnerabilities in your .NET applications, and how to use the [ASP.NET](https://ASP.NET) identity framework to secure your data.
>
> **[0:38](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/secure-your-dot-net-core-apps?u=76281980&t=38)** You'll also discover the benefits of using different types of authentication and authorization to build secure applications for your users.
>
> **[0:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/secure-your-dot-net-core-apps?u=76281980&t=48)** This course will give you the skills and the knowledge that you need to build secure .NET applications.

> [!info]- Semantic Content
>
> **Env Vars:** net (3), asp (1)
> **Code Keywords:** let (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [ervis] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we start this course, let us talk about a couple of things that you need to know.
>
> **[0:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-you-should-know?u=76281980&t=6)** This is a .NET security course and I'll be using two different apps so you can better learn things by doing.
>
> **[0:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-you-should-know?u=76281980&t=14)** I'm going to use an [ASP.NET](https://ASP.NET) MVC app, and an [ASP.NET](https://ASP.NET) Web API app.
>
> **[0:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-you-should-know?u=76281980&t=20)** Any experience with these frameworks is recommended, but it is not required.
>
> **[0:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-you-should-know?u=76281980&t=26)** As a programming language, I'll use C# and as .NET version, I'll be using .NET 7.0, which is the current latest version.
>
> **[0:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-you-should-know?u=76281980&t=36)** If you have any experience with C# and any .NET framework, it's recommended, but if not, you can still watch the course and learn something.
>
> **[0:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-you-should-know?u=76281980&t=47)** To build our apps, I'll be using Visual Studio 2022 Community Edition and throughout this course, if you would like to follow along while I'm coding, you can download the exercise files from the course page.

> [!info]- Semantic Content
>
> **Env Vars:** net (6), asp (2), mvc (1), api (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Exercise Files:** download the (1), exercise files (1)
> **Best Practices:** recommended (2)
> **Code Keywords:** let (1)
> **Versions:** 7.0 (1)
> **Tools:** visual studio (1)
> **Prerequisites:** before we start (1)


### 1. Common Vulnerabilities in Apps

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Common security vulnerabilities
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=0)** - [Instructor] Common security vulnerabilities are weaknesses in a software or hardware system that can be exploited by attackers to gain unauthorized access to sensitive data or to cause damage to a system.
>
> **[0:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=14)** During this course, you'll learn about the common security vulnerabilities and how to secure your apps from such vulnerabilities.
>
> **[0:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=23)** Let us start with the first one, which is the injection attack.
>
> **[0:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=27)** Injection attack includes different types of attacks, such as the SQL injections, the command injections, CRLF injections, and also the LDAP injections.
>
> **[0:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=40)** The SQL injection attack involves injecting malicious SQL code into an application in order to gain access to sensitive data stored in a database.
>
> **[0:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=52)** The command injection attack involves injecting command-line commands into a vulnerable application in order to execute them in the operating system.
>
> **[1:03](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=63)** This type of attack can be used to gain unauthorized access to a system or to cause damage to the system.
>
> **[1:10](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=70)** The CRLF attack involves injecting special characters into an HTTP request in order to manipulate the request and cause damage in the server.
>
> **[1:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=83)** The LDAP attack involves injecting malicious LDAP statements into an application in order to manipulate the LDAP directory.
>
> **[1:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=96)** And we're going to talk about this injection types in the next part.
>
> **[1:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=102)** It is important for us as developers to be aware of these type of injection attacks and take steps to prevent them.
>
> **[1:51](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=111)** The next vulnerability attack type is the file upload attack.
>
> **[1:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=116)** In the file upload attack, a file is uploaded to the system, or let's say a malicious file, with the intent to compromise the security.
>
> **[2:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=127)** For example, you have a form where you ask the users to provide their CVs.
>
> **[2:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=132)** So a malicious user, instead of uploading a PDF or a DOC file, uploads a malicious file.
>
> **[2:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=140)** The next one is the authentication attack.
>
> **[2:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=143)** This attack is also known as the brute force or the guessing attack, because in the authentication attack, the user tries to guess the password by submitting a lot of authentication requests.
>
> **[2:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=155)** A good prevention method for this kind of attack is to limit how many times a user can type a wrong username and password.
>
> **[2:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=164)** Let's say that after five attempts, you lock the user out of their account.
>
> **[2:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=170)** The cross-site scripting, or the XSS attack, is when attackers inject client-side code into your web application in an input or a text area.
>
> **[3:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=182)** And the cross-site request forgery, or the XSRF, you can also find this with a different name as CSRF, is when an attacker uses your authenticated user session to send unwanted requests.
>
> **[3:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=199)** The same-origin policy and the CORS, or the cross-origin resource sharing, is when attackers use third-party application tools to access your application.
>
> **[3:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=211)** So this is a quick overview of the top five common vulnerability attacks.
>
> **[3:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/common-security-vulnerabilities?u=76281980&t=216)** On the upcoming parts, we are going to talk about all of them in more details.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (4), sql (3), crlf (2), http (1), pdf (1)
> **Code Keywords:** let (3)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Injection attack
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=0)** - [Instructor] Injection attack is all about injecting the malicious information or code into the application and this way getting access in an app.
>
> **[0:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=11)** We have mentioned on the last part that there are four important injection attack types.
>
> **[0:17](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=17)** We do have the SQL injection and this type of attack targets websites or web applications that use SQL database to store data.
>
> **[0:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=27)** The attacker will inject the malicious SQL code into the website by using, let's say an input form or by using a text area, which is then executed by the database.
>
> **[0:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=41)** The command injection attack type is about executing code directly into the program or the system.
>
> **[0:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=48)** Any command injection attacks can be extremely dangerous because they allow an attacker to gain access to sensitive information and take control of a system without the user's knowledge.
>
> **[1:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=61)** This CLRF injection, which is also known as the Carriage Return Line Feed injection is a type of attack that involves injecting malicious code into a computer program or a system by using the CRLF characters.
>
> **[1:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=78)** The CR characters are the slash r, and the line feed characters are the slash n.
>
> **[1:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=86)** The LDAP or the Lightweight Directory Access Protocol Injection type is a type of attack that involves injecting malicious code into LDAP search query in order to retrieve sensitive information.
>
> **[1:43](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=103)** Application security testing can reveal injection flaws which you can make sure that you fix before you push your app to production.
>
> **[1:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=112)** Now let us go to Visual Studio and check one of the attacks in action.
>
> **[1:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=116)** You learn about the SQL injection attack.
>
> **[2:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=121)** So in Visual Studio, I do have a controller.
>
> **[2:03](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=123)** It's named the UsersController.
>
> **[2:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=126)** And inside the controller I have a single EPIN point of type HttpGet.
>
> **[2:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=131)** This takes as a parameter, the userId of type string and then I use the userId to execute this query in the database.
>
> **[2:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=140)** So here you can see, select all from the table users where ID is equal to, and then I have the id.
>
> **[2:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=148)** Now this is a bad case where the malicious user can simply enter some bad code instead of the user ID and delete all the users from the database.
>
> **[2:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=160)** So I'll just put a breakpoint in here and then run the project by clicking the play button up here.
>
> **[2:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=170)** So in here you can see that I have the API endpoint for getting a user.
>
> **[2:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=174)** Now in here, instead of typing the userId, I'll type the user id, then DROP TABLE users, and then click the execute button.
>
> **[3:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=188)** Now you'll see that I did reach the breakpoint in here.
>
> **[3:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=191)** Let me close the diagnostic tools.
>
> **[3:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=195)** And you can see that the value for the userId is the whole command.
>
> **[3:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=199)** So when I click next, you'll see that now the SQL command is to get the users where the id is one and then drop the table users.
>
> **[3:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=211)** So this is a case of the SQL injection attack.
>
> **[3:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=215)** Now, to protect our apps from this kind of attacks, we need to use parametrized SQL queries.
>
> **[3:43](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=223)** So let us stop the app.
>
> **[3:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=225)** Now in here, on line 16, instead of adding the userId, let us type in here id is equal to at userId.
>
> **[3:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=238)** And then inside the using, we're going to type cmd.parameters and then .AddWithValue.
>
> **[4:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=251)** Now to the parameter userId, so at userId, to this value, we are going to add the userId that comes from the request.
>
> **[4:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=262)** So this one in here.
>
> **[4:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=264)** Let me type in here userId.
>
> **[4:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=270)** Now let us put a break point in here and run our project one more time.
>
> **[4:37](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=277)** So let us do the same.
>
> **[4:38](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=278)** Try it out.
>
> **[4:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=280)** One and then semi colon, DROP TABLE users, and then click execute.
>
> **[4:51](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=291)** So we have reached the break point.
>
> **[4:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=293)** Let us go to cmd.
>
> **[4:57](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=297)** Down here, let us go to the command text.
>
> **[5:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=302)** You'll see that this is our command.
>
> **[5:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=304)** So select all from users where id is equal to the userId.
>
> **[5:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=309)** And you can see that we do not see the part where we can remove the table users from the database.
>
> **[5:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=316)** Let us check the other properties.
>
> **[5:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=318)** So let us go in here to the parameter collection and then in here, go to the result view.
>
> **[5:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=327)** We do have just this one and you can see that we have a single parameter and the parameter name is the userId and the value is going to be one DROP TABLE users.
>
> **[5:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=341)** So this query will not actually work because it's going to search for a user that has the ID one DROP TABLE users.
>
> **[5:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/injection-attack?u=76281980&t=352)** So this way we have saved our app from an SQL injection attack.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), drop (4), table (4), ldap (2), clrf (1)
> **Code Keywords:** let (12), delete (1)
> **Code Identifiers:** userid (12)
> **SQL:** drop table (4)
> **UI Navigation:** go to (4)
> **Definitions:** is a  (4)
> **Tools:** visual studio (2)
> **CLI Commands:** make (1)

#### File upload attack
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=0)** - [Instructor] When building apps, you might require users to upload a file.
>
> **[0:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=5)** For example, a profile picture, a CV, et cetera.
>
> **[0:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=9)** But what are the risks of allowing users to upload a file in your apps?
>
> **[0:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=15)** When allowing users to upload files to your site, there are four main risks.
>
> **[0:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=20)** You could have unauthorized upload, which means that any user can just come to your app and upload stuff.
>
> **[0:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=27)** The second one is that users, let's say, are signed in but they are still allowed to upload malicious content.
>
> **[0:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=34)** And if the file contains an exploit, a malware, a malicious script, or macro, and this file could be used to gain control of the server or infect the users' machines.
>
> **[0:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=46)** The third one is that your files could be overwritten, so existing files could be overwritten.
>
> **[0:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=54)** Let's say if a file is uploaded with the same name and the extension as an existing file on the server, this could overwrite the existing file and imagine that file being a critical file, then the new file can potentially be used to launch a server site attack.
>
> **[1:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=72)** The last one is that users can upload very large files, and if an extremely large file is uploaded, this could cause a denial of service attack and bring down the site.
>
> **[1:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=85)** So these are the problems, but how can we prevent our apps from these risks?
>
> **[1:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=91)** The first one is that we need to authenticate the users, so make sure that only the authenticated users can upload files.
>
> **[1:39](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=99)** We can also verify and allow only specific file extensions.
>
> **[1:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=104)** So let us say the users can only upload PNG files or PDF files, but not JSON or let's say JavaScript files.
>
> **[1:55](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=115)** Next, you can also set a maximum name length and a file size.
>
> **[1:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=119)** So let us say you allow users to upload only files up to five megabytes.
>
> **[2:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=124)** Then you can also store the uploaded files outside the web root folder which is an important folder in a web application.
>
> **[2:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=132)** And also try to use simple error messages.
>
> **[2:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=136)** This is really important, so in case something goes wrong with a file upload, you do not expose the file structure to the end users.
>
> **[2:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=147)** Now, to make this clear, let us go to Visual Studio and see it in action.
>
> **[2:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=153)** In Visual Studio, I have a controller, I have the files controller and this controller has single API endpoint named Upload, and of type HttpPost.
>
> **[2:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=165)** Now as a parameter, we are going to pass an IForm file.
>
> **[2:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=170)** So let me just put a break point in here, click the Run button.
>
> **[2:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=179)** Now that Swagger is up and running, we can just go to files and then in here, try it out.
>
> **[3:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=184)** In here you can choose any file.
>
> **[3:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=186)** I do have some files, like a DOC file a JSON file, a PDF, and a text file.
>
> **[3:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=192)** Let me select the JSON file, and I click Open, then execute.
>
> **[3:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=198)** You can see that I got the file in here.
>
> **[3:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=201)** Now imagine a malicious user who tries to upload a JavaScript file with the intention to get or to break your system.
>
> **[3:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=213)** Or another user who wants to upload a really large file with the same intention of breaking the system.
>
> **[3:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=222)** Now, what we can do in here is that first of all, here on the action, we can just add the authorized attribute, which means that only the logged-in users can now upload files.
>
> **[3:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=238)** And then in here if you want, you can also define roles, like for example, only the admins, only the operators.
>
> **[4:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=247)** Let's say you have these roles in the system, only these roles can upload files.
>
> **[4:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=252)** Let us remove the roles in here.
>
> **[4:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=255)** So this means now only the logged-in users, the role is not important.
>
> **[4:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=260)** Then next, what we can do in here is that we can check the extension.
>
> **[4:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=264)** So check the file extension, and then I'll type in here var extensions is equal to, for that I'll use the Path.GetExtension method, and then use as the parameter, the file.FileName.
>
> **[4:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=286)** Now down here we can check if the extension is different from, let's say we want to allow the users to upload just PDF files.
>
> **[5:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=300)** PDF we could just return a BadRequest, which says only .PDF files are allowed.
>
> **[5:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=314)** Then we can also check the data size.
>
> **[5:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=318)** So I'll just type in here, File Size, and then File Size, or we can just add the check directly.
>
> **[5:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=332)** So if the file.Length is greater than 10 times,
>
> **[5:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=341)** so that's in bits, 1024.
>
> **[5:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=345)** So if it's larger than 10 kilobyte, then we can return another BadRequest, which says that file length in bytes or file is larger than 10 kilobyte.
>
> **[6:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=366)** Now another thing that we can do is that we can just generate a random name.
>
> **[6:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=375)** So this way we are protected from users who try to override the existing files in the system.
>
> **[6:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=383)** So it's Random Name, and you can do that before you save it to your local path.
>
> **[6:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=394)** So let me now just put the break point in here and then run this project one more time.
>
> **[6:43](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=403)** And you have the post, I'll just try it out.
>
> **[6:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=407)** Choose a file.
>
> **[6:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=409)** I'll choose this text file and then execute.
>
> **[6:57](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=417)** In here you'll see that you get an error, which is related to the authentication and that's right because we are using the authorized attribute but we have not defined an authentication scheme.
>
> **[7:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=427)** So I'll just comment out this line and then run the project one more time.
>
> **[7:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=435)** Now I'll go to the post, the same way, I'll just upload the text file.
>
> **[7:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=440)** So it's not a PDF and then click Execute.
>
> **[7:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=445)** In here, I'll get the extension.
>
> **[7:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=447)** It's a TXT, so it's not a PDF.
>
> **[7:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=451)** So I'll get an error which says that only PDF files are uploaded.
>
> **[7:37](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=457)** Let me try with the PDF file, I click execute.
>
> **[7:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=464)** And here you'll see that the first check is passed.
>
> **[7:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=468)** So let me check.
>
> **[7:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=469)** The extension is .PDF, so we actually need to use dot in here, let's use the dot.
>
> **[7:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=476)** And then save all the changes and restart the app.
>
> **[8:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=485)** Then try it out.
>
> **[8:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=487)** Choose a file.
>
> **[8:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=489)** I'll choose the PDF file and I click Open, Execute.
>
> **[8:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=494)** You'll see that the first check is passed because the extension is .PDF.
>
> **[8:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=498)** Now we need to check the length and you can see that the file size is way bigger than 10 kilobytes.
>
> **[8:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=505)** So you'll see that we reach this other check, which says that file is larger than the defined size.
>
> **[8:39](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=519)** Now .NET, it's also possible to use decorators for the form file instead of having to manually check them in here.
>
> **[8:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=528)** Like for example for the form file, I can just type in here Allowed or file extensions.
>
> **[8:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=539)** And then in here I can define the extensions.
>
> **[9:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=545)** The extensions are going to be .PDF and let's say .TXT files.
>
> **[9:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=554)** And then you can just get rid of these lines.
>
> **[9:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=559)** You can do the same in here for the file size or the file length in here, and just type max length and that is going to be 10 times 1024.
>
> **[9:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/file-upload-attack?u=76281980&t=576)** And then you can comment out this line.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), require (1), pass (1), var (1), from, (1)
> **Env Vars:** pdf (13), json (3), txt (2), png (1), api (1)
> **Analogies:** for example (3), imagine (2), picture (1)
> **UI Navigation:** go to (3), select the (1)
> **Definitions:** means that (2), is an  (1)
> **CLI Commands:** make (2)
> **Tools:** visual studio (2)
> **Speakers:** - [instructor] (1)

#### Authentication attack
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=0)** - [Instructor] A common threat that web developers face is the authentication attack, or as we might call it differently, the brute-force attack.
>
> **[0:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=9)** A brute-force attack is an attempt to discover a password by systematically trying every possible combination of letters, numbers, and symbols until you discover the one correct combination that works.
>
> **[0:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=24)** Depending on the password policy, it can be either really easy or hard to guess.
>
> **[0:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=31)** In these cases, what happens is that you have a really large file with commonly used passwords consisting of letters and numbers, and you just try.
>
> **[0:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=41)** You try until you find the right match.
>
> **[0:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=45)** But how can you prevent your apps from these kind of attacks?
>
> **[0:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=50)** First of all, you can implement multifactor authentication or MFA.
>
> **[0:57](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=57)** What this means is that each time you log into your app, the user will receive a secret key or a secret password in their mobile phone or their email address which then they can use to log in to your app.
>
> **[1:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=73)** You can also enable the user lockout, which means that if the user tries to log in for a certain amount of times, but they provide the wrong credentials, then you do lock out the users from the app for a certain amount of time.
>
> **[1:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=90)** Let's say if the user tries to sign in five times, they provide the wrong credentials, you do lock out this user for 10 minutes.
>
> **[1:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=101)** Another technique is password hashing, and the last one is training.
>
> **[1:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=106)** And this is actually the most important one, is that you need to train the users so they're not prone to phishing or scams that they might receive via their email addresses.
>
> **[1:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/authentication-attack?u=76281980&t=119)** Now, let's go to Visual Studio and see how we can add lockout configuration in a .net application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), try. (1), match. (1)
> **Definitions:** is an  (1), means that (1)
> **CLI Commands:** find (1)
> **Env Vars:** mfa (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### XSS and CSRF attack
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=0)** - [Instructor] Two of the most common attacks against websites and web applications are the XSS, or the cross-site scripting, and the CSRF, or the cross-site request forgery.
>
> **[0:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=14)** In cross-site scripting attacks, hackers inject client-side code into a legitimate website or a web application.
>
> **[0:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=22)** A cross-site scripting vulnerability can lead to advanced attacks, such as cookie theft, phishing, key logging, and identity theft.
>
> **[0:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=33)** Let us say you have a web application, you have a Search bar, and a Search button.
>
> **[0:39](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=39)** Whenever you click the Search, you display some results.
>
> **[0:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=41)** But some users, instead of typing a text or some numbers, they paste a JavaScript code.
>
> **[0:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=49)** And this JavaScript code might try to get the cookies that you have in your browser.
>
> **[0:55](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=55)** But how can you prevent from XSS attacks?
>
> **[1:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=60)** The key answer is to encoding everything.
>
> **[1:03](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=63)** Encode the HTML parameters, encode the JavaScript parameters, and also, encode the URL parameters.
>
> **[1:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=74)** Last but not least, make sure that you validate and test your apps.
>
> **[1:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=81)** On the other hand, the cross-site request forgery is when attackers use authenticated user sessions to send unwanted requests to web application or site from an unauthenticated user.
>
> **[1:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=96)** Now, this seems like a complex definition, but let us try to clear it out by using a real-world example.
>
> **[1:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=105)** Imagine you are in a website, you log in, and after you are logged in, you want to play a game.
>
> **[1:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=113)** So as you play the game, you have collected coins to win.
>
> **[1:57](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=117)** Now, a CSRF attack, or a cross-site request forgery attack, is when a bad person tries to trick you into giving them your coins without you knowing.
>
> **[2:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=131)** They might send, for example, a link or a button that looks like it's part of the game, but it's actually a trick.
>
> **[2:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=138)** When you click on the link or the button, it makes your computer or your web app do something that you don't want to do, like giving your coins to the bad person.
>
> **[2:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=151)** Now, to protect from the cross-site request forgery attacks, you can use different techniques, like, for example, same-site cookies.
>
> **[2:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=160)** The same-site cookies help defend against the cross-site request forgery attacks by restricting the cookies sent alongside each request.
>
> **[2:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=170)** This way, the developer can ensure that only certain cookies can accompany a request with same-site cookies.
>
> **[2:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=179)** You can also require user interaction.
>
> **[3:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=182)** Like, for example, after the user logs in or provide the credentials, you can ask them to reauthenticate, or you can ask them some captcha challenges.
>
> **[3:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=194)** And also, one-time tokens can provide a strong defense against the CSRF.
>
> **[3:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/xss-and-csrf-attack?u=76281980&t=201)** Last but not least, adding custom request headers is an especially effective defense for API endpoints because this way users can only add custom headers using JavaScript and must add the headers within their origin.

> [!info]- Semantic Content
>
> **Env Vars:** csrf (3), xss (2), html (1), url (1), api (1)
> **Analogies:** for example (3), such as (1), imagine (1)
> **Code Keywords:** let (2), require (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### CORS attack
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=0)** - [Instructor] A CORS attack or a cross-origin resource sharing attack is when attackers use third-party applications or tools to access your application.
>
> **[0:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=12)** To prevent such attacks, we use the same origin policy, which will make sure that only the allowed origins or domains can access your API.
>
> **[0:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=23)** So let us go to Visual Studio and see how we can add CORS support.
>
> **[0:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=30)** In here, let us navigate to the program.cs.
>
> **[0:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=34)** And then in here after the Configure Lockout Options, let us type Add CORS and then type in here builder.Services.AddCors.
>
> **[0:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=53)** Now let us scroll down after the app builder.Build and I'll actually write the code after the environment check and then here I'll type Use Cors, so I need to add the CORS in here, and then down here, you need to define the properties of the CORS, so in here I'll type app.UseCors, and then options that go to options.WithOrigins.
>
> **[1:29](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=89)** So in here, let us now define which origins are allowed to access our API.
>
> **[1:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=95)** Let's say https, only the request that come from [example.com](https://example.com)
>
> **[1:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=104)** can access our API, and you can add more restrictions in here like for example, you can just allow certain, let's say certain methods, you can allow certain headers, or you can allow just this origin, but with AnyHeader and AnyMethod,
>
> **[2:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cors-attack?u=76281980&t=132)** and this is all that you need to do in here.

> [!info]- Semantic Content
>
> **Env Vars:** cors (5), api (3)
> **Code Keywords:** let (7)
> **UI Navigation:** go to (2), navigate to (1), scroll down (1)
> **CLI Commands:** make (1)
> **URLs:** [example.com](https://example.com) (1)
> **Tools:** visual studio (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)


### 2. Securing .NET Web Applications with Authentication

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is authentication?
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980&t=0)** - [Instructor] Word definition.
>
> **[0:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980&t=2)** Authentication is the process of verifying identity of a user.
>
> **[0:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980&t=7)** As an example, let us have two individuals, we have the person A and person B.
>
> **[0:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980&t=14)** The person A has a company badge and is able to access the company building.
>
> **[0:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980&t=19)** The second one, so the person B, doesn't have a company badge, so the access to the building is denied.
>
> **[0:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980&t=27)** So in other words, the company systems know the identity of the first person, so the first person is authenticated by the systems, but the systems do not know the identity of the person B, since the person B doesn't have a badge, this means that the person B is not authenticated by the company, or let's say, by the company systems.
>
> **[0:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980&t=50)** In .NET, there are different authentication types, we have simple or basic authentication, we have cookie-based authentication, social-provider authentication, and in the social-provider authentication, we can basically use our social media profiles to log in to the apps, like for example, you can use your Facebook profile, your Twitter profile, your LinkedIn profile, et cetera.
>
> **[1:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980&t=78)** We also have two-factor authentication, API-key authentication, and token-based authentication.
>
> **[1:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authentication?u=76281980&t=86)** We are going to talk about these authentication types in the upcoming parts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** net (1), api (1)
> **Definitions:** in other words (1), means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Identity on ASP.NET Core
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=0)** - [Instructor] Before we get started with the authentication types, let us talk about the [ASP.NET](https://ASP.NET) Identity.
>
> **[0:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=7)** [ASP.NET](https://ASP.NET) Identity is an API which is built by Microsoft with all the default features that are necessary to set up an authentication system.
>
> **[0:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=18)** This includes user management, password management, profile, roles, claims management, and much more.
>
> **[0:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=27)** With [ASP.NET](https://ASP.NET) Identity, you have one identity system for all, which means that you can use the [ASP.NET](https://ASP.NET) Identity in an MVC app, in a web API app, in a SignalR, et cetera.
>
> **[0:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=42)** [ASP.NET](https://ASP.NET) Identity uses the Entity Framework to store user data in a database.
>
> **[0:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=48)** And you can store data in SharePoint, in Azure, in MySQL, SQL, and much more.
>
> **[0:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=56)** It also includes classes for managing user accounts, user roles, claims, and provides methods for creating and verifying passwords, as well as for handling forgotten passwords and user lockouts which we have also seen on the previous chapter.
>
> **[1:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=72)** Last but not least, [ASP.NET](https://ASP.NET) Identity provides features such as multifactor authentication, external authentication providers, and integration with social media logging providers such as Google, Facebook, Twitter, LinkedIn, et cetera.
>
> **[1:29](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=89)** Now, let us go to Visual Studio and see an example of creating an MVC application using Identity.
>
> **[1:39](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=99)** Now in here, let us go to the Solution Explorer, and in here we do have the SecurityApp.API.
>
> **[1:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=105)** We are going to create another project, but this is going to be on MVC project.
>
> **[1:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=109)** So right click, then go to Add and then New Project.
>
> **[1:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=114)** In here, search for MVC, and then select the [ASP.NET](https://ASP.NET) Core Web App Model-View-Controller.
>
> **[2:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=121)** But make sure that you select the option that has, as the programming language, the C#, then click Next.
>
> **[2:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=128)** I'm going to name this app SecurityApp.MVC, and then click the Next button.
>
> **[2:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=136)** Here is the .NET Framework.
>
> **[2:17](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=137)** I have selected the .NET 7.0, which is the current latest version.
>
> **[2:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=142)** And then on the Authentication type, I'm going to set the Individual Accounts.
>
> **[2:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=147)** Next, let us click Create, and the project will be created.
>
> **[2:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=155)** Here from the Solution Explorer, I'll just right click, and then set this project as the startup project.
>
> **[2:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=164)** Let us wait for the packages to be installed.
>
> **[2:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=167)** You shall see in here that we have, since we set the Authentication type, we're going to have all these packages installed by default, so we need to wait a couple of seconds.
>
> **[3:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=181)** Now that the packages were installed, let us run this project, I'll click the play button up here.
>
> **[3:10](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=190)** So in here, you can see that we do have a simple app.
>
> **[3:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=192)** The name is SecurityApp.MVC, we have Home, we have Privacy, and here on the top right, we do have two important buttons.
>
> **[3:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=198)** The first one is the Register button, and here you have the Register page where you can enter your email address, password, and confirm password, then you have the Log in button.
>
> **[3:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=211)** Now let us create an account.
>
> **[3:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=214)** In here, I'll type my first name@[lastname.com](https://lastname.com), and then the password is going to be Trupja@1, just like this.
>
> **[3:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=227)** And then let us confirm the password, @1, and then click the Register button.
>
> **[3:55](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=235)** When you click or when you register an account for the first time, you're going to get this error page which says that: A database operation failed while processing the request.
>
> **[4:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=247)** And that's right because we have said that the Identity Framework, by default, is going to use the Entity Framework.
>
> **[4:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=254)** And since we're running this app for the first time, the app needs to create the database using the default configurations of the Entity Framework.
>
> **[4:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=264)** So in here ,I'll just click Apply Migrations, and this is going to do all this thing automatically, and then refresh the page.
>
> **[4:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=273)** So refresh, Continue.
>
> **[4:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=276)** Now that the page is refreshed, you're going to see that we have this Register confirmation page and says that: This app does not currently have a real email sender registered.
>
> **[4:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=287)** And then you can check these docs to add that.
>
> **[4:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=289)** Normally, this would be emailed or you can just click this button here to automatically verify this account.
>
> **[4:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=298)** Now on the upcoming parts, you're going to learn how to add SendGrid to send a confirmation email for your account then click a link so you're able to log into your account.
>
> **[5:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=309)** But as an example, in here I'll just click in here to verify the account automatically.
>
> **[5:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=314)** Now I can just go to Log in, then here I'll type my first name, so ervis@[trupja.com](https://trupja.com), and then password was Trupja, with capital T, @1.
>
> **[5:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=326)** And then I'll click the Log in button.
>
> **[5:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=330)** And now in here you can see that I'm successfully logged in because up here you can see "Hello" and then my email address, and next to the "Hello" message, you have the Logout button.
>
> **[5:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/identity-on-asp-dot-net-core?u=76281980&t=341)** If I click this button, you're going to be logged out from the app.

> [!info]- Semantic Content
>
> **Env Vars:** net (9), asp (7), mvc (6), api (3), sql (1)
> **Code Keywords:** let (8), type, (2), default, (2), this. (1), continue (1)
> **URLs:** [asp.net](https://asp.net) (7), [lastname.com](https://lastname.com) (1), [trupja.com](https://trupja.com) (1)
> **UI Navigation:** go to (4), select the (1)
> **Analogies:** such as (2), just like (1)
> **CLI Commands:** mysql (1), make (1)
> **Definitions:** is an  (1), means that (1)
> **Versions:** 7.0 (1)

#### Simple authentication with [Authorize] attribute
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=0)** - [Instructor] The simple authentication type is about just checking if the user is logged in or not.
>
> **[0:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=7)** And that is easily done by using the authorize attribute.
>
> **[0:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=11)** Before we check how to add the authorize attribute, let us go to Visual Studio and check how the default configuration of the [ASP.NET](https://ASP.NET) identity is done.
>
> **[0:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=23)** In Visual Studio let us start with the solution explorer and then in here go to the Program.cs.
>
> **[0:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=30)** In here in line eight, you're going to see that we do use the configuration GetConnectionString method to get the default connection.
>
> **[0:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=41)** And if that doesn't exist then we just throw an exception which says Connection string is not found.
>
> **[0:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=47)** Where can we find the default connection?
>
> **[0:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=50)** To find that connection, go to the solution explorer.
>
> **[0:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=52)** Then go to the appsettings.json file.
>
> **[0:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=56)** In here you have the connection strings, so here when you have builder.configuration.GetConnectionString, this method will automatically search for a section in the appsettings.json file named Connection Strings.
>
> **[1:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=71)** And then inside this section it's going to check for the default connection.
>
> **[1:17](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=77)** So in the app settings, we do have the default connection and that is the local DB MSSQL local DB, that is the name.
>
> **[1:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=87)** And then the database is this random name.
>
> **[1:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=91)** You can see it's aspnet then SecurityApp.mvc and then a code.
>
> **[1:37](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=97)** The Trusted Connection, True and multiple active results sets is equal to true means that we can log into this database using Windows authentication.
>
> **[1:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=109)** So let us copy this value.
>
> **[1:51](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=111)** I'll copy this one and then here go to Server Explorer.
>
> **[1:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=116)** But if you do not see this server explorer in here you can just go to view.
>
> **[2:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=121)** And then in here server Explorer, let us add new connection.
>
> **[2:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=126)** So add a connection.
>
> **[2:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=128)** We're going to selecting your Microsoft SQL server continue.
>
> **[2:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=133)** The server name is going to be this value.
>
> **[2:17](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=137)** The authentication is going to be Windows authentication.
>
> **[2:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=142)** And then from the dropdowns in here, this is the database that we need to select and then click the okay button.
>
> **[2:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=152)** Now if we expand this connection, you're going to see the default tables and all these default tables were created by the first migration that was executed by the entity framework.
>
> **[2:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=164)** So now you have the AspNetRoles, you have the AspNetUsers and all these other tables.
>
> **[2:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=169)** If we open the AspNetUsers, so Show Table Data you are going to see that in here we have the username, we have email address, which is ervis@[trupja.com](https://trupja.com).
>
> **[3:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=182)** Email confirm is set to True because we clicked the link on the view to manually confirm the email address and all the other data like for example the password hash, security stamp and other information.
>
> **[3:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=199)** On the Solution Explore, let us go back to Program.cs.
>
> **[3:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=204)** After the connection string, we do have in here add default identity.
>
> **[3:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=211)** So this is going to set the IdentityUser class which comes from the Microsoft AspNet Core Identity as the default class for working with user data.
>
> **[3:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=222)** And then in here it will say that I want to work with user data using the Entity framework core or just the Entity framework version seven.
>
> **[3:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=232)** You can check the version by just going to the Solution Explorer, then dependencies.
>
> **[3:57](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=237)** And here on the packages, you have Microsoft AspNet Core Identity UI 7.0.1 and then you have the Microsoft AspNet Core Identity Entity Framework Core 7.0.1 which is the current latest version.
>
> **[4:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=255)** Now let us check how the authorized attribute works.
>
> **[4:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=259)** So if I run the app, you can see that I can go to home I can go to privacy and I don't need to be logged in.
>
> **[4:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=268)** Let us update the code so when you navigate to the privacy you need to be authenticated to access this page.
>
> **[4:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=276)** For that, I'll just close the browser and then go in here to Controllers in here you can see we have a single Controller named Home and down here we do have the Privacy Action Result, and this is the one that calls the view or displaying the privacy data.
>
> **[4:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=294)** So if I right click here and go to View, you'll see that this is the information that was showing on that page.
>
> **[5:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=302)** Here on the Home Controller, I have already mentioned that it's as simple as just adding the authorized attribute in here.
>
> **[5:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=309)** So authorized then let us important the name space.
>
> **[5:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=315)** The namespace is the Microsoft.AspNetCore.authorization.
>
> **[5:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=319)** Now let us save the changes.
>
> **[5:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=322)** RUN the project one more time.
>
> **[5:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=325)** Now in here, let us go to the privacy tab.
>
> **[5:29](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=329)** You can see that now instead of displaying the privacy information I'm redirected to the login page.
>
> **[5:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=335)** Let me provide the credentials.
>
> **[5:37](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=337)** ervis@[trupja.com](https://trupja.com) and then we have Trupja@1 you can see the password and then click the login button.
>
> **[5:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-authentication-with-authorize-attribute?u=76281980&t=348)** After you are logged in you'll see that you'll be redirected to the home privacy, and now you can see this data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), throw (1), continue (1)
> **UI Navigation:** go to (10), open the (1), navigate to (1)
> **Env Vars:** asp (1), net (1), mssql (1), sql (1), run (1)
> **URLs:** [trupja.com](https://trupja.com) (2), [asp.net](https://asp.net) (1)
> **File Paths:** appsettings.json (2)
> **CLI Commands:** find (2)
> **Versions:** 7.0.1 (2)
> **Tools:** visual studio (2)

#### Cookie-based authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=0)** - [Instructor] Cookie-based authentication is an important authentication type where the necessary identity information of a user is stored in a cookie.
>
> **[0:10](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=10)** But how does this work?
>
> **[0:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=13)** Let us say you navigate a website which is asking for user credentials.
>
> **[0:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=18)** You have to provide the username and password, and click the login button.
>
> **[0:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=23)** A request will be sent to the server which is going to validate the user credentials.
>
> **[0:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=28)** If the user credentials are valid, that is going to create a session and return the session ID to the browser.
>
> **[0:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=36)** Now the browser is going to store this session ID in a cookie.
>
> **[0:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=40)** So that is why we call this authentication type, the cookie-based authentication.
>
> **[0:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=46)** Now, this session ID is sent with each request to the website, which is checked against the active session IDs in the server, and if valid, you'll get some data, otherwise, you'll be asked to provide your credentials again.
>
> **[1:03](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=63)** Now, let us go to Visual Studio and check if our current app is using cookie-based authentication by default.
>
> **[1:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=72)** In here, if we run the app, and then I'll just log out, right-click, go to Inspect.
>
> **[1:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=84)** Then in here, go to Application.
>
> **[1:29](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=89)** Here you do have this Cookies option.
>
> **[1:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=92)** Let me clear the cookies.
>
> **[1:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=95)** And let me put this below like this.
>
> **[1:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=102)** And let us log in one more time.
>
> **[1:43](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=103)** So log in button.
>
> **[1:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=107)** In here, I'll provide the credentials.
>
> **[1:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=109)** So ervis@[trupja.com](https://trupja.com), then the password is trupja@1, and I click the login button.
>
> **[1:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=119)** You'll see that once you click the login button, a record is added in the cookies section which is AspNetCore.Identitiy.Application, and this is the default cookie name for the [ASP.NET](https://ASP.NET) Identity.
>
> **[2:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=136)** So you can see that our app by default is using the cookie-based authentication.
>
> **[2:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=142)** Now, when you go to the Logout for example, and then go to Register, you do see some text in here, like for example, "create a new account," "use another service to register," but if you go to Visual Studio, so Control + C, I'll copy this text, and then I'll stop the app, and just search for that text, you'll see that we do not find any results in here.
>
> **[2:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=170)** So where is all this [ASP.NET](https://ASP.NET) Identity related code?
>
> **[2:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=174)** If we go to the Solution Explorer in here, in the Areas, you'd have the Identity, but you just have a page which is the View Start page.
>
> **[3:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=184)** And in here you just have Views, Shared, Layout.
>
> **[3:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=188)** So basically, even though we are using the [ASP.NET](https://ASP.NET) Identity, we cannot modify any of the existing code, and that is because the [ASP.NET](https://ASP.NET) Identity exists as a library in our app.
>
> **[3:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=202)** If we want to get this code, we need to scaffold identity in this project.
>
> **[3:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=210)** For that, I'll just right-click.
>
> **[3:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=213)** Then go to Add.
>
> **[3:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=215)** And then New Scaffolded Item.
>
> **[3:39](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=219)** In here, I'll select Identity.
>
> **[3:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=222)** We do have a single option Ientity in here.
>
> **[3:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=224)** Click Add.
>
> **[3:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=227)** Now from the Add Identity popup that you get in here, you get to choose all the views that you want to scaffold which also include the C# code.
>
> **[3:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=236)** So for example, if you want to get just the login or logout or confirm email, you can just check these boxes.
>
> **[4:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=244)** Or if you want to get all the files, which is going to be my preference, I'm going to check the "override all files" checkbox.
>
> **[4:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=254)** Then in here you need to select a data context class.
>
> **[4:17](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=257)** We are going to select the default one, which is the ApplicationDbContext.
>
> **[4:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=262)** And then click the Add button.
>
> **[4:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=265)** Once this scaffolding process is completed, you'll get this message in here that says, "Support for [ASP.NET](https://ASP.NET) Core Identity was added to your project."
>
> **[4:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=274)** So now you can just go to the Solution Explorer, and then inside the Areas you'll have the Identity, and then inside the Identity, you have Pages, then you have Account.
>
> **[4:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=287)** And then let us say you want to go to the login, click in here.
>
> **[4:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=292)** Now you can just modify in here.
>
> **[4:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=293)** So use local account login.
>
> **[4:57](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=297)** Just type in here, updated.
>
> **[5:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=300)** Now if I run this project, when I go to the login page, you'll see that you have the message, "use a local account to log in" and then the "updated" in here.
>
> **[5:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=315)** So let us close the browser.
>
> **[5:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=318)** And I'm just going to revert this change.
>
> **[5:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=322)** Now, in case you want to see the C# code for this file, you can just go to the Solution Explorer.
>
> **[5:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=328)** Then you have the Login.cshtml.
>
> **[5:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=330)** If you open this one in here, you have the Login.cshtmls.cs.
>
> **[5:38](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=338)** Let us open this file.
>
> **[5:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=340)** And this is a C# class that inherits from the page model.
>
> **[5:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=344)** And then inside here, it has the SignInManager.
>
> **[5:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=348)** It has some properties.
>
> **[5:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=350)** But let us go to the important part, which is the OnGetAsync, and then OnPostAsync.
>
> **[5:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=359)** And on the OnPostAsync is going to be used to sign in the user.
>
> **[6:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=364)** And then here you have the SignInManager which has the method PasswordSignInAsync, which takes four parameters, the email address, the password, the Remember Me checkbox, and then Lockout On Failure is set to false.
>
> **[6:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=379)** If you set this to truth, it means that you'll be locked out from the account if you provide the wrong password.
>
> **[6:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=385)** And then in here, it will just check if it succeeded.
>
> **[6:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=391)** And then down here, it will also check if you required two factor authentication.
>
> **[6:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=396)** In that case, it will just redirect you to this page.
>
> **[6:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/cookie-based-authentication?u=76281980&t=400)** And it will also check if you are locked out, which in this case, it will redirect you to the lockout page.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (13), right-click (2), checkbox (2), select the (1)
> **Code Keywords:** let (9), case, (2), type, (1), default. (1), this. (1)
> **Env Vars:** asp (5), net (5)
> **URLs:** [asp.net](https://asp.net) (5), [trupja.com](https://trupja.com) (1)
> **Definitions:** is an  (1), we call this (1), is a  (1), means that (1)
> **Analogies:** for example (3)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)

#### Social media provider authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=0)** - Social provider authentication is a type of authentication that allows users to log into your app using their existing social media platform accounts such as LinkedIn, Facebook, Twitter, Google, et cetera.
>
> **[0:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=16)** This is a great authentication type to allow users to directly access your app without the need to create yet another account.
>
> **[0:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=25)** Instead, they can just leverage an account that they have already created.
>
> **[0:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=31)** Now, let us go to Visual Studio and see in action how we can add Google authentication to our app.
>
> **[0:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=40)** Now, in here the first thing that we need to do is that we need to install a NuGet package.
>
> **[0:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=45)** So, for that I'll just go to the solution explorer, then I'll right click on the project, then manage NuGet packages.
>
> **[0:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=54)** Go in here to the browse tab, now in here let us search for microsoft.aspnetcore.authentication.google.
>
> **[1:10](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=70)** Let us select this package and then we are going to install the latest stable version, which is the version 7.0.1, and click the install button, then accept the license and the package is successfully installed.
>
> **[1:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=88)** I'll close this tab.
>
> **[1:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=91)** Next, let us navigate to [console.cloud](https://console.cloud).[google.com](https://google.com).
>
> **[1:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=96)** Now, let us go in here to the navigation menu here on the left and go to the API and services and click credentials.
>
> **[1:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=105)** Now, in here from the dropdown up here you can select your project.
>
> **[1:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=109)** I've created a project for this tutorial and it is the Google authentication LinkedIn learning.
>
> **[1:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=118)** If you want to create a new project, you can just click in here, then new project, and then provide all the details.
>
> **[2:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=127)** Now, in here, we are going to create credentials.
>
> **[2:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=131)** So, let us first set up the consent screen because for the OAuth we need to set up the consent screen.
>
> **[2:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=141)** So, click in here and then here you need to fill in all the data.
>
> **[2:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=145)** So, I'll just click in here, create, I'll provide an application name, let's say LL, So, LinkedIn learning, Google authentication, support email is going to be my Gmail account, I'll not provide a logo.
>
> **[2:43](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=163)** Then, I'm going to provide an app domain, so the homepage, I'll just use a local host.
>
> **[2:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=169)** So, that actually run the project locally.
>
> **[2:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=173)** So, let's actually run the project, just so we can get the local host URL.
>
> **[2:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=178)** Let me copy this value, I'll paste it in here.
>
> **[3:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=182)** The policy is going to be just policy link.
>
> **[3:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=187)** Then we're going to also have the service link.
>
> **[3:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=192)** The developer contact information is going to be my email address, then save and continue.
>
> **[3:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=199)** In here we can add some scopes, so for example, we want to get the email of the user, the profile of the logged in user and also the Open ID then click update, then in here, save and continue.
>
> **[3:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=214)** Let us add a test user, as a test user, I'll add myself, add then click save and continue.
>
> **[3:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=224)** And then, in here you'll have the summary.
>
> **[3:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=228)** Now, let us go back to the dashboard and then you can just click publish app and then confirm.
>
> **[3:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=236)** Now in here, let us go to the credentials.
>
> **[4:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=240)** We need to create credentials and we are going to create OAuth client ID, Then I'll select the application type, which is going to be a web application.
>
> **[4:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=252)** The name is going to be SecurityApp-MVC, so it will be used by the SecurityApp-MVC.
>
> **[4:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=261)** And then, down here we need to add the redirect URIs, in here click, provide the local host, and then after the slash sign in dash Google,
>
> **[4:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=280)** and then click the create button.
>
> **[4:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=284)** Now, from here we need to get the client ID and the client secret.
>
> **[4:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=287)** So, I'll just copy the client ID, go back to Visual Studio and then in here I'll just stop the app for now.
>
> **[4:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=294)** Go to the solution explorer, then go to the appsettings.json file.
>
> **[4:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=299)** And then, in here I'll type authentication, then Google and then we are pasting the first value, which is a key, and the second value is going to be the secret, so let us go and copy the secret.
>
> **[5:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=327)** So, let's copy the secret key, the client secret.
>
> **[5:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=333)** So, we have in your the client ID and we have the client secret.
>
> **[5:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=341)** Let us now save the changes.
>
> **[5:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=342)** The next step is that we need to go to the solution explorer, then go to the Program.cs, and then in here we need to add the authentication.
>
> **[5:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=354)** So in here, so before the build, I'll type builder.Services.AddAuthentication and from the authentication we are going to add Google authentication, so AddGoogle, and then for the Google authentication we need to provide the options.
>
> **[6:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=376)** So, let's go to and then inside here we're going to have options that we need to provide the client ID, to get the client id, we are going to use the builder.configuration.
>
> **[6:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=392)** And then, in here we are going to use the path to the client id, which is going to be authentication, then Google, and then we have the client id.
>
> **[6:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=409)** And then, we are going to also provide the options, the client secret, and the client secret is going to be builder.configuration, the same code as up here.
>
> **[7:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=424)** But instead of loading the client id we're going to load the client secret, and then, at the end we need to add semi colon.
>
> **[7:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=433)** Now, let us save all the changes in here and then run this project.
>
> **[7:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=439)** We see that we have an error and that is because it's failing to load this file and it says there is a JSON error basically.
>
> **[7:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=448)** So, let us go to the appsettings.json file.
>
> **[7:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=451)** Let's see if we have an error.
>
> **[7:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=453)** And we can see that at line 10, we need to add comma, let's save the changes and restart the app.
>
> **[7:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=461)** Now, let us go to log in, and now, in here on the use other service to log in, you can see that we have the Google as an option.
>
> **[7:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=470)** So, let us click this button, you are going to get the popup, I'll use my email address to log in.
>
> **[7:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=479)** Now, you can see that we have successfully registered and now we need to associate our Google account.
>
> **[8:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=485)** And it says in here you have successfully authenticated with Google, please enter an email address for this site below and click register to finish logging in.
>
> **[8:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=495)** Last click, register and then click here to confirm your account.
>
> **[8:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/social-media-provider-authentication?u=76281980&t=501)** So now, if I just go to log in, in Google, you can see that we are successfully logged in because up here you can see hello and then my email address.

> [!info]- Semantic Content
>
> **Code Keywords:** let (22), continue (3), type, (1)
> **UI Navigation:** go to (12), click on (1), navigate to (1), dropdown (1), select the (1)
> **Env Vars:** mvc (2), api (1), url (1), json (1)
> **Prerequisites:** install (3), set up (2)
> **Definitions:** is a  (4)
> **File Paths:** appsettings.json (2)
> **URLs:** [console.cloud](https://console.cloud) (1), [google.com](https://google.com) (1)
> **Versions:** version 7 (1), 0.1 (1)

#### Email account verification
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=0)** - [Instructor] So far when we have created a new account, we have had to manually confirm the account.
>
> **[0:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=7)** On this part you'll learn how to send an account verification email to the users.
>
> **[0:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=13)** The way this will work is that when a user signs up for a new account, we are going to send them an email.
>
> **[0:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=20)** And in this email we're going to include a verification link so whenever the user clicks that link, their account will be verified and then they can successfully sign in to our app.
>
> **[0:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=32)** So let us go to Visual Studio and see it in action.
>
> **[0:37](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=37)** In here the first thing that we need to do is that we need to install a package for SendGrid because we are going to use SendGrid to send out the emails.
>
> **[0:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=46)** So you can go to Tools, NuGet package manager, and then you can either select the Manage NuGet Packages and then search for SendGrid.
>
> **[0:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=56)** Or you can use the first option which is package manager console.
>
> **[1:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=62)** And then in here to install the package, I'll type install, then package and then SendGrid.
>
> **[1:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=69)** But from the dropdown in here, make sure that you select MVC.
>
> **[1:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=73)** So this package is installed in the MVC project.
>
> **[1:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=78)** The package is installed.
>
> **[1:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=79)** Now let us go to the solution explorer.
>
> **[1:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=82)** We are going to create an email sender service which we're going to use to send out the email.
>
> **[1:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=88)** So let us add a folder.
>
> **[1:29](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=89)** We are going to name this folder the services folder.
>
> **[1:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=94)** Then inside here, right click, add a clause.
>
> **[1:39](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=99)** We're going to name it Email Sender and then click the add button.
>
> **[1:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=105)** In here, we need to inherit from an interface that is called IEmail Sender.
>
> **[1:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=113)** And you can see that this interface belongs to the AspNetCore.identity.UI.services.
>
> **[1:59](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=119)** So let us use that namespace, and now let us import or let us implement the interface.
>
> **[2:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=127)** And here you can see that it has three parameters of the email.
>
> **[2:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=131)** So this is the email address, the subject of the email, and the HTML template.
>
> **[2:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=139)** In here, for us to be able to send out the email we need an API key from SendGrid.
>
> **[2:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=146)** So let us go to SendGrid and get the API key, I have already logged in.
>
> **[2:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=152)** And then if I go in here to marketing, you'll see that I have also confirmed or configured a sender.
>
> **[2:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=162)** So here you can see that I do have a sender.
>
> **[2:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=165)** The sender is already verified, and the email address is my personal Gmail account.
>
> **[2:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=174)** In here, let us scroll down, then go to settings and then go to API Keys.
>
> **[3:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=181)** In here let us create an API key.
>
> **[3:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=185)** I'm going to select the first option, which is full access.
>
> **[3:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=189)** Let us name the API key.
>
> **[3:10](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=190)** This is going to be Security App MVC API key and then click create and view.
>
> **[3:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=201)** Let us copy this API key by clicking on the API key, and then click done, and then let us go back to Visual Studio.
>
> **[3:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=211)** In here now I'll just paste the API key in here.
>
> **[3:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=215)** Now this is not an ideal solution.
>
> **[3:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=216)** Normally you'd save the API key in the app settings, the Json file and just load the API key from there.
>
> **[3:43](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=223)** Next we're going to create the send grid client or I'll just name it var client is equal to new SendGrid client.
>
> **[3:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=234)** This will take a single parameter, and that is going to be the API key.
>
> **[3:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=238)** So API key.
>
> **[4:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=244)** Then down here we're going to construct the message or the email.
>
> **[4:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=248)** So MSG is equal to new SendGrid message.
>
> **[4:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=256)** And then in here.
>
> **[4:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=258)** And then in here, the first property is going to be from.
>
> **[4:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=262)** So from which email address we're going to send out this email.
>
> **[4:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=266)** So new email address.
>
> **[4:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=268)** And that is going to be from our verified sender which was ervistrupja@[gmail.com](https://gmail.com).
>
> **[4:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=275)** And then I'll just name this email from Ervis Trupja, Password set Recovery.
>
> **[4:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=287)** Then after the from we are going to define the subject.
>
> **[4:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=292)** And this subject is going to be the subject parameter.
>
> **[4:55](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=295)** Then we are going to have in here the plain text content which is going to be the same HTML message.
>
> **[5:03](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=303)** And then the HTML content is going to be the HTML message.
>
> **[5:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=309)** And then after we have constructed the SendGrid object, I'll just type in here, msg.addto.
>
> **[5:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=321)** We're going to use this method to define to which email address now we want to send this SendGrid message.
>
> **[5:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=327)** And that is going to be the parameter email.
>
> **[5:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=331)** And then let us also set the tracking to false.
>
> **[5:37](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=337)** So msg.SetClickTracking to false.
>
> **[5:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=344)** And then false.
>
> **[5:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=346)** This means that we'll not track if the user will click the verification link or not.
>
> **[5:51](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=351)** And then at the end, we're going to have Var response is equal to await and then client.sendEmailAsync and pass the parameter the msg object.
>
> **[6:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=365)** Now down here just for logging purposes, you can log stuff or you can throw an exception, but I'll just leave the call this way because that is not the focus of this course.
>
> **[6:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=379)** Now that we created the email sender, what we need to do is that we need to configure the email sender in the program.CS.
>
> **[6:29](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=389)** So in here before the builder, I'll type builder.services.AddTransient, and then the first parameter is going to be email sender.
>
> **[6:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=404)** And the second parameter, the email sender implementation.
>
> **[6:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=409)** So email sender.
>
> **[6:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=413)** Now let us support the namespace for the email sender, and that is the SecurityApp.mvc.services.
>
> **[7:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=422)** Okay, so let us save the changes.
>
> **[7:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=425)** Let's check the email sender one more time.
>
> **[7:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=428)** Looks all good.
>
> **[7:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=429)** Now let us run our project, and I'll sign up this time with my Outlook account.
>
> **[7:17](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=437)** So I'll log out from my existing account and go to register.
>
> **[7:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=444)** And here I'll type my Outlook account, and then click register.
>
> **[7:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=451)** Now here we can see that we do get this registration confirmation which says that this app does not currently have a real email sender registered.
>
> **[7:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=460)** And that is wrong because we just registered our email, so let us just go and disable the default email confirmation.
>
> **[7:49](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=469)** For that, we need to go to Visual Studio, and then in here go to the solution explorer, then go to areas, identity, then account, and then search for register confirmation.
>
> **[8:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=485)** And then in here we have the register confirmation model.
>
> **[8:10](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=490)** That'll scroll down in here.
>
> **[8:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=492)** And then in here we have this property display confirm account link.
>
> **[8:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=496)** Let's scroll down in here, and then set this from true to false because in it says once you add a real email sender, you should remove this call that lets you confirm the account.
>
> **[8:29](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=509)** So I set that to true.
>
> **[8:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=512)** Let us run the app one more time.
>
> **[8:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=515)** So let me try to register.
>
> **[8:37](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=517)** Now we need to register with a different account now because that account is now taken.
>
> **[8:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=521)** So let me actually try, and you'll see.
>
> **[8:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=524)** That account is taken, but it is just not confirmed yet.
>
> **[8:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=528)** So you cannot log in with that.
>
> **[8:51](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=531)** And we do actually get this error which says username, my Outlook Account is already taken.
>
> **[8:57](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=537)** And if we go to the database, so in here we go to View then Server Explorer.
>
> **[9:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=546)** Let's show all the AspNetUsers.
>
> **[9:10](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=550)** You're going to see that the email address is in here.
>
> **[9:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=554)** It's this one here, but email confirmed is set to false.
>
> **[9:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=558)** So let us go back to the app.
>
> **[9:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=561)** And here let us go to log in and then here resend email confirmation.
>
> **[9:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=567)** And then here, let me type ervistrupja@[outlook.com](https://outlook.com).
>
> **[9:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=572)** And then click the resend button.
>
> **[9:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=575)** It says that the verification email was sent.
>
> **[9:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=576)** Please check your email.
>
> **[9:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=580)** Let me now go to Outlook.
>
> **[9:43](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=583)** So in here now you can see that I have received an email from Ervis Trupja and then password recovery which is the text that we provided in the SendGrid message object.
>
> **[9:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=593)** Then let us open the email.
>
> **[9:55](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=595)** It says, please confirm your account by clicking here.
>
> **[9:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=598)** Let me click in here.
>
> **[10:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=600)** You'll see that it redirects us to the same URL, but then it has confirm email, and it has some parameters in here.
>
> **[10:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=608)** So now let us just go to log in.
>
> **[10:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=611)** Let me provide the credentials and then password and click log in.
>
> **[10:17](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/email-account-verification?u=76281980&t=617)** And as you can see, we were able to successfully log in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (31), interface (3), var (2), from. (1), await (1)
> **Env Vars:** api (13), html (4), mvc (3), msg (1), url (1)
> **UI Navigation:** go to (15), scroll down (3), select the (2), dropdown (1), open the (1)
> **Prerequisites:** install (3), configure (1)
> **Tools:** visual studio (3)
> **URLs:** [gmail.com](https://gmail.com) (1), [outlook.com](https://outlook.com) (1)
> **Cross-References:** go back to (2)
> **Definitions:** is called (1), means that (1)

#### API-key authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=0)** - API key authentication is a way to authenticate other APIs that want to access our API.
>
> **[0:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=8)** The other APIs add a key to each API request, and then our API can use that key to identify the application or the API and authorize the request.
>
> **[0:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=22)** The key can be used to also perform other things like rate limiting, statistics, and similar actions.
>
> **[0:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=31)** So let us say you have built an API to check the weather.
>
> **[0:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=35)** Now different apps want to consume our API so they can get the weather data.
>
> **[0:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=41)** For each API we do generate keys, and then we provide these keys to, let's say, these clients.
>
> **[0:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=48)** And then each time they call our API, we make sure that they are the valid keys that we provided.
>
> **[0:55](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=55)** We can also add limitations to these keys.
>
> **[0:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=58)** Let us say the key one or the API that is using the key one can only call our API 50 times a day.
>
> **[1:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=66)** So we can add kind of rate limiting in each API key, and we check if the rate is exceeded or not.
>
> **[1:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=74)** To add the API key authentication, we can follow three simple steps.
>
> **[1:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=79)** First of all, we need to have a data storage where we store all the keys so we need to create a database to store the keys.
>
> **[1:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=86)** Then next, we need to create a custom attribute for API key authentication, and then decorate the controllers with this custom attribute.
>
> **[1:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=95)** But let us go to Visual Studio and see it in action.
>
> **[1:41](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=101)** In here, the first thing that I'll do is that I'll just go to the solution explorer and then we are going to use the API project.
>
> **[1:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=110)** So let me change the project in here to API to set this one as active.
>
> **[1:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=116)** And then in here, let me create a new folder.
>
> **[2:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=120)** I'm going to name this folder either authentication or attribute, or maybe just filters because the closet we're going to create will be used as a custom attribute to filter out the unauthenticated request.
>
> **[2:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=135)** So class.
>
> **[2:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=138)** Let us name this class API key authentication attribute, or just auth attribute.
>
> **[2:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=146)** And then here, click add.
>
> **[2:29](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=149)** Then, I'm going to inherit in here from action filter attribute, and then I'm going to override a methods public override, and then void on action executing.
>
> **[2:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=167)** So before the controller, let's say is called we need to check if the API key is valid or not, but for us to be able to check the API key, we need to be able to get the API key from the request header.
>
> **[3:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=181)** For that just type in here, var apiKey = context.HttpContext.Request,
>
> **[3:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=192)** and then .Headers, and then .TryGetValue.
>
> **[3:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=201)** Now we are going to try and get the value of the custom API key attribute that I say.
>
> **[3:29](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=209)** In each request, we need to have a custom attribute.
>
> **[3:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=212)** So private const string CustomApiKeyParameter, or just Param, = X-API-key.
>
> **[3:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=226)** So each request that wants to consume a controller that has the API key attribute as a decorator needs to have the X-API-Key parameter in the HTTP request.
>
> **[4:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=240)** So here we want to try get the custom API key param and then out var apiKeyValue.
>
> **[4:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=253)** First, we check if we have a value.
>
> **[4:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=256)** So if we do not have an apiKey, so if the apikey, so if you didn't find an API key value in the request header then you can set in here the context that result = new UnauthorizedObjectResult, and then here X-API-Key is missing in the header.
>
> **[4:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=290)** Otherwise, the second step would be to check the API key value against your data storage.
>
> **[4:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=296)** Let's say your database or you have 'em stored in memory.
>
> **[5:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=300)** So apiKeyValue check.
>
> **[5:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=304)** If, let's say apiKeyValue does not exist,
>
> **[5:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=313)** you'd return another context that resolve the same.
>
> **[5:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=321)** A key is not valid.
>
> **[5:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=326)** Then you'd also check the rate.
>
> **[5:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=328)** So for example, if apiKeyValue rate, maybe it would have rate property, rate < limit for the apiKey or the apiKey.
>
> **[5:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=344)** In that case, we'll just return another error which will say X-API-Key or maybe the apiKey value in this case
>
> **[5:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=358)** has exceeded the daily limit.
>
> **[6:04](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=364)** Then if all the checks are passed, then you could just base on action executing and then context.
>
> **[6:10](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=370)** I'll comment out these lines because they have errors.
>
> **[6:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=375)** Then the last step would be that you actually use this custom attribute.
>
> **[6:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=381)** Let's see.
>
> **[6:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=382)** I'll just copy this one.
>
> **[6:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=384)** Just create a new controller in here, a controller, and I'll name this one CustomController.
>
> **[6:38](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=398)** And then in here, you'd have this new decorator ApiKeyAuth which means that each request that execute or called any API endpoint within this controller is checked using this custom filter.
>
> **[6:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=412)** So the request needs to have the X-API-Key value.
>
> **[6:57](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/api-key-authentication?u=76281980&t=417)** Then that value gets checked against, let's say a database if it's valid, or if the rate limit is exceeded and all the other conditions that you can add to your custom implementation.

> [!info]- Semantic Content
>
> **Env Vars:** api (31), http (1)
> **Code Keywords:** let (12), override (2), var (2), class. (1), public (1)
> **Code Identifiers:** apikey (5), apikeyvalue (4)
> **Definitions:** is a  (1), is called (1), means that (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** go to (2)
> **Tools:** visual studio (1)
> **Analogies:** for example (1)

#### Token-based authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=0)** - [Instructor] Token-based authentication is the last authentication type that we're going to talk about in this course.
>
> **[0:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=8)** To better understand token-based authentication, let us quickly compare with the cookie-based authentication.
>
> **[0:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=15)** In the cookie-based authentication, the user provides the credentials.
>
> **[0:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=20)** The server then will validate these credentials, and if credentials are valid, a session is created in the server, and this session ID is returned to the user.
>
> **[0:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=32)** Now, this session ID is stored in a cookie, and for each request, the cookie is attached to the request, so then the session ID is validated in the server if it's valid or not.
>
> **[0:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=46)** Because this session ID is stored in a cookie, we do call this authentication type cookie-based authentication.
>
> **[0:55](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=55)** Now, as you can see, for each logged in user, there is a session in the server.
>
> **[1:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=62)** Now, as you can imagine, when millions of users log in, this server will get overloaded.
>
> **[1:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=68)** In token-based authentication, when the user sends the credentials to the server, the server will validate the credentials, and then instead of creating a session, it will just generate a token and return the token to the user.
>
> **[1:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=83)** Now, each time the user requests some data from the server, the token will be passed as a parameter, it will be validated, and if valid, the data will be returned.
>
> **[1:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=95)** As you can see, in this case, this server doesn't get overloaded with lots and lots of sessions.
>
> **[1:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=104)** Now, this is just a really high level overview of the token-based authentication, because there are a lot of benefits that come with using token-based authentication, which definitely cannot be mentioned in a single video.
>
> **[1:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=118)** For that, I've created a detailed course named, "[ASP.NET](https://ASP.NET) Core: Token-Based Authentication", which you can find in LinkedIn Learning Library.
>
> **[2:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/token-based-authentication?u=76281980&t=127)** This course is going to teach everything you need to know about token-based authentications, so go and check it out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1)
> **Env Vars:** asp (1), net (1)
> **CLI Commands:** find (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 3. Securing .NET Web API Applications with Authorization

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is authorization?
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=0)** - [Instructor] Per definition, authorization is the process of verifying user's accessibility like the user roles, the user permissions, et cetera.
>
> **[0:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=11)** In the authentication example, we did have the person A and person B.
>
> **[0:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=16)** They were both trying to access a company building but only the person A was given access because the person A had a company badge.
>
> **[0:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=24)** So basically, the company systems were able to authenticate this user by using the company badge.
>
> **[0:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=32)** Now let us take the same example and try to understand authorization.
>
> **[0:39](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=39)** In authorization, both persons have company badges so they are both able to access the company building, but if they try to access a certain office, let us say a manager office, only the user who is authorized as a manager is able to access.
>
> **[0:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=58)** So basically only the person B who has the manager role can access that office.
>
> **[1:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=67)** So in other words, in the authentication, we just check if the user exists.
>
> **[1:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=71)** But in the authorization, we do also check the user roles and other credentials of the user.
>
> **[1:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=78)** In [ASP.NET](https://ASP.NET), we can implement different authorization types.
>
> **[1:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/what-is-authorization?u=76281980&t=82)** Some of these authorization types are the simple role-based authorization, the claims-based authorization, and the resource-based authorization for which we are going to talk more in the upcoming parts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** asp (1), net (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Simple role-based authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=0)** - [Instructor] The role-based authorization is the simplest authorization type in .NET.
>
> **[0:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=6)** So let us go to Visual Studio and see it in action.
>
> **[0:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=11)** In here, if I go to the Solution Explorer and then inside the Controllers folder, you'll see that I do have this new controller named EmployeesController.
>
> **[0:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=22)** Now in here, you'll see that I do have the API endpoint for getting data, getting single data, post, put, and delete, and I'm going to decorate them all with roles.
>
> **[0:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=35)** If I want to have a role, which I want to apply in all these HttpGets, what I can do is that I can add in here the Authorize attribute.
>
> **[0:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=47)** So this is going to require all the users that want to access any of the API endpoint within this controller to be authenticated.
>
> **[0:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=56)** It's Authorize.
>
> **[0:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=58)** Let me add the namespace and the namespace for the Authorize is the Microsoft.AspNetCore.Authorization.
>
> **[1:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=67)** Let us say I don't want the users to just be authenticated, I want them to also have the role admin.
>
> **[1:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=75)** Then in that case, I need to type Roles and then equal to and then Admin.
>
> **[1:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=85)** Now, for example, I want only the admins to be able to get the data, but the other API endpoints can be accessed by any role.
>
> **[1:38](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=98)** In that case, I just add the Authorize attribute on the API endpoint for getting this data.
>
> **[1:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=105)** And if I want to, for example, have this API endpoint called by admins or another role, let's say manager or employee, then in that case, I just add a comma in here and add the other roles.
>
> **[2:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=125)** But if I want the user to have all these roles to be able to access this API endpoint, then down here I can add another Authorize, so Authorize, and then Roles.
>
> **[2:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=139)** Let me copy this one more time.
>
> **[2:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=143)** Okay, so I paste this in here.
>
> **[2:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=146)** Employee.
>
> **[2:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/simple-role-based-authorization?u=76281980&t=148)** In this case, it means that for a user to be able to call this API endpoint, the user needs to have the role admin, manager, and employee at the same time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (4), delete (1), require (1)
> **Env Vars:** api (7), net (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **Tools:** visual studio (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Claims-based authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=0)** - [Instructor] A claim is a word or multiple words that tell you something about a user.
>
> **[0:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=7)** For example, let us say that you are a teacher at school and you have a list of students who are allowed to enter your class.
>
> **[0:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=15)** The list might include student names, ages, and the reason.
>
> **[0:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=19)** The name, age, and reason are all examples of claims.
>
> **[0:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=24)** The name claim tells you the person's name.
>
> **[0:27](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=27)** The age claim tells you the person's age.
>
> **[0:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=30)** And the reason claim tells you why the person or the student is allowed to enter your class.
>
> **[0:37](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=37)** By using claims, you can create more complex authorization scenarios instead of just using the roll names like we did on the last part.
>
> **[0:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=46)** So now let us go to Visual Studio and see it in action.
>
> **[0:51](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=51)** In the employee's controller, for a user to be able to access this API endpoint, they need to be of role admin, manager, and employee.
>
> **[1:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=61)** So let us say we want to have the user that wants to access this one to also be of a certain age or the user needs to have a certain number of years of experience.
>
> **[1:12](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=72)** For that, since we have a complex scenario, so we don't have just roles, but we have other properties or other claims of user identity, we can use the claims-based authorization.
>
> **[1:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=85)** For that, I'll just go to the solution explorer and then in here go to program.cs.
>
> **[1:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=93)** And then in here, I'll just type configure claims-based authorization.
>
> **[1:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=102)** And then down here I'll type builder.services.add authorization.
>
> **[1:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=112)** And then in here for the authorization, I'm going to define some claims.
>
> **[1:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=118)** For the claims, we need to define a policy.
>
> **[2:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=122)** And a policy can have multiple claims.
>
> **[2:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=126)** In here, I'll just type options and go to and then inside here I'll just type options.add policy.
>
> **[2:17](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=137)** I'm going to name this policy super admin policy.
>
> **[2:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=145)** And then I'll define in here the policy claims, policy that goes to.
>
> **[2:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=151)** And then down here I'll say that an API endpoint is decorated with this policy, in that user you need to search for these claims.
>
> **[2:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=162)** So policy.require claim.
>
> **[2:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=170)** And then let's say claim types.
>
> **[2:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=174)** I'll just use claim types.
>
> **[2:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=178)** Import the name space in here.
>
> **[3:02](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=182)** claims because we can use some of the default claims role.
>
> **[3:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=188)** So the role needs to be admin.
>
> **[3:14](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=194)** Then we can type policy.require claim.
>
> **[3:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=200)** And then let's say the age of the user needs to be at least 21.
>
> **[3:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=210)** Then let's add one more claim.
>
> **[3:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=213)** The years of experience, it's going to be 10 years of experience.
>
> **[3:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=222)** Let's now remove the age from here because it doesn't make sense to have 10 years of experience at the age of 21.
>
> **[3:51](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=231)** So I'll just go with this one.
>
> **[3:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=233)** I'll keep the years of experience and then policy that require claim.
>
> **[4:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=240)** Then let's say joint company only the employees that joined the company when the company was first founded, let's say that 20 have this policy, will be able to pass the required claims checks for this policy.
>
> **[4:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=261)** Now let us add the semicolons to here.
>
> **[4:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=264)** As you could see, in here you could also add other stuff like require assertion, require that the user is authenticated.
>
> **[4:35](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=275)** You can require certain role or you can also require a certain username.
>
> **[4:39](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=279)** So let's say you can require username admin user.
>
> **[4:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=287)** If you want to have like a claim just with this one, you can just require this username and then you can use this policy in the API endpoints.
>
> **[4:55](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=295)** So let me remove this one.
>
> **[4:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=296)** I'll just keep the claims.
>
> **[4:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=298)** Now if you scroll down in here, you have the use authorization.
>
> **[5:03](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=303)** Up here let us also add app.use authentication.
>
> **[5:10](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=310)** So we need to have both authorization and authentication.
>
> **[5:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=315)** The authentication in here needs to be first.
>
> **[5:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=318)** Now let us scroll up or just copy this super admin policy or let us change the name of this policy from super admin policy to just super admin only, so it's more readable.
>
> **[5:30](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=330)** Copy this value.
>
> **[5:33](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=333)** Then go to the employees controller.
>
> **[5:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=336)** Now if you want, we can modify the post and then in here, we can use the authorize attribute.
>
> **[5:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=345)** And then in here, policy, super admin only.
>
> **[5:53](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=353)** So this means that this API endpoint can be called only by the users that do fulfill the conditions for the super admin only policy, which are user has the role admin, has 10 years of experience, and joined the company in 2020.
>
> **[6:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=373)** So now in here, we need to override the handle requirement async method, which is going to be used to check if the claims are valid.
>
> **[6:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=383)** For that in here, I'll just type protect it and override, then task, and we will override this method.
>
> **[6:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=394)** And then down here we're going to check if the logged in user or the logged in manager is the same manager that hired the resource or the user.
>
> **[6:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=405)** Because in here you can see it has three parameters, it has the context or the authorization handle context, it has the same manager requirement, which is the requirement clause we just created, and the third one is the resource.
>
> **[7:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=420)** So this is the resource for which we want to check if the user is validated or it has the necessary permission to take action.
>
> **[7:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=431)** And then down here, we need to type or we need to add the check.
>
> **[7:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=435)** So we're going to check if the context that user that has claim.
>
> **[7:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=444)** Let's check in your ID.
>
> **[7:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=446)** So we're going to check if the logged in manager ID, so if it has this claim, and the logged in user ID is similar to the resource, so user.
>
> **[7:38](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=458)** Let us actually go to this class.
>
> **[7:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=462)** And then in here, I'll add an additional property, ID of the user who has the role of manager.
>
> **[7:51](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=471)** Manager who hired this user.
>
> **[7:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=476)** And then I'll just name this property the manager ID or maybe hiring manager ID.
>
> **[8:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=487)** So then here, I'll check if the user has a claim ID and that value is similar to resource.hiring manager ID.
>
> **[8:21](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=501)** If this is valid, I'll just set the context to succeed it.
>
> **[8:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=505)** And then this as a parameter the requirement.
>
> **[8:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=511)** And then here at the end, I'll just return task, that completed task.
>
> **[8:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=516)** We still have an error in here.
>
> **[8:38](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=518)** That's right, because the hiring manager ID is an integer but the value in the claim check needs to be a string.
>
> **[8:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=528)** So we added the requirement, we added the authorization handler.
>
> **[8:54](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=534)** Next we need need to register the handlers.
>
> **[8:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=536)** For that, I'll just go to the solution explorer and go to program.cs.
>
> **[9:03](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=543)** And then when we have in here the services, we are going to add services to the container.
>
> **[9:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=548)** So builder.services.add.
>
> **[9:15](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=555)** Let's make this add scoped.
>
> **[9:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=559)** And then we're going to have I authorization handler.
>
> **[9:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=564)** And then one implementation of the I authorization handler is going to be the manager authorization handler and the semicolon at the end.
>
> **[9:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=576)** So now that we register the handler, down here let us add a policy based on the handler requirement.
>
> **[9:42](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=582)** For that, I'll type in here options add policy.
>
> **[9:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=587)** We are going to name this policy manager or let's say hiring manager and then policy.
>
> **[9:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=598)** And down here, the only requirement is going to be sub policy add requirements.
>
> **[10:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=608)** The only requirement is going to be that the user or the logged in user needs to be the same manager that hired the user.
>
> **[10:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=619)** So same manager requirement, let's add a semicolon in here.
>
> **[10:26](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=626)** And then in here.
>
> **[10:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=628)** Now let us copy this value in here, control + C, then go to solution explorer.
>
> **[10:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=634)** In here, let us go to the controllers and then the employees controller.
>
> **[10:40](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=640)** And here, we need to inject the I authorization service or ctor.
>
> **[10:45](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=645)** And then in here, I'll type private read only, I authorization service, and then authorization service.
>
> **[10:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=656)** Let us add an underscore in here, then copy paste it in here, remove the underscore, and then in here, assign the value to the authorization service.
>
> **[11:09](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=669)** Authorization service is equal to the authorization service.
>
> **[11:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=673)** Now let us scroll down to the API endpoint where we want to add this condition.
>
> **[11:19](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=679)** So we have in here the http delete.
>
> **[11:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=683)** Down here, let's say we get user from the database user.
>
> **[11:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=688)** UserDb is equal to let's say new user.
>
> **[11:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=696)** Let's import the name space, that is the API.models.
>
> **[11:43](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=703)** So let's say we have the user now from the database.
>
> **[11:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=708)** Now down here, we are going to check the logged in user.
>
> **[11:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=710)** So check if logged in user manager can remove a user from the system.
>
> **[12:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=721)** For that, our result is equal to.
>
> **[12:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=726)** And then authorization service.authorizeasync.
>
> **[12:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=731)** The parameters that we are going to pass are going to be the user, then we are going to check for the user DB, and then we are going to check for the policy.
>
> **[12:25](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=745)** And the policy is this hiring manager.
>
> **[12:31](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=751)** So basically, we are checking if the logged in user is the hiring manager of the user that we are trying to remove from the system.
>
> **[12:44](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=764)** Now if this is a success, succeeded, we can just return, okay, say user removed successfully.
>
> **[12:58](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=778)** Otherwise in here, I'll change this to task by action result.
>
> **[13:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=786)** Otherwise, we can just return forbidden.
>
> **[13:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=793)** You cannot remove the user because you are not the hiring manager.
>
> **[13:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/claims-based-authorization?u=76281980&t=802)** And this is all you need to do to add resource-based authorization.

> [!info]- Semantic Content
>
> **Code Keywords:** let (29), require (9), super (6), class. (3), override (3)
> **UI Navigation:** go to (10), scroll down (2), scroll up (1)
> **Env Vars:** api (6)
> **Definitions:** is a  (2), means that (1), is an  (1)
> **Analogies:** similar to (2), for example (1)
> **CLI Commands:** make (2)
> **Tools:** visual studio (1)
> **Prerequisites:** configure (1)

#### Resource-based authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=0)** - With resource-based authorization, similar to with the claims-based authorization, you can create different complex authorization scenarios.
>
> **[0:11](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=11)** Like for example, let us say only the managers who hired an employee can fire that employee.
>
> **[0:18](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=18)** So now, let us go to Visual Studio and see it in action.
>
> **[0:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=23)** In here, the first thing that we'll do is that we'll create a separate folder.
>
> **[0:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=28)** So in the SecurityApp.API, I'll just right click then go to add, and I'll add a new folder.
>
> **[0:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=34)** I'll name this folder, the authorization folder.
>
> **[0:38](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=38)** And now, inside here, I'll create a requirement class, and this class will be implementing the IAuthorizationRequirement interface.
>
> **[0:50](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=50)** And that is needed to add or to use this class in the authorization handler.
>
> **[0:57](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=57)** So this class, I'm going to name it SameManagerRequirement.
>
> **[1:06](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=66)** And I click add.
>
> **[1:08](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=68)** For this to be a valid class, we need to inherit from the IAuthorizationRequirement.
>
> **[1:16](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=76)** That is all we need to do in here.
>
> **[1:17](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=77)** Now, let us go and create the handler, so the authorization handler, in here.
>
> **[1:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=82)** That's where I click.
>
> **[1:24](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=84)** Add a new class.
>
> **[1:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=88)** This will be the manager authorization handle.
>
> **[1:34](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=94)** And now this is just a simple class.
>
> **[1:38](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=98)** For this to be an authorization handler, we need to inherit from authorization handler based class.
>
> **[1:46](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=106)** And this will take two parameters.
>
> **[1:48](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=108)** The first parameter is going to be the requirement class that we just created.
>
> **[1:52](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=112)** So, same manager requirement.
>
> **[1:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=116)** And the second parameter is going to be the user class, which we're going to use to apply this authorization handle.
>
> **[2:05](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=125)** And down here we need to override the handle requirement a sync method, so protected, override and then handle requirement is seen.
>
> **[2:20](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=140)** Now you can see that this takes the context as the first parameter.
>
> **[2:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=143)** The requirement is the second one, and user as the resource.
>
> **[2:28](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=148)** What you can do in here, here, you can check if the user resource was hired by the logged in user.
>
> **[2:36](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=156)** So for that, if the context that user and then .HasClaim.
>
> **[2:47](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/resource-based-authorization?u=76281980&t=167)** So if the user has the claim, let's say hard user IDs, and then in your resource.id.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class, (4), class. (3), override (2), interface (1)
> **UI Navigation:** go to (2)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** api (1)
> **Tools:** visual studio (1)
> **Speakers:** - with (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Where to go next?
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=0)** - [Ervis] If you have made it so far, I want to thank you and congratulate you for watching this course.
>
> **[0:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=7)** Throughout this course, you learned about securing your .NET applications.
>
> **[0:13](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=13)** We started by talking about the common security vulnerabilities like different injection attacks, the file upload attack, the authentication attack, and much more.
>
> **[0:23](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=23)** Then next, you learned how to add authentication to an [ASP.NET](https://ASP.NET) application, and you learned about the simple authentication, the cookie-based authentication, Google authentication, API key, and token based.
>
> **[0:39](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=39)** By the end of this course, you also learned about authorization and you learned how to add simple role-based authorization, claims-based authorization, and the resource-based authorization to an [ASP.NET](https://ASP.NET) application.
>
> **[0:56](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=56)** Now, this is what you have learned so far but what should you do next?
>
> **[1:01](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=61)** Next, you can try and work some more with the authentication and authorization types.
>
> **[1:07](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=67)** Like for example, you can try to add LinkedIn authentication or Facebook authentication to the MVC app, or you can also try and research about authorization types like View-based authorization.
>
> **[1:22](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=82)** In any case, if you have any questions about this course or .NET technologies in general, feel free to get in touch with me via Twitter or LinkedIn.
>
> **[1:32](https://www.linkedin.com/learning/securing-asp-dot-net-core-apps-advanced-techniques-for-web-application-security/where-to-go-next?u=76281980&t=92)** And if you want to learn more about .NET technologies, check out my other courses here on LinkedIn Learning.

> [!info]- Semantic Content
>
> **Env Vars:** net (5), asp (2), api (1), mvc (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Code Keywords:** case, (1)
> **Analogies:** for example (1)
> **Speakers:** - [ervis] (1)


## Instructor

- [[Ervis Trupja]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/aspdotnet-core-security-4310099)

## Skills Covered

- ASP.NET Core
- Web Application Security

## Path Context

### In [[Getting Started as an ASP.NET Core Developer]]
← [[Building Angular and ASP.NET Core Applications]] | **5 of 9** | [[ASP.NET Core- Token-Based Authentication]] →

## Appears In

- [[Getting Started as an ASP.NET Core Developer]]

## Related Courses

_Courses sharing skills:_

- [[Wordpress Building A Secure Site]] — Web Application Security
- [[OWASP Top 10- -9 Security Logging and Monitoring Failures and -10 Server-Side Request Forgery]] — Web Application Security
- [[OWASP Top 10- -3 Injection and -4 Insecure Design]] — Web Application Security
- [[Building Web APIs with ASP.NET Core 8]] — ASP.NET Core
- [[ASP.NET Core- Building a GraphQL API]] — ASP.NET Core

---

[↑ Back to top](#)