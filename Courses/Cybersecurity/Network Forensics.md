---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: network-forensics-23931106
url: "https://www.linkedin.com/learning/network-forensics-23931106"
duration_minutes: 119
duration: 1h 59m
level: Intermediate
updated: 11/25/2024
learners: 3536
skills:
  - Network Forensics
  - Network Security
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHM5cX6efqsgw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731113345222?e=2147483647&amp;v=beta&amp;t=LZ2Xs4EhCvkuZS-Q2zWN1ilB4jU3Zk7nUFnJ8PG4qLA"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Computer Forensics]]'
prev_courses:
  - '[[Operating System Forensics]]'
next_courses:
  - '[[Wireshark- Malware and Forensics]]'
path_nav: '[{"path":"Explore a Career in Computer Forensics","position":4,"total":9,"prev":"Operating System Forensics","next":"Wireshark- Malware and Forensics"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/network-forensics
  - skill/network-security
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Network%20Forensics.md)

![Network Forensics](https://media.licdn.com/dms/image/v2/D4D0DAQHM5cX6efqsgw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731113345222?e=2147483647&amp;v=beta&amp;t=LZ2Xs4EhCvkuZS-Q2zWN1ilB4jU3Zk7nUFnJ8PG4qLA)

# Network Forensics

> Network forensics is used to find legal evidence in network devices. This course covers all the major concepts and tools of this growing (and exciting) technical field. Instructor Jungwoo Ryoo reviews the basics: the goals of network forensics, the types of investigations it's used for, a network forensic investigator's typical toolset, and the legal implications of this type of work. Then, he'll 

> [LinkedIn Learning](https://www.linkedin.com/learning/network-forensics-23931106) | 1h 59m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learning network forensics](#learning-network-forensics)
  - [What you should know](#what-you-should-know)
- [**1. Understanding Network Forensics**](#1-understanding-network-forensics) (7 videos)
  - [Goals of network forensics](#goals-of-network-forensics)
  - [Tools](#tools)
  - [Legal implications](#legal-implications)
  - [Current and future trends](#current-and-future-trends)
  - [Anti-network forensics techniques](#anti-network-forensics-techniques)
  - [Challenge: Acquiring additional information with Nmap](#challenge-acquiring-additional-information-with-nmap)
  - [Solution: Acquiring additional information with Nmap](#solution-acquiring-additional-information-with-nmap)
- [**2. Preparing for a Network Forensics Investigation**](#2-preparing-for-a-network-forensics-investigation) (7 videos)
  - [Network forensics investigation hardware](#network-forensics-investigation-hardware)
  - [Network forensics investigation software](#network-forensics-investigation-software)
  - [Understanding computer networking](#understanding-computer-networking)
  - [Understanding networking devices](#understanding-networking-devices)
  - [Understanding network data sources](#understanding-network-data-sources)
  - [Challenge: Wireshark filtering](#challenge-wireshark-filtering)
  - [Solution: Wireshark filtering](#solution-wireshark-filtering)
- [**3. Investigating Network Events**](#3-investigating-network-events) (10 videos)
  - [Network logs](#network-logs)
  - [Intrusion and security events](#intrusion-and-security-events)
  - [Network logs as evidence](#network-logs-as-evidence)
  - [Network logs and compliance](#network-logs-and-compliance)
  - [Audit logs](#audit-logs)
  - [Firewall logs](#firewall-logs)
  - [syslog](#syslog)
  - [syslog-ng](#syslog-ng)
  - [Kiwi Syslog Server](#kiwi-syslog-server)
  - [Microsoft Log Parser](#microsoft-log-parser)
- [**4. Investigating Network Traffic**](#4-investigating-network-traffic) (8 videos)
  - [Fundamentals](#fundamentals)
  - [Network models](#network-models)
  - [Subnets, subnet ID, and subnet mask](#subnets-subnet-id-and-subnet-mask)
  - [Protocol analysis](#protocol-analysis)
  - [ARP](#arp)
  - [ARP poisoning](#arp-poisoning)
  - [DNS](#dns)
  - [DNS poisoning](#dns-poisoning)
- [**5. Network Forensics Tools**](#5-network-forensics-tools) (8 videos)
  - [tcpdump and WinDump](#tcpdump-and-windump)
  - [tcpdump and WinDump hands-on](#tcpdump-and-windump-hands-on)
  - [Wireshark](#wireshark)
  - [Wireshark hands-on](#wireshark-hands-on)
  - [HTTP proxies](#http-proxies)
  - [HTTP proxies hands-on](#http-proxies-hands-on)
  - [Splunk](#splunk)
  - [Splunk hands-on](#splunk-hands-on)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning network forensics](https://www.linkedin.com/learning/network-forensics-23931106/learning-network-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/learning-network-forensics?u=76281980&t=0)** - Cyber crimes are increasing, and [[Network Forensics]] specialists are more in demand than ever.
>
> **[0:06](https://www.linkedin.com/learning/network-forensics-23931106/learning-network-forensics?u=76281980&t=6)** We need more professionals proficient in [[Computer Networking]] and well versed in [[Computer Forensics]] to investigate crimes in cyberspace effectively.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/learning-network-forensics?u=76281980&t=16)** Hi, my name is Jungwoo Ryoo.
>
> **[0:19](https://www.linkedin.com/learning/network-forensics-23931106/learning-network-forensics?u=76281980&t=19)** Welcome to my course, Network Forensics.
>
> **[0:22](https://www.linkedin.com/learning/network-forensics-23931106/learning-network-forensics?u=76281980&t=22)** Throughout this course, we'll learn how to use various network forensics tools like Syslog, Kiwi, TCP Dump, [[Wireshark]], Fiddler, Snort and Splunk.
>
> **[0:38](https://www.linkedin.com/learning/network-forensics-23931106/learning-network-forensics?u=76281980&t=38)** We'll cover all the major topics in network forensics through many hands-on demonstrations in [[Windows]] and [[Linux]].
>
> **[0:46](https://www.linkedin.com/learning/network-forensics-23931106/learning-network-forensics?u=76281980&t=46)** Now let's get started with learning network forensics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Forensics]] (5), [[Computer Networking]] (1), [[Computer Forensics]] (1), [[Wireshark]] (1), [[Windows]] (1)
> **Env Vars:** tcp (1)
> **Speakers:** - cyber (1)

#### [What you should know](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=0)** - Let's talk about what you should know before taking this course.
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=5)** I aim to help you quickly learn essential [[Network Forensics]] concepts and develop an overall understanding of the field without prerequisite courses.
>
> **[0:14](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=14)** However, background knowledge in computer or [[Digital Forensics]] would be helpful.
>
> **[0:20](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=20)** For that, you can check out my other course, [[Cybersecurity]] Forensics: [[Computer Forensics]].
>
> **[0:27](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=27)** Throughout the course, we'll be using both [[Windows]] and [[Linux]] operating systems, but don't worry if you don't have any spare computers to practice your skills on.
>
> **[0:37](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=37)** Watching the demos without doing them yourself will still be effective.
>
> **[0:42](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=42)** If you'd like to follow along, my setup includes three [[Virtual Machines]], Windows, [[Ubuntu]] and [[Kali Linux]].
>
> **[0:52](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=52)** We'll use the Linux and Windows command lines frequently, and I encourage you to experiment with them as much as possible.
>
> **[1:01](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=61)** Again, don't get discouraged if you're unfamiliar with the command line interface.
>
> **[1:07](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=67)** You should still be able to follow the concepts and you'll gain valuable experience.
>
> **[1:13](https://www.linkedin.com/learning/network-forensics-23931106/what-you-should-know?u=76281980&t=73)** I ensure that the software used in this course is mostly free or available as a trial version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Linux]] (2), [[Network Forensics]] (1), [[Digital Forensics]] (1), [[Cybersecurity]] (1)
> **Prerequisites:** prerequisite (1), setup (1)
> **Tools:** command line (1)
> **Speakers:** - let (1)


### 1. Understanding Network Forensics

[↑ Back to Table of Contents](#table-of-contents)

#### [Goals of network forensics](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=0)** - [Instructor] [[Digital Forensics]] investigates devices, storing, processing, and transmitting data over networks.
>
> **[0:10](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=10)** [[Network Forensics]] is a specialized field within digital forensics and focuses on the data exchange aspect of digital forensics.
>
> **[0:22](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=22)** Most computer applications rely on connectivity to the internet, and a significant part of network forensics involves analyzing traffic generated by these network applications.
>
> **[0:37](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=37)** The ultimate goal is still the same as digital forensics.
>
> **[0:42](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=42)** To produce evidence to prove or disprove a claim.
>
> **[0:48](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=48)** One of the objectives necessary to operationalize this is preserving network data.
>
> **[0:55](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=55)** Let's say we just had a data bridge.
>
> **[0:59](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=59)** A government sponsored attacker successfully infiltrated a corporate network and stole the personally identifiable information, or PII, of tens of thousands of employees.
>
> **[1:14](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=74)** Network data is transient.
>
> **[1:17](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=77)** Organizations typically don't store their network traffic in its entirety.
>
> **[1:23](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=83)** They also replace old log files with new ones.
>
> **[1:28](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=88)** If the data theft occurred long ago and you are just learning about it, you may have little to work with.
>
> **[1:37](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=97)** This is why early detection is crucial.
>
> **[1:41](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=101)** It allows you to preserve as much relevant data as possible while still available.
>
> **[1:49](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=109)** The transitory nature of network data also drives the second objective, which is acquiring network data constantly and comprehensively because you don't know when they will disappear and when you'll need them.
>
> **[2:04](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=124)** Collecting as much data as possible from as many sources as possible is necessary to accomplish this objective.
>
> **[2:13](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=133)** The remaining two objectives are to analyze data and to generate reports in near-[[Real-Time]] as significant network events happen.
>
> **[2:23](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=143)** Unlike crimes in physical spaces, illegal activities can be detected as they unfold in cyberspace, and we should make every effort to catch them red-handed.
>
> **[2:38](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=158)** As I pointed out earlier, this is the most effective way of tackling cyber crimes due to the fleeting nature of network data.
>
> **[2:49](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=169)** These objectives are similar to those of digital forensics, but also unique in the context of network forensics due to the particular characteristics of the data to be handled.
>
> **[3:02](https://www.linkedin.com/learning/network-forensics-23931106/goals-of-network-forensics?u=76281980&t=182)** We'll explore these network forensics specific problems and their solutions throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (5), [[Network Forensics]] (4), [[Real-Time]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** pii (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Tools](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=0)** - [Instructor] It's becoming easier to launch a cyber attack.
>
> **[0:04](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=4)** Attackers still need some programming skills, but attack tools are readily available online for them to leverage.
>
> **[0:14](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=14)** The first step in a cyber attack is reconnaissance or recon, which is all about gathering as much information as possible about your victim.
>
> **[0:24](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=24)** Criminals can conduct much of this initial recon through the internet.
>
> **[0:30](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=30)** A popular technique is using a search engine like [[Google]] to determine a company's organizational structure.
>
> **[0:39](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=39)** This can in turn, lead to a social engineering attempt in which an intruder impersonates a person of authority to gain access to confidential information such as a password.
>
> **[0:52](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=52)** Internet searches can also produce social security numbers or SSNs, credit card numbers, and internet protocol, or IP addresses, just to name a few.
>
> **[1:06](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=66)** You can do so much recon with a search engine like Google.
>
> **[1:11](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=71)** Believe it or not, Google hacking or dorks are an established term, as you can see here on this website.
>
> **[1:21](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=81)** Other recon tools such as [[Nmap]] and its graphical user interface or GUI version, Zenmap, are even more powerful because they allow users to probe cyberspace vulnerabilities directly.
>
> **[1:37](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=97)** Let's say attacker's goal is to discover what devices are active in a network.
>
> **[1:44](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=104)** All they need is to install Nmap on their computer.
>
> **[1:49](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=109)** To install Nmap on [[Linux]] type sudo space apt space install space Nmap.
>
> **[2:03](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=123)** Press enter.
>
> **[2:07](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=127)** Type Nmap space
>
> **[2:12](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=132)** - sn space 10.0.2.0/24.
>
> **[2:27](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=147)** This command scans host in a network whose subnet ID is 10.0.2.
>
> **[2:36](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=156)** The forward slash and the number 24 indicate that the first three numbers of the given IP address, 10.0.2, are the subnet id.
>
> **[2:49](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=169)** We'll discuss the meaning of the term subnet ID in more detail in another lesson.
>
> **[2:56](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=176)** Now, press enter.
>
> **[3:02](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=182)** Based on the returned output, we now know that the hosts with the ips shown here are up and running in the 10.0.2 subnet.
>
> **[3:17](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=197)** After learning what devices are active, you can continue to use Nmap to investigate even more by learning what ports are open and what software and its version are tied to the open ports.
>
> **[3:33](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=213)** What I'm showing here is only the tip of the iceberg.
>
> **[3:37](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=217)** You can do so much more with Nmap, including its stealth options to minimize the possibility of detection.
>
> **[3:46](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=226)** I always find it amazing that all these tools are available free of charge and so accessible, making the job of criminals easier.
>
> **[3:57](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=237)** Once the potential victim's vulnerabilities are learned, the next step is to launch an attack to exploit the weaknesses.
>
> **[4:05](https://www.linkedin.com/learning/network-forensics-23931106/tools?u=76281980&t=245)** As you might have guessed already, there are even more tool choices out there that implement the exploits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (7), [[Google]] (3), [[Linux]] (1)
> **Versions:** 10.0.2 (4)
> **CLI Commands:** sudo (1), apt (1), find (1)
> **Prerequisites:** install (3)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1), - sn (1)
> **Env Vars:** gui (1)

#### [Legal implications](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=0)** - [Instructor] It's reasonable to expect that legal professionals would challenge the credibility of the evidence network forensic specialists present in court.
>
> **[0:12](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=12)** A cross-check is a way to make your evidence more credible.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=16)** By cross-check, I mean the same event originating from multiple devices, strengthening the evidence.
>
> **[0:25](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=25)** Firewall logs and [[Intrusion Detection]] system, or IDS logs, can all point to the same user trying to connect to a server at a specific time.
>
> **[0:36](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=36)** However, for this to work, the clocks on the [[Hardware]] producing the log files must be synchronized to produce accurate timestamps.
>
> **[0:48](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=48)** It's impossible to correlate an event on one device to another without proper synchronization.
>
> **[0:55](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=55)** Network time protocol, or NTP, is a widespread mechanism for automating clock synchronization.
>
> **[1:03](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=63)** Devices connect to an NTP server, or its peers, to set their clocks periodically.
>
> **[1:12](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=72)** Thoroughness also increases the credibility of your data.
>
> **[1:16](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=76)** If you have an option, the recommended practice is collecting as much information as possible.
>
> **[1:24](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=84)** In the case of log files, you should log everything.
>
> **[1:29](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=89)** Server applications don't always come with their logging features turned on.
>
> **[1:34](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=94)** You may have to explicitly enable logging.
>
> **[1:39](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=99)** As you can see here, the [[Microsoft]] web server program, Internet Information Services, or IIS, requires you to enable HTTP logging after installation.
>
> **[1:53](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=113)** Tampering is another challenge to consider.
>
> **[1:57](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=117)** Intruders seek to cover their tracks by deleting evidence.
>
> **[2:04](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=124)** A network administrator must consider this possibility and should be ready to provide additional information to verify if an individual piece of evidence is missing due to a server outage or a possible attempt to delete it.
>
> **[2:20](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=140)** Any network devices could contain evidence relevant to an investigation.
>
> **[2:27](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=147)** They're also vulnerable to compromises.
>
> **[2:30](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=150)** If a router or server does not enforce access control or has little access control, it's tough to provide the authenticity of the evidence present on it.
>
> **[2:42](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=162)** Access control here means restricting permissions to read, write, and execute files, and monitoring user activities.
>
> **[2:52](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=172)** Because it's relatively easy to delete, alter and fabricate records on network devices, courts need a reasonable assurance that no unauthorized access occurred in the submitted evidence collected during the period of a network breach.
>
> **[3:12](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=192)** Cross checks through [[Data Collection]], tampering prevention, and access control are essential to avoid potential legal challenges.
>
> **[3:23](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=203)** Please remember seemingly minor things you do can have serious legal implications in court.
>
> **[3:30](https://www.linkedin.com/learning/network-forensics-23931106/legal-implications?u=76281980&t=210)** Always use caution and leading practices to prevent regrettable consequences in court.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1), [[Hardware]] (1), [[Microsoft]] (1), [[Data Collection]] (1)
> **Env Vars:** ntp (2), ids (1), iis (1), http (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Current and future trends](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=0)** - [Presenter] Technology changes are a dominant driving force in conducting a [[Network Forensics]] investigation.
>
> **[0:08](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=8)** Take [[Cloud Computing]].
>
> **[0:10](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=10)** Many companies have abandoned the idea of maintaining their own server rooms.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=16)** They use cloud service providers or CSPs and keep their servers in the cloud.
>
> **[0:25](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=25)** The use of CSPs complicates the job of a forensics specialist.
>
> **[0:31](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=31)** One of the immediate challenges is access.
>
> **[0:34](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=34)** Cloud service users or CSUs don't manage the network connecting their virtual computing resources.
>
> **[0:44](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=44)** This means that CSUs lack full visibility into the network activities relevant to an investigation.
>
> **[0:53](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=53)** There is also no way to access physical media like solid-state drives or SSDs.
>
> **[1:01](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=61)** Although presenting new challenges, advances in technology also provide unprecedented opportunities.
>
> **[1:09](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=69)** [[Big Data]] and [[Artificial Intelligence (AI)|artificial intelligence]] or AI are two such developments.
>
> **[1:17](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=77)** Computer networks generate an excessive amount of data.
>
> **[1:22](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=82)** Until recently, we didn't have any means of processing it effectively and automatically to detect traces of cyber crime.
>
> **[1:32](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=92)** Big data is an infrastructure technology that allows us to distribute the processing of an unmanageably large workload to many individual computers for faster and more scalable handling.
>
> **[1:48](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=108)** AI builds on big data in the sense that it supplies the [[Algorithms]] used to process a dataset.
>
> **[1:57](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=117)** Machine learning or ML is a subset of AI and is especially useful for detecting patterns.
>
> **[2:06](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=126)** One of the primary chores repeated across all types of network forensics investigations is discovering anomalies.
>
> **[2:16](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=136)** Investigators still do this manually, although they use various tools to automate as many aspects of their work as possible.
>
> **[2:28](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=148)** Using ML and big data platforms will help make the tedious process of anomaly detection and evidence gathering closer to full automation.
>
> **[2:39](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=159)** If the current trend of adopting ML continues, especially with the recent phenomenon of [[Generative AI]] or GAI, the future of network forensics will be bright.
>
> **[2:52](https://www.linkedin.com/learning/network-forensics-23931106/current-and-future-trends?u=76281980&t=172)** The newly emerging solutions will free network forensics specialists from mundane and repetitive tasks and enable them to focus more on tasks that require a highly trained human mind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Forensics]] (4), [[Big Data]] (4), [[Cloud Computing]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Algorithms]] (1)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** gai (1)
> **Speakers:** - [presenter] (1)

#### [Anti-network forensics techniques](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=0)** - [Presenter] In [[Cybersecurity]], we call anti-forensics techniques covering tracks.
>
> **[0:07](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=7)** One of the last steps in a cyber attack is to hide all the traces of intrusion to avoid detection.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=16)** Deleting log entries or replacing the files used for auditing with fabricated versions is a common method.
>
> **[0:26](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=26)** Attackers need significant time to accomplish their ultimate goals.
>
> **[0:31](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=31)** Let's say the goal is to steal credit card information.
>
> **[0:36](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=36)** Unlike what is open depicted in movies, this cannot happen in five minutes.
>
> **[0:42](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=42)** It takes careful planning and persistent efforts over days and month.
>
> **[0:49](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=49)** Reconnaissance or recon is the first step, followed by an initial compromise, which could happen through an email with malicious software or malware as its attachment.
>
> **[1:02](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=62)** One breach can lead to another, allowing more attack options or establishing a foothold for more serious future attacks.
>
> **[1:13](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=73)** Escalating privileges is a way to obtain more permissions and access to resources necessary to deal the ultimate blow to an unsuspecting victim.
>
> **[1:24](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=84)** An extensive coverup campaign is essential for this type of advanced persistent threats or APTs to continue for an extended period without being detected.
>
> **[1:37](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=97)** As I mentioned earlier, log files are major targets for this.
>
> **[1:43](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=103)** In addition to modifying them, attackers can disable logging altogether.
>
> **[1:49](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=109)** During an attack, new files may show up and modifications in a file system can occur.
>
> **[1:57](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=117)** An effective anti forensics operation should be able to conceal all these changes, and rootkits are what makes this happen by modifying operating systems or OSs.
>
> **[2:11](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=131)** This way, users get the illusion of things working normally while an active attack is underway.
>
> **[2:20](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=140)** Despite all these anti-forensics attempts, detection is still possible.
>
> **[2:25](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=145)** So cyber criminals rarely launch attacks from their own computers.
>
> **[2:30](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=150)** They acquire access to compromised computers called zombies and use them as their springboards to make more risky moves.
>
> **[2:39](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=159)** They're usually multiple layers of zombies, making it challenging to identify the true origin of a cyber attack.
>
> **[2:49](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=169)** [[Network Forensics]] professionals can benefit from studying how APTs work and the use of zombies, rootkits, and utilities to manipulate log files.
>
> **[3:03](https://www.linkedin.com/learning/network-forensics-23931106/anti-network-forensics-techniques?u=76281980&t=183)** Knowing what to expect and what to look for will reduce the possibility of overlooking evidence and improve the chance of catching a crime.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (1), [[Network Forensics]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [presenter] (1)

#### [Challenge: Acquiring additional information with Nmap](https://www.linkedin.com/learning/network-forensics-23931106/challenge-aquiring-additional-information-with-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/challenge-aquiring-additional-information-with-nmap?u=76281980&t=0)** (techno upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/challenge-aquiring-additional-information-with-nmap?u=76281980&t=5)** - [Instructor] We learned how to discover active hosts using [[Nmap]].
>
> **[0:10](https://www.linkedin.com/learning/network-forensics-23931106/challenge-aquiring-additional-information-with-nmap?u=76281980&t=10)** Your challenge is to find Nmap options to find out what ports are open on the active hosts in the network of your interest.
>
> **[0:21](https://www.linkedin.com/learning/network-forensics-23931106/challenge-aquiring-additional-information-with-nmap?u=76281980&t=21)** To learn more about the Nmap options, type man nmap.
>
> **[0:28](https://www.linkedin.com/learning/network-forensics-23931106/challenge-aquiring-additional-information-with-nmap?u=76281980&t=28)** Press Enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (4)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno upbeat music) (1)

#### [Solution: Acquiring additional information with Nmap](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=0)** (bouncy upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=5)** - [Instructor] The option you need is -F.
>
> **[0:10](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=10)** Let's check the IP address of the machine first.
>
> **[0:14](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=14)** Type ip address space show, press enter.
>
> **[0:24](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=24)** We are in the 192.168.0.0/24.
>
> **[0:25](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=25)** subnet.
>
> **[0:31](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=31)** Therefore type [[Nmap]]
>
> **[0:36](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=36)** - dash F, 192.168.0.0/24.
>
> **[0:50](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=50)** Press enter.
>
> **[0:54](https://www.linkedin.com/learning/network-forensics-23931106/solution-acquiring-additional-information-with-nmap?u=76281980&t=54)** It takes a little bit of time, but you should be getting the information on the host with open ports.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1)
> **Versions:** 192.168.0 (2)
> **Speakers:** - [instructor] (1), - dash (1)
> **Non-Speech:** (bouncy upbeat music) (1)


### 2. Preparing for a Network Forensics Investigation

[↑ Back to Table of Contents](#table-of-contents)

#### [Network forensics investigation hardware](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=0)** - [Instructor] Much of forensics evidence resides in network data, which is why recording the traffic between various devices is a top priority.
>
> **[0:12](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=12)** Higher end switches and routers have a port mirroring feature that allows them to send a copy of all data passing through one port to another.
>
> **[0:23](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=23)** An investigator plugs a network cable into a mirror port and connects it to a network recorder to capture live packets and avoid detection.
>
> **[0:34](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=34)** The term packet here means the smallest unit of network data transmitted or received by a network interface card, or NIC, at a given time.
>
> **[0:46](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=46)** Enabling port mirroring is as simple as making a few clicks.
>
> **[0:51](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=51)** This table shows that the destination port 1 mirrors the source port 4 network traffic.
>
> **[0:59](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=59)** Don't get disappointed if your device doesn't have a mirroring capability.
>
> **[1:04](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=64)** There are [[Hardware]] network sniffers like this one.
>
> **[1:08](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=68)** Do you see the arrow with the TAP label?
>
> **[1:12](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=72)** That's where you connect a piece of recording equipment.
>
> **[1:17](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=77)** In [[Wireless Networking]], eavesdropping is easier because access points, or APs, broadcast their signals.
>
> **[1:26](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=86)** Any device connected to an AP has the potential to intercept the network traffic meant for its peers.
>
> **[1:35](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=95)** The wireless NIC offers an option called promiscuous mode.
>
> **[1:40](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=100)** When turned off, this mode causes the NIC to ignore the data address to other destinations.
>
> **[1:48](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=108)** Because of this, turning on the promiscuous mode is a must if an investigator uses a wireless NIC to collect network data.
>
> **[2:00](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=120)** [[Wireshark]] is a popular tool for sniping network packets, including wireless signals.
>
> **[2:07](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=127)** Let's check if Wireshark provides the promiscuous mode option.
>
> **[2:13](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=133)** My Wireshark is already running on my desktop.
>
> **[2:18](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=138)** Go to Edit and then choose Preferences.
>
> **[2:24](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=144)** Select Capture, and you'll see the Capture packets in promiscuous mode.
>
> **[2:32](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=152)** Option enabled.
>
> **[2:36](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=156)** Whether wired or wireless, intercepted packets must be stored for further and later analysis.
>
> **[2:44](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=164)** Network data recorders or appliances you can purchase to hold the days or even a month's worth of network traffic.
>
> **[2:54](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-hardware?u=76281980&t=174)** They're expensive but are essential hardware for [[Network Forensics]] investigations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Hardware]] (2), [[Wireless Networking]] (1), [[Network Forensics]] (1)
> **Env Vars:** nic (4), tap (1)
> **Definitions:** is a  (3)
> **Ports:** port 1 (1), port 4 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Network forensics investigation software](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=0)** - [Instructor] A major [[Network Forensics]] tool is software that collects logs.
>
> **[0:06](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=6)** [[Windows]] operating systems, or OSes, manage their logs through a program called Event Viewer.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=16)** Let's try it.
>
> **[0:19](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=19)** Type Event in the search box here.
>
> **[0:23](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=23)** Press Enter.
>
> **[0:27](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=27)** Expand the Windows Logs folder.
>
> **[0:32](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=32)** Choose Security.
>
> **[0:35](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=35)** This is where you would see suspicious activities such as failed remote access attempts at 3:00 AM.
>
> **[0:45](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=45)** A workplace may have hundreds or thousands of computers to monitor, which is why we don't want to open the Event Viewer on each computer and manually check its logs as we just did.
>
> **[1:00](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=60)** A more effective way is to forward the log messages from each source and store them at a dedicated log server.
>
> **[1:09](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=69)** Simple Network Management Protocol, or SNMP, is the standard Windows uses to support log collection.
>
> **[1:19](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=79)** SNMP allows you to enable an agent program on a Windows machine.
>
> **[1:26](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=86)** The agent program monitors and looks for events to be sent to a central log server.
>
> **[1:32](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=92)** In the SNMP lingo, the messages an SNMP agent generates are called traps.
>
> **[1:42](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=102)** If you want to avoid learning how to set up SNMP, purchasing commercial software like EventLog Analyzer is a more straightforward solution.
>
> **[1:54](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=114)** You have both agent-based and agent-less options.
>
> **[2:00](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=120)** [[Linux]] has built-in features for managing logs, such as Syslog and Syslog-ng.
>
> **[2:08](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=128)** We'll examine them in more detail later.
>
> **[2:13](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=133)** A log server example we'll explore is SolarWinds Kiwi Syslog server.
>
> **[2:21](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=141)** Security information and event management, or SIEM, is the most sophisticated form of log management, and Splunk is the software implementation we'll try out.
>
> **[2:36](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=156)** In addition to producing, collecting, and analyzing logs, there are many other types of network forensics software, such as packet sniffing, traffic analysis, and [[Intrusion Detection]] systems.
>
> **[2:52](https://www.linkedin.com/learning/network-forensics-23931106/network-forensics-investigation-software?u=76281980&t=172)** We'll look at each of them closely one by one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Network Forensics]] (2), [[Linux]] (1), [[Intrusion Detection]] (1)
> **Env Vars:** snmp (5), siem (1)
> **Analogies:** such as (3)
> **Ports:** :00 (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Understanding computer networking](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=0)** - [Instructor] Networking connects computers, allowing applications running on them to communicate with each other and provide services to end users.
>
> **[0:10](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=10)** We enjoy the benefits of networking by using email, [[Cloud Computing]], and web content, just to name a few.
>
> **[0:21](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=21)** Each network device needs a network interface card, or NIC, to transform data into electrical currents, pulses of light, or radio waves, depending on the medium used to transmit the signals.
>
> **[0:38](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=38)** We use unshielded, twisted pair, or UTP, cables to send electrical currents, while fiber optics cables are used to send light pulses while the signals travel through the air.
>
> **[0:54](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=54)** Operating systems, OSs, are crucial in converting data into signals.
>
> **[1:00](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=60)** When a network application produces data to be transmitted like your email client generating a message to be sent, an OS adds multiple headers and trailers to the original message.
>
> **[1:16](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=76)** The headers and trailers are similar to an envelope we use to send postal mail.
>
> **[1:22](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=82)** As a mailing envelope requires physical mailing address information, the headers and trailers carry network addresses such as port numbers, internet protocol, or IP, addresses, and media access control, or MAC, addresses.
>
> **[1:42](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=102)** Another name for MAC address is internet address.
>
> **[1:48](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=108)** By the way, we call the additional information attached before the network application data header while what goes after it is called the trailer.
>
> **[2:01](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=121)** Different headers and trailers are used depending on the address information we're affixing.
>
> **[2:08](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=128)** Transmission control protocol, or TCP, header contains port numbers.
>
> **[2:14](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=134)** The IP header has IP addresses.
>
> **[2:18](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=138)** Ethernet header comes with MAC or ethernet addresses.
>
> **[2:23](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=143)** Each address has its own purpose when switches and routers attempt to deliver a network message.
>
> **[2:30](https://www.linkedin.com/learning/network-forensics-23931106/understanding-computer-networking?u=76281980&t=150)** We'll learn why we need these multiple addressing layers in another lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1)
> **Env Vars:** mac (3), nic (1), utp (1), tcp (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Understanding networking devices](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=0)** - [Instructor] Switches and routers enable a packet to travel from one host to another.
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=5)** A host is a computing device with a unique network address like an IP address or MAC address.
>
> **[0:14](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=14)** Based on this definition, a smart refrigerator qualifies as a host because it has a built-in processor and a network card configured with IP and MAC addresses.
>
> **[0:29](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=29)** A personal computer could be disqualified as a host if it lacks a network interface card or NEC, although such a scenario is highly unlikely.
>
> **[0:40](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=40)** A switch connects two or more hosts in a [[Local Area Network (LAN)|local area network]] or LAN.
>
> **[0:47](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=47)** It uses MAC addresses to distinguish its hosts.
>
> **[0:53](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=53)** To find your [[Windows]] computer's MAC address, type ipconfig /all in the command prompt window.
>
> **[1:09](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=69)** The /all option forces the MAC address to show up.
>
> **[1:14](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=74)** Press Enter.
>
> **[1:17](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=77)** Here, the label, Physical Address is another name for the MAC address, which consists of 12 hexadecimal digits.
>
> **[1:29](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=89)** If you aim to exchange packets between computers directly connected to a switch in a LAN, you won't need a router.
>
> **[1:38](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=98)** However, a router is necessary to connect switches in different LANS.
>
> **[1:44](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=104)** Unlike switches, routers use a different addressing scheme called IP addresses.
>
> **[1:53](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=113)** This is why each host needs a pair of distinct addresses, MAC and IP.
>
> **[2:02](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=122)** Once a packet arrives at its destination, the host on the receiving side needs to know which of its application is supposed to process it.
>
> **[2:12](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=132)** When deciding where to forward the packet it receives, the host may have dozens of choices, including a web server and a file server.
>
> **[2:23](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=143)** Each packet contains a numeric value called port number, which is the last layer of addressing needed to help send the packet to its final destination.
>
> **[2:35](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=155)** The final destination here is a program expecting the packet and running on the destination host.
>
> **[2:44](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=164)** well-known port numbers are a group of commonly used port numbers associated with server applications.
>
> **[2:52](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=172)** Port 80 is a well-known port number for [[Web Servers]].
>
> **[2:59](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=179)** So far we have reviewed three different types of addresses required to send the packet from one host to another.
>
> **[3:07](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=187)** MAC address, IP address, and port number.
>
> **[3:14](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=194)** Switches rely on MAC addresses, while routers depend on IP addresses.
>
> **[3:22](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=202)** Hosts use port numbers.
>
> **[3:25](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=205)** These concepts may take a while before they sink in.
>
> **[3:30](https://www.linkedin.com/learning/network-forensics-23931106/understanding-networking-devices?u=76281980&t=210)** I emphasize them here because they are part of the foundational knowledge essential for [[Network Forensics]] investigators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (1), [[Windows]] (1), [[Web Servers]] (1), [[Network Forensics]] (1)
> **Env Vars:** mac (9), lan (2), nec (1), lans (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Ports:** port 80 (1)
> **Tools:** command prompt (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Understanding network data sources](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=0)** - [Instructor] As cyber criminals expand their territory on the internet, the demand for evidence data in [[Network Forensics]] is also rapidly growing.
>
> **[0:10](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=10)** None of the mainstream network forensics tools can function optimally without access to several data sources.
>
> **[0:19](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=19)** Therefore, readily available data from various origins is crucial in producing satisfactory and meaningful network forensics reports.
>
> **[0:31](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=31)** Network forensics data comes from many places, including software, [[Hardware]], and media.
>
> **[0:40](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=40)** Packet sniffers are the most obvious data source.
>
> **[0:44](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=44)** They capture live packets that could contain criminal evidence, such as stolen information and traces of intrusion attempts.
>
> **[0:55](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=55)** Sniffing can occur at hosts, switches, and routers.
>
> **[1:01](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=61)** Firewalls are another data source that creates log entries whenever a packet is dropped.
>
> **[1:09](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=69)** They are the first line of defense in [[Network Security]] and one of the biggest targets for [[Cybersecurity]] attacks.
>
> **[1:18](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=78)** [[Intrusion Detection]] systems, or IDSs, and intrusion prevention systems, or IPSs, also produce data in the form of alerts when they detect and discard suspicious attack packets.
>
> **[1:34](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=94)** Vulnerability management systems scan networks for potential weaknesses such as unnecessarily open ports and unpatched operating systems, or OSs, susceptible to known exploits.
>
> **[1:52](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=112)** Network applications such as web browsers and servers and operating systems, like [[Windows]], [[Linux]], and Mac OS, are also major producers of network forensics data.
>
> **[2:07](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=127)** They all have their own logging mechanisms designed to establish a trail of evidence left behind by attackers.
>
> **[2:16](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=136)** Since there are many disparate sources of network forensics data, interoperability is very important.
>
> **[2:25](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=145)** That is, it should be possible for the data generated by each source to be forwarded to and usable by a collection system such as a security information and event management system, or SIEM system, for further analysis.
>
> **[2:43](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=163)** Once aggregated, all this data from the diverse origins mentioned so far can produce much more powerful insights than when they exist in silos.
>
> **[2:54](https://www.linkedin.com/learning/network-forensics-23931106/understanding-network-data-sources?u=76281980&t=174)** Remember that consolidation is the key to solving this very complex puzzle of network forensics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Forensics]] (7), [[Hardware]] (1), [[Network Security]] (1), [[Cybersecurity]] (1), [[Intrusion Detection]] (1)
> **Analogies:** such as (4)
> **Env Vars:** siem (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Wireshark filtering](https://www.linkedin.com/learning/network-forensics-23931106/challenge-wireshark-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/challenge-wireshark-filtering?u=76281980&t=0)** (lively upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/challenge-wireshark-filtering?u=76281980&t=5)** - [Instructor] To start capturing packets in [[Wireshark]], all you have to do is pick the right network interface and press the play button here.
>
> **[0:17](https://www.linkedin.com/learning/network-forensics-23931106/challenge-wireshark-filtering?u=76281980&t=17)** There are so many packets passing by and it's critical to be able to filter them.
>
> **[0:24](https://www.linkedin.com/learning/network-forensics-23931106/challenge-wireshark-filtering?u=76281980&t=24)** If you want to show only packets whose source or destination IP address is 10.0.2.15, type ip.addr==10.0.2.15
>
> **[0:51](https://www.linkedin.com/learning/network-forensics-23931106/challenge-wireshark-filtering?u=76281980&t=51)** in the filtering field here and press enter.
>
> **[0:57](https://www.linkedin.com/learning/network-forensics-23931106/challenge-wireshark-filtering?u=76281980&t=57)** Your challenge is to show only the packet whose source IP is 10.0.2.15.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Versions:** 10.0.2 (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively upbeat music) (1)

#### [Solution: Wireshark filtering](https://www.linkedin.com/learning/network-forensics-23931106/solution-wireshark-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/solution-wireshark-filtering?u=76281980&t=0)** (techno upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/solution-wireshark-filtering?u=76281980&t=5)** - [Instructor] Were you able to figure out the solution?
>
> **[0:09](https://www.linkedin.com/learning/network-forensics-23931106/solution-wireshark-filtering?u=76281980&t=9)** To show only the packet whose source IP is 10.0.2.15, type ip.src_host == 10.0.2.15.
>
> **[0:29](https://www.linkedin.com/learning/network-forensics-23931106/solution-wireshark-filtering?u=76281980&t=29)** Press Enter.
>
> **[0:30](https://www.linkedin.com/learning/network-forensics-23931106/solution-wireshark-filtering?u=76281980&t=30)** That's it.

> [!info]- Semantic Content
>
> **Versions:** 10.0.2 (2)
> **Code Identifiers:** src_host (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno upbeat music) (1)


### 3. Investigating Network Events

[↑ Back to Table of Contents](#table-of-contents)

#### [Network logs](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=0)** - [Instructor] A computer network consists of various devices, each of which produces its own log files.
>
> **[0:09](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=9)** They log events that require human attention in various files.
>
> **[0:15](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=15)** Examples include [[Hardware]] and software errors and intrusion attempts.
>
> **[0:21](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=21)** The hardware components include personal computers, or PCs, servers, routers, and firewalls.
>
> **[0:33](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=33)** Host refer to any piece of hardware in a network that has a unique address, such as media access control, or MAC, an internet protocol, or IP, addresses.
>
> **[0:47](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=47)** A personal computer, or PC, is a host.
>
> **[0:51](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=51)** It has a network interface card, or NIC, with a distinct MAC address.
>
> **[0:58](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=58)** PCs are abundant sources of network logs.
>
> **[1:01](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=61)** They generate the records of users network activities, which contain the details on the websites they visit and the remote servers they access.
>
> **[1:13](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=73)** Servers are also hosts, but different from PCs because they specialize in providing certain services.
>
> **[1:23](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=83)** Take [[Web Servers]] that serve content to browsers.
>
> **[1:29](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=89)** Web server log files document when a host accesses a specific website.
>
> **[1:37](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=97)** They also capture details if a web server encounters an error while processing a request.
>
> **[1:44](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=104)** Routers connect local area networks, or LANs, which consist of switches and hosts.
>
> **[1:51](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=111)** Routers have visibility to all the hosts within the networks they manage.
>
> **[1:59](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=119)** Router log files are especially useful for tracing the path of a particular network message from its source to its destination.
>
> **[2:08](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=128)** This information is essential to establish a link between an attacker's computer and a victim's machine.
>
> **[2:15](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=135)** Routers may also function as firewalls, which filter packets based on predefined rules.
>
> **[2:23](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=143)** A firewall stores information about a dropped packet such as time, source IP, and destination IP in its log files.
>
> **[2:37](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=157)** Since the file log files capture failed access attempts, investigators must examine them to discover suspicious activities that could be associated with a crime.
>
> **[2:50](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=170)** There are more specialized sources of network logs too.
>
> **[2:55](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=175)** Firewalls have evolved into [[Intrusion Detection]] and prevention systems, which triggered the development of more advanced and comprehensive systems, like vulnerability management systems and security information and event management, or SIEM systems.
>
> **[3:12](https://www.linkedin.com/learning/network-forensics-23931106/network-logs?u=76281980&t=192)** [[Network Forensics]] investigators should always look out for these continually evolving and emerging specialty solutions and consider them for inclusion in their investigations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Web Servers]] (1), [[Intrusion Detection]] (1), [[Network Forensics]] (1)
> **Env Vars:** mac (2), nic (1), siem (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Intrusion and security events](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=0)** - [Instructor] In [[Network Forensics]], a passive approach is to examine network logs and search for a series of related security events to detect an intrusion after a [[Cybersecurity]] incident.
>
> **[0:13](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=13)** A more active method is to monitor network traffic in real time to catch attacks while they are underway.
>
> **[0:21](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=21)** We call this more proactive method active [[Intrusion Detection]].
>
> **[0:27](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=27)** One of the most well-known, open-source, active intrusion detection systems, or IDS, is Snort.
>
> **[0:37](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=37)** You can download it at [snort.org](https://snort.org).
>
> **[0:41](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=41)** Both [[Linux]] and [[Windows]] versions are available for installation.
>
> **[0:48](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=48)** Once installed, Snort starts capturing packets and inspecting them for known attack data patterns, which we call signatures.
>
> **[0:59](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=59)** Snort also supports both predefined and user-defined rules.
>
> **[1:05](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=65)** Rules rely on the protocol a packet is associated with and where it originated from and went and are therefore different from signatures, which are unique fingerprints in packets.
>
> **[1:23](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=83)** I have Snort installed on my Linux virtual machine.
>
> **[1:27](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=87)** Before we do anything, let's check the details of our network interface card, or NIC.
>
> **[1:34](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=94)** I need to use the command prompt to do this.
>
> **[1:38](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=98)** Let's type ip address show, and press Enter.
>
> **[1:51](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=111)** As you can see, enp0s3 is my NIC and its IP address is 192.168.0.190.
>
> **[2:04](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=124)** Next, type sudo snort -c /etc/snort/snort.conf -A
>
> **[2:35](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=155)** console -l /var/log/snort -i enp0s3.
>
> **[2:57](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=177)** I use the sudo command to run Snort as root, a name used to call an administrator in Linux.
>
> **[3:06](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=186)** The -c option tells Snort what configuration file to use.
>
> **[3:12](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=192)** In this example, it's etc/snort/snort.conf.
>
> **[3:20](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=200)** The -A option specifies where to display Snort alerts.
>
> **[3:27](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=207)** I'm choosing a console to show the alerts in my terminal window.
>
> **[3:35](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=215)** The -l option indicates where to create a Snort log file, which is an example of network logs.
>
> **[3:44](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=224)** Finally, the -i option is there to tell Snort which network interface to use to snip packets.
>
> **[3:53](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=233)** We know that it's enp0s3 from the IP command we issued earlier.
>
> **[4:02](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=242)** Now, I'm ready to run Snort by pressing Enter.
>
> **[4:06](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=246)** (keyboard clacking) Snort is now up and running and has taken over the command prompt control.
>
> **[4:16](https://www.linkedin.com/learning/network-forensics-23931106/intrusion-and-security-events?u=76281980&t=256)** As you can see, it's already detecting network events that are potential intrusion attempts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Intrusion Detection]] (2), [[Network Forensics]] (1), [[Cybersecurity]] (1), [[Windows]] (1)
> **Env Vars:** nic (2), ids (1)
> **Tools:** command prompt (2), terminal (1)
> **CLI Commands:** sudo (2)
> **Definitions:** we call this (1), is an  (1)
> **URLs:** [snort.org](https://snort.org) (1)
> **Versions:** 192.168.0 (1)
> **Speakers:** - [instructor] (1)

#### [Network logs as evidence](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=0)** - [Instructor] Network logs are records of user activities on hosts, including intrusion attempts and security events.
>
> **[0:09](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=9)** They are the primary sources of information investigators use to prove a crime.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=16)** However, it's important to note that network logs are also susceptible to attacks.
>
> **[0:24](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=24)** Intruders can change, delete, and add an entry to cover their tracks.
>
> **[0:32](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=32)** Because of this possibility of tempering, courts don't automatically accept network logs as credible evidence unless they meet certain criteria.
>
> **[0:44](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=44)** Prosecutors are responsible for providing witness to testify about the log's integrity, reliability, and accuracy before they become admissible to the court.
>
> **[0:57](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=57)** The custodians of the systems generating the log files are expected to be able to strongly support their authenticity.
>
> **[1:06](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=66)** A history of prior breaches seriously weakens the credibility of the witness and the court may even reject the log data.
>
> **[1:16](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=76)** Another requirement is keeping logs as a regular business practice, which is often required as part of complying with rules and regulations, such as the Health Insurance Portability and [[Accountability]] Act, or HIPAA.
>
> **[1:32](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=92)** This increases the credibility of the presented logs because you're not artificially creating them to prove your claims.
>
> **[1:42](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=102)** There must also be systematic ways to capture logs.
>
> **[1:46](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=106)** There are also so many sources of network logs and a haphazard compilation of them is not acceptable.
>
> **[1:55](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=115)** It's imperative to implement a centralized log management system.
>
> **[2:02](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=122)** Each source can forward its log to a centralized log server, which maintains a database of relevant and significant log records for future inspection.
>
> **[2:15](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=135)** One more point to keep in mind is the timing of logging.
>
> **[2:19](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=139)** Logs shouldn't commence after the start of an incident under scrutiny, which is in line with the regular business practice requirement.
>
> **[2:31](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=151)** Finally, the safeguards in place to protect the logging mechanisms are critical, which ensure the integrity, reliability, and accuracy of the logs presented as evidence.
>
> **[2:45](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=165)** As you can see, for network logs to be qualified as evidence, a lot of rigor is necessary, meaning adopting best practices such as a dedicated log management system.
>
> **[3:00](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=180)** There is also a cost associated with maintaining an effective logging system.
>
> **[3:07](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-as-evidence?u=76281980&t=187)** One of the roles you play as a [[Network Forensics]] specialist is to convince your management team of the necessity of investing all the required resources to avoid the unfortunate situation of your log files being dismissed by the court due to violating any of the criteria we have discussed so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accountability]] (1), [[Network Forensics]] (1)
> **Analogies:** such as (2)
> **Warnings:** note that (1), keep in mind (1)
> **Env Vars:** hipaa (1)
> **Speakers:** - [instructor] (1)

#### [Network logs and compliance](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=0)** - [Instructor] Organizations today are facing increasing pressure to comply with a growing number of rules and regulations that require [[Network Forensics]] as part of their [[Incident Response]] mandates.
>
> **[0:14](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=14)** Sarbanes-Oxley, or SOX, the Payment Card Industry [[Data Security]] Standard, or PCI DSS, the Federal [[Information Security Management]] Act, or FISMA, and the Health Insurance Portability and [[Accountability]] Act, or HIPAA, are some of the legal and industry compliance requirements.
>
> **[0:42](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=42)** Logs contain traces of illicit activities, which act as evidence necessary for building a convincing case in a network forensics investigation.
>
> **[0:53](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=53)** Therefore, there's a strong correlation between network logs and compliance.
>
> **[1:00](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=60)** Many of the existing rules and regulations require logging as one of the mandatory security controls.
>
> **[1:07](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=67)** The term control here refers to a countermeasure against the [[Cybersecurity]] attack.
>
> **[1:14](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=74)** Network logs are a high priority among security control options because that's often all we have to piece together what happened in an attack.
>
> **[1:27](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=87)** They also give us visibility into a network's current status, which we need for monitoring purposes.
>
> **[1:36](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=96)** Because of these reasons, a compliance audit will certainly ask for the details on how an IT team is handling logging in general, and may even demand actual network log files for closer inspection.
>
> **[1:52](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=112)** Establishing the leading practices for logging in an organization, especially when it anticipates an audit to satisfy compliance requirements is critical to being prepared for such a request.
>
> **[2:08](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=128)** Centralization and automation are the most obvious solutions.
>
> **[2:13](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=133)** A central log server should constantly collect log messages from various sources and store them in a database that is backed up regularly.
>
> **[2:24](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=144)** Automation not only saves time, but also eliminates human errors, which helps minimize debates on the authenticity of the data.
>
> **[2:35](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=155)** Log servers and automation are not bulletproof either.
>
> **[2:40](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=160)** Seemingly minor thing like not synchronizing system clocks can nullify all your log messages.
>
> **[2:47](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=167)** Log data is useless if it doesn't exist in formats that are easily digestible by all stakeholders involved.
>
> **[2:56](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=176)** Generating customized alerts and reports for diverse and relevant audiences is a key to effective log management.
>
> **[3:05](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=185)** All of these details are what a compliance audit should be looking for.
>
> **[3:12](https://www.linkedin.com/learning/network-forensics-23931106/network-logs-and-compliance?u=76281980&t=192)** I'd also like to add that the logging leading practices are essential for effective network forensics investigations regardless of meeting compliance requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Forensics]] (2), [[Incident Response]] (1), [[Information Security Management]] (1), [[Accountability]] (1), [[Cybersecurity]] (1)
> **Env Vars:** sox (1), pci (1), dss (1), fisma (1), hipaa (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Audit logs](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=0)** - [Instructor] Audit logs are chronological records that provide documented evidence of the sequence of activities relevant to security events.
>
> **[0:11](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=11)** They record transactions by users, systems, and other entities.
>
> **[0:18](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=18)** Audit trail is another name for audit logs.
>
> **[0:22](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=22)** Maintaining a strong audit trail is critical in [[Network Forensics]], and here's why.
>
> **[0:30](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=30)** First, it provides [[Accountability]].
>
> **[0:34](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=34)** Logs tie accounts and people to security events.
>
> **[0:40](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=40)** Based on this information, organizations determine who did what and how their systems responded.
>
> **[0:49](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=49)** They can also take punitive or corrective actions, such as more training or education.
>
> **[0:58](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=58)** Next is reconstruction.
>
> **[1:00](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=60)** Network forensics specialists can piece together a series of related activities sequentially before and during a security incident.
>
> **[1:12](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=72)** Anomaly detection is another benefit because log data provides raw materials for spotting any suspicious activities.
>
> **[1:23](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=83)** [[Linux]] keeps its audit trail by maintaining a number of log files.
>
> **[1:28](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=88)** You can find them under the var log directory.
>
> **[1:33](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=93)** Let's check them out.
>
> **[1:37](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=97)** Type cd, space, /var/log.
>
> **[1:45](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=105)** And press Enter.
>
> **[1:47](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=107)** Type ls.
>
> **[1:50](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=110)** On Linux, the log files ending with tmp contain user session or login information.
>
> **[2:00](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=120)** The btmp and wtmp files are those.
>
> **[2:05](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=125)** To examine the details of the var log wtmp, type sudo, space, utmpdump space, wtmp.
>
> **[2:23](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=143)** Press Enter.
>
> **[2:26](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=146)** Here, you can see login, shutdown, and reboot events and their specifics, including timestamps.
>
> **[2:40](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=160)** The tmp files are not regular text files, but binary, which is why we need a utility like utmpdump.
>
> **[2:49](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=169)** Wtmp provides historical login records, while btmp only shows failed login attempts.
>
> **[2:59](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=179)** One thing to note is that wtmp displays events chronologically while the order is reversed in btmp.
>
> **[3:10](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=190)** Audit trails are essential in network forensics.
>
> **[3:14](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=194)** You just learned why they're crucial and got a glimpse of how they're implemented in Linux.
>
> **[3:21](https://www.linkedin.com/learning/network-forensics-23931106/audit-logs?u=76281980&t=201)** But there are also many other approaches and I encourage you to check them out on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Forensics]] (3), [[Linux]] (3), [[Accountability]] (1)
> **CLI Commands:** find (1), cd (1), ls (1), sudo (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Firewall logs](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=0)** - [Instructor] Firewalls are a key element of audit logs and a rich source of [[Network Forensics]] data.
>
> **[0:08](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=8)** Firewalls generate logs of various access control activities.
>
> **[0:14](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=14)** Firewalls use user-defined rules to decide whether to accept a packet requesting entry into or exit from a network.
>
> **[0:27](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=27)** Please note the [[Microsoft Word|word]] exit here.
>
> **[0:30](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=30)** Firewalls also control outgoing traffic to prevent confidential or sensitive information from leaving a protected network environment.
>
> **[0:42](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=42)** Firewall rules are primarily used for three actions, accept, drop, and forward packets.
>
> **[0:53](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=53)** Firewalls usually create a log entry when they detect and drop packets destined for an unauthorized host or application.
>
> **[1:03](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=63)** These log entries contain information on where the packet originated from and where it's intended to go.
>
> **[1:12](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=72)** The original address information is captured by a host IP address and an application port number found in the header portion of a packet.
>
> **[1:23](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=83)** As you may remember, each internet host has a unique IP address.
>
> **[1:29](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=89)** A port number is associated with an application running on the host.
>
> **[1:35](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=95)** For example, a web server conventionally uses 80 as its port number.
>
> **[1:43](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=103)** Using a combination of the port number and the IP address, we can determine which application on which host is sending a packet to the firewall.
>
> **[1:55](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=115)** On the other hand, the destination IP and port specified in a packet header indicate where the packet is heading.
>
> **[2:06](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=126)** [[Ubuntu]] [[Linux]] stores its firewall logs in the /var/log/syslog directory.
>
> **[2:14](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=134)** Let's check what's happening in our firewall now by typing sudo tail -f /var/log/syslog
>
> **[2:33](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=153)** space vertical line grep -i ufw.
>
> **[2:44](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=164)** The tail command shows the end of the syslog file in real time as it changes.
>
> **[2:53](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=173)** The vertical line or pipe symbol passes the tail command's output and sends it to the grep utility, which only displays the lines that contain ufw.
>
> **[3:06](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=186)** ufw stands for uncomplicated firewall and is a default firewall option for Ubuntu.
>
> **[3:15](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=195)** Press Enter.
>
> **[3:21](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=201)** The source and destination IP addresses appear here.
>
> **[3:27](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=207)** We can also launch a graphical user interface or GUI tool called Logs to read the firewall log messages.
>
> **[3:36](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=216)** I have one up and running right here.
>
> **[3:40](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=220)** Firewalls drop packets when they're going to or originating from an unauthorized IP and port combination.
>
> **[3:50](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=230)** Think of a firewall protecting a dedicated web server.
>
> **[3:55](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=235)** The firewall will reject any packet whose destination port number is anything other than 80 and record the incident.
>
> **[4:05](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=245)** Firewall provide a treasure trove of network forensics information.
>
> **[4:11](https://www.linkedin.com/learning/network-forensics-23931106/firewall-logs?u=76281980&t=251)** They allow you to develop useful insights about security incidents by recording unauthorized attempts to reach various network resources, which is only possible because the logs store the rejected packets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Forensics]] (2), [[Ubuntu]] (2), [[Microsoft Word|Word]] (1), [[Linux]] (1)
> **CLI Commands:** grep (2), sudo (1)
> **Definitions:** stands for (1), is a  (1)
> **Env Vars:** gui (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [syslog](https://www.linkedin.com/learning/network-forensics-23931106/syslog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/syslog?u=76281980&t=0)** - [Instructor] [[Linux]] uses a consolidated and systematic audit logging mechanism called Syslog.
>
> **[0:09](https://www.linkedin.com/learning/network-forensics-23931106/syslog?u=76281980&t=9)** Syslog supports both local and remote log collection.
>
> **[0:15](https://www.linkedin.com/learning/network-forensics-23931106/syslog?u=76281980&t=15)** Each Linux installation comes with Syslog, or its variation, pre-installed by default.
>
> **[0:23](https://www.linkedin.com/learning/network-forensics-23931106/syslog?u=76281980&t=23)** Syslog manages all the logs generated by the software running on the host, providing a single point of management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2)
> **Speakers:** - [instructor] (1)

#### [syslog-ng](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=0)** - [Instructor] Syslog NG is another log management server solution.
>
> **[0:06](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=6)** Like Syslog, it can manage logs on a single host or forward them to a central log server.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=16)** It's also possible to make it a dedicated log server.
>
> **[0:21](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=21)** Syslog NG is a newer open source project than its predecessor Syslog.
>
> **[0:28](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=28)** NG in Syslog NG stands for next generation.
>
> **[0:34](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=34)** As its name suggests, it tries to improve Syslog with more reliability and features.
>
> **[0:43](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=43)** Syslog NG's goal is to do all of what Syslog can offer, but better, faster, and much more.
>
> **[0:52](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=52)** One of the enhancements is the ability to set up advanced filters for log messages.
>
> **[1:00](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=60)** This function is very useful because there are usually too many logs to store, and the filters help you pick and choose what to keep in more fine-grained way.
>
> **[1:15](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=75)** Another capability to know is processing, meaning Syslog NG taking an action to further prepare the collected logs.
>
> **[1:27](https://www.linkedin.com/learning/network-forensics-23931106/syslog-ng?u=76281980&t=87)** Syslog NG should be able to handle most of log management tasks, if not all.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), stands for (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Kiwi Syslog Server](https://www.linkedin.com/learning/network-forensics-23931106/kiwi-syslog-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/kiwi-syslog-server?u=76281980&t=0)** - [Instructor] Kiwi is a [[Windows]]-based syslog server.
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/kiwi-syslog-server?u=76281980&t=5)** You can download Kiwi by visiting this Kiwi website.
>
> **[0:11](https://www.linkedin.com/learning/network-forensics-23931106/kiwi-syslog-server?u=76281980&t=11)** Here is a big picture view of what's happening.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/kiwi-syslog-server?u=76281980&t=16)** The Syslog-ng server collects its local log messages and forwards them to a Kiwi Syslog server running on a Windows host.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **Definitions:** is a  (2)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Microsoft Log Parser](https://www.linkedin.com/learning/network-forensics-23931106/microsoft-log-parser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/microsoft-log-parser?u=76281980&t=0)** - [Instructor] [[Microsoft]] Log Parser is still a popular command line tool despite its age.
>
> **[0:07](https://www.linkedin.com/learning/network-forensics-23931106/microsoft-log-parser?u=76281980&t=7)** It provides an S-Q-L or [[SQL]] interface that allows users to search for and manipulate the log messages of interest.
>
> **[0:18](https://www.linkedin.com/learning/network-forensics-23931106/microsoft-log-parser?u=76281980&t=18)** One of the primary features of Microsoft Log Parser is the ability to run SQL-like queries on log files regardless of their original formats such as XML, text, or internet information services or IIS log files.
>
> **[0:39](https://www.linkedin.com/learning/network-forensics-23931106/microsoft-log-parser?u=76281980&t=39)** The information retrieved as part of a query can appear on a console in a file, or be returned to a database.
>
> **[0:48](https://www.linkedin.com/learning/network-forensics-23931106/microsoft-log-parser?u=76281980&t=48)** Microsoft Log Parser can also generate [[HTML]] reports and make queries against [[Windows]] Event View logs, [[Active Directory]], Windows Registry, et cetera.
>
> **[1:04](https://www.linkedin.com/learning/network-forensics-23931106/microsoft-log-parser?u=76281980&t=64)** The latest Microsoft Log Parser version is 2.2, and you can download it at this website.
>
> **[1:14](https://www.linkedin.com/learning/network-forensics-23931106/microsoft-log-parser?u=76281980&t=74)** They also have a graphical user interface front end of Microsoft Log Parser called Log Parser Lizard.
>
> **[1:24](https://www.linkedin.com/learning/network-forensics-23931106/microsoft-log-parser?u=76281980&t=84)** You still need to install Microsoft Log Parser before you try to run Log Parser Lizard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (6), [[SQL]] (2), [[Windows]] (2), [[HTML]] (1), [[Active Directory]] (1)
> **Env Vars:** sql (2), xml (1), iis (1), html (1)
> **CLI Commands:** make (1)
> **Versions:** 2.2 (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 4. Investigating Network Traffic

[↑ Back to Table of Contents](#table-of-contents)

#### [Fundamentals](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=0)** - [Instructor] A big part of a [[Network Forensics]] investigation is traffic analysis.
>
> **[0:06](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=6)** Network forensics specialists must clearly understand how a packet travels from its source to a destination because they often have to trace attack packets to their sources.
>
> **[0:20](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=20)** A software application is a network application when it relies on a computer network to function properly.
>
> **[0:28](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=28)** Take a web browser.
>
> **[0:30](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=30)** It's useless without internet connectivity.
>
> **[0:35](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=35)** When an end user types a URL and presses Enter, the web browser passes the information to its host operating system or OS.
>
> **[0:47](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=47)** Before handing the raw user input to the OS, the web browser adds more information and converts it into a hyper text transfer protocol or HTTP request.
>
> **[0:59](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=59)** Each type of network application uses different rules of engagement when communicating with each other, which are referred to as protocols.
>
> **[1:12](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=72)** Web browsers send requests for web pages to [[Web Servers]] that store web content.
>
> **[1:21](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=81)** To do their jobs, web browsers and servers need to know what to expect from each other beforehand regarding anticipated behaviors and their meanings, HTTP is the protocol they use.
>
> **[1:40](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=100)** The OS then starts adding layers of headers and trailers for addressing purposes.
>
> **[1:48](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=108)** The first header to be added is a TCP header, which contains port numbers for host.
>
> **[1:56](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=116)** Next is an IP header for routers.
>
> **[2:00](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=120)** The final one is a frame which consists of a data link header and a trailer used by switches.
>
> **[2:10](https://www.linkedin.com/learning/network-forensics-23931106/fundamentals?u=76281980&t=130)** A network interface card or NIC transforms the whole packet into a signal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Forensics]] (2), [[Web Servers]] (1)
> **Env Vars:** http (2), url (1), tcp (1), nic (1)
> **Definitions:** is a  (3), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Network models](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=0)** - [Instructor] Network models are conceptual designs that describe how a computer network is supposed to operate to accomplish its ultimate goal, namely delivering packets from one host to another.
>
> **[0:14](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=14)** The most widely accepted design concept for network models is based on layers that partition various network tasks into groups of closely related networking functions.
>
> **[0:28](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=28)** For example, the physical layer focuses on standards and protocols that address how to transform a network packet into a signal, depending on the medium to be used for transmission.
>
> **[0:42](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=42)** As I have already mentioned, electrical signals, light pulses, and air are popular media options.
>
> **[0:52](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=52)** One of the benefits of adopting the layered approach is the separation of concerns.
>
> **[0:58](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=58)** What I mean is the ability to concentrate on the layer of your choice when developing technologies without worrying about the other layers, as long as there are clearly defined ways of how one layer interfaces with another.
>
> **[1:15](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=75)** In our previous lessons, we already touched upon these layers in terms of headers, trailers, protocols, and network devices.
>
> **[1:28](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=88)** In addition to the physical layer, there are other layers such as data link, transport, network, and application.
>
> **[1:39](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=99)** The top layer is the application layer where network applications generate their data.
>
> **[1:47](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=107)** The bottom layer is physical.
>
> **[1:50](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=110)** Each type of network device has a special layer with which they're more closely associated.
>
> **[1:58](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=118)** Operating systems or OSes running on hosts implement all these layers.
>
> **[2:05](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=125)** Collectively, we call these a stack.
>
> **[2:10](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=130)** Switches implement only two layers, physical and data link.
>
> **[2:16](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=136)** The data link layer specifies MAC addresses, which switches need to send frames back and forth in a [[Local Area Network (LAN)|local area network]] or LAN.
>
> **[2:28](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=148)** Routers handle three layers, physical, data link, and network.
>
> **[2:37](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=157)** The special layer for routers is network, because it defines IP addresses.
>
> **[2:45](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=165)** Hosts are closely tied to the transport layer because it defines the concept of port numbers.
>
> **[2:52](https://www.linkedin.com/learning/network-forensics-23931106/network-models?u=76281980&t=172)** Network applications need the application layer, which as its name suggests, handles application protocols such as the hypertext transfer protocol or HTTP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (1)
> **Env Vars:** mac (1), lan (1), http (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)

#### [Subnets, subnet ID, and subnet mask](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=0)** - [Instructor] A subnet is a mechanism to divide a [[Local Area Network (LAN)|local area network]] or LAN into multiple independent networks.
>
> **[0:10](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=10)** Creating subnets improves security by reducing visibility between hosts.
>
> **[0:18](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=18)** A host in one subnet cannot communicate directly with its peer in another subnet without going through a router, which can monitor the traffic and block the packets if necessary.
>
> **[0:34](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=34)** Think of a scenario in which there is only one network for an entire LAN.
>
> **[0:41](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=41)** Once malicious users gain access to the network, they can scan the whole network and obtain the details of all its hosts.
>
> **[0:52](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=52)** Therefore, splitting a network into multiple sections is one of the best [[Network Security]] practices.
>
> **[1:02](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=62)** Creating subnets or subnetting occurs at the network layer, which provides IP addresses.
>
> **[1:13](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=73)** Therefore, we use IP addresses to define a subnet.
>
> **[1:19](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=79)** An IP address consists of three parts, network ID, subnet ID, and host ID.
>
> **[1:30](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=90)** Network ID is given to you by your internet service provider or ISP.
>
> **[1:36](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=96)** Let's say your network ID is 13.107.
>
> **[1:41](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=101)** The first two numbers in the dot-separated IP address notation, like 13.107.42.14.
>
> **[1:52](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=112)** Since your network ID is fixed, you can work with the remainder of your ID.
>
> **[1:57](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=117)** That is 42.14.
>
> **[2:03](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=123)** The easiest way is to leverage the third digit of the IP to create subnets.
>
> **[2:11](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=131)** For example, 13.107.42 could be one subnet while 13.107.43 is another subnet.
>
> **[2:26](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=146)** Theoretically speaking, the number can go all the way up to 13.107.255.
>
> **[2:36](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=156)** If we stick to this scheme, there's only one option for host ID, which is the last digit of the IP address.
>
> **[2:47](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=167)** The number 14 in 13.107.42.14 becomes a unique IP assigned to a host in the context of network ID 13.107 and subnet ID 13.107.42.
>
> **[3:07](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=187)** If someone just gives you an IP address without telling you which part of it is a network ID or a subnet ID, it's impossible to know what the host ID part is.
>
> **[3:20](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=200)** This is why you need another number called a subnet mask that indicates which digits of your IP are your subnet ID.
>
> **[3:32](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=212)** We already encountered a subnet ID notation, like /24, which means the first three digits of an IP address are its subnet ID.
>
> **[3:45](https://www.linkedin.com/learning/network-forensics-23931106/subnets-subnet-id-and-subnet-mask?u=76281980&t=225)** The dot-separated IP notation is misleading because in reality, there is no dot in an IP address, which consists of binary number digits, such as zeros and ones.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (1), [[Network Security]] (1)
> **Versions:** 13.107.42 (4), 13.107 (2), 42.14 (1), 13.107.43 (1), 13.107.255 (1)
> **Env Vars:** lan (2), isp (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Protocol analysis](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=0)** - [Instructor] There are two dominant network models in use today.
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=5)** Both of them adopt layered architecture.
>
> **[0:10](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=10)** One is Open Systems Interconnection, or OSI, and the other is Transmission Control Protocol/Internet Protocol, or TCP/IP.
>
> **[0:26](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=26)** Each layer of these mainstream network models specifies protocols of its own.
>
> **[0:33](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=33)** For instance, the Transport layer features two major protocols called TCP and User Datagram Protocol or UDP.
>
> **[0:45](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=45)** TCP is a connection-oriented protocol that creates a reliable connection between hosts.
>
> **[0:54](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=54)** It ensures that packets arrive in order and are free of barriers.
>
> **[1:00](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=60)** TCP also retransmit packets if they fail to show up on the other side.
>
> **[1:08](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=68)** For this type of bulletproof communication to occur, the TCP protocol needs to explicitly establish and break up a connection.
>
> **[1:19](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=79)** Three-Way handshaking is the process TCP adopts.
>
> **[1:24](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=84)** A host sends a synchronize or send segment in a Transport layer header to create a connection.
>
> **[1:33](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=93)** The receiving site can accept the send request by sending a SYN/Acknowledge or ACK packet.
>
> **[1:43](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=103)** This says that it acknowledges the receipt of the SYN packet and that it also wants to communicate by sending its own SYN.
>
> **[1:55](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=115)** The final step is for the initiator of the communication to confirm the receipt of the SYN/ACK by sending an ACK.
>
> **[2:04](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=124)** UDP is a connection list protocol and does not require handshaking at all.
>
> **[2:12](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=132)** It doesn't care if it loses a packet or if a packet contains a error.
>
> **[2:19](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=139)** Therefore, network applications use UDP if they don't require accuracy and precision in the received data.
>
> **[2:31](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=151)** We tried a UDP connection when we set up our Kiwi SysLog Server.
>
> **[2:38](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=158)** Video conferencing applications may use UDP because they care more about speed than accuracy.
>
> **[2:47](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=167)** One live video packet missing may not make a huge difference in a video chat.
>
> **[2:56](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=176)** On the other hand, programs like email and web browsers use TCP to ensure the correctness of the data they receive.
>
> **[3:08](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=188)** [[Wireshark]] is a packet sniffer, but it's also referred to as a protocol analyzer because it can decode the network message into the layers used by various protocols.
>
> **[3:23](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=203)** Let's see if this is true.
>
> **[3:26](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=206)** You certainly see the mention of the Layers, Frame, Internet, Internet, and Transmission Control Protocol.
>
> **[3:39](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=219)** Let's pick the Transport layer, and see if we can find an instance of three-Way handshaking.
>
> **[3:45](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=225)** There is one right here, SYN, SYN/ACK, and ACK.
>
> **[3:54](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=234)** I wasn't lying.
>
> **[3:56](https://www.linkedin.com/learning/network-forensics-23931106/protocol-analysis?u=76281980&t=236)** While at this, please explore other layers and protocols and feel the power Wireshark provides you with at your fingertips.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2)
> **Env Vars:** tcp (7), syn (6), udp (5), ack (5), osi (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [ARP](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=0)** - [Instructor] ARP, or ARP stands for address resolution protocol.
>
> **[0:08](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=8)** In the previous lessons, I talked about the use of two addressing schemes in [[Computer Networking]].
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=16)** One was MAC for switches, and the other was IP for routers.
>
> **[0:24](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=24)** Because of this difference between the addressing schemes, when a router forwards a message to a switch, the IP address needs to be converted to a corresponding MAC address.
>
> **[0:39](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=39)** Hosts use an ARP table to keep track of the mapping between IP addresses and their MAC versions.
>
> **[0:49](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=49)** Let's check this out on our [[Windows]] machine.
>
> **[0:54](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=54)** In your command prompt window type arp -a, press enter.
>
> **[1:05](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=65)** Do you see the mapping between the internet address and physical addresses?
>
> **[1:12](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=72)** This table is useful for [[Network Forensics]] specialists because they can find out the MAC addresses associated with the IP addresses they are investigating without signing onto each host.
>
> **[1:29](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=89)** ARP obtains MAC addresses by using a network broadcast request that asks for the MAC address of a device configured with a specific IP.
>
> **[1:44](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=104)** And the host answers the ARP request, both the responder of the ARP request and the original ARP requester record each other's IP address and MAC address mapping as a new entry in their ARP table, which is also called the ARP cache for future reference.
>
> **[2:06](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=126)** If you get lucky, the first ARP request may hit the machine whose MAC address you're looking for.
>
> **[2:16](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=136)** Otherwise, it may take several tries before you get the MAC address you want.
>
> **[2:23](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=143)** In the meantime, the ARP table of all the machines you're contacting will be updated with your MAC and IP address mapping, while yours will be populated with the MAC and IP address mappings of all the hosts you are reaching out to.
>
> **[2:40](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=160)** ARP operates at the data link layer and you'll encounter many ARP requests when reviewing your packet capture results in a tool like [[Wireshark]].
>
> **[2:53](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=173)** Take a look at this.
>
> **[2:55](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=175)** As you can see, ARP messages are everywhere.
>
> **[2:59](https://www.linkedin.com/learning/network-forensics-23931106/arp?u=76281980&t=179)** This is why they're vulnerable to attacks because there are so many of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Networking]] (1), [[Windows]] (1), [[Network Forensics]] (1), [[Wireshark]] (1)
> **Env Vars:** arp (14), mac (11)
> **CLI Commands:** find (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### [ARP poisoning](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=0)** - [Instructor] ARP packets are constantly flying through your network.
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=5)** Due to the abundance of ARP messages and their insecure nature, attackers try to exploit them and are often successful.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=16)** ARP poisoning is a good example.
>
> **[0:20](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=20)** It's a type of man-in-the-middle, or MITM, attack in which bad people impersonate another host.
>
> **[0:30](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=30)** Here is how the attack works.
>
> **[0:33](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=33)** A malicious host, Eve, sends an ARP request to an unsuspecting victim, Alice, and provides an intentionally incorrect mapping, basically saying that its MAC is associated with the victim's intended recipient of a packet B.
>
> **[0:54](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=54)** Consequently, this request will update the ARP table of the victim, Alice, with a false MAC IP address mapping.
>
> **[1:05](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=65)** From this on, whenever the victim, Alice, sends a message to Bob, Eve intercepts it.
>
> **[1:14](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=74)** Eve does the same ARP poisoning exercise with Bob and makes him think that it's Alice.
>
> **[1:21](https://www.linkedin.com/learning/network-forensics-23931106/arp-poisoning?u=76281980&t=81)** Eve still forwards the messages from Alice to Bob, but can now eavesdrop on all the conversations between Bob and Alice.

> [!info]- Semantic Content
>
> **Env Vars:** arp (6), mac (2), mitm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [DNS](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=0)** - [Instructor] [[Domain Name System (DNS)|Domain Name System]], or DNS, is an application layer protocol.
>
> **[0:05](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=5)** It uses UDP instead of TCP at the transport layer because it doesn't require a reliable connection.
>
> **[0:16](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=16)** As its name suggests, DNS acts like a phone directory.
>
> **[0:21](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=21)** IP addresses are difficult to remember because they are numbers like 10.35.4.150.
>
> **[0:33](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=33)** Can you imagine people typing a complicated number like this into the URL field of a web browser?
>
> **[0:40](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=40)** I don't even remember my kids' phone numbers.
>
> **[0:43](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=43)** Just joking.
>
> **[0:44](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=44)** This is why we need a DNS server in the cloud somewhere.
>
> **[0:50](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=50)** Converting a meaningful domain name like worldwideweb.[[[LinkedIn]].com](https://linkedin.com) into an IP address.
>
> **[0:58](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=58)** Network equipment only understands IP addresses unlike humans who prefer a name like LinkedIn.
>
> **[1:08](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=68)** Every host is set up to use a specific DNS server.
>
> **[1:13](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=73)** Let's examine my machine's setup.
>
> **[1:16](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=76)** Type ipconfig /all in the command prompt window.
>
> **[1:26](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=86)** Press Enter.
>
> **[1:28](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=88)** Do you see the line that says DNS Servers?
>
> **[1:34](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=94)** We often use multiple servers here because almost nothing will work if you lose your DNS service while still having network connectivity.
>
> **[1:46](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=106)** Instead of translating a domain name behind the scenes, you can use a utility called NS Lookup to manually look up an IP address for a specific domain name.
>
> **[1:58](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=118)** Let's try it by typing nslookup space, world wide web dot [LinkedIn.com](https://LinkedIn.com) Press enter.
>
> **[2:14](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=134)** Our DNS server IP is 192.168.0.1, while the IP addresses we're looking for are 104.18.41.41, and 172.64.146.215.
>
> **[2:37](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=157)** As I said, DNS is one of the most critical services for networking purposes on your computer.
>
> **[2:45](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=165)** I always check if my DNS configuration is correct if I encounter connectivity issues.
>
> **[2:52](https://www.linkedin.com/learning/network-forensics-23931106/dns?u=76281980&t=172)** Please do the same next time you have trouble visiting a website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[Domain Name System (DNS)|Domain name system]] (1)
> **Env Vars:** dns (9), udp (1), tcp (1), url (1)
> **Versions:** 10.35.4 (1), 192.168.0 (1), 104.18.41 (1), 172.64.146 (1)
> **URLs:** [linkedin.com](https://linkedin.com) (2)
> **Prerequisites:** set up (1), setup (1)
> **Tools:** command prompt (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)

#### [DNS poisoning](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=0)** - [Instructor] DNS poisoning occurs when an attacker gets access to a domain name-IP address mapping list or database and alters it for malicious purposes.
>
> **[0:13](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=13)** The concept is very similar to data ARP poisoning.
>
> **[0:18](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=18)** The only difference is the scale of the data stored.
>
> **[0:23](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=23)** First of all, we use a dedicated server to store the DNS information.
>
> **[0:29](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=29)** Second, we're talking about millions or even billions of records.
>
> **[0:37](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=37)** We know that one of [[LinkedIn]]'s IP addresses is 13.107.42.14.
>
> **[0:46](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=46)** What if bad guys changed the domain name IP mapping on our DNS server to point to a fake web server designed to disguise as an authentic LinkedIn website?
>
> **[1:00](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=60)** Unsuspecting users will type their login credentials and the [[Phishing]] server will steal their sensitive information.
>
> **[1:09](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=69)** Basically, this is what we mean by DNS poisoning.
>
> **[1:15](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=75)** Let me demonstrate this locally on my virtual machine.
>
> **[1:20](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=80)** [[Windows]] OS keeps a file called hosts, which acts like a DNS server.
>
> **[1:29](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=89)** It maintains its own list of domain names and IP addresses.
>
> **[1:36](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=96)** Your operating system, or OS, will check the hosts file.
>
> **[1:41](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=101)** Before contacting an external DNS server, we will change the hosts file so that when I type www.[linkedin.com](https://linkedin.com) in my web browser URL field, it takes me to my own phishing website.
>
> **[2:01](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=121)** To do this, we first need to locate our hosts file, which is under the C:\Windows\System32\drivers\etc
>
> **[2:15](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=135)** directory.
>
> **[2:17](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=137)** Let's edit the hosts file with Notepad.
>
> **[2:24](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=144)** The IP address of my own web server is 192.168.0.190.
>
> **[2:37](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=157)** Tab and then type www.[linkedin.com](https://linkedin.com) and save the file.
>
> **[2:54](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=174)** Now you're all set.
>
> **[2:57](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=177)** Let's fire up a web browser.
>
> **[3:02](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=182)** Type www.[linkedin.com](https://linkedin.com).
>
> **[3:07](https://www.linkedin.com/learning/network-forensics-23931106/dns-poisoning?u=76281980&t=187)** Press Enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (5), [[Phishing]] (2), [[Windows]] (2)
> **Env Vars:** dns (6), arp (1), url (1)
> **URLs:** [linkedin.com](https://linkedin.com) (3)
> **Versions:** 13.107.42 (1), 192.168.0 (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 5. Network Forensics Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [tcpdump and WinDump](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=0)** - [Instructor] Most packet capture or sniffing tools use a software library called Packet Capture, or pcap in short, to sniff network data.
>
> **[0:11](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=11)** The Unix/[[Linux]] pcap version is called libpcap while its [[Windows]] version is called WinPcap.
>
> **[0:22](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=22)** Two well-known tools are relying on pcap to capture and analyze packets.
>
> **[0:28](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=28)** The first one is tcpdump, a simple command line interface packet sniffer.
>
> **[0:35](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=35)** The second one is [[Wireshark]], which is a much more sophisticated and user-friendlier tool, complete with a graphical user interface or GUI.
>
> **[0:47](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=47)** tcpdump works on both Unix and Linux operating systems.
>
> **[0:53](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=53)** There is also a Windows port of tcpdump called WinDump, taking advantage of the WinPcap library.
>
> **[1:03](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=63)** tcpdump and WinDump have similar commands and options, but of course there are subtle differences between the two tools.
>
> **[1:15](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=75)** tcpdump is pre-installed on [[Ubuntu]] but WinDump requires a new installation, including setting up WinPcap.
>
> **[1:29](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=89)** Let's try some basic commands with tcpdump.
>
> **[1:34](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=94)** We use ip address show
>
> **[1:44](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=104)** on Ubuntu to find out network interface details.
>
> **[1:47](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=107)** Press Enter.
>
> **[1:50](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=110)** You can also get a similar outcome with tcpdump.
>
> **[1:54](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=114)** Type tcpdump -D.
>
> **[2:03](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=123)** Press Enter.
>
> **[2:06](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=126)** You'll notice that the output is somewhat different and more relevant to [[Network Forensics]] professionals like me.
>
> **[2:14](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=134)** That is, I can see all the network interfaces on my host and their status.
>
> **[2:21](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump?u=76281980&t=141)** The number before the network interface details is important because we'll use it to tell tcpdump what network interface to eavesdrop on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Windows]] (2), [[Ubuntu]] (2), [[Wireshark]] (1), [[Network Forensics]] (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** find (1)
> **Env Vars:** gui (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [tcpdump and WinDump hands-on](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=0)** - [Instructor] Imagine that I'd like to intercept all the Secure Shell traffic on my [[Ubuntu]] operating system, or OS.
>
> **[0:08](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=8)** To accomplish this goal, type sudo tcpdump, space,
>
> **[0:20](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=20)** - s space, zero space port space ssh.
>
> **[0:30](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=30)** Dash s zero here is an option that allows me to capture an entire packet.
>
> **[0:36](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=36)** Port ssh indicates that I'm only interested in packets coming in and going out of my local Secure Shell server.
>
> **[0:46](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=46)** Press Enter.
>
> **[0:47](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=47)** Type the password.
>
> **[0:51](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=51)** By pressing Enter, I just executed this command.
>
> **[0:55](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=55)** Now, tcpdump is waiting for a Secure Shell packet to appear.
>
> **[1:00](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=60)** To generate the package of our interest, I can open a terminal window on another VM and sign on to the Secure Shell server.
>
> **[1:11](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=71)** Type ssh, space, username, instructor, at the IP address of the Secure Shell server, which is 10.35.4.150,
>
> **[1:33](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=93)** and press Enter.
>
> **[1:36](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=96)** Type the password.
>
> **[1:39](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=99)** Now, you're successfully signed on to the remote Secure Shell Server.
>
> **[1:44](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=104)** Here, you can see the package being exchanged in the tcpdump terminal.
>
> **[1:50](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=110)** Now, let me create tcpdump.
>
> **[1:53](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=113)** In this example, I sent the tcpdump output to my terminal window so that you could see the results immediately.
>
> **[2:02](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=122)** Now, let's repeat the process but create an output file instead.
>
> **[2:08](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=128)** Type sudo space tcpdump space
>
> **[2:14](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=134)** - S space zero space port space ssh, space
>
> **[2:23](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=143)** - w, and then, the output file name, which is sample.pcap.
>
> **[2:34](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=154)** Press Enter.
>
> **[2:36](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=156)** No output to the terminal window this time, because we are sending the results to a file.
>
> **[2:43](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=163)** Let's stop tcpdump by pressing Ctrl NC.
>
> **[2:49](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=169)** Let's see if a pcap file is actually created.
>
> **[2:53](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=173)** Type ls, and you see sample.pcap file.
>
> **[3:01](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=181)** Let's see what's inside the file by typing more space sample.pcap.
>
> **[3:11](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=191)** Press Enter.
>
> **[3:13](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=193)** As you can see, it's not a simple text file.
>
> **[3:17](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=197)** In fact, the file format used here is pcap, and we need a special tool such as [[Wireshark]] to open it.
>
> **[3:27](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=207)** Let's get out of this by typing Q.
>
> **[3:32](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=212)** Let's use Wireshark to open the pcap file.
>
> **[3:35](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=215)** Go to file, choose open, scroll down, select sample.pcap, click on open.
>
> **[3:47](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=227)** Now, you can see all the details.
>
> **[3:50](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=230)** Capturing packets is relatively easy.
>
> **[3:52](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=232)** With a simple tool like tcpdump or WinDump, you can regularly store them in files.
>
> **[3:59](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=239)** The real challenge is the sheer amount of data and its analysis.
>
> **[4:06](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=246)** So much data is going through your network every second, and it takes a lot of storage and processing power to save the data.
>
> **[4:15](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=255)** Unless you can effectively analyze the packet data, all the storage and processing power are simply wasted.
>
> **[4:23](https://www.linkedin.com/learning/network-forensics-23931106/tcpdump-and-windump-hands-on?u=76281980&t=263)** This is why a tool like Wireshark is much more appealing than tcpdump or WinDump with all these features specifically designed to support the analysis process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Ubuntu]] (1)
> **CLI Commands:** ssh (4), sudo (2), ls (1)
> **Tools:** terminal (4)
> **UI Navigation:** open the (1), go to (1), scroll down (1), click on (1)
> **Speakers:** - s (2), - [instructor] (1), - w (1)
> **Analogies:** imagine (1), such as (1)
> **Versions:** 10.35.4 (1)
> **Definitions:** is an  (1)

#### [Wireshark](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=0)** - [Instructor] [[Wireshark]] is one of the most well-known packet or protocol analysis software programs.
>
> **[0:07](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=7)** This type of software is also called Packet Sniper.
>
> **[0:12](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=12)** It captures the entire stack of network protocol layers, such as data link, network, transport, and application.
>
> **[0:24](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=24)** We've tried Wireshark several times, and you know how feature-rich the tool is in many different situations.
>
> **[0:34](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=34)** I like how I can use Wireshark to show packets and their associated protocols in real time when explaining networking concepts.
>
> **[0:45](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=45)** It's a powerful education tool, but it's also a highly practical and useful tool for [[Network Forensics]] professionals.
>
> **[0:55](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=55)** Once you've mastered the basic features of Wireshark, it's time to learn some more advanced features to make your life easier.
>
> **[1:07](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=67)** One of the extra Wireshark features is filters.
>
> **[1:11](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=71)** Wireshark often gives you a sense of information overload because there's so much relevant information an end user has to absorb.
>
> **[1:21](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=81)** Knowing how to use a filter is essential to avoid this problem.
>
> **[1:27](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=87)** Another useful feature is DNS resolution.
>
> **[1:31](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=91)** Usually you get a bunch of IP addresses in your Wireshark display.
>
> **[1:37](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=97)** It makes sense to resolve these IP addresses into more meaningful domain names.
>
> **[1:44](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=104)** It's also helpful to start your Wireshark program and capture packets right away without having to navigate through the graphical user interface or GUI.
>
> **[1:56](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=116)** You can also use Wireshark to create new firewall rules to be used by your favorite firewall software.
>
> **[2:05](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=125)** Lastly, Wireshark allows you to capture packets from a remote computer.
>
> **[2:11](https://www.linkedin.com/learning/network-forensics-23931106/wireshark?u=76281980&t=131)** We'll explore DNS resolution, how to start capturing packets from your command prompt, and how to create a new file rule using Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (11), [[Network Forensics]] (1)
> **Env Vars:** dns (2), gui (1)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Wireshark hands-on](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=0)** - [Instructor] Let's try some advanced [[Wireshark]] features.
>
> **[0:04](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=4)** The first one I'd like to show you is how to start packet capturing without going through the initial Wireshark GUI screen.
>
> **[0:13](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=13)** Type sudo, space, wireshark, space, dash i.
>
> **[0:23](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=23)** The dash i option allows you to specify your interface.
>
> **[0:30](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=30)** My interface name is ens18 and that's why I type ens18 here and then type space dash k next.
>
> **[0:45](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=45)** Dash k option is what starts the packet capturing session immediately.
>
> **[0:51](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=51)** Press Enter, type the password.
>
> **[0:57](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=57)** As you can see, we are bypassing the initial GUI screen where you do the interface selection and so on, and the packet is being captured without pressing the Capture button.
>
> **[1:11](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=71)** Let's generate some more traffic by opening up our web browser.
>
> **[1:16](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=76)** I'll type the domain name, worldwideweb.[[[LinkedIn]].com](https://linkedin.com).
>
> **[1:21](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=81)** Press Enter.
>
> **[1:24](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=84)** A lot of new traffic is being generated and there are so many IP addresses.
>
> **[1:30](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=90)** It'll be nice to turn some of these numbers into more meaningful domain names.
>
> **[1:36](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=96)** Let's go to View and select Name Resolution, and then choose Resolve Network Addresses.
>
> **[1:46](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=106)** As soon as I do that, some of these IP addresses are now turned into more meaningful domain names.
>
> **[1:53](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=113)** Finally, let's try the Tool menu option and then choose Firewall ACL, or Access Control List, Rules.
>
> **[2:05](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=125)** Using this tool, you can generate a firewall rule automatically.
>
> **[2:10](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=130)** Note that before you start using this tool, you need to pick and choose a particular entry in the Wireshark window.
>
> **[2:17](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=137)** Let's cancel this for now, and then I'm going to stop capturing packets.
>
> **[2:24](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=144)** I'll pick and choose one of the entries, and then click on Tools again, choose Firewall ACL Rules.
>
> **[2:34](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=154)** I can also choose the type of firewall product I'm using.
>
> **[2:39](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=159)** Choose [[Windows]] Firewall.
>
> **[2:42](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=162)** As you can see, different firewall rules get generated automatically each time I choose a different firewall product entry.
>
> **[2:52](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=172)** There are many more hidden Wireshark features waiting for you to try.
>
> **[2:58](https://www.linkedin.com/learning/network-forensics-23931106/wireshark-hands-on?u=76281980&t=178)** As you become more proficient with Wireshark, your workflow will get smoother and smoother, making your job as a [[Network Forensics]] specialist more effective and efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (6), [[LinkedIn]] (1), [[Windows]] (1), [[Network Forensics]] (1)
> **Env Vars:** gui (2), acl (2)
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** sudo (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [HTTP proxies](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=0)** - [Instructor] Hypertext transfer protocol or HTTP proxies perform the same function as man-in-the-middle attack tools like ARP Spoof.
>
> **[0:13](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=13)** The biggest difference is their purposes.
>
> **[0:17](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=17)** Unlike their malicious peers, HTTP or web proxies exist to increase security.
>
> **[0:28](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=28)** They sit between an HTTP client and its server and act like the server to the client and vice versa.
>
> **[0:38](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=38)** Since they inspect HTTP traffic, HTTP proxies are application layer programs.
>
> **[0:47](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=47)** There are two types of HTTP proxies.
>
> **[0:50](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=50)** One focuses on the client side while the other concentrates on the server side.
>
> **[0:58](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=58)** The client side solutions are plugins for web browsers or standalone programs.
>
> **[1:05](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=65)** The client side analyzer we'll explore is Fiddler Web Debugging Proxy, a standalone software application.
>
> **[1:16](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=76)** You can download Fiddler at this website for free.
>
> **[1:22](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=82)** The software works with one web browser at a given time and intercepts all the communications between the client and the [[Web Servers]] it connects to.
>
> **[1:34](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=94)** This is especially useful when you are trying to identify potential vulnerabilities that could have contributed to a cyber crime or incident.
>
> **[1:46](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=106)** We call the server side HTTP proxy option HTTP Proxy Server, which acts more like a server, although it impersonates a web client when facing an actual web server.
>
> **[2:01](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=121)** Squid is a popular and open source web proxy product we'll be checking out in our next lesson.
>
> **[2:09](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=129)** Web browsers must be configured to use an HTTP proxy server like this.
>
> **[2:16](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=136)** In your [[Microsoft]] Edge web browser, choose Settings, type proxy in the search box, click on Open your computer's proxy settings.
>
> **[2:40](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=160)** Click on Setup.
>
> **[2:44](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=164)** Enable the use of proxy server option and provide the details for the proxy server, such as its IP and port.
>
> **[2:56](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=176)** That's it.
>
> **[2:58](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=178)** Connecting your [[Windows]] Edge web browser to an HTTP proxy server like Squid ensures it will always go through a proxy to get to a website.
>
> **[3:11](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=191)** In this context, we use HTTP proxies to enforce security by blocking access to certain websites or to enhance performance by caching specific web content.
>
> **[3:27](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies?u=76281980&t=207)** While doing their job, Http proxies also generate a large number of log messages, which are another data source for a [[Computer Forensics]] investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (1), [[Microsoft]] (1), [[Windows]] (1), [[Computer Forensics]] (1)
> **Env Vars:** http (11), arp (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [HTTP proxies hands-on](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=0)** - [Instructor] Let's check out fiddler.
>
> **[0:02](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=2)** I have it running here.
>
> **[0:04](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=4)** It shows all the HTTP or its encrypted version, HTTPS connections on my local host.
>
> **[0:14](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=14)** In my Chrome web browser, let's open the [[[LinkedIn]].com](https://linkedin.com) start page.
>
> **[0:20](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=20)** Let's go back to Fiddler.
>
> **[0:23](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=23)** Check out all the HTTP and HTTPS connections.
>
> **[0:28](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=28)** The LinkedIn website just created.
>
> **[0:32](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=32)** There are a few here.
>
> **[0:37](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=37)** Definitely, there's a lot going on here.
>
> **[0:41](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=41)** To inspect a specific connection, simply choose it like this.
>
> **[0:46](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=46)** You can check out the HTTP header information by clicking on the inspector's tab and HTTP GET is used to receive data from a server.
>
> **[1:06](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=66)** The photo icon here indicates that there is an image being exchanged.
>
> **[1:11](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=71)** Let's check it out.
>
> **[1:12](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=72)** Click on the ImageView tab.
>
> **[1:23](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=83)** There's an image from the LinkedIn start page right there.
>
> **[1:27](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=87)** There are some powerful features to note here, such as replay, which means sending an HTTP request or response again after the fact.
>
> **[1:40](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=100)** You can also pause your session and insert your own data into the request or response.
>
> **[1:47](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=107)** There's a lot to digest here, but you'll get the feel for it, I hope.
>
> **[1:52](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=112)** Now let's check out squid.
>
> **[1:55](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=115)** I already installed squid on my [[Ubuntu]] box.
>
> **[2:00](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=120)** Let's see if squid is running.
>
> **[2:02](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=122)** Type sudo service squid
>
> **[2:11](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=131)** and status.
>
> **[2:15](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=135)** Press Enter.
>
> **[2:17](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=137)** Type the password.
>
> **[2:20](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=140)** Press Enter as the output indicates squid is running.
>
> **[2:28](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=148)** Now I'm going to try to block access to a certain website by changing the configuration file of squid in the ETC squid directory.
>
> **[2:41](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=161)** The configuration file is called squid.conf.
>
> **[2:46](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=166)** Type cd /etc/squid.
>
> **[2:53](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=173)** Press Enter.
>
> **[2:55](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=175)** Type ls and there is your squid.conf file.
>
> **[3:03](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=183)** I already created a file called blacklist.acl, which is where I list the domain names I'd like to block.
>
> **[3:15](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=195)** Let's take a look at the content by typing more blacklist.acl.
>
> **[3:26](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=206)** Press Enter.
>
> **[3:28](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=208)** And there is only one line, which is .[linkedin.com](https://linkedin.com).
>
> **[3:35](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=215)** So the site I'm trying to block is [linkedin.com](https://linkedin.com).
>
> **[3:40](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=220)** Now type sudo nano squid.conf.
>
> **[3:47](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=227)** Press Enter.
>
> **[3:48](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=228)** Let's go to line 1193, type Control + W and then Control + T and enter the line number which is 1193.
>
> **[4:04](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=244)** Press Enter.
>
> **[4:06](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=246)** You see the line http_access allow all here, it was deny all originally, but I replaced deny with allow, so that squid accepts request from web browsers.
>
> **[4:23](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=263)** Now let's go to line 991.
>
> **[4:26](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=266)** Control + W, Control + T, type 991.
>
> **[4:31](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=271)** Press Enter.
>
> **[4:33](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=273)** I also added these two lines.
>
> **[4:36](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=276)** The first line indicates where I keep my blacklist.acl file is, and then the second line simply uses the first line to locate my blacklist.acl file, and then whatever is inside the file, it uses it to deny access.
>
> **[4:59](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=299)** Let's save the file, Control + X.
>
> **[5:03](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=303)** Let's restart squid by typing sudo service squid restart.
>
> **[5:15](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=315)** Press Enter.
>
> **[5:17](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=317)** The restart process is now over.
>
> **[5:20](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=320)** Now let's see if this works.
>
> **[5:22](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=322)** Open your Chrome web browser like this and let's configure our proxy server setting.
>
> **[5:30](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=330)** Go to Settings, type the keyword proxy,
>
> **[5:39](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=339)** click on Open proxy settings, click on LAN settings, click on Advanced, type the IP address of the Ubuntu box where my squid instance is running, which is 10.35.4.150.
>
> **[6:00](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=360)** The port squid is using is not 8888.
>
> **[6:04](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=364)** Instead, it uses 3128.
>
> **[6:09](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=369)** And we'll do the same with the next line.
>
> **[6:19](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=379)** Click on OK.
>
> **[6:23](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=383)** Click on OK again.
>
> **[6:25](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=385)** And another OK.
>
> **[6:27](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=387)** Finally, we are ready to type in the URL, World Wide Web .[linkedin.com](https://linkedin.com).
>
> **[6:34](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=394)** Type www.[linkedin.com](https://linkedin.com).
>
> **[6:43](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=403)** Press Enter.
>
> **[6:44](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=404)** As you can see, squid is doing its job.
>
> **[6:48](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=408)** Both fiddler and squid are great tools for [[Network Forensics]] investigators like us.
>
> **[6:55](https://www.linkedin.com/learning/network-forensics-23931106/http-proxies-hands-on?u=76281980&t=415)** There are numerous features to learn and you definitely have a lot of studying to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (7), [[Ubuntu]] (2), [[Network Forensics]] (1)
> **Env Vars:** http (5), https (2), etc (1), lan (1), url (1)
> **UI Navigation:** click on (6), go to (3), open the (1)
> **CLI Commands:** sudo (3), cd (1), ls (1)
> **URLs:** [linkedin.com](https://linkedin.com) (5)
> **Definitions:** is an  (1), is called (1)
> **Code Identifiers:** http_access (1)
> **API Endpoints:** get  (1)

#### [Splunk](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980&t=0)** - [Instructor] Security information and event management or SIEM systems like Splunk collect and analyze [[Network Forensics]] data generated by many sources, including [[Intrusion Detection]] systems or IDSes, intrusion prevention systems, or IPSes, and vulnerability management systems.
>
> **[0:24](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980&t=24)** SIEM focuses on monitoring, logging, and analyzing [[Network Security]] events in real time.
>
> **[0:33](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980&t=33)** The ultimate goal of SIEM is to alert human operators when suspicious or anomalous activities are detected.
>
> **[0:43](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980&t=43)** The main difference between SIEM and systems such as IDS, IPS, and vulnerability management systems is that SIEM is much more capable of managing network security data and tracing network events in scope and capacity.
>
> **[1:03](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980&t=63)** SIEM also provides a much more comprehensive and holistic view of your network beyond specific intrusion attempts or known vulnerabilities by leveraging IDS, IPS, and vulnerability management system data and correlating them.
>
> **[1:25](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980&t=85)** Due to the recent advances in [[Data Science]], SIEM systems are starting to incorporate newly emerging [[Big Data Analytics]] technologies.
>
> **[1:37](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980&t=97)** These enhancements are designed to harness a large amount of historical and real time data to predict future security threats.
>
> **[1:48](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980&t=108)** Splunk is one of the most well-known SIEM solutions in the market today, and we'll have an opportunity to try it out in our next lesson.
>
> **[1:58](https://www.linkedin.com/learning/network-forensics-23931106/splunk?u=76281980&t=118)** Other same [[Microsoft Products|products]] include IBM Security, QRadar, RSA, NetWitness Suite, and SolarWinds Log & Event Manager.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (2), [[Network Forensics]] (1), [[Intrusion Detection]] (1), [[Data Science]] (1), [[Big Data Analytics]] (1)
> **Env Vars:** siem (8), ids (2), ips (2), ibm (1), rsa (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Splunk hands-on](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=0)** - Before analyzing network data with Splunk, in this case, rogue network traffic, let's take a moment to capture the data first.
>
> **[0:11](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=11)** Open [[Wireshark]].
>
> **[0:13](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=13)** Type, sudo space Wireshark.
>
> **[0:21](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=21)** Press enter.
>
> **[0:23](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=23)** Provide the password.
>
> **[0:25](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=25)** Press enter again.
>
> **[0:27](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=27)** Click on the capture button.
>
> **[0:32](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=32)** Let it run for a while, and let's save the traffic as a TCP dump PCAP file.
>
> **[0:39](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=39)** Stop capturing.
>
> **[0:41](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=41)** Go to file, choose save as.
>
> **[0:45](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=45)** Use sample as your file name.
>
> **[0:51](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=51)** Select TCP dump, PCAP, and save.
>
> **[1:00](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=60)** Now we are ready to analyze the traffic in Splunk.
>
> **[1:05](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=65)** As you can see, Splunk is a web application.
>
> **[1:09](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=69)** We need an app called PCAP Analyzer for Splunk, but you don't see it here, so let's find it by clicking on Find More Apps.
>
> **[1:21](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=81)** Type PCAP in the search box, press enter.
>
> **[1:27](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=87)** PCAP Analyzer for Splunk shows up.
>
> **[1:31](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=91)** Click on install.
>
> **[1:34](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=94)** Type your username and password.
>
> **[1:37](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=97)** Click on Login and Install.
>
> **[1:40](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=100)** And then we will restart Splunk.
>
> **[1:45](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=105)** Now let's go back in by clicking on Sign In.
>
> **[1:52](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=112)** Note that there are also many other apps available, which indicates the comprehensive nature of Splunk features.
>
> **[2:02](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=122)** Let's go back to the main screen.
>
> **[2:06](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=126)** Now you see PCAP Analyzer for Splunk.
>
> **[2:11](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=131)** Let's start the app.
>
> **[2:15](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=135)** Click on Close.
>
> **[2:19](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=139)** Click on Settings.
>
> **[2:22](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=142)** Under data, select data inputs.
>
> **[2:28](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=148)** And then select PCAP file location.
>
> **[2:34](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=154)** Click on New.
>
> **[2:37](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=157)** File name is sample.
>
> **[2:44](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=164)** The path is my downloads directory.
>
> **[2:49](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=169)** Click on next.
>
> **[2:54](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=174)** Click on Start Searching.
>
> **[2:57](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=177)** Loading the data may take a while, so now let's move on to the top talker overview.
>
> **[3:04](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=184)** Let's go back to the main menu.
>
> **[3:06](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=186)** Choose PCAP Analyzer for Splunk again.
>
> **[3:11](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=191)** Click on Top talker Overview.
>
> **[3:16](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=196)** Click on the dropdown menu and choose sample.pcap.csv.
>
> **[3:24](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=204)** Splunk turned it into a .csv file.
>
> **[3:30](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=210)** Click.
>
> **[3:32](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=212)** Here it says, enter the time chart span, we'll choose one minute, and then click on submit.
>
> **[3:41](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=221)** Now you can see a detailed visualization of your packet capture from Wireshark.
>
> **[3:48](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=228)** The PCAP Analyzer app as part of Splunk Enterprise is a powerful tool.
>
> **[3:54](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=234)** It allows you to take a closer look at popular ports and IP addresses being accessed, as well as the amount of packets in the top talker view like this.
>
> **[4:05](https://www.linkedin.com/learning/network-forensics-23931106/splunk-hands-on?u=76281980&t=245)** What you saw is just a glimpse of what Splunk is capable of doing, and I hope that you'll continue on with your Splunk adventure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3)
> **UI Navigation:** click on (11), go to (1), dropdown (1)
> **Env Vars:** pcap (9), tcp (2)
> **CLI Commands:** find (2), sudo (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **File Paths:** sample.pcap.csv (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/network-forensics-23931106/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/network-forensics-23931106/next-steps?u=76281980&t=0)** - Thanks for watching this course.
>
> **[0:02](https://www.linkedin.com/learning/network-forensics-23931106/next-steps?u=76281980&t=2)** If you'd like to start at the beginning, [[Network Security]] courses are a foundation for studying [[Network Forensics]], i suggest you check out my courses, Protecting Your Network with Open Source Software and Data-Driven Network Security Essentials.
>
> **[0:19](https://www.linkedin.com/learning/network-forensics-23931106/next-steps?u=76281980&t=19)** These courses will give you a very good exposure to network security.
>
> **[0:24](https://www.linkedin.com/learning/network-forensics-23931106/next-steps?u=76281980&t=24)** I also recommend that you take my other forensics courses, including [[[[Cybersecurity]] Foundations]] [[Computer Forensics]], [[Operating System Forensics]], and Web Forensics.
>
> **[0:38](https://www.linkedin.com/learning/network-forensics-23931106/next-steps?u=76281980&t=38)** Thank you again and see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (3), [[Network Forensics]] (1), [[Cybersecurity]] (1), [[Computer Forensics]] (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Jungwoo Ryoo]]

## Skills Covered

- Network Forensics
- Network Security

## Path Context

### In [[Explore a Career in Computer Forensics]]
← [[Operating System Forensics]] | **4 of 9** | [[Wireshark- Malware and Forensics]] →

## Appears In

- [[Explore a Career in Computer Forensics]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Network Security- Cisco Firewall Technologies]] — Network Security
- [[Cisco Network Security- Secure Routing and Switching]] — Network Security
- [[Cisco Network Security Core Security Concepts]] — Network Security
- [[Security Testing Essential Training (2022)]] — Network Security

---

[↑ Back to top](#)