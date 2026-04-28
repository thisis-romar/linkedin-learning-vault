---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-footprinting-and-reconnaissance-22773528
url: "https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528"
duration_minutes: 115
duration: 1h 55m
level: Intermediate
updated: 10/23/2023
learners: 7204
skills:
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQH2SBvz5g8pzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697750217555?e=2147483647&amp;v=beta&amp;t=g9YE6XMzM_82uyZcACWBR0Sl2NNNFqj-aIAbqmLIupI"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking Introduction To Ethical Hacking]]'
next_courses:
  - '[[Ethical Hacking- Scanning Networks]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":2,"total":19,"prev":"Ethical Hacking Introduction To Ethical Hacking","next":"Ethical Hacking- Scanning Networks"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Footprinting%20and%20Reconnaissance.md)

![Ethical Hacking: Footprinting and Reconnaissance](https://media.licdn.com/dms/image/v2/D4E0DAQH2SBvz5g8pzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697750217555?e=2147483647&amp;v=beta&amp;t=g9YE6XMzM_82uyZcACWBR0Sl2NNNFqj-aIAbqmLIupI)

# Ethical Hacking: Footprinting and Reconnaissance

> Ethical hackers use their knowledge for good: to test if an organization's network is vulnerable to outside attacks. But where do they start? With footprinting and reconnaissance—the process of gathering information about computers and the people to which they belong. In this course, Lisa Bock introduces the concepts, tools, and techniques behind footprinting: finding related websites, determining

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528) | 1h 55m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Uncovering Information** (7 videos)
- **3. 2. Using Email and Websites** (6 videos)
- **4. 3. Searching the Network** (5 videos)
- **5. 4. Discovering Reconnaissance Tools** (5 videos)
- **6. 5. Footprinting Capstone** (4 videos)
- **7. 6. Wrapping up the Recon** (4 videos)

### 1. Introduction

#### Scouting the target
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scouting-the-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scouting-the-target?u=76281980&t=0)** - [Lisa] Kick-starting the ethical hacking process begins with a laser-focused footprinting and reconnaissance exercise that will uncover everything we need to know about the target.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scouting-the-target?u=76281980&t=13)** In this course, I'll cover how we can use high and low-tech methods to discover details about a system, network, or organization.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scouting-the-target?u=76281980&t=22)** Hello, my name is Lisa Bock, and I'm a security ambassador.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scouting-the-target?u=76281980&t=27)** This course is part of the Ethical Hacking Series.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scouting-the-target?u=76281980&t=31)** Are you ready to begin this journey?
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scouting-the-target?u=76281980&t=34)** Then let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [lisa] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is a basic to intermediate course intended for anyone with an interest in learning more about ethical hacking.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980&t=10)** This course is part of the Ethical Hacking Series.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980&t=14)** I'll cover several topics, but I have provided a file for you so that you can follow along.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980&t=21)** Go to the exercise file link on the welcome screen where you will find a Challenges and Links document.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980&t=29)** In the document, I have included the links to the resources that I reference throughout the course.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980&t=35)** Additionally, during each segment, I will identify a challenge using the following icon, along with a question from the video.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980&t=45)** Use the document to write out responses to challenges that I cover throughout the course.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980&t=51)** I am super excited to bring you this course, so sharpen your pencil, and let's start learning.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1), let (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Hacking ethically
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/hacking-ethically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/hacking-ethically?u=76281980&t=0)** - [Instructor] The goal of the Ethical Hacking series is to help system administrators understand how to better protect the assets they manage.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/hacking-ethically?u=76281980&t=10)** I'll focus on the concepts of ethical hacking in order to explain why it's essential in any organization's overall security framework.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/hacking-ethically?u=76281980&t=20)** The tests and procedures I explore should only be executed on your own system or a system that you are charged with protecting.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/hacking-ethically?u=76281980&t=30)** If ownership and responsibility lie with another party, be sure to get clear written instructions with explicit permission to conduct ethical hacking activities.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/hacking-ethically?u=76281980&t=43)** Do not investigate individuals, websites, servers, or conduct any illegal activities on any system you do not have permission to analyze.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 2. 1. Uncovering Information

#### Footprinting and reconnaissance
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=0)** - [Instructor] The first phase in ethical hacking is footprinting and reconnaissance, which involves obtaining as much information about the target as possible.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=10)** In this segment, we'll learn what information we can gather along with what questions to ask before beginning the process.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=19)** Before launching any attacks or using advanced tools, the team must complete a thorough information gathering exercise.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=28)** This phase is all about learning as much as possible about the target and infrastructure, including remote access capabilities, open ports and services, and what security methods are in place.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=42)** So what is happening during footprinting and reconnaissance?
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=47)** Well, imagine you are on a mission where information is found everywhere.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=53)** On the public side, we want to find information on the target using resources found on the internet, such as websites, directories, job sites, and social media.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=65)** On the logical side, we use network mapping to give us an accurate picture of our target, such as network design, running services, and operating systems.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=76)** In addition, we also want to see what network defenses are in place that would prevent us from discovering information.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=84)** The key is to first narrow the scope to help identify what we need to know before we begin the ethical hacking exercise.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=93)** Now, this is a significant step in the process in that if there isn't a clearly defined target, it's more of a dumpster diving attempt, searching until something interesting is found.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=106)** Now, some of the questions before beginning will include the following.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=111)** Who is the target?
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=113)** Is it a company, hospital, government agency?
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=117)** What is the target?
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=119)** Gather data on the target, such as bank account information and social media accounts.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=125)** Where is the target?
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=127)** Start with the IP address and domain name information along with the physical address.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=134)** When should we attack?
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=135)** Now when the stakes are high?
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=138)** Or possibly late at night to avoid detection?
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=141)** Do you have the persistence to test at odd hours?
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=146)** And how should we attack?
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=147)** Well, the more information collected during a well conducted reconnaissance exercise will help determine just how we will launch an attack.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=157)** During the information gathering phase, it's essential to record your findings using a template such as this one where you can document corporate information, infrastructure assets, and financial data.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=172)** This will help you create a complete picture of your target and develop the best method of attack.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=180)** One important consideration when footprinting the target is to proceed with caution.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=186)** Even though the ethical hacking team has obtained appropriate permission to conduct the assessment, there may be a point where the reconnaissance should cease due to gaping vulnerabilities.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=199)** At that point, the vulnerabilities should be mitigated before any attempts to gain access to protected data or sensitive systems.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=210)** Now, let's test your knowledge.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=212)** Outline what information we can gather on the target during footprinting, along with what questions to ask before beginning the process.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=222)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), picture (2), imagine (1)
> **Code Keywords:** public (1), protected (1), let (1)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Using competitive intelligence
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=0)** - [Instructor] Not all footprinting and reconnaissance involves highly technical skills or tools.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=6)** Many times, a preliminary evaluation of a target can be achieved using several low-tech methods.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=14)** One example is using competitive intelligence, which can lend insight on many aspects of an organization.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=23)** In this segment, we'll describe how the ethical hacking team can use competitive intelligence to gather information about a company.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=34)** Competitive intelligence gathers competitor information on its products, services, and customers so a company can face business challenges with more direction.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=47)** Competitive intelligence uses standard search methods and is completely legal.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=54)** The ethical hacking team can use competitive intelligence to get a better picture of the target.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=61)** Facts about a target can be found using publicly available sources.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=66)** Those sources include financial reports, press releases, news articles, trade journals, patents, and trademarks.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=77)** While there are plenty of resources, one area we can check are job postings on a company.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=84)** The team can check job posting sites such as LinkedIn, Monster, and CareerBuilder to see if they're hiring.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=93)** One site that can help us get a better understanding of the technology used in a target organization is Dice.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=101)** Dice is a site that focuses on technology professionals.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=106)** For example, let's take a look at what we might find in a job description.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=112)** Here, we see a job posting for an IT systems application administrator.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=119)** Following that, it lists the company location and some of the job responsibilities.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=125)** So what can we learn from this job posting?
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=129)** Well, we can see that the organization is using Server 2016 for their network operating system.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=137)** And in addition, they list various applications.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=141)** Applications include Centricity, which is health care software.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=146)** Kronos is workforce management.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=150)** And PeopleSoft provides human resources and general business processes.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=155)** So let's drill down a little further.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=159)** If we go in and search for keyword PeopleSoft vulnerabilities, it will take us to this list.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=168)** And we'll take a look at this one, which will take me to the CVE details on Oracle.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=174)** Here we see a list of security vulnerabilities, and if the company fails to update and patch their systems, this would be a starting point if I wanted to launch an attack.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=188)** Now let's test your knowledge.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=190)** Describe ways the team can use competitive intelligence to gather information about a company.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=197)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Analogies:** picture (1), such as (1), for example (1)
> **CLI Commands:** find (1)
> **Env Vars:** cve (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Investigating business sites
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=0)** - [Instructor] While Footprinting, the Ethical Hacking team can gather valuable company information from publicly available sites and repositories.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=9)** In this segment, we'll discover how to use various sites such as GitHub, Dun and Bradstreet, along with Google Earth to learn more about the target.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=21)** Let's start with code repositories.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=24)** Code repositories are where developers collaborate and share code when developing software.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=30)** Some examples include GitHub, Bitbucket, and Apache Subversion.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=36)** If the company does have a public facing repository, the team might be able to find something of value.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=44)** A company may have posted an exposed source code or other information, either accidentally, or by a malicious insider.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=53)** So it's worth investigating.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=55)** Some of the information you might find includes source code of various projects, the versions in use, and possibly a discussion on security vulnerabilities or other issues they may be facing.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=71)** Another option is to search for detailed company information.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=75)** In most cases, you can find a wide range of information using free and per pay sites.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=82)** Let's talk about a few sites where we can search.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=86)** If the target is publicly traded, you can check the Security and Exchange Commissions EDGAR database.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=94)** Now, this is a public searchable database which provides detailed company information.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=100)** The site is very transparent.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=102)** In fact, this page will show us how to search the database.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=108)** Now, one document that you can find in EDGAR that might be of value is a Form 10-K or annual report, which every public company must provide.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=120)** This forum offers a thorough picture of a company's business, the location, who is top level management, the potential risks, and financial data.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=131)** In addition, you might find details about possible mergers and acquisitions that will be beneficial when starting to research domain names.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=141)** In addition to EDGAR, you can check other financial websites such as Dun and Bradstreet.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=147)** Now this is a per paid database of commercial data on credit history and overall health.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=154)** In addition, we can go to Google Finance.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=157)** Now let's see how we can use this.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=159)** We'll all put in a company, "ge", and we'll select this one.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=165)** And this actually just gives us snapshot of stock prices over time, and it also does show some other information.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=174)** If I scroll down here, I can see that I can go to Wikipedia to find out more information.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=180)** Now, I'll go to Wikipedia and I'll scroll down and here we see the GE building in New York.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=189)** And I'm just going to select that address and copy it.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=192)** And now we'll go to Google Earth, and now I'm going to search for that address.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=204)** Now, why is the company's location important?
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=207)** Well, some of the most significant data breaches have occurred by someone simply driving up to a building and hacking into a wireless network.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=217)** So as you can see, the ethical hacking team can gather company information from publicly available business sites and is a great non-technical approach to footprinting and reconnaissance.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=230)** Now, let's test your knowledge.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=232)** Describe how using various sites such as GitHub, EDGAR, Dun and Bradstreet, and Google Earth can help uncover valuable company information.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=244)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (3), this. (1)
> **CLI Commands:** find (6), apache (1)
> **UI Navigation:** go to (4), scroll down (2)
> **Env Vars:** edgar (4)
> **Tools:** github (3), bitbucket (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (3), picture (1)
> **Exercise Files:** source code (2)

#### Searching and Google hacking
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=0)** - [Instructor] Many of us use search engines to locate information.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=4)** In this segment, you'll discover how Google hacking can help uncover vulnerable applications, expose directories, and open servers and ports.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=16)** Formalized search engines began on the Internet as early as 1990 with a primitive tool called Archie.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=24)** As we see in this graphic, the search, although primitive, was pretty good for the time period.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=31)** The evolution of the worldwide web soon brought about advanced tools for locating information.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=39)** Search engines, such as Google, Bing, and Yahoo gather information.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=44)** Let's talk about how this works.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=48)** Search engines have to get the data before compiling the indexes.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=53)** They accomplish this by using web spiders that crawl through webpages, gathering and indexing information.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=63)** Google's web crawling bots are called Google Bots, which detect new and updated pages to be stored in the robust Google indexes.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=74)** Google has many additional capabilities, including translating documents and performing news and image searches.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=83)** We can also use an operator and keyword to narrow our search, for example, define or file type.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=92)** Let's see how this works.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=94)** In this case, I'd like a definition for vulnerability.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=97)** So I entered define, with a colon, vulnerability, and there we see a definition of vulnerability.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=109)** Let's try another one.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=113)** In this case, I would like a list of documents ending with a PDF, with a keyword networking, and if we scroll down, we'll see plenty of documents with a keyword networking.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=131)** Now, if you'd like to know more about how a Google search works, you can read this document.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=138)** For advanced searching, you can use the Advanced Search page.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=143)** Now once here, you can use operators in the search form along with key terms to narrow your scope.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=152)** Now, using Google with advanced operators to locate hidden information is called Google hacking, and this should be part of an ethical hacking exercise, as it is a very powerful tool.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=166)** The Google hacking database can be found here at the Exploit Database website.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=172)** Once there, you can drill down to the extensive and up-to-date database and see a list of useful topics, such as files containing juicy information, or files containing passwords.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=185)** Now let's go through some examples on how to use advanced operators and keywords.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=192)** Now, keep in mind, during footprinting, you would most likely reference the target, but for fun, I thought we would do some searches that might surprise you.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=203)** In this example, I've asked for in title, index of SCADA.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=208)** Now, once the results are presented to you, you can search through, and you might find something like this, which is a SCADA system.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=217)** This search will be able to access unprotected cameras, and after searching through those results, you might find something like this.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=228)** In the last search, I'll show you how you can find an index of MP3.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=234)** And once you run it, I found this list here.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=237)** And this is from Project Gutenberg, which contains thousands of free books to enjoy.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=244)** I selected this one right here, and once there, you can play it.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=259)** Now let's test your knowledge.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=261)** Describe how using Google hacking while footprinting can help uncover vulnerable applications, exposed files, and directories, and open servers and ports.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=273)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2), type. (1), this, (1), this. (1)
> **Env Vars:** scada (2), pdf (1), mp3 (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (2), for example (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** keep in mind (1)

#### Employing social engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=0)** - [Narrator] Social engineering leverages an individual's trust to obtain information.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=6)** In this segment, we'll explore some techniques the team can use during footprinting to gather data.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=13)** Social engineering is influencing someone into giving up information, which can result in identity theft and data exposure, and is accomplished in many ways.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=26)** Let's talk about a few techniques.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=29)** Dumpster diving is when someone looks into the trash, outside or inside an organization, for something that might reveal useful information.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=40)** When dumpster diving, the team might find exposed data, such as a list of names and social security numbers, intellectual property, or even hard drives holding digital data.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=53)** Shoulder surfing is when someone walks up behind someone to watch as they enter information on a device or keyboard.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=62)** For example, watching someone at the ATM machine as they're entering a PIN or password.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=69)** Some even use cameras and record the victim as they type.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=74)** Eavesdropping is when conversations are recorded and can happen just about anywhere, such as on a plane, corporate waiting room, restaurant, or company function.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=86)** Without someone's knowledge, they may give up sensitive information.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=92)** Phishing is an attempt to get a user to reveal personal or financial information using email or instant messaging to deliver the message.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=103)** Spear phishing targets specific individuals and generally has better results as it targets individuals who are more likely to respond.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=114)** Pharming is like phishing, however, instead of luring a user to the website using bait in the form of a phony email or link, pharming redirects victims to a bogus site, which is commonly a bank or e-commerce site, where once in, the victim may divulge confidential information.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=137)** Impersonation is pretending to be someone else.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=142)** In a building, the perpetrator may actually dress up like an authorized individual to fix a problem.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=149)** They may impersonate technical support or even a utility worker.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=155)** Today, social engineering is a major threat to the security of an organization, as the information they obtain can be used with other hacking techniques to gain access to network resources.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=170)** Now let's test your knowledge.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=172)** Discuss social engineering techniques the team can use during footprinting to obtain information.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=180)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (1), function (1), else. (1)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** atm (1), pin (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Gathering data on people
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=0)** - [Narrator] Searching for information while footprinting using free and paid online people search services can provide a great deal of insight on your target.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=12)** In this segment we'll review how sites such as AnyWho, Spokeo, and ZabaSearch search can help the team compile a more accurate picture of the target.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=24)** While searching online public records there are several apps that can provide more insight on your target.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=31)** Once you put in a name, the app will present you with all names like what you entered.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=37)** The next step is to narrow your scope with more specific filters such as state or age.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=44)** What I'd like to do is show you a few examples of what you might see when searching online.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=50)** Let's start with AnyWho.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=53)** AnyWho provides a detailed search on people and organizations and is completely anonymous.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=61)** AnyWho has access to a wide variety of information sources in both the public and private domain.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=70)** Data found in the public domain are records maintained by local, state, and federal government, and includes property title and liens, birth and death certificates, business records, security and exchange commission filings, as well as court records.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=88)** In addition, they have data not maintained by the government as well, such as phone numbers, licensing, press releases, and newspaper articles.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=99)** Another site is Spokeo, which is a people search that uses public records, white page listings, and social networking sites to find information.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=109)** Now, if I type Bill Gates and then search now, it will take a few minutes to run, and then it will present you with the information.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=119)** Now once there, you'll want to narrow your scope, and over here you can see browsing locations, and there you can refine it some more so you can find more information on your target.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=132)** ZabaSearch is a free and public information search engine that provides basic information, such as name, address, and partial phone numbers.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=142)** Now, if you want more information, you will have to pay for it.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=149)** Now, Yasni provides standard information such as telephone and addresses, along with a variety of other information that includes Facebook and LinkedIn profiles, where they may have worked, education, death notices, books published, and YouTube.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=171)** And the last site that might help you when searching for a list of company employees is SignalHire.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=177)** This site has approximately 10 million companies and their employees.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=182)** Now keep in mind that this is a list that they maintain and curate and it might not be completely accurate, but it could be a starting point when you want to launch a social engineering or phishing attack.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=197)** Now, as we can see there's quite a bit of information available.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=201)** However, use caution as the data is not always accurate.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=205)** And because of this, I'd recommend using several sites to cross-reference to ensure that you're getting a complete picture with the latest information available.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=218)** Now, let's test your knowledge.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=220)** Review how sites such as AnyWho, Spokeo, and ZabaSearch can help the team compile a more accurate picture of the target.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=230)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), let (2), private (1), this, (1)
> **Analogies:** such as (6), picture (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Warnings:** keep in mind (1), caution (1)
> **Speakers:** - [narrator] (1)

#### Tracking online reputation
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=0)** - [Narrator] When footprinting either an individual organization or company, it's essential to track the online reputation of the target.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=10)** In this segment, we'll learn how to assess online reputation by using image and video search engines, social media, and Google alerts.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=21)** With so much of our lives online, it goes without saying that part of what we represent might be visible.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=28)** The posts, videos, and images will shape our reputation.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=34)** No single source is going to provide a complete picture of a company's reputation.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=40)** Because of this, you'll want to check multiple sources to get a well-rounded view of the target.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=47)** Let's talk about what's available when searching online.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=50)** Sometimes, it's best just to start with a simple search for a blog or social media site that references the target.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=58)** I'll step through what I might find while searching.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=63)** For example, while using the keyword "Landon Hotel" in the search, I might stumble on a social media site dedicated to Landon Hotel employees.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=74)** In this case, it's a public site that exposed some issues, such as no work-life balance, managers are incompetent, poor training programs, and friends are fired for trivial reasons.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=90)** This is negative press, which can lead to a damaged reputation.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=95)** In addition, some of the Landon Hotel employees might be disgruntled, which can lead to an insider attack.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=103)** Now, along with searching for documents and also blog sites, we can also check FTP sites.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=111)** Now, here we see a list of search engines for FTP sites and I selected this one.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=118)** Now, once there, I put Gutenberg in the search with all the words and we'll say search.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=125)** And there, we have a list of all FTP directories for Gutenberg.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=134)** We can also use video search engines and here's a list of some of the search engines available.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=146)** Another thing we can do is search for images.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=150)** For this, I'll go to Google and search, "Landon Hotel."
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=157)** Then once there, I'll select images.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=162)** Now, once done, you'll want to look through the results and make sure that there isn't a compromised image of the target or organization that doesn't reflect the best reputation.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=173)** We can also check advanced filters.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=176)** Now, once there, we can search deeper, using a variety of keywords.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=183)** Sometimes, you might want to try reverse images and for this, there's a few tools that are available.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=190)** You can use TinEye and here, you would either upload or paste an image or enter an image URL.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=198)** I tried PimEyes and here, it's the same concept that once you put in your image, it will present you with a list.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=206)** So I put in one of my images and it came up with a variety of sites that had my image.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=212)** Now, in this case, it will present you with the list, if you purchase the results.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=217)** Now, at the very least, you can try Google alerts.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=221)** Now, this is a free tool that allows you to monitor the web for interesting new content related to specific keywords or phrases.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=230)** You'll need to sign into your Google account and then enter your search term.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=235)** In the create an alert box, you'll enter the words or phrases that you want to monitor.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=241)** Then once you enter that, it'll show results, which then allows you to customize your alert.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=248)** Tracking online reputation is another element when scouting the target.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=252)** You should document the results and if you do see anything that's unflattering, you can then help your client to take steps to modify or mitigate the effects of a possible negative reputation.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=267)** Now, let's test your knowledge.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=269)** Outline how to assess online reputation by using image and video search engines, reviews, social media, and Google alerts.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=280)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (2), case, (2), public (1)
> **Env Vars:** ftp (3), url (1)
> **Analogies:** picture (1), for example (1), such as (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 3. 2. Using Email and Websites

#### Harvesting email addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=0)** - [Instructor] Email is one of our main forms of communication in the business world and is a coveted target for malicious actors.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=9)** In this segment, we'll learn how to harvest or craft a list of email addresses, which then can be used in spear-phishing and spoofing attacks.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=19)** In the wrong hands, having a list of valid email addresses can be very dangerous.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=25)** For example, here is a notification of a recent attack.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=30)** A group of malicious cyber actors have compromised and stolen sensitive information from various government and commercial networks.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=39)** The attack used malicious files, often through embedded links and spear-phishing emails.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=45)** As a result, part of an ethical hacking exercise might include locating and harvesting a valid email list.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=54)** Well, how can we get a list of email addresses?
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=58)** Let's talk about a couple of ways.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=61)** One way is we can purchase an email list.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=65)** Now, if we do a search for "purchase email lists," we'll see that there are plenty of opportunities to purchase verified lists.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=74)** Another method is to search a company's website.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=78)** Let's take a look.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=79)** I'm at the Landon Hotel website, which is a fictitious website used for training.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=85)** And I'll look for a way to contact someone there at the Landon Hotel.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=91)** Now, because many companies are aware that they should not have any email addresses on a public-facing website, you might not find any email addresses or lists to harvest.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=103)** Now, we'll search around, and if we don't find one on the website, which, I didn't find any, we can then craft an email list.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=112)** Now we'll need to start by using either a Contact Us form, or we might use a generic email address where we can start the process.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=122)** Now, the Landon Hotel doesn't have a Contact Us form.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=126)** However, there is a link that you can download more information right here.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=133)** So I've downloaded the information and I've opened it in a new tab.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=137)** And then, once there, we can search to find an email address.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=141)** And here, we'll find one: info@[landonhotel.com](https://landonhotel.com).
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=147)** So now let's talk about how we can use this information.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=151)** Now, here is an example of what we might send.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=154)** "I'd love to have some information on your deluxe suites."
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=158)** And then, once sent, I'll probably get a response back.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=162)** All right, we see that the email has come from Barb Roberts.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=167)** And now we see the way the email is structured, BRoberts.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=173)** So the first initial and the last name @[LandonHotel.com](https://LandonHotel.com).
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=178)** Well, just imagine if I searched around a little bit more.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=182)** I may have found a list of employees on that website.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=185)** And then after finding that list of employees, which is sometimes available, maybe not on that website, but through other avenues, I can then craft an email address list using that same structure.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=198)** So first initial and last name @[LandonHotel.com](https://LandonHotel.com).
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=203)** Now I have what I feel would be a valid email list.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=209)** If you can't obtain an email list from the company, you can also generate one by going to a generator that you can find online.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=217)** For example, I'm here at this site, and I'll scroll down here.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=220)** This is where you would enter the field values: name, surname, and company domain.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=228)** Now I've entered the following, Barb Roberts, Landon Hotel, and then I'll select Generate.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=235)** And on the right-hand side, you'll see a list of all the email addresses for Barb Roberts.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=241)** Now, if you throw enough of these at an email system, some of them might even get through.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=247)** So now let's test your knowledge.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=250)** Discuss ways you can harvest or craft a list of email addresses, which can then be used in spear-phishing and spoofing attacks.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=260)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6)
> **Code Keywords:** let (4), public (1), throw (1)
> **Definitions:** is a  (4), is an  (1)
> **URLs:** [landonhotel.com](https://landonhotel.com) (3)
> **Analogies:** for example (2), imagine (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Examining websites
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=0)** - [Instructor] The source code from a website can hold valuable information.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=4)** In this segment, we'll learn some webpage and website basics so that you can navigate the source code and locate any exposed sensitive information.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=15)** HTML is hypertext markup language, a simple language developed in 1990 that is used to create webpages and link content.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=26)** If you are serious about becoming an ethical hacker, you really should know how a webpage is created and the structure and format of the underlying source code.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=38)** So that you understand what we're looking at when viewing the source code, I wanted to show you a simple webpage with some basic tags.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=47)** I've opened Notepad, and we'll start with an opening HTML tag.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=53)** And then I'm going to put a header tag, now we don't need a header, but I want to put a title.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=59)** The next line I'll Tab in so it reads easier, and we'll put the title, Wild Mashers, and then we'll close the head tag.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=68)** The next line will begin the body.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=70)** Now the body will hold the body or content of the webpage.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=74)** In this case, all I'm going to put is Welcome to Wild Mashers.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=79)** And here you see two header tags, an open header tag, and a closed header tag.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=84)** So that will make it nice and bold.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=87)** Now in the next line, I'm going to put a comment.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=90)** Now comments don't do anything, but this is the type of information you might find when looking through source code.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=97)** Now we'll close the body and we'll close the HTML page.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=103)** Now we're going to save it.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=104)** Now, when you go to file, save as, because it's in Notepad, we want to make sure that it saves it as an HTML page.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=114)** So we'll put mashers.html.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=124)** Now it's already in there, so it's going to ask me do I want to replace it?
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=128)** And I'll say yes.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=131)** But now I've opened it up in my browser, and here we can see our simple website.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=137)** And up here on the tab, you can see the title.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=140)** Now if I want to view the source code, all I have to do is Right Click and view page source.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=147)** And there you would see exactly what we just did in Notepad.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=151)** Now a single page, just like the one we just did, can be simple.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=156)** However, a website can be complex.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=160)** Today, most web developers use specialized software to create web pages, as many are interactive and responsive so you can view them on a small screen such as your cell phone.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=172)** However, many times it's worth investigating.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=175)** As within a webpage, we can find links, passwords, and other clues to get us inside the site deeper and collect more data on our target.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=186)** So what do I mean by complex?
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=189)** Well, when managing a website, there are a number of different tools we can use to visualize the different levels of website, along with what content is available throughout the site.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=201)** Now I'm here at Dyno Mapper and I'll go to the visual site mapper, and here at this tab, and this is going to just show you what it will generate.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=211)** Now, once you run a site mapper, this software will then present a view of your site such as this one.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=220)** Once you know the layout of the site, you can plan your strategy to get in and study the pages, to find valuable insight on the target.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=230)** So I've highlighted the following, office locations, company details, and knowledge base.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=237)** And there I might find additional information.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=242)** So now let's test your knowledge, describe some webpage and website basics so that you can navigate the source code and locate any exposed sensitive information.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=255)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Exercise Files:** source code (7)
> **CLI Commands:** find (4), make (2)
> **Env Vars:** html (4)
> **Analogies:** such as (2), just like (1)
> **Code Keywords:** case, (1), let (1)
> **UI Navigation:** go to (2)
> **File Paths:** mashers.html (1)
> **Cross-References:** in the next (1)

#### Scraping websites
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=0)** - [Instructor] Within a company's website, there can be an abundance of valuable information.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=6)** In this segment, we'll learn how to scrape a website and examine the source code so we can extract links, comments, and passwords.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=15)** Website scraping or mirroring is done so we can download a portion or an entire website and study the contents for more clues that can help us understand the target.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=27)** Some items to look for include emails, phone numbers, or other organizational data, such as employee directories.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=36)** We also might find comments and concealed information not published or seen on the webpage, such as passwords or links to protected content.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=45)** Additionally, by scraping websites, we can gather words to create a word list that we can use later in a brute force attack.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=54)** If you keyword search website extractor or website mirror, you will see a number of free and paid tools: HTTrack, Wget, Website Ripper Copier, or Web Data Extractor.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=70)** I'm at HTTrack website copier.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=73)** Now, although this lists the date as 2017, rest assured that it is still able to copy a website from the internet to a local directory.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=84)** I've downloaded and installed the software.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=88)** We're going to mirror this site here, Fake Python, Fake Jobs for Your Web Scraping Journey.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=96)** Now, once you're in the software, you'll start a new project.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=101)** I went to File, New Project, and then I'll select Next.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=106)** And here I'll put the project name.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=109)** I'll just put Python Jobs.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=120)** No category. And we'll put it in the home directory.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=123)** We'll say Next.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=126)** And here's where you have some choices.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=130)** We'll see where it says Set Options.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=133)** Now, there's a lot more that we could do but we're going to keep it simple.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=137)** I'll just put in the web address and select Next.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=142)** And then we'll say Finish.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=144)** Now, this will take a few seconds.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=147)** Now it's complete.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=149)** So when we want to take a look, we'll go to File, Browse Sites, which you'll see will open in a new browser.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=158)** I'll select Python Jobs.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=161)** And there you see the fully-mirrored website.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=165)** Now, once there you can parse through and find protected content, emails, and possibly password information.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=172)** In addition, the source code can be used to extract relevant words or phrases.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=178)** In addition to scraping a website, you can do a quick check by examining the source code of a website.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=185)** Let's step through how this works.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=187)** We're at the Landon Hotel webpage, which is a fictitious site used for training.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=193)** You'll place your cursor anywhere on the page, right-click, and select View Page Source.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=200)** It will open it in a new tab and there you can see the page source.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=205)** And when you are in the page source, you'll want to look through it.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=211)** And here, this is what I'm looking for.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=215)** This is a comment. "Password is HAL2001."
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=219)** Now, this is the kind of information I'm looking for when I'm crawling through the webpage.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=224)** These are the hidden comments that, if found, will help me get in, drill down, and learn more about my target.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=232)** Now let's test your knowledge.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=234)** Discuss some of the ways to gather information from a website, such as emails, employee directories, and comments.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=242)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), find (2), wget (1)
> **Code Keywords:** protected (2), let (2), for. (1)
> **Exercise Files:** source code (3)
> **Analogies:** such as (3)
> **UI Navigation:** go to (1), right-click (1)
> **Definitions:** is a  (2)
> **Env Vars:** hal2001 (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Mirroring a website
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=5)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=7)** In this challenge, we'll use HT Track to mirror a website.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=12)** So begin by going to [httrack.com](https://httrack.com) and then download and install the software that's appropriate for your operating system.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=22)** Once you have it installed I want you to mirror [example.com](https://example.com) and then view the site.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=28)** Now [example.com](https://example.com) is used for training purposes such as this.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=33)** Once you see how easy it is to mirror a website I want you to answer the question how can a malicious actor use this tool?
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=43)** This challenge should take you about 10 minutes.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=46)** Good luck.

> [!info]- Semantic Content
>
> **URLs:** [example.com](https://example.com) (2), [httrack.com](https://httrack.com) (1)
> **Code Keywords:** let (1), this. (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Mirroring a website
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=0)** - [Narrator] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=8)** I've downloaded and installed HTTrack and now we're going to mirror this site, [example.com](https://example.com).
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=16)** So to begin, I went to file and new project, which opened this window, and I'll say next.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=22)** Now I've already done this but I'll just go through what I did.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=25)** I put example for the name and then we'll go to next.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=31)** And then I would've entered the URL.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=34)** The options, I didn't set any, again, just to keep it simple and then go to next.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=39)** And then I selected finish.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=42)** Now once it ran, I went to file, browse sites, which brought up this window.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=50)** Went to example, right-click, open a new tab, and there's [example.com](https://example.com).
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=58)** It's exactly the same since it's been mirrored.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=61)** So my question was, how can a malicious actor use this tool?
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=66)** Well, a malicious actor will mirror a website because they want to use it in a phishing attack.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=72)** Many times it's used to trick users into giving away logins.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=77)** It also might be used to lure victims to give money for disaster relief or we might see it being used to get someone to click on a link to download malware.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=88)** So take steps to educate your users.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=91)** I found a couple of resources for you.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=94)** Learn how to spot a cloned website and it talks about website cloning.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=101)** And this one is, "How to Spot a Phishing Attack."
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=106)** I'll show you one more thing.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=107)** Now this doesn't always happen but HTTrack puts a comment in their source code.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=113)** So if you're suspicious, you can right-click and say view page source.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=118)** And right here is the comment, mirrored by HTTrack.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=125)** So cloning a website is easy to do and malicious actors use it in phishing attacks.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=130)** Protect yourself and learn how to identify a cloned website.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=136)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), right-click (2), click on (1)
> **URLs:** [example.com](https://example.com) (2)
> **Code Keywords:** let (1)
> **Env Vars:** url (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Monitoring websites
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=0)** - [Instructor] Monitoring a website during an ethical hacking exercise can be crucial for various reasons.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=7)** In this segment, we'll outline methods to monitor websites for traffic, changes, and vulnerabilities.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=15)** First, let's talk about why we need to monitor a website.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=19)** One reason is it helps us to understand site behavior for things such as user interaction, engagement, and responsiveness.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=29)** It may be part of compliance guidelines that require the organization to test and monitor their site.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=36)** It provides a way to check to make sure there are no unauthorized changes that may have occurred, either maliciously or by accident.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=46)** And monitoring a website will reveal vulnerabilities that can exist within the site.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=52)** The good news is that there are plenty of tools out there to assess a website.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=57)** Let's review a few of the sites available today.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=62)** I'm here at SolarWinds Pingdom.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=65)** Now, Pingdom is used to gather website analytics.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=69)** Pingdom can help you monitor transactions, page speed, and performance, so you can get a pulse on the website to make sure that it's functioning as expected.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=80)** In addition, Pingdom has a site where we can do a quick check of the speed to analyze it and find potential bottlenecks.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=88)** Now to make sense of your target's web traffic, you can use Google Analytics, which provides free tools to assess customer devices and platforms.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=98)** Any downtime or disruption to your website will affect sales, brand reputation, and lead to dissatisfied customers.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=107)** I'm here at [updown.io](https://updown.io), which will monitor the uptime of a website and then send an email notification if the website is down.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=118)** Another tool to use is Monastic, and this will help us do a quick check to see if the site is up and responding.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=126)** And here's some examples of how you would enter the URL.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=131)** To gain insight on your audience, you can visit Quantcast, and this will give you an idea of who is accessing your site.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=140)** Finally, you'll want to test your site for vulnerabilities.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=144)** Now, there are plenty of tools and techniques your team can use, but for a quick check, you can visit here, [pentest-tools.com](https://pentest-tools.com) and run a quick scan on the target.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=155)** In most cases, you'll want to run a more thorough scan, as security misconfigurations and vulnerabilities can lead to disastrous results, such as data exfiltration and extortion.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=169)** Now let's test your knowledge.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=171)** Outline methods to monitor websites for traffic, changes, and vulnerabilities.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=177)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (1), finally, (1)
> **CLI Commands:** make (3), find (1)
> **URLs:** [updown.io](https://updown.io) (1), [pentest-tools.com](https://pentest-tools.com) (1)
> **Analogies:** such as (2)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Searching the Network

#### Footprinting using DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=0)** - [Instructor] When conducting reconnaissance, using the Domain Name System will help map your target's network.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=7)** In this segment, we'll review different techniques involved in DNS Footprinting.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=12)** Domain Name System is an application layer protocol that converts a host name to an IP address and vice versa.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=20)** DNS is made up of servers spread globally.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=24)** The servers hold and manage records that provide an address for a host or specific type of resource.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=31)** The DNS system is the largest distributed database in the world.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=36)** When looking at the graphic, we see that the DNS hierarchy is in a tree-like structure.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=42)** The hierarchy begins with the Root.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=45)** And below, we see the top level domains, such as .com and .edu.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=51)** And then the second level domains that include [Google.com](https://Google.com) and [MIT.edu](https://MIT.edu).
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=58)** And, you might also see some subdomains.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=61)** Now, within each domain there are several resource records that store name and IP address pairings.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=69)** A couple that you might be familiar with are "Type A," which is an IPv4 address.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=76)** A "quad A," which is an IPv6 address, and an MX record, which is a mail exchange.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=84)** A normal query and response occurs when a client sends a query to a DNS server for an address.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=91)** The server then responds with information.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=94)** But, it can also ask other DNS servers for the information.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=99)** Now when dealing with DNS, there are typically three types of servers.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=104)** We have the primary server, which is the authoritative server for the zone.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=109)** Now the primary server provides answers to your DNS queries, such as, "What is the mail exchange IP address" or "What is the website IP address."
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=120)** The secondary servers are backup DNS servers, and there are also caching servers.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=127)** Caching servers hold cached records of normal back and forth query responses.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=134)** The DNS system is essential.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=136)** However, it can be vulnerable, as the records can expose your network layer.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=141)** DNS has many threats which include exposure or compromise to the zone file and cache poisoning, which changes the DNS cache on the local name server to point to a bogus server.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=155)** Now let's talk about some of the techniques involved in DNS Footprinting.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=161)** A zone transfer is when a primary DNS server periodically passes a copy of the database, called a zone, to a secondary DNS server.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=172)** During footprinting, the team might be able to trick the primary DNS server into providing this information, which will expose all records in the zone.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=182)** There's also a reverse DNS lookup.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=185)** Now, this involves retrieving the domain name associated with a given IP address.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=192)** This can help uncover additional domains and the organizational details associated with a target organization.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=199)** We might also try subdomain discovery.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=202)** Now this will uncover subdomains within a primary domain.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=207)** These subdomains might lead to different parts of an organization's infrastructure, which might be vulnerable or misconfigured.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=216)** There's also cache snooping.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=219)** Now this involves querying DNS cache records from non-authoritative DNS servers, which might expose other information about the internal structure and topology of an organization.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=233)** Many times you're going to use footprinting tools, and there are plenty.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=238)** Footprinting tools include SpiderFoot, DNSRecon, DNSEnum, or theHarvester.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=246)** These tools can help speed up the process and display detailed information, and many are built right into Kali Linux.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=255)** Now let's test your knowledge.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=257)** Review the different techniques involved in DNS Footprinting.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=262)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (20), mit (1)
> **Definitions:** is an  (3), is a  (1)
> **Code Keywords:** let (2)
> **URLs:** [google.com](https://google.com) (1), [mit.edu](https://mit.edu) (1)
> **Analogies:** such as (2)
> **Code Identifiers:** theharvester (1)
> **Speakers:** - [instructor] (1)

#### Examining a zone transfer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=0)** - [Instructor] On a network, a primary DNS server will periodically send a copy of the database called a zone to a secondary DNS server.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=10)** In this segment, we'll learn how a zone transfer attack can be dangerous and what information can be exposed.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=18)** First, let's talk about DNS zone transfers.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=22)** DNS zone transfers are essential because they facilitate the replication and synchronization of DNS information across multiple DNS servers.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=33)** On a network, you'll have the following DNS servers.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=37)** The primary server is the authoritative server that holds the records for a namespace.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=44)** Secondary servers are backup servers that are read-only.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=49)** Secondary servers help in load balancing and disaster recovery.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=54)** To start the process, a secondary server will use the authoritative transfer query which is a protocol for zone transfers.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=64)** A primary DNS server will then send the zone file to the secondary DNS server.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=70)** Here's a snippet of a zone file where you can see the information that is sent during the course of a normal query.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=77)** An attack occurs when an entity poses as a secondary DNS server and asks for a copy of the zone.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=86)** A zone transfer attack can be dangerous, as it can expose internal IP address information, including host names, IP addresses, and other DNS records.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=98)** This information can be invaluable to an attacker as it provides a roadmap for further attacks.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=106)** I want to show you in Wireshark what an authoritative transfer looks like.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=111)** But first, let me show you where I got the packet capture from.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=115)** Chris Sanders, who has written a very good book on Wireshark, has some packet captures that you can download and analyze yourself.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=124)** Now, we'll go to his GitHub repository and scroll down, and there you can see the PCAP.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=132)** Now, once you go there, I've opened this in a new tab, and you'll select view raw and then you can download the file and open it in Wireshark so you can follow along.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=143)** Now, once it's open, I'll filter by DNS.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=151)** And there we see two frames.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=154)** So in frame six is my query, and in frame seven is actually my response.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=162)** Now I'll pull this up and we'll take a look at what are the results.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=168)** In some cases, depending on the transfer, I'll only get the start of authority, but in this case, I've gotten a lot more.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=175)** We'll drop this down and we'll take a look at the answers.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=181)** In this case, I've gotten all the answers.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=184)** We see host names, IP addresses, and other DNS records.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=189)** So for good practice to prevent this type of an attack, you'll want to restrict zone transfers only to authorized servers.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=199)** Deny all inbound connection requests to TCP port 53 and consider using DNS security, which is a set of security extensions for DNS that provides authentication methods when dealing with DNS records.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=216)** Now, let's test your knowledge.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=219)** Explain how a zone transfer attack can be dangerous and what information can be exposed.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=226)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (16), pcap (1), tcp (1)
> **Code Keywords:** let (3), case, (2), from. (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Ports:** port 53 (1)
> **Tools:** github (1)
> **Exercise Files:** download the (1)
> **Best Practices:** good practice (1)

#### Generating domain names
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=0)** - [Instructor] When launching a phishing attack the attacker wants to make sure that the victim believes the site they're clicking on is real.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=9)** In this segment we'll learn how to generate believable domain names to launch a phishing or spear-phishing attack.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=17)** When launching a phishing attack, spoofing the brand in the hyperlink may get someone to click on the link.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=25)** People are now trained to watch the hyperlink so you'll need to have a believable domain name.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=32)** Let's take a look at an example.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=35)** Here we see an email from payroll for a final reminder refund.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=40)** "Dear employee, we've identified an error in your refund.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=45)** In order to claim your overpayment create an e-Refund account so the monies can be deposited."
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=53)** Now here is what I'll see when I place my cursor on the Get Started hyperlink.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=59)** Hmm, that looks kind of official.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=62)** Now, if they click the link, it will take them to [LandonPay.com](https://LandonPay.com) where they will find a form that they'll fill out with hopefully, personally identifiable information.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=75)** Therefore, prior to launching an effective and believable phishing attack, we'll need to generate domain names.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=83)** Now we can do this manually, however there are a lot of domain name generators available today.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=90)** Many will actually check to see if the domain name that you generated is already in use.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=97)** Now I'm here at this site and I've downloaded and installed Domain Name Analyzer.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=105)** Now once open, you can see the interface and what it's going to do is generate a database of domain names.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=113)** Now we know when dealing with databases, we have to save space on your drive before we generated so it has a place to save the database.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=122)** So to begin, you can select New, and I've already created the database called Landon, and once you do that, then you can begin.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=134)** I'm going to cancel since it's already created.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=137)** Now for this example, I'm going to use From Keywords, and select this right here.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=143)** Now, once I'm here, you can select Auto and that will populate the form with several keywords.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=149)** So if I selected this, it will just generate a number of different keywords, which may not make sense.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=156)** Now because I don't want anyone to second-guess what I'm doing, I'm going to create my own list.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=163)** So let's just put in a couple here, management, and pay, and we'll do another one here, fin.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=180)** We will definitely put Landon, over here we'll put hotel, and manager, and give it enough, because remember, it's going to check to see what's available.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=201)** And over here we can select what our extension will be.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=206)** So we'll select .com, .net, .biz,
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=214)** and .management.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=216)** And now we say, okay, and I'll scoot this down here, and here you can see all of what it has generated, and some of them look very official.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=228)** Up here we can select Check All, and some of them have already been taken.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=237)** It then gives you the option to purchase the domain name that you just created.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=243)** Now, once you select it, to really sell the domain name you can go to [letsencrypt.org](https://letsencrypt.org) and get a TLS certificate.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=254)** Now let's test your knowledge.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=257)** Describe how to generate believable domain names to launch a phishing or spear-phishing attack.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=264)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (1), new, (1), this, (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [landonpay.com](https://landonpay.com) (1), [letsencrypt.org](https://letsencrypt.org) (1)
> **UI Navigation:** click on (1), go to (1)
> **Env Vars:** tls (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Determining the path
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=0)** - [Instructor] While footprinting the network, there are several tools and utilities that we can use to help gain insight on our target.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=9)** In this segment, we'll learn how using tracert or tracer route can help us understand the path packets take through the network and potential weak spots along the way.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=22)** A footprinting exercise will most likely involve assessing the network.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=28)** We know that most intermediary devices and ISPs should have an acceptable level of security against attacks.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=36)** However, that is not always the case.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=39)** Footprinting the network can help discover weak spots in a network infrastructure.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=45)** So first, let's talk about some command line interface tools that we can use to test the network.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=53)** Let's start with ping.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=55)** Ping is a simple utility that is used to test for reachability.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=61)** In Windows, it will stop after pinging four times and in Linux, it will keep pinging until you issue the command control C.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=71)** To demonstrate, I'll go into the command line interface and I'll type ping [Google.com](https://Google.com) and we'll let it run.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=81)** This is a Windows operating system, so it will ping four times and then stop.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=87)** It then displays the results along with some statistical information.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=92)** Next, let's talk about how we can trace the route packets have taken from point A to point B.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=100)** We can do this in Windows using tracert or in Linux using tracer route.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=107)** Both utilities discover the route by using specially crafted ICMP packets.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=114)** The results will present the fully qualified domain name and IP address of each gateway along the route, along with transit times.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=126)** Let's see how this works.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=127)** I'm in the command line interface and I've entered tracert [Google.com](https://Google.com).
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=134)** Now this takes a little bit longer and I let it run, but now we can see it's given us more information.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=142)** And I'll scroll down.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=144)** Now once complete, we'll see some information as to the journey the packets took and the stops along the way.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=151)** Now keep in mind, we see a number of different timeouts.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=155)** If we see a timeout, that probably means it's a firewall rule set to deny ICMP requests.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=164)** Another Windows utility that combines the features of ping and tracert is called path ping.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=172)** It sends packets to each router and then shows packet loss at any given router or link by doing some statistics.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=181)** Linux doesn't have path ping, but you can use MTR, or My Trace Route, which basically does the same thing.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=190)** To run, issue the command path ping and let it run.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=194)** Now, it will take a few minutes to run, as it needs to complete some calculations.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=201)** So here's what you might see after running path ping.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=205)** The first results list the path, right up here, and then down below you'll see the test results.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=214)** In addition to command line interface tools, some online apps provide detailed visualization, packet loss statistics, along with port and network scanning.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=226)** For example, we see this digital dashboard from SolarWinds.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=231)** Here, the software provides several details on the intermediary devices the packets have taken on their journey to a remote host.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=242)** Now let's test your knowledge.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=244)** Explain how tracert or tracer route can help us understand the path packets take through the network and potential weak spots along the way.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=255)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), interface (4), case. (1)
> **Tools:** command line (4)
> **Env Vars:** icmp (2), mtr (1)
> **Definitions:** is a  (2), is called (1)
> **URLs:** [google.com](https://google.com) (2)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### Using nslookup and DIG
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=0)** - [Instructor] When footprinting DNS, there are several utilities we can use during discovery.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=6)** In this segment, we'll learn how to use nslookup and dig in either the command line or using online resources to test a DNS query and view the results.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=18)** First, let's talk about nslookup.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=22)** nslookup is used to diagnose DNS.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=25)** It's native to most operating systems, and you can use it in either non-interactive, which is the default, or interactive modes.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=35)** Let's see how this works.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=37)** I'm at the Windows command line prompt, and we'll begin by using the non-interactive mode.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=44)** To find out the IP address of a host, you will need to enter the fully qualified domain name of the host.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=51)** I'll enter nslookup [google.com](https://google.com).
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=63)** I'll press Enter, and there you will see your results.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=68)** The first result is the local DNS server.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=72)** The second one shows several IP addresses for [google.com](https://google.com).
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=77)** Next, let's go into interactive mode.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=81)** For this, I'll type nslookup, and then press Enter.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=90)** There you will see the nslookup command prompt.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=93)** Now, we know the IP address for [google.com](https://google.com), but I want to find out a little bit more about [google.com](https://google.com).
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=102)** Okay, but specifically what?
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=104)** Well, this time, I'll ask for the mail exchange.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=107)** So I'll enter, set type equals mx.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=118)** And I'll press Enter.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=120)** And now it wants to know for what domain name, and I'll say [google.com](https://google.com).
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=131)** And press Enter.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=133)** And there is your mail exchange information.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=137)** Now, to exit, hit Ctrl + C.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=140)** Now, another tool is Domain Information Groper or dig, which can query specific DNS records and provide details on how DNS servers are responding to queries.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=154)** Dig is native to Linux.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=156)** Now, you can also use dig in Windows, however, you would have to install dig along with bind utilities.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=164)** But another way we can use dig is by going to the Google Apps toolbox.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=170)** Now, I'm here at this site, and I've entered [google.com](https://google.com) and we see several records.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=177)** For example, we see an A Record, which is an IP version four record, and a quad A, which is IP version six, and possibly other records you might want to look into, such as the start of authority.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=192)** And I'll go to that.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=193)** Here's the start of authority.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=196)** Now, the start of authority is a resource record in DNS that contains critical information about a domain such as the primary name server, the email of the domain administrator, the serial number, and refresh and retry timers.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=214)** So whether you're in Windows, Linux, or even online, we can find specific information on a DNS system.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=222)** Now let's test your knowledge.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=224)** Describe how to use nslookup and dig to test a DNS query and view the results.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=231)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (9)
> **Code Keywords:** let (4), default, (1), this, (1)
> **URLs:** [google.com](https://google.com) (6)
> **CLI Commands:** find (3)
> **Tools:** command line (2), command prompt (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)


### 5. 4. Discovering Reconnaissance Tools

#### Using OSINT tools
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=0)** - [Narrator] Open source intelligence tools can gather publicly available information during reconnaissance such as news stories, public records, and websites.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=11)** In this segment, we'll discover how Maltego, Shodan, and other tools can help provide intel for a more targeted discovery.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=21)** While mining data and gathering intelligence there are a number of different tools that can collect information by gathering artifacts, generally one result at a time.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=32)** That type of tool is called Open-Source Intelligence Tool, or OSINT, which is consolidated from publicly available sources.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=43)** We are all connected in many ways, as shown in this graphic.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=48)** Most all objects on the network have descriptive data about data and includes information such as the location, file size, type, author, and keywords.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=61)** This descriptive data is called metadata.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=66)** To improve the effectiveness of data collection, analysis, and interpretation, most OSINT tools use metadata.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=75)** So let's talk about some of the OSINT tools that you may come across while searching and some information on how they work.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=83)** Let's start with Metagoofil.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=86)** Metagoofil is a pretty strong information-gathering tool.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=90)** It will take metadata from the target and then will put it in the form of a webpage and then you can view it in a standard browser, as you see here.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=100)** Another tool is FOCA, which examines metadata so you can tell what software is being used such as a dot doc, dot pdf, or PowerPoint file.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=112)** In addition, FOCA can scan using search engines like Google, Bing and DuckDuckGo to find downloadable files along with local files.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=122)** As shown in the screenshot, you can customize your search.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=127)** Maltego is a powerful data analysis software tool that gathers information by using standard gathering techniques.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=137)** It harvests domain names, WHOIS information, and IP addresses.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=142)** Maltego also harvests specific information on people such as websites, related companies, phone numbers, social networking, and email addresses.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=158)** It then creates a visual of the relationship among all objects.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=163)** Maltego has a free community version, which is built into Kali Linux along with a paid commercial version.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=172)** And the last tool we'll look at is Shodan.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=175)** Shodan allows you to see what devices are connected to the internet, who's using them, and what they are.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=183)** Now, I'm at the homepage and it says, the search engine for the internet of everything.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=188)** And if we select Explore, it will take you to this page where you can explore all types of objects on the internet.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=198)** Billions of devices are on the internet and that includes all types of things such as SCADA, webcams, and other things such as power plants, smart TVs, and even refrigerators.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=211)** Shodan is the search engine for the internet of things and that's everything that's connected.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=217)** So explore Shodan and see everything that's connected.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=223)** Of course, there are many other OSINT tools available.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=226)** This was just a sample but keep in mind that if it's on the internet there's most likely a digital footprint on your target.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=236)** Now, let's test your knowledge.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=238)** Outline how Maltego, Shodan, and other tools can help provide intel for a more targeted discovery.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=247)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** osint (4), foca (2), whois (1), scada (1)
> **Analogies:** such as (6)
> **Code Keywords:** let (3), public (1), type, (1)
> **Definitions:** is called (2), is a  (2)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Investigating email
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=0)** - [Instructor] Email footprinting involves compiling information on a company or individual using details in the email and related metadata.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=10)** In this segment, we'll learn ways to extract information using an email header, and then do a lookup of a specific IP address.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=20)** First, let's talk about an email header, which can reveal a great deal of information such as the sender's IP address, originating mail server, and any servers the email may have hit on its journey.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=35)** There are several reasons why it's important to understand how an email header works.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=41)** One reason is that, by examining the header, you can make sure an organization isn't exposing the IP address to an internal mail server.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=52)** In addition, during remediation, you might need to educate the IT department on ways to prevent spam, phishing, and spoofing attacks, which can lead to a costly data breach.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=65)** Now let's talk about how email works.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=68)** Email uses Simple Mail Transfer Protocol, or SMTP, which transfers mail from one server to another.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=77)** Each email has two sender addresses, the envelope and the letterhead.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=83)** Let's break this down.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=85)** Here's an example of what you might see if you are able to examine the envelope.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=91)** The mail transfer agent sends an H-E-L-O or HELO to identify itself when connecting to another email server.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=100)** We then see the Mail From, which is the sending email address, and RCPT To, which is the destination.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=109)** The letterhead holds the message header and message body, and that's what we see when receiving an email.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=117)** Here is a key consideration when we examine an email.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=122)** The envelope address cannot be spoofed, as it's used to deliver mail.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=126)** However, the letterhead address can be spoofed.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=131)** To really understand where an email came from, we can investigate the email header, which tells the story of the journey, and includes all the stops and validation checks.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=143)** For example, here we see a small portion of the header.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=147)** And in this case, this is the Antispam Report section.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=151)** The CIP is the IP address.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=154)** The country is where the email originated.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=158)** And the spam filter verification means the message was marked as non-spam and sent to the intended recipients.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=167)** So how do we get the email header?
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=169)** Well, I'm at this webpage, Mail Exchange Toolbox, or MxToolbox.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=175)** And this section tells us how to get email headers for a variety of email applications.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=182)** So now I'd like to step through an example.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=185)** And I'm here at What's My IP.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=187)** And we're going to use the tool Trace Email.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=192)** And I'm going to scroll down, and I'm going to paste an email header.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=199)** And I'll say, Find Email Sender.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=202)** Now we'll scroll down.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=207)** And here we see the IP addresses of the different mail servers.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=212)** So down here, we see the source host and IP address.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=218)** And what I'm going to do is I'm going to copy that IP address.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=227)** Then we'll do an IP address lookup.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=230)** And I've pasted it there.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=231)** And we'll say, Get IP Details.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=235)** Now this will point to the location where the email originated, which in many cases is a mail server.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=243)** However, in this case, it points to a Tor node, which is used to conceal the true location of a sender.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=251)** And one more thing, to check any more information, I'll run this through Cisco Talos.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=259)** Talos Labs provides shared threat intelligence.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=263)** And here, once we put this in, we can see that the sender reputation is poor.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=268)** And we can do a lot more investigation on the IP address.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=272)** But as you can see, there is a lot of information in an email header.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=277)** Now let's test your knowledge.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=279)** Discuss ways to extract information from an email header, and then do a lookup of a specific IP address.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=287)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), from, (2), case, (2)
> **Env Vars:** smtp (1), helo (1), rcpt (1), cip (1)
> **CLI Commands:** make (1), find (1), node (1)
> **Definitions:** is a  (3)
> **UI Navigation:** scroll down (2)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Footprinting VoIP and VPNs
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=0)** - [Presenter] In addition to gathering company information, footprinting can include VoIP and VPN data.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=7)** In this segment, we'll outline ways to assess VoIP and VPN systems for open ports, services, and exposed servers.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=16)** First, let's talk about VoIP.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=19)** VoIP or IP telephony is a widely-used technology that enables voice communication and multimedia sessions over the internet.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=29)** VoIP soft phones are an essential part of many unified communication systems.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=35)** However, VoIP can be vulnerable to numerous security threats.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=39)** Some of the threats include vishing.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=43)** Vishing is VoIP phishing and is using the phone to get the user into surrendering sensitive information.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=51)** We can also see ID spoofing.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=54)** This is when a cyber criminal makes calls, but presents a different caller ID to the receiver.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=61)** Because VoIP uses software, the threat of malware is real.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=66)** A hacker can place malware on a system a month in advance and activate the payload once a user establishes a VoIP connection.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=76)** Traditional landlines and VoIP users are at risk of someone eavesdropping with the hopes of obtaining sensitive information.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=86)** Because of the potential for an attack, the team may need to include an assessment of the organization's VoIP system.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=93)** Some of the activity involved when footprinting VoIP includes evaluating VoIP servers and endpoints along with providers.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=102)** First, we'll talk about VoIP servers.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=106)** VoIP servers have a web interface and can be vulnerable to attacks, such as SQL injection and denial of service attacks.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=115)** If the organization hosts their own VoIP server, the team should conduct tests that include port scanning and banner grabbing to determine whether the server is responding and is vulnerable to an attack.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=129)** The team may also want to identify VoIP endpoints and user accounts, which can be used in attacks such as vishing, spoofing, or eavesdropping.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=140)** In addition, if the organization uses a third-party provider, they will need to involve the vendor when assessing the VoIP system prior to any testing.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=151)** Now, many times, a VoIP system will use VPN technology to protect the communications.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=158)** Because of this, the team may include an assessment of VPN technology in use for unprotected connections.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=166)** One of the assessments can include checking for vulnerable protocols, especially obsolete SSL/TLS versions.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=175)** If that is the case, the team can suggest the organization might want to upgrade to some of the newer VPN technologies such as OpenVPN and WireGuard.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=187)** Another consideration is making sure the VPN doesn't have any DNS data leaks.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=194)** DNS data leaks can expose your location and compromise privacy.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=200)** As shown in this graphic, a DNS data leak can occur if the VoIP traffic goes through an ISP's DNS server instead of going through the VPN tunnel.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=213)** The team should check for DNS leaks.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=216)** Using the keyword DNS leak, you'll see plenty of sites where you can run a quick test.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=222)** Now, let's test your knowledge.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=224)** Outline ways to assess VoIP and VPN systems for open ports, services, and expose servers.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=233)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (8), dns (6), sql (1), ssl (1), tls (1)
> **Code Keywords:** let (2), interface (1), this, (1), case, (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### Going to the dark web
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=0)** - [Instructor] Footprinting and reconnaissance can also include evaluating obscure information.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=6)** In this segment, we'll outline ways the team can investigate the deep and dark web.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=12)** The threat landscape is constantly evolving, and malicious actors continue to use more ways to conceal their identity and location.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=21)** Because of this, the team may include deep and dark web footprinting as part of their assessment.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=27)** First, let's talk about the different parts of the web as shown in this graphic.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=33)** The surface web includes content that is indexed by traditional search engines and viewed using a standard browser.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=41)** The deep web represents content that is not indexed by traditional search engines as it consists of primarily private and paywall sites.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=50)** And the dark web is a subset of the deep web and made up of encrypted and anonymous networks that conceal user identities and activities.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=60)** While footprinting the hidden parts of the web, the team might be able to identify login credentials that have been stolen and possibly sensitive information and trade secrets for sale.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=72)** Because of the hidden nature of the dark web, there are a few precautions you'll need to take.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=77)** You'll want to set up to search anonymously by using a sock puppet.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=82)** A sock puppet is a fictitious character used while researching, and you can read more about it here.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=90)** In addition, you should use a virtual machine and VPN as there can be dangerous malware variants that can easily infiltrate and infect your machine.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=101)** And because much of the activity in the deep and dark web is concealed, it can be difficult to search.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=107)** There are search engines that you can use, and I found a few on this webpage.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=113)** Now, websites on the dark web use the .onion top level domain instead of .com or .net.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=120)** These sites aren't accessible through regular browsers.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=124)** While searching the dark web, you'll need the Onion Router or Tor Browser, which will encrypt the communication and allow you to browse anonymously.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=135)** I'm here at Project Tor, where you can learn more and download the Tor Browser.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=141)** Now, keep in mind, when moving through the dark web, exercise caution and avoid any illegal activities or marketplaces.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=150)** Now let's test your knowledge.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=152)** Outline ways the team can investigate the deep and dark web.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=157)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (1), this, (1), private (1)
> **Prerequisites:** you'll need (2), set up (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1), caution (1)
> **Env Vars:** vpn (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Exploring other footprinting tools
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=0)** - [Narrator] While conducting an ethical hacking exercise, the team will use a variety of tools to help locate resources from various sources on the internet.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=10)** In this segment, we'll discuss ReconDog and BillCipher, two open source reconnaissance tools that have advanced searching and scraping capabilities.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=21)** Let's start with ReconDog.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=24)** ReconDog is used for gathering a variety of information on a target domain.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=30)** Because of its multifunctional nature, many feel it's like a Swiss Army knife as it automates the process of identifying potential entry points and vulnerabilities in a target system or network.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=44)** Some of ReconDog's key features include the ability to scrape emails from publicly accessible sources, such as who is records, websites, and forums.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=56)** It can grab banners to gain information about a system on a network.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=62)** It can identify sub-domains to grasp the full scope of a domain.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=69)** It can retrieve various DNS records and run a reverse IP lookup and it can conduct port scanning on a system to see what services are running.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=80)** Another multifunctional tool is BillCipher, which focuses on mining publicly available data.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=88)** BillCipher can complete many tasks.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=91)** It can gather publicly available email addresses, collect information about domains and their associated data, extract data from various social media platforms, and monitor for potential data breaches related to the target.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=108)** You can get both on GitHub and then run the software on Kali Linux.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=113)** Here's a graphic of ReconDog in Kali and here's a graphic of BillCipher in Kali.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=124)** Now let's test your knowledge.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=126)** Discuss how ReconDog and BillCipher can help locate resources from various sources on the internet.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=134)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** it's like (1), such as (1)
> **Env Vars:** dns (1)
> **Tools:** github (1)
> **Speakers:** - [narrator] (1)


### 6. 5. Footprinting Capstone

#### Conducting a forensic exercise
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=0)** - [Instructor] Part of an ethical hacking exercise can involve remediation and security training.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=7)** In this Capstone, you'll step through the process of investigating a suspicious email to identify clues and learn how to stop malicious email from reaching recipients.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=20)** Here's the scenario.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=21)** After completing the ethical hacking exercise, the team identified several areas where the client would benefit from remediation strategies and security training.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=33)** One area of concern was the potential for spam and phishing emails getting through to the clients.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=40)** Now, let's talk about Remediation and Training.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=44)** Remediation involves addressing and fixing any vulnerabilities that the team discovered.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=50)** And security training provides education and awareness on security related issues.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=57)** The team leader discussed the outcome with the stakeholders, and part of the remediation recommendations included training on the following.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=66)** Learn how to recognize suspicious emails.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=70)** Discover ways to identify where the email originated.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=74)** And understand how email providers detect possible spam and phishing email.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=81)** So you'll need to go to the Exercise File on the welcome screen and open the Challenge and Links document if you haven't already.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=90)** The exercise begins in Chapter 5, Footprint in Capstone.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=95)** You'll go through the Capstone and answer the questions, which are divided into three sections.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=101)** Examine an email to determine sections that appear legitimate and where you see suspicious content.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=109)** Dive into the email header, which can lend insight into the email's routing, origin, and metrics used to determine whether or not the email is possible spam.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=121)** And verify IP blocklists, which are used to identify IP addresses linked with suspicious or malicious activities.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=131)** The activity will help you understand ways to improve the security of an organization when dealing with threats that originate via email.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=141)** Although I provide the answers to each section, try to proceed through the questions on your own.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=148)** Your first task is to examine the email, good luck.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), open the (1)
> **Code Keywords:** let (1)
> **Exercise Files:** exercise file (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Examining an email
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=0)** - [Instructor] Training users on how to identify suspicious emails helps to improve the overall security of an organization.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=9)** In this segment, we'll examine an email to determine what sections appear legitimate and what areas look suspicious.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=17)** Take a look at the following image and tell me a couple of ways that this email looks legitimate.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=24)** What would make someone click on a link?
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=27)** Well, in the message, it has the correct email address and along the bottom there's a copyright notification.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=34)** Well, that seems official.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=36)** It looks like it came from my email provider, which is a company I know or trust.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=42)** And then there's a sense of urgency, but not too urgent, meaning one or more of your emails will be deactivated soon.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=51)** Okay, so we can see why someone might click on the link, but next, I wanted you to take a look at how this email looks suspicious.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=61)** Well, first it misspelled the word warning and it wanted me to click on a sketchy link, and I'll place my cursor on the link.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=71)** Here it shows us going to Firebase storage and then there's a firmer warning in the email with a greater sense of urgency in the message.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=81)** If the emails aren't verified before 48 hours any services connected to it will stop working.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=89)** You can avoid this happening for good by verifying your details below.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=94)** So next, I wanted you to go to this site, consumer.[ftc.gov](https://ftc.gov) and read the article.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=102)** So the question is, what are some signs that an email is a scam?
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=107)** And I'll scroll down.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=109)** Some signs that it is a scam is there's a generic greeting.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=114)** The account is on hold due to billing and there's an invitation to click on a link to update payment information.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=122)** What are four ways to protect against phishing attacks?
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=126)** You should use security software, update phone software automatically, use multifactor authentication, and back up your data.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=139)** And the last thing I wanted you to do is to visit these two sites and read the articles which share information about the prevalence of hackers using legitimate websites to hide malicious payloads.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=153)** And then answer the question, how would you use this information to protect your organization?
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=160)** Well, you should use security awareness training and use caution when clicking a link, even if it seems to come from a legitimate company, like Google or Amazon Web Services.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (1), scroll down (1)
> **Definitions:** is a  (3)
> **Warnings:** warning (2), caution (1)
> **CLI Commands:** make (1)
> **URLs:** [ftc.gov](https://ftc.gov) (1)
> **Speakers:** - [instructor] (1)

#### Diving into an email header
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=0)** - [Instructor] An email header tells a story about the journey the email took from sender to receiver.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=7)** In this segment, we'll investigate an email header and learn ways to prevent phishing and forgery.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=14)** So let's review the answers to this part of the capstone.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=18)** You are to go to MX Toolbox and upload the email header, and I pasted it and then said analyze header, and I'll open it in a new tab.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=29)** Once there, scroll down where you see [cpanel.net](https://cpanel.net) is on a blacklist.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=35)** And here we see that entry.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=38)** Click on the red X to learn more, and I clicked it and opened it in a new tab, and there you see that IP address is on two blacklists.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=49)** So what does it mean when an IP address is on a blocklist?
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=54)** Well, IP blacklisting or blocklisting occurs when an IP address is ignored by a web hosting company, and any mail you try to send is blocked and not forwarded.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=67)** Next, scroll down where you will see, "Sender Policy Framework failed," and here we see the entry that it failed for that IP address.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=77)** Now this is a test to verify that the IP address is included in the Sender Policy Framework.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=84)** In this case, the specified IP address is not included in the Sender Policy Framework record.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=92)** So let's talk about Sender Policy Framework and ways it can help prevent phishing and forgery.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=99)** Sender Policy Framework allows the owner of a domain to specify which mail servers are permitted to send mail on behalf of that domain.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=110)** It does this by publishing a specific record in DNS containing a list of authorized IP addresses.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=118)** Now, in addition to Sender Policy Framework, there are two other protocols that are used to prevent phishing and forgery, DomainKeys Identified Mail, or DKIM, which is a digital signature, and Domain-message Authentication, Reporting, and Conformance, or DMARC, which checks the address on the envelope and letterhead address.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=142)** So here's an example of a failed DMARC.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=146)** The envelope address does not match the letterhead address, and that will fail your DMARC.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=154)** Now this doesn't always mean it's a spoofed email, but it's a pretty good indication.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=160)** If there is an error, the administrator can adjust the DMARC settings.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=165)** Now, when we compare all three, we see that DMARC will rely on either Sender Policy Framework or DKIM to ensure authentication.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=175)** Sender Policy Framework and DKIM can be used as standalone methods, but used together, they help prevent phishing emails and forgery by allowing administrators to validate inbound email.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=190)** And the last concept deals with pointer records.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=193)** Now, another key component of implementing a secure email delivery and spam protection is to ensure that you've properly configured your DNS server.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=204)** Now, this is so that other mail servers can send mail to your users.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=209)** So the question is how are pointer records used as another method for spam filters to determine the legitimacy of email?
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=219)** Well, pointer records are used in DNS to map an IP address back to a host name.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=226)** They play a role in email authentication by allowing received email servers to perform a reverse DNS lookup.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=235)** And finally, you were to review what you've learned by completing a matching exercise, and here are the results.

> [!info]- Semantic Content
>
> **Env Vars:** dmarc (5), dns (4), dkim (3)
> **Code Keywords:** let (2), case, (1), finally, (1)
> **UI Navigation:** scroll down (2), go to (1), click on (1)
> **Definitions:** is a  (2), is an  (1)
> **URLs:** [cpanel.net](https://cpanel.net) (1)
> **Speakers:** - [instructor] (1)

#### Verifying IP blocklists
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=0)** - [Lisa] IP blocklisting occurs when an IP address is ignored or blocked.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=6)** In this segment, we'll discover resources that can identify suspicious IP addresses.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=12)** Here's the scenario.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=14)** During the course of your day, you received an intrusion prevention system alert.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=19)** These three IP addresses have been blocked because of reputation.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=24)** Your job is to investigate further.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=27)** It turns out that a suspicious email has gotten through the firewall.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=32)** You immediately delete the email to prevent it from going any further.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=37)** We're going to investigate those three IP addresses, but then we're going to drill down on that IP address.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=44)** So first, we'll go to Talos Intelligence and see what we can find out about the IP addresses.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=50)** I put in the first one, and then we'll have it run its search.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=54)** Then down below, we see a lot of information, location, owner details, and here, we see reputation details.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=64)** In this case, the sender IP reputation is poor.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=69)** Down below, it is listed on a block list, [spamhaus.org](https://spamhaus.org).
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=74)** Now we'll scroll down, and here, we can see a list of top IP addresses used to send emails in that IP address range, and all of them have a poor reputation.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=88)** Now the next IP address I ran, and again, similar information, we can see the location, in this case is Japan, owner details, and here, we see the sender IP reputation is poor and the web reputation is untrusted.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=104)** In this case, that IP address is listed on two block lists, and the related IP addresses used to send email all have a poor reputation.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=116)** And the last IP address, we'll scroll down, the location is Japan, and the owner details here we see.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=125)** Now in reference to the location, geolocation is nice to know because some of your filters will filter out specific countries or geolocation IP addresses, so it's nice to know where did that IP address originate from.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=140)** Over here, the reputation details show the sender IP reputation is poor, along with an untrusted web reputation.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=149)** In this case, that IP address is listed on three block lists, and all of the related IP addresses have a poor reputation.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=161)** So now we were to go to Project Honey Pot.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=163)** In this case, I went to the IP Data tab, and then I asked to Lookup IP, and then I entered that IP address, 45.117.142.42, and then I'll select Search.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=180)** Now, here again, it shows the geographic location as Japan, but the information says that, "The Project Honey Pot system has detected behavior from the IP address consistent with that of a mail server and a dictionary attacker."
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=195)** So this shows a poor reputation.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=199)** We'll go to one more.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=200)** In this case, we're at Spamhaus Project, and then I'll look up that IP address.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=207)** In this case, we see that that IP address has four listings, so not a good reputation.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=214)** Now the last question is, what can we learn from this information?
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=219)** Well, knowing this information will help us tune our security devices to prevent malicious email from getting into the organization.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (6), delete (1), from. (1)
> **UI Navigation:** go to (3), scroll down (2)
> **CLI Commands:** find (1)
> **URLs:** [spamhaus.org](https://spamhaus.org) (1)
> **Versions:** 45.117.142 (1)
> **Speakers:** - [lisa] (1)


### 7. 6. Wrapping up the Recon

#### Guarding social media
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=0)** - [Instructor] Social media has become a part of our daily lives as it connects people globally and enables businesses to reach their target audiences more effectively.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=11)** In this segment we'll learn ways to protect social media accounts to prevent cyber attacks and data loss.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=19)** The history of social media can be traced back to one of the first sites called Six Degrees, created in 1997.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=28)** Today, using social media can be a tool in gathering information.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=33)** Let's talk about some of the dangers of using social media.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=37)** Most social networking sites do not have a way of ensuring authentication.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=43)** It's a web of trust.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=44)** When we're a friend or connection request is made it's up to the recipient to accept.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=50)** Although in some cases an introduction can be made via a third party many times people simply accept the invitation.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=59)** Another key area of concern is the risk to privacy.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=63)** Innocent mistakes can lead to data exposure.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=68)** Now, sharing personal or business information on social media may inadvertently provide cyber criminals with the necessary details to conduct targeted phishing attacks.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=79)** In addition, posting about company activities and sharing proprietary information or trade secrets can lead to intellectual property theft or unauthorized use of your content.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=92)** You should be cautious when sharing information about where an individual is traveling or what events they've attended.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=100)** For example, posting a photo at a company event while wearing a company badge with a QR code.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=107)** If the image is clear enough a malicious actor can potentially grab the data from the QR code.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=115)** There's also possible reputation damage.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=118)** Posting inappropriate content or sharing controversial opinions on social media can harm your personal or business reputation.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=128)** Future employers, clients or partners might scrutinize your online presence before engaging with you.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=135)** To mitigate the risk of exposure consider the following precautions.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=140)** One area is to focus in on with all employees, is training an appropriate use of social networking To minimize a company's digital footprint employee education is necessary to avoid becoming victims of social engineering attacks as employees can be tricked into giving out information.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=162)** For example, here is an ex feed between Mary and Sarah.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=166)** Sarah, I see you're from Bend, Oregon.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=169)** Was your mother a Sanchez?
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=172)** No. Mom was an Abrams.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=175)** Oh, okay.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=176)** I thought I knew her family.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=179)** Now Mary has Sarah's mother's maiden name which is commonly used for security purposes.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=187)** All internet profiles should use maximum privacy settings.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=192)** That way if someone were to do a keyword search on the organization or individual in an organization they won't come up on a social networking site.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=203)** In addition, personal information such as name, employee, phone, pictures, and resume can be lifted and an imitation site with your information can be built.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=215)** Don't post sensitive business information or trade secrets on public profiles.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=222)** Be cautious about accepting friend or connection requests from unknown individuals or suspicious accounts.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=229)** And each company should do a review of social media for employees at least two times in a five-year period.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=237)** Now let's test your knowledge.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=240)** Outline ways to protect social media accounts to prevent cyber attacks and data loss.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=247)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), public (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Writing footprinting reports
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=0)** - [Instructor] Footprinting reports provide the documentation on the information the team has found on an organization.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=7)** In this segment, we'll cover reporting guidelines and mitigation techniques, along with a discussion on the security implications of sharing information online.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=18)** Every day, more and more information is added to data repositories and publicly accessible websites.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=26)** A footprint and reconnaissance exercise is conducted to find out information about an organization available on the internet and other sources.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=36)** The results should be recorded to assist the security analyst in preventing exposure of any company data.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=44)** Footprinting is essential for every business, and should be done in some form on a regular basis.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=50)** Once the exercise is complete, you'll want to carefully document the results of your findings.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=57)** Results include competitive intelligence, how much information was found, and what did it reveal.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=65)** Did you do any Google hacking?
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=67)** Were you able to see hidden data or backdoor into a site?
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=71)** As far as websites, were you able to find any company directories or email lists?
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=77)** And for email, how much information was disclosed in the header?
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=82)** On social media sites, did employees disclose or allude to trade secrets or proprietary information?
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=90)** Were there any social engineering attempts?
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=92)** What was done and how successful were they?
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=96)** What tools, such as AnyWho, Spokeo, or Yancy were used, and what type of information was discovered?
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=104)** In DNS records, what information was found about the location and type of servers?
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=110)** By using the tools and techniques, were you able to build an outline of the targets network?
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=117)** Knowing this information, how much farther could a potential attacker be able to accomplish?
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=124)** Now, after you obtain the results, take care in discussing the findings.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=129)** Many times managers are shocked to discover how much publicly available data was found.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=136)** Reassure them that the information will be held in confidence, and then once complete, the next step is to mitigate any data leaks.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=146)** Now, if there is sensitive data that is found on the internet, a company can have the results removed from at least Google search engine.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=155)** Here we can take a look at Google's content removal page, and you can read more of this information about the steps you need to take to remove it from the searches and also the cache.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=167)** But keep in mind, however, not all scrub and removal efforts are successful, so you should periodically check back to make sure that the information isn't still exposed.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=180)** Now efforts to remove content from the search engines is a reactive approach.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=186)** A better approach is to be proactive.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=189)** Now, user education is essential, and managers should discuss the security implications of having a social networking account compromised.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=199)** Now, most are free applications, so it's important that we take steps to protect the passwords, and also instruct employees to think before posting.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=210)** I'm at Facebook's information site where you can learn more about Facebook's privacy policy and ways to lock down your site.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=218)** Now, let's test your knowledge.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=221)** Outline reporting guidelines and mitigation techniques along with a discussion on the security implications of sharing information online.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=231)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** let (1)
> **Env Vars:** dns (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Countering footprinting
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=0)** - [Instructor] During footprinting and reconnaissance, we know that there are many resources online to view someone's digital footprint.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=7)** In this segment, you'll learn some steps you can take to be less vulnerable to exposure.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=13)** Today, it's very difficult not to be seen.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=17)** In fact, traces of the internet stay online for many, many years.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=22)** Let's take a look at the Wayback Machine, which is an internet archive.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=27)** To find legacy information, you'll see that it will have a timeline of when they first started archiving the site.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=35)** For this example, we'll use a generic site, something like [disney.com](https://disney.com) and see what they've archived.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=41)** I put [disney.com](https://disney.com) in the search, which came up with a list of archived information.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=50)** Now, we're going to go way back to 1996, and I'll scroll down, and I'll select this one here on December 27th, and I'll take the first snapshot, which then opened this page.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=70)** Now, once there, you can search through that archived information and you might find something of value, for example, an email address.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=78)** So as we can see, a digital footprint can remain for many, many years.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=84)** Footprinting can be very telling and expose information about an individual or organization.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=90)** Because of the sheer volume of readily available data on the internet, minimizing exposure can be a challenge.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=98)** One key step is to conduct a footprinting exercise to see what information is available.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=104)** Once you discover any vulnerabilities, enact measures and processes to minimize or eliminate risk.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=112)** So now, let's talk about what we can do to minimize risk of exposure.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=117)** One way to help ensure your information doesn't leak out onto the web is don't discuss confidential information online.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=126)** In general, don't discuss company business online and that includes good and bad information.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=134)** Administrators should use a non-traditional email address so I can't recreate your email using a pattern.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=142)** For example, instead of Mike Peterson using MPeterson, use an initial-based identifier instead.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=150)** Use separate email addresses for business and entertainment.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=154)** Business email should be used only for business and nothing else.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=160)** Create separate accounts for interactive sites such as online games, and blogs, and forums.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=166)** Use unique usernames for different accounts using the same theory.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=172)** Many of us are in the habit of reusing the same login for multiple accounts.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=177)** An individual's bank account username should be uniquely different from the company's login or any other site that is public.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=186)** That way, it will be difficult to cross-reference across multiple logins.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=192)** Instruct employees not to make enemies online.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=195)** Many think it's anonymous online and no one will seek revenge for inappropriate comments or mean-spirited actions.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=203)** Don't give someone a reason to cyberstalk you.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=207)** A smartphone has a location service built in that could provide information as to where the photo was taken.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=214)** If an employee insists on posting images, disable the geotagging feature on the phone.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=221)** Some steps you can take to make your network less vulnerable include the following, maintain patch and configuration management on all systems, monitor for scanning activity and specific footprinting patterns, configure devices to reject any footprinting request, shut down all unnecessary services, all services and devices should only respond to authorized devices by using strong authentication methods, keep access control lists up to date and segment the network to prevent reconnaissance on the private network, and don't overlook physical security, make sure you properly dispose of all printed information.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=265)** Now, let's test your knowledge.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=268)** List some steps you can take to be less vulnerable to exposure.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=273)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), else. (1), public (1), private (1)
> **CLI Commands:** make (3), find (2)
> **Analogies:** for example (2), such as (1)
> **URLs:** [disney.com](https://disney.com) (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=0)** - [Instructor] Thank you for watching.
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=2)** In this course, we learned how to use high and low tech methods to scout our target.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=8)** We began by uncovering information using competitive intelligence, Google hacking, email, and website footprinting.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=17)** We then unleashed the power of open-source intelligence tools and outlined how DNS along with utilities such as pinging, tracert, and dig can help us in our search.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=30)** We then finished with best-practice footprinting countermeasures, and reporting.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=36)** If you're interested in learning more, please check out the library where new courses are added every day.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=44)** If you'd like to learn more about packet analysis, please check out my Wireshark series, "Improve Your Wireshark Skills."
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=53)** Any course in the Ethical Hacking series will be well worth your time and you might want to see what my colleague, Malcolm Shore, has for you on his homepage.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=64)** Keep learning.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=65)** I hope to see you again soon.

> [!info]- Semantic Content
>
> **Env Vars:** dns (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking Introduction To Ethical Hacking]] | **2 of 19** | [[Ethical Hacking- Scanning Networks]] →

## Appears In

- [[Become an Ethical Hacker]]

## Related Courses

_Courses sharing skills:_

- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Stealth Penetration Testing with Advanced Enumeration]] — Ethical Hacking
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Ethical Hacking
- [[Ethical Hacking- SQL Injection]] — Ethical Hacking
- [[Ethical Hacking- Cloud Computing]] — Ethical Hacking

---

[↑ Back to top](#)