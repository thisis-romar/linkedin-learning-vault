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
  - '[Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)'
prev_courses:
  - '[Ethical Hacking Introduction To Ethical Hacking](Ethical%20Hacking%20Introduction%20To%20Ethical%20Hacking.md)'
next_courses:
  - '[Ethical Hacking- Scanning Networks](Ethical%20Hacking-%20Scanning%20Networks.md)'
path_nav: '[{"path":"Become an Ethical Hacker","position":2,"total":19,"prev":"Ethical Hacking Introduction To Ethical Hacking","next":"Ethical Hacking- Scanning Networks"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Footprinting%20and%20Reconnaissance.md)

![Ethical Hacking: Footprinting and Reconnaissance](https://media.licdn.com/dms/image/v2/D4E0DAQH2SBvz5g8pzA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697750217555?e=2147483647&amp;v=beta&amp;t=g9YE6XMzM_82uyZcACWBR0Sl2NNNFqj-aIAbqmLIupI)

# Ethical Hacking: Footprinting and Reconnaissance

> Ethical hackers use their knowledge for good: to test if an organization's network is vulnerable to outside attacks. But where do they start? With footprinting and reconnaissance—the process of gathering information about computers and the people to which they belong. In this course, Lisa Bock introduces the concepts, tools, and techniques behind footprinting: finding related websites, determining

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528) | 1h 55m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Scouting the target](#scouting-the-target)
  - [What you should know](#what-you-should-know)
  - [Hacking ethically](#hacking-ethically)
- [**1. Uncovering Information**](#1-uncovering-information) (7 videos)
  - [Footprinting and reconnaissance](#footprinting-and-reconnaissance)
  - [Using competitive intelligence](#using-competitive-intelligence)
  - [Investigating business sites](#investigating-business-sites)
  - [Searching and Google hacking](#searching-and-google-hacking)
  - [Employing social engineering](#employing-social-engineering)
  - [Gathering data on people](#gathering-data-on-people)
  - [Tracking online reputation](#tracking-online-reputation)
- [**2. Using Email and Websites**](#2-using-email-and-websites) (6 videos)
  - [Harvesting email addresses](#harvesting-email-addresses)
  - [Examining websites](#examining-websites)
  - [Scraping websites](#scraping-websites)
  - [Challenge: Mirroring a website](#challenge-mirroring-a-website)
  - [Solution: Mirroring a website](#solution-mirroring-a-website)
  - [Monitoring websites](#monitoring-websites)
- [**3. Searching the Network**](#3-searching-the-network) (5 videos)
  - [Footprinting using DNS](#footprinting-using-dns)
  - [Examining a zone transfer](#examining-a-zone-transfer)
  - [Generating domain names](#generating-domain-names)
  - [Determining the path](#determining-the-path)
  - [Using nslookup and DIG](#using-nslookup-and-dig)
- [**4. Discovering Reconnaissance Tools**](#4-discovering-reconnaissance-tools) (5 videos)
  - [Using OSINT tools](#using-osint-tools)
  - [Investigating email](#investigating-email)
  - [Footprinting VoIP and VPNs](#footprinting-voip-and-vpns)
  - [Going to the dark web](#going-to-the-dark-web)
  - [Exploring other footprinting tools](#exploring-other-footprinting-tools)
- [**5. Footprinting Capstone**](#5-footprinting-capstone) (4 videos)
  - [Conducting a forensic exercise](#conducting-a-forensic-exercise)
  - [Examining an email](#examining-an-email)
  - [Diving into an email header](#diving-into-an-email-header)
  - [Verifying IP blocklists](#verifying-ip-blocklists)
- [**6. Wrapping up the Recon**](#6-wrapping-up-the-recon) (4 videos)
  - [Guarding social media](#guarding-social-media)
  - [Writing footprinting reports](#writing-footprinting-reports)
  - [Countering footprinting](#countering-footprinting)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Scouting the target](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scouting-the-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scouting-the-target?u=76281980&t=0)** - [Lisa] Kick-starting the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) process begins with a laser-focused footprinting and reconnaissance exercise that will uncover everything we need to know about the target. In this course, I'll cover how we can use high and low-tech methods to discover details about a system, network, or organization. Hello, my name is Lisa Bock, and I'm a security ambassador. This course is part of the Ethical Hacking Series. Are you ready to begin this journey? Then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (2)
> **Speakers:** - [lisa] (1)

#### [What you should know](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is a basic to intermediate course intended for anyone with an interest in learning more about [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md). This course is part of the Ethical Hacking Series. I'll cover several topics, but I have provided a file for you so that you can follow along. Go to the exercise file link on the welcome screen where you will find a Challenges and Links document. In the document, I have included the links to the resources that I reference throughout the course. Additionally, during each segment, I will identify a challenge using the following icon, along with a question from the video. Use the document to write out responses to challenges that I cover throughout the course. I am super excited to bring you this course, so sharpen your pencil, and let's start learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hacking ethically](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/hacking-ethically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/hacking-ethically?u=76281980&t=0)** - [Instructor] The goal of the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) series is to help system administrators understand how to better protect the assets they manage. I'll focus on the concepts of ethical hacking in order to explain why it's essential in any organization's overall security framework. The tests and procedures I explore should only be executed on your own system or a system that you are charged with protecting. If ownership and responsibility lie with another party, be sure to get clear written instructions with explicit permission to conduct ethical hacking activities. Do not investigate individuals, websites, servers, or conduct any illegal activities on any system you do not have permission to analyze.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (3)
> **Speakers:** - [instructor] (1)


### 1. Uncovering Information

[↑ Back to Table of Contents](#table-of-contents)

#### [Footprinting and reconnaissance](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=0)** - [Instructor] The first phase in [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) is footprinting and reconnaissance, which involves obtaining as much information about the target as possible. In this segment, we'll learn what information we can gather along with what questions to ask before beginning the process. Before launching any attacks or using advanced tools, the team must complete a thorough information gathering exercise. This phase is all about learning as much as possible about the target and infrastructure, including remote access capabilities, open ports and services, and what security methods are in place. So what is happening during footprinting and reconnaissance? Well, imagine you are on a mission where information is found everywhere. On the public side, we want to find information on the target using resources found on the internet, such as websites, directories, job sites, and social media. On the logical side, we use network mapping to give us an accurate picture of our target, such as network design, running services, and operating systems. In addition, we also want to see what network defenses are in place that would prevent us from discovering information. The key is to first narrow the scope to help identify what we need to know before we begin the ethical hacking exercise. Now, this is a significant step in the process in
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=95)** that if there isn't a clearly defined target, it's more of a dumpster diving attempt, searching until something interesting is found. Now, some of the questions before beginning will include the following. Who is the target? Is it a company, hospital, government agency? What is the target? Gather data on the target, such as bank account information and social media accounts. Where is the target? Start with the IP address and domain name information along with the physical address. When should we attack? Now when the stakes are high? Or possibly late at night to avoid detection? Do you have the persistence to test at odd hours? And how should we attack? Well, the more information collected during a well conducted reconnaissance exercise will help determine just how we will launch an attack. During the information gathering phase, it's essential to record your findings using a template such as this one where you can document corporate information, infrastructure assets, and [Financial Data](../../Skills/Software%20Development/Financial%20Data.md). This will help you create a complete picture of your target and develop the best method of attack. One important consideration when footprinting the target is to proceed with caution. Even though the ethical hacking team has obtained
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-and-reconnaissance?u=76281980&t=189)** appropriate permission to conduct the assessment, there may be a point where the reconnaissance should cease due to gaping vulnerabilities. At that point, the vulnerabilities should be mitigated before any attempts to gain access to protected data or sensitive systems. Now, let's test your knowledge. Outline what information we can gather on the target during footprinting, along with what questions to ask before beginning the process. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (3), [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) (1)
> **Analogies:** such as (2), picture (2), imagine (1)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Using competitive intelligence](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=0)** - [Instructor] Not all footprinting and reconnaissance involves highly technical skills or tools. Many times, a preliminary evaluation of a target can be achieved using several low-tech methods. One example is using competitive intelligence, which can lend insight on many aspects of an organization. In this segment, we'll describe how the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) team can use competitive intelligence to gather information about a company. Competitive intelligence gathers competitor information on its [products](../../Skills/Software%20Development/Microsoft%20Products.md), services, and customers so a company can face business challenges with more direction. Competitive intelligence uses standard search methods and is completely legal. The ethical hacking team can use competitive intelligence to get a better picture of the target. Facts about a target can be found using publicly available sources. Those sources include financial reports, press releases, news articles, trade journals, patents, and trademarks. While there are plenty of resources, one area we can check are job postings on a company. The team can check job posting sites such as [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), Monster, and CareerBuilder to see if they're hiring.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=93)** One site that can help us get a better understanding of the technology used in a target organization is Dice. Dice is a site that focuses on technology professionals. For example, let's take a look at what we might find in a job description. Here, we see a job posting for an IT systems application administrator. Following that, it lists the company location and some of the job responsibilities. So what can we learn from this job posting? Well, we can see that the organization is using Server 2016 for their network operating system. And in addition, they list various applications. Applications include Centricity, which is health care software. Kronos is workforce management. And PeopleSoft provides [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) and general business processes. So let's drill down a little further. If we go in and search for keyword PeopleSoft vulnerabilities, it will take us to this list. And we'll take a look at this one, which will take me to the CVE details on Oracle. Here we see a list of security vulnerabilities, and if the company fails to update and patch their systems, this would be a starting point if I wanted to launch an attack.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-competitive-intelligence?u=76281980&t=188)** Now let's test your knowledge. Describe ways the team can use competitive intelligence to gather information about a company. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1)
> **Analogies:** picture (1), such as (1), for example (1)
> **CLI Commands:** find (1)
> **Env Vars:** cve (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Investigating business sites](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=0)** - [Instructor] While Footprinting, the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) team can gather valuable company information from publicly available sites and repositories. In this segment, we'll discover how to use various sites such as [GitHub](../../Skills/Software%20Development/GitHub.md), Dun and Bradstreet, along with [Google](../../Glossary/Service/Google.md) Earth to learn more about the target. Let's start with code repositories. Code repositories are where developers collaborate and share code when developing software. Some examples include GitHub, [Bitbucket](../../Skills/Software%20Development/Bitbucket.md), and Apache Subversion. If the company does have a public facing repository, the team might be able to find something of value. A company may have posted an exposed source code or other information, either accidentally, or by a malicious insider. So it's worth investigating. Some of the information you might find includes source code of various projects, the versions in use, and possibly a discussion on security vulnerabilities or other issues they may be facing. Another option is to search for detailed company information. In most cases, you can find a wide range of information using free and per pay sites. Let's talk about a few sites where we can search. If the target is publicly traded, you can check the Security and Exchange Commissions EDGAR database. Now, this is a public searchable database
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=97)** which provides detailed company information. The site is very transparent. In fact, this page will show us how to search the database. Now, one document that you can find in EDGAR that might be of value is a Form 10-K or annual report, which every public company must provide. This forum offers a thorough picture of a company's business, the location, who is top level management, the potential risks, and [Financial Data](../../Skills/Software%20Development/Financial%20Data.md). In addition, you might find details about possible mergers and acquisitions that will be beneficial when starting to research domain names. In addition to EDGAR, you can check other financial websites such as Dun and Bradstreet. Now this is a per paid database of commercial data on credit history and overall health. In addition, we can go to Google Finance. Now let's see how we can use this. We'll all put in a company, "ge", and we'll select this one. And this actually just gives us snapshot of stock prices over time, and it also does show some other information. If I scroll down here, I can see that I can go to Wikipedia to find out more information. Now, I'll go to Wikipedia and I'll scroll down and here we see the GE building in New York. And I'm just going to select that address and copy it.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=192)** And now we'll go to Google Earth, and now I'm going to search for that address.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-business-sites?u=76281980&t=204)** Now, why is the company's location important? Well, some of the most significant data breaches have occurred by someone simply driving up to a building and hacking into a wireless network. So as you can see, the ethical hacking team can gather company information from publicly available business sites and is a great non-technical approach to footprinting and reconnaissance. Now, let's test your knowledge. Describe how using various sites such as GitHub, EDGAR, Dun and Bradstreet, and Google Earth can help uncover valuable company information. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (2), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1), [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) (1)
> **CLI Commands:** find (6), apache (1)
> **UI Navigation:** go to (4), scroll down (2)
> **Env Vars:** edgar (4)
> **Tools:** github (3), bitbucket (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (3), picture (1)
> **Exercise Files:** source code (2)

#### [Searching and Google hacking](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=0)** - [Instructor] Many of us use search engines to locate information. In this segment, you'll discover how [Google](../../Glossary/Service/Google.md) hacking can help uncover vulnerable applications, expose directories, and open servers and ports. Formalized search engines began on the Internet as early as 1990 with a primitive tool called Archie. As we see in this graphic, the search, although primitive, was pretty good for the time period. The evolution of the worldwide web soon brought about advanced tools for locating information. Search engines, such as Google, Bing, and Yahoo gather information. Let's talk about how this works. Search engines have to get the data before compiling the indexes. They accomplish this by using web spiders that crawl through webpages, gathering and indexing information. Google's web crawling bots are called Google Bots, which detect new and updated pages to be stored in the robust Google indexes. Google has many additional capabilities, including translating documents and performing news and image searches. We can also use an operator and keyword to narrow our search, for example, define or file type. Let's see how this works.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=94)** In this case, I'd like a definition for vulnerability. So I entered define, with a colon, vulnerability, and there we see a definition of vulnerability. Let's try another one. In this case, I would like a list of documents ending with a PDF, with a keyword networking, and if we scroll down, we'll see plenty of documents with a keyword networking. Now, if you'd like to know more about how a Google search works, you can read this document. For advanced searching, you can use the Advanced Search page. Now once here, you can use operators in the search form along with key terms to narrow your scope. Now, using Google with advanced operators to locate hidden information is called Google hacking, and this should be part of an [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) exercise, as it is a very powerful tool. The Google hacking database can be found here at the Exploit Database website. Once there, you can drill down to the extensive and up-to-date database and see a list of useful topics, such as files containing juicy information, or files containing passwords. Now let's go through some examples
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=187)** on how to use advanced operators and keywords. Now, keep in mind, during footprinting, you would most likely reference the target, but for fun, I thought we would do some searches that might surprise you. In this example, I've asked for in title, index of [SCADA](../../Glossary/Concept/SCADA.md). Now, once the results are presented to you, you can search through, and you might find something like this, which is a SCADA system. This search will be able to access unprotected cameras, and after searching through those results, you might find something like this. In the last search, I'll show you how you can find an index of MP3. And once you run it, I found this list here. And this is from Project Gutenberg, which contains thousands of free books to enjoy. I selected this one right here, and once there, you can play it.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/searching-and-google-hacking?u=76281980&t=259)** Now let's test your knowledge. Describe how using Google hacking while footprinting can help uncover vulnerable applications, exposed files, and directories, and open servers and ports. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (11), [SCADA](../../Glossary/Concept/SCADA.md) (2), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **Env Vars:** scada (2), pdf (1), mp3 (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (2), for example (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** keep in mind (1)

#### [Employing social engineering](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=0)** - [Narrator] Social engineering leverages an individual's trust to obtain information. In this segment, we'll explore some techniques the team can use during footprinting to gather data. Social engineering is influencing someone into giving up information, which can result in identity theft and data exposure, and is accomplished in many ways. Let's talk about a few techniques. Dumpster diving is when someone looks into the trash, outside or inside an organization, for something that might reveal useful information. When dumpster diving, the team might find exposed data, such as a list of names and social security numbers, intellectual property, or even hard drives holding digital data. Shoulder surfing is when someone walks up behind someone to watch as they enter information on a device or keyboard. For example, watching someone at the ATM machine as they're entering a PIN or password. Some even use cameras and record the victim as they type. Eavesdropping is when conversations are recorded and can happen just about anywhere, such as on a plane, corporate waiting room, restaurant, or company function. Without someone's knowledge, they may give up sensitive information. [Phishing](../../Skills/Software%20Development/Phishing.md) is an attempt to get a user
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/employing-social-engineering?u=76281980&t=94)** to reveal personal or financial information using email or instant messaging to deliver the message. Spear phishing targets specific individuals and generally has better results as it targets individuals who are more likely to respond. Pharming is like phishing, however, instead of luring a user to the website using bait in the form of a phony email or link, pharming redirects victims to a bogus site, which is commonly a bank or [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) site, where once in, the victim may divulge confidential information. Impersonation is pretending to be someone else. In a building, the perpetrator may actually dress up like an authorized individual to fix a problem. They may impersonate [Technical Support](../../Skills/Network%20and%20System%20Administration/Technical%20Support.md) or even a utility worker. Today, social engineering is a major threat to the security of an organization, as the information they obtain can be used with other hacking techniques to gain access to network resources. Now let's test your knowledge. Discuss social engineering techniques the team can use during footprinting to obtain information. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (3), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Technical Support](../../Skills/Network%20and%20System%20Administration/Technical%20Support.md) (1)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** atm (1), pin (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Gathering data on people](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=0)** - [Narrator] Searching for information while footprinting using free and paid online people search services can provide a great deal of insight on your target. In this segment we'll review how sites such as AnyWho, Spokeo, and ZabaSearch search can help the team compile a more accurate picture of the target. While searching online public records there are several apps that can provide more insight on your target. Once you put in a name, the app will present you with all names like what you entered. The next step is to narrow your scope with more specific filters such as state or age. What I'd like to do is show you a few examples of what you might see when searching online. Let's start with AnyWho. AnyWho provides a detailed search on people and organizations and is completely anonymous. AnyWho has access to a wide variety of information sources in both the public and private domain. Data found in the public domain are records maintained by local, state, and federal government, and includes property title and liens, birth and death certificates, business records, security and exchange commission filings, as well as court records. In addition, they have data not maintained by the government as well, such as phone numbers,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=94)** licensing, press releases, and newspaper articles. Another site is Spokeo, which is a people search that uses public records, white page listings, and social networking sites to find information. Now, if I type Bill Gates and then search now, it will take a few minutes to run, and then it will present you with the information. Now once there, you'll want to narrow your scope, and over here you can see browsing locations, and there you can refine it some more so you can find more information on your target. ZabaSearch is a free and public information search engine that provides basic information, such as name, address, and partial phone numbers. Now, if you want more information, you will have to pay for it. Now, Yasni provides standard information such as telephone and addresses, along with a variety of other information that includes [Facebook](../../Glossary/Service/Facebook.md) and [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) profiles, where they may have worked, education, death notices, books published, and YouTube.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/gathering-data-on-people?u=76281980&t=171)** And the last site that might help you when searching for a list of company employees is SignalHire. This site has approximately 10 million companies and their employees. Now keep in mind that this is a list that they maintain and curate and it might not be completely accurate, but it could be a starting point when you want to launch a social engineering or [Phishing](../../Skills/Software%20Development/Phishing.md) attack. Now, as we can see there's quite a bit of information available. However, use caution as the data is not always accurate. And because of this, I'd recommend using several sites to cross-reference to ensure that you're getting a complete picture with the latest information available. Now, let's test your knowledge. Review how sites such as AnyWho, Spokeo, and ZabaSearch can help the team compile a more accurate picture of the target. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Facebook](../../Glossary/Service/Facebook.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **Analogies:** such as (6), picture (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Warnings:** keep in mind (1), caution (1)
> **Speakers:** - [narrator] (1)

#### [Tracking online reputation](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=0)** - [Narrator] When footprinting either an individual organization or company, it's essential to track the online reputation of the target. In this segment, we'll learn how to assess online reputation by using image and video search engines, social media, and [Google](../../Glossary/Service/Google.md) alerts. With so much of our lives online, it goes without saying that part of what we represent might be visible. The posts, videos, and images will shape our reputation. No single source is going to provide a complete picture of a company's reputation. Because of this, you'll want to check multiple sources to get a well-rounded view of the target. Let's talk about what's available when searching online. Sometimes, it's best just to start with a simple search for a blog or social media site that references the target. I'll step through what I might find while searching. For example, while using the keyword "Landon Hotel" in the search, I might stumble on a social media site dedicated to Landon Hotel employees. In this case, it's a public site that exposed some issues, such as no work-life balance, managers are incompetent, poor training programs, and friends are fired for trivial reasons. This is negative press, which can lead to a damaged reputation.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=95)** In addition, some of the Landon Hotel employees might be disgruntled, which can lead to an insider attack. Now, along with searching for documents and also blog sites, we can also check FTP sites. Now, here we see a list of search engines for FTP sites and I selected this one. Now, once there, I put Gutenberg in the search with all the words and we'll say search. And there, we have a list of all FTP directories for Gutenberg. We can also use video search engines and here's a list of some of the search engines available.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=146)** Another thing we can do is search for images. For this, I'll go to Google and search, "Landon Hotel." Then once there, I'll select images. Now, once done, you'll want to look through the results and make sure that there isn't a compromised image of the target or organization that doesn't reflect the best reputation. We can also check advanced filters. Now, once there, we can search deeper, using a variety of keywords. Sometimes, you might want to try reverse images and for this, there's a few tools that are available. You can use TinEye and here, you would either upload or paste an image or enter an image URL. I tried PimEyes and here, it's the same concept that once you put in your image, it will present you with a list. So I put in one of my images and it came up with a variety of sites that had my image. Now, in this case, it will present you with the list, if you purchase the results. Now, at the very least, you can try Google alerts. Now, this is a free tool that allows you to monitor the web for interesting new content related to specific keywords or phrases. You'll need to sign into your Google account and then enter your search term. In the create an alert box, you'll enter the words or phrases that you want to monitor.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/tracking-online-reputation?u=76281980&t=241)** Then once you enter that, it'll show results, which then allows you to customize your alert. Tracking online reputation is another element when scouting the target. You should document the results and if you do see anything that's unflattering, you can then help your client to take steps to modify or mitigate the effects of a possible negative reputation. Now, let's test your knowledge. Outline how to assess online reputation by using image and video search engines, reviews, social media, and Google alerts. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (5)
> **Env Vars:** ftp (3), url (1)
> **Analogies:** picture (1), for example (1), such as (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 2. Using Email and Websites

[↑ Back to Table of Contents](#table-of-contents)

#### [Harvesting email addresses](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=0)** - [Instructor] Email is one of our main [Forms](../../Skills/Web%20Development/Forms.md) of communication in the business world and is a coveted target for malicious actors. In this segment, we'll learn how to harvest or craft a list of email addresses, which then can be used in spear-[Phishing](../../Skills/Software%20Development/Phishing.md) and spoofing attacks. In the wrong hands, having a list of valid email addresses can be very dangerous. For example, here is a notification of a recent attack. A group of malicious cyber actors have compromised and stolen sensitive information from various government and commercial networks. The attack used malicious files, often through embedded links and spear-phishing emails. As a result, part of an [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) exercise might include locating and harvesting a valid email list. Well, how can we get a list of email addresses? Let's talk about a couple of ways. One way is we can purchase an email list. Now, if we do a search for "purchase email lists," we'll see that there are plenty of opportunities to purchase verified lists. Another method is to search a company's website. Let's take a look. I'm at the Landon Hotel website, which is a fictitious website used for training. And I'll look for a way to contact someone there at the Landon Hotel. Now, because many companies are aware
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=93)** that they should not have any email addresses on a public-facing website, you might not find any email addresses or lists to harvest. Now, we'll search around, and if we don't find one on the website, which, I didn't find any, we can then craft an email list. Now we'll need to start by using either a Contact Us form, or we might use a generic email address where we can start the process. Now, the Landon Hotel doesn't have a Contact Us form. However, there is a link that you can download more information right here. So I've downloaded the information and I've opened it in a new tab. And then, once there, we can search to find an email address. And here, we'll find one: info@[landonhotel.com](https://landonhotel.com). So now let's talk about how we can use this information. Now, here is an example of what we might send. "I'd love to have some information on your deluxe suites." And then, once sent, I'll probably get a response back. All right, we see that the email has come from Barb Roberts. And now we see the way the email is structured, BRoberts. So the first initial and the last name @[LandonHotel.com](https://LandonHotel.com). Well, just imagine if I searched around a little bit more. I may have found a list of employees on that website. And then after finding that list of employees,
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/harvesting-email-addreses?u=76281980&t=188)** which is sometimes available, maybe not on that website, but through other avenues, I can then craft an email address list using that same structure. So first initial and last name @[LandonHotel.com](https://LandonHotel.com). Now I have what I feel would be a valid email list. If you can't obtain an email list from the company, you can also generate one by going to a generator that you can find online. For example, I'm here at this site, and I'll scroll down here. This is where you would enter the field values: name, surname, and company domain. Now I've entered the following, Barb Roberts, Landon Hotel, and then I'll select Generate. And on the right-hand side, you'll see a list of all the email addresses for Barb Roberts. Now, if you throw enough of these at an email system, some of them might even get through. So now let's test your knowledge. Discuss ways you can harvest or craft a list of email addresses, which can then be used in spear-phishing and spoofing attacks. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **CLI Commands:** find (6)
> **Definitions:** is a  (4), is an  (1)
> **URLs:** [landonhotel.com](https://landonhotel.com) (3)
> **Analogies:** for example (2), imagine (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Examining websites](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=0)** - [Instructor] The source code from a website can hold valuable information. In this segment, we'll learn some webpage and website basics so that you can navigate the source code and locate any exposed sensitive information. [HTML](../../Skills/Web%20Development/HTML.md) is hypertext markup language, a simple language developed in 1990 that is used to create webpages and link content. If you are serious about becoming an ethical hacker, you really should know how a webpage is created and the structure and format of the underlying source code. So that you understand what we're looking at when viewing the source code, I wanted to show you a simple webpage with some basic tags. I've opened Notepad, and we'll start with an opening HTML tag. And then I'm going to put a header tag, now we don't need a header, but I want to put a title. The next line I'll Tab in so it reads easier, and we'll put the title, Wild Mashers, and then we'll close the head tag. The next line will begin the body. Now the body will hold the body or content of the webpage. In this case, all I'm going to put is Welcome to Wild Mashers. And here you see two header tags, an open header tag, and a closed header tag. So that will make it nice and bold. Now in the next line, I'm going to put a comment. Now comments don't do anything, but this is the type of information you might find
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=95)** when looking through source code. Now we'll close the body and we'll close the HTML page. Now we're going to save it. Now, when you go to file, save as, because it's in Notepad, we want to make sure that it saves it as an HTML page. So we'll put mashers.html.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=124)** Now it's already in there, so it's going to ask me do I want to replace it? And I'll say yes. But now I've opened it up in my browser, and here we can see our simple website. And up here on the tab, you can see the title. Now if I want to view the source code, all I have to do is Right Click and view page source. And there you would see exactly what we just did in Notepad. Now a single page, just like the one we just did, can be simple. However, a website can be complex. Today, most web developers use specialized software to create web pages, as many are interactive and responsive so you can view them on a small screen such as your cell phone. However, many times it's worth investigating. As within a webpage, we can find links, passwords, and other clues to get us inside the site deeper and collect more data on our target. So what do I mean by complex? Well, when managing a website, there are a number of different tools we can use to visualize the different levels of website, along with what content is available throughout the site. Now I'm here at Dyno Mapper and I'll go to the visual site mapper, and here at this tab, and this is going to just show you what it will generate. Now, once you run a site mapper, this software will then present a view of your site
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-websites?u=76281980&t=219)** such as this one. Once you know the layout of the site, you can plan your strategy to get in and study the pages, to find valuable insight on the target. So I've highlighted the following, [office](../../Skills/Web%20Development/Microsoft%20Office.md) locations, company details, and knowledge base. And there I might find additional information. So now let's test your knowledge, describe some webpage and website basics so that you can navigate the source code and locate any exposed sensitive information. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Exercise Files:** source code (7)
> **CLI Commands:** find (4), make (2)
> **Env Vars:** html (4)
> **Analogies:** such as (2), just like (1)
> **UI Navigation:** go to (2)
> **File Paths:** mashers.html (1)
> **Cross-References:** in the next (1)

#### [Scraping websites](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=0)** - [Instructor] Within a company's website, there can be an abundance of valuable information. In this segment, we'll learn how to scrape a website and examine the source code so we can extract links, comments, and passwords. Website scraping or mirroring is done so we can download a portion or an entire website and study the contents for more clues that can help us understand the target. Some items to look for include emails, phone numbers, or other organizational data, such as employee directories. We also might find comments and concealed information not published or seen on the webpage, such as passwords or links to protected content. Additionally, by scraping websites, we can gather words to create a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) list that we can use later in a brute force attack. If you keyword search website extractor or website mirror, you will see a number of free and paid tools: HTTrack, Wget, Website Ripper Copier, or Web Data Extractor. I'm at HTTrack website copier. Now, although this lists the date as 2017, [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) assured that it is still able to copy a website from the internet to a local directory. I've downloaded and installed the software. We're going to mirror this site here, Fake [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), Fake Jobs for Your Web Scraping Journey.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=96)** Now, once you're in the software, you'll start a new project. I went to File, New Project, and then I'll select Next. And here I'll put the project name. I'll just put Python Jobs.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=120)** No category. And we'll put it in the home directory. We'll say Next. And here's where you have some choices. We'll see where it says Set Options. Now, there's a lot more that we could do but we're going to keep it simple. I'll just put in the web address and select Next. And then we'll say Finish. Now, this will take a few seconds. Now it's complete. So when we want to take a look, we'll go to File, Browse Sites, which you'll see will open in a new browser. I'll select Python Jobs. And there you see the fully-mirrored website. Now, once there you can parse through and find protected content, emails, and possibly password information. In addition, the source code can be used to extract relevant words or phrases. In addition to scraping a website, you can do a quick check by examining the source code of a website. Let's step through how this works. We're at the Landon Hotel webpage, which is a fictitious site used for training. You'll place your cursor anywhere on the page, right-click, and select View Page Source. It will open it in a new tab and there you can see the page source. And when you are in the page source, you'll want to look through it. And here, this is what I'm looking for.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/scraping-websites?u=76281980&t=215)** This is a comment. "Password is HAL2001." Now, this is the kind of information I'm looking for when I'm crawling through the webpage. These are the hidden comments that, if found, will help me get in, drill down, and learn more about my target. Now let's test your knowledge. Discuss some of the ways to gather information from a website, such as emails, employee directories, and comments. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), cursor (1)
> **CLI Commands:** python (3), find (2), wget (1)
> **Exercise Files:** source code (3)
> **Analogies:** such as (3)
> **UI Navigation:** go to (1), right-click (1)
> **Definitions:** is a  (2)
> **Env Vars:** hal2001 (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Mirroring a website](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/challenge-mirroring-a-website?u=76281980&t=5)** - [Instructor] Let's do a challenge. In this challenge, we'll use HT Track to mirror a website. So begin by going to [httrack.com](https://httrack.com) and then download and install the software that's appropriate for your operating system. Once you have it installed I want you to mirror [example.com](https://example.com) and then view the site. Now [example.com](https://example.com) is used for training purposes such as this. Once you see how easy it is to mirror a website I want you to answer the question how can a malicious actor use this tool? This challenge should take you about 10 minutes. Good luck.

> [!info]- Semantic Content
>
> **URLs:** [example.com](https://example.com) (2), [httrack.com](https://httrack.com) (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Mirroring a website](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=0)** - [Narrator] Okay, now let's check our work. I've downloaded and installed HTTrack and now we're going to mirror this site, [example.com](https://example.com). So to begin, I went to file and new project, which opened this window, and I'll say next. Now I've already done this but I'll just go through what I did. I put example for the name and then we'll go to next. And then I would've entered the URL. The options, I didn't set any, again, just to keep it simple and then go to next. And then I selected finish. Now once it ran, I went to file, browse sites, which brought up this window. Went to example, right-click, open a new tab, and there's [example.com](https://example.com). It's exactly the same since it's been mirrored. So my question was, how can a malicious actor use this tool? Well, a malicious actor will mirror a website because they want to use it in a [Phishing](../../Skills/Software%20Development/Phishing.md) attack. Many times it's used to trick users into giving away logins. It also might be used to lure victims to give money for disaster relief or we might see it being used to get someone to click on a link to download malware. So take steps to educate your users. I found a couple of resources for you.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/solution-mirroring-a-website?u=76281980&t=94)** Learn how to spot a cloned website and it talks about website cloning. And this one is, "How to Spot a Phishing Attack." I'll show you one more thing. Now this doesn't always happen but HTTrack puts a comment in their source code. So if you're suspicious, you can right-click and say view page source. And right here is the comment, mirrored by HTTrack. So cloning a website is easy to do and malicious actors use it in phishing attacks. Protect yourself and learn how to identify a cloned website. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (3)
> **UI Navigation:** go to (2), right-click (2), click on (1)
> **URLs:** [example.com](https://example.com) (2)
> **Env Vars:** url (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Monitoring websites](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=0)** - [Instructor] Monitoring a website during an [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) exercise can be crucial for various reasons. In this segment, we'll outline methods to monitor websites for traffic, changes, and vulnerabilities. First, let's talk about why we need to monitor a website. One reason is it helps us to understand site behavior for things such as user interaction, engagement, and responsiveness. It may be part of compliance guidelines that require the organization to test and monitor their site. It provides a way to check to make sure there are no unauthorized changes that may have occurred, either maliciously or by accident. And monitoring a website will reveal vulnerabilities that can exist within the site. The good news is that there are plenty of tools out there to assess a website. Let's review a few of the sites available today. I'm here at SolarWinds Pingdom. Now, Pingdom is used to gather website analytics. Pingdom can help you monitor transactions, page speed, and performance, so you can get a pulse on the website to make sure that it's functioning as expected. In addition, Pingdom has a site where we can do a quick check of the speed to analyze it and find potential bottlenecks. Now to make sense of your target's web traffic, you can use [Google](../../Glossary/Service/Google.md) Analytics,
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/monitoring-websites?u=76281980&t=93)** which provides free tools to assess customer devices and platforms. Any downtime or disruption to your website will affect sales, brand reputation, and lead to dissatisfied customers. I'm here at [updown.io](https://updown.io), which will monitor the uptime of a website and then send an email notification if the website is down. Another tool to use is Monastic, and this will help us do a quick check to see if the site is up and responding. And here's some examples of how you would enter the URL. To gain insight on your audience, you can visit Quantcast, and this will give you an idea of who is accessing your site. Finally, you'll want to test your site for vulnerabilities. Now, there are plenty of tools and techniques your team can use, but for a quick check, you can visit here, [pentest-tools.com](https://pentest-tools.com) and run a quick scan on the target. In most cases, you'll want to run a more thorough scan, as security misconfigurations and vulnerabilities can lead to disastrous results, such as data exfiltration and extortion. Now let's test your knowledge. Outline methods to monitor websites for traffic, changes, and vulnerabilities. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** make (3), find (1)
> **URLs:** [updown.io](https://updown.io) (1), [pentest-tools.com](https://pentest-tools.com) (1)
> **Analogies:** such as (2)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)


### 3. Searching the Network

[↑ Back to Table of Contents](#table-of-contents)

#### [Footprinting using DNS](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=0)** - [Instructor] When conducting reconnaissance, using the [Domain Name System](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md) will help map your target's network. In this segment, we'll review different techniques involved in DNS Footprinting. Domain Name System is an application layer protocol that converts a host name to an IP address and vice versa. DNS is made up of servers spread globally. The servers hold and manage records that provide an address for a host or specific type of resource. The DNS system is the largest distributed database in the world. When looking at the graphic, we see that the DNS hierarchy is in a tree-like structure. The hierarchy begins with the Root. And below, we see the top level domains, such as .com and .edu. And then the second level domains that include [Google.com](https://Google.com) and [MIT.edu](https://MIT.edu). And, you might also see some subdomains. Now, within each domain there are several resource records that store name and IP address pairings. A couple that you might be familiar with are "Type A," which is an IPv4 address. A "quad A," which is an IPv6 address, and an MX record, which is a mail exchange. A normal query and response occurs when a client sends a query to a DNS server for an address. The server then responds with information.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=94)** But, it can also ask other DNS servers for the information. Now when dealing with DNS, there are typically three types of servers. We have the primary server, which is the authoritative server for the zone. Now the primary server provides answers to your DNS queries, such as, "What is the mail exchange IP address" or "What is the website IP address." The secondary servers are backup DNS servers, and there are also caching servers. Caching servers hold cached records of normal back and forth query responses. The DNS system is essential. However, it can be vulnerable, as the records can expose your network layer. DNS has many threats which include exposure or compromise to the zone file and cache poisoning, which changes the DNS cache on the local name server to point to a bogus server. Now let's talk about some of the techniques involved in DNS Footprinting. A zone transfer is when a primary DNS server periodically passes a copy of the database, called a zone, to a secondary DNS server. During footprinting, the team might be able to trick the primary DNS server into providing this information, which will expose all records in the zone. There's also a reverse DNS lookup. Now, this involves retrieving the domain name
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-using-dns?u=76281980&t=188)** associated with a given IP address. This can help uncover additional domains and the organizational details associated with a target organization. We might also try subdomain discovery. Now this will uncover subdomains within a primary domain. These subdomains might lead to different parts of an organization's infrastructure, which might be vulnerable or misconfigured. There's also cache snooping. Now this involves querying DNS cache records from non-authoritative DNS servers, which might expose other information about the internal structure and topology of an organization. Many times you're going to use footprinting tools, and there are plenty. Footprinting tools include SpiderFoot, DNSRecon, DNSEnum, or theHarvester. These tools can help speed up the process and display detailed information, and many are built right into [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md). Now let's test your knowledge. Review the different techniques involved in DNS Footprinting. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Domain name system](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md) (2), [Google](../../Glossary/Service/Google.md) (1), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1)
> **Env Vars:** dns (20), mit (1)
> **Definitions:** is an  (3), is a  (1)
> **URLs:** [google.com](https://google.com) (1), [mit.edu](https://mit.edu) (1)
> **Analogies:** such as (2)
> **Code Identifiers:** theharvester (1)
> **Speakers:** - [instructor] (1)

#### [Examining a zone transfer](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=0)** - [Instructor] On a network, a primary DNS server will periodically send a copy of the database called a zone to a secondary DNS server. In this segment, we'll learn how a zone transfer attack can be dangerous and what information can be exposed. First, let's talk about DNS zone transfers. DNS zone transfers are essential because they facilitate the replication and synchronization of DNS information across multiple DNS servers. On a network, you'll have the following DNS servers. The primary server is the authoritative server that holds the records for a namespace. Secondary servers are backup servers that are read-only. Secondary servers help in load balancing and disaster recovery. To start the process, a secondary server will use the authoritative transfer query which is a protocol for zone transfers. A primary DNS server will then send the zone file to the secondary DNS server. Here's a snippet of a zone file where you can see the information that is sent during the course of a normal query. An attack occurs when an entity poses as a secondary DNS server and asks for a copy of the zone. A zone transfer attack can be dangerous, as it can expose internal IP address information, including host names, IP addresses,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=96)** and other DNS records. This information can be invaluable to an attacker as it provides a roadmap for further attacks. I want to show you in [Wireshark](../../Skills/Cybersecurity/Wireshark.md) what an authoritative transfer looks like. But first, let me show you where I got the packet capture from. Chris Sanders, who has written a very good book on Wireshark, has some packet captures that you can download and analyze yourself. Now, we'll go to his [GitHub](../../Skills/Software%20Development/GitHub.md) repository and scroll down, and there you can see the PCAP. Now, once you go there, I've opened this in a new tab, and you'll select view raw and then you can download the file and open it in Wireshark so you can follow along. Now, once it's open, I'll filter by DNS.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-a-zone-transfer?u=76281980&t=151)** And there we see two frames. So in frame six is my query, and in frame seven is actually my response. Now I'll pull this up and we'll take a look at what are the results. In some cases, depending on the transfer, I'll only get the start of authority, but in this case, I've gotten a lot more. We'll drop this down and we'll take a look at the answers. In this case, I've gotten all the answers. We see host names, IP addresses, and other DNS records. So for good practice to prevent this type of an attack, you'll want to restrict zone transfers only to authorized servers. Deny all inbound connection requests to TCP port 53 and consider using DNS security, which is a set of security extensions for DNS that provides authentication methods when dealing with DNS records. Now, let's test your knowledge. Explain how a zone transfer attack can be dangerous and what information can be exposed. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** dns (16), pcap (1), tcp (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Ports:** port 53 (1)
> **Tools:** github (1)
> **Exercise Files:** download the (1)
> **Best Practices:** good practice (1)

#### [Generating domain names](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=0)** - [Instructor] When launching a [Phishing](../../Skills/Software%20Development/Phishing.md) attack the attacker wants to make sure that the victim believes the site they're clicking on is real. In this segment we'll learn how to generate believable domain names to launch a phishing or spear-phishing attack. When launching a phishing attack, spoofing the brand in the hyperlink may get someone to click on the link. People are now trained to watch the hyperlink so you'll need to have a believable domain name. Let's take a look at an example. Here we see an email from payroll for a final reminder refund. "Dear employee, we've identified an error in your refund. In order to claim your overpayment create an e-Refund account so the monies can be deposited." Now here is what I'll see when I place my cursor on the Get Started hyperlink. Hmm, that looks kind of official. Now, if they click the link, it will take them to [LandonPay.com](https://LandonPay.com) where they will find a form that they'll fill out with hopefully, personally identifiable information. Therefore, prior to launching an effective and believable phishing attack, we'll need to generate domain names. Now we can do this manually, however there are a lot of domain name generators available today. Many will actually check to see
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=93)** if the domain name that you generated is already in use. Now I'm here at this site and I've downloaded and installed Domain Name Analyzer. Now once open, you can see the interface and what it's going to do is generate a database of domain names. Now we know when dealing with [Databases](../../Skills/Software%20Development/Databases.md), we have to save space on your drive before we generated so it has a place to save the database. So to begin, you can select New, and I've already created the database called Landon, and once you do that, then you can begin. I'm going to cancel since it's already created. Now for this example, I'm going to use From Keywords, and select this right here. Now, once I'm here, you can select Auto and that will populate the form with several keywords. So if I selected this, it will just generate a number of different keywords, which may not make sense. Now because I don't want anyone to second-guess what I'm doing, I'm going to create my own list. So let's just put in a couple here, management, and pay, and we'll do another one here, fin. We will definitely put Landon, over here we'll put hotel,
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=192)** and manager, and give it enough, because remember, it's going to check to see what's available. And over here we can select what our extension will be. So we'll select .com, .net, .biz,
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/generating-domain-names?u=76281980&t=214)** and .management. And now we say, okay, and I'll scoot this down here, and here you can see all of what it has generated, and some of them look very official. Up here we can select Check All, and some of them have already been taken. It then gives you the option to purchase the domain name that you just created. Now, once you select it, to really sell the domain name you can go to [letsencrypt.org](https://letsencrypt.org) and get a TLS certificate. Now let's test your knowledge. Describe how to generate believable domain names to launch a phishing or spear-phishing attack. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (7), cursor (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [landonpay.com](https://landonpay.com) (1), [letsencrypt.org](https://letsencrypt.org) (1)
> **UI Navigation:** click on (1), go to (1)
> **Env Vars:** tls (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Determining the path](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=0)** - [Instructor] While footprinting the network, there are several tools and utilities that we can use to help gain insight on our target. In this segment, we'll learn how using tracert or tracer route can help us understand the path packets take through the network and potential weak spots along the way. A footprinting exercise will most likely involve assessing the network. We know that most intermediary devices and ISPs should have an acceptable level of security against attacks. However, that is not always the case. Footprinting the network can help discover weak spots in a network infrastructure. So first, let's talk about some command line interface tools that we can use to test the network. Let's start with ping. Ping is a simple utility that is used to test for reachability. In [Windows](../../Glossary/Service/Windows.md), it will stop after pinging four times and in [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), it will keep pinging until you issue the command control C. To demonstrate, I'll go into the command line interface and I'll type ping [Google.com](https://Google.com) and we'll let it run. This is a Windows operating system, so it will ping four times and then stop. It then displays the results along with some statistical information. Next, let's talk about how we can trace the route
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=96)** packets have taken from point A to point B. We can do this in Windows using tracert or in Linux using tracer route. Both utilities discover the route by using specially crafted ICMP packets. The results will present the fully qualified domain name and IP address of each gateway along the route, along with transit times. Let's see how this works. I'm in the command line interface and I've entered tracert [Google.com](https://Google.com). Now this takes a little bit longer and I let it run, but now we can see it's given us more information. And I'll scroll down. Now once complete, we'll see some information as to the journey the packets took and the stops along the way. Now keep in mind, we see a number of different timeouts. If we see a timeout, that probably means it's a firewall rule set to deny ICMP requests. Another Windows utility that combines the features of ping and tracert is called path ping. It sends packets to each router and then shows packet loss at any given router or link by doing some [Statistics](../../Skills/Data%20Science/Statistics.md). Linux doesn't have path ping, but you can use MTR, or My Trace Route, which basically does the same thing.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path?u=76281980&t=190)** To run, issue the command path ping and let it run. Now, it will take a few minutes to run, as it needs to complete some calculations. So here's what you might see after running path ping. The first results list the path, right up here, and then down below you'll see the test results. In addition to command line interface tools, some online apps provide detailed visualization, packet loss statistics, along with port and network scanning. For example, we see this digital dashboard from SolarWinds. Here, the software provides several details on the intermediary devices the packets have taken on their journey to a remote host. Now let's test your knowledge. Explain how tracert or tracer route can help us understand the path packets take through the network and potential weak spots along the way. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (4), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Google](../../Glossary/Service/Google.md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
> **Tools:** command line (4)
> **Env Vars:** icmp (2), mtr (1)
> **Definitions:** is a  (2), is called (1)
> **URLs:** [google.com](https://google.com) (2)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### [Using nslookup and DIG](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=0)** - [Instructor] When footprinting DNS, there are several utilities we can use during discovery. In this segment, we'll learn how to use nslookup and dig in either the command line or using online resources to test a DNS query and view the results. First, let's talk about nslookup. nslookup is used to diagnose DNS. It's native to most operating systems, and you can use it in either non-interactive, which is the default, or interactive modes. Let's see how this works. I'm at the [Windows](../../Glossary/Service/Windows.md) command line prompt, and we'll begin by using the non-interactive mode. To find out the IP address of a host, you will need to enter the fully qualified domain name of the host. I'll enter nslookup [google.com](https://google.com).
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=63)** I'll press Enter, and there you will see your results. The first result is the local DNS server. The second one shows several IP addresses for [google.com](https://google.com). Next, let's go into interactive mode. For this, I'll type nslookup, and then press Enter.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=90)** There you will see the nslookup command prompt. Now, we know the IP address for [google.com](https://google.com), but I want to find out a little bit more about [google.com](https://google.com). Okay, but specifically what? Well, this time, I'll ask for the mail exchange. So I'll enter, set type equals mx.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=118)** And I'll press Enter. And now it wants to know for what domain name, and I'll say [google.com](https://google.com). And press Enter. And there is your mail exchange information. Now, to exit, hit Ctrl + C. Now, another tool is Domain Information Groper or dig, which can query specific DNS records and provide details on how DNS servers are responding to queries. Dig is native to [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). Now, you can also use dig in Windows, however, you would have to install dig along with bind utilities. But another way we can use dig is by going to the [Google](../../Glossary/Service/Google.md) Apps toolbox. Now, I'm here at this site, and I've entered [google.com](https://google.com) and we see several records. For example, we see an A Record, which is an IP version four record, and a quad A, which is IP version six, and possibly other records you might want to look into, such as the start of authority. And I'll go to that. Here's the start of authority. Now, the start of authority is a resource record in DNS that contains critical information about a domain such as the primary name server, the email of the domain administrator, the serial number, and refresh and retry timers.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/determining-the-path-19293280?u=76281980&t=214)** So whether you're in Windows, Linux, or even online, we can find specific information on a DNS system. Now let's test your knowledge. Describe how to use nslookup and dig to test a DNS query and view the results. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (7), [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2)
> **Env Vars:** dns (9)
> **URLs:** [google.com](https://google.com) (6)
> **CLI Commands:** find (3)
> **Tools:** command line (2), command prompt (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)


### 4. Discovering Reconnaissance Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Using OSINT tools](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=0)** - [Narrator] Open source intelligence tools can gather publicly available information during reconnaissance such as news stories, public records, and websites. In this segment, we'll discover how Maltego, Shodan, and other tools can help provide intel for a more targeted discovery. While mining data and gathering intelligence there are a number of different tools that can collect information by gathering artifacts, generally one result at a time. That type of tool is called Open-Source Intelligence Tool, or OSINT, which is consolidated from publicly available sources. We are all connected in many ways, as shown in this graphic. Most all objects on the network have descriptive data about data and includes information such as the location, file size, type, author, and keywords. This descriptive data is called [Metadata](../../Skills/Web%20Development/Metadata.md). To improve the effectiveness of [Data Collection](../../Skills/Data%20Science/Data%20Collection.md), analysis, and interpretation, most OSINT tools use metadata. So let's talk about some of the OSINT tools that you may come across while searching and some information on how they work. Let's start with Metagoofil. Metagoofil is a pretty strong information-gathering tool. It will take metadata from the target
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=93)** and then will put it in the form of a webpage and then you can view it in a standard browser, as you see here. Another tool is FOCA, which examines metadata so you can tell what software is being used such as a dot doc, dot pdf, or [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) file. In addition, FOCA can scan using search engines like [Google](../../Glossary/Service/Google.md), Bing and DuckDuckGo to find downloadable files along with local files. As shown in the screenshot, you can customize your search. Maltego is a powerful data analysis software tool that gathers information by using standard gathering techniques. It harvests domain names, WHOIS information, and IP addresses. Maltego also harvests specific information on people such as websites, related companies, phone numbers, social networking, and email addresses. It then creates a visual of the relationship among all objects. Maltego has a free community version, which is built into [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) along with a paid commercial version. And the last tool we'll look at is Shodan. Shodan allows you to see what devices are connected to the internet, who's using them, and what they are. Now, I'm at the homepage and it says, the search engine for the internet of everything.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/using-osint-tools?u=76281980&t=188)** And if we select Explore, it will take you to this page where you can explore all types of objects on the internet. Billions of devices are on the internet and that includes all types of things such as [SCADA](../../Glossary/Concept/SCADA.md), webcams, and other things such as power plants, smart TVs, and even refrigerators. Shodan is the search engine for the [internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) and that's everything that's connected. So explore Shodan and see everything that's connected. Of course, there are many other OSINT tools available. This was just a sample but keep in mind that if it's on the internet there's most likely a digital footprint on your target. Now, let's test your knowledge. Outline how Maltego, Shodan, and other tools can help provide intel for a more targeted discovery. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1), [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1)
> **Env Vars:** osint (4), foca (2), whois (1), scada (1)
> **Analogies:** such as (6)
> **Definitions:** is called (2), is a  (2)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Investigating email](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=0)** - [Instructor] Email footprinting involves compiling information on a company or individual using details in the email and related [Metadata](../../Skills/Web%20Development/Metadata.md). In this segment, we'll learn ways to extract information using an email header, and then do a lookup of a specific IP address. First, let's talk about an email header, which can reveal a great deal of information such as the sender's IP address, originating mail server, and any servers the email may have hit on its journey. There are several reasons why it's important to understand how an email header works. One reason is that, by examining the header, you can make sure an organization isn't exposing the IP address to an internal mail server. In addition, during remediation, you might need to educate the IT department on ways to prevent spam, [Phishing](../../Skills/Software%20Development/Phishing.md), and spoofing attacks, which can lead to a costly data breach. Now let's talk about how email works. Email uses Simple Mail Transfer Protocol, or SMTP, which transfers mail from one server to another. Each email has two sender addresses, the envelope and the letterhead. Let's break this down. Here's an example of what you might see if you are able to examine the envelope. The mail transfer agent sends an H-E-L-O or HELO
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=95)** to identify itself when connecting to another email server. We then see the Mail From, which is the sending email address, and RCPT To, which is the destination. The letterhead holds the message header and message body, and that's what we see when receiving an email. Here is a key consideration when we examine an email. The envelope address cannot be spoofed, as it's used to deliver mail. However, the letterhead address can be spoofed. To really understand where an email came from, we can investigate the email header, which tells the story of the journey, and includes all the stops and validation checks. For example, here we see a small portion of the header. And in this case, this is the Antispam Report section. The CIP is the IP address. The country is where the email originated. And the spam filter verification means the message was marked as non-spam and sent to the intended recipients. So how do we get the email header? Well, I'm at this webpage, Mail Exchange Toolbox, or MxToolbox. And this section tells us how to get email headers for a variety of email applications. So now I'd like to step through an example. And I'm here at What's My IP. And we're going to use the tool Trace Email.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=192)** And I'm going to scroll down, and I'm going to paste an email header. And I'll say, Find Email Sender. Now we'll scroll down. And here we see the IP addresses of the different mail servers. So down here, we see the source host and IP address. And what I'm going to do is I'm going to copy that IP address. Then we'll do an IP address lookup. And I've pasted it there. And we'll say, Get IP Details. Now this will point to the location where the email originated, which in many cases is a mail server. However, in this case, it points to a Tor node, which is used to conceal the true location of a sender. And one more thing, to check any more information, I'll run this through Cisco Talos. Talos Labs provides shared threat intelligence. And here, once we put this in, we can see that the sender reputation is poor. And we can do a lot more investigation on the IP address. But as you can see, there is a lot of information in an email header. Now let's test your knowledge. Discuss ways to extract information from an email header, and then do a lookup of a specific IP address.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/investigating-email?u=76281980&t=287)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **Env Vars:** smtp (1), helo (1), rcpt (1), cip (1)
> **CLI Commands:** make (1), find (1), node (1)
> **Definitions:** is a  (3)
> **UI Navigation:** scroll down (2)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Footprinting VoIP and VPNs](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=0)** - [Presenter] In addition to gathering company information, footprinting can include VoIP and VPN data. In this segment, we'll outline ways to assess VoIP and VPN systems for open ports, services, and exposed servers. First, let's talk about VoIP. VoIP or IP telephony is a widely-used technology that enables voice communication and multimedia sessions over the internet. VoIP soft phones are an essential part of many unified communication systems. However, VoIP can be vulnerable to numerous security threats. Some of the threats include vishing. Vishing is VoIP [Phishing](../../Skills/Software%20Development/Phishing.md) and is using the phone to get the user into surrendering sensitive information. We can also see ID spoofing. This is when a cyber criminal makes calls, but presents a different caller ID to the receiver. Because VoIP uses software, the threat of malware is real. A hacker can place malware on a system a month in advance and activate the payload once a user establishes a VoIP connection. Traditional landlines and VoIP users are at risk of someone eavesdropping with the hopes of obtaining sensitive information. Because of the potential for an attack, the team may need to include an assessment of the organization's VoIP system.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=93)** Some of the activity involved when footprinting VoIP includes evaluating VoIP servers and endpoints along with providers. First, we'll talk about VoIP servers. VoIP servers have a web interface and can be vulnerable to attacks, such as [SQL](../../Skills/Data%20Science/SQL.md) injection and denial of service attacks. If the organization hosts their own VoIP server, the team should conduct tests that include port scanning and banner grabbing to determine whether the server is responding and is vulnerable to an attack. The team may also want to identify VoIP endpoints and user accounts, which can be used in attacks such as vishing, spoofing, or eavesdropping. In addition, if the organization uses a third-party provider, they will need to involve the vendor when assessing the VoIP system prior to any testing. Now, many times, a VoIP system will use VPN technology to protect the communications. Because of this, the team may include an assessment of VPN technology in use for unprotected connections. One of the assessments can include checking for vulnerable protocols, especially obsolete SSL/TLS versions. If that is the case, the team can suggest the organization might want to upgrade to some of the newer VPN technologies such as OpenVPN and WireGuard.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/footprinting-voip-and-vpns?u=76281980&t=187)** Another consideration is making sure the VPN doesn't have any DNS data leaks. DNS data leaks can expose your location and compromise [Privacy](../../Skills/Data%20Science/Privacy.md). As shown in this graphic, a DNS data leak can occur if the VoIP traffic goes through an ISP's DNS server instead of going through the VPN tunnel. The team should check for DNS leaks. Using the keyword DNS leak, you'll see plenty of sites where you can run a quick test. Now, let's test your knowledge. Outline ways to assess VoIP and VPN systems for open ports, services, and expose servers. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** vpn (8), dns (6), sql (1), ssl (1), tls (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Going to the dark web](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=0)** - [Instructor] Footprinting and reconnaissance can also include evaluating obscure information. In this segment, we'll outline ways the team can investigate the deep and dark web. The threat landscape is constantly evolving, and malicious actors continue to use more ways to conceal their identity and location. Because of this, the team may include deep and dark web footprinting as part of their assessment. First, let's talk about the different parts of the web as shown in this graphic. The surface web includes content that is indexed by traditional search engines and viewed using a standard browser. The deep web represents content that is not indexed by traditional search engines as it consists of primarily private and paywall sites. And the dark web is a subset of the deep web and made up of encrypted and anonymous networks that conceal user identities and activities. While footprinting the hidden parts of the web, the team might be able to identify login credentials that have been stolen and possibly sensitive information and trade secrets for sale. Because of the hidden nature of the dark web, there are a few precautions you'll need to take. You'll want to set up to search anonymously by using a sock puppet. A sock puppet is a fictitious character used while researching, and you can read more about it here. In addition, you should use a virtual machine and VPN as there can be dangerous malware variants
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/going-to-the-dark-web?u=76281980&t=96)** that can easily infiltrate and infect your machine. And because much of the activity in the deep and dark web is concealed, it can be difficult to search. There are search engines that you can use, and I found a few on this webpage. Now, websites on the dark web use the .onion top level domain instead of .com or .net. These sites aren't accessible through regular browsers. While searching the dark web, you'll need the Onion Router or Tor Browser, which will encrypt the communication and allow you to browse anonymously. I'm here at Project Tor, where you can learn more and download the Tor Browser. Now, keep in mind, when moving through the dark web, exercise caution and avoid any illegal activities or marketplaces. Now let's test your knowledge. Outline ways the team can investigate the deep and dark web. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2), set up (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1), caution (1)
> **Env Vars:** vpn (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Exploring other footprinting tools](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=0)** - [Narrator] While conducting an [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) exercise, the team will use a variety of tools to help locate resources from various sources on the internet. In this segment, we'll discuss ReconDog and BillCipher, two open source reconnaissance tools that have advanced searching and scraping capabilities. Let's start with ReconDog. ReconDog is used for gathering a variety of information on a target domain. Because of its multifunctional nature, many feel it's like a Swiss Army knife as it automates the process of identifying potential entry points and vulnerabilities in a target system or network. Some of ReconDog's key features include the ability to scrape emails from publicly accessible sources, such as who is records, websites, and forums. It can grab banners to gain information about a system on a network. It can identify sub-domains to grasp the full scope of a domain. It can retrieve various DNS records and run a reverse IP lookup and it can conduct port scanning on a system to see what services are running. Another multifunctional tool is BillCipher, which focuses on mining publicly available data. BillCipher can complete many tasks. It can gather publicly available email addresses,
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/exploring-other-footprinting-tools?u=76281980&t=95)** collect information about domains and their associated data, extract data from various social media platforms, and monitor for potential data breaches related to the target. You can get both on [GitHub](../../Skills/Software%20Development/GitHub.md) and then run the software on [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md). Here's a graphic of ReconDog in Kali and here's a graphic of BillCipher in Kali. Now let's test your knowledge. Discuss how ReconDog and BillCipher can help locate resources from various sources on the internet. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1)
> **Analogies:** it's like (1), such as (1)
> **Env Vars:** dns (1)
> **Tools:** github (1)
> **Speakers:** - [narrator] (1)


### 5. Footprinting Capstone

[↑ Back to Table of Contents](#table-of-contents)

#### [Conducting a forensic exercise](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=0)** - [Instructor] Part of an [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) exercise can involve remediation and security training. In this [Capstone](../../Skills/Software%20Development/Capstone.md), you'll step through the process of investigating a suspicious email to identify clues and learn how to stop malicious email from reaching recipients. Here's the scenario. After completing the ethical hacking exercise, the team identified several areas where the client would benefit from remediation strategies and security training. One area of concern was the potential for spam and [Phishing](../../Skills/Software%20Development/Phishing.md) emails getting through to the clients. Now, let's talk about Remediation and Training. Remediation involves addressing and fixing any vulnerabilities that the team discovered. And security training provides education and awareness on security related issues. The team leader discussed the outcome with the stakeholders, and part of the remediation recommendations included training on the following. Learn how to recognize suspicious emails. Discover ways to identify where the email originated. And understand how email providers detect possible spam and phishing email. So you'll need to go to the Exercise File on the welcome screen and open the Challenge and Links document if you haven't already. The exercise begins in Chapter 5, Footprint in Capstone.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/conducting-a-forensic-exercise?u=76281980&t=95)** You'll go through the Capstone and answer the questions, which are divided into three sections. Examine an email to determine sections that appear legitimate and where you see suspicious content. Dive into the email header, which can lend insight into the email's [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), origin, and metrics used to determine whether or not the email is possible spam. And verify IP blocklists, which are used to identify IP addresses linked with suspicious or malicious activities. The activity will help you understand ways to improve the security of an organization when dealing with threats that originate via email. Although I provide the answers to each section, try to proceed through the questions on your own. Your first task is to examine the email, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Capstone](../../Skills/Software%20Development/Capstone.md) (3), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (2), [Phishing](../../Skills/Software%20Development/Phishing.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **UI Navigation:** go to (1), open the (1)
> **Exercise Files:** exercise file (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Examining an email](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=0)** - [Instructor] Training users on how to identify suspicious emails helps to improve the overall security of an organization. In this segment, we'll examine an email to determine what sections appear legitimate and what areas look suspicious. Take a look at the following image and tell me a couple of ways that this email looks legitimate. What would make someone click on a link? Well, in the message, it has the correct email address and along the bottom there's a copyright notification. Well, that seems official. It looks like it came from my email provider, which is a company I know or trust. And then there's a sense of urgency, but not too urgent, meaning one or more of your emails will be deactivated soon. Okay, so we can see why someone might click on the link, but next, I wanted you to take a look at how this email looks suspicious. Well, first it misspelled the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) warning and it wanted me to click on a sketchy link, and I'll place my cursor on the link. Here it shows us going to [Firebase](../../Skills/Web%20Development/Firebase.md) storage and then there's a firmer warning in the email with a greater sense of urgency in the message. If the emails aren't verified before 48 hours any services connected to it will stop working. You can avoid this happening for good by verifying your details below.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/examining-an-email?u=76281980&t=94)** So next, I wanted you to go to this site, consumer.[ftc.gov](https://ftc.gov) and read the article. So the question is, what are some signs that an email is a scam? And I'll scroll down. Some signs that it is a scam is there's a generic greeting. The account is on hold due to billing and there's an invitation to click on a link to update payment information. What are four ways to protect against [Phishing](../../Skills/Software%20Development/Phishing.md) attacks? You should use security software, update phone software automatically, use multifactor authentication, and back up your data. And the last thing I wanted you to do is to visit these two sites and read the articles which share information about the prevalence of hackers using legitimate websites to hide malicious payloads. And then answer the question, how would you use this information to protect your organization? Well, you should use [Security Awareness](../../Skills/Cybersecurity/Security%20Awareness.md) training and use caution when clicking a link, even if it seems to come from a legitimate company, like [Google](../../Glossary/Service/Google.md) or [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), cursor (1), [Firebase](../../Skills/Web%20Development/Firebase.md) (1), [Phishing](../../Skills/Software%20Development/Phishing.md) (1), [Security Awareness](../../Skills/Cybersecurity/Security%20Awareness.md) (1)
> **UI Navigation:** click on (3), go to (1), scroll down (1)
> **Definitions:** is a  (3)
> **Warnings:** warning (2), caution (1)
> **CLI Commands:** make (1)
> **URLs:** [ftc.gov](https://ftc.gov) (1)
> **Speakers:** - [instructor] (1)

#### [Diving into an email header](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=0)** - [Instructor] An email header tells a story about the journey the email took from sender to receiver. In this segment, we'll investigate an email header and learn ways to prevent [Phishing](../../Skills/Software%20Development/Phishing.md) and forgery. So let's review the answers to this part of the [Capstone](../../Skills/Software%20Development/Capstone.md). You are to go to MX Toolbox and upload the email header, and I pasted it and then said analyze header, and I'll open it in a new tab. Once there, scroll down where you see [cpanel.net](https://cpanel.net) is on a blacklist. And here we see that entry. Click on the red X to learn more, and I clicked it and opened it in a new tab, and there you see that IP address is on two blacklists. So what does it mean when an IP address is on a blocklist? Well, IP blacklisting or blocklisting occurs when an IP address is ignored by a web hosting company, and any mail you try to send is blocked and not forwarded. Next, scroll down where you will see, "Sender Policy Framework failed," and here we see the entry that it failed for that IP address. Now this is a test to verify that the IP address is included in the Sender Policy Framework. In this case, the specified IP address is not included in the Sender Policy Framework record. So let's talk about Sender Policy Framework
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=95)** and ways it can help prevent phishing and forgery. Sender Policy Framework allows the owner of a domain to specify which mail servers are permitted to send mail on behalf of that domain. It does this by publishing a specific record in DNS containing a list of authorized IP addresses. Now, in addition to Sender Policy Framework, there are two other protocols that are used to prevent phishing and forgery, DomainKeys Identified Mail, or DKIM, which is a digital signature, and Domain-message Authentication, Reporting, and Conformance, or DMARC, which checks the address on the envelope and letterhead address. So here's an example of a failed DMARC. The envelope address does not match the letterhead address, and that will fail your DMARC. Now this doesn't always mean it's a spoofed email, but it's a pretty good indication. If there is an error, the administrator can adjust the DMARC settings. Now, when we compare all three, we see that DMARC will rely on either Sender Policy Framework or DKIM to ensure authentication. Sender Policy Framework and DKIM can be used as standalone methods, but used together, they help prevent phishing emails and forgery by allowing administrators to validate inbound email.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/diving-into-an-email-header?u=76281980&t=190)** And the last concept deals with pointer records. Now, another key component of implementing a secure email delivery and spam protection is to ensure that you've properly configured your DNS server. Now, this is so that other mail servers can send mail to your users. So the question is how are pointer records used as another method for spam filters to determine the legitimacy of email? Well, pointer records are used in DNS to map an IP address back to a host name. They play a role in email authentication by allowing received email servers to perform a reverse DNS lookup. And finally, you were to review what you've learned by completing a matching exercise, and here are the results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (4), [Capstone](../../Skills/Software%20Development/Capstone.md) (1)
> **Env Vars:** dmarc (5), dns (4), dkim (3)
> **UI Navigation:** scroll down (2), go to (1), click on (1)
> **Definitions:** is a  (2), is an  (1)
> **URLs:** [cpanel.net](https://cpanel.net) (1)
> **Speakers:** - [instructor] (1)

#### [Verifying IP blocklists](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=0)** - [Lisa] IP blocklisting occurs when an IP address is ignored or blocked. In this segment, we'll discover resources that can identify suspicious IP addresses. Here's the scenario. During the course of your day, you received an intrusion prevention system alert. These three IP addresses have been blocked because of reputation. Your job is to investigate further. It turns out that a suspicious email has gotten through the firewall. You immediately delete the email to prevent it from going any further. We're going to investigate those three IP addresses, but then we're going to drill down on that IP address. So first, we'll go to Talos Intelligence and see what we can find out about the IP addresses. I put in the first one, and then we'll have it run its search. Then down below, we see a lot of information, location, owner details, and here, we see reputation details. In this case, the sender IP reputation is poor. Down below, it is listed on a block list, [spamhaus.org](https://spamhaus.org). Now we'll scroll down, and here, we can see a list of top IP addresses used to send emails in that IP address range, and all of them have a poor reputation. Now the next IP address I ran, and again, similar information, we can see the location,
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=93)** in this case is Japan, owner details, and here, we see the sender IP reputation is poor and the web reputation is untrusted. In this case, that IP address is listed on two block lists, and the related IP addresses used to send email all have a poor reputation. And the last IP address, we'll scroll down, the location is Japan, and the owner details here we see. Now in reference to the location, geolocation is nice to know because some of your filters will filter out specific countries or geolocation IP addresses, so it's nice to know where did that IP address originate from. Over here, the reputation details show the sender IP reputation is poor, along with an untrusted web reputation. In this case, that IP address is listed on three block lists, and all of the related IP addresses have a poor reputation. So now we were to go to Project Honey Pot. In this case, I went to the IP Data tab, and then I asked to Lookup IP, and then I entered that IP address, 45.117.142.42, and then I'll select Search. Now, here again, it shows the geographic location as Japan, but the information says
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/verifying-ip-blocklists?u=76281980&t=185)** that, "The Project Honey Pot system has detected behavior from the IP address consistent with that of a mail server and a dictionary attacker." So this shows a poor reputation. We'll go to one more. In this case, we're at Spamhaus Project, and then I'll look up that IP address. In this case, we see that that IP address has four listings, so not a good reputation. Now the last question is, what can we learn from this information? Well, knowing this information will help us tune our security devices to prevent malicious email from getting into the organization.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), scroll down (2)
> **CLI Commands:** find (1)
> **URLs:** [spamhaus.org](https://spamhaus.org) (1)
> **Versions:** 45.117.142 (1)
> **Speakers:** - [lisa] (1)


### 6. Wrapping up the Recon

[↑ Back to Table of Contents](#table-of-contents)

#### [Guarding social media](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=0)** - [Instructor] Social media has become a part of our daily lives as it connects people globally and enables businesses to reach their target audiences more effectively. In this segment we'll learn ways to protect social media accounts to prevent cyber attacks and data loss. The history of social media can be traced back to one of the first sites called Six Degrees, created in 1997. Today, using social media can be a tool in gathering information. Let's talk about some of the dangers of using social media. Most social networking sites do not have a way of ensuring authentication. It's a web of trust. When we're a friend or connection request is made it's up to the recipient to accept. Although in some cases an introduction can be made via a third party many times people simply accept the invitation. Another key area of concern is the risk to [Privacy](../../Skills/Data%20Science/Privacy.md). Innocent mistakes can lead to data exposure. Now, sharing personal or business information on social media may inadvertently provide cyber criminals with the necessary details to conduct targeted [Phishing](../../Skills/Software%20Development/Phishing.md) attacks. In addition, posting about company activities and sharing proprietary information or trade secrets can lead to intellectual property theft or unauthorized use of your content. You should be cautious when sharing information
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=95)** about where an individual is traveling or what events they've attended. For example, posting a photo at a company event while wearing a company badge with a QR code. If the image is clear enough a malicious actor can potentially grab the data from the QR code. There's also possible reputation damage. Posting inappropriate content or sharing controversial opinions on social media can harm your personal or business reputation. Future employers, clients or partners might scrutinize your online presence before engaging with you. To mitigate the risk of exposure consider the following precautions. One area is to focus in on with all employees, is training an appropriate use of social networking To minimize a company's digital footprint employee education is necessary to avoid becoming victims of social engineering attacks as employees can be tricked into giving out information. For example, here is an ex feed between Mary and Sarah. Sarah, I see you're from Bend, Oregon. Was your mother a Sanchez? No. Mom was an Abrams. Oh, okay. I thought I knew her family. Now Mary has Sarah's mother's maiden name which is commonly used for security purposes. All internet profiles should use maximum privacy settings.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/guarding-social-media?u=76281980&t=192)** That way if someone were to do a keyword search on the organization or individual in an organization they won't come up on a social networking site. In addition, personal information such as name, employee, phone, pictures, and resume can be lifted and an imitation site with your information can be built. Don't post sensitive business information or trade secrets on public profiles. Be cautious about accepting friend or connection requests from unknown individuals or suspicious accounts. And each company should do a review of social media for employees at least two times in a five-year period. Now let's test your knowledge. Outline ways to protect social media accounts to prevent cyber attacks and data loss. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Writing footprinting reports](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=0)** - [Instructor] Footprinting reports provide the documentation on the information the team has found on an organization. In this segment, we'll cover reporting guidelines and mitigation techniques, along with a discussion on the security implications of sharing information online. Every day, more and more information is added to data repositories and publicly accessible websites. A footprint and reconnaissance exercise is conducted to find out information about an organization available on the internet and other sources. The results should be recorded to assist the security analyst in preventing exposure of any company data. Footprinting is essential for every business, and should be done in some form on a regular basis. Once the exercise is complete, you'll want to carefully document the results of your findings. Results include competitive intelligence, how much information was found, and what did it reveal. Did you do any [Google](../../Glossary/Service/Google.md) hacking? Were you able to see hidden data or backdoor into a site? As far as websites, were you able to find any company directories or email lists? And for email, how much information was disclosed in the header? On social media sites, did employees disclose or allude to trade secrets or proprietary information? Were there any social engineering attempts? What was done and how successful were they?
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=96)** What tools, such as AnyWho, Spokeo, or Yancy were used, and what type of information was discovered? In DNS records, what information was found about the location and type of servers? By using the tools and techniques, were you able to build an outline of the targets network? Knowing this information, how much farther could a potential attacker be able to accomplish? Now, after you obtain the results, take care in discussing the findings. Many times managers are shocked to discover how much publicly available data was found. Reassure them that the information will be held in confidence, and then once complete, the next step is to mitigate any data leaks. Now, if there is sensitive data that is found on the internet, a company can have the results removed from at least Google search engine. Here we can take a look at Google's content removal page, and you can read more of this information about the steps you need to take to remove it from the searches and also the cache. But keep in mind, however, not all scrub and removal efforts are successful, so you should periodically check back to make sure that the information isn't still exposed. Now efforts to remove content from the search engines is a reactive approach. A better approach is to be proactive.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/writing-footprinting-reports?u=76281980&t=189)** Now, user education is essential, and managers should discuss the security implications of having a social networking account compromised. Now, most are free applications, so it's important that we take steps to protect the passwords, and also instruct employees to think before posting. I'm at [Facebook](../../Glossary/Service/Facebook.md)'s information site where you can learn more about Facebook's [Privacy](../../Skills/Data%20Science/Privacy.md) policy and ways to lock down your site. Now, let's test your knowledge. Outline reporting guidelines and mitigation techniques along with a discussion on the security implications of sharing information online. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [Facebook](../../Glossary/Service/Facebook.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** dns (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Countering footprinting](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=0)** - [Instructor] During footprinting and reconnaissance, we know that there are many resources online to view someone's digital footprint. In this segment, you'll learn some steps you can take to be less vulnerable to exposure. Today, it's very difficult not to be seen. In fact, traces of the internet stay online for many, many years. Let's take a look at the Wayback Machine, which is an internet archive. To find legacy information, you'll see that it will have a timeline of when they first started archiving the site. For this example, we'll use a generic site, something like [disney.com](https://disney.com) and see what they've archived. I put [disney.com](https://disney.com) in the search, which came up with a list of archived information. Now, we're going to go way back to 1996, and I'll scroll down, and I'll select this one here on December 27th, and I'll take the first snapshot, which then opened this page. Now, once there, you can search through that archived information and you might find something of value, for example, an email address. So as we can see, a digital footprint can remain for many, many years. Footprinting can be very telling and expose information about an individual or organization. Because of the sheer volume of readily available data
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=93)** on the internet, minimizing exposure can be a challenge. One key step is to conduct a footprinting exercise to see what information is available. Once you discover any vulnerabilities, enact measures and processes to minimize or eliminate risk. So now, let's talk about what we can do to minimize risk of exposure. One way to help ensure your information doesn't leak out onto the web is don't discuss confidential information online. In general, don't discuss company business online and that includes good and bad information. Administrators should use a non-traditional email address so I can't recreate your email using a pattern. For example, instead of Mike Peterson using MPeterson, use an initial-based identifier instead. Use separate email addresses for business and entertainment. Business email should be used only for business and nothing else. Create separate accounts for interactive sites such as online games, and blogs, and forums. Use unique usernames for different accounts using the same theory. Many of us are in the habit of reusing the same login for multiple accounts. An individual's bank account username should be uniquely different from the company's login or any other site that is public. That way, it will be difficult to cross-reference
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/countering-footprinting?u=76281980&t=189)** across multiple logins. Instruct employees not to make enemies online. Many think it's anonymous online and no one will seek revenge for inappropriate comments or mean-spirited actions. Don't give someone a reason to cyberstalk you. A smartphone has a location service built in that could provide information as to where the photo was taken. If an employee insists on posting images, disable the geotagging feature on the phone. Some steps you can take to make your network less vulnerable include the following, maintain patch and [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) on all systems, monitor for scanning activity and specific footprinting patterns, configure devices to reject any footprinting request, shut down all unnecessary services, all services and devices should only respond to authorized devices by using strong authentication methods, keep access control lists up to date and segment the network to prevent reconnaissance on the private network, and don't overlook physical security, make sure you properly dispose of all printed information. Now, let's test your knowledge. List some steps you can take to be less vulnerable to exposure. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (1)
> **CLI Commands:** make (3), find (2)
> **Analogies:** for example (2), such as (1)
> **URLs:** [disney.com](https://disney.com) (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-footprinting-and-reconnaissance-22773528/next-steps?u=76281980&t=0)** - [Instructor] Thank you for watching. In this course, we learned how to use high and low tech methods to scout our target. We began by uncovering information using competitive intelligence, [Google](../../Glossary/Service/Google.md) hacking, email, and website footprinting. We then unleashed the power of open-source intelligence tools and outlined how DNS along with utilities such as pinging, tracert, and dig can help us in our search. We then finished with best-practice footprinting countermeasures, and reporting. If you're interested in learning more, please check out the library where new courses are added every day. If you'd like to learn more about packet analysis, please check out my [Wireshark](../../Skills/Cybersecurity/Wireshark.md) series, "Improve Your Wireshark Skills." Any course in the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) series will be well worth your time and you might want to see what my colleague, Malcolm Shore, has for you on his homepage. Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **Env Vars:** dns (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Lisa Bock](../../Instructors/Cybersecurity/Lisa%20Bock.md)

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Path Context

### In [Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)
← [Ethical Hacking Introduction To Ethical Hacking](Ethical%20Hacking%20Introduction%20To%20Ethical%20Hacking.md) | **2 of 19** | [Ethical Hacking- Scanning Networks](Ethical%20Hacking-%20Scanning%20Networks.md) →

## Appears In

- [Become an Ethical Hacker](../../Paths/Cybersecurity/Learning%20Paths/Become%20an%20Ethical%20Hacker.md)

## Related Courses

_Courses sharing skills:_

- [Offensive Penetration Testing](Offensive%20Penetration%20Testing.md) — Ethical Hacking
- [Stealth Penetration Testing with Advanced Enumeration](Stealth%20Penetration%20Testing%20with%20Advanced%20Enumeration.md) — Ethical Hacking
- [Kali Linux for Advanced Pen Testing and Ethical Hacking](Kali%20Linux%20for%20Advanced%20Pen%20Testing%20and%20Ethical%20Hacking.md) — Ethical Hacking
- [Ethical Hacking- SQL Injection](Ethical%20Hacking-%20SQL%20Injection.md) — Ethical Hacking
- [Ethical Hacking- Cloud Computing](Ethical%20Hacking-%20Cloud%20Computing.md) — Ethical Hacking

---

[↑ Back to top](#)