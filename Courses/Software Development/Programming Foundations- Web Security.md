---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: programming-foundations-web-security-22680062
url: "https://www.linkedin.com/learning/programming-foundations-web-security-22680062"
duration_minutes: 131
duration: 2h 11m
level: Beginner
updated: 8/2/2023
learners: 177777
skills:
  - Secure Coding
  - Web Services Security
  - Programming Foundations
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFPY5XAoOMO4g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690838117691?e=2147483647&amp;v=beta&amp;t=1iYoKbkOSfocRkAgbW8risB9CtZHZMLKhmg1aMJTlak"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a Software Developer]]'
prev_courses:
  - '[[Learning SQL Programming]]'
path_nav: '[{"path":"Become a Software Developer","position":12,"total":12,"prev":"Learning SQL Programming","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/secure-coding
  - skill/web-services-security
  - skill/programming-foundations
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations-%20Web%20Security.md)

![Programming Foundations: Web Security](https://media.licdn.com/dms/image/v2/D560DAQFPY5XAoOMO4g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690838117691?e=2147483647&amp;v=beta&amp;t=1iYoKbkOSfocRkAgbW8risB9CtZHZMLKhmg1aMJTlak)

# Programming Foundations: Web Security

> Security is a paramount concern when you’re developing websites, but what motivates hackers, what are their most common methods of attack, and most importantly, what can you do to foil their efforts? In this course, instructor Kevin Skoglund details the techniques and mindset that you need to craft solutions for these web security challenges. Learn the eight fundamental principles that underlie al

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062) | 2h 11m | Beginner | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (1 videos)
- **[[#1. Security Overview]]** (5 videos)
- **[[#2. General Security Principles]]** (9 videos)
- **[[#3. Filter Input, Control Output]]** (8 videos)
- **[[#4. The Most Common Attacks]]** (13 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The importance of security
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=0)** - Security is an essential skill for all web developers to learn.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=4)** If you're building websites of any kind, then you need it.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=7)** Online threats are real, and the consequences of ignoring them can be serious.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=12)** Security cannot be an afterthought.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=14)** It has to be considered from the early stages of project planning to the launch of a website and beyond.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=20)** Without a firm grounding, it can be easy to make mistakes that leave you vulnerable.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=24)** In this course, we'll learn the fundamentals of web security to give you that grounding.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=29)** I'm Kevin Skoglund.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=30)** I've been a web developer writing code, and PHP, Ruby and Ruby on Rails for over 20 years.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=36)** I know firsthand why security is an essential skill.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=39)** I want to share what I've learned and help you to avoid common mistakes.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=43)** I want your website to be secure.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security?u=76281980&t=45)** So let's get started learning the fundamentals of web security.

> [!info]- Semantic Content
>
> **CLI Commands:** ruby (2), make (1), php (1), rails (1)
> **Definitions:** is an  (2)
> **Code Keywords:** let (1)
> **Env Vars:** php (1)
> **Speakers:** - security (1)


### 1. Security Overview

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is security?
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=0)** - Let's begin our examination of web security with a simple definition.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=4)** Webster's Dictionary defines security as the state of being protected or safe from harm, things done to make people or places safe, measures taken to guard against espionage or sabotage, crime, attack, or escape.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=17)** So security is both the state of being protected and the measures that we take to protect.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=24)** This serves as a good general definition of security.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=26)** In this course, we'll be focused on security of a specific industry, web development.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=31)** What makes a website secure?
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=33)** When the web server and all of its applications are protected and safe from harm.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=38)** Websites require special consideration.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=40)** They're high-profile.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=41)** In fact, they're the main public face of a company.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=44)** They represent the brand.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=45)** Websites allow organizations to interact with users and in some cases provide a major source of revenue.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=51)** It's not uncommon for a website to be the whole company.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=54)** Users need to be able to trust that websites will keep their information safe.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=58)** That may include personal identifying information, credit card numbers, salary data, or healthcare information.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=65)** It's our job as developers to provide security so that the projects we put on the web are trustworthy, and that's a big responsibility.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=72)** To effectively protect a website, we first need to be aware of the risks and the pitfalls.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=77)** We need to know who could do us harm and how they could do it.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=81)** We can only assert that something is secure after we've surveyed the potential problems and have confidence that we have the right safeguards in place.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=88)** This can be expressed as a simple equation.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=90)** Awareness plus adequate protection equals security.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=95)** My goal in this course is to provide awareness of potential threats.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=98)** It's on you to do the second half, to put the necessary safeguards in place.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=103)** Spending a lot of time and money on protections is meaningless if your actions aren't based on an awareness of the actual risks and threats.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=111)** Awareness is just as important as the protection itself because it guides your efforts.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=117)** Effective web security should be built on an awareness of the real and specific threats.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=121)** Online security is a very broad and deep topic.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-security?u=76281980&t=125)** In this course, our focus will be on the general principles and the mental models that will give you a way to approach the topic, and then we'll look at some of the biggest threats and discuss principle-based strategies for handling them.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (3), let (1), require (1), public (1), assert (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - let (1)

#### Why security matters
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=0)** - Let's talk about why security is important.
>
> **[0:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=2)** It's easy to set up a basic website.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=5)** You write a bit of HTML, add a bit of CSS, sign up for a hosting plan, and voila, you've got a website.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=11)** There aren't many security problems with a simple website.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=13)** Users interact with a site by typing a URL or clicking links, and the pages they see are the same every time.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=19)** Now, this could give you the impression that new features and technologies can be added to simple HTML pages just as easily.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=27)** Over time, perhaps you decide to add some JavaScript, use PHP to create dynamic pages, store data in cookies, or connect to a backend database.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=35)** However, it's important to recognize that as the site gains features like these, it increases in complexity and it gains new security issues.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=44)** New features may introduce the ability to perform actions that you don't expect.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=48)** In fact, hackers scan the internet looking for web servers that are set up by beginners, or that use technologies or configurations that they can exploit.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=57)** They don't need to be at their keyboard or decide to target you specifically.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=60)** They write code that does the scanning and the hacking for them.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=63)** A hacker who's able to exploit a weakness may be able to make changes to your website, to steal data, or to take complete control over the server.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=70)** Consequences for failing to secure website include monetary theft, identity theft, data theft, spying, spam embarrassment, loss of access, or loss of control.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=83)** Loss of control may seem less significant than theft and spying, but I think it's the most consequential.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=88)** Your website could be used for purposes that you don't intend.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=91)** It might be used to harm visitors to your site.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=94)** It might be used to attack or exploit other servers.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=97)** These consequences have real world costs to the owner or to the users of a website.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=103)** Monetary theft has obvious costs to a company and its customers.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=106)** Data theft may have a direct cost if the data's valuable or can be sold, or it can have an indirect cost by reducing trust.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=113)** A web server sending out spam email can cause legitimate emails to be flagged as spam.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=119)** Something as simple as defacing a webpage can embarrass a company and hurt their brand.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=123)** So as you can see, security is not optional.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=126)** It can't be an afterthought.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/why-security-matters?u=76281980&t=127)** Security is an essential skill for all web developers.

> [!info]- Semantic Content
>
> **Env Vars:** html (2), css (1), url (1), php (1)
> **CLI Commands:** php (1), make (1)
> **Prerequisites:** set up (2)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Speakers:** - let (1)

#### What is a hacker?
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=0)** - When I use the term hacker, you might imagine a person at a computer, wearing a hoodie, scary looking, their face hidden from view, but that's not what hackers look like.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=10)** In fact, hacker can have a positive meaning.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=13)** It can mean someone who tinkers with computers and electronics to come up with innovative ideas.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=18)** Many of today's most reputable technology companies began as a couple of hackers experimenting in a garage.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=24)** Security professionals divide hackers into two types: white hat and black hat.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=30)** This imagery draws inspiration from classic western movies.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=33)** The good cowboys wear white hats while the bad ones wear black hats.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=38)** Their skills may be the same, but they have different intentions.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=42)** A white-hat hacker is a security specialist who uses their skills to improve security by detecting vulnerabilities before malicious black-hat hackers can exploit them.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=52)** Black-hat hackers are the ones we want to protect against.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=56)** Black-hat hackers fall into several categories, and it's useful to understand the motivations of each one.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=61)** First, we have curious users.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=64)** These are users who notice a thread and decide to pull it.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=67)** Imagine a website where some pages have a URL that ends with a number.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=71)** A curious user might try submitting different numbers to see what results they get back.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=75)** These hackers often aren't very skilled or persistent.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=79)** Next, we have script kiddies.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=81)** Script kiddies is a derogatory term for hackers who don't have many skills, but run scripts that someone else wrote to do the hacking for them.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=89)** This group is as likely to complete a hack successfully as they are to just muck up your server.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=93)** The hacks in their scripts are often old, well-known hacks, which we can easily guard against using basic security techniques.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=100)** Hacktivists are political activists.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=102)** These hackers use their skills to advance a political agenda.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=105)** Their causes may come from all sides of the political spectrum.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=108)** You generally only need to worry about hacktivists if you're in a politically sensitive area, such as a government agency or a controversial organization.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=116)** If you become their target, though, it's never random and they're unlikely to give up easily.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=121)** Next, we have criminal hackers.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=124)** These could be individuals or organized crime groups.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=127)** They're motivated by money.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=129)** They may steal money, harvest credit card numbers, collect personal information that they can sell, hold data hostage, or promote some kind of scam.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=137)** Their skill levels vary from former script kiddies to highly-skilled talent for hire.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=142)** Criminal hackers represent the biggest security threat to most websites.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=146)** They're also trophy hunters.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=148)** These are hackers seeking to prove their skills to gain fame and admiration from their peers.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=153)** A trophy proves that they outsmarted a website's security.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=155)** Trophy hunters include many of the most skillful hackers, but fortunately, they're unlikely to ever notice most small websites.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=162)** Breaking into the website for a local yarn shop is not very impressive.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=166)** Breaking into investment bank, a major technology company or government servers who invest heavily in their security, that gives them the bragging rights that they seek.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=175)** Finally, we have governments.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=177)** These are often referred to as advanced persistent threats.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=180)** It's a fitting name, as these government-based or supported hackers are both advanced and persistent.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=186)** These are the most skilled attackers with enormous resources at their disposal.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=190)** Most governments keep databases of technical flaws that they can exploit and build libraries of code to exploit them.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=196)** Luckily, they're not generally interested in hacking most websites.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=200)** They're primarily interested in intelligence gathering, industrial spying and espionage, and advancing larger political goals.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=207)** However, governments may target unlikely websites.
>
> **[3:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=210)** For example, in 2014, the [forbes.com](https://forbes.com) website was hacked by a foreign government.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=216)** The foreign government knew that executives from many defense and financial services firms frequented the website.
>
> **[3:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=222)** When the seemingly harmless thought of the day flash widget appeared, a visitor's browser would automatically download malware, which compromised their computer.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/what-is-a-hacker?u=76281980&t=231)** Knowing about hackers and their motivations is an important aspect of security awareness that can help you to build better protections.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2), such as (1), for example (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** yarn (1)
> **Code Keywords:** finally, (1)
> **URLs:** [forbes.com](https://forbes.com) (1)
> **Env Vars:** url (1)
> **Speakers:** - when (1)

#### Threat models
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=0)** - As a web developer, the most important part of security awareness is to assess potential threats to your website.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=6)** The process of assessing potential security threats is called developing a threat model.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=11)** Threat models are unique to each person or organization.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=14)** They're a prioritized list of the risks and potential threats that a person or an organization faces.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=20)** Threat models are not a new concept.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=22)** Like many of the security principles that we'll examine, they've been used in military applications for centuries.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=28)** Imagine a castle in the 13th century.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=30)** The king and the queen are worried that their enemies will attack soon.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=34)** How should they secure the castle?
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=36)** They start by examining their situation to develop a threat model.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=40)** They know that enemies are most likely to attack from the north, and those enemies are likely soldiers on foot without heavy equipment.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=46)** Their most valuable assets are the lives of their family, and their most desirable assets to their enemies are treasure and weapons, and they also know that the castle's southern wall is damaged and more vulnerable than usual.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=58)** The threat model allows the king and queen to prioritize their defenses.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=62)** They strengthen the northern defenses against soldiers on foot.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=64)** They fortify the buildings containing their family, treasure, and weapons, and they make sure that the southern wall does not become an unexpected weak point.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=72)** The king and queen considered the profile of their attacker, the likely attack vectors, what are their high value assets, and what vulnerabilities they have.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=80)** Considering these items provides the awareness which allows them to make sure that they have adequate protections.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=87)** These considerations are unique.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=88)** A different castle would likely have a different threat model, and the considerations can change over time.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=94)** A threat model must be continually updated.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=96)** A threat model is also helpful for what it excludes.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=100)** A castle far from the coast does not need to be concerned about an attack from the sea.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=104)** A castle on an island does not need to be concerned about land-based attacks.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=108)** The same applies to web security.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=110)** Some websites will be more concerned about certain types of hackers than others.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=114)** If you run a website about a controversial topic, then hacktivists may be in your threat model.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=119)** If you run an e-commerce site, then criminals are probably a large part of your threat model.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=124)** If you're a defense contractor, then governments and advanced persistent threats may be in your threat model.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=130)** Security should be in proportion to one's needs and goals.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=133)** For example, if I have a $100 bill, I don't need to construct a high security vault to protect it.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=139)** I can put it in my house, lock the doors, and be happy with the level of security that's in place.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=144)** But if I had $100 million, then I probably wouldn't just trust the locks on my house.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=149)** I'd want to top-of-the-line security system in place, and I'd be willing to invest a lot of time and money in setting it up.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=155)** Our investment in security should match our threat model, the value of the assets we're securing, and the consequences of failing.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=161)** In each threat model, attackers will have different abilities, attack styles, and objectives.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=167)** Each defender will have different high value assets and vulnerabilities.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=170)** There is no one-size-fits-all security.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/threat-models?u=76281980&t=173)** Security requires tailoring protections to fit your specific threat model.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), for example (1)
> **Definitions:** is called (1)
> **Speakers:** - as (1)

#### Total security is unachievable
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=0)** - I love Hollywood heist films.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=3)** "Heat" and "Oceans 11" are two of my favorites.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=6)** Most heist films start with something of great value, which has been protected by what everyone is sure is impenetrable security.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=13)** The defenders have taken every precaution they can imagine, but there's always an angle that they've not considered, a failure point that's escaped their notice.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=21)** The film's plot developed surprising schemes to get past those defenses.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=25)** As audience members, we delight in watching the exploit of that unexpected, improbable, sometimes high risk way to get inside.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=32)** The most famous example has to be from "Mission Impossible" when Tom Cruise is suspended from the ceiling as he hacks into a computer in an ultra secure room.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=41)** Like heist films, nothing can ever be 100% secure.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=45)** There are always ways to gain access that we don't expect.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=48)** Even if we were able to perfectly secure a system against all known bugs and vulnerabilities, that system will change over time.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=54)** Software gets upgraded, configurations get changed, data gets updated, new vulnerabilities are introduced or discovered.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=62)** Some of these are called zero-day vulnerabilities, because even though hackers may be sharing and using the exploit, the developer has had zero days of awareness and zero days to craft a defense for it.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=74)** They may not have seen it coming before, but I bet the CIA is prepared for secret agents coming into their computer rooms through the ceilings now.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=81)** Dennis Hughes is credited as having said, "The only secure computer is one that's unplugged, locked in a safe, and buried 20 feet under the ground in a secret location, and I'm not even too sure about that one."
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=93)** If total security is unachievable, then how should we approach our task?
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=97)** We should let our threat model guide our priorities.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=100)** This tells us where to start our work and how to allocate our resources.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=104)** Overall security is only as strong as the weakest link.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=107)** To use the castle example, it doesn't matter if your Northern defenses are strong if an attacker can go around them and use the damaged southern castle wall to get inside.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=117)** Our goal should not be to create a castle that cannot be stormed, but to raise the security level by making the weakest points as difficult to exploit as possible.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=126)** This helps us to measure our security level and our progress.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=130)** It's essential to frequently reevaluate security, especially as circumstances change.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=135)** For example, new attackers may appear, or old attackers may gain new capabilities.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=141)** Business objectives may change.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=143)** Adding new software features to a website may introduce new vulnerabilities.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=147)** The point is security is not a one-time process.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=151)** Effective security requires reassessment.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/total-security-is-unachievable?u=76281980&t=154)** Instead of trying to achieve perfect security, which doesn't exist, you should focus on protecting against the risks in your particular threat model.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (1), let (1), raise (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** cia (1)
> **Speakers:** - i (1)


### 2. General Security Principles

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Least privilege
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=0)** - In this chapter, we'll discuss general security principles.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=4)** These principles are the foundation for the specific issues we'll cover in later chapters.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=8)** If new technologies emerge in the future these core principles can still guide you.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=13)** They're fundamental to all of security.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=15)** We'll start by talking about the principle of least privilege.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=19)** Think about your house or your apartment.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=21)** Who do you give keys to?
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=22)** You might give keys to a family member, your next door neighbor, or to a trusted friend.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=27)** However, you would not give keys to all of your family or all of your neighbors or all of your friends.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=32)** You control and limit the access to your personal property.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=35)** Many office buildings have security guards that regulate access.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=38)** If you work in such a building, you may have only access to some floors or some departments and even within those areas, there may be spaces that are off limits to you, such as a server room, a supply closet or even certain filing cabinets.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=52)** These real world examples of limiting access make common sense.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=56)** Some people have access while others don't, and people are only given additional access privileges when it's necessary.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=63)** The default is to not grant access.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=66)** It's a lot like being on a need to know basis, but it's a need to have access basis.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=72)** The same principle applies to digital security.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=74)** We call it the principle of least privilege.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=77)** Every program and every privileged user of the system should operate using the least amount of privilege necessary to complete the job.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=86)** The principle of least privilege means giving a user account only those privileges which are essential to that user's work and nothing more.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=93)** If a user's job is only to edit website text, then they should not be able to browse a list of paying customers.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=99)** Users in human resources should not be able to see accounting information and users in accounting should not be able to see human resource information, and any user with limited privileges should never have enough system access to edit their own privileges.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=112)** The principle of least privilege applies to every program and every user.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=116)** As such, it can be applied to APIs, system resources, database access, software version control, and even public facing webpages that grant access to different types of customers or to staff members.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=129)** Now, let's consider code access.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=131)** Code needs access privileges too.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=133)** Code should apply the principle of least privilege and limit what's available to other code.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=138)** Let's use some PHP code as an example.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=141)** Notice that all of the variables and functions in this class are marked as being public.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=146)** That makes them callable by other code, code which is outside this class.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=151)** They do not need to be public, they will only be used internally by the user class itself.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=156)** The only function that needs to be callable by code outside this class, is authenticate.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=161)** This limits access to the code inside the user class and follows the principle of least privilege.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=166)** Wherever you apply the principle of least privilege, the ideas to control access to systems and resources, you do that by granting as little access as possible.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=175)** It's also important to have procedures in place to remove access when it's no longer needed.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=180)** If someone leaves your organization, they should have to turn in their physical keys and all of their digital access should be revoked at the same time.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=187)** This is especially true if you work with contractors who may come and go more frequently than full-time staff.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=193)** The principle of least privilege increases security because any vulnerabilities are going to be limited and localized.
>
> **[3:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=201)** It's always bad to have an account hacked but the damage is far less, if the hacked account has limited privileges.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/least-privilege?u=76281980&t=207)** The principle of least privilege, is one of the most important security principles, and you should apply it to everything you do.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (2), class. (1), function (1), class, (1)
> **CLI Commands:** make (1), php (1)
> **Env Vars:** php (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### Simple is more secure
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=0)** - Our second general security principle is simple is more secure.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=5)** Let me start by asking a question.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=6)** Which would be easier to secure, a house that had only one door or a house that has five doors and five windows?
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=13)** The answer is obviously the house with one door.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=16)** The larger and more complex a system becomes, the harder it becomes to secure.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=20)** Larger systems have more areas of concern.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=22)** They have a larger attack surface to keep secure.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=25)** More complex systems increase the likelihood of bugs or of making mistakes.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=30)** Simpler is always more secure.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=32)** When programming, there's several techniques that you can use to reduce complexity and therefore increase security.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=39)** Giving clear names to functions and variables makes your code easier to read and to understand.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=44)** Write code comments.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=45)** Describe what the code is intended to do, how it does it and why you chose a particular approach.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=51)** List the expected inputs and the expected outputs of a function.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=54)** Make notes about any security concerns that might help during future development.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=59)** Code comments may add to the length of a file, but they simplify the process of understanding how the code works.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=65)** Built-in functions are better than custom functions.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=68)** The built-in functions in a language or framework are often better written, more error-resistant and better tested than custom code that performs the same task.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=76)** Built-in versions may address security concerns that your code might overlook.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=80)** Remove cruft from your code.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=82)** Cruft is anything that's left over, redundant and getting in the way.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=86)** It may be legacy code or features that are no longer needed.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=89)** Removing cruft makes codes simpler to understand and removes potential vulnerabilities.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=95)** Disable features that you don't intend to use.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=97)** Every feature you remove is one less feature you have to keep secure.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=101)** If a web server won't be sending emails, then disable its email-sending features.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=106)** If you're not using PHP, then there's no reason to leave yourself open to any PHP vulnerabilities.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=111)** Breaking up long sections of code into smaller functions can greatly reduce complexity.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=116)** Give each function a specific purpose.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=118)** Don't let it do more than one thing.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=120)** And give it a name that makes that purpose clear.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=123)** In programming, we call this process refactoring.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=126)** The function of the code doesn't change, but the quality of the code is improved by making its structure simpler and clearer.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=133)** Perhaps most importantly, don't repeat yourself.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=136)** Object-oriented programming strongly encourages this practice, but functional programming can use it, too.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=141)** If we duplicate code and then later find a bug, the bug may get fixed in one version but not in the other.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=148)** If there are subtle differences in the code, we may use the wrong version by accident.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=152)** Don't let unnecessary complexity become a security liability.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/simple-is-more-secure?u=76281980&t=157)** Simple is always more secure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3)
> **CLI Commands:** php (2), make (1), find (1)
> **Env Vars:** php (2)
> **Definitions:** we call this (1)
> **Speakers:** - our (1)

#### Never trust users
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=0)** - Trust no one.
>
> **[0:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=2)** That may sound paranoid, but it's an important security principle.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=6)** It's similar to the principle of least privilege, but it goes beyond just access privileges.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=11)** Only extend trust as far as you must.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=13)** You can't know every user's intentions especially not ahead of time.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=18)** Now in your regular life, you can be a bit more trusting and give people the benefit of the doubt.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=21)** But for security, you need to adopt the opposite mindset.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=25)** Be paranoid. Every user is a potential hacker.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=29)** That's especially true when building internet connected systems.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=33)** A threat model has to include anonymous strangers who can access our servers from around the world.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=39)** Verifying user identities online is a fundamental security challenge.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=43)** It's difficult to know who is sitting at the keyboard.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=46)** Even a user who presents identifying information such as a username and password, or a user who's on an authorized device, they may have had their credentials or device stolen.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=56)** A user might simply forget to log out of their account from a public computer.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=60)** They may have left their password on a sticky note on their monitor.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=63)** You must consider that the Betty Smith logging into your server at 2:00 AM, may not be the same Betty Smith that you had coffee with last week.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=71)** This applies to you too.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=72)** Don't put too much trust into your own accounts.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=75)** Your credentials can be stolen.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=76)** Someone can sit your desk when you walk away.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=79)** Or malware can be performing actions in the background without you knowing.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=83)** Even users that you can verify can be a threat.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=86)** These are called insider threats.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=88)** It's when a user with legitimate access decides to abuse that access.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=92)** A happy employee today, might become an unhappy employee tomorrow.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=97)** That unhappy user may decide to perform actions or take information with them before they leave.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=102)** A user might give into temptation or agree to do something malicious, in exchange for money or to help out a friend.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=108)** People are complicated.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=110)** And their feelings and motivations can change.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=112)** Be especially cautious of giving privileged access to contractors.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=117)** Contractors have a weird status as both insiders and outsiders.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=121)** You have to grant them a fair amount of trust to allow them to do their job, but they may not be as well vetted as salary employees nor as loyal to the organization.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=129)** Contractors are often transient, so it's important to make it easy to revoke their access privileges once they leave.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=136)** And even well-meaning users can cause problems.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=139)** An accidental click can delete an important file.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=141)** A typo can break a configuration.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=143)** If a web application has a form for users to submit information, then users may try to include HTML or JavaScript, or they may cut and paste text from a word processor which includes formatting or special characters.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=155)** Now, these users don't intend to be malicious, but you have to be on your guard against basic human mistakes too.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=162)** Users can also be tricked.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=164)** In the book, Ghost in the Machine, The famous hacker, Kevin Mitnick, recounts how much of his computer hacking was done by calling people on the phone and convincing them that he was trustworthy.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=173)** Then he would get them to perform actions for him or to tell him details, that would help him hack into their servers.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=179)** We can love our users, we can trust them in real life.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/never-trust-users?u=76281980&t=182)** But we should never trust them when building secure online systems.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), delete (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), such as (1)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Env Vars:** html (1)
> **Speakers:** - trust (1)

#### Expect the unexpected
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=0)** - Our next core security principle is to always expect the unexpected.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=5)** Security is not like chess, where you can watch someone's move and then respond to it.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=9)** Security has to be proactive, not reactive.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=13)** You must assume that you will be hacked.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=15)** Your job is to figure out how it will happen ahead of time.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=18)** You have to prevent the crime before it happens.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=21)** It's sometimes referred to as a mystery in reverse.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=25)** This task may seem daunting until you gain some experience doing it.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=28)** You have to consider each part of your website and ask, what are all the things that a user could try?
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=34)** Often, vulnerabilities are found in what we call edge cases.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=37)** Most users will use a website exactly as we expect.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=41)** It's easy for us to plan for those cases when we build the site.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=44)** The well-worn path should not have any bugs or unexpected quirks.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=48)** A few users will take unexpected actions.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=51)** Our code needs to anticipate and handle these extraordinary cases appropriately.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=56)** If not, they may become vulnerabilities.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=59)** These are cases that we're not expecting.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=61)** To find them, we have to use our imaginations and challenge our assumptions.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=65)** Have fun with it.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=66)** You can think of it as evil brainstorming.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=69)** Let me provide an example to demonstrate the process.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=72)** Imagine a global search box at the top of website that will search the entire site for a string of text.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=77)** The expected path, sometimes called the happy path, is for the user to enter a word or two from the dictionary into the global search box.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=85)** The happy path is what happens when everything goes according to plan.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=88)** We want to also consider the less happy outcomes to help identify edge cases.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=93)** We might consider some of these following questions.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=96)** What if the user enters no text?
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=98)** What if they enter too much text?
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=100)** What if they paste formatted text from their clipboard or enter symbols?
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=104)** What if they enter emojis or other high ASCII characters or multi-byte characters from other languages, like Chinese or Arabic?
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=110)** Can the query be written such that when the search is complete, the HTML or the JavaScript on the results page would be modified?
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=117)** What if the user duplicates the original form on a different server and then submits data from that edited version?
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/expect-the-unexpected?u=76281980&t=123)** Now, some of these may seem unlikely, but that's what it means to look for those edge cases and to expect the unexpected.

> [!info]- Semantic Content
>
> **Env Vars:** ascii (1), html (1)
> **Analogies:** think of it as (1), imagine (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - our (1)

#### Defense in depth
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=0)** - Defense in depth is another way of saying that a system has layers of defenses.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=5)** Defense in depth was originally a military term.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=8)** The idea is to establish layers of defensive measures to slow an attacker down.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=12)** Imagine a castle at the top of a hill.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=15)** If an army is going to attack the castle, they'll be tired when they reach the top.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=19)** Then the army must get past the castle wall, which probably has soldiers on top.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=22)** If they can get past those defenses, there may be a second inner wall, more soldiers, and the king and queen may be in a well fortified keep, deep within the castle.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=30)** King and queen feel protected by their many defensive layers: the slope of the hill, the wall, the soldiers, the second wall, and the keep.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=38)** This is an example of defense in depth.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=41)** Defense in depth decreases your reliance on any one defensive measure while at the same time geometrically increasing the difficulty of making a successful attack.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=51)** If the first defense deters 90% of attacks and the second defense deters 90% of attacks, then in combination they deter 99% of attacks.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=60)** When planning defense in depth for a website, there are three main categories to consider: physical, technical, and administrative.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=67)** Physical controls protect the servers and other computer hardware from physical access or harm.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=72)** If you're self-hosting your servers, then it includes building access, security guards, access control doors, video cameras, and locks.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=80)** If your site is being hosted by someone else, then you depend on their physical security controls.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=85)** It's important to remember that there's no cloud.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=87)** It's just someone else's computer.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=89)** Technical controls are comprised of hardware, software, and network protections.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=94)** System administrators use firewalls, intrusion detection systems, antivirus software, event logging, and data backups to keep systems and networks secure.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=104)** Web developers can defend web applications with multifactor authentication by encrypting stored data and transmitted data and by applying the principle of least privilege to access controls and code design.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=116)** We'll learn more defensive layers in the chapters ahead.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=119)** Let me give two examples in which an attacker compromises a web application.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=124)** In the first scenario, there's only a single layer of defense.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=128)** Once an attacker gains access, they have access to everything.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=131)** They have root access to the server, they have access to all of the databases and to the user passwords that are stored in plain text.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=138)** Now, let's imagine a second scenario where we use least privilege and encryption to provide defense in depth.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=144)** An attacker still gains access to the server, but this time their access is limited.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=149)** They aren't a root user and they can only view the single database used by the web application.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=154)** And now, passwords are encrypted in the database which provides a further defensive layer.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=159)** So we've covered physical and technical controls.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=162)** Now let's talk about a third area, administrative controls.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=165)** Administrative controls are the policies and procedures designed to keep systems safe.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=170)** This includes training, writing a security policy, risk assessments, periodic security reviews, data handling procedures, monitoring and penetration testing.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=180)** A large organization may develop strong administrative controls.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=184)** For a smaller group or a single developer, this could be as simple as determining who gets notified at 3 AM if a problem's detected and what procedures and options are available.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/defense-in-depth?u=76281980&t=193)** Each one of these controls, whether it's physical, technical, or administrative control, adds another defensive layer and builds defense in depth.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), protected (1), self (1), else, (1)
> **Analogies:** imagine (2)
> **Definitions:** is an  (1)
> **Speakers:** - defense (1)

#### Resilience
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=0)** - Skydivers don't just take one parachute with them.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=3)** They take a second backup parachute in case the first one fails.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=7)** It's common sense.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=8)** It would be too risky to depend on even the best designed parachute, so redundant measures are put in place.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=14)** It's a good illustration of the importance of resilience.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=18)** Resilience systems can deliver intended outcomes, despite adverse events.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=23)** Webster's Dictionary defines resilience as an ability to recover from or adjust easily to misfortune or change.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=31)** Resilience is related to defense in depth, but it's not the same.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=34)** Defense-in-depth measures protect against threats.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=38)** Resilience measures detect failures and allow a quick recovery.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=42)** In other words, defense in depth keeps the first parachute strong and operational, but if it fails, resilience is the backup parachute that gets the skydiver back on the ground safely anyways.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=53)** It is Plan B.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=55)** We need both defense in depth and resilience.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=58)** For developers, resilience primarily means maintaining operational continuity.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=63)** We'd like to keep systems, software, and data online with little to no downtime.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=68)** If defenses fail, we want to be able to restore secure reliable access quickly and to minimize any impact.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=75)** Resilience has three components: identify, respond, and recover.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=82)** Identify means having operational awareness.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=85)** If a website goes offline or a particular feature stops working, how will anyone know?
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=91)** Identification of issues requires a plan, from monitoring systems to know when they deviate from the expected norms, and it requires a plan for notifying the people or other systems with an ability to respond.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=103)** There are many examples of system monitoring software on the market.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=107)** Some of them have free versions.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=108)** They monitor the status and health of a system and its resources.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=111)** Most are able to notify people via email or text.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=114)** Some can trigger automated actions such as rebooting a server.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=118)** You'll still need to consider who needs to receive those notifications, who will be on pager duty, and during what hours.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=125)** You want notifications to go to someone who can respond efficiently.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=129)** That's the second component, respond.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=132)** Once an issue has been identified, resilience systems respond to that issue.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=137)** There needs to be a plan of action.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=140)** Notifications to other stakeholders or call trees might be triggered.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=143)** If so, consider who has responsibility and who has decision-making authority.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=148)** A response will be delayed if it requires lengthy discussions or approval by someone who isn't available.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=153)** Try to streamline the process in advance.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=156)** Our parachute example illustrates how redundancy can be an effective response.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=160)** It's common for web servers and databases to be designed with redundant versions that can take over if the primary version fails.
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=168)** Other systems are designed to adapt and to allocate new resources when needed.
>
> **[2:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=172)** Consider your capabilities, assets, and available actions before you need to use them.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=177)** If you need to put out a fire, the response will be much more efficient if you know in advance where the fire extinguisher is stored and how to use it.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=184)** It'll also reveal any gaps in your capabilities so that you can address them.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=188)** You may want to develop action plans or cheat sheets for reference.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=192)** Be prepared not only to restore services but to quickly revoke user access privileges or to quarantine systems to prevent problems from growing.
>
> **[3:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=201)** In larger organizations where many stakeholders need to coordinate a response, it can be helpful to ask them to participate in tabletop exercises where different emergency scenarios are proposed and the group must walk through the steps to respond to them.
>
> **[3:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=214)** It's a dress rehearsal for a well-organized response.
>
> **[3:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=217)** The last component of resilience is to recover.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=221)** The response may have mitigated the threat and fully restored everything or there may be additional recovery work to do.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=227)** The first step is to survey the damage and to prioritize the work that's still needed.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=231)** If a system's running at 50%, consider what steps are needed to get back to 100%.
>
> **[3:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=237)** If any data was lost, consider how it could be recovered.
>
> **[4:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=240)** Log files and recent backups of software and data are invaluable tools during recovery.
>
> **[4:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=245)** Be sure to keep copies which are not stored alongside the original data.
>
> **[4:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=249)** Otherwise, the original and the backup could both be lost in the same incident.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=253)** After all services are restored, don't forget to take time to assess and improve the processes used to identify, respond, and recover.
>
> **[4:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=261)** It's an opportunity to make systems more resilient in the future.
>
> **[4:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/resilience?u=76281980&t=264)** Resilience is vital to ensuring operational and business continuity with minimal impact.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - skydivers (1)

#### Security through obscurity
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=0)** - Security through obscurity is our next core security principle.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=5)** It has a nice rhyme to it.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=6)** It means that it's more secure to withhold or obscure information 'cause information is valuable to an attacker.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=13)** Learning new information benefits an attacker.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=16)** It never benefits a defender.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=17)** Therefore, the less information you give out, the better.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=20)** Information should be kept on a need to know basis.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=23)** It's similar to the principle of least privilege that we saw earlier.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=26)** Give out the least amount of information necessary to complete the job.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=30)** Most Hollywood heist films have a scene where the heroes perform some reconnaissance on their target.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=35)** They watch the outside of the building through binoculars.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=38)** They wait patiently as key personnel come and go so they can create a schedule of their daily routine.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=43)** They photograph the security guards.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=45)** They make maps and note the locations of security cameras.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=49)** When hackers perform reconnaissance on computer systems, it's called footprinting.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=53)** Footprinting is a systematic exploration of a system's defenses and vulnerabilities.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=58)** An attacker engaging in footprinting might seek to discover what servers are visible on the network.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=63)** Explore an organization's security procedures, both online and offline.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=67)** Watch for activity patterns which occur daily, weekly or monthly.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=70)** Or examine an organization's waste and information disposal practices.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=74)** This information is helpful for strategizing and for planning an attack.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=78)** Hackers might examine the public domains, sub-domains and IP address ranges looking for patterns or clues.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=84)** For example, a gap in otherwise consecutive IP addresses might help them discover a new server.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=90)** It's easy to scan a server, and to list the software and services that are available on all of the open ports.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=96)** As a web developer, you want to be mindful of what information you're broadcasting.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=100)** For example, do URLs include file extensions such as .php?
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=106)** An attacker can tell what server side language is being used.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=109)** Configure your web server or application to remove them.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=112)** Does the HTTP response header include software version information?
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=116)** Learn how to modify the configuration to hide it.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=118)** If these server details remain unknown, then a hacker must plan for all possibilities.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=123)** Information allows an attacker to focus their attention and to make plans in advance more easily.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=129)** Hackers also use indirect information when footprinting.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=132)** The WHOIS database enables searching for information about the registered owner of a domain.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=137)** It also allows a hacker to discover the person organization behind a URL and to view real world contact information.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=144)** Most domain registrars offer the ability to hide your information from the database.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=149)** Posting employee and contact information can provide useful information to a potential hacker.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=154)** Knowing the names of authorized users makes it easier to guess usernames and email addresses.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=159)** Contact information may make it easier to target users or to trick them into helping a hacker.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=164)** Social media can reveal a lot of information about individuals.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=167)** Knowing someone's former university or the names of their pets may help to guess passwords or to craft an effective phishing email.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=175)** Knowing when employees are on vacation can help an attacker choose favorable timing.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=179)** Online forums can be a useful resource for help with technical problems, but airing those problems in public can also expose information.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=187)** I've seen a forum post by networking administrator which included his complete firewall configuration file.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=192)** It was posted using his company email address.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=195)** An attacker could use a search engine to find his configuration and to identify his company.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=200)** Security by obscurity often gets a bad rap.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=204)** You may hear security through obscurity is no security at all.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=208)** Obscurity is a good defense, but it works best when added to other defenses.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=212)** Keeping money in a safe hidden behind a painting is more secure than a safe in the middle of the room.
>
> **[3:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=217)** The safe must be discovered first and then cracked open.
>
> **[3:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=220)** However, merely keeping money behind a painting without any safe would be weak security.
>
> **[3:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=226)** Obscurity alone as a single line of defense should be discouraged.
>
> **[3:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/security-through-obscurity?u=76281980&t=230)** Obscurity helps add defense in depth and makes other defenses stronger.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), php (1), find (1)
> **Analogies:** for example (2), similar to (1), such as (1)
> **Env Vars:** http (1), whois (1), url (1)
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** public (2)
> **Prerequisites:** configure (1)
> **Speakers:** - security (1)

#### Deny-listing and allow-listing
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=0)** - Let's talk about lists, lists that allow something and lists that deny something, and why allow-lists are the more secure choice.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=9)** Santa Claus famously keeps a list of children who are naughty and nice.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=13)** Nice children get presents, but naughty children get a lump of coal.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=17)** Deny and allow-lists bring a similar idea to programming.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=20)** Deny-lists, sometimes known as blacklists or block lists, are a reference list of items or actions which are negative and should be forbidden.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=29)** It may be IP addresses that have been banned from accessing a server, it could be actions that a user's not allowed to take, it may be types of data that a server will not accept.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=38)** Allow-lists, sometimes known as whitelists or safe lists, are the opposite, instead of listing what should be forbidden, they list items or actions which should be permitted.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=49)** The usernames that can access a website are a common example of an allow-list.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=54)** You may think the deny-lists and allow-list are perfect opposites, that the choice between them is a matter of preference.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=61)** They are opposites, but they're not interchangeable.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=63)** The difference has important security implications.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=66)** Imagine three items which we will designate as A, B, and C.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=71)** Let's say that only B should be accessible.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=74)** We could either add A and C to a deny-list or we could add B to an allow-list.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=80)** Both versions will have the same effect, B will be available and A and C will not, they seem interchangeable.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=86)** Imagine now that I add a new element, D, to the set of items and D should not be accessible.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=93)** If we had chosen the deny-list approach, D would be accessible by default.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=98)** It's up to us to remember to add D to the deny-list.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=102)** If we forget, then D may be exposed to the world and become a vulnerability.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=106)** If we had chosen the allow-list approach, D would be inaccessible by default.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=111)** You don't have to remember to do anything extra, the world won't see it unless we take an action to allow it, it won't inadvertently become a vulnerability.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=120)** Keeping items restricted by default is the more secure approach.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=124)** Let's look at a concrete example.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=126)** A common development scenario is a web form, which allows users to submit text and which allows some HTML tags to be used but restricts others.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=135)** Users should be able to make text bold or italic, but should not be able to add JavaScript or to affect the page layout.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=141)** The deny-list approach requires listing every HTML tag that cannot be used.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=146)** That'd be a lot of tags and we cannot forget any of them.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=150)** If new HTML tags are introduced in the future, we'd have to remember to update our list.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=154)** The allow-list approach requires listing a smaller number of permitted tags.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=159)** If we forget a tag, it does not create a security problem.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=162)** If new tags are added to HTML later, they'll be disallowed by default.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=166)** The choice to use deny or allow-list comes up routinely while programming.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=171)** Learn to recognize it as a pattern, that you can make a smart choice about which one to use.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/deny-listing-and-allow-listing?u=76281980&t=175)** Deny-lists do have legitimate uses, but restricting items by default and using allow lists is usually the more secure choice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default. (3)
> **Env Vars:** html (4)
> **Definitions:** known as (2), is a  (2)
> **Best Practices:** remember to (3)
> **CLI Commands:** make (2)
> **Analogies:** imagine (2)
> **Speakers:** - let (1)

#### Map exposure points and data passageways
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=0)** - Our final general security principle is to map your exposure points and data passageways.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=6)** Remember the fundamental security equation from the beginning of this chapter?
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=10)** It was awareness + adequate protection = security.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=15)** Mapping data movement and exposure increases awareness of vulnerabilities.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=19)** Once we're aware of them, then we can protect them.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=22)** You can't secure a door if you don't know it exists.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=24)** Mapping helps to define the attack surface.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=27)** The attack surface is made up of all points that are accessible to an attacker.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=31)** It's where they could get data in or get data out.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=35)** If you were mapping exposure points of a castle, the attack surface might be made up of walls, doorways, gates, bridges, and tunnels.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=43)** You can think of your map as a security checklist.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=46)** You may decide to create a list in a word processor or to draw diagrams on paper showing the paths that data takes.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=53)** You should take inventory of where data enters your systems, how it moves between system parts, where it's stored, and how it's returned to the user or to other outlets.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=64)** Let's look at some of the typical exposure points of web applications.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=67)** For mapping data input.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=69)** There are the URLs that get typed into a browser, forms, cookies, and sessions also contain incoming data.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=75)** Data enters a web application anytime you retrieve information from a database.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=80)** Public APIs or application programming interfaces are designated pathways for receiving data into an application.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=88)** You want to be suspicious of all incoming data.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=91)** Data in transition is data that's sent from one point to another.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=95)** It can be vulnerable if it passes through insecure hardware, vulnerable software, or if the data is translated or transformed in any way.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=103)** In many cases, data will arrive to a web server, which will process the request, and send back a response entirely on its own.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=110)** Other web applications may access a database hosted on a separate server or store files on a remote server.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=117)** This requires sending information through networking hardware and software.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=120)** And these pathways should be mapped.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=122)** Cloud services like Microsoft Azure and Amazon S3 are common examples.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=127)** Data can be stored in many places.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=129)** It is important to keep it safe when it's not in use.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=132)** Mapping storage locations allows you to ensure that it has both physical and technical access controls to protect it.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=139)** You should also map where data is output.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=141)** Output can contain bad data that's used to exploit or create vulnerabilities.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=146)** A common and potent example is JavaScript designed to do harm when it's received by a user's browser.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=152)** Focusing on where data enters and leaves your server, where the data travels, where it's stored will help you to understand the topography of your system.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=160)** After all, web security is an exercise in data security.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=164)** Data security has three goals: confidentiality, integrity, and availability.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=170)** Most people remember them by their first letters, CIA.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=175)** Data confidentiality includes protecting personal information of your users and proprietary information of your organization.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=181)** Credit cards and passwords are the most high-profile items to keep confidential.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=186)** Data integrity naturally receives the most focus.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=189)** We don't want hackers making malicious changes.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=192)** Data availability is often overlooked, but is important.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=195)** Protecting the confidentiality and the integrity of data means little if it can't be accessed.
>
> **[3:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=201)** Denial of service attacks and ransomware are threats to data availability.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/map-exposure-points-and-data-passageways?u=76281980&t=205)** Once you have a good map of vulnerabilities, then you can take steps to protect against any threats to confidentiality, integrity, and availability.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), public (1)
> **Env Vars:** cia (1)
> **Definitions:** is an  (1)
> **Speakers:** - our (1)


### 3. Filter Input, Control Output

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Regulate requests
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=0)** - Before you can fly on a commercial airplane, you must first pass through a security checkpoint.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=5)** These checkpoints are designed to detect problems early and to keep the most serious threats out.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=11)** Most security checkpoints implement defense in depth.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=14)** Passenger shows their ID and a boarding pass to an agent, then passes through a combination of metal detectors and x-ray machines.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=20)** More agents are on hand to perform additional checks, such as to manually inspect bags or conduct swab tests to detect chemical residue.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=28)** In this chapter, we'll discuss filtering input and controlling output.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=32)** Filtering input is a lot like a security checkpoint, we want to stop problems early.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=38)** Good data is allowed through, while bad data is kept out.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=42)** Regulating requests, validating input and sanitizing data are different techniques that provide defense in depth.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=48)** Let's talk about the first layer of defense, regulating requests.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=52)** HTTP requests are the most fundamental component of website interaction.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=56)** A browser sends a request to a web server, the web server sends a response back to the browser.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=61)** Like a security checkpoint, a website should be selective about which requests it accepts.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=66)** A request can be inspected and evaluated on some criteria before its content is even read.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=71)** It's like examining the outside of an envelope before you open it to read the letter inside.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=76)** The request method is the first criteria to consider.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=79)** An unexpected request method may indicate an attempt to manipulate the website.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=83)** The most common request methods are GET and POST.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=87)** A GET request is typically sent when a URL is typed into a browser or when a link is clicked.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=92)** A POST request is typically used when submitting a web form.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=96)** A website that does not examine the request method will accept both methods for all pages.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=101)** If you're not expecting a form submission, then you should require a GET request.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=105)** If you are expecting a form submission, then you should require a POST request.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=109)** This ensures that your request methods match your expectations.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=113)** GET and POST requests aren't the only two types of request methods.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=116)** There's CONNECT, DELETE, HEAD, OPTIONS, PUT, TRACE, and probably more coming soon.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=124)** Make sure that your application accepts only the request methods you expect and ignores all others.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=131)** Another criteria to examine is the request/response format.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=135)** A request typically sends two key values, content type, and accept.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=141)** Content type is used to indicate the format of the incoming data.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=145)** Accept is used to specify the format of the response that the browser making the request would like to get back.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=151)** The most common formats for both are HTML, JSON, XML, or text.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=156)** But the format can be any MIME type including RSS, PDF, images, audio, or video.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=162)** It's important to consider which data formats a website should accept in a request and which data formats it's able to send as a response.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=169)** These values can be faked, but it's still worth filtering out data formats which are unacceptable.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=174)** Other attributes of a request that can be examined include a request from an IP address which has been a problem in the past, could be added to a deny list.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=182)** A URL that includes unexpected strings or parameters such as username, password, or session could be rejected.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=190)** The user-agent string could be used to disallow web crawlers and search engines.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=194)** Requests which are too large, or which contain file uploads that are too large could be rejected.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=199)** Filtering requests by examining these types of criteria can be done either in the web server configuration or inside your web application.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=207)** Or you can use firewalls and proxies, which are powerful, specialized tools for regulating requests.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/regulate-requests?u=76281980&t=212)** Together, these techniques can provide a solid first line of defense.

> [!info]- Semantic Content
>
> **Env Vars:** post (4), url (2), http (1), connect (1), delete (1)
> **Code Keywords:** pass (2), require (2), let (1), delete (1), type, (1)
> **API Endpoints:** get  (4), post  (3)
> **Analogies:** such as (2), it's like (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - before (1)

#### Validate input
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=0)** - Validating input is an important technique to ensure that only good data is allowed into your web application.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=6)** As we just saw, regulating requests provides a first line of defense by examining the envelope around the data being sent to our servers.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=14)** If the envelope passes inspection, then the data that's inside the envelope should be inspected next.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=20)** Watching this data coming through well-known public pathways is one of the first steps to secure any website.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=26)** Most hackers don't use secret back doors or unexpected zero day exploits.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=31)** More often, they use the standard data inputs, but then send in malicious data.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=36)** Data validation determines if the data being received as input is acceptable.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=42)** This means you need to establish criteria to separate good data from bad data.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=47)** What are your expectations for the data?
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=50)** What should be considered acceptable data?
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=52)** What should be considered unacceptable data?
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=54)** The answers to these questions will be different for every web application and even changes from page to page.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=60)** However, there are some common validations that are useful.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=64)** The first is to validate the presence or the length of data.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=69)** For example, a first name field should not be blank or should not be longer than 50 characters.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=74)** Another common use is to ensure that strings are not longer than the space allocated in the database columns where they'll be stored.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=80)** The second is to validate the type of the data.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=83)** If a number's expected, then a website should not accept a value that's not a number.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=88)** If a file is being uploaded, we can check the file type.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=90)** For example, a web application may only accept JPEG images or only PDF files.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=96)** The format of the data can also be validated to ensure that it matches an expected pattern.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=100)** The most common example is to make sure that an email address looks like a legitimate email address.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=105)** It should contain a username, an @ symbol, a domain name, and in and a valid top level domain like .com or .org.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=113)** Regular expressions are frequently used for validating the format of data.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=116)** We may also validate whether data is within a set of values.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=120)** We could validate that it's a number between one and 10.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=122)** We might validate that a value corresponds to a database value, or we may validate whether data is excluded from a set of values.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=129)** Validating for inclusion or exclusion in a list is a good place to use the allow list and the deny list that we discussed in the previous chapter.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=138)** Finally, we can validate the data is unique.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=141)** Usually we want to make sure that an existing value is not being used again.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=144)** A new user can't have the same username as an existing user.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=147)** A blog post can't have the same URL as an existing blog post.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=150)** So these are checks to confirm uniqueness.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=153)** Often this type of validation requires making a database query to find out if a value already exists in the database.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=158)** When writing validations, make sure that your validation logic is correct.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=163)** Every programming language has quirks and pitfalls to watch out for.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=166)** Testing for exact equality and testing whether value is blank, empty or not defined is often tricky.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=173)** For example, in PHP, a validation might test for the presence of a value.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=178)** If the value was null or an empty string, you would expect it to return False and to fail the validation.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=183)** If the value was a string, you would expect it to pass the validation.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=187)** But notice what happens when the value is a string containing the number zero.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=192)** It also returns False.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=194)** Other numbers will return true and pass the validation, but zero is special and will fail.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=199)** You can see why this would be a problem if you imagine a web form that asks how many pets you own.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=204)** You can't answer zero.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=206)** So validating input is an important technique to ensure that only good data is allowed into our web application.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=212)** It reduces software bugs that can become vulnerabilities.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/validate-input?u=76281980&t=216)** It'll become more difficult for hackers to slip malicious data past our defenses.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), public (1), type. (1), finally, (1), for. (1)
> **CLI Commands:** make (3), find (1), php (1)
> **Env Vars:** jpeg (1), pdf (1), url (1), php (1)
> **Analogies:** for example (3), imagine (1)
> **Definitions:** is an  (2), is a  (1)
> **Cross-References:** we discussed (1), previous chapter (1)
> **Warnings:** watch out (1)
> **Speakers:** - validating (1)

#### Sanitize data
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=0)** - When regulating requests and validating input, unacceptable data is rejected or ignored.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=6)** That does not mean that the data that passes our validations is safe.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=9)** It just means that it was not obviously unacceptable.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=12)** Data that's allowed into your application must still be sanitized to make sure it's harmless.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=18)** Sanitization is a lot like the decontamination tents that sometimes appear in TV shows and movies.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=23)** The characters go off in dangerous territory where there may be disease, radiation, or unknown threats.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=29)** When they return to safety, they must first pass through a special tent for a shower and a thorough scrubbing.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=35)** In the 1983 film "Silkwood," four times, characters in a nuclear facility are exposed to radiation and must submit to a brutal decontamination process.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=45)** After the film came out, it became known as a "Silkwood" shower.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=49)** Sanitizing data is one of the most important steps to secure web application.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=54)** Easiest and most commonly used attacks all send in malicious data, which passes your initial validations.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=60)** Now, unlike validations, we won't try to examine the data to identify the harmful parts.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=65)** We'll just put it through a sanitization process, like sending it through a decontamination tent, regardless of whether the hero is carrying the virus or not.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=73)** We'll give data a "Silkwood" shower to scrub away anything that's harmful.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=77)** A good first step is to typecast all data to make sure that it's the correct data type.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=83)** Every programming language handles data types differently, and some are more forgiving than others.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=88)** In many languages, this logical expression would evaluate to true.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=92)** The integer one is equal to the string one.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=95)** The language performs type juggling to convert the data type into a value which can be compared.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=100)** Many languages allow adding different data types together.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=104)** The integer one can be added to the string one to get the end integer two.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=108)** It's better to control the process by typ casting data yourself.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=112)** In this example, the first line is typecasting a value as an integer before it's being assigned to a variable.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=118)** Maybe that value will already be an integer, maybe not.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=122)** Either way, the code ensures that it will be an integer before it's used.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=126)** That makes it harder for an unexpected value to get through.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=129)** Notice that the typecasting happens as early as possible so that we don't forget to do it later.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=134)** How we apply further sanitization depends on where the data will go next.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=139)** A map of data pathways will help.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=141)** If data will be sent in an SQL string to the database, then it needs SQL sanitization.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=146)** If data will be sent to the browser in JavaScript, then it needs JavaScript sanitization.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=152)** The same applies to HTML, JSON, XML, or any other language or format.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=158)** The rules about what could be harmful depend on the format.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=161)** Most languages include a few special, powerful characters, which are part of the structure of the language.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=167)** If these special characters are in the data and not sanitized, then they may use their special meaning to cause problems.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=174)** For example, in HTML, the less than symbol indicates the start of a tag, and the greater than symbol indicates the end of a tag.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=182)** Here's an HTML tag where a class attribute is being provided by a PHP variable.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=187)** If that variable contained a double quote with a greater than sign, those characters would close the HTML tag.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=194)** After that, an attacker could add custom HTML or JavaScript code to the page.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=199)** There are two techniques for rendering these powerful characters harmless.
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=203)** The characters can be encoded.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=205)** That means that the powerful characters will be replaced with harmless equivalent characters.
>
> **[3:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=210)** For example, in HTML, we can replace the less than symbol and greater than symbol with &lt; and &gt;.
>
> **[3:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=219)** The HTML will still show the user a less than or greater than sign but without using a powerful character.
>
> **[3:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=224)** Or the characters can be escaped.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=227)** That means that a special character will be added before any powerful characters to render them harmless.
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=232)** For example, in SQL queries to a database, the single quote is a powerful character, which indicates the beginning and end of a string.
>
> **[3:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=239)** Adding a backslash character in front of any single quotes that are in a string ensures that SQL treats them as harmless single quotes and not as the indication of the starter end of a string.
>
> **[4:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=249)** This is a common vulnerability that we'll revisit in the next chapter.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=253)** You shouldn't attempt to write your own sanitization methods or to encode or escape characters.
>
> **[4:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=258)** Sanitizing thoroughly and for all possible cases is difficult.
>
> **[4:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=262)** Instead, you should use well-tested, language-specific functions included with the programming language or in a standard code library.
>
> **[4:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=270)** You should also avoid the temptation to remove or correct bad data.
>
> **[4:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=274)** Stick to encoding and escaping.
>
> **[4:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=276)** Removing data can become a game of cat and mouse.
>
> **[4:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=279)** Let's imagine that a hacker submits some JavaScript in a string.
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=283)** If you add it to a webpage, it would run the hacker's code.
>
> **[4:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=286)** Instead, you detect the opening and closing script tags and remove them.
>
> **[4:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=291)** With the script tags gone, the JavaScript will not execute, but the hacker sees the result and tries again.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=298)** This time, the string is constructed so that when you detect and remove the script tags, it leaves another script tag behind.
>
> **[5:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=306)** Encoding or escaping would've made both strings harmless.
>
> **[5:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=310)** Data arriving directly from a user is not the only data that needs sanitization.
>
> **[5:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=314)** Retrieving any stored data should be treated as new input too.
>
> **[5:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=318)** For example, data may be properly sanitized for SQL when it's received and then stored in a database, but when it's retrieved from the database, it needs to be sanitized again before being used as HTML, JavaScript, JSON, XML, or any other format.
>
> **[5:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=334)** It's also possible that the data changed since it was last stored.
>
> **[5:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=338)** Just because it resides on your system doesn't mean you should trust it more than data coming directly from a user.
>
> **[5:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sanitize-data?u=76281980&t=344)** You should always sanitize data before using it.

> [!info]- Semantic Content
>
> **Env Vars:** html (8), sql (5), json (2), xml (2), php (1)
> **Definitions:** means that (3), is a  (3), known as (1)
> **Analogies:** for example (4), imagine (1)
> **CLI Commands:** make (2), php (1), cat (1)
> **Code Keywords:** pass (1), type. (1), let (1)
> **Best Practices:** don't forget (1), you should always (1)
> **Cross-References:** in the next (1)
> **Speakers:** - when (1)

#### Label variables
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=0)** - It's important to keep track of which data has been sanitized and which has not.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=5)** We can use variable names to label which data is potentially dangerous and which data is safe to use.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=11)** Before sanitization, we can use names such as dirty, raw, or unsafe.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=15)** After sanitization, we can use names such as clean, sanitized, or safe.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=20)** Let me show you an example using PHP.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=22)** An email address is received from a web forum and assigned to the variable, raw_email.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=27)** The prefix raw makes it obvious that it's not been sanitized.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=30)** After the value passes through a sanitized function, it's assigned to a new variable, safe_email.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=35)** The prefix safe makes it clear it has been sanitized.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=38)** Of course, it can also be done as a one step process without using the variable raw_email, but still, the variable name indicates that it has been sanitized.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=47)** Here's another example, using Ruby on Rails.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=49)** An empty hash is assigned to the variable, dirty_params, which is short for parameters.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=54)** Several request parameters are added to it, then the sanitized method is called on each one in turn, and the result is assigned to a new variable called clean_params.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/label-variables?u=76281980&t=63)** Using variable names as labels is a simple, effective way to keep track of the security condition of your data and to help you to avoid simple mistakes.

> [!info]- Semantic Content
>
> **Code Identifiers:** raw_email (2), safe_email (1), dirty_params (1), clean_params (1)
> **CLI Commands:** php (1), ruby (1), rails (1)
> **Definitions:** short for (1), is called (1), is a  (1)
> **Code Keywords:** let (1), function (1)
> **Analogies:** such as (2)
> **Env Vars:** php (1)
> **Speakers:** - it (1)

#### Keep code private
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=0)** - In the theater, the audience should see the action on the stage but not the activity backstage.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=6)** You wouldn't want the audience watching the set changes or wandering through dressing rooms.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=10)** There's a clear division between what gets shown and what remains hidden.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=15)** The same is true for our code.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=16)** Websites present visual information to users but users should not see the work that's behind the scenes that makes it happen.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=23)** Controlling output includes controlling visibility.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=26)** Behind the scenes look at our code would provide a lot of valuable information for a hacker.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=30)** They could see what security defenses were being used and pinpoint its weakest links, so we should keep all code private.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=38)** The first step you can take to control visibility is to organize code into two separate directories: public and private.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=45)** You can think of them as onstage and backstage.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=48)** The public directory will be accessible by the web server.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=51)** It provides a point of entry to our website.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=53)** It will contain that pages that we want the public to see.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=57)** Private directory won't be accessible by the web server.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=60)** However, the files in this directory will be accessible by your code because it has access to the file system.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=67)** Most web frameworks organize code into public and private directories for you.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=71)** Once code is split into public and private directories, the web server needs to be configured to serve files from the public directory.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=78)** You can do that by setting the public directory as the document route in the web server configuration file.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=83)** This tells the web server where to find files that should be accessible to the public and prohibits it from serving files which are not inside that directory.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=91)** Pages in the public directory can still contain private code.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=95)** For example, a public page can contain PHP code which users should not see.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=100)** The user won't see it because the web server will process the PHP and output HTML.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=104)** While these pages can contain code, it's still smart to keep that code to a minimum, make it boring.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=110)** Create functions for the interesting parts, store them in private files, and then load and call them from the public files.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=117)** If for any reason the web server failed to process the page correctly, any exposed code will be minimal and harmless.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=124)** The good stuff will be backstage in the private directory.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-code-private?u=76281980&t=127)** It may take some reorganization of your code to have a clear division between code that should be public and private, but the increased security is worth the effort.

> [!info]- Semantic Content
>
> **Code Keywords:** public (12), private (9)
> **CLI Commands:** php (2), find (1), make (1)
> **Env Vars:** php (2), html (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### Keep credentials private
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=0)** - When we think of credentials, we usually think of usernames and passwords, and website code often uses credentials to connect to databases, to connect to a payment processor, to access third party APIs, or connect to source code repositories.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=14)** These credentials are valuable access keys that need to be handled securely.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=18)** Don't put credentials directly inside your code.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=21)** We call that hard coding the credentials.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=24)** Instead, store the credentials in a separate file and use variables or even better constants to refer to the values.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=31)** Separating configuration from the code is considered a best practice.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=34)** It's also more secure.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=36)** These values are still in the project, but it's easier to give special treatment to a separate credentials file.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=42)** Version control systems such as Git, SVN, and Mercurial present unique challenges for credentials.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=48)** These code management tools are often used to distribute code via shared repositories or third party services.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=54)** Adding credentials to version control is like shouting a secret on a busy street.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=58)** Your project collaborators will be able to see your credentials.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=60)** Your collaborators may be trustworthy, but they could be hacked or lose their laptop.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=66)** The third party hosting company can see the credentials too.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=68)** You're trusting them not to peek or make any mistakes which might expose your information.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=73)** In addition, version control systems are designed to track data over time in a way that's really hard to forge or circumvent.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=80)** It's difficult to purge a file from the history once it's been added to version control.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=84)** All files with credentials should be excluded from version control right from the start of a project.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=90)** This prevents your credentials from being shared.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=93)** If you've already committed credentials to version control you should exclude the file and then use different credentials.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=98)** Some developers even use the environment variables of the operating system to store credentials as a way to ensure that they cannot be added to version control accidentally.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=107)** Excluding files from version control also encourages collaborators to create their own file with unique credentials instead of sharing common ones.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=115)** You should never reuse passwords.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=117)** Passwords should be unique for every computer, every environment, and every database.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=122)** If credentials are exposed or stolen, the access granted by each password will be limited.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=128)** Another common concern is how to store credentials.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=131)** A server needs credentials to do its work without a human around to provide them.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=135)** Those credentials must be stored somewhere on the server.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=139)** Developers often struggle with this.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=140)** They know that user passwords in a database should never be stored in plain text, so it seems insecure to use plain text for passwords that connect to databases or other services.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=149)** Some developers may resort to obfuscation techniques to hide credentials, but in my opinion it adds little security.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=156)** The obfuscation is easily removed, especially by anyone with enough access to the server to see those credentials in the first place.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=163)** The credentials could be encrypted which provides strong protection, but then the key or password to decrypt them must also be present on the server.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=171)** It's a chicken and egg problem.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=173)** If the server can decrypt a password then so can someone with access to that server.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=178)** It's a common dilemma with no easy solution.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=180)** Depending on the circumstances, storing credentials on the server in plain text can be an acceptable choice.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=187)** Some web hosting companies offer a nice alternative.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=190)** They provide a special database for storing credentials and other environment variables, and that data is shared with the server behind the scenes each time it boots up.
>
> **[3:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=198)** Regardless of where the credentials reside make sure that location has good access controls and use the principle of least privilege to ensure that the credentials are limited in what they allow.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=209)** When connecting to remote servers using SSH or SFTP you may be able to use SSH keys, which are a more convenient and secure option than a username and password.
>
> **[3:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=219)** SSH keys use public key cryptography to create two files which are mathematically linked.
>
> **[3:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=225)** They're known as a key pair with one public key which can be shared and one private key which is kept secret.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=231)** You can put the public key on remote servers and on code repositories like GitHub.
>
> **[3:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=235)** When you access those servers, the public key and your private key interact to authenticate you and to grant access.
>
> **[4:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=241)** It's more secure than a username and password because the private key acts like a really long password.
>
> **[4:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=247)** Over 1,000 characters long, which is almost impossible to guess.
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=251)** It's more convenient too because you don't have to type any password to log in, the SSH key will be sent automatically.
>
> **[4:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=259)** For even stronger security, you can require SSH keys for all users and disabled password based logins completely.
>
> **[4:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=266)** This removes any chance that an attacker could guess a user's password.
>
> **[4:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=270)** Credentials are keys to areas that we work hard and keep secure.
>
> **[4:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=274)** It's essential that we secure those keys too.
>
> **[4:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-credentials-private?u=76281980&t=276)** Don't let poor handling of credentials become a weak link in your security.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), private (3), this. (1), require (1), let (1)
> **CLI Commands:** ssh (5), make (2), git (1)
> **Env Vars:** ssh (5), svn (1), sftp (1)
> **Best Practices:** best practice (1), you should never (1)
> **Tools:** github (1)
> **Exercise Files:** source code (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)

#### Keep error messages vague
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=0)** - Hackers use the results of their actions to improve their chances of success.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=5)** Imagine that a hacker visits a standard login page on a website and tries a username and password.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=11)** If the response is username not found, then the hacker knows to try a different username.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=16)** If after a few tries the response changes to password not found, then they'll know that they've made progress and they have found a valid username.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=24)** A more secure approach is to return an identical login failed message in both cases.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=30)** Don't tell a hacker when their actions are getting warmer or colder.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=33)** They can use that information to adjust their attacks.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=36)** Give as little information back as necessary.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=39)** This applies to all user messages, but especially to error messages.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=44)** These may be errors that you're expecting and handling, like failed logins, or they may be unexpected errors caused by bugs in your code.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=51)** When you're in the process of developing a website it's helpful to have error reporting enabled, so that any bug will display detailed information in your web browser.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=59)** It may tell you about what went wrong, when the problem was encountered, and even list file names, function names and line numbers to help you to track down the problem.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=68)** But when you launch your website to the public, it's important to turn off in browser error reporting.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=73)** The public should never see such detailed information.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=75)** Instead, return standard generic error messages.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=79)** On the web, the two most common are 404 and 500 errors.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=83)** A 404 error says that a page or something else being requested was not found.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=88)** A 500 error is a general error.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=90)** It just indicates that something went wrong.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=92)** You don't need to elaborate.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=94)** Hacker's benefit from the details about errors, but regular users don't.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=98)** You can provide links back to the main website, so that regular users can recover and continue browsing.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=104)** Errors can happen with the web server or with the web application.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=108)** Web servers have their own generic pages to use by default but they're not very attractive.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=113)** You can configure both the web server and your web application to use the same standard error pages.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=119)** That way if something goes wrong at the web server level before your request even gets to your web application the error page will look the same.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/keep-error-messages-vague?u=76281980&t=126)** It can be a branded page, which will give your site a tailored look while also not providing any unnecessary information.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), function (1), continue (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** configure (1)
> **Speakers:** - hackers (1)

#### Smart logging
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=0)** - Logging plays an important role in security.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=3)** It provides evidence after an incident to help establish what happened, and logs can help you to find and fix problems.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=9)** Be aware that logging itself can become a security liability.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=14)** We need to be smart about what gets logged and how it gets logged.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=18)** There are three main activities you should log: errors; sensitive actions; and suspicious activity.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=25)** You should log any errors that occur.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=27)** Include as many details about the error as possible.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=30)** It will help you to understand the state of the application when that error took place, and to track down the problem.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=35)** You should log any sensitive actions.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=37)** Examples might include logins by users or admins, changing user permissions, financial transactions, file exports, or deleting database records.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=47)** You should log suspicious activity, which might indicate an attack.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=50)** This might be page requests sent in too quickly or request looking for common vulnerabilities.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=56)** For example, I don't run a WordPress website, but I frequently see requests to my servers searching for a WordPress admin page.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=63)** That's an indication that someone is probing my site, looking for a way inside, probably using an automated script.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=70)** You should log the information which is most helpful to you, but I will give you some tips on information which is commonly helpful.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=77)** Many web frameworks already include similar functionality.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=81)** Log the date and time when an event occurred.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=83)** This is critical to establishing a timeline of events.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=87)** Record information about the source of the action.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=89)** At a minimum, log the IP address of the request.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=92)** If the user's logged in, you can store information about the user's account, log the action, or what the user was trying to do, and as much information as possible about the target of their action.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=103)** What were they trying to affect?
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=105)** If they're trying to edit a record in the database, then log the ID of the record.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=109)** Record the URL, all parameters, including the form parameters in a post request and any cookie data that was sent along with the request, and record a backtrace if your programming language supports it.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=120)** A backtrace is a list of the files and functions which were used by the code along the way to the error action.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=127)** It allows you to follow the code step by step.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=130)** It's not essential that you log all of these, but they give you some ideas.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=134)** Logs should always be kept in restricted areas.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=137)** They can be stored in a database or in simple files in a private directory.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=142)** You need to take care not to accidentally log sensitive data.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=145)** For example, you shouldn't log all post parameters sent in by web forms because you may end up recording user passwords in plain text in the log file.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=153)** Database queries or interactions with a payment processor can also include sensitive data.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=158)** I also like to rotate log files so they don't get too long and difficult to work with.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=162)** Each day, the current log file is renamed, usually with a number after it, and a new log file is started.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=169)** The next day, all of the numbers are incremented by one and the rotation keeps going and it keeps the logs for as many days as you specify.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=176)** Linux has a program called Log Rotate, which does this for you, and there's similar software available for Windows.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/smart-logging?u=76281980&t=182)** Smart logging is a key part of protecting your application, detecting threats, and providing helpful information to use after an incident has happened.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Code Keywords:** private (1)
> **Env Vars:** url (1)
> **Warnings:** be aware (1)
> **Speakers:** - logging (1)


### 4. The Most Common Attacks

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Types of credential attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=0)** - In 2009, an attacker cracked a password to a support staff account at Twitter, and gain access to an admin control panel.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=8)** This allowed them to hijack many user accounts, including the account of the US president.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=13)** What was the password to the support staff account?
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=15)** It was happiness.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=17)** Credentials are a standard feature of every website.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=20)** Developers use credentials to configure the server and upload code.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=24)** Users have credentials which allow them to log into password protected areas of the site.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=28)** Credentials can grant an attacker easy access to do harm.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=32)** There are several attacks which can be made on credentials.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=35)** There's credential theft, brute-force attacks, dictionary attacks, and credential stuffing.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=40)** Credential theft is pretty straightforward.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=42)** Someone discovers your username and password.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=45)** Hopefully, you already know better than to keep credentials on a post-it note next to your monitor.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=49)** You should also be careful about sending passwords over email.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=53)** There's a small threat of it being viewed in transit, but the larger threat is in storage.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=58)** Emails get filed away, stored for years, and are searchable.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=61)** Your security will depend on data stored on someone else's computer.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=66)** In 2014, the CEO of Sony Pictures learned that lesson the hard way.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=71)** After a major data breach, all of his emails were posted online, including one where he'd forgotten his password, and his assistant helpfully sent it to him.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=79)** Data breaches are the most common source of credential theft.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=82)** It's become common for an entire database of user credentials to be exposed.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=86)** These databases are valuable to hackers.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=89)** They're shared and sold before they eventually become publicly available.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=92)** Hopefully, the passwords in the database are well encrypted and not in plain text, but even encrypted passwords can be discovered, if a hacker has enough time and motivation.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=102)** A brute-force attack is when an attacker uses software to try every combination of characters.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=107)** In order to guess a password, it is trial and error.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=110)** They could attempt a brute-force attack against a login page, or if they have a database of encrypted passwords from a data breach, they can try to brute force each one by running guesses through an encryption algorithm until a result matches that encrypted password.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=123)** The total time necessary to try all combinations of a password depends on several variables, the possible characters, the length of the password, and the speed of each attempt.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=133)** The character possibilities raised to the power of the length tells you how many combinations there are.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=139)** Then you multiply that by how fast a computer can try each one to figure out how long it takes to try them all.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=146)** Now, this is not the actual time.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=148)** If your password was just a repeated lowercase a, then it might be the very first password that was tried.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=154)** This is the total time to try all the possibilities.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=158)** It's like searching for a needle in a haystack.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=161)** Since we can't know where the needle will be located inside the haystack or even how the search will proceed, we use the size of the haystack as a way to measure the strength of a password.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=170)** Time per attempt decreases as computers become faster.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=175)** Botnets and distributed computing allow for millions of guesses per second.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=179)** Specialized hardware rigs can try billions of guesses per second.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=183)** The other variables have to increase in order to keep a password difficult to guess using brute force.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=189)** We'll talk about how to do that in a moment.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=191)** A dictionary attack is also a brute force attack, but it's one which prioritizes words that are in a dictionary over random combinations.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=200)** Users prefer passwords with common words because they're easy to remember, but attackers know this fact, so they prioritize dictionary words first.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=209)** It does not change the total time required to try every combination, but it can greatly reduce the actual time required to find the correct password.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=218)** A dictionary for guessing passwords is not just a basic dictionary like Webster's, it includes common passwords like password1234, qwerty, and letmein.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=229)** It includes inventive spellings and letter substitutions.
>
> **[3:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=233)** Most importantly, it includes millions of passwords, which have been made public by large database breaches.
>
> **[3:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=238)** If a password was used once, it becomes a good candidate to try again.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=242)** For example the password, NCC-1701 often shows up in leaked databases.
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=248)** It may seem random at first glance, but to the many fans of Star Trek, it's the registry number of the USS Enterprise.
>
> **[4:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=255)** This leads us to credential stuffing.
>
> **[4:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=257)** As soon as a data breach happens, attackers race to other sites around the internet and try these newly discovered credentials.
>
> **[4:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=264)** They know users frequently choose the same usernames and passwords.
>
> **[4:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=268)** If it works on one website, it may work somewhere else.
>
> **[4:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=271)** They use an automated process which can quickly try many credentials across many sites.
>
> **[4:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=276)** Credential stuffing is an effective attack which is rapidly growing in popularity.
>
> **[4:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=280)** It's become so popular that a successful hacker's first action is usually changing the account password so that they can block access to the other hackers who are also trying credential stuffing.
>
> **[4:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/types-of-credential-attacks?u=76281980&t=290)** Understanding these common attacks on credentials is the first step to preventing them.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (1), public (1), else. (1)
> **Env Vars:** ceo (1), ncc (1), uss (1)
> **Analogies:** it's like (1), for example (1)
> **Prerequisites:** configure (1), required to (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Warnings:** be careful (1)
> **Speakers:** - in (1)

#### Strong passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=0)** - Developers must be smart about passwords in order to protect against credential attacks.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=5)** The following advice is good for everyone, but it's especially important when passwords are used to administer servers.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=11)** You should use long passwords with at least 12 characters.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=15)** 12 is a minimum.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=16)** 15 characters or more would be even better.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=18)** It's good to use character variety; uppercase, lowercase, numbers and symbols but variety is not as important as the length.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=26)** A common mistake is to think that a short, complex password is more secure than a simple, long one.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=32)** Any eight character password, even one with character variety, can be discovered by trial and error in less than three hours.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=39)** A 12 character password using all lowercase letters would take two weeks.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=44)** If you use both length and variety together then a 12 character password would take 9,000 years.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=50)** You should also avoid patterns and dictionary words, we already know that hackers try those first.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=56)** It's especially important that you never reuse passwords.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=59)** This advice matches the principle of least privilege.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=62)** Each password can be seen as a key, which grants access privileges and which should only unlock what it needs to to get the job done.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=70)** Think of it this way, every time you reuse your password, you're giving that password more privileges.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=76)** Unique passwords also prevent the increasing threat posed by credential stuffing.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=81)** This password advice may seem hard.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=83)** Choose long, complex passwords, but don't reuse them.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=87)** How's any person supposed to remember them?
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=90)** Well, you aren't.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=91)** Get yourself a good password manager.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=93)** A password manager is software which will store passwords in an encrypted file.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=98)** You only need to remember one master password which unlocks the rest of them.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=102)** Most include nice features like strong password generators, form autofill, and a place to securely store other notes.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=109)** Popular password managers are 1Password, Bitwarden, LastPass, and Dashlane.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=115)** Some are free and some are paid, but all of them are worthwhile.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=119)** SSH keys are a good alternative to passwords.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=122)** They act like a password, but with over 1000 characters and are sent automatically.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=127)** You can log into your servers with SSH keys.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=130)** You can connect to GitHub using SSH keys.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=133)** One of the best ways to make credentials more secure is to use multi-factor authentication whenever possible.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=138)** It's also sometimes called two-factor authentication.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=141)** In addition to the password, a user must authenticate with another factor.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=146)** Usually the second factor is an object in your possession.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=149)** A hardware authentication device, such as a YubiKey, or software that generates authentication codes, such as popular ones made by Google and Microsoft are excellent choices.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=159)** Many websites implement two-factor authentication by sending an SMS text message.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=164)** Text message codes are good, but weaker than the other choices because they can be intercepted or viewed on a stolen phone.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=177)** Most major websites and services that developers use offer multi-factor authentication now.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=183)** In addition to protecting your servers and the services that you use, protect your users by always hashing their passwords with an encryption algorithm before storing them.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=192)** Bcrypt, also known as Blowfish, is recommended.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=195)** It has the extra advantage of being slow which limits the speed that attempts can be made.
>
> **[3:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=201)** You can also encourage users to pick strong passwords using the requirements that we've already discussed.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=206)** Password strength meters can be helpful.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=209)** Because we know that length is a great way to make passwords more secure, you should never limit the length of user passwords.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=215)** Hashing algorithms do not care if a password is long.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=218)** Use login throttling to slow down the rate of attempts to your login page.
>
> **[3:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=223)** For example, after 10 failed attempts, you can make a user wait for five minutes before they can try again.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=229)** 10 failed attempts for a five minute penalty is not very burdensome on users but it would cripple a brute force attack.
>
> **[3:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/strong-passwords?u=76281980&t=236)** If you stick to these password recommendations and you don't do silly things like send passwords over email, then it'll be difficult for an attacker to find the key and take the easy way in through the front door.

> [!info]- Semantic Content
>
> **CLI Commands:** ssh (3), make (3), find (1)
> **Env Vars:** ssh (3), sms (1)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Analogies:** such as (2), for example (1)
> **Best Practices:** recommended (1), you should never (1)
> **Tools:** github (1)
> **Warnings:** common mistake (1)
> **Speakers:** - developers (1)

#### URL manipulation and Insecure Direct Object Reference (IDOR)
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=0)** - A URL manipulation attack is when someone edits the URL text in the browser's location bar, in order to probe a website.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=8)** URLs are easily changed, and they often follow a pattern which makes them inviting targets.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=13)** Manipulation may be performed by innocent users who are just curious, or by hackers who're probing for vulnerabilities.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=20)** Editing a URL can reveal private information or allow users to perform actions which should be restricted.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=26)** Manipulating a URL may reveal a private webpage.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=30)** The public website may not have a link to that page, or the page may be only accessible under certain conditions.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=36)** For example, adding "preview=true" to a URL might show an unpublished version of the page.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=42)** URLs may correspond to a set of files and directories.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=45)** Changing the URL can help to map that structure.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=48)** Values in a database can also be mapped.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=51)** If a page displays a person's contact information, when the URL contains an ID of 27, then an attacker could try all IDs to get a full list of the people in the database.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=61)** Software on a web server sometimes includes built-in webpages with special information for administration.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=66)** For example, "/wp-admin" is a standard login page for WordPress websites, and its presence indicates that WordPress is being used.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=73)** One of the most dangerous consequences of URL manipulation is for an attacker to be able to access privileged resources that they shouldn't be able to see or to use.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=82)** This common vulnerability has a special name: insecure direct object reference, or IDOR for short.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=90)** It's ranked as one of the top security threats.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=93)** Insecure direct object reference is when code accesses a restricted resource based on user input but fails to verify the user's authorization to access that resource.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=104)** Put another way, there exists a direct reference to an object which is insecure.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=109)** Imagine that a user who's not logged in clicks on this link to view an invoice after completing a purchase online; this is a direct object reference.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=117)** A user has direct access to the invoice, which is the object, using the invoice ID.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=123)** It's insecure if there's never any verification that the user is authorized to view that invoice.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=129)** Not only could anyone use the same URL to view this invoice, but entering other invoice IDs, such as "CR-29813", would most likely provide insecure access to other invoices.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=141)** These invoices might reveal personal information, items ordered, and credit card numbers.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=146)** Types of resources, which could have insecure direct references, are database data, files, directories, scripts, and functions.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=156)** If a user can trigger what should be a privilege result without having to be logged in or to have their access privileges checked, then it's an example of insecure direct object reference.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=165)** You can prevent URL manipulation attacks and insecure direct object references.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=170)** Remember, the URLs are exposed and easily editable.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=173)** Pages on your website are accessible even if they're not linked from other pages.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=177)** Security through obscurity on its own is not going to be enough.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=180)** Consider edge cases and expect the unexpected.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=183)** When possible, define an allow list of the acceptable parameters and reject other input.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=189)** If a list has a sort parameter which can be set to one of five values, use an allow-list and reject all the other values.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=196)** Configure the web server to gracefully handle errors and unfound URLs.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=200)** Remember to keep error messages vague so that if a user is probing, they won't get helpful feedback.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=206)** Most importantly, if you need to control access, then use access control.
>
> **[3:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=211)** Validate a user's authorization before allowing access to a privileged resource.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=215)** Require a user to log in and reconfirm that a logged in user has enough access privileges.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=221)** Another prevention strategy is to change the direct object reference to an indirect object reference.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=228)** One way to do this would be to provide a user a list of choices which are specific to the current page.
>
> **[3:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=233)** For example, a logged in user might see a list of four previous orders that they've placed, along with links which let them see details.
>
> **[4:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=240)** In the database, these orders might have IDs like 23, 47, 82, and 105.
>
> **[4:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=246)** A direct object reference would use those ID numbers in the URL of the links.
>
> **[4:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=252)** Instead, you could simply use the numbers one-through-four for the URL, and then write code which determines that order number two is actually order 47 in the database.
>
> **[4:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=262)** Now, the reference is indirect.
>
> **[4:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=265)** The user can only ask for those four orders.
>
> **[4:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=268)** A request for order five would not return anything.
>
> **[4:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/url-manipulation-and-insecure-direct-object-reference-idor?u=76281980&t=271)** Being thoughtful about URLs, using access control when you need it, and using indirect object references when possible will help prevent URL manipulations and insecure direct object references.

> [!info]- Semantic Content
>
> **Env Vars:** url (13), idor (1)
> **Code Keywords:** private (2), public (1), require (1), let (1)
> **Analogies:** for example (3), imagine (1), such as (1)
> **Definitions:** is a  (2)
> **Best Practices:** remember to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - a (1)

#### SQL injection
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=0)** - SQL Injection is an attack that occurs when untrusted data is used to construct an SQL query.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=7)** The data is inserted or injected into the SQL query string.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=11)** It allows an attacker to execute arbitrary request to an SQL database.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=16)** SQL Injection sometimes called SQLI for short is not the only form of code injection, but it is the most common.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=24)** Most modern web applications rely heavily on databases and by some estimates, 75% of databases use SQL.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=32)** The same general principles that we discuss for SQLI can be applied anytime untrusted data is used to construct a query or a value that's used for code.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=41)** OWASP, the Open Web Application Security Project, has ranked code injection as one of the top security threats to web applications for the last 10 years.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=50)** The subject is definitely worth our attention.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=52)** SQLI is easy for attackers to detect and to exploit.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=56)** Let's look at an example of SQL Injection.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=59)** Imagine a login form.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=61)** When the form is submitted, the application code constructs an SQL query to search for a matching username and password in the user's table.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=68)** Be sure to notice where the username variable is inserted into a string and how it appears in the resulting SQL.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=75)** Now imagine that a hacker visits the login form.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=78)** Instead of providing a username, the hacker submits a carefully crafted string in its place.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=84)** Read the resulting SQL carefully.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=86)** Notice the single quote right after sqli.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=89)** When it's inserted into a string, that single quote closes the opening single quote.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=95)** In order to break out of the intended input value, the fragment or one equals one will always return true and the double dashes indicate the start of a comment in SQL.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=107)** The result is that the query will match all users and the password clause will be ignored.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=112)** Potentially, this SQLI attack could bypass the login page and grant access without the correct credentials.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=119)** SQLI attacks can have many different goals.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=122)** They can be used to probe the structure of a database.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=124)** They can be used to steal data.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=126)** This is probably the most common goal.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=128)** To steal personal information, passwords, credit cards or anything else in the database that has value.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=133)** They can add or change data, perhaps to place an order or to elevate their access privileges.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=138)** They may be used destructively for truncating or dropping tables, or as we saw in our example, may be possible to trick an authentication test so that it evaluates to true without needing the correct credentials.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=149)** Any query which utilizes user input is vulnerable to SQLI.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=153)** The most frequent area of attack are SQL where clauses.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=157)** They're used to locate records which match parameters and they incorporate a lot of data from the current request.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=162)** Other query types are equally vulnerable just not as frequently used.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=166)** Insert, update, and delete statements must be considered, as well as other SQL clauses like select and order by.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=173)** One variation on SQL Injection is called Blind SQL Injection.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=177)** A vulnerability may exist on a page but it does not change the response to the browser.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=182)** That means that there would be no feedback to tell an attacker if it succeeded.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=186)** But a clever technique is to inject an SQL query which will cause the database to pause or return a slow response if the injection works.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=195)** The easiest version is to use SQL sleep function to create a slow response.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=199)** If it works, the server will pause for five seconds.
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=203)** This tells an attacker that a vulnerability exists, then they can execute other commands blindly.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=208)** Here's a more elaborate example, which when injected, will join a new query to the original one.
>
> **[3:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=214)** And then use if to test if the first character of a username is CHAR 97 which is the letter A.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=221)** If it's A, then the benchmark function executes a slow process 5 million times.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=227)** Otherwise, it finishes quickly.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=229)** An attacker could go through the entire alphabet in a loop to determine the full username.
>
> **[3:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=234)** This technique can be used to examine the structure of the database, table names, column names as well as the values in the table rows.
>
> **[4:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=241)** The attacker does not need to even see the text.
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=243)** They can just play guessing games and use fast or slow responses to know when they guess right.
>
> **[4:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=249)** So what are the solutions to SQL Injection?
>
> **[4:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=252)** First, you should limit the application's database privileges.
>
> **[4:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=256)** Your application needs to read and write to the database, but it probably does not need permission to create, drop, or truncate tables, probably should not be able to grant access privileges to database users, and you should never let the application connect as a root user who can do anything including creating new user accounts.
>
> **[4:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=273)** If you use the principle of least privilege, it will limit the damage that any SQL Injection can cause.
>
> **[4:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=279)** The most important prevention is to sanitize the input.
>
> **[4:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=282)** You should always escape data for SQL before using it in a query string.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=287)** In simple terms, SQL sanitization means rendering every single quote in the data harmless by putting a backslash in front of it.
>
> **[4:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=295)** But single quotes are not the only danger and there are many tricks to avoid detection.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=298)** Most programming languages for the web have an SQL sanitization library that you can use.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=304)** Use one of those.
>
> **[5:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=305)** They offer better sanitization than if you tried to write your own function.
>
> **[5:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=309)** One of the best preventions is to use SQL Prepared Statements.
>
> **[5:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=313)** In a prepared statement, the SQL query is prepared with placeholders for the dynamic data.
>
> **[5:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=318)** It's like creating a program which expects to receive data as inputs when it's run.
>
> **[5:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=323)** The data must match a specified data type such as a string or an integer.
>
> **[5:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=328)** And because the SQL query has already been mostly written, the data can't interfere with it.
>
> **[5:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=332)** It's very effective.
>
> **[5:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=333)** Here's an example.
>
> **[5:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=335)** The first line sets a variable called SQL to a query string.
>
> **[5:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=339)** The question mark after title, indicates a placeholder for dynamic data.
>
> **[5:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=344)** The second line converts it into a prepared statement, making it like a program that's ready for input.
>
> **[5:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=349)** The third line provides some value as input and executes the statement.
>
> **[5:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=354)** This example is using only SQL.
>
> **[5:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=356)** Most web programming languages include functions to make it easy to use SQL prepared statements.
>
> **[6:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=361)** A third prevention is to use allow-list and to validate data before using it in a query.
>
> **[6:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/sql-injection?u=76281980&t=367)** This prevention is less powerful than using SQL Sanitization or SQL Prepared Statements, but it can be used alongside them to provide defense in depth.

> [!info]- Semantic Content
>
> **Env Vars:** sql (30), sqli (6), owasp (1), char (1)
> **Code Keywords:** function (3), let (2), delete (1)
> **Analogies:** imagine (2), it's like (1), such as (1)
> **Definitions:** is an  (1), is called (1), means that (1)
> **Best Practices:** you should never (1), you should always (1)
> **CLI Commands:** make (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - sql (1)

#### Cross-Site Scripting (XSS)
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=0)** - A cross-site scripting attack occurs when an attacker injects code, primarily HTML and JavaScript, into your webpages so that other users' browsers will execute it.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=11)** It gets its name because an attacker sends scripts across your website to someone else's browser.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=17)** Cross-site scripting becomes possible when webpages use user supplied data in the HTML response without sanitizing the data first.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=26)** Cross-site scripting, often abbreviated as XSS, is ranked as one of the top 10 security threats and is the most common web application security flaw.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=36)** There are three types of cross-site scripting: reflected, stored, and DOM-based.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=42)** Reflected attacks are the most common type.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=44)** Let's look closer at them because they will help us to understand all three types.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=49)** In a reflected XSS attack, an attacker puts JavaScript code to be run in a URL string or in the form data sent with the request.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=57)** When the page loads, the script runs immediately in the victim's browser.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=61)** It's called reflected because it bounces right back.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=64)** Let's look at an example.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=65)** Suppose that a user clicks a link which sends a request for the register.php page and includes a URL parameter for email.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=73)** The web application gets the value of email from the parameters, drops it into a page template, and then returns the resulting HTML.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=81)** Now, let's imagine that an attacker posts a link somewhere.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=85)** The link could be on a webpage perhaps as a blog comment or on social media, but often it'll be a link sent in a phishing email.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=93)** The link still sends a request to the register.php page, but instead of sending an email address, the attacker adds HTML and JavaScript.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=101)** When the page processes this request, it inserts the value of the email parameter in the template which includes malicious HTML and JavaScript.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=109)** The JavaScript will be immediately executed by the user's browser.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=114)** This example uses a harmless JavaScript pop-up alert.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=117)** This is a good way to test for XSS, but it's important to recognize that this alert is just a placeholder, a proof of concept.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=125)** The actual JavaScript code could do anything.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=128)** It can alter the page.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=129)** It can access and steal the stored cookie data which may contain stored login information.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=134)** It can send additional browser requests and download other scripts.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=138)** The JavaScript may also be encoded to avoid detection.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=141)** Here's an HTML link where the URL has been encoded.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=144)** Most web languages will automatically decode it when it's received.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=148)** Notice also that when it's decoded, it includes a reference to a JavaScript on another website.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=154)** This script may contain hundreds of lines of code.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=157)** If it's put into the return to HTML, a user's browser could immediately make a request to that URL and execute the JavaScript file that it receives.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=165)** Stored and DOM-based attacks use the same principle as reflected attacks.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=169)** The difference is that they're not immediate and do not originate from links.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=173)** Stored cross-site scripting attacks occur when malicious JavaScript is planted in storage such as in databases, files, cookies, or sessions.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=182)** It's like planting a landmine in the application data.
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=185)** When the data is later retrieved and dropped into HTML, the script will execute.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=189)** Imagine submitting JavaScript in a customer feedback form.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=193)** Then when an admin reviews that feedback, the JavaScript will be triggered.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=197)** A DOM-based cross-site scripting attack embeds a script into the existing page.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=202)** In HTML, the current page is known as the DOM which is short for document object model.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=207)** DOM-based attacks are a result of the trend towards having webpages that handle a lot of user interaction on the client side using JavaScript.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=215)** Instead of sending a request to a remote server, the page already has all the code necessary to respond to an action.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=221)** A DOM-based attack is similar to a reflected attack, but it works with the existing page instead of using a server to return a response.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=229)** To prevent cross-site scripting, begin with a map of data passageways and exposure points.
>
> **[3:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=234)** The places where data is output are primary areas of concern.
>
> **[3:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=237)** The places where data is input, transferred and stored can help you to see the big picture and not overlook something.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=242)** After that, the first defense is to use the best practices that we've already discussed for incoming data.
>
> **[4:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=249)** Write validations to enforce expectations.
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=251)** Use allow-lists when you can.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=253)** If a value is required to be a four-digit number, then it can't contain a script.
>
> **[4:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=257)** The primary defense will be to sanitize all data before output.
>
> **[4:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=262)** The correct sanitization technique will depend on the output destination.
>
> **[4:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=265)** There are five primary output types to monitor.
>
> **[4:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=268)** Use HTML sanitization if the data will be used in HTML.
>
> **[4:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=272)** Use JavaScript sanitization if it'll be used in JavaScript and so on.
>
> **[4:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=277)** Another important defense is to use HTTPOnly cookies.
>
> **[4:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=280)** This prevents JavaScript from accessing and stealing cookie data.
>
> **[4:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=284)** You do this by adding the HTTPOnly option when you set a cookie.
>
> **[4:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=289)** Most web languages and frameworks have cookie functions that accept an additional parameter to enable it.
>
> **[4:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=294)** Remember, it's on a per cookie basis and you should also use it on cookies which keep track of session files.
>
> **[5:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=300)** A strong layer of defense against cross-site scripting attacks is to define a content security policy.
>
> **[5:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=305)** A CSP provides instructions to a browser about which types of resources can be used and which websites are allowed to provide them.
>
> **[5:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=313)** It can prevent both the loading of remote and inline JavaScript.
>
> **[5:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=317)** It's a best practice to send the policy in the header of an HTTP response, but can also be in the HTML head in a meta tag.
>
> **[5:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=324)** This example policy restricts scripts and plugins to the current domain only.
>
> **[5:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=328)** It would not permit remote loading of JavaScripts.
>
> **[5:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=331)** The CSP acts as an allow-list for the browser.
>
> **[5:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=335)** You can add domains that should be allowed to provide resources.
>
> **[5:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=338)** Here, I've added a fake domain called [analytics.com](https://analytics.com) to the allow-list so that it can provide JavaScript code.
>
> **[5:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=344)** CSPs can regulate other resources such as style sheets, images, fonts, audio, and video.
>
> **[5:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=350)** You can learn more about content security policies at [content-security-policy.com](https://content-security-policy.com).
>
> **[5:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=357)** Google has a tool which examines the CSP of websites and makes recommendations for improvements.
>
> **[6:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-scripting-xss?u=76281980&t=362)** The combined defenses of validating input, sanitizing output, using HTTPOnly cookies, and setting a content security policy will be good protection against cross-site scripting attacks.

> [!info]- Semantic Content
>
> **Env Vars:** html (12), dom (6), url (4), xss (3), csp (3)
> **Analogies:** imagine (2), such as (2), it's like (1), similar to (1), picture (1)
> **Code Keywords:** let (3), type. (1)
> **CLI Commands:** php (2), make (1)
> **Definitions:** is a  (1), known as (1), short for (1)
> **File Paths:** register.php (2)
> **URLs:** [analytics.com](https://analytics.com) (1), [content-security-policy.com](https://content-security-policy.com) (1)
> **Exercise Files:** template (2)

#### Cross-Site Request Forgery (CSRF)
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=0)** - A cross-site request forgery attack is when an attacker tricks a user's browser into sending a request to another site.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=8)** Cross-site because the attack originates on one site but sends a request to another site and request forgery because the request is not a genuine user request.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=18)** Cross-site request forgery is often shortened to CSRF.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=23)** Imagine that a hacker wants to get a user to click a link.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=26)** One way would be to name the link with something deceptive and post it online or send it in an email.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=32)** The link hides the action but it requires a user to actually click on it.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=36)** A CSRF does not depend on the user clicking a link.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=40)** Instead, the attacker places the URL into the HTML of a page, most often is the source attribute of an image tag.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=48)** When the page loads, the browser automatically sends a request for each of the images that are in the HTML.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=53)** It doesn't matter that this image source will fail to return an image.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=56)** The request will still be made.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=59)** Our hacker could place this image on a webpage that they control.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=62)** They could put it in a blog comment, a forum post, an online ad or they could use it as an avatar or profile picture.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=70)** Every browser that loads that HTML will send a request to that URL.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=75)** The user might see a broken image link but would not know that a forged request had been sent.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=80)** This example shows how to generate fraudulent clicks or votes in an online poll.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=85)** A more potent example is one which takes advantage of a user's logged in state.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=90)** Let's imagine that a user logs into their online bank account to pay some bills.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=94)** The bank's website sets a cookie and the user's browser to indicate that they have been authenticated.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=99)** Future requests to any page on that bank's website will include that cookie and the proof of authentication.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=105)** It works a lot like one of those wristbands that you get when you pay to enter an event.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=109)** The wristband proves that you've been granted access.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=112)** When the user is done paying bills the user closes the window but does not actually click log out.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=118)** The user's browser still has the authorization cookie and their session with the bank is still open.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=123)** If the user opened a new browser window and went to the bank's website, they would still be logged in.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=128)** Now, imagine that the user's browsing the web and comes across an image tag where the image source is set to a URL at the same bank.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=136)** This example transfers money to another account.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=139)** Now, it's unlikely to be that easy, but it makes the point.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=142)** This is a URL which a hacker could not use.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=146)** If they clicked it, it would require a login but the user is logged in still, when their browser sends a request to that URL, it includes the cookie data that indicates who they are and their previous authentication, so this link works for them.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=161)** The hacker has taken advantage of the user's logged in state and tricked their browser into taking an action without their knowledge.
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=168)** These examples use get requests, but it's also possible to craft a form to submit a forged post request.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=175)** The user would not need to click submit.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=177)** In fact, there's no submit button on this form.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=179)** The form uses CSS to hide, and then JavaScript in the body tag submits the form when the page loads.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=186)** Unlike the image examples, submitting a form would normally be visible to the user.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=191)** For example, if a user was tricked into transferring funds the bank would probably respond with a new webpage that says, transfer completed and I think that would make any user suspicious but the target attribute of this form sends the result to a hidden iframe.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=206)** The user won't know that a CSRF attack has occurred.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=209)** Attackers generally use CSRF attacks to make state changing requests.
>
> **[3:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=214)** The request performs an action but the attacker cannot see the results directly since the requests are being made by other people's browsers.
>
> **[3:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=222)** An attacker would just see the results indirectly.
>
> **[3:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=225)** A poll that begins to swing in their favor their bank account is suddenly larger.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=229)** A configuration is changed from one setting to another.
>
> **[3:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=233)** CSRF attacks can have a variety of goals.
>
> **[3:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=236)** Some common examples include increasing page views for ad revenue, ballot stuffing on polls, changing a user's password or email address, logging into a site, transferring funds or downloading malware.
>
> **[4:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=249)** For all of these goals, the mechanism of the attack is the same.
>
> **[4:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-forgery-csrf?u=76281980&t=252)** An attacker tricks a user's browser into making a request to another URL without the user's knowledge or consent.

> [!info]- Semantic Content
>
> **Env Vars:** url (6), csrf (5), html (3), css (1)
> **Analogies:** imagine (3), picture (1), for example (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), require (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - a (1)

#### Cross-Site Request protections
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=0)** - Let's learn how to protect our websites from cross site request forgery attacks.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=4)** The simplest defense against CSRF attacks is to put thought into which pages use GET and POST requests.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=11)** Use GET requests for retrieving data, not for actions which make changes.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=16)** Use POST requests such as form submissions for actions which make changes.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=21)** An image source tag will always send a GET request.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=25)** The HTML is expecting to read an image, not to make a change.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=28)** If the bank required transfers to use POST requests, then this URL would be rejected for being the wrong request type.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=35)** Now, this does not prevent all CSRF attacks, but it prevents those that are easiest to craft.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=40)** The strongest defense against CSRF attacks is to use CSRF tokens.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=46)** Here's how it works.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=48)** First, you generate a long, unique random string which can act as a token.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=52)** Then you store it in the user's session data.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=55)** The session data is usually kept on the server so that the user or an attacker would not be able to access it.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=61)** When you create an HTML form, you include the token in the form data.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=65)** Make it a hidden input field.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=67)** When the form is submitted, the value of the CSRF token will be included in the form data.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=71)** The code that processes the form data can verify that the form is authentic by retrieving the token stored in the session and comparing it to the token sent by the form.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=81)** If they match, the form is authentic and not forged.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=84)** If the token is missing or does not match, then the form data is rejected as fake.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=89)** This is a simple CSRF implementation and there are variations in improvements which can be made.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=94)** A token could be only valid for a limited time period.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=97)** The form token and the session token could be different complimentary values.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=102)** For example, encrypting one string could return the other string.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=106)** CSRF tokens have one big weakness.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=109)** Did you spot it already?
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=111)** If a website is vulnerable to the cross site scripting attacks, then an attacker has a path around our defense.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=118)** An attacker might be able to access value stored in the session or to read the token, or an attacker might use Ajax to submit a request that returns a token and then immediately paste that token into their forged request.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=130)** Your CSRF defenses rely on having good XSS defenses in place.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=136)** There are several other defenses which are not strong enough on their own but which are useful for providing defense in depth.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=142)** An authentic form submission should include a referrer, which is from your domain.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=147)** A matching referrer is not complete proof that a request is authentic because the referrer value can be spoofed.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=153)** But if the referrer is missing or is wrong, then it indicates a forgery.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=157)** For forms that use Ajax, you can set a custom header in the XMLHttpRequest and then validate that the header's present.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=164)** Browser support is still growing.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=166)** For the SameSite cookie attribute, it's similar to the HTTP only attribute, but it prevents the browser from sending cookies with forged requests.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=174)** Some actions are extremely sensitive.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=176)** For example, changing a username, email, or password.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=180)** Modifying security preferences or transferring money.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=183)** The best protection for these pages is to require a second action to confirm the change.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=188)** It could be a confirmation page before an order is submitted.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=191)** Some sites use a capture image to test whether a person is present, or it could require re-authentication by providing a password again.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=199)** A CSRF attack would not be able to respond to the confirmation request.
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=203)** Now, a confirmation page is overkill on most forms, but it can be worthwhile in some cases.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cross-site-request-protections?u=76281980&t=209)** Regulating GET and POST requests, and using CSRF tokens with help from these other defenses will protect your site from CSRF attacks.

> [!info]- Semantic Content
>
> **Env Vars:** csrf (11), post (4), html (2), url (1), xss (1)
> **API Endpoints:** get  (4), post  (4)
> **Code Keywords:** match, (2), require (2), let (1), type. (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (2), such as (1), similar to (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### Cookie visibility and theft
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=0)** - Browser cookies are easily viewed, easily manipulated, and easily stolen.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=5)** They're out of view enough that they may seem like private data, but they're not.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=10)** In many browsers, a user can go into the preferences area and inspect their cookies.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=15)** Recently, some browsers have made cookies a little harder for a basic user to inspect, but there's still ways to view them, such as using a browser's developer tools.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=23)** Cookie data also may be visible while in transit.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=27)** Cookie data is sent in the plain text in the header of every request to the web server.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=31)** An attacker with the ability to observe network traffic will see them.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=35)** This is easy to do on an open wifi network like those found in coffee shops, hotels, and airports.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=41)** Cross-site scripting attacks can also be used to get cookie data.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=44)** Here's an example in PHP.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=46)** I've split the URL up to make it easier to read.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=49)** It uses JavaScript to get the cookie data, and then it pings a URL that the hacker owns with the cookie data in the query.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=56)** Once an attacker can view a cookie, they can steal it.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=59)** Stealing a cookie does not mean removing it as if it were a physical object.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=63)** An attacker steals a cookie by placing the same values in a cookie on the attacker's browser or an attacker can forge a request and include the cookie data as if it were their own.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=72)** Alternatively, an attacker could modify the cookie value to suit their purposes.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=77)** So how can we keep other people's hands out of our cookie jar?
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=81)** The best prevention is not to put anything of value in the cookies.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=85)** Limit them to storing unimportant nonsensitive data.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=88)** For example, it would be appropriate to store users' default language preference.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=93)** That's not sensitive data, and an attacker gains nothing by stealing it, but it would not be a good idea to store a token that grants access to a restricted webpage.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=102)** If an attacker stole that data, it'd be like a magic key to a user account.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=106)** A better place for sensitive data is in a session.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=109)** Sessions are usually stored in a database file or a file on the server side.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=113)** A reference identifier or session ID is stored in the user's browser as a cookie, so that the session file can be looked up on every request.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=122)** With a session, sensitive data stays on the server, so it can't be observed in transit or in storage.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=128)** Of course, the session ID will be observable in transit in the cookie data, so additional precautions still need to be taken to protect it.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=136)** As we discussed with cross-site scripting when cookies are created, they should be flagged as HTTP only making them unavailable to JavaScript.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=144)** An attacker would not be able to read the value using document.cookie anymore.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=149)** I strongly recommend that you set up an SSL certificate, and use HTTPS for all of your webpages.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=156)** This will encrypt all the communication between your web server and a user's browser, and it prevents anyone from observing cookie data while it's in transit.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=164)** I have another course here on LinkedIn learning called SSL Certificates for Web Developers, which walks you through it.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=170)** Once you're using SSL, then you should also use secure cookies.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=175)** Secure cookies are only sent if the connection is over HTTPS.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=179)** If a user accidentally types the URL with HTTP instead of HTTPS, then the cookies would not be sent.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=188)** You set a flag when a cookie is created to indicate it should be secure.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=192)** Session cookies are usually configured in a global configuration.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=195)** Cookies should also be given expiration dates.
>
> **[3:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=198)** You can either provide an exact date using expires or maximum number of seconds using max age.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=205)** The web browser will automatically delete the cookie after its expiration.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=209)** This helps clean up old cookies instead of letting them linger.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=212)** You should also consider the domain, subdomain, and path that will use a cookie.
>
> **[3:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=217)** By default, a cookie is available throughout a domain name on all subdomains and all pages, but if a cookie should only be used with one subdomain or only within a certain directory, then it can be restricted.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=228)** Use the domain or path attributes when setting the cookie.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=231)** Now, don't go crazy here, but think about whether it makes sense to apply the principle of least privilege to certain cookies.
>
> **[3:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=238)** If sensitive data is to be stored in cookies and not in the recommended server-side session, then it should be encrypted.
>
> **[4:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=245)** One advantage of encrypting cookies is that they're never in plain text while in transit or in storage.
>
> **[4:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=250)** Cookies can also be digitally signed to prevent modification.
>
> **[4:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=254)** Signing a cookie means running the cookie through an algorithm to get a check sum, which is then added at the end of the cookie data.
>
> **[4:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=260)** When the cookie data is received by the web application, the first part, the value, will be run through the same algorithm, and then the check sums will be compared.
>
> **[4:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=269)** If they match, then the value's not been modified.
>
> **[4:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/cookie-visibility-and-theft?u=76281980&t=272)** Be smart about what goes in cookies and protect them using smart cookie settings and encryption.

> [!info]- Semantic Content
>
> **Env Vars:** url (3), ssl (3), https (3), http (2), php (1)
> **Code Keywords:** private (1), delete (1), default, (1), match, (1)
> **CLI Commands:** php (1), make (1)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** we discussed (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - browser (1)

#### Session hijacking
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=0)** - Session hijacking is an attack where a hacker steals a user's active session to gain unauthorized access to parts of a website.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=8)** Sessions store user's data in a file or database on the server.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=12)** It's more secure to store data in sessions than in browser cookies because the data never leaves the server.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=17)** It cannot be viewed in transit or in storage.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=20)** However, as we discussed in the previous movie, a session reference identifier, or session ID, is stored in a browser cookie and like all cookies, is vulnerable to theft.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=30)** An attacker with a stolen session ID can access all of the data stored in the session.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=35)** Even worse, they can impersonate a logged-in user.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=39)** Imagine that a user logs into a web application successfully.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=42)** Web application stores a bit of data in the session file to remember that the user's logged in.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=47)** This enables the user to click links and visit other pages without having to re-authenticate each time.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=53)** I think of it a lot like a wristband which grants access to an event.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=56)** With every request, the cookie with the session ID will be sent.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=60)** The web application will retrieve that ID and find the matching session file automatically.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=64)** That's how sessions work.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=66)** Then it will look in the session file to find that bit of data that indicates whether a user has been previously authenticated.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=71)** If so, it allows the user to proceed to view the requested page.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=75)** If not, it denies the request and most likely sends them to a log in page.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=80)** An attacker who can send a request with the user's session ID in step one assumes any previous state said in the session.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=87)** As far as the web server's concerned the request is coming from the real user.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=90)** The attacker is now the user and can do anything that the user can do.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=94)** They can transfer money or make purchases.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=97)** They can view and edit personal information.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=99)** They can change the account email or password to lock out the real user.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=103)** They can send messages to friends or coworkers using their assumed identity, which could be part of a phishing attack.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=109)** To get the session ID, an attacker can either read it from the browser's cookie file, for example, using a cross-site scripting attack, or they can view the data in transit.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=118)** This is usually done by eavesdropping on an open WiFi network like those in coffee shops, hotels and airports.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=125)** Using WiFi is like shouting data to an entire room.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=128)** Any device that's listening can hear it and eavesdropping software is easy to find.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=132)** Here's a quick recap of how to prevent cross-site scripting and how to keep your cookie data secure.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=137)** You should validate input, sanitize output, use a content security policy, use cookie settings like HttpOnly, Secure and expire, and most importantly, use HTTPS.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=149)** It's essential that log in pages and any access-restricted pages use HTTPS.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=155)** I recommend going further and using HTTPS on all website pages, all of them.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=161)** It's easy to set up, provides a strong defense for the entire website and has many other benefits.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=166)** Don't forget to mark the session cookie as Secure.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=170)** Without a Secure session cookie, any request to a non-SSL page on the same domain, even the first request before being redirected to HTTPS, could expose the cookie and the session ID.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=182)** For most cookies, the Secure flag would be set in the code when it's defined.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=186)** For session cookies, which are more global in scope, there's usually a global setting, which may be in a separate configuration file.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=193)** There's several other useful defenses against session hijacking.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=196)** Expiring and removing old session files regularly is a best practice.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=200)** Fewer sessions stored means fewer sessions which can be hijacked.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=204)** A script can be run nightly, which checks the last activity, or log in, for all users, and then removes the stale sessions, or an expiration check can be performed whenever a request is received.
>
> **[3:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=214)** Whenever possible, destroy the session when a user logs out.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=218)** Don't just remove a user's authentication status from the session file.
>
> **[3:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=222)** An attacker who possesses a session which is currently logged out could just wait for the session to be logged in again before they use it.
>
> **[3:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=230)** A strong defense against session hijacking is to regenerate session identifiers periodically and at key points, regenerating a session ID invalidates any previously stolen session IDs.
>
> **[4:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=240)** It's most important to regenerate the session ID after a successful log in.
>
> **[4:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=245)** Any existing session data is maintained, only the identifier is updated.
>
> **[4:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=250)** Regenerating a session ID forces attackers to find a recent session ID and is also a major defense against session fixation attacks.
>
> **[4:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=258)** There are two commonly recommended defenses which I do not recommend.
>
> **[4:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=263)** The user agent string describes the browser type being used.
>
> **[4:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=266)** Testing to make sure it matches the user agent string used at log in is not a strong defense.
>
> **[4:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=272)** While the user is unlikely to change browsers between requests, the user agent string can be discovered and forged.
>
> **[4:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=278)** Testing for an IP address which was used at log in is also not a strong defense and it can cause problems.
>
> **[4:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=284)** IP addresses may be shared among several users.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=287)** A user and an attacker on the same WiFi network may have the same IP address.
>
> **[4:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=291)** It's also unreliable for legitimate users on mobile networks who may change IP addresses while they're traveling.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-hijacking?u=76281980&t=298)** You can prevent session hijacking if you protect the session cookie, use HTTPS on all pages and then expire, destroy and regenerate sessions at key points.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (2)
> **Env Vars:** https (5), ssl (1)
> **Best Practices:** don't forget (1), best practice (1), recommended (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** imagine (1), for example (1)
> **Cross-References:** we discussed (1)
> **Prerequisites:** set up (1)
> **Speakers:** - session (1)

#### Session fixation
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=0)** - Session fixation is an attack where the attacker provides a user with a valid session identifier.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=6)** It's similar to session hijacking, but reversed.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=9)** Instead of stealing a user's session ID, the attacker gives the user a session ID, one which the attacker controls.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=17)** In both cases, the result will be that the user and the attacker are using the same session identifier.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=23)** The purpose of the attack is also the same.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=25)** An attacker can assume the user's identity and share their access privileges.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=29)** Of course, the session that the attacker provides will not be authenticated.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=33)** It won't be attached to a logged-in user yet.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=36)** The attacker has to wait patiently.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=38)** When the user eventually logs into the website again, the application stores a bit of data in the session file to remember that the user has logged in and should be allowed to view other pages.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=47)** Now the attacker can take advantage of the shared session and visit access-restricted pages.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=53)** Early session fixation attacks relied on websites which accepted session IDs sent in the URL or in form data.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=61)** Fortunately, it's become uncommon to maintain session IDs in URL strings, in large part because of the threat of session fixation.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=68)** For example, in 2002, PHP changed the default configuration to turn off this ability.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=74)** However, session fixation remains a threat.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=77)** An attacker can set the user's browser cookie to a preferred session ID in other ways, such as using cross-site scripting, as in this example.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=85)** It may also be possible to set the cookie data using a machine-in-the-middle attack.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=89)** That is when an attacker inserts themselves in the line of communication between the browser and the web server.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=95)** The attacker secretly relays and possibly alters the communication between the two computers.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=102)** When done well, the attacker will be invisible, and the computers will believe that they're communicating directly.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=108)** An attacker may take over a router or create an evil twin Wi-Fi router to position themselves in the middle.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=114)** But machine-in-the-middle attacks can also use malware and other techniques.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=117)** So how can we prevent session fixation?
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=120)** First, never accept session identifiers as GET or POST variables.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=124)** Only accept session identifiers from cookies.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=127)** This removes the easiest way to set a session ID.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=129)** This is likely the default setting, but it's worth being sure, especially in PHP, which used a different default in the past.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=136)** Next, use the cross-site scripting defenses.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=139)** Validate input, sanitize output, send a content security policy, and use smart cookie settings like HttpOnly, Secure, and Expire.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=149)** Most importantly, use HTTPS.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=152)** These steps keep cookies secure during storage and transmission.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=156)** The best defense against session fixation attacks is to automatically regenerate the session identifier after the user logs in.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=164)** When a user logs in, discard the old session ID and assign a new one.
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=168)** The session file and the data inside do not have to change.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=171)** This is only a change to the identifier, the value that's stored in the cookie.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=176)** Many web languages and frameworks offer a function which makes regeneration easy.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=181)** Then, when the user's authenticated, their authorization will be stored in a session file linked to the new session ID.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=188)** The attacker will have the old session ID, and it will not have been granted access.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/session-fixation?u=76281980&t=193)** Implementing these simple defenses will protect your users from session fixation attacks.

> [!info]- Semantic Content
>
> **Env Vars:** url (2), php (2), post (1), https (1)
> **Analogies:** similar to (1), for example (1), such as (1)
> **CLI Commands:** php (2)
> **API Endpoints:** get  (1), post  (1)
> **Code Keywords:** function (1)
> **Definitions:** is an  (1)
> **Speakers:** - session (1)

#### Remote system execution
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=0)** - There is one attack that's worse than all the others.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=3)** Remote code execution.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=5)** Remote code execution or RCE is when an attacker can remotely execute Internal operating system commands on a server.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=13)** To put it another way, an attacker can type commands as if they were sitting at the keyboard.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=18)** They can perform any task a logged in user could perform.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=21)** They can read, add, modify, or delete files.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=25)** They can change access privileges or passwords.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=27)** They can turn on and off configurations and services and they can communicate to other servers.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=32)** When you read a news article or see a warning about a bug, which allows remote code execution, you should pay attention.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=38)** It is a significant one.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=40)** Fortunately, remote code execution is also one of the hardest hack to pull off.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=45)** Operating systems keep a wall between the operating system and the software running the web server, which is difficult to get through.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=51)** That is, unless you make it easy.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=53)** Most programming languages have functions, which allow them to communicate directly with the underlying OS.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=59)** It's these special functions that can get you into trouble if you aren't careful.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=63)** If you use one of these powerful functions and also provide a way that an attacker can slip their data to it, then they can use that function too.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=71)** Each programming language uses different names for its operating system functions.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=75)** However, many use one or more of these common names.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=79)** Refer to the documentation for the details on your language.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=82)** All system execution keywords come with big security risks.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=86)** The best prevention is to avoid using system execution functions at all.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=90)** Usually, there's another solution using less risky code.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=93)** In some programming languages, it's possible to disable these powerful functions entirely so that they cannot be used.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=99)** If it's absolutely necessary to use them, then avoid pairing them with user submitted or dynamic code.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=105)** That's the point at which you give the attacker a potential path to the function and should you really, really need to use them with dynamic data, then make sure to validate all data, use allow-lists to limit the range of actions and sanitize the data for wherever it will be used.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/remote-system-execution?u=76281980&t=121)** Remote code execution attacks are very bad but they mostly happen because of our own carelessness.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), delete (1)
> **CLI Commands:** make (2)
> **Env Vars:** rce (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Warnings:** warning (1)
> **Speakers:** - there (1)

#### File upload abuse
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=0)** - File upload abuse is when an attacker abuses the public file upload features of a website.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=6)** It's common for web applications to allow users to upload files.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=10)** These are a few common examples when web application might encourage users to send in images, video, or other files.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=16)** There are many ways that file upload features can be abused.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=19)** The most common types of abuse are uploading files which are too numerous, too large or too frequent.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=26)** Too many files or files which are too large can use up all of a server's storage space.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=30)** Files sent too frequently can slow down server processing or monopolize server connections, potentially even leading to a denial of service.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=38)** Another potential abuse is users uploading the wrong content type.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=42)** For example, the application expects an image but the user uploads a movie instead.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=47)** Malware represents the most serious form of file upload abuse.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=50)** Malware gets its name from malicious software.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=54)** Malware may pretend to be a different file type to avoid raising suspicion.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=57)** It can even be embedded in images, PDF files, or other media assets.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=62)** An attacker may upload malware and then use other techniques to move it to another location or to launch it.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=68)** Malware can be designed for many different goals.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=70)** Spam, spyware, and bypassing server access controls are just a few examples.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=75)** Ransomware has been on the rise in recent years and has become a major threat.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=79)** Most ransomware encrypts all files and then demands a ransom to learn how to decrypt them again.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=86)** The best way to prevent file upload abuse is to require users to log in before they can upload files.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=91)** Don't allow any anonymous uploads.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=94)** It won't prevent a determined attacker, but at least the account will identify them and allow their access to be revoked.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=100)** Don't make user uploaded files available for public download or your site could distribute malware to others.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=106)** Instead, store uploaded files in directories which are not readable by the public.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=111)** If they need to become public then scan them for viruses and have a human review them first.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=116)** Validations can help to prevent abuse.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=118)** The content type or mime type of a file can be checked against a list of allowed types.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=123)** The file extension can be validated against a list of allowed file extensions.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=127)** If you need to be extra cautious, you can even check the first few lines of the file, which often includes information that identifies the file type.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=134)** The file size can also be validated to ensure that it's less than a maximum size.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=139)** Many web servers and languages have configurations for the maximum file size that's allowed.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=144)** Using large hard drives or cloud servers for storage can help to ensure that there's always adequate drive space available, or email or text warnings could notify administrators whenever disk space is running low.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=155)** Frequent file uploads can be limited or throttled either by the server, by the web application, or by a firewall.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=162)** Finally, servers can be scanned with antivirus software to look for any malware that might have made it through the other defenses.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/file-upload-abuse?u=76281980&t=169)** Compared to other attacks file upload abuse is relatively rare, but it is worth considering how it would impact you and then install protections to prevent it.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), type. (2), require (1), finally, (1)
> **CLI Commands:** make (1)
> **Env Vars:** pdf (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - file (1)

#### Denial of service
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=0)** - A denial of service attack denies authorized users access to a server, service, or resource to which they would normally expect to have access.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=9)** Denial of service is an attempt to prevent legitimate users from using a service.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=14)** The underlying service may remain unaffected, but it's no longer available.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=19)** Remember, data security has three goals, confidentiality, integrity, and availability.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=25)** Denial of service is an attack on data availability.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=28)** Denial of service attacks usually use flooding or crashing to make data unavailable.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=33)** Flooding is when a system is overwhelmed with too many requests.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=36)** There could be too many requests to a web server.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=39)** It could be using up a limited number of connections to a database, or it could be sending so many data packets to a router that legitimate traffic slows to a crawl.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=47)** Crashing is when software or hardware crashes and just stops operating.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=52)** For example, an attacker could use a vulnerability to crash the web server's software or to crash the operating system of the server that it runs on.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=60)** The motives for denial of service attacks vary, but most fall into three basic categories, revenge, extortion, and activism.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=68)** It's uncommon for a denial of service attack to be performed by a single computer.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=72)** Servers and routers are robust, and they're designed to handle a lot of traffic.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=76)** It takes more to overwhelm them than a single computer can muster.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=80)** Distributed denial of service attacks use hundreds or even thousands of computers working together.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=85)** They can be controlled by humans, such as activists who are collaborating, but more often, they're part of a zombie botnet.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=92)** A botnet is a collection of computers or other internet enabled devices which have malware on them.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=98)** An attacker can send commands to the botnet and launch thousands of simultaneous attacks.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=103)** The Mirai malware, which creates a botnet out of internet things devices, such as closed-circuit cameras, home routers, and baby monitors, is a recent and famous example.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=113)** These attacks are powerful enough to overwhelm a network or a server, and they may last for days.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=119)** The most powerful attacks recorded have sent more than 20 million requests per second, far more than most servers can handle.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=126)** One DDOS attack in 2019 lasted for 13 days.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=131)** Preventing denial of service attacks is challenging.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=134)** How can an average web developer be expected to design a system that will handle millions of packets of data per second?
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=141)** The first question you should ask is, is denial of service in my threat model?
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=146)** If your website is likely to be the target of retaliation, activists, or extortion attempts, then DDOS attacks should be in your threat model.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=153)** For most developers, it will not be.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=156)** The odds of a regular website being hit by a DDOS attack are low.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=160)** If it is in your threat model, then the best advice is to outsource the problem to experts.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=165)** There are many companies which offer DDOS mitigation services.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=169)** If you sign up with one, all incoming traffic will be routed through their extremely robust servers before it's sent to your servers.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=176)** They have the hardware and the expertise to handle millions of requests per second.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=181)** Cloudflare, Microsoft Azure, AWS Shield, and Akamai are some of the largest providers.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=187)** Project Shield offers free DDOS mitigation to websites that have media, elections, political, and human rights content.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=194)** These are frequently targeted sites but which also typically cannot afford expensive solutions.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=200)** If you decide not to use DDOS mitigation services and suddenly see a spike in your traffic, first see if it might be legitimate traffic.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=208)** A low traffic website can get a big boost if it gets mentioned on television or in popular culture.
>
> **[3:34](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=214)** Increasing available RAM, deploying additional servers behind a load balancer, or talking with your ISP may be enough to get you through that rush period.
>
> **[3:42](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=222)** If it is malicious traffic, then your remaining choices are throttling, filtering, sinkholing, or blackholing the traffic.
>
> **[3:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=230)** Throttling is regulating the flow of input to keep it below a maximum level.
>
> **[3:54](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=234)** It's also called rate limiting.
>
> **[3:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=236)** It slows down malicious activity.
>
> **[3:59](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=239)** Filtering applies a set of rules to incoming traffic.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=242)** Requests of certain types or with certain characteristics are allowed through, and all others are quickly rejected.
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=248)** Sinkholing redirects traffic to a new destination.
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=251)** This is usually a server which can capture and analyze the traffic.
>
> **[4:15](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=255)** Blackholing is a more extreme version of sinkholing.
>
> **[4:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=258)** All traffic is rerouted to nowhere, also known as the null resource.
>
> **[4:23](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=263)** These are all actions that can be performed by firewalls.
>
> **[4:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=267)** Hardware firewalls are more robust, but software firewalls are a less expensive option.
>
> **[4:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=272)** Internet service providers or ISPs may also be able to help.
>
> **[4:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=276)** If a website gets hit by a DDOS attack, the ISP may start blackholing the traffic immediately to avoid harming other customers who share hardware or infrastructure with that targeted server.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/denial-of-service?u=76281980&t=287)** A combination of relying on experts and these techniques will help to mitigate the potential damage from denial of service attacks.

> [!info]- Semantic Content
>
> **Env Vars:** ddos (7), isp (2), aws (1), ram (1)
> **Definitions:** is a  (3), is an  (2), known as (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1), aws (1)
> **Speakers:** - a (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=0)** - Thank you for watching this course on the foundations of web security.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=4)** We've covered general security principles, the importance of filtering input and controlling output, and looked at some of the most common attacks.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=11)** Before I leave you, there are a few additional points I'd like to share with you, which do not fit neatly into the previous chapters, which I think are very important.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=18)** First, it's essential to regularly update all software.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=22)** Security vulnerabilities are reported and patched constantly.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=25)** Hackers pay attention when security fixes are released so that they can quickly use the vulnerabilities before everyone upgrades.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=32)** When a new version comes out, patch immediately, so that you win the race against the hackers.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=37)** Second, back up your data, code, database data configurations, assets, everything.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=43)** Make automatic backups, as well as backups to an offline hard drive.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=48)** Remember, one of the goals of data security is to maintain data availability, hard drive failure, hosting companies being unavailable, and ransomware, where files are encrypted and unavailable until a ransom is paid, are real threats.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=62)** Backups make systems resilient to data loss.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=65)** Third, don't forget to secure your domain.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=68)** Domains can be stolen or hijacked.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=70)** Use multi-factor authentication for your domain registrar, and wherever your DNS configuration is hosted.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=76)** Use DNSSEC, short for domain name system security extensions, whenever possible.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=82)** DNSSEC is designed to protect applications from fake or manipulated DNS data.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=87)** Fourth, server security is a bigger topic than what we've discussed here.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=91)** While we've touched on some points we focus primarily on developer security.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=96)** The general security principles still apply.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=98)** We should also consider whether you need antivirus software, a firewall, and intrusion detection and prevention systems.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=105)** Small personal websites may not need these for their threat model, but a large corporate website likely will.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=110)** And finally, I encourage you to join the security community.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=113)** Follow people who post about security on social media.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=116)** Social media is where a lot of security news breaks first, read blogs and search for topics that you want to learn more about.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=123)** If you can, attend conferences where you can share and learn from the experiences of others.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=128)** Security threats and defenses are constantly evolving.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-web-security-22680062/next-steps?u=76281980&t=131)** Being part of the community will help you to stay up to date on the changing landscape.

> [!info]- Semantic Content
>
> **Env Vars:** dns (2), dnssec (2)
> **CLI Commands:** make (2)
> **Definitions:** short for (1), is a  (1)
> **Code Keywords:** finally, (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - thank (1)


## Instructor

- [[Kevin Skoglund]]

## Skills Covered

- Secure Coding
- Web Services Security
- Programming Foundations

## Path Context

### In [[Become a Software Developer]]
← [[Learning SQL Programming]] | **12 of 12**

## Appears In

- [[Become a Software Developer]]

## Related Courses

_Courses sharing skills:_

- [[Complete Guide to C Programming Foundations]] — Programming Foundations
- [[AI Product Security- Foundations and Proactive Security for AI]] — Secure Coding
- [[Complete Guide To C Plus Plus Programming Foundations]] — Programming Foundations
- [[Web Programming Foundations]] — Programming Foundations
- [[Programming Foundations- Conducting Code Reviews]] — Programming Foundations

---

[↑ Back to top](#)