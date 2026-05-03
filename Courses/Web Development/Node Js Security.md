---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: node-js-security-24512656
url: "https://www.linkedin.com/learning/node-js-security-24512656"
level: Intermediate
updated: 1/14/2025
learners: 112061
skills:
  - Web Development
  - Application Security
  - Node.js
  - Back-End Web Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGe81EA6OuC2g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1735859654493?e=2147483647&amp;v=beta&amp;t=BmDfA1LgQbro68KxrpyJdNXKzQFG7M5s9zeFzEcOzG0"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance your Node.js Skills]]'
  - '[[Explore App Development with the MERN Stack]]'
prev_courses:
  - null
  - '[[React- Securing Applications]]'
next_courses:
  - '[[Node.js- Design Patterns]]'
  - '[[Node.js- Securing RESTful APIs]]'
path_nav: '[{"path":"Advance your Node.js Skills","position":1,"total":8,"prev":null,"next":"Node.js- Design Patterns"},{"path":"Explore App Development with the MERN Stack","position":10,"total":13,"prev":"React- Securing Applications","next":"Node.js- Securing RESTful APIs"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - topic/database-management
  - topic/software-development
  - skill/web-development
  - skill/application-security
  - skill/node-js
  - skill/back-end-web-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Node%20Js%20Security.md)

![Node Js Security](https://media.licdn.com/dms/image/v2/D4D0DAQGe81EA6OuC2g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1735859654493?e=2147483647&amp;v=beta&amp;t=BmDfA1LgQbro68KxrpyJdNXKzQFG7M5s9zeFzEcOzG0)

# Node Js Security

> In this comprehensive course, experienced full-stack developer Emmanuel Henri shows you how to secure your Node.js web applications as you discover common vulnerabilities, use essential security tools, and implement strategies to protect your data and users. Explore common threats such as broken access control, cryptographic failures, and injection vulnerabilities, and how to mitigate these risks 

> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-security-24512656) | Intermediate | 112K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Securing your Node.js projects](#securing-your-nodejs-projects)
  - [What you should know](#what-you-should-know)
- [**1. Security Overview**](#1-security-overview) (5 videos)
  - [Introduction to OWASP and other sources](#introduction-to-owasp-and-other-sources)
  - [OWASP Top 10 in Node.js](#owasp-top-10-in-nodejs)
  - [Overview of broken access control](#overview-of-broken-access-control)
  - [Overview of cryptographic failures](#overview-of-cryptographic-failures)
  - [Overview of injections](#overview-of-injections)
- [**2. Best Practices: Packages**](#2-best-practices-packages) (3 videos)
  - [Hands-on base template overview](#hands-on-base-template-overview)
  - [Maintain package dependencies](#maintain-package-dependencies)
  - [Add 2-factor and read-only tokens with NPM](#add-2-factor-and-read-only-tokens-with-npm)
- [**3. Best Practices: Data**](#3-best-practices-data) (4 videos)
  - [Data handling with type and validation](#data-handling-with-type-and-validation)
  - [Use prepared statements for SQL and NoSQL](#use-prepared-statements-for-sql-and-nosql)
  - [Set proper HTTP headers with Helmet](#set-proper-http-headers-with-helmet)
  - [Encrypt user data and session management](#encrypt-user-data-and-session-management)
- [**4. Best Practices: Server Level**](#4-best-practices-server-level) (4 videos)
  - [Use secure HTTPS protocol](#use-secure-https-protocol)
  - [Rate limiting against DoS attacks](#rate-limiting-against-dos-attacks)
  - [Use a library to prevent CSRF attacks](#use-a-library-to-prevent-csrf-attacks)
  - [Use cookie attributes](#use-cookie-attributes)
- [**5. Tools for Testing**](#5-tools-for-testing) (3 videos)
  - [Introduction to OWASP dependency check](#introduction-to-owasp-dependency-check)
  - [Find vulnerabilities with Snyk](#find-vulnerabilities-with-snyk)
  - [Penetration testing with Burp Suite](#penetration-testing-with-burp-suite)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing your Node.js projects](https://www.linkedin.com/learning/node-js-security-24512656/securing-your-nodejs-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/securing-your-nodejs-projects?u=76281980&t=0)** - [Instructor] [[Statistics]] show that close to 80% of online web applications aren't secured or are easily hackable. Therefore, security is always a concern for everyone building applications with [[Node.js]]. Following a set of best practices becomes crucial when you work with this library, and this is exactly what we'll explore in this course. What are the best practices to minimize any potential threats into your Node application? Hi, I'm Manny Henri, and I'm constantly looking how to properly secure my web applications, so if you're ready to learn more about how to improve your security skills with Node.js, open up your favorite browser, and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[Statistics]] (1)
> **CLI Commands:** node (3)
> **File Paths:** node.js (2)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/node-js-security-24512656/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/what-you-should-know?u=76281980&t=0)** - [Instructor] As this course explores advanced subjects around [[Node.js]], a basic understanding of its tools and syntax is a must. You also need to have Node.js and [[npm]] installed. If you feel lost in this course, I suggest you take a basic course on Node and our library is full of introductory courses on the subject. The same goes for [[JavaScript]], especially the latest syntax, as it is essential for this course. In this course, I'll be using a Mac, but you can follow along on a [[Windows]] PC or a [[Linux]] as the tools work essentially the same on all these platforms. Also, I'm using Visual Studio Code as my co-editor. It is free and simple to install, but feel free to use whatever IDE you prefer, although I do recommend using one with a built-in terminal or have your own external terminal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[npm]] (1), [[JavaScript]] (1), [[Windows]] (1), [[Linux]] (1)
> **CLI Commands:** node (3), npm (1)
> **Tools:** terminal (2), visual studio (1)
> **File Paths:** node.js (2)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Security Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to OWASP and other sources](https://www.linkedin.com/learning/node-js-security-24512656/introduction-to-owasp-and-other-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/introduction-to-owasp-and-other-sources?u=76281980&t=0)** - [Instructor] As this course explores advanced subjects around [[Node.js]], a basic understanding of its tools and syntax is a must. You also need to have Node.js and [[npm]] installed. If you feel lost in this course, I suggest you take a basic course on Node, and our library is full of introductory courses on the subject. The same goes for [[JavaScript]], especially the latest syntax, as it is essential for this course. In this course, I'll be using a Mac, but you can follow along on a [[Windows]] PC or a [[Linux]] as the tools work essentially the same on all these platforms. Also, I'm using Visual Studio Code as my code editor. It is free and simple to install, but feel free to use whatever IDE you prefer, although I do recommend using one with a built-in terminal or have your own external terminal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[npm]] (1), [[JavaScript]] (1), [[Windows]] (1), [[Linux]] (1)
> **CLI Commands:** node (3), npm (1)
> **Tools:** terminal (2), visual studio (1)
> **File Paths:** node.js (2)
> **Env Vars:** npm (1), ide (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [OWASP Top 10 in Node.js](https://www.linkedin.com/learning/node-js-security-24512656/owasp-top-10-in-nodejs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/owasp-top-10-in-nodejs?u=76281980&t=0)** - [Instructor] Okay, so let's continue our exploration of [[OWASP]] with the list of the top 10 threats on the web, and also we'll explore what is related to APIs and therefore [[Node.js]] as well. So let's go first to [owasp.org](https://owasp.org). And then again, let's go into the projects. And what you want do is open the OWASP top 10 and then scroll down up until you see the list here. So in the past, in the previous course, this was the list that we had. So injection, broken, authentication and so on, so forth. Now there's a lot of things that have changed since then between 2017 and 2021. This is the latest updates, by the way. There might be a new update soon, but this is pretty accurate in terms of what are the current issues. So broken access control, cryptographic failures, injection, and we'll explore the top three in this chapter. And then all of these also have explanations. So if you scroll down here, you're going to see a lot more information about each one of them. And we'll explore the first three fairly shortly. And then if you want to explore further, you can go and take a look at each of these ones separately. So if you want to click on insecure design, you click there, and then it gives you basically what are the CWEs mapped. So these are the weaknesses of an application. Basically the common weakness enumerations is the right épellation for this acronym. But if you scroll down,
>
> **[1:32](https://www.linkedin.com/learning/node-js-security-24512656/owasp-top-10-in-nodejs?u=76281980&t=92)** you are going to have more information about this specific one, which is insecure design, how to prevent it, some examples of the attacks. And you can actually go further and find on the web more examples of these attacks. So again, it's always very important to take a look at these because it keeps you, first of all, in a loop and aware of how you can apply this to your specific case or your specific application, and then make sure that you are not in trouble with your application, especially [[SaaS]] applications. Okay, so now for Node.js specifically, or APIs, which is usually what people use Node.js for, you can go into browse all projects and then scroll down to two areas that would actually help you. One is dependency check. When you work with node.js, in most cases, you work with a lot of dependencies. You have a lot of libraries that are attached to your project, for example, express, or you will have web sockets or a whole bunch of other libraries, which also rely on other libraries. So the dependencies from each library you use grow larger, and your tree of dependencies sometimes could be really, really deep. So you want to make sure that you have dependency checks. So for example, for me and my company, we use SNIc, which basically checks every repos that we use and then basically recommends what patches you should be doing on your dependencies. So this is always a good thing to do.
>
> **[3:08](https://www.linkedin.com/learning/node-js-security-24512656/owasp-top-10-in-nodejs?u=76281980&t=188)** Dependency-check is one of the biggest, in my opinion, safety issue because if you don't control the dependencies that are inside of your code, you control your code, your code can be very secure. But if the dependencies inside of your code are not secure, then you're opening up all kinds of no good to come in, and you want to make sure that you do this. So there's a whole bunch of applications that can actually help you. [[npm]] as an audit that can actually do a full report of what are the dependencies that are in trouble in your application, but using something like SNIc actually gets deeper into that dependency-check and allows you to even have proactive patches suggested to you. I would always be careful by applying the patches automatically. I would always check because sometimes updating your code with the most recent libraries could break your application because they've changed how a function is used and so on and so forth. So be very mindful of that when you do those patches, and do not automate it yet. Okay, so let's go back again to the schema here. And the other thing that I would check also is the API Top 10. So for node.js, you do a lot of APIs. Usually you're going to build a server that will have, maybe return some data. You want to check what are the top 10 security issues for APIs, and then make sure that you're good to go with those as well. So I would take the time to read the site thoroughly
>
> **[4:42](https://www.linkedin.com/learning/node-js-security-24512656/owasp-top-10-in-nodejs?u=76281980&t=282)** and then take notes as you do that. Is my application in danger with these specific things? And then check your code and make sure you're not. So as you explore further OWASP, and when working with node.js, these resources are great for assessing your security vulnerabilities and please do use them. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (6), [[OWASP]] (4), [[SaaS]] (1), [[npm]] (1)
> **CLI Commands:** node (6), make (5), find (1), npm (1)
> **File Paths:** node.js (6)
> **UI Navigation:** scroll down (4), open the (1), click on (1)
> **Env Vars:** owasp (3), npm (1), api (1)
> **Analogies:** for example (2)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Warnings:** be careful (1)

#### [Overview of broken access control](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-broken-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-broken-access-control?u=76281980&t=0)** - [Instructor] Broken access control vulnerabilities arise when applications fail to enforce proper restrictions on user permissions, allowing unauthorized individuals to access, modify, or delete data and perform actions beyond their intended privileges. This can lead to unauthorized information disclosure, data tampering, or even complete system compromise. Common examples include insecure direct object references, which is also called IDOR, where users can access data by manipulating identifiers and privilege escalation, where users gain higher level access than permitted. Implementing access control mechanisms and adhering to the principle of lease privileges are essential to mitigate these risk. So let me demonstrate through a code example. So I'm going to minimize this. And I'm going to go in the exercise files, chapter one, video 01_03, and I'm going to drop this into my Visual Studio Code here. I'm going to start with insecure code. I'm going to show this to you. So as you can see here, we have a typical call to an API here, but what happens here is that if the user with ID 1 here, Alice, logs in and accesses profile one, they can view their profile, right? However, an attacker can manipulate the URL and access the profile two as well
>
> **[1:33](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-broken-access-control?u=76281980&t=93)** to see Bob's data without authorization because there's no checks here to authorize any of these users. So let's take a look at what this would look like if it was secured. So see what we're doing here, we're actually making sure that there's a check that the user is logged in first, and then when we're here, we're checking if the user's logged in. Then you can reply with the [[JSON]] return data, and that's extremely important. So if the logged in user, Alice, can access the profile one, it's because it matches her ID here when she's logged in. So let's say for example Alice was trying as a logged in user to access the profile two, the results would return a 403 access denied response because she is not authorized. So it's really important before returning any data from your APIs to the user to make sure there are an authorized and authenticated access before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** idor (1), api (1), url (1), json (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Overview of cryptographic failures](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-cryptographic-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-cryptographic-failures?u=76281980&t=0)** - [Instructor] Okay, so let's go back to [OWASP.org](https://OWASP.org), and we're going to be talking about cryptographic failures. So you can find this in the [[OWASP]] Top Ten from the Projects, and then scroll down all the way to here, and then this is the page on this particular threat. So cryptographic failures occur when applications improperly implement or manage cryptographic processes, leading to vulnerabilities that can expose sensitive data to unauthorized access. Common issues include using outdated or weak encryption [[Algorithms]], improper key management is a big one, and transmitting data without encryption. These failures can result in data breaches, identity theft, and other security incidents. And if you follow the news, you've seen this all over the place as of late. So let me show you an example of a weak and a better encryption. So let's minimize this. And let's go into the exercise files. This time, we're going to load 0104 into your editor. And I'm going to start by showing you a weak encryption. So just to explain the code very quickly, we're using crypto, and we're setting up our algorithm, which is basically the same process for both. And then we're encrypting the text, and we're logging all this. Encrypted text, decrypted text. We're decrypting the text right here using the same cipher.
>
> **[1:32](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-cryptographic-failures?u=76281980&t=92)** So this is an example demonstrating the use of a weak cryptographic algorithm. In this case, it's DES. It's called data encryption standard. It's considered insecure due to its short key length and vulnerability to brute force attacks, which is usually how hackers try to decrypt your encryption. So in this case, the first thing that is a problem is the algorithm. It's outdated and insecure. Modern applications should use stronger algorithms like AES, for example. The key is also static, which is hard coded and lacks randomness, making it susceptible to discovery and reuse. So you don't want to encrypt this way with this specific algorithm. Let me show you a better one. So this one utilizes AES-256-CBC, which is a robust and widely accepted encryption standard. It also uses a random key and IV. What that means is that it generates a random key, and initialization vector for each encryption section, which enhances security. It also uses a proper key management and a real world scenario you want to securely store and manage keys using the appropriate key management system. So for example, in most cases, you want to use, for example, on a Mac, Keychain, or something similar in [[Windows]]. You also want to consider things that are even more secure, like the TPN security enclave, or even a [[Hardware]] module, which is a HSM
>
> **[3:10](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-cryptographic-failures?u=76281980&t=190)** in the industry. So you want to use something external that you can actually remove from your computer and have your keys stored in there to make sure the key is not left in the open for the hacker to find it. But these are for local stuff, but for SAS applications, you want to use as much as possible the most secure way to secure your key and store it in a place where it's secured as possible. So why do I say this is a better cryptographic approach as opposed to a stronger one, or the best one? While it is secure today, we must acknowledge that it could become vulnerable in the future, especially with the event of [[Quantum Computing]]. Quantum technologies have the potential to make decrypting current encryption standards much easier. This is why I strongly recommend staying informed and updated in [[Cryptography]] and monitoring how advancements in computing and power, particularly in quantum computing, may impact the security of these ciphers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Algorithms]] (2), [[Quantum Computing]] (2), [[Windows]] (1), [[Hardware]] (1)
> **Env Vars:** owasp (2), aes (2), des (1), cbc (1), tpn (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** find (2), make (2)
> **Analogies:** for example (3)
> **Best Practices:** the key is (2)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Cross-References:** go back to (1)

#### [Overview of injections](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-injections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-injections?u=76281980&t=0)** - [Instructor] Injection threats are a class of security of vulnerabilities that occur when entrusted input is sent to a program or a system, potentially allowing attackers to manipulate or execute unintended commands. So let's explore that one a little bit. So let's go back to [[OWASP]] top 10, and let's scroll down to injection. These threats exploit weak input validation and improper handling of user data, posing risk to [[Data Integrity]], confidentiality, and system functionality. The most popular type of injection threat is [[SQL]] injection, and I'm going to show you an example shortly, where attackers manipulate [[Database Queries]] to access or alter sensitive information. Other common injection threats include cross-site scripting, which was on the previous version of this course, command injections, and LDAP injections, each targeting different systems and technologies. Addressing these vulnerabilities require robust input validation and adherence to [[Secure Coding]] practices. So cross-site scripting very quickly needs to be on top of your list. This particular attack is when a malicious script is injected into a trusted site. For example, add [[JavaScript]] code into an unsuspecting input in a form. So for example, if we went to any websites, for example, let's go to [[Google]], and Google is pretty much secure, but I could, if not secure, input a script in here and basically do all kinds of no goods in a Google query.
>
> **[1:37](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-injections?u=76281980&t=97)** So some example of these attacks have been pulling data from cookies, session [[Tokens]], and all kinds of sensitive information. But let me demonstrate a SQL injection attack. So let's minimize this. Let's go into the code 01_05 and drop this into your editor. And let's click on injection.js. I'm going to minimize this for a second. So this is basically an example of a SQL query. And in this case, if you look at the code, we have our express server, which is a node server in express. And then we use Express to send a query to a SQL database using SQL Light 3. So this is basically the query, and then when we're logged in, we're actually going ahead and doing a query here. So a legitimate user submits his username, right, admin, and password, password123, in this case. And the query works as intended, but this code is vulnerable right now. So an attacker could submit the username admin or one equals one and password anything, and then the result inquiry in every case would be this. So this is vulnerable. This would be a big problem. So I'll never write this kind of code to do a SQL query. So let's go and find the secure one. In this case here, we have pretty much the same thing,
>
> **[3:10](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-injections?u=76281980&t=190)** but we have parameterized query here. If you look at it here, the code actually has the password parameterized as opposed to pass a password. So basically, the question mark in the placeholders here in the query prevents SQL code from being injected as inputs, as treated as data, not executable code. The previous one had no question mark, and basically if there's no question mark, then you can actually pass as executable code. There's also a validation of the inputs. So the inputs are sanitized automatically by the database driver. So always use parameterized queries using the question marks and/or prepare statements to avoid SQL injection vulnerability. So this is one of the top threats for your application, you know JS application, because if a developer doesn't pay attention to this type of issue, it is, in most cases, the easiest to hack because all the hacker has to do is put inside of the query form or the input a script, and then they can basically get a whole bunch of thing. So to prevent this type of attack, you need to validate your data both on the server and on the client, so when you have a form, make sure the data is sanitized or validated properly, and that goes for the cross-site scripting, command injections, and LDAP injections. Also, make sure to implement output in coding,
>
> **[4:44](https://www.linkedin.com/learning/node-js-security-24512656/overview-of-injections?u=76281980&t=284)** so HTTP cookie flags and CSVs in your application. And you have many examples how to do this in OWASP and the examples that I showed you today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Google]] (3), [[OWASP]] (2), [[Data Integrity]] (1), [[Database Queries]] (1)
> **Env Vars:** sql (8), owasp (2), ldap (2), http (1)
> **CLI Commands:** make (2), node (1), find (1)
> **UI Navigation:** scroll down (1), go to (1), click on (1)
> **Analogies:** for example (3)
> **File Paths:** injection.js (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)


### 2. Best Practices: Packages

[↑ Back to Table of Contents](#table-of-contents)

#### [Hands-on base template overview](https://www.linkedin.com/learning/node-js-security-24512656/hands-on-base-template-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/hands-on-base-template-overview?u=76281980&t=0)** - [Instructor] Now let's take a look at the base project we'll use throughout the course to explore security's best practices with NodeJS. So the first thing I'm going to do is create a brand new folder where I'm going to drop the exercise files from here. So if you click on the exercise files and the resources, you have a base project. Just make sure you can show hidden files, otherwise, you're not going to be able to copy the babelrc file that is in here. It's needed for that project. And FYI, this is an outdated project on purpose. So there's packages that are outdated. We're going to take a look at that as we go through this course. So what I'm going to do is create a brand new folder on the desktop. I'm going to call this CRM like so, and I'm going to copy these files here and I'm going to copy them inside of the CRM folder, as so. And then what I'm going to do is open all of this inside of VS Code and I'm going to minimize VS Code just for a second and bring up the terminal first. So this is my terminal. So I'm going to go into this project here and first make sure that everything runs properly. What you need to have installed prior to run the project is [[MongoDB]] inside of your computer. Whether it's on [[Windows]] or Mac or [[Linux]], you need to install MongoDB. So what you need to do is go to MongoDB and find the community download, the community version,
>
> **[1:36](https://www.linkedin.com/learning/node-js-security-24512656/hands-on-base-template-overview?u=76281980&t=96)** and then install that version. And once you have it installed, you should be able. So for example, if I use Studio T, 3T to open,
>
> **[1:49](https://www.linkedin.com/learning/node-js-security-24512656/hands-on-base-template-overview?u=76281980&t=109)** and you could use that as well, if you want to check if MongoDB is properly running as a service. You can actually connect to the local host 27017. If you're able to connect to this, that means that you have a MongoDB installed inside of your computer. But you absolutely need this in order to run the project in this course. So what I'm going to do is go to this project here and I'm going to do an ls cd Desktop, whoops.
>
> **[2:23](https://www.linkedin.com/learning/node-js-security-24512656/hands-on-base-template-overview?u=76281980&t=143)** And then cd CRM. And then what I'm going to do is first of all, an [[npm]] i to make sure that I install all the dependencies that are part of this project. And as you can see already, we can see that there's a lot of stuff that's deprecated in this project. So that's going to be a very good exercise for us. Okay, so now that we have all this installed, we should be able to run it. So you should be able to do an npm start. And again, you need to have MongoDB installed prior to run this. Otherwise, you're going to have an error. And if you see your server is running on port 3000, that means that everything is running properly. I'm going to open this into a new window and do local host 3000. And then it says node and express server is running on port 3000. So if you see this, that means everything is running properly. So while this is running, you can actually stop if you want. I'm going to do that. Let's go into VS Code and take a look at the files that we have. So basically right now, what we have, we have a main index that basically imports express mongoose to run commands with MongoDB. Then we create a connection to the MongoDB database and we create this CRM database here, which if you were going back to 3T, the application I just used to connect to the MongoDB instance, you would see basically the CRM DB database showing up
>
> **[3:58](https://www.linkedin.com/learning/node-js-security-24512656/hands-on-base-template-overview?u=76281980&t=238)** as we add stuff into it or documents into it. Now we create the new server and so on and so forth. Inside of the source, we have routes for that server. So we have the CRM routes. So all the routes. We have your get, your post, your put, delete routes. You have the model that we'll explore shortly when we explore types right here. And then we have the controllers, basically the functions that are returning whatever we need from the database as we add new elements to the API. So the get command basically gets the contacts and then returns through the Mongo server and finds all the contacts and then responds with a [[JSON]] file and so on, so forth. So this is the main functions that we have. We also have like two public images that were part of the exercise when we did this CRM server for the course that I've done for this one. So this is the project that we're going to use as we explore several things for NodeJS Security. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (9), [[npm]] (2), [[Windows]] (1), [[Linux]] (1), [[JSON]] (1)
> **CLI Commands:** make (3), cd (2), npm (2), find (1), ls (1)
> **Env Vars:** crm (7), fyi (1), api (1), json (1)
> **Tools:** vs code (3), terminal (2)
> **Prerequisites:** install (3), you need to have (2)
> **UI Navigation:** go to (2), click on (1)
> **Ports:** port 3000 (2)
> **Exercise Files:** exercise files (2)

#### [Maintain package dependencies](https://www.linkedin.com/learning/node-js-security-24512656/maintain-package-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/maintain-package-dependencies?u=76281980&t=0)** - [Instructor] Let's explore what commands are available to maintain our dependencies, therefore making our application more secure. This is one of the biggest items you need to constantly work on in order to properly secure applications built with [[Node.js]]. There are reasons why dependencies are updated, and sometimes the cause of their update is due to recently found vulnerabilities in their code. So since we rely on these packages, we need to make sure our application is also up to date and therefore safer for our own users. So let's explore a few commands available to us. So I brought back my terminal here and I'm directly into the CRM folder. So if you're not into the CRM application or wherever your project is, you want to make sure you're in that directory first. Once you've done that, there's a command that will give you a really good report on what is updated in your current project. So it's called [[npm]] adit. Okay, so let's scroll up and take a look at the report that we just got. So I'm just going to go all the way up to my command npm audit.
>
> **[1:15](https://www.linkedin.com/learning/node-js-security-24512656/maintain-package-dependencies?u=76281980&t=75)** Okay, so the way this report works is basically give you, first of all, the high severity issues. So as you can see right now, I have the async library that I'm using in this project that is actually a few versions outdated. And then you can continue down the road to see what is happening here. So what are the dangers here? So in certain cases, it's going to give you a bit more details as to what is the danger, but in this case, basically they're saying prototype pollution in async. So that's kind of the issue. You can actually take a look at what is the issue from this link here, and then continue with the next one. Same here, critical, Babel vulnerable to arbitrary code execution when compiling and so on so forth. So you can basically read the report and figure out, well, these libraries are extremely vulnerable for your application right now, in this case, this one. And what I would do is really update these dependencies unless they break your code. And if they break your code, then change your code to reflect a new library just to make sure that one, you're secure, and two, you reflect the latest code. And that's why I usually do these manually, just to make sure that if there's any breaking change in my application, just updating the dependency is not breaking my application. And then I would have to figure out, why is my application not working? So you can continue down this report and find other issues in your code and then update the code. So now what is another command that you can do
>
> **[2:54](https://www.linkedin.com/learning/node-js-security-24512656/maintain-package-dependencies?u=76281980&t=174)** to figure out which dependencies are outdated? You can do npm outdated, and this is going to give you the packages that needs to be outdated and what you would prefer being to as opposed to what you are. So in this case, 8.83, and this is what you currently have. So again, if you want to make that change, you have to validate first that there's no breaking change in that package. Same thing for nodemon, which is now at 3.1.7. So you see this is the old version of this project, and this should be the version that we're using for this project to be, again, as secure as possible. Now if you want to go ahead and update a library, let's say for example nodemon, what you could do is do npm update, do the package, and then you can specify the version if you want to. So in this case, let's say we wanted to go to 3.1, what we would do, 3.1.7. Now I've used npm update and npm install on and off in between the two, and sometimes the update doesn't work the way it's supposed to. So what I usually do, instead of doing the update, I use the install and use the exact same thing for the [[Representational State Transfer (REST)|rest]]. So nodemon and at 3.1.7, and FYI, i is short for install. So you can do install if you want, or you could just do i, which I usually do in my case. So what I would do in this case,
>
> **[4:27](https://www.linkedin.com/learning/node-js-security-24512656/maintain-package-dependencies?u=76281980&t=267)** I would update to the latest version of nodemon. But because there might be some breaking change, and this course is not about checking what are the breaking change, I'm not going to do that so we can actually run the project if we need to. So this is how, with npm, I would audit the vulnerabilities in my project, I would update the proper dependencies. There's tools that I'm using professionally, such as Snake, which gives you a lot more details, which gives you constant reports and updates you for your dependencies and even creates PRs that you can actually commit in your code. I never do automated PRs for code updates from Snake because again, I want to change these things myself. I want to make sure that none of the new updates break the code. So therefore we usually look at the PRs, look at the changes, and apply them if everything is good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (7), [[Node.js]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** npm (7), make (6), node (1), find (1)
> **Versions:** 3.1.7 (3), 8.83 (1), 3.1 (1)
> **Prerequisites:** install (4)
> **Env Vars:** crm (2), fyi (1)
> **UI Navigation:** scroll up (1), go to (1)
> **Analogies:** for example (1), such as (1)
> **File Paths:** node.js (1)

#### [Add 2-factor and read-only tokens with NPM](https://www.linkedin.com/learning/node-js-security-24512656/add-2-factor-and-read-only-tokens-with-npm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/add-2-factor-and-read-only-tokens-with-npm?u=76281980&t=0)** - [Narrator] Protecting your account and access to your package is crucial, especially if you publish packages to [[npm]] and want to restrict access to them. So let me demonstrate how this works. So let's say you have an account with npm. The first thing you want to make sure is protect your access to your account because if people have access to your account, they can do all kinds of no good. So you go into your account and there you go here and what you do, you scroll back until you see two-factor authentication. What you need to do is enable 2FA by clicking Enable 2FA. Now you need to enter your password, confirm password to continue. What you need to do first is either set up a security key or use an authenticator app, whatever works for you. In my case, I'm going to use authenticator app, continue. Once you set up your authenticator app or whichever method you want, you can enter the code
>
> **[1:13](https://www.linkedin.com/learning/node-js-security-24512656/add-2-factor-and-read-only-tokens-with-npm?u=76281980&t=73)** and then make sure you download the information. So I'm going to download this, confirm, go back to Settings, and now you officially enabled two-factor authentication. The next thing you need to do, once you have that, your profile or your account is secure. The next thing you need to do is basically click to access [[Tokens]]. And this is how the applications that you're going to use are going to access your npm packages. For example, we're going to use a quick example with Travis. So you go to Access Token and then Generate a New Token. We can select which one you want. In this case, I'm just going to go and do Classic Token. I'm going to call this Travis Access. And then you can select what kind of access token it is. Is it read only? So is it read your npm packages only? Is it to publish to your npm accounts or is [[IT Automation]]? So for example, in CI/CD for Travis, that would work, but I'm going to basically call this automation because this is for Travis. If it was to publish, it could be publishing as well. And then you generate a token and now you have your token, you can actually copy it and so on, so forth. Once you have that, whichever platform you're using for this particular token, you go into that platform and you implement it accordingly.
>
> **[2:46](https://www.linkedin.com/learning/node-js-security-24512656/add-2-factor-and-read-only-tokens-with-npm?u=76281980&t=166)** So for example, if we go to Travis, so Travis could actually do npm releasing. So basically, if you want to release to npm, that might have been a better choice for publishing in this case. But you go to NPM Auth Token and then you follow the instructions. So whichever platform you're using, you follow the instructions on how to set it up and you set up the proper token for that platform. So this is how I would go about to actually secure your npm packages for your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (9), [[Tokens]] (1), [[IT Automation]] (1)
> **CLI Commands:** npm (9), make (2), cd (1)
> **UI Navigation:** go to (3)
> **Analogies:** for example (3)
> **Prerequisites:** set up (3)
> **Env Vars:** npm (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** download the (1)


### 3. Best Practices: Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Data handling with type and validation](https://www.linkedin.com/learning/node-js-security-24512656/data-handling-with-type-and-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/data-handling-with-type-and-validation?u=76281980&t=0)** - [Instructor] When handling data on your server, the best first line of defense is to do validation and type assertion. This way, the data sent is already sanitized to be of a certain type, and you avoid sending dangerous scripts to the server. So let's explore how we do this. Well, the first thing you have is the schema. So when you set up your model inside of your project, in this case we use Mongoose and then we create a schema with Mongoose, we actually define the type for each of these data types. So we have the first name, last name, email, company, phone, and then the created data are sent to the server. But for each one of 'em, we are defining a type. So if the data that's passed to that particular request to the server is not following these types, the server will throw an error. So for example, in this case, first name should be a string. Same thing for last name. Email should be a string, company same, and then number, and then a date for the created date. So if we were to send a script to the first name data type, we would throw an error because it's expecting a string and not a script or not an email or something else. So it's very important, and that is the first line of defense for your server. There's also another tool that is really useful that goes even one step further, and it's called validator.js. So let me show you what this is. So basically validator.js is an extra layer of checks. It's very similar to types,
>
> **[1:37](https://www.linkedin.com/learning/node-js-security-24512656/data-handling-with-type-and-validation?u=76281980&t=97)** but what it does, it goes even one step further. So for example, what you would do is check that this is an email, not just a string, but an actual email. And it would do that check and make sure that if this is not an email, then there's a problem. And then you could do an IF statement, return an error, as opposed to send data to the server. 'Cause if you allow something else than an actual email into the server, then you might have issues like passing a script. So let's take a look at how this would work inside of our project. Okay, so let's close the model, and let's open up the CRM controller. So where would that happen? That validation would be in just before we actually send the data to the server. So around here, so we have the request from the body, and then we would do an if statement, and then insert that saving of the new contact inside the new if statement. So I'm going to do a little bit of pseudo code here. So what would happen is something along these lines. So if statement here, and what would happen here is, let's say for example if, and then we would pass the validator. So you would import validator already in here. And what would happen is basically validator dot, and remember if you go back to here, it's is email and then pass the email inside of it. So what we would do something like that, so is email.
>
> **[3:12](https://www.linkedin.com/learning/node-js-security-24512656/data-handling-with-type-and-validation?u=76281980&t=192)** And then you see my auto complete here finishing what I should be doing, so is email, and then what we do is pass from the request of the body, the email or the contact, and check the email and check all the other data points. And then it would go to the next line. And then what we would do is pass inside of that validation. And again, this is just the email, we would need to check every single one item that is in the body of the new contact. So you have the company, if we look back into the CRM model here, you have a first name, last name, email, company, phone, et cetera, et cetera. So you would have to check all this first. So what it would do here is probably do a function that would pass the request of the body, do all the checks inside of that function, and then inside of that function, run the saving code, and therefore do the potential checks. That's primarily how I would do this one here. So make sure whenever you have data that you're sending to a database, please make sure that at the API level where this server stands, you make all the checks with the assertion types like we've seen in the model. And also do checks or extra checks with validator.js.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Analogies:** for example (3), similar to (1)
> **File Paths:** validator.js (3)
> **Env Vars:** crm (2), api (1)
> **Definitions:** is an  (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)

#### [Use prepared statements for SQL and NoSQL](https://www.linkedin.com/learning/node-js-security-24512656/use-prepared-statements-for-sql-nosql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/use-prepared-statements-for-sql-nosql?u=76281980&t=0)** - [Narrator] A prepared statement is basically the use of a template in your code with empty values when making queries to the server. And then as the command is executed, the empty values are replaced with the data needed to fulfill the query. The beauty of most of today's tools for querying [[Databases]] is that they already include them. So if you are using Mongoose for [[MongoDB]] or Sequelize to query [[SQL]] databases, you've got this area covered already. So the general guideline here is to use those tools, like we're doing in our application. And if you're not, you'll thank me both from a security perspective or a development perspective, as they make querying and setting up your server with the database much easier. If you would like more information on the subject for Mongo development, go to this webpage, [mongoosejs.com](https://mongoosejs.com). And on this page, you'll find more information about how to set it up, what it saves you, and so on and so forth. And if you prefer developing with SQL, then use Sequelize, which you can find more information on this site, which is docs.[sequelize.com](https://sequelize.com). And then, again, similar to Mongoose, you'll see how easy it is to set up and what it saves you, and what are the commands you can use to query your database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[SQL]] (2), [[MongoDB]] (1)
> **CLI Commands:** find (2), make (1), mongo (1)
> **URLs:** [mongoosejs.com](https://mongoosejs.com) (1), [sequelize.com](https://sequelize.com) (1)
> **Env Vars:** sql (2)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)

#### [Set proper HTTP headers with Helmet](https://www.linkedin.com/learning/node-js-security-24512656/set-proper-http-headers-with-helmet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/set-proper-http-headers-with-helmet?u=76281980&t=0)** - [Instructor] Headers are key value pairs sent between a client, the browser, and the server in an HTTP request or response, carrying [[Metadata]] such as content type, caching rules and security instructions. They play a crucial role in web communication, but can introduce vulnerabilities if not properly configured. To secure headers, it's essential to set rules that prevent exploits like cross-site scripting, clickjacking, and information leaks. Helmet.js, which is a [[Node.js]] middleware, simplifies header security by automatically configuring critical HTTP headers, and enforces best practices such as enabling content security policy, X frame options to prevent clickjacking and strict transport security for HTTPS-only communication, it makes the web applications significantly more secure with minimal efforts. So the way it works is basically you import Helmet into your express project and then you can set all the headers that are right here. As you can see, it does a lot of the things that we just mentioned. So for example, it actually prevents Cross-Origin-Resource-Policy or Cross-Origin-Opener-Policy It does cross-site scripting, protection, and so on so forth. So you can set up the headers right here and follow the instructions.
>
> **[1:32](https://www.linkedin.com/learning/node-js-security-24512656/set-proper-http-headers-with-helmet?u=76281980&t=92)** So basically, it's very important to set these things when you set up your APIs, so your communications in between your client and your server are totally secure or as secure as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Node.js]] (1)
> **Env Vars:** http (2), https (1)
> **Analogies:** such as (2), for example (1)
> **File Paths:** helmet.js (1), node.js (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** node (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Encrypt user data and session management](https://www.linkedin.com/learning/node-js-security-24512656/encrypt-user-data-session-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/encrypt-user-data-session-management?u=76281980&t=0)** - [Instructor] Another strong recommendation for properly securing your [[Node.js]] application is to encrypt your user data across all communication channels. So when your server and client are exchanging data, use Node.js package like crypto. Crypto allows you to encrypt your sensitive data with several methods to create a hash or to create encrypted data and so on so forth. By having the proper protection, you make sure that if anyone intercepts your data, you minimize the possibility they can decipher your data and also use it for their own good. So let me give you two examples here. So let's say for example, you want to encrypt the data, you would go and use the class Cipher. So in the Cipher you would select the [[Algorithms]]. So in this case, this the aes-192-cbc. You could use a whole bunch of algorithms, but this is a good one. And then you would set the password. So basically what is the key that you're going to use to encrypt that (indistinct)? And this should be both on your client and on your server side. And then you would create through the actual Cipher the new [[Microsoft Word|word]], and set the encoding. And let's say for example, you want to cipher or encrypt some clear text data, that's what it would happen and would encrypt the data. And then on the other side of your transport, you would decrypt the data. You can also set a hash, basically a hash is undecryptable.
>
> **[1:35](https://www.linkedin.com/learning/node-js-security-24512656/encrypt-user-data-session-management?u=76281980&t=95)** It's basically a verification method. So let's say for example, this is good for passwords. So let's say for example, you want to validate that the password that the user has put into your input is the right password on the database. So the password on the database should be already hashed for security purposes and then what you would need to do, nobody knows what the password is, but you would send the hash towards the server and check and validate that the hashes are the same. So in this case, let's go back to Crypto here. And use the Hash or the Hmac, and you would create a hash through, for example, this. So let's say for example, your password is some data to hash, it would take the data, hash it, send it to the server, and validate that this is the same hash as what is on the database already. So make sure you use Crypto whenever you have communication between your server and your client. And you want to make sure that nobody intercepts your data when you're making these transactions. As always, make sure to properly manage your sessions as well. If you leave sensitive data in their browsers, localStorage, it is another potential security issue. So let's go here. So localStorage is always a bad idea. So if you store any of your sessions in the localStorage, you are not helping yourself. You're putting your application in danger for your users. So you want to make sure you use sessionStorage over
>
> **[3:10](https://www.linkedin.com/learning/node-js-security-24512656/encrypt-user-data-session-management?u=76281980&t=190)** localStorage. So when your user leaves your application, the data related to it is clear in your client because if you use localStorage, the data stays in the client and then everyone can actually go into your browser or your client and actually read that information. So all sensitive data or user data should be stored in sessionStorage. So always make sure that all these elements are secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[Algorithms]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (6), node (2)
> **Code Identifiers:** localstorage (5), sessionstorage (2)
> **Analogies:** for example (6)
> **File Paths:** node.js (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)


### 4. Best Practices: Server Level

[↑ Back to Table of Contents](#table-of-contents)

#### [Use secure HTTPS protocol](https://www.linkedin.com/learning/node-js-security-24512656/use-secure-https-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/use-secure-https-protocol?u=76281980&t=0)** - [Instructor] What is the HTTPS control? It is basically, the same hypertext transfer protocol that we've been using to browse a web, but secure. It allows to transfer the web page you view in a secure manner. It means the communication between your browser and the website is encrypted. In recent years, most browsers will indicate when an application or website isn't using the more secure HTTPS protocol and therefore, advises users against using your site or application, so it is strongly recommended you use it. In fact, in some cases, the browser will even prevent the site from being loaded into your browser, if it isn't using HTTPS. So how do you make sure your website or application is using the secure protocol? By making sure the domain you are using has an SSL certificate. Most domain selling entity offer SSL certificates, nowadays, and if yours isn't, you can get one for free from letsencrypt and then install it on your server. The way it works, you get the certificate from the entity, then follow the instructions on your server ISP to install the certificate. All cloud, all server providers have a different way to install their certificates, but in most cases it is done automatically as you register the certificate. Whoever your provider is, look into the documentation for more information on the subject, then your users can enjoy the benefits of browsing securely on your site, it's that simple.

> [!info]- Semantic Content
>
> **Env Vars:** https (3), ssl (2), isp (1)
> **Prerequisites:** install (3)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Rate limiting against DoS attacks](https://www.linkedin.com/learning/node-js-security-24512656/rate-limiting-against-dos-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/rate-limiting-against-dos-attacks?u=76281980&t=0)** - [Narrator] Like we've mentioned before, DoS attack will typically overwhelm your servers with request until your server's I/O is overloaded, and therefore shuts itself down. This can be prevented by eliminating the number of requests in a specific amount of time. And this can be prevented from an express middleware called Express rate-limit. There is also a module called Rate limiter, but it has a [[Redis]] dependency. So if you're not a fan of adding extra packages when not needed, then use the express one. If you're using Redis in your application, feel free to use the MPM module. So let's explore adding the Express-rate-limit module. So the first thing we're going to do is go back to our terminal. I'm going to minimize my editor, and then go into the terminal where I have CRM, or the project that we have here already open. Okay, so now we're going to install Express-rate-limit, and I'm going to also install L Map because I want to set it up as well in this video. So I'm going to do pseudo [[npm]], and I need to do pseudo on this one. Express-rate-limit, and helmet, like so.
>
> **[1:25](https://www.linkedin.com/learning/node-js-security-24512656/rate-limiting-against-dos-attacks?u=76281980&t=85)** Perfect. So now that these are installed, I'm going to go back into my editor and I'm going to open index.js. You're going to see it's very simple to set up those two guys. So the first one I'm going to add again and import for helmet. Helmet from Helmet. And then do it again for, going to call it RateLimit from express-rate-limit. Okay, so now that I have these two imported, I'm going to add a setup for helmet, and you'll see that it's extremely easy. You do app.use, and you pass helmet, and that's it. That's all you need to do, and helmet is set up. So if you can't remember what helmet is, go back to that video to understand the use of helmet. And then I'm going to do RateLimit, set up here.
>
> **[2:38](https://www.linkedin.com/learning/node-js-security-24512656/rate-limiting-against-dos-attacks?u=76281980&t=158)** And then it basically goes like this. So I'm going to do limiter, and what we're doing is basically passing a new limiter and if there's more requests than what we're going to put here, prevent the requests from happening. And that's basically what it is. So I'm going to do [[Windows]] MS and we're going to do it 15 times. And as you can clearly see, there's a lot of suggestions that happens in the background here. I have a lot of these things set up in my editor as I code. Usually I code my own stuff, but sometimes they give you a lot of suggestions here. Sometimes I actually complete what they're suggesting, 'cause that's exactly what I want to write. Sometimes I do my own thing. Okay, and there's a whole bunch of other settings that you can also set. If you take a look at the actual documentation of the express-rate-limit library, you can see some other elements here. You can look into the documentation here. You would see all the options that you have, what they are, and so on, so forth. Once you have that set up here, all you have to do at this point is do basically like what we're doing here, and what I would do is app.use and then limiter. And now your application actually uses the limiter and will prevent the DOS attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Redis]] (2), [[npm]] (1), [[Windows]] (1)
> **Prerequisites:** set up (5), install (2), setup (1)
> **Env Vars:** mpm (1), crm (1), npm (1), dos (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **File Paths:** index.js (1)
> **CLI Commands:** npm (1)
> **Documentation:** the documentation (1)

#### [Use a library to prevent CSRF attacks](https://www.linkedin.com/learning/node-js-security-24512656/use-a-library-to-prevent-crsf-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/use-a-library-to-prevent-crsf-attacks?u=76281980&t=0)** - [Instructor] In the modern web landscape, cross-site request forgery continues to be a significant security threat. Despite an advancements in security tools and practices, the risk associated with CSRF attacks remain high, particularly for applications where users frequently interact with [[Forms]], or APIs while authenticated. CSRF attacks exploit the trust a web application has in a user's browser. They occur when malicious actors trick authenticated users into unknowingly executing unwanted actions on the web application. So how it works, a user logs into a trusted website and establishes a session via cookies or [[Tokens]], and then the attackers lures the user into clicking a malicious link or loading a harmful resource on another site. Then, without the user knowledge, this link initiates actions, like, for example, in transferring money or changing account settings on the trusted website, leveraging the user's authenticated session. So the result is unauthorized actions that compromises both the user security and the integrity of your web application. So there's a solution. So basically, this is what we're looking at, double CSRF. So one of the best way to mitigate CSRF risk and [[Node.js]] is to adopt robust and modern protection mechanisms. And this is where csrf-csrf library comes in. This library is a lightweight, efficient solution designed
>
> **[1:36](https://www.linkedin.com/learning/node-js-security-24512656/use-a-library-to-prevent-crsf-attacks?u=76281980&t=96)** for secure, flexible protection, and it provides a practical way to ensure that every user action in your application is intentional and authenticated. So the way it works, the library generates unique tokens for each session or request. So these tokens must be included in any state-changing request. So like example, POST, PUT, DELETE. When the server receives the request, it validates the token. So if the token is missing or invalid, the request is rejected, effectively neutralizing the CSRF attacks. By leveraging secure cookie storage for tokens, the library also minimizes the risk of token theft or misuse or adding another layer of defense. And if you want to see how to set it up, you can see it in the documentation here. It's very simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (4), [[Forms]] (1), [[Node.js]] (1)
> **Env Vars:** csrf (5), post (1), put (1), delete (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Use cookie attributes](https://www.linkedin.com/learning/node-js-security-24512656/use-cookie-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/use-cookie-attributes?u=76281980&t=0)** - [Instructor] Cookie attributes determine the proper use of cookie sessions and provide better control over how and where they are used. For example, the secure attribute ensures that a cookie is only sent over HTTPS, safeguarding its transmission. The HTTPOnly attribute prevents the cookie from being accessed by [[JavaScript]], offering protection against cross site scripting attacks, and so on so forth. The SameSite attribute restricts cookies from being sent with cross site requests, offering options such as restrict to block all cross origin requests, lags for limited cross origin navigation, and non-fulfill cross site functionality, which requires the secure attribute. Additionally, the domain and path attributes allow you to define the scope of a cookie, specifying which domains and paths can access it. Persistent cookies can be managed by setting an expiration date with the expires attribute or a lifespan using max-age. These attributes provide developers with precise control over cookie behavior, enabling them to enhance security and ensure proper functionality in modern web applications. Here are examples of libraries you could use for that purpose. The first one is cookie. Cookie is a basic HTTP cookie parser and serializer for [[Node.js]]. It allows parsing of the cookie header and serialization of set cookie headers enabling manual control over cookie attributes
>
> **[1:35](https://www.linkedin.com/learning/node-js-security-24512656/use-cookie-attributes?u=76281980&t=95)** like Secure, HTTPOnly, domain, path, and expires. The second one is Tough Cookie. Tough Cookie is a robust cookie management library that implements the HTTP cookie state management mechanism. It supports automatic angling of cookie attributes and is suitable for applications requiring extensive cookie management such as handling multiple domains and paths. And finally, while primarily used for session management, the middleware express-session for Express JS can set cookies with specific attributes. It allows configuration of cookie properties like Secure, HTTPOnly, domain, path expires, and SameSite providing control over session cookies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Node.js]] (1)
> **Env Vars:** http (2), https (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (2)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)


### 5. Tools for Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to OWASP dependency check](https://www.linkedin.com/learning/node-js-security-24512656/introduction-to-owasp-dependency-check?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/introduction-to-owasp-dependency-check?u=76281980&t=0)** - [Narrator] [[OWASP]] Dependency-Check is a tool that analyzes your project's dependencies and checks for known issues. So the way it works, go to [owasp.org/www-project-dependency-check](https://owasp.org/www-project-dependency-check). Once you get there, you can search it on [[Google]]. So once you get there, scroll down, and it explains basically what it is. But in short, it checks for all your dependencies for these issues here, the CPEs and the CVEs. So Common Vulnerability and Exposure and Common Platform Enumeration, which are basically things that are going just a tap further than a [[npm]] audit. It's really, really detailed. And I believe Snyk is built on that too. So basically, if you're doing this check, you want to do it for free, you can do it here. So what you need to do is download the command line one. I usually use this one. There's also a brew update. I had some issues with this one personally. If you are able to make it work, then good for you. And these are the other options that you have. So the command line basically is the easiest for me. So I would click on this and download it. So there you have it. So download this tool, go ahead and run it in your system, in the folder where your project is, and you should get a report, a very detailed report that's going to show you what are the dependencies that needs to be updated, along with suggestions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Google]] (1), [[npm]] (1)
> **CLI Commands:** npm (1), brew (1), make (1)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Env Vars:** owasp (1), npm (1)
> **Tools:** command line (2)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### [Find vulnerabilities with Snyk](https://www.linkedin.com/learning/node-js-security-24512656/find-vulnerabilities-with-snyk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/find-vulnerabilities-with-snyk?u=76281980&t=0)** - [Instructor] Snyk is a great service to provide a first line of defense and to determine if any of your project are at stake. It's great documentation offers advice on how to remediate any issues you may have in your code and what type of attacks can impact your project. So let me demonstrate. So the way you work with Snyk is, well, first of all, I have an account and I'm using it personally and we're using it professionally with my company. So basically what you do is log in first and you would log in usually with your [[GitHub]] account if you have all your repos on your GitHub account. So once you're logged in, you need to basically authorize Snyk to go into your GitHub account. Once you're logged in, it will basically list all the projects that you have. For example, I have these two projects that really need to have an update and let's take a look at what. So what it would do is basically give you the very critical issues, the high level issues, moderate, and then low. So if we look at that package.[[JSON]], it would give you what are the issues. So for example, on this one here, for [[React.js|React]] Script, you have Regular Expression Denial of Service, that could be an issue. And then you have Incomplete List of Disallowed with this react script and so on, so forth.
>
> **[1:35](https://www.linkedin.com/learning/node-js-security-24512656/find-vulnerabilities-with-snyk?u=76281980&t=95)** So you can take a look at the very specific issues and the vulnerabilities that could occur with these specific dependencies especially, and how you can remediate it so you could actually click and fix this vulnerability. In most cases, it's just a dependency update. And as you go through all your projects, you can actually know right away what is occurring with these specific projects. One of the things that Snyk offers when you have a paid account, and when you have a professional account like we're using it, the company, it will basically give you PRs that you can actually commit to your code and PRs are pull requests if you don't know what I'm talking about, and basically allow you to basically do a one, integration of your code into one commit into your larger branches, and basically fix all these issues at once. I do not do this automatically. I never go blindly and apply these PRs, because these are all automated stuff. The problem with that is that your code could be broken by these automated PRs, and then, as you implement these things, you find that your application is no longer working or a specific feature of your application is no longer working. This is very important to keep track of and make sure that none of these updates for the dependencies don't have new methods or new ways of implementing the features that breaks your code.
>
> **[3:09](https://www.linkedin.com/learning/node-js-security-24512656/find-vulnerabilities-with-snyk?u=76281980&t=189)** So it's very important to check this as well, but I use Snyk right now to give me an idea of what are the dangers within the dependencies that we rely on when we work with our projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[React.js|React]] (2), [[JSON]] (1)
> **Tools:** github (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (2)
> **File Paths:** package.json (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Penetration testing with Burp Suite](https://www.linkedin.com/learning/node-js-security-24512656/penetration-testing-with-burp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/penetration-testing-with-burp?u=76281980&t=0)** - [Instructor] Burp is another testing tool similar to Snyk, but with its paid version, it goes into much more details and scans for many other issues not covered in a basic plan like Snyk offers, so go to [portswigger.net/burp](https://portswigger.net/burp) and what differentiates Burp to Snyk is the amount of options and types of scan you can set up and automate. You can even specify the specific path you'd like scanned and for what exactly? Once set up, Burp's automated scans can save you a lot of time of researching or going through reports since you've specified exactly what you wanted to scan. Although the paid version is a bit hefty, if you're looking for this type of granularity, Burp can be a strong tool in your shed, but if you're looking for more automated reports and are already a heavy user of [[GitHub]] repos, then Snyk might make more sense to you. Take a look at all these tools that we've explored in this course, and you have a really good set of tools that you can use to evaluate your projects, your dependencies, and so on, so forth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **URLs:** [portswigger.net](https://portswigger.net) (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/node-js-security-24512656/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-security-24512656/next-steps?u=76281980&t=0)** - [Instructor] This course was an exploration of security best practices with [[Node.js]]. Needless to say, this is a much deeper subject and no one course could give it justice. Always go back to the tools and explore to analyze your code and look for new threats and how they impact your code. Make sure you explore them in [[OWASP]] and see how it impacts your application. OWASP should always be your first place to go for that type of information. Always validate that the latest syntax in your project is secure. Also, security goes beyond just Node.js. Look into security best practices for other parts of your code. Make sure we explore security API endpoints, package your production bill with best practices like obfuscation, apply dependency security updates, et cetera. We have several courses covering security, so do a search in our library related on this subject, and you'll find a few courses to help you improve your skills. Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[OWASP]] (2)
> **CLI Commands:** node (2), make (2), find (1)
> **Env Vars:** owasp (2), api (1)
> **File Paths:** node.js (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- Web Development
- Application Security
- Node.js
- Back-End Web Development

## Path Context

### In [[Advance your Node.js Skills]]
**1 of 8** | [[Node.js- Design Patterns]] →

### In [[Explore App Development with the MERN Stack]]
← [[React- Securing Applications]] | **10 of 13** | [[Node.js- Securing RESTful APIs]] →

## Appears In

- [[Advance your Node.js Skills]]
- [[Explore App Development with the MERN Stack]]

## Related Courses

_Courses sharing skills:_

- [[Build a Document Search Assistant with Node and OpenAI's Assistants API]] — Web Development, Node.js
- [[End-to-End JavaScript Testing with Cypress.io]] — Web Development
- [[WordPress Essential Training]] — Back-End Web Development
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Application Security
- [[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]] — Application Security

---

[↑ Back to top](#)