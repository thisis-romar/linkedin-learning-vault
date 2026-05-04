---
type: course
cssclasses:
  - lle-course
slug: programming-foundations-secure-coding-2018
url: "https://www.linkedin.com/learning/programming-foundations-secure-coding-2018"
duration_minutes: 156
duration: 2h 36m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHz_x3XQit9Gw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665661027?e=2147483647&amp;v=beta&amp;t=vJbz7MiTx8N0DalQyWnlCRE2Xdyu_GnLxTdQp3WQz7k"
linkedin_topic: Software Development
learning_paths:
  - '[Become a Programmer- Foundations](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Programmer-%20Foundations.md)'
prev_courses:
  - '[Programming Foundations- APIs and Web Services](Programming%20Foundations-%20APIs%20and%20Web%20Services.md)'
next_courses:
  - '[Programming Foundations- Test-Driven Development](Programming%20Foundations-%20Test-Driven%20Development.md)'
path_nav: '[{"path":"Become a Programmer- Foundations","position":10,"total":12,"prev":"Programming Foundations- APIs and Web Services","next":"Programming Foundations- Test-Driven Development"}]'
path_count: 1
tags:
  - course
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations-%20Secure%20Coding%20(2018).md)

![Programming Foundations: Secure Coding (2018)](https://media.licdn.com/dms/image/v2/C4E0DAQHz_x3XQit9Gw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665661027?e=2147483647&amp;v=beta&amp;t=vJbz7MiTx8N0DalQyWnlCRE2Xdyu_GnLxTdQp3WQz7k)

# Programming Foundations: Secure Coding (2018)

> Learn how to incorporate security into the software development life cycle. Move security into your design and build phases by identifying common insecure code issues and embracing the mindset of a security professional. In this course, security architect Frank Moley provides a basic understanding of secure coding practices. Learn how to understand your attackers and risks and mitigate issues at c

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018) | 2h 36m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Implement secure code with your team](#implement-secure-code-with-your-team)
  - [What you need to know](#what-you-need-to-know)
- [**1. Security and Risk Overview**](#1-security-and-risk-overview) (5 videos)
  - [The goal of secure coding](#the-goal-of-secure-coding)
  - [Understand an attacker](#understand-an-attacker)
  - [Break what you build](#break-what-you-build)
  - [Understand your risks](#understand-your-risks)
  - [Document what you understand](#document-what-you-understand)
- [**2. Web Client Server Interaction Code Issues**](#2-web-client-server-interaction-code-issues) (3 videos)
  - [Input validation issues](#input-validation-issues)
  - [Communication channel issues](#communication-channel-issues)
  - [Session management issues](#session-management-issues)
- [**3. Thick App and Client-Server Interaction Issues**](#3-thick-app-and-client-server-interaction-issues) (8 videos)
  - [Error handling issues](#error-handling-issues)
  - [Logging and output issues](#logging-and-output-issues)
  - [Internal data management issues](#internal-data-management-issues)
  - [Configuration issues](#configuration-issues)
  - [Database issues](#database-issues)
  - [File and I/O issues](#file-and-io-issues)
  - [Memory management issues](#memory-management-issues)
  - [Dependency issues](#dependency-issues)
- [**4. Crypto and Security Misuse Issues**](#4-crypto-and-security-misuse-issues) (3 videos)
  - [Authentication and password issues](#authentication-and-password-issues)
  - [Authorization and access control issues](#authorization-and-access-control-issues)
  - [Cryptography issues](#cryptography-issues)
- [**5. Security in the SDLC**](#5-security-in-the-sdlc) (5 videos)
  - [Embrace security in design](#embrace-security-in-design)
  - [Embrace security in development](#embrace-security-in-development)
  - [Embrace security in testing](#embrace-security-in-testing)
  - [Embrace security in deployment](#embrace-security-in-deployment)
  - [Implement best practices](#implement-best-practices)
- [**Glossaries**](#glossaries) (0 videos)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Implement secure code with your team](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=1)** - You'll find an interesting trend in the security industry, the recurrence of the same flaws over and over again. Public disclosure of security flaws and the theft or leaking of sensitive data continues to make the national news. With some basic knowledge, a little dedication, and a company culture that embraces security, many of these issues can be preventable. This course is designed to provide you with some of the basic knowledge of [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md). My goal is to arm you with the knowledge so that you can capitalize on this information, protect your systems, and prevent the trend of recurring flaws. Hi, my name is Frank Moley. I'm a software, technology, and security developer and architect. I've built security programs for organizations and seen how adding security into [agile](../../Skills/DevOps/Agile%20Development.md) processes can improve team attitudes and understanding, as well as help you have a better security posture. I invite you to join me on my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course about secure coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) (2), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - you (1)

#### [What you need to know](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=0)** - If you're a professional software developer, or looking to enter into this crazy chaos that is [Software Development](../../Topics/Software%20Development.md), then this course is for you. The consistent theme in this industry is that nothing is consistent. As such, we need to be perpetual students. The only thing I expect you to be armed with is a knowledge of how to write software in some capacity. I don't care about which language you use, or what platform you deploy your code to, but you must understand that some languages are susceptible to one kind of attack while others can be prone to other attacks. That is the nature of languages in general. They all have their advantages and disadvantages. Platforms work in the same way. A web platform for instance has very different attack vectors than the [Embedded Software](../../Skills/Software%20Development/Embedded%20Software.md) on an [IoT](../../Glossary/Concept/IoT.md) device. Neither is secure or insecure in its own right. It's a matter of handling the challenges that you're presented with in your given situation. In order to do that you need to understand they're risks and work from there. As you watch this course, I expect you to take the knowledge of the language and platforms you use and apply them to make your code more secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1), [Embedded Software](../../Skills/Software%20Development/Embedded%20Software.md) (1), [IoT](../../Glossary/Concept/IoT.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - if (1)


### 1. Security and Risk Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [The goal of secure coding](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=1)** - Part of being a good developer is understanding what you need to learn and what you need to stay up to date on. So I want to talk about how this course will prepare you for the day-to-day operations as a developer. Please keep in mind that this course will not make you all knowledgeable about writing secure code. This course is aimed at giving you the information and support that you need to write more secure code. In fact, this is one of my primary goals for you. There is no way to say you are a secure developer. What I want you to take away is the ability to be called a security-minded developer. Another goal is to prepare you to be the champion for security practices on your team. What I've found in both my personal experiences around security and through discussions with others is that for a team to really embrace any sort of culture of security, you need a champion. Now, this champion can come from anywhere in the team. But in my opinion, the single most effective place for a champion is within the ranks of development. Right or wrong, developers tend to listen to other developers more than anyone else on the team. In addition, forcing culture on a team seldom works. This is why I believe the developer
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=96)** is the single most effective person on the team. They are listened to and they can be the grassroots driver of change. The third goal that I have is that you become a more effective reviewer. This may sound strange at first, but if you work on a development team, you can only write a portion of the code on your team. So while you may be great at writing code that is more secure, your personal impact in the overall code base is smaller than that of the whole team. In most teams, several developers are part of the [Code Review](../../Skills/Software%20Development/Code%20Review.md) or pull request. So your impact can be dramatically increased by simply being engaged in code reviews from a security perspective. Now, if you're not a developer, you may wonder what value this course can have for you. If you are a development manager, you need to understand what your team is doing, what your team is spending time on, and what risks they are trying to resolve. If you're a project manager or a [Scrum](../../Skills/DevOps/Scrum.md) leader, you also need to know why a development task may take longer because of the security concerns. And if you are a [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md) or quality control person for a team, you can leverage this knowledge of exploits and attack vectors to write more effective tests. And that's the ultimate challenge,
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=192)** realizing that security has a place for everyone on the development team and embracing it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Code Review](../../Skills/Software%20Development/Code%20Review.md) (1), [Scrum](../../Skills/DevOps/Scrum.md) (1), [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md) (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - part (1)

#### [Understand an attacker](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=1)** - The mind of an attacker or bad actor is foreign to many software developers. We spent our lives building things that we hope makes the world a better price. I know that is kind of cliche, but the reality is most of us really want to write code that improves our business or engages our passion. As such, we are builders and makers. An attacker, however, has a very different mindset. They want to tear down what you have built. Now, their motivations can be all over the place, and while it is important to understand these motivations, the simple fact that they want to tear down what we build is very hard for many developers to grasp. So part of writing secure code is understanding the mindset of the attacker. The first component is looking at why they want to break your code. Now, the reasons can be as many as the stars in the sky, but each attacker has a reason. Most attacks we hear about seem to be financial in purpose, but attacks happen for other reasons, things like political motivations, revenge, or building credit with other bad actors, to name a few. I have seen attacks happen because people want to build a reputation as a security tester. While I'm not a fan of this type of extortion,
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=96)** it currently is a reason why people are attacking systems. Now, regardless of the why, it's very beneficial to figure out all of the possible attack reasons. This why is critical because once you know why attackers might disrupt your application, you can start looking at the possible exploits that could exist in your system. This is really the heart of understanding the attacker. As a developer, truly understanding an attacker is one of the most difficult challenges in my opinion. But once you start recognizing the mindset of an attacker, it opens up a wealth of new ways to protect your system. For instance, understanding motivations allows you to look at an attack vector in your application by thinking through the lens of the attacker. Once you collect this information, you can start building an attack tree. The attack tree allows you to build scenarios based on probable attacks. With these scenarios, you can determine where you need to add testing, increase threat detection, or apply mitigating controls. Getting into the mindset of the attacker can be a huge undertaking. However, it can reap significant rewards to your organizations.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - the (1)

#### [Break what you build](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=1)** - As developers, our general strength lies in building systems. A huge part of the problem in [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) is that we are builders. So we need to change our mindset a little in order to truly be effective as a secure coder. Developers interested in proving their security footprint need to develop the skill of breaking code. Now I'm not going to argue that you should be an expert penetration tester, but there is real value in learning the basics of attacking systems. Now some developers may want to go deep and learn how to write exploit attacks. And while this can be an amazing skill, it's over the top of what you really need to do in my opinion. The fact is that there are several really great tools on the market that allow you to attack your code without a lot of extended learning. The value of using these tools is that you can start looking at actual exploits in your code. By breaking your code, you can gain many valuable insights into your application. You will see how data is accessed and used. You will see how logging output is generated and eventually consumed. It becomes a natural learning exercise that will increase your knowledge of the code base as a whole. One of the biggest benefits of learning to break software
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=97)** is that you get to interact with security professionals. This is powerful when you consider how important collaboration is for a development team. Constructive collaboration with team members can never be discounted. Constructive collaboration with security teams can be even more valuable for today's development teams. This concept of [DevSecOps](../../Skills/DevOps/DevSecOps.md) really is about bringing security into your development process the same way that we brought operations into our processes for [DevOps](../../Topics/DevOps.md). Everyone on the team learns and becomes responsible for the security footprint of the application. Once developers understand how to break software and start to have more constructive conversations with security professionals, the entire team benefits. You will hopefully see faster turnaround on bug fixes and better testing as the knowledge base grows on your team. Another advantage from learning to break software is that if you know how to break software, you are prepared to fix your software or better yet prevent security defects to begin with. This skill of breaking software can create a culture of secure coding. Now I encourage you as a developer
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=189)** to take time to learn the basics and you will find amazing results in how you and your team approach security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) (2), [DevSecOps](../../Skills/DevOps/DevSecOps.md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - as (1)

#### [Understand your risks](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=0)** - One of the core tenets of security especially in a [Software Development](../../Topics/Software%20Development.md) shop is understanding and mitigating your risks. An entire course could be devoted to risk management for software teams. But for this course, let's take a quick look at the basics. While I would like to convince you that you should test every possible scenario on every release, the reality is that this isn't possible in most businesses. There just isn't enough time in the day to write or execute every test. If you could write them all, execution then becomes an issue for most teams as long build and development cycles are really an anti-pattern in today's processes. To address this problem, focus on the high-risk areas and determine where to get the most reward. You'll see an immediate value from automating the mitigations and testing for these high-risk areas on each release. You will have immediate feedback to your team and stakeholders that the software you are delivering is not exposing you to these risks or at the very least not increasing your exposure. Understanding risk isn't only about testing them. If a software development team can identify the risks earlier in the process,
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=96)** more emphasis can be applied to requirements, design, and development. In software development, we've repeatedly learned that cost savings of fixing issues earlier in the process is significant. While the team engages in understanding risks together, the awareness of these risks penetrates every job function. When you truly incorporate this model of identifying risks early in your development process, your entire team, your project, and your budget benefit. Imagine for a moment you're a developer who understands the risk exposure of your application. You can then question requirements and evaluate design decisions that include these risks. More importantly, armed with knowledge of [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) and risks, you can provide more tangible feedback on code reviews. Understanding your risk is not static however. Risk must constantly be evaluated and updated to match not only the changes in your functionality, but also the changes in the environment around you. Everyday, new attacks are discovered, new reasons for being attacked develop, and new information is obtained. My suggestion is to leverage a portion of your regular planning sessions
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=189)** to discuss these new risks and do it as a team and apply these changes to your risk register. Always keep in mind that the goal of secure coding is not just about the bytes. It's an overall culture that you're trying to create. Understanding risks moves you closer to improving the security culture in your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (3), [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) (2)
> **Cross-References:** earlier in (2)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - one (1)

#### [Document what you understand](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=1)** - Documenting your designs, documenting your APIs, and documenting your code are all built into a team's development process. What usually isn't part of the process is documenting all of the security decisions you have made. Now, I know, I know, I've heard all the excuses in the book about documentation. Heck, I've used many of them myself. I've heard documentation is dead the minute it's written, or documentation is never read, or that it's too hard to find the answers you really need. The point is, though, that regardless of the excuses, there is value in documentation especially in the security realm, as you will see. One of the first things that you should document even if only on Post-it Notes is how are going to deal with security-related bugs found in production. Now, I won't argue that you need a full-blown vulnerability management plan, you do, but that's for another course. You do, however, at least need to have a plan to prioritize and fix production security bugs and route them through your development process. This document can be very useful when a really bad bug or an industry scare shows its ugly head. You will be better prepared to move the fix quickly to production and protect your company and your customers.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=96)** You should also document your risks in a risk register. The purpose of this is to not only document the risks that are in the application, but the ways you plan to mitigate those risks. This can be very valuable to a team when trying to determine where the risks are in your application during a planning session or design review. Having risks documented gives you the foundation when it's time to reevaluate your risks. I also believe in documenting your risk mitigation and testing strategy. This can be easily incorporated into your definition-of-done statement, assuming, of course, that you want [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) to be part of that definition. There are a couple of other areas of documentation that I feel are so important that they're worth mentioning here. One is documenting your security bugs. Now, this is beyond just production bugs that are usually tracked in your issue tracking system. This document should be in the form of a bug book. As you're either fixing or identifying an issue, no matter the phase, you should document it in your bug book. This bug book can be reviewed at team meetings as training tools. Now, be careful not to make this a blame game. Instead, make it an educational tool.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=192)** You may find that your developers can learn from each other's mistakes. The other is documenting traceability between your automated tests and the risk that they address. Now, this documentation should be in the form of a common naming pattern for your tests themselves. On reason to do this is that as you evaluate your risks and make changes, you know immediately which tests you need to address, whether it's an update, a rewrite, or a flat out removal from the test suite. Another reason is that this will prevent regression of security bugs. These can be especially nasty from a publicity perspective to have that same bug identified multiple times. Now, this is just a glance at documentation, but I do hope it gives you a solid perspective into the needs of documenting your security stance and the value around it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) (1)
> **CLI Commands:** make (3), find (2)
> **Warnings:** be careful (1)
> **Speakers:** - documenting (1)


### 2. Web Client Server Interaction Code Issues

[↑ Back to Table of Contents](#table-of-contents)

#### [Input validation issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=0)** - One of the most repetitive security issues we find in [Software Development](../../Topics/Software%20Development.md) today is input validation bugs. With input validation issues exist in many different contexts. We are going to focus on the client server input validation issues and how to possibly address them. Let's get started by talking about the attack vectors at play. Injection attacks are one of the most common and most publicized exploits, not just in the input validation arena but globally. Often when we think about injection attacks we are talking about [SQL](../../Skills/Data%20Science/SQL.md) injection. But there are several other types. In fact, anything that is interpreted can be subject to an injection attack. The concept is rather simple. A structured statement is created, then anticipates user input to complete that statement before it is run through an interpreter. For example, in SQL we could write a statement that is something like SELECT star from users WHERE username equals some value. Now at run time we take user input and simply concatenate the statement before execution. If an attacker can find this scenario, they can provide input that not only completes this statement, but also executes a new statement
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=94)** by simply adding a semicolon. This provides the attacker more information about the system than the developer ever intended. Scripting attacks are another very common attack based on lack of proper input validation. The most common, and continually on the [OWASP](../../Skills/Cybersecurity/OWASP.md) Top Ten, is cross-site scripting, or XSS attacks. The concept again is rather simple. The attacker injects a script through a user input field or some other post or put method. That script is then served to a victim through his or her browser. The script is then rendered in the client browser of the victim and the exploit is executed. Often these scripts send data of some kind back to the attacker's server. So what I just described is called a persistent cross-site scripting attack. However, there are a couple other types. Reflected cross-site scripting is often used in [Phishing](../../Skills/Software%20Development/Phishing.md) attacks, where the malicious script actually originates in the request. There are also exploits in the dom that can be attacked. All of these exploits are based on lack of input validation. While these attacks can be nasty, the fixes for them are relatively straightforward. One approach is to require validation of all user input.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=194)** One such validation technique is called blacklisting. Blacklists look for key patterns like script tags and filter the input out. Blacklisting is often one of the first attempts, but they tend to be easy to circumvent and should not be used alone. Another validation technique is whitelisting. And it's much more effective than blacklisting. Whitelisting looks at the pattern that the data should have, such as length or symbols, and requires that the data matches that pattern before it's ever accepted. For instance, an email address must contain the at symbol and end with a dot and a valid top-level domain. In either case, the validation should always be applied server side and be the first thing executed. Now you can apply validations client side to save the server call, but it still must be executed server side. The reason is that you could always post back to the server without the actual webpage. So never rely only on client side input validation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **Env Vars:** sql (2), select (1), where (1), owasp (1), xss (1)
> **Analogies:** for example (1), such as (1), for instance (1)
> **CLI Commands:** find (2)
> **SQL:** select (1), where (1)
> **Definitions:** is called (2)
> **Speakers:** - one (1)

#### [Communication channel issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=1)** - In a client server architecture there is always a risk of a security vulnerability existing in the communication channel between the two systems. Because of the way TCPIP works, these communication channels are potential hotspots for attackers to exploit. The most common communication channel attack is the theft of sensitive information on the wire. An attacker who can gain access to the network of either the client or the server can potentially steal the information on that channel. Many businesses, for instance, provide free [wifi](../../Glossary/Standard/Wi-Fi.md), which is left open and unencrypted. This can become a hot bed of theft and your development team needs to proactively protect your customer. Unfortunately some users may set their devices to always trust and connect to public wifi systems, making the ability to spoof these SSIDs an attack vector. A spoofing attack is actually simple to prevent through the use of proper transport layer security, or TLS, because the attacker has to man in the middle TLS connections to steal the data, and your user will see browser warnings in this case. TLS is sometimes mistakenly referred to as SSL,
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=99)** or secure sockets layer. While they both serve as a cryptographic protocol that provides authentication and encryption between systems, the fact is that SSL has been deprecated and replaced by TLS. To set up TLS connections a valid certificate is signed by a trusted certificate authority. The certificate must be installed on the server side. The communication channel itself must be a secure one. Therefore, it's always a good practice to redirect all traffic from HTTP to HTTPS. If you choose to only accept HTTPS connections, you may frustrate your users. Always remember that if your security makes your site unusable it becomes ineffective. It is also important that your certificates are valid, trusted, and not expired. Tools like open SSL make this validation easy. In addition, you can build up processes to manage your certificates on a regular basis. Now when you control the actual code on the client side of the connection, you should always validate the certificate. This includes not only checking that it is a valid certificate but that it has not expired or been revoked. Each language and framework has tools
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=194)** around not only making TLS connections but doing the validation. Often developers skip that validation part. So make sure that you don't. This extra overhead is worth it, because if a certificate becomes compromised you have a way of protecting the client system from accepting a bad connection. Which again can cause a leak of sensitive data. Using secure communication channels wherever possible will dramatically increase the overall security on your systems, as well as improve your SEO results, since most of them weigh TLS connections heavier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (2)
> **Env Vars:** tls (7), ssl (3), https (2), tcpip (1), http (1)
> **CLI Commands:** make (2)
> **Best Practices:** good practice (1), you should always (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### [Session management issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=1)** - Session management vulnerabilities are associated with web application based client server systems. Let's take a look at the vulnerabilities and mitigations in this context. To understand session management issues, first let's look at how HTTP works. HTTP is a stateless protocol which means there is no user data or other information stored between requests in the web server. In a pure stateless HTTP system, each and every request is independent of every other request, even if it's the same user with the same browser in the same browsing session. Some developers feel the need to maintain some sort of state for the user leading to the creation of the session. The session is usually initiated by some event on the website. Authentication is usually that event that starts the session and generates the unique token. The server shares that token with the client through a cookie. Now every subsequent request from the client to the server will send that cookie and the token it contains. The server can then use the token in that cookie to look up the session state data. The vulnerability that can exploit this process
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=94)** is called session hijacking. Session hijacking works by using the session's [Tokens](../../Skills/Web%20Development/Tokens.md) which are often created using random numbers. If the random number generator isn't secure, a bad actor can simply predict the value of the session identifier for a user. Once they can predict the pattern through an algorithm, they can generate a seed session and use it to grab the next user's session. If you find yourself creating tokens for sessions, you must verify that you are using a secure random number generator. Most languages have a general random or pseudo random number generator and a secure one. Always use the secure generator. Lack of communication channel protection can increase session management risks. If you don't mark the session token cookie to be secure, it may be passed over HTTP instead of HTTPS. Another issue is when you create the session on first visit but don't create a new session when the user logs in. A session fixation attack can occur as the pre authentication session token would now point to an authenticated session. Anyone who grabbed the session on plain HTTP traffic could use it once you log in
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=190)** even though that communication is now over HTTPS with the secure flag now on the cookie between the real user and the server. Session creation isn't the only weak point. Session termination also exposes potential risks. A developer must ensure that when the use logs out the session is invalidated. If not, the session token can still be stolen and used by a bad actor even if the user is no longer interacting with the system. Likewise, sessions should expire after some period of inactivity. If the user leaves the browser open but is no longer using the site, there's a risk of the token being stolen and used by someone else. In such cases, developers should provide timeouts for inactive sessions to protect the user. While this may frustrate a user to see the timeout, they are more secure when we destroy the session. Just be open to iterating on the timeout value to keep your users as happy as possible while still being secure. Very rarely do users actually log out of sites. Instead, they just close their browsers therefore their sessions remain active and can be stolen. A developer should invalidate the session when the browser closes
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=283)** to ensure the session cannot be stolen. Now we don't always use sessions in [Web Development](../../Topics/Web%20Development.md) but when we do, we need to be aware of the risks. Protecting users in these situations isn't hard but you have to think about the risks and make a global plan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Web Development](../../Topics/Web%20Development.md) (1)
> **Env Vars:** http (5), https (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), is called (1)
> **Warnings:** be aware (1)
> **Speakers:** - session (1)


### 3. Thick App and Client-Server Interaction Issues

[↑ Back to Table of Contents](#table-of-contents)

#### [Error handling issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=0)** - Error handling is an important part of [Application Development](../../Skills/Software%20Development/Application%20Development.md). It allows the developer to prevent the application from abnormal termination while also providing a great place for troubleshooting break points when issues do arise. What makes it powerful for developers also makes it attractive for bad actors. One of the most frequent vulnerabilities comes from information disclosure through error messaging. In these vulnerabilities the application raises an error that produces an error status. This error status usually results in a message or a redirect in the web world. The vulnerability arises when that error message discloses information such as a stack trace or a database dump. This information can be very valuable for an attacker trying to gain entry to your system. Even the disclosure of your internal error codes can be used to attack your system. Even how you raise an error can provide an attack point. One of the most common issues that I have seen in applications of every type is in user authentication flows. Often, developers provide different error messages if the user doesn't exist versus the wrong password was entered. This level of disclosure can provide
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=93)** a bad actor a brute force vector into your system. All of these situations are easy to prevent. We must first accept that error conditions will always exist. We need them to exist on our applications for flow control and to protect us from crashing. The fix isn't to prevent the errors, it's to accept them and make conscious decisions about what information we display. In either error case from our previous example, the developer should only disclose that the situation exists, not which case we're in. The language should be consistent so a valid user can take appropriate action, but a bad actor won't be given too much information. It takes some time to get good at using consistent language, but often it is just a matter of taking the time to document the messages. Review the textual display and make sure that errors don't disclose internal system information. Also, ensure that they don't display information about your users to attackers. Code reviews and documentation can help a bunch in these cases, but an even better model is to actually test your error states. When you do so, you can provide guidance through the test
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=185)** about what text should be displayed and what shouldn't be. This can also be a great exercise to ensure your error messages are consistent, valuable, and don't disclose sensitive information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - error (1)

#### [Logging and output issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=1)** - We discussed issues with disclosure through error handling and in a similar vein, it's possible to expose too much information in our log messages and system output. We will start with log information because it is much easier to inadvertently cause issues in how you write log messages. There are two classes of vulnerability in log messages. The first is exposure of too much of your internal workings and the second is too much information about your user. When you write log messages often you are providing detailed information about what is actually happening in your system. This data can be critical when issues arise whether they're security focused or operational in nature. But log messages can also provide too much information, making your log aggregations an attack point. Events are one of the things you should always log whether they are user events of system events such as authentication or task completions. You should also always log errors, especially in controls that are designed to prevent attacks against your system such as input and output validation errors. Session events are also a great place to provide detailed logging specifically on creation, reanimation, or destruction.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=95)** In addition, you need general application flow and connection details in your logs for operations. While these things should appear in your log messages, there are several things that should never appear. Credentials and connection strings for backing services like [Databases](../../Skills/Software%20Development/Databases.md) should never be logged. [Tokens](../../Skills/Web%20Development/Tokens.md) for sessions or specific events likewise have no place in your logs. Encryption operations and keys as well as user passwords also fall into this category. Sensitive personal information like email addresses shouldn't be in logs in plain text. If this information can be useful in troubleshooting, it belongs in the logs. However, it should be hashed using a secure cryptographic hash and then the hash is what should be logged. That way you could recreate the hash for troubleshooting but not the reverse. If the information has no value in troubleshooting, it shouldn't be in the logs. One useful strategy for logging is to provide a set of methods that write to the logs instead of directly calling the logging APIs. This allows you to provide uniformity and proper sanitization of the log data to protect the system and the users all while promoting good security and operational behavior.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=191)** Application output also needs to be inspected. System output should be validated just like user input to ensure that you are not creating risk to other systems that may be downstream. Data should be filtered and sanitized so that the user sees what they need to but not so much that an attacker could use it as an exploit. Since many systems are used by both users and other systems, the output can expose other vulnerabilities and should be treated as something to be protected. These vulnerabilities really come down to disclosing enough information to help you do your job but not so much that you become the attack point. It's a fine line but one that a collaborating team can solve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Analogies:** such as (2), just like (1)
> **Cross-References:** we discussed (1)
> **Best Practices:** you should always (1)
> **Speakers:** - we (1)

#### [Internal data management issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=1)** - There are often many data points an application needs in order to operate successfully. These data points can be as simple as URLs and other resources and as complex as encryption keys. While this data is needed for applications to operate, in the wrong hands, they can be treacherous to a system. Let's start our discussion with a common use case and that is connecting to a remote service. Usually, to connect to a remote service, you need to store the URL of that service along with the credentials or [Tokens](../../Skills/Web%20Development/Tokens.md) needed to consume that service. That information is needed by your application at runtime. Serving that data at runtime can be the challenge. The attack vector associated with this should be relatively straightforward. If you expose the data you need for your system to operate, the attacker can then use that same data to mimic you to your backend service. The attacker can then use the mimic behavior to manipulate the backend service and either exploit it or cause it to make your system exploitable. Solving these problems are actually very straightforward. One way to help solve these issues is through a secret storage service. Your system needs a way to securely authenticate to the service, so you still need
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=95)** to protect that data point. Then, it can get the data it needs to operate at runtime. These tools are powerful for your application, because many of them also provide ways to rotate your credentials. Another key takeaway to prevent vulnerabilities related to [Data Management](../../Skills/Software%20Development/Data%20Management.md) is to ensure developers never commit sensitive information to source control. Even non-prod systems can provide an attack vector into your application or your system as a whole, so no sensitive information should ever be checked into the software [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) or SCM. Finally, you should consider using certificates for your systems where there is a client/server component. Two-way certificate pinning allows your client to both authenticate with the server side but also to ensure the validity of the server side. This protects the internal data of both systems. This, coupled with secure client-side storage and digitally signed software updates will allow you to protect the data your application needs, its connections to the source systems, and help ensure valid traffic flows. Again, we find that much like other vulnerabilities, these can be mitigated with a little common sense, but we have to understand that the issues exist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** url (1), scm (1)
> **Definitions:** is a  (1)
> **Speakers:** - there (1)

#### [Configuration issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=1)** - A somewhat common theme should be identified by this point. We find that in many cases the process that make running, deploying and troubleshooting an application much easier can also be used to exploit an application. Configuration of our application is another such case. So what is configuration? To SANS for instance, secure configurations apply to the systems and servers. It's the software and operating systems the machines are running on. It's definitely critical to keep systems patched. But from a development perspective, this isn't configuration. When I talk about securing your configuration, I'm referring to the feature flags, options, and other data elements that your application needs to run, but they can be optionally configured at startup or runtime. Many times as developers, we want to soft rollout of features through the use of feature flags, or provide ways to put the application into a higher state of logging. Inherently, these features are not bad on their own, however they can expose the system. For instance, if you're developing a feature and want to roll it out to beta testers that you trust, you may put a feature flag in place.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=94)** Your beta testers have the documentation to turn that feature on. But you acknowledge that it may still have bugs. If those bugs expose the system to attack, compromise, or some other vulnerability, you have now exposed that application. Likewise, if you expose backing service URLs through configuration that can be modified by the user, or worse an attacker, you can trick the application into exposing information by simply changing the URL. Mitigating these attacks is actually relatively easy. First off, consider packaging beta versions of your software separately and deliver them to your trusted beta testers directly. This will reduce the risk of feature flags exposing software that isn't ready for primetime. Also be careful of what functionality you expose through configuration. If the configuration exposes where sensitive information or application information goes, or how it is exposed, reconsider how that configuration is set. If an attacker can identify how to modify the level, type, or location of this information, they can use it to expose details of your system, or your users.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=187)** Consider data in the database, such as preferences as well. In a thick application where the database is embedded or on the local file system, preferences act as raw configuration flags. Attackers can manipulate this data to expose an attack vector into your application stack. One final place to consider configuration is in your runtime itself. For instance, if you are using an application server to run your application, it's default configuration will most likely expose too much information about your application. You should apply best practices from organizations like [OWASP](../../Skills/Cybersecurity/OWASP.md) when configuring your runtime to prevent information disclosure that could be used to attack your application. Once again, it comes down to common sense. Only expose options you need to expose. Don't rely on configuration for handling sensitive flows and processes. Protect your internal processes, especially sensitive ones. And don't flex their behavior based on configuration or preferences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (1)
> **Analogies:** for instance (3), such as (1)
> **Env Vars:** sans (1), url (1), owasp (1)
> **CLI Commands:** find (1), make (1)
> **Documentation:** the documentation (1)
> **Warnings:** be careful (1)
> **Speakers:** - a (1)

#### [Database issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=1)** - We talked about a couple of the potential issues with [Databases](../../Skills/Software%20Development/Databases.md) from other perspectives, but databases and other backing services are used in multiple ways in targeted attacks. Let's start our discussion once again with [SQL](../../Skills/Data%20Science/SQL.md) injection attacks. I mentioned these attacks when we discussed user input validation and indeed that is a good mitigation for these attacks. Another good mitigation is the frameworks and strategies that we use to connect to databases. SQL statements should include bind variables and parameters. Now, you can write full statements or use bind variables. Creating full statements is susceptible to injection attacks because those statements are often concatenated with user input strings like in our previous example. But, when you use bind variables and parameters, you remove that risk because of how the drivers will create the statement for you and escape the dangerous behavior. Using a bind variable allows you to place a variable in the statement where you expect the user input to be added. For instance, select star from user, where username equals some bind variable. Then, we will execute the statement by passing a parameter for a bind variable from the validated user input. This strategy dramatically reduces any risk
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=97)** of injection attacks. Databases have other issues and one goes back to Secure communication channels. Often, database connection strings are performed using plain text communication channels. If you own the database client code, its runtime, the network, and the database system, and all of the [Hardware](../../Topics/Hardware.md) involved, you may be tempted to think you aren't at risk. We must, however, consider that all too often the internal user is the most dangerous attacker in a company. The proper way to connect to [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) is through secured channels. Most, if not all databases, allow for encrypted communication between the client and the server. Yes, there is more configuration for both the DBA and the developer, but not having a way for someone to sniff the traffic on the line is worth it. If an attacker comes from the inside, they can simply sniff the line instead of attacking the application itself. As a developer, you must ensure you are only using secured connections to databases. Databases also often contain sensitive information. Now, disk level, or table level encryption of the database does offer some value.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=190)** But, they really don't protect the data in the database. The only way to truly protect the data from an attacker is through the use of application level encryption. If the application itself is handling the encryption, assuming cryptal operations are being done correctly, then you know that you're providing the best protection to the underlying data from a potential attacker. Databases are valuable to developers for many clear reasons. And as such they are great targets for attackers. Consider this when you interact with databases and apply some good practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (9), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Hardware](../../Topics/Hardware.md) (1), [Database Systems](../../Skills/Software%20Development/Database%20Systems.md) (1)
> **Env Vars:** sql (2), dba (1)
> **Cross-References:** we talked about (1), we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - we (1)

#### [File and I/O issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=1)** - The file system can be a dangerous place for applications, and bad actors love to leverage it to find exploits. Attacks of the file system can be relatively easy to exploit, because it's a great learning arena for new attackers. Furthermore, the results can be devastating to the systems. As we look at the risk management flow, the ease of attack in conjunction with the damage potential, should yield a clear need to take these seriously. There are several areas we need to focus on with file systems and file input and output. The first we will discuss is often more infrastructure focused, but in a [DevOps](../../Topics/DevOps.md) world, the line is very blurred. You need to ensure your application is run in a user process that is controlled. You should only provide access to the file system for that user that the application needs in order to run. This is often considered in server side application, especially in the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) world, but the same cannot be said for desktop or mobile applications. While sandboxing environments help, the fact is that the developer still needs to only allow the application to read and write from a finite location on the file system, and the process needs to only have that same access.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=96)** When an application needs to read from the file system, for its behavior, consider using read-only files in these cases. Attackers love to modify files that applications need to operate, in an attempt to exploit the application. By leveraging read-only files or media, the attacker has less opportunity for attack. Another important attack vector is a run file upload. When systems allow file uploads, it becomes an easy way to impact the system as a whole. The first scenario is a system that parses a file that a user uploads. An attacker can inject malicious data that forces data leakage, unexpected operations, or simply cause crashes, making the system unavailable. The situation is worse if the contents are stored on a remote system or database. The mitigation for this attack is one that we have discussed, and that is input validation. The system should not trust the data in the file without first inspecting it for malicious behavior, based on how the data is consumed. Another scenario is infected file upload. While this generally is an infrastructure concern, developers need to be aware of the scenario in order to engage the infrastructure teams. The attack is again easy to exploit.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=193)** The system allows file upload, so the attacker embeds some form of malware into that upload. The fix for this is as simple as providing a sandboxed area for intermediate uploads. The upload process should write the file, and then trigger a malware scan. Once the file is determined clean, another process can move it to its final location, and so our theme continues. Never trust what your users provide you. Provide as much isolation as you can, and never provide more trust than is absolutely necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Warnings:** be aware (1)
> **Speakers:** - the (1)

#### [Memory management issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=1)** - [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) vulnerabilities are a very special class in that they're only exposed in certain languages and certain situations. The most common and the one that I will focus on is the buffer overflow attack. I want to start by providing a clear indication of how bad buffer overflow vulnerabilities are. There are several yearly contests that result in large sums of prize money for security researchers that compromise systems, often called rooting. Some of the most profitable vulnerabilities are called Zero Days are a result of buffer overflow attacks. These attacks are catastrophic and can be expensive to say the least and unfortunately are hard for those developers who deal with higher level languages to see or understand. In higher level languages, for instance, we seldom deal with raw memory allocations. Even in languages like Go, [Java](../../Skills/Software%20Development/Java.md) and C#, where we have pointers, we're not usually able to manipulate raw memory without dipping into unsafe code. As such, these languages are usually safe from these errors. There are lessons to be learned, however, from those of us that use these higher level languages. So, I encourage you to to listen and find parallels in how you deal with [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) in your code.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=96)** In lower level languages like C for instance, you are dealing with arrays and pointers to them. And ultimately the memory allocated to them. As such, you are now fully responsible for checking the bounds of the array and here enters the problem. Let's say, for instance, you declare two variables. The first is a character array of say 10 bytes and the second is an unsigned integer of say four bytes. They happen to be next to each other in memory. Now, you have a program that asks for input and stores that value into the first array. You expect no more than nine characters in your response, however, you don't check the length of the input, you just write it to the variable. If an attacker writes a value that is say 13 characters in size, it will overwrite the four bytes of the integer with the last one being a stop byte. Now, if your program then accesses the unsigned integer, and the attacker has done his or her homework, the program may execute other instruction sets often at the command of the attacker through user input or exception flows. Now, some exploitations can impact the stack, others can impact the heap but both can be leveraged in specific cases
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=190)** and neither is pretty. There are a couple of mitigations that you can put in place but really there's only one fix. One of the mitigations is to randomize your memory allocations so that the likelihood of memory spaces touching is decreased but this is nowhere near perfect. The same can be said for various protections for pointers, executable space or stack alteration. Again, while this protection strategy can be good mitigation for legacy code, it is not foolproof. The best way to protect against these attacks is actually a three-fold approach. The first is to use when available native protections in your development language. In addition, you should validate your inputs to ensure they're within the acceptable bounds and they cannot overflow the buffer. Finally, leveraging a good testing strategy. One thing you should note is that even if you aren't writing code in assembly, C, C++ or Fortran, you may be leveraging components that are. You need to consider this whenever you write code that input and boundary checks are always important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Analogies:** for instance (3)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - memory (1)

#### [Dependency issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=1)** - [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md) is often the bane of software engineering. When it comes to security-related topics, it's even more so of a problem. Many times when we write software, we can write the most secure code ever and still be susceptible to security vulnerabilities because of a dependency. We all know the stories of the old and vulnerable component that caused a system, its data, or worse, all the customer data to become exposed. Some of these leaks have been so bad that they put a large portion of the population at risk for credit fraud or identity theft. This is something we must always remember when writing software and trying to secure it. So obviously, the exploit is out of our control since we don't own the code. Now, if it's an unpatched defect, we could of course fix it ourselves assuming it is open source code. However, that still is a process. The reality is however, that many of the vulnerabilities have already been discovered. These discoveries are documented and often, they indicate the dependency inversion number that is impacted by the security issue. They also often document when the issue was fixed. As such, the simplest path then, is to upgrade your components to a fixed version.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=95)** Now I don't want to pretend that this is easy from a system level. But as for fixing issues with dependencies, it often resolves the issue. We will assume for the sake of this discussion that nothing new is introduced, which of course, is not always the case. The real question however, is not how to fix these, but instead, how to identify them. There are actually several tools, some free like from [OWASP](../../Skills/Cybersecurity/OWASP.md), that run scans on your bill of materials, or dependency graph, and identify which of your dependencies are actually vulnerable to an attack. Some paid tools even have detailed analysis that provides more information about the attack possibilities. But ultimately, they all point to similar, if not identical [Databases](../../Skills/Software%20Development/Databases.md) of CWEs and CVEs. So your strategy needs to simply be this, stay on top of dependencies, look for problem spots, and address those problems as needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md) (1), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** owasp (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Speakers:** - dependency (1)


### 4. Crypto and Security Misuse Issues

[↑ Back to Table of Contents](#table-of-contents)

#### [Authentication and password issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=0)** - Authentication is not an easy operation when it comes to modern software. On paper, it looks very straightforward. User comes to your site, enters their username and password, and clicks submit. You then evaluate the username and password and determine if this is indeed the correct person and go from there. Simple, right? Well, not so fast. Authentication itself has many security implications. One such attack is an enumeration attack, which we've already discussed. If you provide separate messages when a wrong password is entered, versus when an unknown user enters your system, you are telling an attacker if they have the username correct or not. So, the key here is keep the messaging consistent. Another issue to address is the actual time it takes to perform authentication. This is a case where faster is not better. We're going to talk about cryptographic [Algorithms](../../Skills/Software%20Development/Algorithms.md) in a bit, but know that some hashing algorithms are slower than others, and when it comes to authentication, slow is not a bad thing. Now, when I say slow, we're talking about hundreds of milliseconds slower, not seconds or minutes. The reason for this is because a faster algorithm gives an attacker more operations
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=94)** per unit of time to brute force a password, so the key here is use a good password hashing algorithm. Another issue that just makes the previous two worse is simply allowing password brute force attacks. If you do not provide a maximum number of bad password attempts before you institute a lockout procedure, you're setting your site up to be attacked. Not only will this put your customer data at risk, but you will also be allowing more load on your system than you even should be. The key, here, is having a maximum number of incorrect attempts and storing those failed attempts in a database. Storing this data in a session is not sufficient. So, I want to point out a couple other issues really quickly, because in all honesty, we could go on for days. Never stores your customer's password, encrypted, or worse yet, in plain text. You have zero reason to know, or be able to identify a customer's password. If you can do so, an attacker can as well, if they gain access, so only hash passwords. Also, leverage short-lived unique links for passwords resets.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=190)** Password reset functionality should provide unique [Tokens](../../Skills/Web%20Development/Tokens.md) to customers through their verified email address. You should never provide them a password in a plain text email. You should also never allow anyone from your company to manipulate their passwords or impersonate the customer. Also, like before, consider how you respond to password changes on screen. If you know the user, is the messaging the same, or different, than if you don't know them? A final point that I want to bring up about authentication and passwords is consider the complexity. You would be better served to only use lowercase letters in a password of sufficient size, than a short password with complex rules. The first is easier for the user to memorize, while the latter is next to impossible. While I won't argue that special characters and uppercase letters add to the search space, I will state that an all lowercase, 29 character, dictionary [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) based password would currently take over a trillion years to crack randomly. An eight character password, with symbols, numbers, and mixed case, can take minutes to guess. Authentication issues can arise if you don't take this topic seriously,
>
> **[4:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=284)** which, believe it or not, can be the case. I urge you to really think about authentication and passwords the next time you interact with that part of your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** you should never (1)
> **Speakers:** - authentication (1)

#### [Authorization and access control issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=1)** - Providing authentication for an application is only half the battle. You also need to provide the rules around what that person can access. This is called authorization, and faulty authorization can lead to security defects that often are hard to track down. So let's start with the basics of what issues exist around authorization. Often, defects arise in this arena because we either have access control lists in place, but they aren't applied correctly, or they simply haven't been applied. In either case, a user could get access to resources or data that he or she shouldn't have access to. Consider the use case where your site has a user portion and an administrator portion. If you don't have solid access control lists, your users could access your admin section of your site. This obviously give them more control that they should ever have access to. Now consider that in your admin site, you can see all the demographic and personal details of your customers. Imagine not only the negative publicity your application would receive, but even more importantly, your customers could potentially have their identities stolen. And your site would be responsible. A couple of rules to consider when doing authorization. First off, you should always do authorization checks
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=98)** server-side in a client-server program, and never client-side only. If a user impersonates the client side, and you don't check rules server-side, you will potentially expose protected transactions. In addition, all permission state changes should require logging out, and logging back in. Even your privileged users should have ACLs in place, and not be able to change them in a single session. Often for troubleshooting and support, we put impersonation models in place. But they should only be part of authentication, and the session should be static when it comes to permission models, to help protect from internal threats. Furthermore, each transaction should check the authorization of the user. It should not simply be checked once. This becomes even more critical in [Microservices](../../Skills/Software%20Development/Microservices.md) architectures where the systems are distributed. You should only serve data, or execute transactions, if the principle has the authority to do so. So mitigations for these risks are twofold. First and foremost, you need good controls in place around how you review, and control access within your application. Using code reviews, design reviews,
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=191)** and even acceptance criteria can help you evaluate authorization during development. This will not only help you prevent issues, but it will also help you understand the authorization flows that exist. In addition to reviewing code, you should focus on documenting and discussing changes to access control lists on a regular basis. The second mitigation, and maybe even more effective, is good testing of your ACLs on every build. You should leverage role-based users in your test suites, and look at every transaction from both the positive and the negative perspective for every role. Essentially, you're building a matrix to check all of your access controls. Spend some time in processes and testing, to help prevent these security risks from becoming an issue for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Definitions:** is called (1)
> **Analogies:** imagine (1)
> **Best Practices:** you should always (1)
> **Speakers:** - providing (1)

#### [Cryptography issues](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=0)** - [Cryptography](../../Skills/Cybersecurity/Cryptography.md) is a very hard subject for most developers. Thankfully, those that do understand cryptography are very good at it and make things easier for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of us, assuming we follow the rules correctly. So let's start by talking about the security risks associated with broken cryptography. First and most common is the use of broken cryptographic routines. Now the term broken is a little overloaded here. When I say broken, most often it means that the algorithm has been cracked, theoretically can be cracked, or has a flaw that has been identified. Many developers implement an algorithm for encryption, hashing, or digital signatures that they have used before but it may no longer be considered safe. The mitigation for these flaws is quite simply to use the latest and greatest [Algorithms](../../Skills/Software%20Development/Algorithms.md) that serve the current and possibly future purposes. Now you don't need to be bleeding edge but you do need to use algorithms that are not yet cracked and I do mean not yet. There is a risk that cracking will be possible in the future for any algorithm. So you also need to keep tabs on the algorithms that you use
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=96)** and their acceptance by the industry. Ultimately, upgrading is needed. One thing to note, closely associated here is choosing the wrong algorithm. Say you need to hash passwords, you could use SHA-2 from a pure crypto perspective. However, it is too fast of an algorithm and opens you up for brute force attacks. Instead, consider something like bcrypt. That being said, ensure you are also using the right algorithm for the use case. Second, there is a case where developers misuse or misunderstand the algorithms that they are using. Things like initialization vectors, salt, nonce, and other parameters have valid places in certain crypto algorithms and should not be ignored. In addition, often key sizes can fall into this arena because insufficient key size can ruin a great algorithm. This can lead to cases where the algorithms are no longer as safe as they should be because the implementation was not correct. The mitigation for these flaws is to ensure you are using the algorithms correctly. If you don't know, ask. I have yet to meet a developer who knows everything.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=193)** As such, it's perfectly okay and honestly advisable to be a little humble and ask questions. Misusing algorithms can be as dangerous relatively as not using them at all. Of course, there's a little exaggeration there. But opening yourself up to rainbow attacks because you don't understand salt is a pretty bad flaw that could be solved with a simple question. One that honestly bothers me is inappropriately implemented crypto algorithms. There are some developers that feel that they know crypto well enough to implement the algorithm's more efficiently. I won't say that they fail more often than not, but leading crypo and security researchers usually argue that they do. The possibility of a closed homegrown implementation having a flaw is too great for most companies to accept. The mitigation for this is quite simply never roll your own crypto. I call this the first rule of crypo club because in my mind, it's a no-brainer. I feel like I have a good grasp on crypto and I would never in a million years roll my own crypto for a customer or an employer. There are good libraries out there that you can use. The moral of this whole story is ask questions. If you wonder if an algorithm is cracked, ask.
>
> **[4:51](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=291)** If you wonder if an algorithm is poor, ask. If you need to understand an API, ask. You get the rest of the picture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (9), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Definitions:** is a  (5)
> **Env Vars:** sha (1), api (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - cryptography (1)


### 5. Security in the SDLC

[↑ Back to Table of Contents](#table-of-contents)

#### [Embrace security in design](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=0)** - As we begin talking about culture changes around [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md), I think it is only fitting to talk first about the point where most developers begin their engagement, and that is the design. Design is a great place to start looking at ways to make your application more secure for various reasons, but I want to focus on some strategies for how to take security into account during design. I like to start all of my design activities by looking at the system design. Whether it's a complete system in waterfall or a simple feature in [Scrum](../../Skills/DevOps/Scrum.md), the system itself is key. By looking at what you are building, you can start looking at ways to destroy it, and that is in my opinion one of the greatest assets for a secure developer. I feel very strongly that developers struggle with security because they are trying to build, not tear down. Good security people learn how to tear down systems. They learn how to exploit features to attack the system. This is what you should aim for in design. Look at your system or even your feature with a critical eye. Identify the weakest points in your design from a security perspective. Armed with the knowledge that we've just looked at, do you run the risk of injection attacks or memory attacks?
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=94)** Do you leverage a database and therefore have to work around database issues? The list goes on and on. But the point is you are creating an inventory of risks. These observations on your design can then be used during development and testing to ensure you are putting appropriate controls in place. Sometimes it is an active control. Sometimes it may be passive. Sometimes they may be compensating controls and sometimes you may determine the risk is too great and you simply remove the feature completely. The point is you have collected the information, made observations, and started the conversation with security early in the development process, and that is one critical component of a culture of security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) (1), [Scrum](../../Skills/DevOps/Scrum.md) (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - as (1)

#### [Embrace security in development](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=1)** - Obviously, there was a large focus in this course on the development side of [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md). But I want to emphasize a little about how you can leverage this knowledge to positively impact your culture. First and foremost in my mind is education. If you have seen any of my other courses or heard me speak, you should get a feeling that I am all in on education. This course may be the start for you in secure coding and security in general, but please don't make it the last. You have to start living this stuff at least a little in order to really grasp the full reality of it. Follow blogs and Twitter because that is how you will hear of the new attacks you may need to [react](../../Skills/Web%20Development/React.js.md) to. If you hear of a vulnerability the day it is announced and the component you use, you will have the information to fix the issue before it becomes one for you, assuming of course you weren't hit before the announcement. You also need to test your own skill sub. Try and execute a few attacks every now and then. Practice reading buggy code and practice fixing it. These skills alone will make you better at peer reviews. You also need a dose of humility. This is a very important aspect of working in security in my opinion, and one that I personally struggled with a lot,
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=95)** especially at first. You will not know everything there is to know. You will make mistakes. Just own it. It will make you a better developer, a better secure developer, and honestly a better person. You also need to be the change agent for your team. Development is hard, we know that. Security is even harder, but a champion will help the the team more than any mandate pushed down from above. You may inspire others to start down the path with you. The most important aspect, however, is to apply this knowledge often. Look at code reviews from The Security Mindset, look at development tasks and designs and try to break them, look at risks and ensure they're properly mitigated. Question behavior that seems to put your company or your customers at risk. Be the champion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1)
> **Speakers:** - obviously (1)

#### [Embrace security in testing](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=1)** - In my mind, no single aspect of the SDLC can have as much impact as testing. Unfortunately no single aspect of the SDLC is ignored as much as testing. Testing for security is no exception, in fact it may be even worse. There are three key strategies to testing for security. The first strategy is to leverage attack trees. As a team, you will design user personas and attack trees that give you step by step attack vectors against your application. You can then weigh the likelihood of these attacks and the risks presented by them. Once you have this information, you are given an ordered list of scenarios that should be mitigated. You then write test to confirm the mitigations are in place. This testing is highly effective in assuring that your controls are in place correctly to help protect your system. These tests if properly automated, can then be run on every build and every release. Now, keep in mind these trees do change over time, so your scenarios and tests will also have to change. The next strategy is to leverage the risk register. As a team, you should maintain a list of risks
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=96)** within your system. These risks will have controls and mitigations in place. Some of these risks should be security focused. And this is where testing comes into play. Your risk register should be leveraged in testing to ensure that your risks are handled appropriately. As such, your security risks should also be tested on each and every release. Once again, risks change, and you have to address these changes in your existing tests as well as new tests. Another area that testing comes into play is with [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) tools. You may not have a security focused person on your team who can do this. As such, you may have to take the lead. Penetration tools often require an initial learning curve to use. And then, often another sometimes steeper learning curve to understand and interpret the results. This testing however can become essential to making your software more secure by identifying results. Some tools can even plug into your CI/CD pipeline, and self-discover your system based on your other tests or service documentation. These tools can be expensive, but are very powerful. You should not try to tackle all
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=189)** of theses tests at once however. Make a testing plan that works on one area, and try to make significant headway in that area before moving on to others. A [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of caution here, while you may be tempted to start with penetration testing, keep in mind the security mindset of the whole team. If you dump a list of vulnerabilities on them day one, they may never catch up. Work together and focus on your plan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (2), cd (1)
> **Warnings:** keep in mind (2), caution (1)
> **Env Vars:** sdlc (2)
> **Speakers:** - in (1)

#### [Embrace security in deployment](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=1)** - Deployment of code is one of those areas that all too often gets ignored when it comes to developing a [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) plan. This is an unfortunate oversight, as there are many ways to improve the security of your system at this point. One of the weakest points of secure deployments is how you manage the sensitive configuration of the systems being deployed. The use of files on a file system or in a startup script all too often count as secure enough, when in reality, they fail. They expose significant attack vectors into your systems or the systems you depend on. There are, however, very powerful tools and patterns that can be leveraged to improve the secrecy and security of these sensitive data points. Some of the tooling have sophisticated APIs and startup routines that ensure your system will get its config, and no one else can. If you're deploying to a containerized framework, you also likely have built-in support for secrets, so at least consider using those. Another step that seems to increase the security is automation. Any time a human has to be involved in deployments, you increase the risks of compromise. The operator may make a mistake with permissions
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=95)** or leave something open that shouldn't be. Worst-case scenario, the operator may get disgruntled and become the bad actor. While automation is by no means a complete stopgap, it can be a great opportunity to prevent internal attacks. By forcing code through a peer review cycle, and then only deploying through an automated gating process, you can ensure that the code running in production has been fully vetted. As long as the boxes doing the deployments themselves are secured, you have set yourself up to be more secure than not. There are several other aspects of secure deployment strategies, but that could be a course on its own. My purpose here is to get you thinking of ways to improve your culture of security around deployments. As always, try and think like a bad actor and see how you can prevent attacks, and focus your efforts there first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - deployment (1)

#### [Implement best practices](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=1)** - Security is often a moving target. When you are starting down this path of [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md), and ultimately, a culture of security, it's easy to get lost. I'm going to suggest you focus on the most current best practices. Consider development tasks like source control, [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md), static and dynamic code analysis, and peer-reviewed best practices to help secure your code. Don't be afraid to attack them one at a time and get processes in place that work for you. You don't, however, have to re-create the wheel. There are several great resources on the web for free that will help you build a platform of secure development. Requirements and design are no different. A lot of time and effort has been put into developing secure practices around these tasks. Again, many of them are published for free. Consider risk management as one of the bigger areas here, and focus on how the industry is managing risks and documenting them. While not everything will work for you, you may find enough to get you started, and ultimately, save you some valuable time. One area I would highly suggest you follow industry standards around is vulnerability management. Many people have put in a lot of time to developing standards and strategies for companies and teams to manage their vulnerabilities. Things like scoring, ranking,
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=97)** and prioritizing vulnerabilities have been solved, as well as ways to accept those risks. Tracking and reporting on vulnerabilities has also been vetted pretty well in the industry. As always, you will make parts of it your own, but definitely use what you can. Finally, when it comes to testing and deployment, there is a lot documented, but you will have to work through a significant amount of it on your own. Start with the basics and reach out to the community. A lot of work around [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) and automated deployments has been solved, but things like attack trees are not as common. You may prioritize your individual workloads based on what is done and what isn't. Ultimately, I want to encourage you to start somewhere. Try out what your peers are doing and go from there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) (1), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1), [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - security (1)


### Glossaries

[↑ Back to Table of Contents](#table-of-contents)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=1)** - Throughout this course we have looked at several different yet important aspects of [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) and culture, so let's review. We spent some time talking about what secure coding is all about and why it is important. We talked about our goals. We talked about the attacker persona. We talked about how to focus on breaking and not just building. And we talked a lot about risks and documentation. This foundation led us into a discussion of vulnerabilities. We spent a significant portion of this course going through a lot of the most common defects that routinely appear as security issues. We talked about what they were, how they manifest themselves, and some basic strategies to mitigate them. Each of these classes was unique but shared enough similarities to develop patterns of mitigation. We then talked a little bit about building a culture of security within various areas of the SDLC. While this course wasn't about culture, it really is an important part of secure coding as a whole, and I highly encourage you to spend time on developing a culture of security within your organization. Because of the vastness of this topic, I hope that I gave you enough of a taste of secure coding for you to dig in a little deeper. It is a wide and deep focus area but one that an experienced developer
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=93)** can find rewarding as well as lucrative. I hope you have found value in this foundation. I want to thank you for your time in this course. It means a lot to me to have spent this time with you even virtually. My commitment does not end when this course is over. I respond to requests on Twitter and Stack Overflow on all of my content here or any other public platform where I present on. I love learning and sharing knowledge, so please reach out to me with questions or ideas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Secure Coding](../../Skills/Software%20Development/Secure%20Coding.md) (4)
> **Cross-References:** we talked about (4)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Env Vars:** sdlc (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - throughout (1)


## Instructor

- [Frank P Moley III](../../Instructors/Software%20Development/Frank%20P%20Moley%20III.md)

## Path Context

### In [Become a Programmer- Foundations](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Programmer-%20Foundations.md)
← [Programming Foundations- APIs and Web Services](Programming%20Foundations-%20APIs%20and%20Web%20Services.md) | **10 of 12** | [Programming Foundations- Test-Driven Development](Programming%20Foundations-%20Test-Driven%20Development.md) →

## Appears In

- [Become a Programmer- Foundations](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Programmer-%20Foundations.md)

---

[↑ Back to top](#)