---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: threat-modeling-information-disclosure-in-depth
url: "https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth"
duration_minutes: 29
duration: 29m
level: Intermediate
updated: 8/22/2024
learners: 67716
skills:
  - Threat Modeling
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGQNLVC95Gqtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1597164586340?e=2147483647&amp;v=beta&amp;t=4-eWHR3TjttHcQrqrIfY-ChKi1WzklyuXzfJQsrnnao"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Improve Your Threat Modeling Skills]]'
prev_courses:
  - '[[Threat Modeling- Repudiation in Depth]]'
next_courses:
  - '[[Threat Modeling- Denial of Service and Expansion of Authority]]'
path_nav: '[{"path":"Improve Your Threat Modeling Skills","position":5,"total":6,"prev":"Threat Modeling- Repudiation in Depth","next":"Threat Modeling- Denial of Service and Expansion of Authority"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/threat-modeling
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Threat%20Modeling-%20Information%20Disclosure%20in%20Depth.md)

![Threat Modeling: Information Disclosure in Depth](https://media.licdn.com/dms/image/v2/C4E0DAQGQNLVC95Gqtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1597164586340?e=2147483647&amp;v=beta&amp;t=4-eWHR3TjttHcQrqrIfY-ChKi1WzklyuXzfJQsrnnao)

# Threat Modeling: Information Disclosure in Depth

> STRIDE is a popular threat modeling framework that helps security pros and software developers think strategically about risk. This course addresses the I in STRIDE, which stands for information disclosure. You can learn how to preserve the confidentiality of the data, secrets, and other information you store, and the policies you need to put into place to share that information safely. Topics inc

> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth) | 29m | Intermediate | 68K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Allow me to disclose something](#allow-me-to-disclose-something)
  - [Four-question framework](#four-question-framework)
  - [Information disclosure as a part of STRIDE](#information-disclosure-as-a-part-of-stride)
- [**1. Data at Rest**](#1-data-at-rest) (3 videos)
  - [Authorized access](#authorized-access)
  - [Physical layer](#physical-layer)
  - [Metadata](#metadata)
- [**2. Data in Motion**](#2-data-in-motion) (3 videos)
  - [Encrypted and unencrypted](#encrypted-and-unencrypted)
  - [Metadata in motion](#metadata-in-motion)
  - [Non-internet data](#non-internet-data)
- [**3. Information Disclosure by Processes**](#3-information-disclosure-by-processes) (2 videos)
  - [Intentional disclosure](#intentional-disclosure)
  - [Metadata and security](#metadata-and-security)
- [**4. Side Effects**](#4-side-effects) (3 videos)
  - [Radios: Intentional and accidental](#radios-intentional-and-accidental)
  - [Timing](#timing)
  - [Interpretation](#interpretation)
- [**5. Disclosure in Certain Technologies**](#5-disclosure-in-certain-technologies) (3 videos)
  - [Cloud](#cloud)
  - [IoT and mobile](#iot-and-mobile)
  - [AI and machine learning](#ai-and-machine-learning)
- [**6. Defenses**](#6-defenses) (3 videos)
  - [Metadata management](#metadata-management)
  - [Secrets and secrets management](#secrets-and-secrets-management)
  - [Cryptography](#cryptography)
- [**Conclusion**](#conclusion) (1 videos)
  - [Secure by design: Bring confidentiality to your systems](#secure-by-design-bring-confidentiality-to-your-systems)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Allow me to disclose something
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=0)** - [Adam] Listen, do you want to know a secret?
>
> **[0:02](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=2)** Do you promise not to tell?
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=4)** It's not only a great song, it's a great introduction to the topic of information disclosure.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=10)** We share information knowing there's a risk of disclosure and we communicate about our policies and expectations for how data is going to be used.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=20)** This course is part of a series on threat modeling and the stride threats.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=25)** I'm Adam Shostack.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=27)** I've written the most popular book on threat modeling, helped create the CVA, and I'm on the Black Hat review board.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=34)** In this course, you'll learn about the threat of information disclosure and technical systems, including some classic models like information at rest and in motion, and the ways processes leak knowledge that attackers use as stepping stones.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=48)** We'll look at the side effects of computation and how physical effects of standard CPUs can mess up your security.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=56)** You'll get a broad overview and deep knowledge about information disclosure threats.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=62)** There's all sorts of information that we're ready to disclose in this course, so get ready.
>
> **[1:07](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=67)** So, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (2), data (1), [[Representational State Transfer (REST)|Rest]] (1), [[Security]] (1)
> **Env Vars:** cva (1)
> **Speakers:** - [adam] (1)

#### Four-question framework
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=0)** - [Instructor] This course is part of a series on Threat Modeling and the STRIDE Threats.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=9)** At the heart of threat modeling are four incredibly simple questions.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=13)** What are we working on?
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=14)** What can go wrong?
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=15)** What are we going to do about it?
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=17)** And did we do a good job?
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=20)** These questions act as guideposts as your threat modeling and analyzing your work.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=26)** If you're not sure why you're doing the work you're doing, tie that work to one of these questions.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=32)** In this course, I'll be digging deep into the details of what can go wrong and what are we going to do about it through the lens of information disclosure and confidentiality.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=50)** Information disclosure is a broad threat.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=53)** I can disclose information about data in motion or data at rest.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=60)** I can disclose information from a process, a file, or a device.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=65)** Information gets disclosed as devices emit energy through with the spectrum, and it's disclosed because they use energy, and the use of energy exposes information.
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=79)** There's information disclosure in the cloud, in mobile, and from IoT devices.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=87)** The mechanisms are different for each, but all result in a failure for confidentiality.
>
> **[1:32](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=92)** Looking at these four questions during information disclosure lens is part of the systematic structured and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (3), data (2), [[Representational State Transfer (REST)|Rest]] (1), cloud (1), [[IoT]] (1)
> **Env Vars:** stride (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Information disclosure as a part of STRIDE
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=0)** - [Instructor] This course is part of a series on threat modeling and STRIDE threats.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=7)** STRIDE is a mnemonic that stands for spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=18)** Well, that's the historic version.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=20)** Today, we often talk about expansion of authority in place of elevation of privilege.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=27)** The short form is authority is clearer.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=31)** It's what a program can do, and also authority is measurable.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=38)** We'll cover how information disclosure impacts the confidentiality of communication, storage, and processes.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=46)** You'll learn about how to ensure the confidentiality of your data.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=51)** The confidentiality of data can be protected by something more privileged like an operating system when the data is on that system.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=59)** And encryption can provide for confidentiality anytime, both on system and when the data is being transmitted or stored outside of your control.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=70)** We'll cover how to disclose the things you want to and how to best protect the things you want to keep secret.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Threat Modeling]] (1)
> **Env Vars:** stride (2)
> **Definitions:** is a  (1), stands for (1)
> **Speakers:** - [instructor] (1)


### 1. Data at Rest

[↑ Back to Table of Contents](#table-of-contents)

#### Authorized access
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=0)** - [Instructor] Data at rest is data that's being stored somewhere.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=6)** But don't limit your thinking to drives that are connected to a computer.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=13)** This can be normal files, databases, swap files, all sorts of things.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=20)** Any data that's stored, and the most obvious place for data is files.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=27)** Files obviously have content, and that's the first thing to consider.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=34)** Files can have content that's hidden to various degrees.
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=40)** Spreadsheets allow us to hide columns, and word processors let us reveal or hide tracked information.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=47)** You can explore tracking changes in Word in setting it to display no markup.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=54)** I love this headline from "The Onion."
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=56)** It's clearly a joke, but it highlights a good point.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=62)** Black highlighter can be removed, and even if it can't, the size of a computerized, precisely applied black bar reveals information about how many characters are hidden.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=74)** Also don't miss that there's a red squiggle so you can see a word is misspelled.
>
> **[1:21](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=81)** The same applies to discs.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=85)** Files are not deleted, really, but pointers to them get removed from the file lists in directories.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=95)** It used to be possible to zero out content, but flash drives apply wear-leveling algorithms to make that hard.
>
> **[1:44](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=104)** Additionally, there's another set of problems where confusion leads to authorization being granted.
>
> **[1:51](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=111)** That problem can be the person granting the access is confused.
>
> **[1:55](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=115)** For example, did you mean to grant access to sub-directories?
>
> **[2:01](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=121)** Did you intend to send that file to me?
>
> **[2:05](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=125)** Or did you not notice which Adam your email program auto completed?
>
> **[2:10](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=130)** You can also get a program to use its access to give you access you're not supposed to have, with Etsy password being the canonical example of what gets exposed when the program doesn't canonicalize file names.
>
> **[2:31](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=151)** These programs are often called confused deputies.
>
> **[2:34](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=154)** And because this course is about information disclosure, I want to just close that a confused deputy can cause lots of other problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Microsoft Word|Word]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Databases]] (1), [[Algorithms]] (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Physical layer
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=0)** - [Instructor] Thumb drives, backup tapes, and other storage devices are often designed to be removed and stored separately.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=8)** Even though removing hard drives can be a pain, it's not that much of a pain, and once done the data on the disc is likely accessible to anyone who could hold it in their hands.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=19)** Many things in the internet of things store their operating system and some data on flash drives.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=27)** Even cloud-oriented devices may have locally stored data like a cash, or security information like passwords all on local storage.
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=40)** The drive encryption is built in.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=42)** Then the encryption moves with the drive.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=45)** The operating system manages the key, then it doesn't.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=50)** So drives that include encryption may or may not delete the key when you move them to a new machine.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=57)** Good tests are do I need to enter a password when connecting this to a new machine?
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=63)** What if I enter the wrong password?
>
> **[1:06](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=66)** Protecting data at rest helps me rest better at night.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Representational State Transfer (REST)|Rest]] (2), [[Internet of Things (IoT)|Internet of things]] (1), cloud (1), [[Security]] (1)
> **Speakers:** - [instructor] (1)

#### Metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=0)** - [Instructor] Files have content, which is hopefully interesting.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=6)** And they also have metadata, names, modification times, et cetera.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=13)** Filenames signal that the contents are interesting.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=19)** The directory structure can also be interesting.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=21)** A path of layoffs/June/Alice is certainly of interest to Alice, even if it's a "your job is safe" note.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=35)** Knowing that Disaster_Recovery_Phone_Tree hasn't been updated since 2012 is meaningful.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=43)** There's no complete list.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=45)** Host names, frequencies, time of day.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=48)** The list of metadata is limited only by your imagination.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=54)** And the list of ways to misuse it is limited first by availability and second by the adversary's imagination about how to make use of your metadata.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Data in Motion

[↑ Back to Table of Contents](#table-of-contents)

#### Encrypted and unencrypted
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=0)** - [Instructor] Messages travel through channels.
>
> **[0:02](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=2)** An email is a message and it travels over an SMTP channel.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=6)** Much like we apply integrity controls to protect against tampering, we can apply encryption to either messages, channels, or both to protect against information disclosure.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=18)** Data in motion is easy to read.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=21)** Just grab a tool like WireShark and go to town.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=26)** Even if it's only on the local network, then you're trusting your router to do the right thing and never send it elsewhere.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=35)** Lastly, if the data is encrypted, you're trusting the encryption is configured right.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=42)** What happens when it's not configured right?
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=44)** If you haven't seen ECB Penguin, it's a great illustration of the importance of proper cipher setup.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=53)** Which also includes secure fallbacks, and ensuring that key exchange is done properly.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=61)** It's easy and wise to say encrypt at all, but sometimes that's hard.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=68)** Encrypted can be hard with many parties.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=70)** Getting agreement on which encrypted message tool to use can be a challenge.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=76)** Getting encrypted data to troops in the field requires that they have the crypto keys for the day.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=83)** Even without knowing the contents of communication, the fact that every time you get a message from an old college friend, you sell their company stock within 10 minutes looks awfully suspicious.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=96)** And it won't help to bring me into the game if that's the only time you text me.
>
> **[1:41](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=101)** The metadata about data in motion will shine through.
>
> **[1:46](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=106)** Also, I look bad in stripes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Wireshark]] (1), game (1), [[Metadata]] (1)
> **Env Vars:** smtp (1), ecb (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Metadata in motion
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=0)** - [Instructor] The content of communication with malware controlled on [example.com](https://example.com) is probably interesting, but even if their developer has done their job and encrypted both the channel and the messages, you can learn a lot from the metadata.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=17)** Let me pause for a minute to say how easy it is to get this wrong.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=22)** In my original script, I wrote "encrypted the channel and signed the messages," probably because I was thinking about tampering attacks on the channel, but this is a course on information disclosure.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=33)** We should focus there.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=36)** Back to the example.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=37)** The metadata is not just the domain name, but when communication started, how frequent it is, how much data is going in each direction.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=45)** Each of these can reveal something.
>
> **[0:49](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=49)** Knowing which bank someone uses makes it easier to target them with good phishing emails.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=54)** Digging in, the size of the packets coming from bank website can reveal which page or user is on, even if the details are encrypted.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=64)** You can't eliminate metadata, but you can reduce what you disclose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3), data (1), [[Phishing]] (1)
> **URLs:** [example.com](https://example.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Non-internet data
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=0)** - [Instructor] With the internet having won, it's easy to forget there are still systems which communicate without IP packets and there are lots of substrates other than wifi.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=12)** GPS, TV and radio, nearfield and Bluetooth, Zigbee.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=17)** The list goes on and on.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=19)** They include non-radio communication like QR code or ultrasound beacons.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=26)** There are lots of ways IP packets get carried, such as wifi, cellular systems like 3G or LTA.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=35)** Some weirdos even put IP6 packets in IP4 packets or lease lines from a phone company.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=44)** The tools to attack these systems are more specialized than the tools to attack standard IP networks, but don't confuse that for more security.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=53)** As a general rule, these systems are not very secure.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=60)** Their system designs have not been carefully analyzed, and even if they have been, the problems may persist.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=68)** They'll even use proprietary ciphers, which is always a red flag.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=75)** Don't mistake the lack of tools in Kali Linux for security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (2), [[Kali Linux]] (1)
> **Env Vars:** gps (1), lta (1), ip6 (1), ip4 (1)
> **Analogies:** such as (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)


### 3. Information Disclosure by Processes

[↑ Back to Table of Contents](#table-of-contents)

#### Intentional disclosure
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=0)** - [Instructor] Processes handout data intentionally, all the time.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=6)** If you connect to Microsoft's mail servers, they'll tell you their exact host name, the time, their time zone.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=15)** Sadly, they're running in UTC.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=19)** So I can't be all passive aggressive about them running on Seattle time, but I can ask, why do they feel a need to tell everyone that?
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=28)** Apache web servers, by default, send more information.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=35)** Internet-scale scanning projects like Shondan gather this information.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=41)** But even without such explicit banners, the behavior of systems can often be used to identify them.
>
> **[0:49](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=49)** A mail server might respond differently to HELO and ELHO allowing someone to fingerprint it.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=59)** These differences are at the heart of how Nmap does operating system identification.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=64)** In today's world, it makes sense for processes to be conservative in what they send.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), [[Microsoft]] (1), web (1)
> **Env Vars:** utc (1), helo (1), elho (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)

#### Metadata and security
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=0)** - [Instructor] Processes have secrets, almost like people do.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=5)** Processes want to keep their cryptographic keys and random numbers secret.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=9)** They want to protect passwords that you've provided.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=15)** This isn't information that needs to be protected in and of itself, it's stepping stones to other things attackers want.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=24)** Information can be disclosed intentionally to a log, in a configuration file, or other storage.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=33)** It can also be disclosed accidentally by a crash dump, in error message, or by your analytics software not knowing it was a secret.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=43)** Like the secrets that process use to protect your information, they have information that they use to protect themselves.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=51)** On a modern operating system where memory layout is randomized, information about that randomization is a stepping stone.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=60)** It's not just secrets.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=62)** Live file handles or socket handles can be stolen.
>
> **[1:07](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=67)** Lastly, sometimes a process will use its own memory to provide random data.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=73)** This is a bad idea.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=76)** Vulnerabilities like Heartbleed revealed cryptographic keys when doing that.
>
> **[1:22](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=82)** Use all zeros, all ones, a repeating pattern like OxDEADBEEF, or if you want to annoy people writing exploit code, fill your memory with 41414141.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Analytics]] (1), data (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 4. Side Effects

[↑ Back to Table of Contents](#table-of-contents)

#### Radios: Intentional and accidental
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980&t=0)** - [Instructor] If you're old enough to remember a microwave oven interfering with your TV reception, and if you think about all the ways that things emit energy, then you have a good idea of the energy that a receiver can use to learn about what that thing is doing.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980&t=20)** Beyond radio waves, there sound, there's heat, and everything technological emits all of those when it's turned on.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980&t=29)** And that turning on brings us to the far side of the equation.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980&t=33)** All computers use energy, and if you can measure that energy input, you can learn about the computation that's happening.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980&t=41)** People have recovered cryptographic keys by listening to the CPU with a built-in microphone, by carefully measuring the power coming in, and by timing of packets.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980&t=52)** Typing different letters takes different amounts of time, and that time information is transmitted by keyboard noise.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980&t=61)** It's crazy enough to make you line your rooms with tinfoil, power them with batteries, and carefully screen the devices allowed in or out, which is what most governments do for their most secure computation.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980&t=76)** American defenses against these are called Tempest, which used to be a secret code name before it leaked out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (2)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Speakers:** - [instructor] (1)

#### Timing
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=0)** - [Instructor] Even though computers are now super fast, computation still takes time.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=5)** How long it takes depends on the number of instructions.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=9)** And so programmers and compilers get very clever about reducing instruction counts.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=17)** So when you're doing things like encryption, the number of instructions it takes to execute a function like encrypt block key varies based on the key.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=29)** These attacks are strong enough that they work over a network.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=33)** Sometimes they take lots of tries and data comes out statistically.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=37)** So all that optimization cleverness has an information disclosure effect.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=45)** When you have data that you know is secret, you can and should zero it out before freeing the memory to make sure it's not reused.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=56)** But zeroing out data that's about to be freed is a waste, and so compilers can optimize that step away.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=65)** Some compilers support special calls to ensure this doesn't happen.
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=72)** It turns out the slogan move fast, break things means something different when we're talking about information disclosure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Interpretation
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=0)** - It's easy to glide through the data to the data indicates to the data shows.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=8)** Let's say you have access to lots of phone call logs.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=11)** You might be tempted to infer that someone who repeatedly calls a suicide prevention hotline is suicidal, but it might not be about them.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=20)** They might be looking for help dealing with a loved one.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=23)** There was an interesting demonstration of the gap between data and a story in a spat between Tesla and the New York Times.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=33)** Undisputed is that a reporter ran out the battery of a review loaner car driving around the parking lot.
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=40)** Tesla claims that the reporter did so intentionally.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=44)** The reporter claims to have been looking for the chargers.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=47)** The data is published.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=50)** The reporter's initial story was negative.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=53)** What really happened?
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=55)** I don't know.
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=58)** And more importantly, the data doesn't tell us.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=63)** There are lots of cognitive biases that make this sort of thinking easy.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=69)** And confirmation bias means it happens a lot.
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=72)** No, wait, confirmation bias means it's easy to not notice.
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=79)** See what I did there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6)
> **CLI Commands:** make (1)
> **Speakers:** - it (1)


### 5. Disclosure in Certain Technologies

[↑ Back to Table of Contents](#table-of-contents)

#### Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980&t=0)** - [Instructor] I hope it's obvious that the cloud is someone else's computer and that you're trusting that someone with your data, but the cloud is more than that.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980&t=12)** As a set of design patterns, it's also the agile and fluid use of third party services to deliver value.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980&t=22)** Many times that means including the latest and greatest geolocation service, ad service, payment service, emoji service, or what have you.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980&t=37)** These services are usually designed to be brought in with as few lines of code as possible.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980&t=42)** Deciding which data to reveal to the library requires code.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980&t=47)** And so, you tell the library everything and hope it does what you want.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980&t=54)** The same problem can exist in advertising libraries and other libraries for mobile apps.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980&t=59)** So, while the cloud is great, a little thoughtfulness can help you avoid accidentally disclosing information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (3), data (2), [[Design Patterns]] (1), [[Agile Development|Agile]] (1)
> **Speakers:** - [instructor] (1)

#### IoT and mobile
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980&t=0)** - [Instructor] In addition to the ease of bringing in new libraries, which may siphon up your information, mobile devices are crazy full of sensors, crazy full.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980&t=13)** Do you know an iPhone has a barometer in it to measure air pressure?
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980&t=17)** It helps with location accuracy by measuring altitude.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980&t=22)** That's on top of accelerometers, GPS, cameras, microphones, ambient light sensors, and Lord knows what else.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980&t=30)** Each of these sensors is better than you'd expect and getting better, faster than you expect.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980&t=41)** Sensors are now so cheap that it's easier to include them in hardware packages than to have two separate skews, and so they end up in everything.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980&t=54)** That means you need to be thoughtful about what permissions you ask for and what permissions you provide.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980&t=60)** It only makes sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Code Identifiers:** iphone (1)
> **Env Vars:** gps (1)
> **Speakers:** - [instructor] (1)

#### AI and machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=0)** - [Instructor] There's a lot of information that can be disclosed about a machine learning system.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=5)** It's tempting to say we're still learning.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=7)** But we can picture a system.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=9)** At some level, your training data is under your control.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=14)** If you disclose information about where those inputs are coming from or how you filter, an attacker might use that to design their attacks.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=23)** Machine learning systems are hard to tune and so if you have a good model, an adversary may want a copy of it.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=30)** Knowing how your ML system works makes it easier to design at half data.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=36)** As we talk about this, let's take a quick dive into the area of security by obscurity.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=44)** You may have heard, correctly, that security by obscurity is a bad idea and that's right.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=51)** We intuitively know that the little rock that has your house key in it, isn't as good as a key safe.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=57)** The rock depends on your attacker not noticing, the key safe has a combination that controls access.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=65)** So in this sense, not disclosing where you get your training data is less important than filtering it.
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=72)** If you get your training data from Twitter, people will notice, and you have to make sure you're treating Twitter as Twitter, and so the important defense is the filtering, not keeping the source a secret.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=85)** The most famous expression of this came from a French cryptographer named Kerckhoff.
>
> **[1:30](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=90)** He said, and I won't make you listen to my bad French, that the security of a system shouldn't rely on things which are hard to change.
>
> **[1:38](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=98)** He understood that information disclosure threats are real and what's most important is the overall security of a system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Security]] (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 6. Defenses

[↑ Back to Table of Contents](#table-of-contents)

#### Metadata management
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=0)** - [Instructor] The simplest defense is to not store metadata.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=4)** If you have to have metadata, hide it where it won't be seen.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=9)** A folder called Client 1 is less interesting than a folder called Blackmail Photos.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=16)** If you're working on a search feature that works over many accounts, you need to think carefully about the use of non-public data for searching.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=26)** For example, if I enter your phone number or email, do I get your profile?
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=31)** Do I get a list of your contacts?
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=33)** Do I get a list of people who have you in their contacts?
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=37)** I've been surprised to see doctors and lawyers who I'm working with start showing up in my social media feeds unexpectedly.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=46)** Starting with phone numbers, test with random ones, that of a suicide prevention hotline, and your own.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=53)** What's that, you're worried about what comes up with your phone number?
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=57)** Good, fix the problem, not the test case.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=61)** There is an important variant here, which is what we might call the robot.txt problem.
>
> **[1:07](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=67)** Wait, different robot.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=70)** robots.txt is a file that websites can use to communicate with search engines, saying don't search these places, which of course means it's the first thing an attacker is going to look at.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=84)** This also applies to message headers, software banners, and similar things.
>
> **[1:29](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=89)** Keep 'em simple, or accept that attackers will know the exact configuration of your software.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=95)** Defending against fingerprinting is harder.
>
> **[1:39](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=99)** You want error messages and responses to be informative and useful.
>
> **[1:44](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=104)** And so for many cases, it's worth deciding to accept that fingerprinting is possible and making that decision transparent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (3), [[Metadata]] (2), feature (1), data (1)
> **File Paths:** robot.txt (1), robots.txt (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Secrets and secrets management
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=0)** - [Instructor] You need to handle secrets carefully.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=3)** That includes knowing what secrets you have, storing them carefully, and destroying them after rotation when they're no longer needed.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=12)** Most modern platforms have APIs for storing local secrets, like the keychain on macOS, keystore on Android, or gpapi on Windows.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=23)** You also need to set permissions carefully.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=26)** You'll almost never want everything to be world readable, and that applies to S3 buckets, elastic storage, message keys, other cloud technology, just as much as files in /tmp.
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=40)** Hey, why are they in /tmp, it's 2020!
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=44)** Lastly, you need to make sure that secrets don't end up in error messages that might be shown to people on the other side of a trust boundary.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=53)** The best pattern is to show them a unique ID, which is also included in a canonical log message.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=62)** Careful error message design also includes the question, do you let people know an account exists?
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=68)** We used to have error messages, like invalid username or password, to disclose less information.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=75)** Today, the usability cost of not telling people if the account exists has changed.
>
> **[1:21](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=81)** We all have too many usernames and email accounts.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=85)** Trying to hide the existence of accounts is now the wrong trade off.
>
> **[1:31](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=91)** Managing secrets carefully doesn't mean hiding everything.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=95)** It includes deciding what you want to and can keep secret.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (1), [[Windows]] (1), cloud (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** macos (1)
> **Speakers:** - [instructor] (1)

#### Cryptography
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980&t=0)** - [Instructor] Cryptography is the best way to protect information from disclosure.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980&t=7)** When you create ciphertext by encrypting plain text with a key, then the only way to get the plain text from the ciphertext is to either get the key or break the crypto system.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980&t=20)** Modern crypto systems are very hard to break, so practically, an attacker needs to get the key.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980&t=28)** That means you need to manage a key very carefully as we discussed in secrets management.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980&t=35)** Also, encryption protects confidentiality.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980&t=39)** In normal use, it will not protect your data from tampering.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980&t=45)** Using authenticated encryption modes well can be tricky, and it's outside the scope of this course.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980&t=53)** Cryptography applied well is the best defense against information disclosure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (2), management (1), data (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Secure by design: Bring confidentiality to your systems
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980&t=0)** - [Adam] I hope you're interested in learning more.
>
> **[0:02](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980&t=2)** The best way to learn is to dive in and find information that's disclosed to the surprise of its owner.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980&t=9)** Do this to systems in a lab where you have authorization, but go get some tools, give these approaches a try.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980&t=16)** Make it real so you can speak to information disclosure as you analyze systems.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980&t=20)** This course is a great introduction to understanding information disclosure threats.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980&t=26)** So you can apply them to threat modeling and other security work.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980&t=29)** I have a set of deep dives here on LinkedIn Learning.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980&t=33)** For a more comprehensive view, check out my books, "Threat Modeling: Designing for Security," and "Threats: What Every Engineer Should Learn from Star Wars."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (2), [[Security]] (2), [[LinkedIn]] (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [adam] (1)


## Instructor

- [[Adam Shostack]]

## Skills Covered

- Threat Modeling

## Path Context

### In [[Improve Your Threat Modeling Skills]]
← [[Threat Modeling- Repudiation in Depth]] | **5 of 6** | [[Threat Modeling- Denial of Service and Expansion of Authority]] →

## Appears In

- [[Improve Your Threat Modeling Skills]]

## Related Courses

_Courses sharing skills:_

- [[Threat Modeling for AI-ML Systems]] — Threat Modeling
- [[Threat Modeling- Denial of Service and Expansion of Authority]] — Threat Modeling
- [[Threat Modeling- Repudiation in Depth]] — Threat Modeling
- [[Threat Modeling- Tampering in Depth]] — Threat Modeling
- [[Threat Modeling- Spoofing In Depth]] — Threat Modeling

---

[↑ Back to top](#)