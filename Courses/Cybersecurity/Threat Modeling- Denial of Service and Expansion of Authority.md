---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: threat-modeling-denial-of-service-and-expansion-of-authority
url: "https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority"
duration_minutes: 48
duration: 48m
level: Advanced
updated: 9/4/2024
learners: 67716
skills:
  - Threat Modeling
  - Cybersecurity
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFIr3vQY5CyvA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613586528983?e=2147483647&amp;v=beta&amp;t=DRkj9GWD9ye8CT3SO9V4w75-Ynl6wFCy6PYluwknOhA"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Improve Your Threat Modeling Skills]]'
prev_courses:
  - '[[Threat Modeling- Information Disclosure in Depth]]'
path_nav: '[{"path":"Improve Your Threat Modeling Skills","position":6,"total":6,"prev":"Threat Modeling- Information Disclosure in Depth","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/threat-modeling
  - skill/cybersecurity
status: not-started
created: 2026-04-21
---

![Threat Modeling: Denial of Service and Expansion of Authority](https://media.licdn.com/dms/image/v2/C4E0DAQFIr3vQY5CyvA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613586528983?e=2147483647&amp;v=beta&amp;t=DRkj9GWD9ye8CT3SO9V4w75-Ynl6wFCy6PYluwknOhA)

# Threat Modeling: Denial of Service and Expansion of Authority

> In this installment of Adam Shostack’s Threat Modeling series covering the STRIDE threat modeling framework, Adam goes over the D and E parts of the framework: denial-of-service and elevation-of-privilege. For both threats, Adam digs deep into two main questions: “What can go wrong?” and “What are we going to do about it?” He details the many targets of denial-of-service attacks like storage, memo

> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority) | 48m | Advanced | 68K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Adam Shostack]]

## Skills Covered

- Threat Modeling
- Cybersecurity

## Table of Contents

### Introduction

#### Let me interrupt you
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980&t=0)** - [Adam] You know when there are so many interruptions that you can't get anything done?
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980&t=4)** Yeah, I know how you feel.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980&t=6)** When it's just you being demanding of your computer, we call that time for an upgrade.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980&t=12)** And when it's an attacker, we call it a denial of service.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980&t=16)** In this course, we'll cover both denial of service and elevation of privilege.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980&t=23)** Looking at denial of service attacks, we'll talk about how they fill memory or networks, how they use up resources like CPU, budget, or battery.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980&t=31)** Looking at elevation of privilege, we'll see how it includes not only SQL injection and cross-site scripting, but also failure to require authorization, like a hidden admin control panel.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980&t=45)** And you'll learn how to defend your systems against these attacks.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (1), sql (1)
> **Code Keywords:** require (1)
> **Speakers:** - [adam] (1)

#### STRIDE and the four question framework
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=0)** - [Instructor] This course is part of a series on threat modeling and the STRIDE threats.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=7)** At the heart of threat modeling are four incredibly simple questions.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=11)** What are we working on, what can go wrong, what are we going to do about it, and did we do a good job?
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=18)** These questions act as guideposts as you're threat modeling and analyzing how you're threat modeling.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=25)** If you're not sure why you're doing the work that you're doing, tie it to one of these questions.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=32)** STRIDE is a mnemonic for spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=44)** Well, that's the historic version.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=46)** Today, we often talk about expansion of authority in place of elevation of privilege.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=53)** The short form is authority is clearer.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=56)** It's what a program can do, and also authority is measurable.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=62)** In this course, we're focused on the threats of denial of service and elevation of privilege.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=68)** Of course, we're putting all the of's in one course.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=71)** More seriously, we're putting both in a single course to make the learning path a little shorter.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=78)** For both threats, I'll be digging deep into the details of what can go wrong and what are we going to do about it.
>
> **[1:26](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=86)** There are denial of service attacks against compute, storage, bandwidth, battery, and budget.
>
> **[1:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=92)** There's elevation of privilege in every system complex enough to have privileges or permissions or users, pretty much in any running code that handles untrusted input or talks to something which does, and you'll learn structured ways of ensuring that your systems are both highly available, resisting denial of service attacks, and resilient against elevation of privilege attacks.
>
> **[2:01](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=121)** Looking at these four questions with lenses for denial of service and elevation of privilege is the final part of the systematic, structured and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Env Vars:** stride (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. DoS Targets

#### DoS in context
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=0)** - [Presenter] Denial of service attacks impact the availability of some resource.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=6)** There's a set of resources that are typically impacted.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=10)** Traditionally, those were network bandwidth, CPU and storage.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=16)** Today, batteries and cloud budgets are also frequently used up.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=23)** We'll look into each, but don't be fooled into thinking that these are all the ways that availability fails.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=30)** Electric grids fail because of storms, squirrels and backhoes.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=36)** Machine learning systems sit idle because getting data from RAM to the CPU is a bottleneck.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=43)** Computers are subject to destruction, ranging from coffee accidentally spilled on your laptop to outdoor cameras being spray painted.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=53)** These failures are less subject to software controls, but that makes them no less real when you're considering the availability of your systems.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (2), ram (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### Attackers fill networks
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=0)** - [Instructor] The best known denial of service attacks are network flooding attacks where a lot of computers send a lot of packets to you.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=8)** This fills up your network pipes.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=11)** In June of 2020, Amazon reported being hit with an attack that sustained 2.3 terabits per second for several days.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=22)** They also reported that the 99th percentile is only 43 gigabits per second.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=28)** I've been a little informal, using packets and data interchangeably, but network operations folks don't.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=35)** Attacks that send a lot of data can do so in large packets, which fill the pipes, or with more smaller packets, which can cause trouble for network equipment.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=46)** Attackers can go from running scripts to uploading a lot of data.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=51)** Your web servers support posts to don't they?
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=54)** To writing lower level code, to sending lots of data ignoring things like TCP congestion controls or otherwise sending as much data as will fit on their local network.
>
> **[1:07](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=67)** The attacker's also likely to use tools that will amplify their attacks.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=73)** If their attack is against a home network or a cellular network, that attack is a lot easier than an attack on the pipes going to a data center, but you don't care about that easy or hard.
>
> **[1:26](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=86)** You care about your network and systems being available.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (1)
> **Versions:** 2.3 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How attackers redline your CPU
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=0)** - [Instructor] Quick, what's three times five?
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=3)** What's three to the fifth power?
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=5)** And what's 343,243,432 to the 8924th?
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=13)** Some problems are easy, other problems are harder.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=16)** The fork bomb is a way to denial of service a computer on which you can run code.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=23)** It was more fun when computers were expensive and less shared and you could stop an entire departmental computer from running.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=29)** If you think about it for a second, nope, there's already so many copies of that script already started that they can't start any more.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=38)** Usually it'll hit a limit like the number of processes or the open file handles that connect to the script.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=45)** The attacker can also chew up memory by allocating a bunch as the script starts.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=52)** Attackers usually won't do anything to slow down the ramp up of their attacks.
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=58)** You don't need to be local to cause a denial of service.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=62)** Sometimes you don't even need to try.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=65)** In July of 2016 a regular expression, written by Stack Exchange to trim spaces from post titles crashed the site.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=73)** It was triggered by a post with 20,000 spaces followed by some text.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=78)** The parser checked 20,000 characters, found something other than a space and said, "Oops, that's not a match.
>
> **[1:26](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=86)** Let me go back to character number two and check 19,999 characters."
>
> **[1:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=92)** This is classic order n squared behavior.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=96)** The victims wrote up a nice after incident report but don't say if they think the behavior was even malicious.
>
> **[1:44](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=104)** Everywhere your code is dependent on outside data there's a denial of service risk.
>
> **[1:49](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=109)** Think about sending email to a list of provided email addresses.
>
> **[1:54](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=114)** Is it okay to share this document with 10 people?
>
> **[1:56](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=116)** 10,000?
>
> **[1:58](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=118)** What if it's for a political campaign?
>
> **[2:01](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=121)** Maybe you want to send that much email.
>
> **[2:04](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=124)** You can get the same effect from sequel queries with complex joins or other work behind the scenes.
>
> **[2:11](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=131)** There's all sorts of potential denial of service problems and some don't even require an attacker.

> [!info]- Semantic Content
>
> **Code Keywords:** try. (1), match. (1), let (1), require (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How attackers fill storage
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=0)** - [Instructor] Storage includes not only hard drives and flashcards, but tapes and other exotic storage material.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=8)** It's easy to fill up yourself.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=10)** Just start recording high quality videos and wow.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=13)** But there are ways to fill a disc you don't have direct access to.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=18)** A very long time ago, our mail spool filled up with copies of a UNIX kernel.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=23)** It turned out to be an angry spouse who later apologized for sending those as emails.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=30)** She didn't realize we had a shared email infrastructure.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=34)** Sites like Instagram store billions of photos, most of which are viewed by less than a handful of people, but Instagram knows they're doing that.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=44)** What about filling up a file system?
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=46)** Making lots of connections can fill logs, but logs are small and they rotate.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=51)** Much more useful is to exploit parsers that cause things to grow.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=57)** Usually, these are intentional decompressors and the classic is to craft a zip file that says, we have a billion copies of this string.
>
> **[1:07](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=67)** The zip file is a few bites.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=69)** The decompressed file, a few billion.
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=72)** That sort of expansion is rare outside of compression, and with modern disc sizes, filling a disc on a traditional computer is less of a problem than it was.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=84)** But never underestimate the power of XML to expand a data structure.
>
> **[1:29](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=89)** IOT is another story and one we'll come to.

> [!info]- Semantic Content
>
> **Env Vars:** unix (1), xml (1), iot (1)
> **Exercise Files:** zip file (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How attackers spend your budget
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=0)** - [Instructor] Systems that automatically scale to handle load are wonderful.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=5)** The idea that resources are just available to you as you need them is great.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=11)** And you pay for it.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=13)** Wow, can you be made to pay for it.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=16)** I remember talking to a friend about a design change.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=19)** They'd turned off SSL for a game they ran and I was making the security case when he stopped me in my tracks by saying, "Yeah, but we got to decommission 30,000 servers."
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=32)** Well, okay.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=34)** I thought for a second and said, "How do you decommission 30,000 servers?"
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=40)** He said, "We stopped paying Amazon for them."
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=43)** The ability to provision and deep provision servers at scale is amazing and wonderful.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=50)** And sometimes it's also expensive.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=54)** That leads to two types of denial of service attacks.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=57)** For one, you've set and hit budget limits and you stopped getting extra scaling.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=63)** For the other, you forgot to set budget limits and you're faced with a very large bill.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=70)** The former is probably the way to go.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=74)** It's easier to add budget than to unspend it.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (1)
> **Speakers:** - [instructor] (1)

#### How attackers drain your battery
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=0)** - [Instructor] The last major resource subject to denial of server attacks is battery.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=7)** For laptops or phones, depleting the battery usually isn't a big deal.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=12)** You plug it in again.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=14)** But for devices that may not be close to power, like security cameras, battery life can be a very big deal.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=22)** Things that drain it are meaningful attacks.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=26)** It used to be that batteries not included was on the side of every toy you got on your birthday.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=32)** Batteries were something we inserted.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=35)** Now, for size reasons, batteries are often gel packs that are tightly integrated and can't be replaced at all.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=44)** Rechargeable batteries degrade with charge cycles, and so, attacks have a minor permanent effect.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=51)** Lithium ion batteries also display memory affects if they're charged too often, and so, attackers might try to invoke those side effects.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=60)** It's all rather draining.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 2. Properties of DoS Attacks

#### Persistence and transience of DoS
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=0)** - [Instructor] Attacks have many properties including persistence or transience, clever or naive and native or amplified.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=10)** Persistence means that the effects of the attack continue until you act.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=15)** A battery is discharged until someone plugs it in.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=18)** Transience means the effects go away when the attack does.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=23)** No one is throwing a gajillions of packets down the wire anymore.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=28)** Transience and persistence tend to be very tied to the resource.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=32)** Attacks on CPU or networks tend to be transient.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=37)** While attacks on storage, battery and budget tend to be persistent.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=42)** Transience or persistence, and all of the other properties apply to each of the types of resources that can be depleted.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=51)** A given attack can combine those properties in many ways.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=55)** So you can have a clever attack on battery consumption, or you could just ask it for lots of work, but these are properties of the attack, not of the resource.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Env Vars:** cpu (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Naïve to clever: Understanding DoS
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=0)** - [Instructor] At the naive end of attacks, is sheer quantity.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=5)** If you can send a gigabit a second, why bother with subtlety?
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=9)** When disk space was expensive, music files could be a denial of service.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=14)** Today, we don't even think about storing videos.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=18)** At the clever end of denial of service attacks are ways to make a small request, that you know generates lots of work.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=27)** For example, call a fancy French restaurant and tell them you're lactose intolerant, when making a reservation.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=34)** Many of their dishes use sauces that include butter or cream and rather than remake those sauces many restaurants will limit the diner's choices.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=45)** A really fancy place might make something special and new for you, choosing to absorb that work.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=52)** Of course, that's a real personable requests from everyone's perspective.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=57)** No one wants the diner to suffer a bad reaction to the food.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=61)** What transforms it into an attack is the motive, calling for several reservations on the same night with different restrictions, with no intent of ever showing up.
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=72)** Early versions of many internet cryptography protocols suffered from these problems.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=78)** The server had to do expensive cryptography without the client having done the same.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=84)** Clever attacks may be designed, not against your infrastructure, but against your business logic and processes.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=93)** They may start with measured probes to see which queries take the longest to run.
>
> **[1:38](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=98)** I'd like page seven of your eight nonstick pans, sorted by smallest to largest discount, with two stars or more and available for immediate treatment, please.
>
> **[1:48](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=108)** And then sending lots of those or, lots of those with small variants to break cache.
>
> **[1:56](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=116)** Well, anyone can engage in a naive attack.
>
> **[1:59](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=119)** It's tempting to say that only sophisticated ones can engage in clever attacks.
>
> **[2:06](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=126)** That leads you to think there will be more naive attacks.
>
> **[2:11](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=131)** That would be wrong, attackers will do surprising things and there may well be shortcuts to do what you think requires cleverness or sophistication.
>
> **[2:22](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=142)** Never underestimate how cleverly a fool will break a foolproof defense.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Amplified or native: Two modes of DoS
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=0)** - [Instructor] Attacks can use the attackers resources or someone else's.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=6)** Using someone else's resources starts with finding or finding out about a resource that will return more than its sent.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=15)** Ideally, the amplifier will use UDP so the attacker doesn't need to succeed at a TCP handshake.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=22)** Unix machines used to offer a charge in service that would send a stream of characters, for debugging if packets we're going through.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=30)** So attackers would send a request to the broadcast address, say 10.0.0.255 port 19 and every machine on the network would reply with a stream of packets.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=45)** Oh, the nineties.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=46)** They were a simpler time and the TCP handshake was easier to fake too.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=52)** Today these amplifications are harder to find, but variants with DNS and memcached are common.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=59)** Memcached is service designed to cache and quickly return data.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=64)** Usually returns far more data than the callers sends.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=69)** A single 203 byte request can result in 100 megabyte response.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=76)** Of course, with things like remote file inclusion attacks, you can get a server to make requests on your behalf, DOSing itself.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=84)** Again, cleverness can really help the attacker.
>
> **[1:28](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=88)** You can't assume that only rich or powerful attackers will find the amplifiers and you can't hope that you can outrun the bears.
>
> **[1:37](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=97)** There's an old joke about two hikers who meet a bear in the woods.
>
> **[1:41](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=101)** One of them sits down and starts taking off his boots.
>
> **[1:44](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=104)** The first looks at him and says, aren't you running?
>
> **[1:47](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=107)** The second hiker says, I don't need to outrun the bear.
>
> **[1:50](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=110)** I just need to outrun you.
>
> **[1:52](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=112)** Ha, ha, ha, but today's bears will set fire to the forest using instructions they found on the internet.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (2), udp (1), dns (1)
> **CLI Commands:** find (2), make (1)
> **Ports:** port 19 (1)
> **Versions:** 10.0.0 (1)
> **Speakers:** - [instructor] (1)


### 3. DoS in Various Technologies

#### Mobile and IoT denial of service
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980&t=0)** - [Instructor] Anyone who's lost cell service unexpectedly in a denser urban building, in the mountains or anywhere in between will be very aware of the possibilities for accidental denial of service against cell networks.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980&t=16)** These problems crop up during disasters when everyone's trying to use the phone, hint, send text messages, also during massive conferences, celebrations like your team winning the pennant or St. Patty's day in Chicago.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980&t=30)** From the server's perspective, this can look like a denial of service attack against the end point.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980&t=36)** And from the end point, it can look like a denial of service attack against the infrastructure or server.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980&t=42)** Denial of service against phone networks can be incited by falsely claiming they cause the plague or by jamming systems.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980&t=51)** Of course, mobile devices have batteries and physical cases and we know that both fail.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980&t=57)** In that they're like IOT devices, all are vulnerable to the dreaded cup of coffee.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980&t=64)** In each case you have to plan for conductivity failure and sometimes those failures won't heal themselves.

> [!info]- Semantic Content
>
> **Env Vars:** iot (1)
> **Speakers:** - [instructor] (1)

#### Cloud denial of service
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=0)** - [Instructor] Let's talk about denial of service attacks against cloud-based systems.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=5)** And here I mean systems designed and built to be in the cloud, not a server you forklifted, which is vulnerable and exactly the same way in the cloud as it was in your data center.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=16)** I mean systems that are designed to scale up and down as needed, because here you have a choice about your response to an attack.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=26)** You can scale up paying for resources and hoping the attackers get bored before your CFO gets angry, or you can accept the denial of service and hope your customers come back.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=39)** That's an interesting position and represents an important difference between denial of service and other threats.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=46)** There's an entire set of controls that are operational.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=50)** There's another important denial of service attack against cloud systems, and that's Christmas.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=56)** This is a technical point, not a religious one.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=59)** As more and more presents involve the internet, kids open their presents, the presents all connect to the internet and things get overloaded.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=68)** The demand can be so high that you might not be able to buy instant cloud spot instances.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=75)** This means your defense is don't just forklift into the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** cfo (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. DoS Defenses

#### Designing for resilience
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=0)** - [Instructor] Testing for load and testing resilience under a load is a crucial step.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=6)** Make sure that each component is ready to accept either unexpected load or unexpected disappearance and reappearance of the nodes it talks to.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=18)** Understand what the load is per count, per action and what variants is reasonable.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=26)** How many photos, songs, videos, can one account upload?
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=30)** How many messages might they send?
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=33)** Are there ways they can amplify the use of your resources against you or someone else?
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=40)** Chaos monkeys which intentionally break your system seems scary at first but real systems break in strange ways.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=51)** If yours can't handle some intentional breakage under your control, why do you think it will resist a real attack?
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=59)** Security is always a system property.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=64)** Some people talk about the weak link but that's still focusing on each link, perhaps ignoring if the chain is properly used and availability even more than most other security properties is a system property.
>
> **[1:20](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=80)** Each component being resilient on its own is helpful, and you must understand how they all play together to achieve resilience.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Quantity as a defense
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980&t=0)** - [Narrator] Quantity has a quality all its own and if you have enough capacity, you don't have to worry about cleverly allocating it.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980&t=10)** You can get to enough capacity by spending energy on making every transaction efficient and when you do, everything scales better.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980&t=19)** Of course, at some point every system has a limit or snag.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980&t=24)** The question is, will you be ready for it?
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980&t=27)** Do you know where the different bottlenecks are?
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980&t=30)** Does your system, as a system degrade gracefully as it starts to get full?
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980&t=37)** Graceful degradation means sending capacity reached alerts and errors, not serving the most expensive requests.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)


### 5. EOP

#### What is elevation of privilege?
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980&t=0)** - [Instructor] Elevation of privilege attacks are all focused on one thing, gaining privileges.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980&t=7)** Going from anonymous internet user to able to run code, going from normal user to route from normal user to cloud admin.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980&t=16)** By running code, I include both running a few instructions included in an exploit and in interactive shell, but it's the ability to make a computer do your bidding.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980&t=32)** Most of these attacks work by finding a way to have a parser treat the attacker's data as code.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980&t=39)** SQL injection, cross-site scripting, stack smashing, command injection, all work because parsing complex streams is hard.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980&t=50)** The attacks tend to target victims with privileges because, while taking candy from a baby is reputedly easy, babies don't tend to have very good candy.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980&t=62)** Code that takes untrusted input needs to do two things.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980&t=68)** It needs to treat it exceptionally carefully and it needs to attenuate its privileges following a careful plan.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Privilege and authority
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=0)** - [Narrator] The E in STRIDE can stand for either elevation of privilege or expansion of authority.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=8)** And while these are closely related concepts, it's worth a shift to the expansion framing.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=15)** Let me explain why.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=16)** I'll start with definitions.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=18)** Privilege is the ability to make changes to security configurations, while authority is the ability to perform actions on the system, and that definition of privilege gets squishy.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=35)** Is adding an account a matter of permissions, or being root, a privileged account, or is it specific privileges like Windows SE Create Authority is more clear.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=48)** It's the number of files or APIs a program can access multiplied by the number of ways it can access each.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=57)** A program with less authority has less flexibility and can do less damage, and so attackers want to expand their authority, out of long habit, I still talk about accounts like Root and Administrator as highly privileged, and sometimes I'll talk about more or less privilege.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=78)** Think about what you and the people around you get from Precision.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=83)** For clarity, we should all make a small effort to use the modern framing of expansion of authority.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Env Vars:** stride (1)
> **Speakers:** - [narrator] (1)

#### Input corrupts
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=0)** - [Instructor] Attacks require feeding input to the target.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=5)** Being able to send something that the defender didn't plan for is a necessary step in convincing the defender to do the wrong thing.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=15)** Sometimes defenders do the wrong thing of their own volition, like allowing sign channels, but setting that aside attacker input, like all input, is parsed.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=27)** When it's parsed, the parser can be confused in a couple of ways.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=32)** Problems with length, token separation, and encoding decoding.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=37)** The parser can make an assumption about length.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=41)** This was the mistake exploited by the classic C Stack smashing attack and it's integral to de-serialization attacks, which expect that the next instruction lands on a certain boundary.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=55)** The parser can find a token separator and break input into different tokens than you expect.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=62)** This happens, for example, when the attacker includes a semi-colon in something parsed by the shell.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=69)** A parser can insert one of these meta-characters as it decodes input.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=74)** The list is not comprehensive, but these are some of the main problems which happen.
>
> **[1:22](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=82)** There's a deep engineering discipline to taking advantage of these issues.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=87)** We've a track on exploit development techniques at Black Hat each year.
>
> **[1:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=92)** What you need to remember is to carefully distrust input, and to carefully push that input through pipes designed to consistently get you something you can use safely.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** require (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Main forms of corrupt input
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=0)** - [Instructor] Let's make this concrete with some specifics.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=4)** We'll talk about command arguments, including file names, interpreter commands, and processor instructions.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=12)** Let's say we have a command, open file name.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=16)** Do we want to allow the thing that sent us input to open every file that we can access?
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=23)** Sometimes that's fine.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=24)** For example, in an interactive shell.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=27)** Other times, our code builds filings with input.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=32)** We might expect that it's going to open a file in the current directory.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=36)** And the classic attack is to include ../../etc/password in the file name.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=43)** Depending on what's parsing the file name, you might send it something with a quote mark.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=48)** In which case, now there's an extra token.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=51)** Depending on exactly how the arguments to open are parsed.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=56)** A broader form of this happens with interpreters.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=61)** That interpreter might be Bash or Python glue code, might be on a server or a serverless implementation.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=68)** It might be a web browser.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=70)** In the glue code we get command execution.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=73)** In the browser, cross-site scripting.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=76)** The input might be an extra token.
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=79)** Or it could exploit the order of operations.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=83)** That includes that the shell will process commands in back ticks, subshells, and parentheses and other commands whose output is used in the command before executing the main command.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=94)** Similarly, environment variables are parsed early.
>
> **[1:40](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=100)** As a developer, your code should parse conservatively and defensively choosing which metacharacters to allow through before parsing data tune interpreter.
>
> **[1:54](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=114)** The list of metacharacters is specific.
>
> **[1:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=117)** Choose the next parser, but generally A to Z, capital and lower, zero through nine are treated as literals.
>
> **[2:07](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=127)** There are of course, exceptions to everything.
>
> **[2:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=130)** What's more, these features, these metacharacters are incredibly powerful and useful.
>
> **[2:16](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=136)** Unfortunately, they're useful to both you, and an attacker.
>
> **[2:21](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=141)** Less broadly useful is the C convention of ending a string with a null.
>
> **[2:25](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=145)** And the developer hostile length aware string commands like strncat and strncpy.
>
> **[2:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=152)** An attacker who sends you more characters than you expect, can overflow a buffer and write instructions onto the stack.
>
> **[2:40](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=160)** These attacks are not atomic units easily separated, but rather are a spectrum of ways in which attacks corrupt your code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), include . (1), case, (1)
> **CLI Commands:** make (1), python (1)
> **Tools:** bash (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. EOP Defenses

#### Ways to defend against EOP
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980&t=0)** - [Instructor] What makes input trustworthy?
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980&t=3)** When it's immutable strings compiled into the code, it's trustworthy, nothing else is.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980&t=10)** By definition immutable variables can be modified by someone.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980&t=15)** If those someones are outside your trust boundaries, they may gain privileges to get things done by modifying your input, modifying your configuration files, your environment variables, your DNS or anything else that they can.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980&t=30)** To defend against these attacks, we have a set of defenses including validation, paranoid parsing and attenuation by your code, type safety and memory design at the compiler and operating system level and sandboxes and other isolation techniques at the operating system or deployment level.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980&t=52)** Some of these defenses fall on the developer writing the code, others on the architects selecting languages and environments.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980&t=61)** Yet others are choices that can be made by operations to buttress those defenses and provide defense in depth.

> [!info]- Semantic Content
>
> **Env Vars:** dns (1)
> **Speakers:** - [instructor] (1)

#### Validation to defend against elevation
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=0)** - [Instructor] Let's start with validation, making sure the data is what you expect.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=7)** There's a level at which this is simply good reliability practice.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=12)** If the data isn't well-formed, what are you going to do with it anyway?
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=17)** By the way, that's text with extra diacritic marks.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=22)** A lot of them.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=25)** There's an argument that HTML became one of the most popular technologies in the world because browsers were generous in their parsing.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=34)** And now HTML is a freaking mess and parsing HTML is a morass of workaround for technical debt taken on in 1994.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=46)** You don't want or need that debt.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=50)** You can check your input and the details depend on the code you're writing.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=57)** There's also a point where validation goes beyond reliability, checking for good-natured bad data, to evilly-crafted data, data that's encoded three times because your parser looks at the first two, pointers to pointers to pointers, new lines where you expect carriage returns, semi-colons in the midst of comment characters, nulls in the middle of text strings.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=83)** And as you validate that the data is what you expect, you need to be explicit about your expectations.

> [!info]- Semantic Content
>
> **Env Vars:** html (3)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Validate for purpose to prevent elevations
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=0)** - [Instructor] So which of these strings on screen do you need to detect and reject?
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=7)** Validation happens for a reason and for a purpose.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=11)** You can do validation as data comes in.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=15)** No one would ever send more than 640K.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=19)** As you send it out, checking is in two flavors.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=22)** One is a courtesy to the next parser.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=26)** The other is a hail Mary because you don't feel you can rely on that other parser to be safe and are trying to avoid sending an attack along to it.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=37)** That second flavor, the hail Mary, is really hard.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=41)** You have to assume your attacker can take your system into a lab and hone their attack in secret until it gets through.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=50)** It's much better to improve that second parser when it's your code and so you can.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=57)** When parsing garbage, you want to be paranoid about it.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=61)** Writing your parser in a type safe language, putting it in a sandbox, and other defensive measures are probably appropriate.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=69)** Another useful pattern is transformation.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=73)** If you accept markdown and parse it into HTML, then the output HTML can be better formed than if you attempt to sanitize or clean out user-submitted HTML.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=85)** You can canonicalize the markdown until it's stable and then transform it.
>
> **[1:31](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=91)** Each time you hit open bracket, a pound, an ampersand, you can encode it into a harmless bit of HTML.
>
> **[1:41](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=101)** Or better, you can take A to Z, lower, upper, zero through nine, and encode everything else.
>
> **[1:50](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=110)** Thinking about what else goes into that list and why is a useful exercise.

> [!info]- Semantic Content
>
> **Env Vars:** html (4)
> **Definitions:** is a  (3)
> **Code Keywords:** else. (1)
> **Speakers:** - [instructor] (1)

#### Validation not sanitization for defense
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=0)** - [Instructor] What's the difference between validation and sanitization?
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=5)** Sanitization is a lovely goal when you want to preserve the thing you're sanitizing.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=12)** But let's be frank, input from the internet can be garbage.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=17)** You don't want to sanitize garbage.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=19)** You want to throw it away and tell the center why you threw it away.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=25)** This is somewhat less obviously true in the era of cloud services but Kerckhoff's principle still applies.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=33)** The security of a system cannot rely on anything not easily changed.
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=40)** And we were just talking about how hard it can be to change a parser.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=46)** So don't rely on security through obscurity.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=50)** If you're telling the sender why you threw it away and they keep coming back with improved variants of their attack, you might want to track how far they're getting and maybe even fix the parser to be smarter about where they're going.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=65)** If you track your errors, you can be confident that you're improving relative to real attacks that you can see.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), throw (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Attenuation in defense
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=0)** - [Instructor] What is attenuation?
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=3)** Let's imagine we have a command processor and it accepts commands of the form one, two, three with app one to ls, two to cat and three to rm.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=15)** Another processor simply accepts commands.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=18)** The client sends ls, rm or cat directly.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=23)** The first processor is attenuating its privilege.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=27)** It's narrowing what it's willing to do for its correspondence.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=32)** Obviously Sudo does this, it is the poster child for doing so intentionally.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=38)** But more to the point many programs control what they'll do on behalf of a client.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=44)** This is most obvious with servers.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=47)** A web server running as UID dub-dub-dub can run almost anything in user bin with any arguments at once but it doesn't pass that capability onto its clients the way the second processor does.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=62)** Wiki sites are famous for letting anyone edit them but they restrict that to what's in the Wiki docs directory.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=71)** They don't let just any one edit slash config.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=75)** Similarly, clients like web browsers restrict what they'll do with input from the mail or web server.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=83)** Part of the reason that Microsoft Office and then PDF renderers were so heavily attacked is that they didn't see themselves as needing to restrict themselves in what they could do and so it was only after years of attack that Microsoft started adding sandboxes.
>
> **[1:42](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=102)** To be fair another part of that delay is the restrictions can be grating for the person whose computer is controlled by them.
>
> **[1:51](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=111)** It's good to ask questions like, what can your code do and what do you think it passes on to its clients?
>
> **[1:59](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=119)** Do you have tests that look for ways it can be confused into acting on a client's behalf?
>
> **[2:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=125)** For code you acquire what do you think it should do and what might it do if an attacker confused it?

> [!info]- Semantic Content
>
> **CLI Commands:** ls (2), cat (2), rm (2), sudo (1)
> **Code Keywords:** let (2), this, (1), pass (1)
> **Env Vars:** uid (1), pdf (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Memory safety as a defensive tool
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=0)** - [Instructor] Memory safety is a useful tool for defenders.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=5)** Many attacks that elevate privileges do that by gaining control of the flow of execution.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=11)** Attackers can do that by putting JavaScript into your context, injecting SQL commands wherever your code expects data, by breaking up shell commands, or by writing directly into the processor stack.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=26)** These attacks take advantage of a problem called code data confusion, but preventing it is only a subset of what memory safety gives you.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=35)** The C language is notorious for how easy it is to shoot yourself in the foot.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=41)** There's all sorts of things that modern languages take care of, but in C, you as the developer have to manage them all.
>
> **[0:49](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=49)** These include the physical size of variables and their arrangement in memory.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=54)** There's a whole skill of exploit development, but what I want to make sure you understand is simply that if an attacker can unexpectedly control a single bit of memory, they can often use that as a wedge to take full control of the computer.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=73)** But as I said, modern languages take care of a lot of this for you with a property called type safety.
>
> **[1:20](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=80)** Type safety means that an integer is an integer, and the system won't randomly cast it to be something else to be helpful.
>
> **[1:29](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=89)** It means that each variable has a size and that the code won't randomly write more data than you expect.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=96)** Type safety defenses are not perfect.
>
> **[1:39](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=99)** There's been a series of attacks under the label deserialization, often specifically Java deserialization, which just goes to show that bad marketing for an attack class can skew its impact.
>
> **[1:53](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=113)** Immutable data can be even better than type safety.
>
> **[1:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=117)** Because it's immutable, it's only ever set once.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Stack canaries to protect your code
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=0)** - [Narrator] Beyond managing variables, compilers, linkers, and related tools, can provide meaningful defenses.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=10)** There's two basic forms, validation and randomization.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=15)** In this context, validation means adding checks to make sure memory is laid out the way the system expects it to be, while randomization moves memory around to make it harder for an attacker to plan their attack.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=30)** A good example of a validation defense is a stack canary.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=34)** This is a secret value that gets written onto the end of the stack.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=38)** Many attacks work by overwriting the stack and replacing the return pointer that tells the CPU what to do when it's done with the instructions for a given function.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=50)** So we put a canary on the stack and if the canary dies, so does our program.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=55)** A moment's thought should lead you to why that's the right thing.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=59)** Another validation style defense is to mark some memory as non-executable.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=65)** When an attacker jumps to non-executable memory and tries to run it, the CPU won't allow that, and the code dies.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=73)** Randomization defenses work because attacks are usually more than a few bytes by the time they're useful.
>
> **[1:21](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=81)** Attackers need to be able to put the larger stages of their attacks into predictable places so they can call that code.
>
> **[1:29](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=89)** And so recent operating systems and compilation tool chains have an ever-expanding set of randomizations.
>
> **[1:37](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=97)** These defenses are a bit like potato chips, just one isn't satisfying.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=103)** You want to enable as many as possible and only investigate which ones you should use if the full defense suite causes problems, which can include performance issues or breaking weird stuff that programmers used to do like address trampolines.
>
> **[2:01](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=121)** Don't worry about what an address trampoline was.
>
> **[2:04](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=124)** Realize that if one is still in your code that code is likely to be causing lots of problems and it's time to give it a well-earned rewrite.
>
> **[2:14](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=134)** Clean up the technical debt, so you can take advantage of modern defenses.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** cpu (2)
> **Definitions:** is a  (2)
> **Code Keywords:** function (1)
> **Speakers:** - [narrator] (1)

#### Sandboxes and isolation protect your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=0)** - [Instructor] The fundamental job of an operating system is to control what code can do.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=6)** This requires restricting its access to the hardware, and it often involves separation into accounts.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=13)** The operating system isolates hardware and the different accounts from each other.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=18)** Similarly, a firewall isolates network segments from each other.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=23)** Both the operating system and a firewall are semipermeable.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=28)** Each allows some things to go through based on a set of rules, a policy.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=35)** If you don't need a policy, you just need wire cutters.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=39)** When you have policies, it's important for them to express what you want, for it to be easy to express those policies, and for it to be easy for both people and code to analyze those properties and, wait for it, it's hard to get all those in one universal package.
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=58)** So, for example, old-fashioned units accounts isolate from one another and the operating system protect root and ring zero from normal accounts.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=68)** And those normal accounts have access to a slew of set UID programs but they also have access to interpreters like bash and arc.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=78)** They have access to network tools like ping and telnet.
>
> **[1:22](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=82)** Not really sure why your web server needs to telnet anywhere.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=87)** And so for many years people have been building sandboxes to implement different policies and to contain code in various ways.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=96)** Chroot, Jail, AppArmor and control groups are all ways to isolate code.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=103)** In fact, Docker uses control groups to give a Docker machine a certain limited view of the rest of the system.
>
> **[1:52](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=112)** All of these tools implement an isolation policy to protect the system from what a piece of code might do should it be malicious either because it was written that way, or because it was taken over.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2)
> **Env Vars:** uid (1)
> **Tools:** bash (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Bolt-on or built-in defenses
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=0)** - [Instructor] It's hard to build a sandbox that usefully encapsulates code that's not designed to work in a sandbox.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=8)** Fortunately, the engineers building Android and iOS we're able to look at the plague of malware that impacted desktops and design a very different set of sandboxes.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=19)** Because there were no Android or iOS apps, they had far more flexibility than the creators of say Docker.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=28)** When greenfielding or rearchitecting in a move to the cloud, it's very valuable to take strong advantage of the various available sandboxes.
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=40)** For example, AWS Lambda uses a mix of cgroups, namespaces, seccomp-bpf, iptables and chroot to provide you with a fairly robust sandbox with a documented shared responsibility model.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=55)** And because you're rearchitecting for Lambda, you can take advantage of all of those things.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=61)** In fact, you have to.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=63)** Not all hope is lost if you're using a more traditional operating system.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=69)** More and more functionality is coming in libraries which are adding protection and filtering.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=74)** There are always more and better ways to build in protection against elevation of privilege and to protect your system from threats.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), aws (1)
> **Code Keywords:** lambda (2)
> **Code Identifiers:** ios (2)
> **Env Vars:** aws (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Security by design
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=0)** - [Host] Each course in this learning path is designed to stand on its own and to be a helpful and deep guide to threats and threat modeling.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=10)** Some people talk about Stride as a taxonomy or categories, and it's easy to fall into that trap.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=18)** You can use it to think about the problems you hear about even when they don't fit into a single cubbyhole, more valuably STRIDE as a model of what can go wrong.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=31)** You can use it as a monic to help you answer the question, what can go wrong?
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=37)** That question is, at the heart of threat modeling, thinking about new systems we're building to make them more secure, you now have two powerful tools in your toolbox.
>
> **[0:49](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=49)** The four question framework helps us structure the work we do in threat modeling by asking, what are we working on?
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=55)** What can go wrong?
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=56)** What are we going to do about it?
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=57)** And did we do a good job?
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=59)** And Stride helps us answer again that question of what can go wrong?
>
> **[1:06](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=66)** These two tools may be all you need.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=69)** Many people will use the four question framework and Stride to secure their systems.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=78)** Others will want to go deeper.
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=79)** And for those, I want to share a few resources.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=83)** First, there's a threat modeling manifesto.
>
> **[1:26](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=86)** A group of us released this to share the values, patterns, and anti-patterns that we've observed over our careers.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=96)** For a more comprehensive view, check out my books.
>
> **[1:39](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=99)** "Threat Modeling, Designing for Security" and "Threats: What every engineer should learn from Star Wars."
>
> **[1:47](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=107)** And I deliver much more in depth, day long, two day, sometimes even longer, training courses for organizations where they really want to go beyond what's in these courses.
>
> **[2:01](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=121)** With that, I believe that you are now set up for success.
>
> **[2:07](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=127)** I encourage you to go forward and make things more secure.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** stride (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [host] (1)


## Path Context

### In [[Improve Your Threat Modeling Skills]]
← [[Threat Modeling- Information Disclosure in Depth]] | **6 of 6**

## Appears In

- [[Improve Your Threat Modeling Skills]]

## Related Courses

_Courses sharing skills:_

- [[Threat Modeling- Repudiation in Depth]] — Cybersecurity, Threat Modeling
- [[Securing Containers and Kubernetes Ecosystem]] — Cybersecurity
- [[Threat Modeling for AI-ML Systems]] — Threat Modeling
- [[AI in Cybersecurity- The Future of Red Teaming and Blue Teaming]] — Cybersecurity
- [[Building a Cybersecurity Awareness Program]] — Cybersecurity

---

[↑ Back to top](#)