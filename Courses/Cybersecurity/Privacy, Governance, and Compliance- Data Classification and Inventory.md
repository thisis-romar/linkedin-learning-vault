---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: privacy-governance-and-compliance-data-classification-and-inventory
url: "https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory"
duration_minutes: 79
duration: 1h 19m
level: Intermediate
updated: 3/10/2023
learners: 5161
skills:
  - Privacy Compliance
  - Data Classification
  - Privacy
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEswW30-zvAbA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678306438163?e=2147483647&amp;v=beta&amp;t=G7MWEMeG1WXc7ZKfCmcqrdpn0irc9TzXIZ1-h94aURo"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Build a Privacy Program]]'
prev_courses:
  - '[[Building a Privacy Program in the Age of GenAI]]'
next_courses:
  - '[[Privacy, Governance, and Compliance- Data Sharing]]'
path_nav: '[{"path":"Build a Privacy Program","position":4,"total":5,"prev":"Building a Privacy Program in the Age of GenAI","next":"Privacy, Governance, and Compliance- Data Sharing"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/data-science
  - topic/database-management
  - skill/privacy-compliance
  - skill/data-classification
  - skill/privacy
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Privacy%2C%20Governance%2C%20and%20Compliance-%20Data%20Classification%20and%20Inventory.md)

![Privacy, Governance, and Compliance: Data Classification and Inventory](https://media.licdn.com/dms/image/v2/C4E0DAQEswW30-zvAbA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678306438163?e=2147483647&amp;v=beta&amp;t=G7MWEMeG1WXc7ZKfCmcqrdpn0irc9TzXIZ1-h94aURo)

# Privacy, Governance, and Compliance: Data Classification and Inventory

> Companies that drive revenue and growth based on user engagement also face challenges with data. The same data that enables these companies to build personalized features also needs protection from misuse and other security and privacy concerns. In this course, privacy and security leader and a digital product architect Nishat Bhajaria guides you through using a data governance architecture to cla

> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory) | 1h 19m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. The Privacy Landscape]]** (6 videos)
- **[[#3. 2. Data Classification]]** (7 videos)
- **[[#4. 3. An Inventory of Your Data and Risk]]** (3 videos)
- **[[#5. 4. A Deep Dive into Data Inventory]]** (6 videos)
- **[[#6. 5. Lessons from the Road: How to Do Data Inventory Right]]** (4 videos)
- **[[#7. Conclusion]]** (1 videos)

### 1. Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=0)** - In the fall of 2000, I came to the US as a teenager to pursue my undergraduate education.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=6)** As you may understand, I was trying very hard to fit in both culturally and officially.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=11)** That is why I was so excited when I got my social security card.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=15)** Finally, I had something that my American friends had had all their life.
>
> **[0:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=19)** I had no idea what social security meant and its privacy implications.
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=23)** I ran to the lounge in the dorm where my friends and I typically hung out and showed them the card as if it were a gold medal or a transcript with all A's.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=30)** At the time, I didn't realize that I was sharing my personal sensitive data with everybody in the dorm.
>
> **[0:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=35)** Thankfully, it was a simpler time and my then girlfriend grabbed my card and stopped me from sharing it further.
>
> **[0:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=41)** No one to my knowledge misused my data and thankfully I did not suffer an identity theft.
>
> **[0:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=46)** Yes, today I'm a published executive and a recognized expert in the privacy and security space but back then I did not understand the sensitivity of my data and how to make responsible decisions with it.
>
> **[0:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=57)** Today, companies and governments collect vast amounts of sensitive data from and about you and me.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=63)** Engineers and other specialists then analyze that data to build products and grow revenue.
>
> **[1:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=68)** They even copy all that data from one system to the other.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=71)** Think of it this way, rather than just a few friends, thousands of engineers and programs are looking at your social security card and other data again and again and sharing all of that data with thousands of other engineers and programs.
>
> **[1:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=83)** They could be doing this without even understanding the underlying data and its implications upon you.
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=88)** In order for companies to grow and build amazing products without harming their customers, it is critical that they carefully handle the data they collect and process.
>
> **[1:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=97)** And to do that they need to build a solid data governance strategy.
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=101)** My name is Nishant Bjaharia and I believe that privacy is about transparency and trust.
>
> **[1:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=106)** I bring to this course an understanding of how modern companies innovate and the experience of having built privacy programs at some of the US' largest businesses.
>
> **[1:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/welcome?u=76281980&t=115)** In this course I will help you start your governance program by classifying and inventorying your data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - in (1)

#### Who this course is for
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980&t=0)** - [Instructor] This course builds on my previous course on privacy, also hosted by LinkedIn.
>
> **[0:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980&t=4)** That course is titled Implementing a Privacy Risk and Assurance Program, and that course focuses on building a cross-functional privacy program and was fairly introductory in nature.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980&t=13)** This course is intermediate and provide a strategy, as well as techniques for execution.
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980&t=18)** It answers a key question, how do you enable data collection without hurting privacy?
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980&t=24)** I would recommend that users have some hands-on familiarity with privacy concepts before taking on this course.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980&t=30)** This course is aimed at chief information security officers, or CISOs, chief privacy officers, or CPOs, privacy architects, privacy engineers, and anyone in charge of making decisions around protecting customer data after it is collected.
>
> **[0:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980&t=43)** This course will also be extremely helpful for privacy attorneys, regulators, and policy makers so that they can understand how systems and data interact from a privacy standpoint.
>
> **[0:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980&t=54)** I would also highly recommend this course to journalists who cover data security and privacy.
>
> **[0:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/who-this-course-is-for?u=76281980&t=59)** At the end, they will better understand what building technical systems looks like from someone on the inside, someone who's been there and done that.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Data classification as part of data governance
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=0)** - [Instructor] You may have heard a new phrase during the rounds especially in conversations around security and privacy, data governance.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=6)** For someone like me who has been in this space for a decade plus, hearing the phrase data governance is like hearing organic, locally sourced, artisan.
>
> **[0:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=16)** These are words that people often use to sound sophisticated and educated without always understanding what they actually mean.
>
> **[0:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=22)** While it may be fine to use those other words incorrectly, when it comes to customer data and other critical assets, you need to understand what data governance means so you can build it correctly.
>
> **[0:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=32)** So let's define data governance correctly for the purpose of this course keeping privacy top of mind.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=37)** Data governance refers to the ability to collect, identify, track and protect customer and business data.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=45)** It includes risk analysis around the data, policies to manage the risk and tools to enforce those policies consistently at scale.
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=53)** Data governance is key for privacy since it'll allow privacy and innovation to complement rather than contradict each other.
>
> **[1:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=60)** Which brings us to a definition of data classification itself.
>
> **[1:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=64)** Data classification is the iterative process to identify privacy risk posed by individual data, as well as various combinations of data so as to protect them with risk appropriate tools and processes.
>
> **[1:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=76)** The key observations in this definition are as follows.
>
> **[1:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=79)** First, the classification process is continuous and iterative since data itself and its users are dynamic in nature.
>
> **[1:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=86)** Second, the purpose behind data classification is to protect data.
>
> **[1:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=90)** And third, protecting this data will require a combination of processes and tools.
>
> **[1:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=95)** Data classification is the foundational starting point for governance.
>
> **[1:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=99)** Without classifying data, you run the risk of inadequate or excessive processes and tools that in turn could lead to a privacy program that is costly as well as counterproductive.
>
> **[1:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=109)** When done correctly, data classification will help you apply risk analysis to data dynamically so that you can enforce privacy on an ongoing basis.
>
> **[1:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=118)** This will help you avoid a situation where privacy is seen as an inflexible blocker or a meaningless, compliance obsessed checklist.
>
> **[2:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=125)** So rather than using these phrases interchangeably, you should understand that classification is a necessary pre-condition for meaningful governance.
>
> **[2:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=134)** Now I want to make two more important points.
>
> **[2:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=137)** First, data classification requires an understanding of regulatory risk as well as an understanding of data processing from a technical perspective.
>
> **[2:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=145)** Therefore, the classification process will be most effective when stakeholders ranging from engineers, data scientists, attorneys, security, et cetera work collaboratively and continuously.
>
> **[2:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=158)** Second, data classification is important, not just for privacy.
>
> **[2:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=163)** Data classification will help you achieve other goals like security, protecting business intellectual property, data efficiency and quality, as well as managing storage costs on-prem as well as on the cloud.
>
> **[2:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance?u=76281980&t=175)** This is important since all too often privacy professionals miss out on making the case that classification and governance are about business maturity, not just privacy or as I like to say, privacy is a business enabler and the investment it requires will help you fuel growth while helping you build trust.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. 1. The Privacy Landscape

#### The legal and regulatory landscape
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=0)** - [Instructor] So you care about privacy, but find privacy laws confusing, right?
>
> **[0:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=4)** Well, you are not alone, but after this chapter, you will be better prepared.
>
> **[0:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=8)** Before we start, I will add that I'm not an attorney, so nothing in this course should be construed as legal advice.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=13)** So here's a question for you.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=15)** What is the difference between a good lawyer and a great lawyer?
>
> **[0:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=19)** Answer: A good lawyer knows the law, a great lawyer knows the judge.
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=24)** Privacy laws unfortunately are not that funny and they are changing fast and causing confusion everywhere.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=30)** Let's get some facts on the privacy legal landscape.
>
> **[0:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=33)** For this portion of the course, I'm citing research from the policy paper titled "Privacy Regulation and Unintended Consequences for Security."
>
> **[0:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=41)** This paper was published by the National Security Institute at the George Mason University.
>
> **[0:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=46)** Privacy had its first legislative milestone with the passage of the GDPR in May 2018.
>
> **[0:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=51)** Europe's General Data Protection Regulation or GDPR did the following.
>
> **[0:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=56)** It created data protection requirements.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=58)** It gave Europeans strong individual control over the collection, use and sharing of their personal information.
>
> **[1:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=64)** It expanded the scope of protected personal data.
>
> **[1:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=67)** Fourth, it granted individuals the right to access and delete their data.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=72)** And fifth, it defined what legitimate interests justify the use of consumer data.
>
> **[1:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=76)** In the US, the states seem to be driving the dialogue as far as privacy law is concerned.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=81)** All 50 states have enacted data breach notification laws and many are now looking at far-reaching privacy laws.
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=87)** The California Consumer Privacy Act or the CCPA signed into law on June 28th, 2018 creates an array of consumer privacy rights and business obligations with regards to the collection and sale of personal information.
>
> **[1:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=99)** The CCPA went into effect January 1st, 2020.
>
> **[1:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=103)** The California Privacy Rights Act or the CPRA, also known as Proposition 24 is a ballot measure that was approved by California voters on November 3rd, 2020.
>
> **[1:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=113)** It significantly amends and expands the CCPA and it is sometimes referred to as CCPA 2.0.
>
> **[1:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=119)** Other prominent efforts include the Washington Privacy Act, or WPA, which was introduced in January 2019 and has a framework that is fairly similar to the GDPR.
>
> **[2:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=129)** Illinois has an existing Biometric Information Privacy Act, or BIPA, and that is having a growing impact as well.
>
> **[2:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=136)** And finally, this is especially relevant since a growing number of companies are now collecting biometric data from consumers and employees.
>
> **[2:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=143)** This data includes fingerprints, iris scans and facial recognition information.
>
> **[2:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=148)** There are complex privacy laws at various levels of discussion in India, Brazil, and several other countries.
>
> **[2:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=154)** This has created two existential challenges for businesses who use data.
>
> **[2:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-legal-and-regulatory-landscape?u=76281980&t=158)** Let's look at these challenges.

> [!info]- Semantic Content
>
> **Env Vars:** ccpa (4), gdpr (3), cpra (1), wpa (1), bipa (1)
> **Code Keywords:** let (2), protected (1), delete (1), finally, (1)
> **CLI Commands:** find (1)
> **Versions:** 2.0 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Privacy regulations and ambiguity
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=0)** - [Narrator] As a consumer, I want privacy laws that protect my data from harm or inappropriate use.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=6)** As a tech executive, whose employers depend upon customer data for growth, I'm even more invested in strong privacy laws.
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=12)** This might sound surprising to folks who think that companies don't care about privacy laws.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=17)** For any business to succeed, they need to grow their customer base and consumer engagement.
>
> **[0:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=22)** This requires building trust with customers, partners, and other stakeholders across the world.
>
> **[0:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=28)** Privacy laws that are confusing and/or too theoretical are often extremely hard to implement.
>
> **[0:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=33)** It could be even more harmful when different privacy laws contradict each other.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=37)** Such laws can often be counterproductive because they slow down engineering innovation without making a meaningful difference in privacy protections.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=45)** For example, there is no universal approach to sensitive data in the US or in the jurisdictions overseas that have adopted comprehensive privacy regulation.
>
> **[0:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=54)** One federal agency defines it as, quote, "information that can be used to distinguish or trace an individual's identity," unquote.
>
> **[1:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=61)** This definition requires a case-by-case assessment of the specific risk that an individual can be identified.
>
> **[1:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=68)** Such a dynamic creates a lose-lose situation.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=71)** It makes the privacy teams look like blockers and creates a narrative that engineers and product managers do not care about privacy.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=78)** This is why data classification is critical, not just from an end-result perspective, but also from a process standpoint.
>
> **[1:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=85)** Data classification leads to three things.
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=87)** First, privacy risk definitions that apply to your business, customers, data and infrastructure.
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=94)** Second, the ability to customize those definitions to account for different privacy laws on an ongoing basis.
>
> **[1:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=100)** Third, a dynamic where privacy experts and others can collaborate continuously to classify data and tailor privacy protections and policies accordingly.
>
> **[1:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=110)** This approach will give you two benefits.
>
> **[1:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=112)** Let's look at them.
>
> **[1:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=113)** First, it'll help shape a privacy governance process that will adapt to changing laws and give companies a sense of stability and continuity.
>
> **[2:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=122)** Second, much as tax preparation software helps you file your taxes without understanding complex tax laws, the classification process will help your engineers.
>
> **[2:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=131)** Your engineers, and your product managers and other innovators will not need to worry about the details of privacy regulations.
>
> **[2:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-regulations-and-ambiguity?u=76281980&t=138)** Instead, they can focus on building amazing products while still avoiding privacy mistakes and surprises.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Privacy laws and security
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=0)** - [Instructor] Privacy and security are often thought of as interchangeable, or the same thing, but in reality, they are two different concepts, but very closely connected.
>
> **[0:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=9)** Without security, it is difficult, almost impossible, to provide privacy.
>
> **[0:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=14)** However, sometimes the tools and data that are critical for security can make protecting privacy even more difficult.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=21)** This is yet another reason why data classification is so critical.
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=24)** You can factor in security concerns when you classify data.
>
> **[0:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=28)** This will help you not only protect your data from breaches and exfiltration, but also avoid internal misuse.
>
> **[0:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=34)** Here is a specific use case to consider.
>
> **[0:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=36)** Let's assume you build an app where you collect phone numbers and IP addresses to customize the user experience.
>
> **[0:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=43)** Your engineers and product managers would probably connect those data points to other customer data, like email, home address, et cetera, to drive user engagement.
>
> **[0:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=52)** This is where things could get pretty tricky.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=55)** Your security team may also want to use phone numbers and IP addresses for other reasons, like ascertaining whether the user is real, or a bot, associating the devices the customer typically uses to access the platform, and then identify usage patterns in terms of time of day, location, et cetera.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=71)** Given these distinct use cases, you may need to consider the following.
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=75)** Should the security and product teams be able to access the same personal data for the same time periods?
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=81)** Second, does the user know how their data will be used and by whom?
>
> **[1:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=85)** Third, how will you avoid mission creep?
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=88)** That is a situation where data collected for security is then used for personalization.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=93)** Fourth, how will you prove to customers and external auditors that you are transparent during data collection and effective in access management?
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=101)** The relationship between security and privacy has gotten globally more complicated, which makes classification even more critical.
>
> **[1:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=107)** Building a data classification that reflects these diverse use cases will help you protect your customers while growing your business with a sense of stability.
>
> **[1:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=116)** Let's look at an example.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=117)** The WHOIS system makes identifying and contact information of domain name registrars publicly available globally.
>
> **[2:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=124)** WHOIS data has been a critical tool for security and for fraud prevention, and in tracking down bad actors across the internet.
>
> **[2:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=131)** But the broad scope of the GDPR may create problems in administering this critical tool.
>
> **[2:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=137)** Additionally, California CCPA requires that businesses make information available in a usable format, so customer can transmit data to another entity.
>
> **[2:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=146)** This well-meaning policy requirement can cause security issues.
>
> **[2:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=149)** As privacy advocates, like the Electronic Frontier Foundation, or the EFF, have explained, ported data can contain extremely sensitive information, and companies must be clear about the potential risks before users move this data to another service.
>
> **[2:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=163)** The risks include theft, or exposure of data that has been centralized for sharing, or transferring it to the wrong individual.
>
> **[2:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=170)** Here's one more example.
>
> **[2:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=172)** The GDPR introduces a right for individuals to have their personal data erased.
>
> **[2:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=177)** The right to erasure is also known as the right to be forgotten.
>
> **[3:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=181)** This could lead to security issues as well.
>
> **[3:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=183)** First, data deletion would almost certainly hurt the quality of data sets.
>
> **[3:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=188)** For example, the permanent deletion of underlying records connected to a user's activities, even where those activities are not identifying, could prevent the type of long-term analysis of behavior that could be used to identify new potential cybersecurity threats.
>
> **[3:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=203)** This lack of historical data could create, or perpetuate important security vulnerabilities over long periods of time.
>
> **[3:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-laws-and-security?u=76281980&t=209)** The rest of this course will teach you how to address these challenges by helping classify data, and then inventory that data, so that you can protect privacy while retaining usability.

> [!info]- Semantic Content
>
> **Env Vars:** whois (2), gdpr (2), ccpa (1), eff (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Privacy and the user
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=0)** - [Instructor] With all this talk about big data and privacy laws, it is often easy to forget about the user.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=6)** The user, in my opinion, is the most important player.
>
> **[0:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=8)** Without them, there is no data, no engagement, no monetization and no growth.
>
> **[0:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=14)** It is critical that we consider how implementation of privacy tools could affect the end user experience.
>
> **[0:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=20)** Intelligent and thoughtful data classification can help balance user experience on the one hand, and privacy protections on the other.
>
> **[0:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=28)** As an example, let's consider a streaming service.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=31)** Imagine a privacy law that states that if a user cancels their subscription, the streaming service should delete all the data they ever collected from that user.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=40)** While this may provide maximal privacy, it misses a key insight around human nature.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=45)** A customer may cancel their subscription for many reasons like their favorite show being canceled, for example.
>
> **[0:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=50)** In many cases, the same user may return to the service in a week or two when they see another show that they like.
>
> **[0:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=57)** In this example, when they return and try to reactivate their account, they may wish to get recommendations based on all of their past activity.
>
> **[1:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=66)** They may even want to continue to pay using credit cards they had previously stored in the account profile.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=71)** If they return a week or two after canceling the service and find out all of their data is gone, they may get frustrated and never return.
>
> **[1:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=79)** Or they may stay, but get a suboptimal customer experience, which is bad both for the user and the streaming service.
>
> **[1:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=86)** I cannot imagine a single privacy law in any country that can account for a use case like this or many others that are specific to a company, a user, a region, culture, context, et cetera.
>
> **[1:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=99)** This is where customizing the data classification to account not just for privacy, but the real business and the real customers is critical.
>
> **[1:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=107)** In the situation we just discussed, you could classify the data for the user differently depending on their tenure.
>
> **[1:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=113)** If the user has been with the streaming service for just a few weeks, you could assume that the user may not return since they have not yet built any brand loyalty.
>
> **[2:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=121)** You could classify their data as high risk, so as to delete it as quickly as possible post cancellation.
>
> **[2:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=127)** But if the user has been with the service for years, you could assume that the user may return in a few weeks since starting from scratch with a different service may not be easy for that user.
>
> **[2:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=136)** You could classify their data as low risk so as to delete all the data maybe six weeks after cancellation and after sending them a discount coupon so as to maybe entice them back.
>
> **[2:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=147)** In this fashion, you can account for privacy and business continuity at the same time.
>
> **[2:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=151)** Data classification allows you to be compliant and convenient at the same time.
>
> **[2:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/privacy-and-the-user?u=76281980&t=156)** It allows you to shape a governance strategy that is privacy sensitive and user friendly.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (1), continue (1), return. (1)
> **Analogies:** imagine (2), for example (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Data classification scenario
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980&t=0)** - [Instructor] In order to understand how data classification helps protect privacy as well as enable the business, I will now offer you a real-world scenario that we will together work through.
>
> **[0:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980&t=14)** This is not a comprehensive end-to-end example but will give you a practical flavor about how data classification requires context and collaboration.
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980&t=23)** Think of this as a warm-up exercise before we do a hands-on classification exercise.
>
> **[0:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980&t=28)** Let's assume you need to classify data for a company that runs an online retail business.
>
> **[0:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980&t=32)** They collect IP addresses so as to analyze how shopping behaviors map to geographic locations.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980&t=38)** Let's also assume the following classification tiers.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980&t=40)** Level 1 for data that is highly privacy sensitive, Level 2 for data that is less privacy sensitive, and Level 3 for data that is available in the public domain.
>
> **[0:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980&t=49)** What considerations will you need to account for when you classify this data?
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenge-data-classification-scenario?u=76281980&t=53)** Take a few minutes to write down your thoughts, and I will present my ideas in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), public (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Data classification scenario
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=0)** - [Instructor] Before solving the Challenge Question, let's revisit some key details.
>
> **[0:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=9)** The challenge here is to classify IP address based on privacy risk along three levels, ranging from level one to level three.
>
> **[0:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=16)** Level one maps to the highest privacy risk, and level three to the lowest privacy risk.
>
> **[0:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=20)** Here are my top considerations: IP address maps to physical location.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=25)** If you know someone's physical location, you may be able to identify them and reach them.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=29)** The privacy risk based on these possibilities seems high.
>
> **[0:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=32)** So by that logic, IP address should be classified as level one, right?
>
> **[0:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=36)** Well, maybe the answer is, it depends.
>
> **[0:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=39)** It depends, again, quote unquote, it depends, is an answer to many, many classification questions.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=45)** When it comes to IP addresses, here are some considerations that may affect privacy risk.
>
> **[0:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=50)** First, how confident are you in the correctness of the IP?
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=53)** The accuracy depends on factors like any VPNs that the user may or may not have set up.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=58)** Second, your fiber optic cable leads to your local ISP data center, which is often located 10 to 40 kilometers from your real position.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=65)** That also means that all your devices connected via wifi could have an inaccurate location.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=70)** IP accuracy is directly correlated to privacy risk, so simply classifying IP addresses as level one without considering accuracy may lead to unintended consequences.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=81)** Second, what physical location does the IP address map to assuming the IP address is correct?
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=87)** If it maps to a college dorm or a hotel occupied by hundreds or thousands of people, the privacy risk that you could identify a specific person may be low.
>
> **[1:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=95)** If it maps to a home in a small town with a population of less than a thousand people, the privacy risk that you could identify a specific person may be high.
>
> **[1:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=103)** Third, do you have other data in your system that could be combined with the IP address data?
>
> **[1:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=109)** For example, if you could join the IP addresses with phone numbers or email addresses, you may end up increasing the re-identification risk.
>
> **[1:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=116)** Some of this data may be freely available on the internet, may be present all across your systems, in which case it could be joined with IP addresses very easily; or third, may vary when it comes to accuracy on a case-by-case basis.
>
> **[2:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=130)** Fourth, how confident can you be that the IP address is representative of the user's location?
>
> **[2:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=135)** It depends.
>
> **[2:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=136)** If the user works in sales or consulting, Their IP address may change frequently because they travel.
>
> **[2:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=141)** This may mean that the utility of the IP address in identifying the user may be high, but not in terms of locating them.
>
> **[2:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=147)** The privacy risk therefore may not always be high.
>
> **[2:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=150)** So here are the key takeaways from this exercise.
>
> **[2:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=153)** Privacy is contextual, and therefore, so is data classification.
>
> **[2:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=156)** Data classification for a specific data element could depend on other data.
>
> **[2:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=160)** Third, given the dynamic nature of data, classification will require iteration since the privacy risk will change as the underlying data changes.
>
> **[2:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solution-data-classification-scenario?u=76281980&t=168)** Finally, classification will require collaboration across silos and teams to be accurate and actionable.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), let (1), finally, (1)
> **Definitions:** is an  (1), means that (1)
> **Env Vars:** isp (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. 2. Data Classification

#### How classification reduces risk around unstructured data
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=0)** - [Lecturer] Data classification and inventory offer critical benefits to companies like the following.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=5)** First, insight into how a distributed and democratized engineering community within the company uses data.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=11)** Second, a more continuous alignment between organizational data use and requirements under data protection laws.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=17)** And third, the ability to tailor data protection techniques and tools, and then inform engineering roadmaps for the company as a whole.
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=24)** Most companies start out with no process to manage their data collection, and then identify how much risk that data poses to security and privacy.
>
> **[0:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=33)** This is especially a problem for unstructured data, which forms a big portion and a growing portion of what companies store in their data warehouses for analysis purposes.
>
> **[0:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=42)** According to [TechRepublic.com](https://TechRepublic.com), nearly 80% of the data companies collect tends to be unstructured.
>
> **[0:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=47)** Because of its nature, unstructured data is more difficult to analyze than structured data and not easily searchable, which is why it wasn't useful for organizations until recent years.
>
> **[0:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=57)** Today, however, we have tools that analyze unstructured data.
>
> **[1:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=60)** These tools are powered by AI that is artificial intelligence, and these tools were created specifically for the purposes of driving insights from this unstructured data.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=70)** Without data management strategies and guidance in these areas, companies run the following risks.
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=75)** First, not capitalizing on the unstructured data they do collect.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=78)** Second, failing to keep up with competitors.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=81)** And third, storing more unstructured data than they really need, and thereby running up the risk of security and privacy and paying extra when it comes to data center costs.
>
> **[1:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=90)** So besides privacy, a sound data governance strategy that includes unstructured data is critical for business competitiveness as well.
>
> **[1:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=98)** Remember, all these challenges exist even as companies are collecting more and more unstructured data as we speak.
>
> **[1:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=104)** This is a bit like loading your shopping cart even more while not knowing exactly what you need for your shopping and whether your credit card will be able to cover your bill.
>
> **[1:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=112)** This is where data governance is critical.
>
> **[1:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=114)** Getting started with our data governance program can seem daunting, so let's start with three simple steps to help drive your program.
>
> **[2:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=120)** First, classify your data and set governance standards.
>
> **[2:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=124)** This is part of the planning phase.
>
> **[2:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=126)** Second, inventory of data.
>
> **[2:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=128)** This is where you get into execution mode.
>
> **[2:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=130)** And finally, enforce data privacy tools, techniques, and standards.
>
> **[2:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=134)** This is part of what I call continued execution.
>
> **[2:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=137)** I like to call this entire phenomenon privacy by data.
>
> **[2:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-classification-reduces-risk-around-unstructured-data?u=76281980&t=140)** You may have heard the phrase privacy by design, but given that so much of design is driven by data you need a governance program that applies to data as early in the collection phase as possible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **URLs:** [techrepublic.com](https://techrepublic.com) (1)
> **Definitions:** is a  (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [lecturer] (1)

#### How can data classification help you?
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=0)** - When I started one of my earliest data governance programs, I got two flavors of complaints from C-level leaders.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=5)** First, they would tell me, we have so much data.
>
> **[0:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=8)** We've always had so much data, and there's not been a problem so far, so why do we need a program now?
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=13)** Second, they would tell me, we have way too much data already.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=17)** Is it just too late?
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=18)** You do not want a decision around data governance slowed down by analysis paralysis, nor can you keep hoping for some magical bullet to appear somewhere down the road to slay this dragon of indecision.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=29)** Your response to the C-suite should be that data governance is about maturing as an organization and moving from uncertainty to risk.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=37)** Let's look at the risk v. uncertainty trade off.
>
> **[0:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=39)** Uncertainty can paralyze you.
>
> **[0:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=41)** Using data governance, you can convert uncertainty into quantifiable and measurable risk.
>
> **[0:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=46)** Then, you can neutralize risk.
>
> **[0:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=48)** First by identifying it, quantifying it, and finally by managing that risk with controls.
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=53)** The goal of a privacy program is to enable ethical and risk sensitive innovation.
>
> **[0:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=57)** As a privacy leader, your job is to figure out exactly what the company needs to do and then find a way to do that with the least amount of data possible.
>
> **[1:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=66)** Therefore, our data classification process that continually refreshes and updates itself is critical.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-data-classification-help-you?u=76281980&t=71)** That way, you can build privacy and risk management tools that reflect the business and its continual evolution.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - when (1)

#### Data classification as part of data governance
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=0)** - [Instructor] Data classification can help drive a much more deterministic and data-driven access management program.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=5)** This is one example of building sound data governance rather than making shortsighted decisions that will produce suboptimal long-term outcomes.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=13)** Privacy programs could take two distinct access management approaches.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=17)** The first, a lockdown model, the second, a model I call tooling, trust, and training.
>
> **[0:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=22)** The lockdown model will require engineers and many others to go through very strict controls to access data.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=27)** While this may be practical in some companies like healthcare companies for example, it could also have unintended consequences.
>
> **[0:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=34)** In a fast-paced environment, as the scale of data grows and as several teams work together on that data, the lockdown approach will slow down the business even when the data being accessed is not privacy sensitive.
>
> **[0:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=46)** For example, I have a close friend who works in customer service.
>
> **[0:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=49)** She tells me that callers often get annoyed when they have to verify their identity before getting access to their financial details.
>
> **[0:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=57)** Let me be very clear, strict access control is absolutely essential for financial, healthcare and other sensitive data.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=63)** That said, you also need to apply privacy protections that are proportionate to the sensitivity of the data itself.
>
> **[1:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=69)** Which brings me to the second model which is the combination of three Ts.
>
> **[1:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=73)** First, tools like encryption, multifactor authentication, deletion APIs, et cetera.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=78)** Second, training and third, trust where you build an overall culture of trust that will honor customer data privacy.
>
> **[1:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=84)** The right approach is often a combination of both the lockdown model and the three T model.
>
> **[1:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=89)** You will want to lock down some data that is extremely sensitive and if leaked or improperly accessed could hurt your customers and their trust in your business.
>
> **[1:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=97)** For the remaining data, you will want protections mapped to risk and use cases.
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=101)** For an overall program to work at scale, you need a classification of all the major types of data that you collect as a business.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=108)** Let's look at an example that deals with an issue that most companies face.
>
> **[1:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=111)** How do you verify that users trying to access sensitive data are who they say they are?
>
> **[1:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=116)** The tools to help solve this are called AuthN and AuthZ.
>
> **[1:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=119)** For data that is less sensitive, simply verifying somebody's identity that the user is an employee of the company may be sufficient.
>
> **[2:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=126)** You can do this using AuthN or authentication.
>
> **[2:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=129)** AuthZ or authorization answers a different set of questions.
>
> **[2:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=132)** For example, what should this user or system be allowed to access?
>
> **[2:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=136)** We can see why authentication and authorization are critical for privacy, but how can data classification help deploy these tools more strategically, thoughtfully and selectively?
>
> **[2:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=145)** More and more companies are moving to a DevOps model.
>
> **[2:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=148)** This model has changed digital business in important ways.
>
> **[2:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=151)** First, there is a push to move away from on-prem IT towards a cloud-first future.
>
> **[2:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=156)** This has made storing data much easier and as a result, companies collect even more data.
>
> **[2:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=161)** Further in the DevOps model, your infrastructure is powered by code rather than purely by hardware.
>
> **[2:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=166)** This enables operations teams to configure machines as code.
>
> **[2:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=169)** These machines need access and privilege to do what they were programmed to do.
>
> **[2:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=172)** It is becoming increasingly difficult for security teams to track who has access and to what, especially in cases where machine access starts to exceed human access.
>
> **[3:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=182)** With a data classification in place, you can deploy a hybrid strategy that might look like the following, implementing role-based access controls or RBAC for user to system and system to system permissions management.
>
> **[3:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=194)** Second, keeping critical access keys out of code, off of hard drives and out of code repos like GitHub and GitLab.
>
> **[3:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=200)** Third, generating audit reports to demonstrate regulatory compliance around access and authorization.
>
> **[3:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=206)** Fourth, managing SSH keys and/or secrets at scale across dynamic systems.
>
> **[3:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=211)** And fifth, gaining visibility into the total set of cloud systems in use and seeing who has access to them.
>
> **[3:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=216)** These are all extremely critical tools and appropriate for sensitive data, but not for all data and all systems at all times.
>
> **[3:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-classification-as-part-of-data-governance-19429699?u=76281980&t=224)** A prudent and practical approach would have you apply AuthZ to very sensitive data while other data like meeting agendas, public earning reports, data that is already de-identified could get by with just AuthN, where anyone who's identity you have confirmed can access that data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), require (1), public (1)
> **Analogies:** for example (3)
> **Env Vars:** rbac (1), ssh (1)
> **Tools:** github (1), gitlab (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** ssh (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### How to shape the data classification process
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=0)** - [Instructor] Let's discuss how to shape an end-to-end data classification process that you can deploy and adapt in your company.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=6)** In modern businesses, data classification is typically the outcome of detailed investigations and negotiations.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=13)** The key players include privacy legal, privacy engineers, security, engineering, product management, data scientists, et cetera.
>
> **[0:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=20)** Although privacy is seen widely as a legal area, it would be a huge mistake to only let the legal team drive this classification process.
>
> **[0:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=28)** The lawyers may take an overly defensive approach by applying the law without business context or may give engineers too much of a free hand believing in their own ability to win in court.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=38)** Either approach is suboptimal.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=40)** Here is how I've run the classification process at three different companies, all of which had very different cultures.
>
> **[0:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=46)** First, I worked with privacy legal to get a sense of how they would classify data.
>
> **[0:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=51)** Concurrently, I would also be working with engineering, product management and data science to understand what they needed for legitimate operational and analysis purposes.
>
> **[0:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=59)** Second, I would produce a very initial classification based on the legal focused input from the attorneys and real world utilization input from engineering and other stakeholders.
>
> **[1:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=69)** Third, I would open up the draft of this classification for review so that all the key stakeholders across the company could comment at once on areas of disagreement.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=78)** This step is critical since you will uncover areas where key stakeholders may disagree on how privacy critical a specific element of data is.
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=87)** You may find, for example, that engineering believes that a data ID is not privacy sensitive since it is internal to the company and will not identify a customer externally.
>
> **[1:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=96)** The legal team may disagree since it may be possible to join that ID to information that will personally identify a customer like an email address.
>
> **[1:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=104)** You can bridge this gap by applying all three techniques so that only the appropriate teams can access and join these tables while others cannot.
>
> **[1:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=111)** Additionally, you may find that different teams may understand the same concepts differently.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=117)** The legal team may believe that encryption may suffice.
>
> **[2:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=120)** While security teams may consider that encryption to be inadequate, depending upon the encryption algorithm used or the key management techniques deployed.
>
> **[2:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=127)** The key takeaway here for you is that data classification will necessitate and help create partnerships in place of silos.
>
> **[2:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-to-shape-the-data-classification-process?u=76281980&t=134)** These partnerships will help build a much more accurate understanding of risk and then help address that risk for the business as a whole.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** let (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenges of data classification
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=0)** (upbeat lilting music)
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=5)** - [Instructor] Let's walk through a detailed example of how privacy teams can face challenges before they can settle on a data classification.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=11)** In our use case, the company runs online retail and provides customers the ability to browse, compare, and buy products, and then ship those products to chosen addresses.
>
> **[0:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=20)** Customers can access these products via an app or the website per their preferences.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=25)** In order to conduct business, the company would need, as you can probably imagine, data from customers.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=31)** In order to conduct operational business with the user the company might need the following: name, birth date for possible compliance with laws like COPPA, address, so as to ship the merchandise.
>
> **[0:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=41)** Email for authentication and login purposes, and to confirm order status.
>
> **[0:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=46)** Phone for possible two-factor authentication, status updates, et cetera.
>
> **[0:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=50)** IP addresses, device info to check for fraud and other analysis.
>
> **[0:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=54)** And finally, payment information to conduct payments, refund, et cetera.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=58)** As you can imagine, a lot of these fields individually and collectively can be very, very sensitive and help identify a user.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=65)** Let's see what a data classification process for this business might look like.
>
> **[1:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=69)** Now, if you looked at this purely through a legal and risk based lens, you could make an argument for the lockdown model.
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=75)** For a specific customer, you could only be able to retain data for a specific order only for as long as that order was in progress, and only teams in charge of orders could access that data.
>
> **[1:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=85)** Once a customer received their merchandise and the refund period expired, all of that data would be deleted.
>
> **[1:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=91)** In this context, all the fields, all the data would be labeled very sensitive.
>
> **[1:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=95)** In reality, a growing business would want to conduct analysis on purchases like, what are the buying patterns based on demographics and location?
>
> **[1:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=103)** What products are purchased regularly versus seasonally?
>
> **[1:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=106)** How does usage of the app versus the website correspond to purchases?
>
> **[1:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=111)** How do we identify patterns of regular low dollar shoppers versus occasional high dollar shoppers?
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=117)** These insights, and many others like them, will help drive future investments.
>
> **[2:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=122)** And, in order for these insights to be meaningful, you will need data from a lot of users over a protracted period of time.
>
> **[2:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=129)** So as you can imagine, there is some tension between a very privacy focused approach where you want limited retention and limited access, and a business focused approach that requires higher levels of access and retention.
>
> **[2:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=140)** Seems like a standoff, doesn't it?
>
> **[2:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/challenges-of-data-classification?u=76281980&t=142)** Well, not necessarily.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), finally, (1)
> **Analogies:** imagine (3)
> **CLI Commands:** make (1)
> **Env Vars:** coppa (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat lilting music) (1)

#### Solutions for data classification
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=0)** - [Instructor] To solve this challenge, let's now dive deep into the privacy risks and business needs to classify data using a more practical lens.
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=12)** The goal here, remember, is to finalize the data classification such that we can protect privacy and also optimize for customer enablement and business success.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=21)** This is where a cross-functional approach can create a win-win situation.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=25)** Here is one way to look at this.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=27)** You could create an operational database with limited retention and access where data is stored for individual users.
>
> **[0:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=33)** You could then create an analysis database with longer retention periods and relaxed access, but with data aggregated for a large number of users.
>
> **[0:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=41)** As I have mentioned before, in order to make strategic business investments, you should never need to look at a specific user's shopping habits.
>
> **[0:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=49)** Besides being extremely creepy from a privacy standpoint, you will end up with bad business outcomes.
>
> **[0:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=54)** By splitting the data and aggregating it, you can keep individualized data separately from aggregated data and use it appropriately.
>
> **[1:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=61)** Good business and good privacy go hand in hand.
>
> **[1:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=64)** Keep this in mind the next time someone tells you that privacy is nothing but a blocker.
>
> **[1:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=68)** So what does such a data classification look like in this brave new world of ours?
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=72)** Under very sensitive, you could list individualized data that could identify a user, like name, address, email, phone number, IP and device info, and of course payment information.
>
> **[1:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=83)** In my experience, payment data is always rated at the highest level of sensitivity.
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=87)** It would be retained in the operational database for short periods of time with tightly controlled and audited access.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=93)** Now, for the analytics database, you could aggregate purchases along the following lines: birth years, zip codes or GPS coordinates, phone area codes, device types, purchase date ranges, et cetera.
>
> **[1:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=106)** That way you could perform the sort of analysis we described earlier without tying any of those purchases back to a specific user.
>
> **[1:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=113)** You could now store this data for longer periods of time and allow access to a range of stakeholders, ranging from business teams who are in charge of inventory to security teams who might protect the company from fraud.
>
> **[2:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/solutions-for-data-classification?u=76281980&t=123)** This is how a data classification process evolves over time to balance privacy needs and overall business goals.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** make (1)
> **Env Vars:** gps (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Thought experiment: A sequential data classification
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=0)** - [Instructor] So here's a question.
>
> **[0:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=1)** Is there a situation where you can do data classification sequentially?
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=5)** So why not have the legal team classify data and then have the technical team focus on all the implementation details?
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=12)** Seems neat and organized right?
>
> **[0:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=14)** Well, not really.
>
> **[0:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=16)** I cannot think of a single situation where data classification can work unless all of these partners and teams work together.
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=23)** I have tried in one of my earlier attempts to have the legal team classify data and then have the engineering team implement and then had the legal team weigh in.
>
> **[0:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=32)** This was supposed to be a compromise to save everybody some time.
>
> **[0:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=35)** In theory, this sounded great.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=37)** In practice, things didn't go so well.
>
> **[0:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=39)** There were two problems with this approach.
>
> **[0:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=41)** First, the process was very inefficient and took too long.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=45)** Second, part of a privacy of our culture requires creating a common connecting tissue between teams that may operate in distant silos but need to share context for collective progress.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=55)** Trying to disconnect these teams is like postponing today's headache for tomorrow's migraine.
>
> **[1:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=60)** First, attorneys don't always understand the technical impact of their classification decisions.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=65)** And second engineers trying to interpret those decisions without legal context is a recipe for disaster.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=71)** My advice, do not treat data classification as a one-time exercise.
>
> **[1:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=76)** Shape it as a continuous exercise so that the legal and other teams can teach each other and help each other scale.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=81)** Having these teams sit at the table at the same time may take some more time initially but it will help save time in the long run.
>
> **[1:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=89)** What next?
>
> **[1:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=90)** In modern business classifying data is not sufficient.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=93)** In order to protect your data you need to apply that classification to data that you will collect going forward and to the data you have already collected going back.
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=101)** This process is known as data inventory.
>
> **[1:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=104)** Data inventory is a second step in data governance.
>
> **[1:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=107)** This process can be a bit technical and will require an infrastructural component.
>
> **[1:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/thought-experiment-a-sequential-data-classification?u=76281980&t=112)** We will focus on data inventory next.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), known as (1)
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)


### 4. 3. An Inventory of Your Data and Risk

#### What is data inventory?
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=0)** - [Instructor] Data inventory is exactly what it sounds like.
>
> **[0:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=3)** It is a record, an inventory of data across all your storage systems.
>
> **[0:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=8)** This image gives you a sense of what data inventory entails.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=11)** Think of it this way, conducting an inventory of your data is like starting with a messy and mixed stack of books and then arranging them slowly in a library.
>
> **[0:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=19)** The goal is to end up with a collection of books that is searchable and therefore usable.
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=24)** There are additional intricacies to consider when you inventory your data from a technical standpoint.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=29)** The most effective way to meaningfully inventory data is to tag it such that you will know not only what the data is but also the risk the data carries.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=38)** The good news here, and this is good news, is that you can use the data classification exercise we just completed as a starting point for the data tagging process.
>
> **[0:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=47)** In order to use your data classification or tag data in your systems, you should establish clear criteria for how to structure these tags.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=55)** The classification tags should serve the following purposes.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=58)** First, they should be compatible with and supportive of external regulatory requirements like GDPR, CCPA, et cetera.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=65)** But let me explain this a bit more given the criticality of data inventory from a regulatory standpoint.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=71)** Note we are living in a world of regulatory flux with new laws, new regulations coming from many different directions at the same time.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=78)** It would not be feasible to have to constantly edit your tags every single time a new law is passed.
>
> **[1:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=84)** As we will soon see, data inventory is expensive in terms of time and infrastructure.
>
> **[1:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=89)** Additionally, the inventory tags will help you identify data and apply privacy tools accordingly.
>
> **[1:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=94)** So repeatedly changing the tags will be expensive and disruptive.
>
> **[1:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=98)** This is why I advised that the data classification process be collaborative and continuous.
>
> **[1:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=103)** As we discussed a short while ago, your data classification is a reflection of risk.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=108)** Your legal team should use their regulatory lens to define that risk.
>
> **[1:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=112)** That way your tax can map to privacy risks that actually impact your users and your business, rather than just one specific privacy law.
>
> **[2:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=121)** Working closely with the legal team will ensure that your classification and therefore consequently your tags will remain operative and fresh even as the laws change.
>
> **[2:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=130)** Here are some additional considerations to apply to the tags.
>
> **[2:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=133)** They should be applicable to all data in all states, like data at rest, data and transit data and use, et cetera.
>
> **[2:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=139)** Tag definition should be canonical and ambiguous and machine readable.
>
> **[2:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=143)** And finally, they could be used either individually, example, for an individual column or API parameter, or as a group that is represented as comma separated values where applicable like for an entire dataset or a full API.
>
> **[2:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/what-is-data-inventory?u=76281980&t=156)** We will now look at data inventory as part of overall data governance.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), gdpr (1), ccpa (1)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is a  (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### Data inventory and data governance
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=0)** - [Instructor] As I've said earlier, data privacy and business maturity both requires sound governance.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=6)** Two key components of data governance are understanding risks and mitigating those risks.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=11)** Data classification helps us understand the risk, but that is not sufficient by itself, right?
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=15)** You need to modify the data to reflect the risk, which brings me to data inventory.
>
> **[0:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=20)** Data inventory is, in the end, a tool that maps the privacy risk associated with the data to control the systems that would mitigate that risk.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=29)** For example, let's assume you're implementing an encryption algorithm to protect sensitive data.
>
> **[0:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=34)** That way, in theory, if a bad actor were to get a hold of a server containing user data, you could avoid them being able to access data from that server.
>
> **[0:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=43)** To take this example further, let's think of how you could apply this algorithm in the context of a retail business.
>
> **[0:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=49)** This business would typically collect email addresses to confirm order status and physical addresses to ship the orders.
>
> **[0:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=56)** In this scenario, here are three things to consider.
>
> **[0:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=59)** Implement a single layer of encryption for addresses in large cities, since people there may order more frequently.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=65)** However, in order to avoid inappropriate use of data and other kinds of abuse, you could change the encryption keys frequently.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=72)** That way, engineers can access the data quickly when they need to, but have to provide a new key for future access.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=78)** This ability to balance privacy and efficiency is a key example of data governance.
>
> **[1:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=83)** You may also want to implement multiple layers of encryption for addresses in small towns, but without changing the keys too frequently.
>
> **[1:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=89)** Those communities are often small and customers may order less frequently, but in large quantities, to save on shipping costs.
>
> **[1:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=96)** In this situation, data governance will reduce the likelihood of abuse by making initial access a bit more difficult.
>
> **[1:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=102)** This control will give privacy teams more time and more flexibility to stop inappropriate access.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=108)** However, once granted access, legitimate users can access address data to help customers and perform analysis.
>
> **[1:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=115)** Once again, this ability to balance privacy and efficiency is an example of good data governance in process.
>
> **[2:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=122)** Doing this at scale for millions of data points, millions of programs stored in thousands of data stores and used by thousands of engineers, is difficult to put it mildly.
>
> **[2:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=131)** Doing so in a way that does not create unnecessary friction in the business is even more difficult, to put it even more mildly.
>
> **[2:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=138)** This is why data inventory is critical.
>
> **[2:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=140)** It'll help drive data governance using automation at scale.
>
> **[2:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=143)** It'll help avoid a situation where you have to choose between data privacy and business efficiency.
>
> **[2:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=148)** It'll also help avoid a situation where you feel like you have to choose between data protection and business innovation.
>
> **[2:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-data-governance?u=76281980&t=155)** To understand this even further, we will now look at some key building blocks for data inventory, like creating the right templates and the right tags.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### How can you prep for data inventory?
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=0)** - [Instructor] Two simple steps will help you and your teams set up data inventory smoothly.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=5)** These steps include data inventory by storage systems and, second, data inventory by data owners.
>
> **[0:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=11)** In preparing your teams to inventory their data by storage system, you will want to hand them a template that looks like this.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=17)** Each storage unit should be identified by storage system like Hive, Kafka, Vertica, SQL databases, S3 bucket, et cetera.
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=24)** Each system should then be inventoried using the following attributes: storage size which includes volume, structured versus unstructured data by percentage, data classification tier, as we discussed before.
>
> **[0:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=35)** Note: If your storage unit has data with multiple classifications, you probably should apply the most high-risk tier, but please consult your legal team for that.
>
> **[0:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=43)** And, finally, whether or not the unit contains personal data.
>
> **[0:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=46)** However, it is not sufficient to inventory your data by storage systems alone.
>
> **[0:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=51)** Oftentimes, storage systems are owned by multiple stakeholders.
>
> **[0:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=54)** You may also find that some storage systems are not owned by anyone, yet multiple engineers use them to store data on an ongoing basis.
>
> **[1:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=61)** In order to get an accurate view of your systems, you will want to inventory your data by data owner as well.
>
> **[1:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=67)** The template for that is as follows: total size, that is volume, unit count, that is number of services, users, accounts, or datasets, structured versus unstructured, as we just saw, classification by tier, personal data, that is yes or no.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=81)** As you can see, the components are very similar to what we saw in the previous use case.
>
> **[1:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=85)** Now, here's a note on using phases like data owner, quote-unquote.
>
> **[1:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=89)** I'm not implying that someone collecting customer data now owns it.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=93)** As a privacy and security leader, I believe that the true owner of the data is a user whose data it is.
>
> **[1:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=98)** That said, in this context, a data owner is the person or team accountable to protect the data and use it in line with the expectations of the user whose data it is.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=108)** I also wanted to touch upon the best practices in creating tags.
>
> **[1:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=111)** This is critical since the tag will be the link between the data classification, privacy risk, and the controls used to address that risk.
>
> **[1:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=118)** Let us now look at an example of what your tags could look like.
>
> **[2:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=121)** As you can probably figure by now, your tags are representations of your data classification.
>
> **[2:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=127)** You can configure your tags with retention policies so that your automated deletion programs, for example, can process deletion at scale.
>
> **[2:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=134)** To reduce the length of the tag, the following tricks could help.
>
> **[2:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=137)** First, reduce the domain to its one-character prefix; for example, b for business and p for personal.
>
> **[2:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=143)** Exceptions: If the component of the category name is level one, level two, or level three, the reduce form could be l1, l2, l3 to shrink the size of the tag.
>
> **[2:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=151)** Otherwise, you might want to reduce the first component of the category name to its two-character prefix like, for example, board becomes bo, government becomes go, et cetera.
>
> **[2:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=160)** For the remaining components in the category name, you could reduce each to its two-character prefix; for example, material becomes ma, id becomes id, et cetera.
>
> **[2:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=170)** The separator between the domain and category name components should either be the underscore or the hyphen.
>
> **[2:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=175)** These are both option, but you probably should keep them consistent with the character choice like underscore everywhere, hyphen everywhere, or nothing at all.
>
> **[3:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=183)** Now, let's look at some examples to help explain what I mean here.
>
> **[3:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=186)** If you look at these examples, b_bo_ma refers to business:board-material, bnopufi refers to business:non-public-financial.
>
> **[3:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=197)** Notice that there is no underscore or a hyphen in the second example.
>
> **[3:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=200)** Third, p_l1_lo means personal:level1-location.
>
> **[3:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=205)** Hyphen is a choice here after the colon.
>
> **[3:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=207)** Fourth, pgoid means personal:government-id.
>
> **[3:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=211)** And, finally, p-he refers to personal:health.
>
> **[3:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/how-can-you-prep-for-data-inventory?u=76281980&t=215)** Now that you have learned how to prepare for data inventory, let's build the requisite infrastructure and architecture to implement it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (2), this. (1), case. (1), public (1)
> **Definitions:** refers to (3), is a  (2)
> **Analogies:** for example (4)
> **Exercise Files:** template (2)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** b_bo_ma (1)
> **Env Vars:** sql (1)


### 5. 4. A Deep Dive into Data Inventory

#### Data inventory using manual resources and automation
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=0)** - [Host] Applying tags to data that reflect the privacy risk is complicated given the volume of data companies collect, the distributed nature of engineering teams, and of their data storage locations.
>
> **[0:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=10)** One of the biggest decisions you'll need to make in the data inventory process is how you allocate the resources and specifically the mix of manual and automation resources.
>
> **[0:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=19)** Companies often make the mistake of thinking about this as an either/or choice and too many companies either lack the human labor and/or the automation capabilities to execute data inventory correctly and scalably.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=30)** So rather than getting stuck in analysis paralysis, let's come up with an approach that will help you get started and give you the flexibility as you move forward.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=38)** To start you have two options, using automation to apply tags and then manually verifying those tags.
>
> **[0:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=44)** And second, starting with manual categorization and then automating the process.
>
> **[0:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=48)** In my experience, you will want to use a combination of these approaches.
>
> **[0:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=51)** That way you can optimize for your strengths and adjust accordingly.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=55)** If you have dedicated privacy experts, but have yet to secure engineering automation resources, you should start with manual categorization.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=63)** These privacy experts will help you create the right tags and apply them to data sets that are used more often and/or carry the highest privacy risk.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=70)** There may be a significant overlap between those two data sets, given how engineers and product managers use data to drive innovation and engagement.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=78)** You can then use that baseline to automate the rest of the data set.
>
> **[1:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=82)** On the other hand, if you have more engineering resources than privacy resources, you could build basic automation to categorize some data sets.
>
> **[1:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=89)** You can then ask your legal team to verify that categorization and then go back and forth until you can tag the remaining data.
>
> **[1:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=96)** In either case, the goal is to create a virtuous smooth circle of tagging, verification, tagging, and so on.
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=101)** Just as there is a virtuous circle between classification verification, classification and so on.
>
> **[1:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=106)** It is all part of the same governance strategy.
>
> **[1:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=109)** As I just mentioned, data inventory and data classification not only build your data governance, but follow similar execution cadences as well.
>
> **[1:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-using-manual-resources-and-automation?u=76281980&t=116)** I hope you now have a clear actionable plan to start with your data inventory process.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), case, (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [host] (1)

#### The technical implementation of data inventory
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=0)** - [Instructor] It is now time to look at the technical implementation of data inventory.
>
> **[0:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=4)** In order for data inventory to work, you will need a backend infrastructure that does the following: crawl various known data stores, discover in the process other data stores as well especially around unstructured data, make those data sets in those data stores and the corresponding metadata available for tagging, provide extensibility to add new metadata, and finally, support the categorization of personal data, that is the privacy specific use case.
>
> **[0:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=28)** Now, let's look at the architecture in smaller chunks.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=30)** The first three steps include crawling known data stores, discovering data sets especially around unstructured data, making those data sets and corresponding metadata available for tagging.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=40)** As I mentioned very early in this course, a significant chunk of data we collect is unstructured.
>
> **[0:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=45)** As a result, you will need tools like crawlers to crawl various data stores and discover data sets and then apply the tags to the data at the right level of granularity.
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=53)** The key reason why you need tools to discover data is that engineers and data scientists may not always know what data they collect.
>
> **[1:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=60)** A chunk of this data could enter your system, for example, as JSON blobs, so you should avoid relying on intuition and invest in tooling.
>
> **[1:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=67)** As you can imagine, this process can be costly, another reason why you should do inventory as early in the data lifecycle as possible.
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=75)** Moving on to the next one, providing extensibility to add new metadata in a self-service fashion.
>
> **[1:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=80)** Although you cannot rely upon your engineers to inventory your data end-to-end, you should allow them the option of entering in the appropriate information either via an API or some sort of UI.
>
> **[1:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=90)** As I have led data inventory programs into stages of maturity, I have often had the pleasant surprise of engineers and data scientists volunteering to enter that information.
>
> **[1:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=99)** You can then make a judgment call on whether or not to check the work done by these engineers using your tools or you could divert your automation to other data stores.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=108)** Moving on to the next one, support the categorization of personal data.
>
> **[1:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=112)** This is where having discovered your data, you will now want to apply the tags.
>
> **[1:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=116)** As I will explain shortly, this process requires infrastructure, automation, human judgment and possibly even artificial intelligence.
>
> **[2:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=124)** Let's look at the sequence once again with all the steps spelled out at the same time.
>
> **[2:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=128)** This data inventory process is or at least could be expensive.
>
> **[2:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/the-technical-implementation-of-data-inventory?u=76281980&t=132)** However, steps one through four are required by data science teams anyway for improving data quality and discovery as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), case. (1), self (1)
> **CLI Commands:** make (2)
> **Env Vars:** json (1), api (1)
> **Analogies:** for example (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### Data inventory architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=0)** - [Instructor] Let's build the back-end system architecture for data inventory.
>
> **[0:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=3)** This diagram lays out in detail the data inventory workflow.
>
> **[0:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=7)** I've labeled the boxes with numbers for easy reference, but note, the actions I'm listing are not always sequential.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=13)** You will need to configure this system to suit your needs at your company.
>
> **[0:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=16)** As I've explained before, the data inventory service that is box number one in this diagram is where data inventory actually happens.
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=23)** This box represents the step where you add the tags to the data in line with your data classification.
>
> **[0:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=29)** Going forward, we will call this service DIS, that is short for data inventory service.
>
> **[0:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=34)** But let's walk through the process workflow in a bit more detail.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=37)** As we have already discussed, you will need the ability to make data available for the inventory service to actually work.
>
> **[0:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=43)** The incoming data into your system is represented via box number two on the bottom left.
>
> **[0:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=48)** Let's assume you have one main API that makes all this data ingestion possible.
>
> **[0:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=52)** I know it's simplistic, but this is just for the sake of the example here.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=55)** The data inventory service can obtain all the data and related metadata via crawlers, event listeners, and other devices.
>
> **[1:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=61)** All of this tooling is represented in box number three.
>
> **[1:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=65)** I will explain this tooling more a bit later.
>
> **[1:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=67)** The data classification process itself is represented by box number four.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=70)** This is where your cross-functional teams will classify data based on regulations, usage, risk, et cetera.
>
> **[1:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=75)** Box number five represents the creation of the machine-readable tags that we saw examples of earlier.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=81)** Let's summarize the previous slide with the diagram fresh in our mind.
>
> **[1:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=85)** The data inventory process is like a grand buffet.
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=88)** It has the data that needs to be inventoried, the classification that ranks the data based on risk, the machine-readable tags that we can apply to the data to implement the classification, and the business logic that will help affix the tags to the data itself.
>
> **[1:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=102)** Once again, for the purposes of this course, we will continue to refer to the service that inventories data as DIS.
>
> **[1:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=109)** Before any data is available for operational or analysis usage, we should aim to complete the data inventory process in line with this workflow.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=117)** Let's walk through the inventory process in a bit more technical detail.
>
> **[2:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=120)** In this diagram, we highlight how you can consolidate your data and your metadata in one location.
>
> **[2:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=125)** That is step one, which I've labeled "Consolidate data catalog" in red.
>
> **[2:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=132)** You can do that using crawlers, listeners, et cetera.
>
> **[2:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=134)** You may also want to provide a UI portal for engineers to manually enter their data schemas, as we have already discussed.
>
> **[2:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=140)** In the middle column of this diagram that is step two labeled "Manual and automated data categorization" in green, we are highlighting three things: the ability to manually categorize data for engineers and data scientists who know their data.
>
> **[2:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=154)** This manual categorization is a way to train ML-based models down the road to apply classification tags to your data.
>
> **[2:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=161)** This combination of manual and ML-based data inventory will help reduce our dependence on manual classification alone.
>
> **[2:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=168)** Then on the far right, that is step three labeled "Decide on data classification" in blue, is a step of finalizing your data tagging after manual and ML-driven classification.
>
> **[2:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=178)** Here we explore DIS in how it instruments the data inventory process.
>
> **[3:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=183)** DIS is both a service as well as a database as you can probably infer from this diagram.
>
> **[3:08](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=188)** As a service, it feeds the data to be classified to the manual and ML-based classifiers.
>
> **[3:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=192)** We see that on the left-hand side of this diagram.
>
> **[3:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=195)** However, notice that there is a box on the far right that identifies DIS as a database as well.
>
> **[3:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=201)** This is the second box on the right-hand side in the middle.
>
> **[3:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=203)** Let's dig into this a little bit in more detail.
>
> **[3:26](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=206)** As a database, DIS provides information to classifiers, such as column name, column type, manual personal data categorization, et cetera.
>
> **[3:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=214)** Classifiers use this information to infer personal data category type automatically.
>
> **[3:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=218)** Manual classification is also similarly enabled by this incarnation of DIS.
>
> **[3:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=223)** In this way, DIS combines the data and the business logic to enable the actual tagging of this data manually and using automation.
>
> **[3:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=230)** Note that all of this tagged data is then stored in a separate and temporary database.
>
> **[3:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=235)** Note that DIS plays a role of the pure database on the far right as I've said before.
>
> **[3:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=239)** At this stage, it stores the data that has been tagged and put through a decider process to make sure that the initial classification and tagging was done correctly.
>
> **[4:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=247)** This is the judgment call and reference before to make sure that you're not being overly conservative or overly aggressive in your tagging process.
>
> **[4:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=254)** Once all of this is complete, you can apply policies to protect this data.
>
> **[4:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=258)** Remember, this is where you can programmatically apply policies like AuthN and AuthZ at scale.
>
> **[4:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=263)** Now your data is ready to use with appropriate protections embedded into the data itself.
>
> **[4:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=268)** As I've said before, this is the extension of privacy by design into something I like to call privacy by data.
>
> **[4:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-architecture?u=76281980&t=273)** So this is the end-to-end walkthrough of data classification, data inventory, and finally, applying data protection techniques tailored to the risk in the data itself.

> [!info]- Semantic Content
>
> **Env Vars:** dis (9), api (1)
> **Code Keywords:** let (6), continue (1), type, (1), finally, (1)
> **Definitions:** is a  (3), short for (1)
> **CLI Commands:** make (3)
> **Warnings:** note that (2)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Data inventory metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=0)** - [Instructor] Data inventory infrastructure needs two critical attributes to be successful.
>
> **[0:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=4)** First, we need a way to capture as much metadata as possible so that data is classified correctly.
>
> **[0:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=10)** And second, we need consistent metadata definitions across all sources of data.
>
> **[0:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=15)** Here's how we implement such an infrastructure.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=17)** In order to produce accurate results, DIS needs to span not only datasets but all data entities.
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=23)** It needs to capture metadata about online, offline and real-time datasets and other data artifacts, such as ML features, business metrics, dashboards, et cetera.
>
> **[0:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=32)** It must also collect information from services, such as data lineage and other infrastructure components.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=38)** All of this investment reflects a singular point.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=40)** Just as companies have built an infrastructure to harvest and collect data, they must now invest infrastructure resources in handling this data based on what their data is and the attendant privacy and security risks.
>
> **[0:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=52)** So far, we've talked about discovering and tagging data.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=55)** However, you also need to make sure that the metadata is handled correctly and your classification itself is accurate.
>
> **[1:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=61)** This diagram can help with those challenges.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=63)** Let's look at the example.
>
> **[1:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=64)** As you structure your backend, I would recommend that you use a taxonomy-like structure with entity and value types to define metadata.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=70)** In this example, the MySQL table and relational database are defined as entity types since they're an abstraction of a physical data entity and UUID and region are defined as value types.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=81)** The MySQL table is defined as a relational database and the type of its name is a UUID value by design.
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=87)** This way, we're able to standardize metadata from online schemas to offline Hive database schemas to services to storage-level components across the board.
>
> **[1:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=96)** This diagram offers a model on how you can use some of the tools we have already discussed to collect metadata.
>
> **[1:41](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=101)** We have already defined our metadata but once it is well defined, we now need to focus on the metadata collection process.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=108)** Just to be thorough, I'd recommend you use both the pull and push models to collect metadata from various metadata sources.
>
> **[1:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=115)** On the pull side, you can think of crawlers that periodically collect information from metadata sources.
>
> **[2:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=120)** Crawlers are very effective to collect certain metadata types where the collection process needs to be throttled on the client side to avoid overloading target systems.
>
> **[2:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=129)** This is very critical, especially for companies starting out after a ton of data has been collected.
>
> **[2:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=133)** You can also use event-based listeners for near real-time metadata collection to capture time-sensitive information, such as data quality or metadata versioning.
>
> **[2:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=142)** This way we can notify data users in a timely manner.
>
> **[2:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=145)** Using these and other bespoke tools is necessary given the volume and diversity of data most companies are dealing with.
>
> **[2:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=152)** Now, let's look at the push side.
>
> **[2:34](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=154)** On the push model side, things can be a bit more straightforward.
>
> **[2:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=157)** You can just make available your APIs to various pipelines and services that generate input for the DIS.
>
> **[2:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=163)** You can also use crowdsourcing to obtain humanly created information, such as descriptions.
>
> **[2:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-metadata?u=76281980&t=168)** All of this may sound very basic, but you might be surprised of what you might find from engineers who have tucked away data on the assumption that one day, someday they might need that data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), mysql (2), find (1)
> **Env Vars:** dis (2), uuid (2)
> **Definitions:** defined as (3), is a  (1)
> **Analogies:** such as (4)
> **Code Keywords:** let (2)
> **Speakers:** - [instructor] (1)

#### Data inventory and use cases
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=0)** - [Instructor] There is simply no one size fits all rule when it comes to how deep into your stack you should dive into for data inventory.
>
> **[0:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=7)** Data inventory is far too complex to redo over and over again, but also too critical to just rush through.
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=12)** Also, many companies use vastly different storage models when it comes to their data.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=17)** So in the next few slides, I will offer some models that you can start with and then customize for your own needs, your own risk appetite, and your own budget.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=25)** This table is what a level one inventory could look like, where you could operate at the database or application instance level.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=31)** The table is fairly self-explanatory when you could provide the total size of data stores and then tag the data.
>
> **[0:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=36)** The KPIs here are key though, where you would measure outcomes not just based on the instances or buckets, but also as a percentage of the total volume.
>
> **[0:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=44)** This is extremely important because you want to avoid bad habits where the team would complete the inventory of easily accessible buckets or instances that only form a small percentage of the overall data size.
>
> **[0:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=54)** So tracking these KPIs is extremely important.
>
> **[0:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=57)** It is helpful to understand what a level one inventory gets you.
>
> **[1:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=60)** Once you have finished this work, you should be able to achieve three key goals.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=63)** First, you should be able to understand the composition of your data sources to help prioritize data governance efforts based on risk exposure.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=72)** Second, you should be able to understand sources of these data so as to drive better education and data minimization efforts, which means collecting only what you need.
>
> **[1:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=80)** Third, you will then be able to apply appropriate controls to protect the data.
>
> **[1:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=84)** This table shows you what a level two inventory could look like.
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=87)** Notice that this builds on what we just saw with level one, except we go just a bit deeper.
>
> **[1:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=92)** With databases and data centers, we would operate at the column level rather than just at the database instance level.
>
> **[1:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=97)** And when it comes to cloud data, we don't just tag data at the bucket level, but at the data object level The more complex your data and the faster your data size grows, the more expensive the leap will be going from level one to level two.
>
> **[1:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=109)** The lesson here, collect only what you know you need and inventory the data early.
>
> **[1:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=114)** Now let's look at what level two inventory gets you.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=117)** Once you have finished this work you should be able to achieve three goals.
>
> **[2:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=120)** First, you should be able to understand the composition of your data sources, which in turn will help you prioritize governance efforts based on risk.
>
> **[2:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=127)** Second, understand sources of such data so as to drive better education and data minimization, which again, means collect only what you know you need.
>
> **[2:15](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=135)** Third, you should be able to apply controls to protect all of this data.
>
> **[2:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=140)** Now, I don't know about you, but to me all of that sounds somewhat familiar.
>
> **[2:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=143)** The outcomes we just saw are exactly similar to the outcomes of level one inventory, but remember, you can now get an understanding of all the data and apply these protections at a much deeper, much more granular level.
>
> **[2:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=155)** Going from level one to level two provides you much more clarity about your data, so you can protect it better at scale.
>
> **[2:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=160)** However, you may need to go even further and go a level deeper.
>
> **[2:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=164)** As this table shows, with level three data inventory, you will have transformed your entire data store into an indexed database.
>
> **[2:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=171)** When GPDR, CCPA and CPRA ask you to provide your customers control over their data, this is the maturity level they have in mind.
>
> **[2:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=178)** So now, now let's look at what level three inventory gets you.
>
> **[3:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=181)** Once you have finished that task, you should be able to achieve two additional goals.
>
> **[3:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=185)** First, you should be able to download customer data and second, you should be able to delete customer data.
>
> **[3:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=191)** Unstructured data in low latency and high availability databases has made innovation much easier and much faster.
>
> **[3:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=197)** This data breaks a traditional key value structure of data into several small components for analysis purposes.
>
> **[3:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=203)** All of that in turn, makes possible a very targeted processing of data without understanding the user as a whole.
>
> **[3:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=209)** For example, you may be able to infer what a user does while traveling without knowing anything else about them at all.
>
> **[3:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=215)** Now, with laws like GDPR and CCPA and CPRA you have to be able to target data individually for deletion, encryption, and portability.
>
> **[3:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-and-use-cases?u=76281980&t=223)** Modern distributed systems, were not set up to do this at scale and level three inventory is a down payment necessary unless you want to keep investing in massive amounts of hardware when operations slow down to crawl.

> [!info]- Semantic Content
>
> **Env Vars:** ccpa (2), cpra (2), gpdr (1), gdpr (1)
> **Code Keywords:** let (2), self (1), delete (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Evaluating data inventory outcomes
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=0)** - [Lecturer] Data inventory, as we have already seen, involves architecture, business logic, services, and tools.
>
> **[0:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=7)** But what about machine learning or as it is commonly called ML?
>
> **[0:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=10)** One key area that we have touched on fairly lightly so far is the machine learning driven processes that tag data based on rules agreed upon by engineers, data scientists, members of the legal team, et cetera.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=21)** Remember, the data classification work itself could be a bit abstract.
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=24)** It involves making rules, but not actually applying those rules to real data in your systems.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=30)** By contrast, data inventory means actually tagging large volumes of data in real time based on your ability to A, understand the data itself, B, where it came from, and C, how that data may be used downstream.
>
> **[0:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=42)** In my experience, using ML driven tools to tag data can involve some interesting trade-offs.
>
> **[0:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=46)** Remember, when it comes to data inventory you need to account for a few variables.
>
> **[0:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=51)** The volume of the data itself, the amount of data available to the ML models for training purposes, and other critical measurements like performance and accuracy.
>
> **[0:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=59)** What should not be variable is the following.
>
> **[1:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=61)** Tagging should occur in a manner that is agnostic to the storage platform.
>
> **[1:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=64)** It should not matter where the data is stored.
>
> **[1:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=66)** Second, detection mechanisms should not vary when it comes to column or field-level granularity.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=71)** These represent my personal insights and your teams may come to a different conclusion, but let's look at an example in the next slide.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=78)** This is a table I've replicated based on one of my data inventory endeavors where we use three different ML driven models.
>
> **[1:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=84)** You will notice that the three models involve interesting results when it comes to accuracy, performance, and coverage.
>
> **[1:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=91)** What can we learn from all of that?
>
> **[1:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=92)** You need to keep an eye out for false positives.
>
> **[1:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=95)** So if you have a high performance model, it may produce false positives.
>
> **[1:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=99)** You may want to run a sample of the same data through a different model that is higher levels of accuracy, but maybe a lower performance output, so you can get a sense of how reliable your tagging actually is.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=108)** That way you can assess accuracy without taking a performance hit.
>
> **[1:52](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=112)** There is a lot of learning and improvisation required here, but you should invest in it since your data protection strategy depends upon accurately and correctly and consistently tagging your data.
>
> **[2:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=122)** And I know this makes me sound like a broken record, but this is exactly why you should invest in inventory early on in the data collection funnel process because you do not want to be cutting corners when your data volume is too high.
>
> **[2:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=133)** Also, you do not want to do this in a rush after making mistakes after a privacy issue has arisen because nobody wins and all you do is create panic in the company.
>
> **[2:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=141)** This work is extremely strategic and extremely cross-functional, and requires a lot of planning.
>
> **[2:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/evaluating-data-inventory-outcomes?u=76281980&t=145)** Doing this in a rush is a recipe for disaster.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (1), from, (1), let (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [lecturer] (1)


### 6. 5. Lessons from the Road: How to Do Data Inventory Right

#### Centralized vs. decentralized
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=0)** - [Instructor] As your data inventory efforts start growing, you will need to answer some key strategic questions.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=6)** Remember, a lot of your teams across the company could be highly decentralized, so in order to categorize their data, should you build a central architecture or should you provide automation and logic to all of your decentralized teams who can then customize it for their needs?
>
> **[0:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=20)** In my opinion, these are both imperfect choices, so let's look at some tips on how to approach these choices and prepare ahead of time.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=27)** Initially, your leaders both on the privacy side and elsewhere, may prefer the centralized model.
>
> **[0:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=32)** And of course, this model does offer several critical advantages.
>
> **[0:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=36)** For one thing, it reduces the initial burden on decentralized teams who can then focus on verification.
>
> **[0:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=40)** It also helps improve the centralized architecture continuously based on feedback from several decentralized teams who may not know each other very well.
>
> **[0:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=48)** But this approach also has some serious disadvantages.
>
> **[0:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=51)** It may lead to a one-size-fits-all, central categorization process that does not adequately understand the business needs.
>
> **[0:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=57)** It may lead to a lack of ownership by decentralized teams when problems arise.
>
> **[1:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=60)** Everybody will point finger at the central team that built the categorization logic, right?
>
> **[1:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=64)** On the other hand, farming out the categorization work to several decentralized teams has its own trade-offs.
>
> **[1:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=70)** This approach has advantages.
>
> **[1:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=71)** Each team can own its own chunk of the categorization problem so they can optimize for velocity and accuracy, but not have to worry about any other team's dependencies.
>
> **[1:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=81)** Each team can follow its own bespoke process for categorization, thereby continuing a model that serves modern agile companies very well.
>
> **[1:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=88)** But of course, that approach has its own disadvantages.
>
> **[1:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=90)** The siloed nature of the work could make it very hard to build a more business-wide understanding of the data and the risk.
>
> **[1:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=96)** Second, unlike many product features, data governance has to be enforced centrally so you can protect the user and the business end-to-end.
>
> **[1:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=103)** This is not about protecting one silo, but the entire company and the user end-to-end.
>
> **[1:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=108)** So there are no easy answers here, but my goal here is simple.
>
> **[1:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/centralized-vs-decentralized?u=76281980&t=111)** I want you to go into this process eyes wide open and recognize that you will almost certainly need to adapt your strategy on an ongoing basis and improvise as you learn more.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Data inventory successes
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=0)** - [Narrator] Given the volume of work and investment I've described, data governance must sound incredibly daunting.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=6)** So how do you measure the effectiveness of governance inventory?
>
> **[0:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=9)** It may take some time before you see discernible data-driven improvements in your business practices.
>
> **[0:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=13)** So what anecdotal science can you watch for and make sure that your strategy is actually working?
>
> **[0:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=18)** Remember, the strategic goal behind data inventory is to reduce privacy risk and protect your users and their data.
>
> **[0:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=25)** So here are some anecdotal and cultural science to look for based on my years of experience in this domain.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=30)** First, at what point do you have so much data that protecting it becomes prohibitively expensive?
>
> **[0:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=36)** Second, what do you do when your ability to delete data at scale is dwarfed by your ability to collect data at scale?
>
> **[0:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=42)** Third, when is the inflection point when you stop discovering data that some ingenious engineer or scientist had tucked away someplace else?
>
> **[0:50](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=50)** Fourth, what does privacy do to help data quality?
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=53)** Is there common cause to be made with data science and platform teams?
>
> **[0:56](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=56)** In this list, the first two are negative where the last two are more positive.
>
> **[1:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=60)** So let's look at them in turn.
>
> **[1:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=61)** First, at what point do you have so much data that protecting it becomes prohibitively expensive?
>
> **[1:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=66)** And second, what do you do when your ability to delete data at scale is dwarfed by your ability to collect data at scale?
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=72)** Once you have sound governance, that should lead to more thoughtful data collection where you only collect what you know you need.
>
> **[1:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=78)** Also, getting a better sense of how much risk you're holding onto by way of data should lead to more timely deletion of that data and also anonymization of other sensitive data.
>
> **[1:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=87)** So if you see a reduction in the number of times you may have to throw more money at security and storage to make up for bad data collection practices, your data governance strategy may be starting to pay off.
>
> **[1:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=98)** This could also point to a broader cultural change where the company has now realized how much work it takes to actually categorize all data.
>
> **[1:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=104)** Engineers often realize how much data they were holding onto and adding onto the risk to the business without adding any value.
>
> **[1:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=111)** Data inventory may help reverse these long entrenched bad habits.
>
> **[1:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=115)** And then let's look at the last two.
>
> **[1:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=117)** When is the inflection point where you stopped discovering data that ingenious engineers had tucked away?
>
> **[2:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=122)** And fourth, what does privacy do to help data quality?
>
> **[2:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=125)** Is there common cost to be made with teams like data science, platform, et cetera?
>
> **[2:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=129)** These two criteria can often speak for themselves and point to not just better data handling practices but also a much more improved and mature privacy culture.
>
> **[2:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=137)** When engineers and data scientists learn to abide by sound storage and collection practices, you should have fewer surprises.
>
> **[2:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=143)** This could happen because they have now realized how expensive inventory is and because they understand the risks so much better.
>
> **[2:29](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=149)** You may also see these teams joining forces.
>
> **[2:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=152)** Their data science teams and the privacy teams have a common interest in reducing the size of data.
>
> **[2:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-successes?u=76281980&t=156)** The former cares about quality while the ladder cares about risk and privacy when you see these organic unions taking place without waiting for a top-down mandate by senior executive, your data governance strategy again may be starting to pay off.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), let (2), throw (1)
> **CLI Commands:** make (2)
> **Speakers:** - [narrator] (1)

#### Data inventory challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=0)** - [Instructor] Besides the technical details we have already seen, it is important to understand why inventory is so hard.
>
> **[0:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=5)** Everywhere I've spoken about this topic ranging from graduate school seminars, networking events, venture capital events, conferences, et cetera, I pick up on one thing, companies and leaders wonder we are so successful at disrupting our way to success, but why is inventory so hard?
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=21)** Well, let's see why that is.
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=23)** First, privacy usually almost certainly lags behind growth.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=27)** Privacy and security specialists are never early hires.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=30)** If engineers and data scientists are like elephants in a circus, privacy and security specialists tend to have the thankless job of training the elephants with shovels.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=38)** But more seriously, I'm usually hired at most major companies after the company was hit by a fine or a consent decree.
>
> **[0:44](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=44)** A lot of data has been collected, bad habits were formed, and there was a ton of catching up to do.
>
> **[0:49](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=49)** At the same time, unless the company grows revenue and users, it cannot afford the privacy specialists like myself.
>
> **[0:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=54)** So growth finances privacy and privacy specialists need to remember that the business in this case is not the enemy.
>
> **[1:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=62)** Second, decentralized growth.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=63)** Companies or many companies in their early days optimized for growth and build decentralized teams that can chart their own course with flexibility and independence.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=72)** This often means that teams build tech stacks, data stores, management policies, et cetera, suited to their own individual needs.
>
> **[1:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=79)** So you have several companies within a big company.
>
> **[1:22](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=82)** For example, if you have a company offering retail as its core business, then the team managing credit card transactions often operates as an independent entity within the larger company as does the company that builds a UI and the company that creates copy for different countries, et cetera.
>
> **[1:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=97)** This is what I like to call democratize and decentralized, development, or the three Ds.
>
> **[1:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=102)** Again, democratized and decentralized, development.
>
> **[1:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=105)** The outcome, you will have different teams collecting, retaining sharing, deleting, and processing data based on their own personal needs.
>
> **[1:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=115)** What you do not have is a well-rounded understanding of the customer, the legal landscape, and other external attack vectors.
>
> **[2:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=122)** Privacy, on the other hand, needs consistency.
>
> **[2:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=124)** Someone in France who uses the English version of your online service should get the same level of privacy protection as someone in France who uses the French version.
>
> **[2:13](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=133)** Additionally, if any of your teams face privacy challenges, your company as a whole will suffer and not just that specific team.
>
> **[2:20](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=140)** You will need a sophisticated privacy program since privacy not only lacks growth, but it often requires a mindset that is different from the one that produced all their growth to begin with.
>
> **[2:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=150)** And finally, there is procrastination.
>
> **[2:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=152)** Too many companies wait until there is a major privacy incident or legal action before they even start their privacy program.
>
> **[2:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=159)** By that time, data and risk have both accumulated and now a fixed needs to be put into place before that risk becomes financial and consequential.
>
> **[2:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=167)** Engineers, too many engineers, maybe not all of them, but too many engineers have gotten used to the "we have always done it this way" principle.
>
> **[2:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=173)** In those cases, the company resembles a data addict.
>
> **[2:57](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=177)** They feel a compulsion to keep growing to repeat the pattern again and again because carrying on feels easier than stopping.
>
> **[3:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=182)** Because to stop collecting data would mean a brutal audit of the harm already done, money wasted, and trust destroyed.
>
> **[3:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=189)** This moment of reckoning can be painful.
>
> **[3:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=191)** But like getting a root canal, it is not one that can be postponed for long.
>
> **[3:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/data-inventory-challenges?u=76281980&t=194)** Continuing this practice in the face of risk would be doubling down on the sunk cost fallacy.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** let (1), finally, (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Getting executive buy-in for data inventory
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=0)** - [Instructor] When it comes to data inventory, I'm almost certain that you will get some C-suite pushback or executive pushback.
>
> **[0:06](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=6)** This is especially the case when budgets are tight and executives lack the right context.
>
> **[0:10](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=10)** So how should you respond if and when that happens to you?
>
> **[0:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=12)** As cliche as it may be, the old carrot and stick approach should work pretty well here.
>
> **[0:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=17)** When it comes to my stick, I use a resource called www.[enforcementtracker.com](https://enforcementtracker.com).
>
> **[0:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=23)** It's on your screen right now.
>
> **[0:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=24)** This website lists fines levied upon companies globally by regulators for inadequate data governance practices.
>
> **[0:30](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=30)** This is the privacy version of the Hall of Shame with company names listed right beside the violation, the fine, and the regulator who levied the fine.
>
> **[0:38](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=38)** Another possible resource could be visuals like this one which shows that even when the number of breaches go down, it is possible for bad actors to steal data and even more data as time goes on.
>
> **[0:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=47)** This means that you can invest in more doors, taller walls, and stronger locks, but in the end the money under your mattress is what makes you vulnerable.
>
> **[0:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=55)** You cannot fix a privacy problem with just security tools.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=58)** You cannot use security tools as a replacement for sound data governance.
>
> **[1:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=62)** To those who seek comfort from the fact that the only companies in the news are the big tech giants, I have this to say.
>
> **[1:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=67)** Those high visibility companies faced their moment of difficulty after rapid growth.
>
> **[1:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=72)** They had the money to build privacy teams and tools and attorneys to represent them in court.
>
> **[1:17](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=77)** What if regulators or activist citizens come after a startup pre-IPO and VCs failed to get even a basic return on their investment?
>
> **[1:24](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=84)** This could happen to you.
>
> **[1:25](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=85)** The deeper issue is that neither your C-suite nor your regulators fully appreciate the complexity of data when it comes to privacy and governance.
>
> **[1:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=93)** This is what I call a systemic disconnect.
>
> **[1:35](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=95)** Most privacy laws provide individualized rights like deletion, opt-outs, et cetera for your users.
>
> **[1:40](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=100)** Most modern and decentralized systems were built to handle large volumes of data in mass.
>
> **[1:45](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=105)** This includes moving them from one place to the other, joining one set of data to another set of data, slicing and dicing that data, and a whole range of other automated activities.
>
> **[1:54](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=114)** Most of these systems are not equipped to process data on a per-user basis.
>
> **[1:59](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=119)** This is in fact the beauty of unstructured data.
>
> **[2:02](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=122)** That is what makes low-latency systems like Cassandra so attractive.
>
> **[2:05](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=125)** You can perform tasks without having all the data about one user, in one place, or in the same context.
>
> **[2:11](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=131)** Once again, the techniques and tricks that greased the skids of growth also place speed bumps on the path to privacy.
>
> **[2:18](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=138)** It is therefore critical that you present the data inventory at the right level to help get the executives on your side.
>
> **[2:23](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=143)** This table provides a useful template to start having that conversation.
>
> **[2:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=147)** For all three data sources on the left hand side, you can present the data volume and the percentage of that data that poses a risk.
>
> **[2:33](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=153)** You can then decide which of the three levels you've discussed before makes the most sense for you and your company.
>
> **[2:39](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=159)** But this is on the whole an example of how planning helps presentation.
>
> **[2:43](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=163)** You cannot improvise on the spot when it comes to data inventory.
>
> **[2:46](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=166)** Moving this work to early in the pipeline, therefore enables you to drive decision-making better at the backend.
>
> **[2:51](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=171)** Let me walk you through the key points you want to consider as you have these conversations.
>
> **[2:55](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=175)** First, as the company grows, how does the growth in the customer base and revenue correspond to the growth in data?
>
> **[3:01](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=181)** How fast is sensitive data growing relative to overall data?
>
> **[3:04](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=184)** Next, you may be able to reverse engineer the data sources and understand which teams are responsible for the growth in data size and risk.
>
> **[3:12](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=192)** These numbers may point to specific solutions.
>
> **[3:14](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=194)** If your goal is to reduce cost and risk, you may want to delete data more aggressively.
>
> **[3:19](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=199)** But if the goal is to purely manage that risk, you may be able to decouple the data in a way that does not pose a privacy risk while still retaining the data itself.
>
> **[3:28](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=208)** This format helps provide useful business insights and centralize those insights.
>
> **[3:32](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=212)** I'm certain that your executive team will appreciate this cross-functional view.
>
> **[3:36](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=216)** Remember, just because your business grows 2X, that does not mean that you can grow your privacy team 2X as well.
>
> **[3:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=222)** So you need to be very creative and ensure that your data and risk do not grow faster than your ability to manage them.
>
> **[3:48](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/getting-executive-buy-in-for-data-inventory?u=76281980&t=228)** Data governance, which includes classification and inventory, goes to the very heart of protecting your business and treating your users and their data with respect.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), delete (1)
> **URLs:** [enforcementtracker.com](https://enforcementtracker.com) (1)
> **Env Vars:** ipo (1)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 7. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=0)** - In this course, we have seen how data governance is becoming extremely critical for companies as they look to stay ahead of privacy regulations.
>
> **[0:07](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=7)** But equally important are two other reasons.
>
> **[0:09](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=9)** First, it starts giving you some control of an IT and development culture that otherwise makes any central data management very difficult.
>
> **[0:16](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=16)** Second, you will struggle to secure and protect your user's trust without data governance.
>
> **[0:21](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=21)** Unless you know what data you have and the risk it presents, you will not be able to protect anything effectively.
>
> **[0:27](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=27)** The growth of the modern economy depends upon trust and safety.
>
> **[0:31](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=31)** Skepticism around your data governance will hurt your business, maybe slowly, initially, but possibly irreversibly.
>
> **[0:37](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=37)** I would recommend using the techniques we have discussed in this course and going further when possible.
>
> **[0:42](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=42)** The costs will decrease once you start and you will even have much better products to show for it.
>
> **[0:47](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=47)** I also wanted to offer a heads-up for my upcoming course on building a privacy governance program for safer data sharing.
>
> **[0:53](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=53)** That course will build on this one and offer hands-on training on data sharing with privacy techniques.
>
> **[0:58](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=58)** Given how much online business is driven by data sharing, you will find that course extremely helpful.
>
> **[1:03](https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory/next-steps?u=76281980&t=63)** Thank you for completing this course and here's to learning even more.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - in (1)


## Instructor

- [[Nishant Bhajaria]]

## Skills Covered

- Privacy Compliance
- Data Classification
- Privacy

## Path Context

### In [[Build a Privacy Program]]
← [[Building a Privacy Program in the Age of GenAI]] | **4 of 5** | [[Privacy, Governance, and Compliance- Data Sharing]] →

## Appears In

- [[Build a Privacy Program]]

## Related Courses

_Courses sharing skills:_

- [[Building a Privacy Program in the Age of GenAI]] — Privacy, Privacy Compliance
- [[Understanding and Prioritizing Data Privacy]] — Privacy, Privacy Compliance
- [[Machine Learning and AI Foundations- Classification Modeling]] — Data Classification
- [[GitHub Foundations- Privacy, Security, and Administration]] — Privacy
- [[Privacy in the New World of Work]] — Privacy

---

[↑ Back to top](#)