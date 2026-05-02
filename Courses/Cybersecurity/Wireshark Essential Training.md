---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wireshark-essential-training
url: "https://www.linkedin.com/learning/wireshark-essential-training"
level: Intermediate
updated: 4/1/2025
learners: 28073
skills:
  - Wireshark
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQEJgVrQbGIxTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1641577091047?e=2147483647&amp;v=beta&amp;t=H4XW_a_MTjke5u2uwFG_JbCVn5aaJfJeSbXybtFf3i0"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Wireshark- Network Traffic Analysis]]'
next_courses:
  - '[[Wireshark- Functionality]]'
path_nav: '[{"path":"Wireshark- Network Traffic Analysis","position":1,"total":5,"prev":null,"next":"Wireshark- Functionality"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/wireshark
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Wireshark%20Essential%20Training.md)

![Wireshark Essential Training](https://media.licdn.com/dms/image/v2/C4D0DAQEJgVrQbGIxTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1641577091047?e=2147483647&amp;v=beta&amp;t=H4XW_a_MTjke5u2uwFG_JbCVn5aaJfJeSbXybtFf3i0)

# Wireshark Essential Training

> Are you interested in learning about packet analysis, or understanding and identifying the traffic on your network? This course gives you a solid overview of deep packet inspection via Wireshark Next Generation. Instructor Lisa Bock helps you navigate the many features of Wireshark. Lisa begins with the benefits of traffic analysis and discusses how to tap into the data stream effectively. She sho

> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training) | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Appreciating traffic analysis](#appreciating-traffic-analysis)
  - [What you need to know](#what-you-need-to-know)
  - [Challenges](#challenges)
  - [Disclaimer](#disclaimer)
- [**1. Traffic Capture Overview**](#1-traffic-capture-overview) (5 videos)
  - [Benefits of traffic analysis](#benefits-of-traffic-analysis)
  - [Installing Wireshark](#installing-wireshark)
  - [Explore the Wireshark interface](#explore-the-wireshark-interface)
  - [Getting help](#getting-help)
  - [Tap into the data stream](#tap-into-the-data-stream)
- [**2. Getting Started with Wireshark**](#2-getting-started-with-wireshark) (6 videos)
  - [Using display and capture filters](#using-display-and-capture-filters)
  - [Discovering shortcuts](#discovering-shortcuts)
  - [Grasping the OSI model](#grasping-the-osi-model)
  - [Generating a frame](#generating-a-frame)
  - [Challenge: Recognize the Wireshark interface](#challenge-recognize-the-wireshark-interface)
  - [Solution: Recognize the Wireshark interface](#solution-recognize-the-wireshark-interface)
- [**3. Examining the Internet Suite**](#3-examining-the-internet-suite) (11 videos)
  - [Understanding the TCP-IP suite](#understanding-the-tcp-ip-suite)
  - [Explaining Transmission Control Protocol](#explaining-transmission-control-protocol)
  - [Recognizing the TCP connection process](#recognizing-the-tcp-connection-process)
  - [Viewing the TCP handshake and teardown](#viewing-the-tcp-handshake-and-teardown)
  - [Breaking down User Datagram Protocol](#breaking-down-user-datagram-protocol)
  - [Outlining IPv4](#outlining-ipv4)
  - [Dissecting IPv6](#dissecting-ipv6)
  - [Comprehending ICMP](#comprehending-icmp)
  - [Discovering ICMPv6](#discovering-icmpv6)
  - [Challenge: Evaluating a pcap](#challenge-evaluating-a-pcap)
  - [Solution: Evaluating a pcap](#solution-evaluating-a-pcap)
- [**4. Deep Packet Analysis of Common Protocols**](#4-deep-packet-analysis-of-common-protocols) (7 videos)
  - [Dissecting DNS](#dissecting-dns)
  - [Exploring DHCP](#exploring-dhcp)
  - [Following an FTP transaction](#following-an-ftp-transaction)
  - [Using HTTP](#using-http)
  - [Understand ARP](#understand-arp)
  - [Challenge: Examining a packet capture](#challenge-examining-a-packet-capture)
  - [Solution: Examining a packet capture](#solution-examining-a-packet-capture)
- [**5. Working with Packet Captures**](#5-working-with-packet-captures) (4 videos)
  - [The Wireshark expert system](#the-wireshark-expert-system)
  - [Network latency issues](#network-latency-issues)
  - [Subset, save, and export](#subset-save-and-export)
  - [Using Cloudshark](#using-cloudshark)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Appreciating traffic analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=1)** - [Lisa] Did you know that being able to understand what's on the network is considered a superpower?
>
> **[0:07](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=7)** It's true.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=8)** Packet analysis helps you to understand the traffic on your network so you can identify latency issues and actively monitor the network for attacks.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=19)** In this course, I'll provide an overview and benefits of traffic capture.
>
> **[0:24](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=24)** I'll cover how to download and install on a PC or a Mac.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=29)** Then we'll explore the Wireshark interface.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=32)** I'll cover how to tap into the data stream and use display and capture filters.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=38)** I'll review the OSI model and encapsulation.
>
> **[0:42](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=42)** Then we'll do a deep packet analysis of common protocols, such as TCP, IP and DNS.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=50)** I'll finish with working with the expert system and how to troubleshoot network latency issues.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=56)** Hello, my name is Lisa Bock and I'm a security ambassador.
>
> **[1:01](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=61)** I'm super excited to bring you this course on Wireshark so that you can improve your skills in packet analysis.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=69)** Are you ready?
>
> **[1:10](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=70)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (2), [[Wireshark]] (2), data (1), dns (1), [[Security]] (1)
> **Env Vars:** osi (1), tcp (1), dns (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** install (1)
> **Speakers:** - [lisa] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Wireshark Essential Training is an intermediate-level course for network administrators, students, teachers, and anyone with an interest in learning about packet analysis and the importance of understanding and identifying the traffic on your network to troubleshoot, identify latency issues, and actively identify network attacks.
>
> **[0:24](https://www.linkedin.com/learning/wireshark-essential-training/what-you-need-to-know?u=76281980&t=24)** We'll use Wireshark, a free protocol analysis tool, and we'll use precaptured files from online repositories.
>
> **[0:33](https://www.linkedin.com/learning/wireshark-essential-training/what-you-need-to-know?u=76281980&t=33)** I'll be walking you through the basics, so no previous experience with Wireshark is necessary.
>
> **[0:39](https://www.linkedin.com/learning/wireshark-essential-training/what-you-need-to-know?u=76281980&t=39)** We'll examine packet captures and understand the field values of the protocol as to what is considered normal behavior.
>
> **[0:47](https://www.linkedin.com/learning/wireshark-essential-training/what-you-need-to-know?u=76281980&t=47)** A high-level knowledge of networking technology will clarify some of the concepts discussed in this course.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-essential-training/what-you-need-to-know?u=76281980&t=54)** However, if you have a basic understanding of networking terms and concepts, and an interest in the subject, you should be able to easily follow along with the lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), traffic (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=0)** - [Narrator] Throughout the course, you're going to run into a few movies labeled "Challenges."
>
> **[0:05](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=5)** Challenges are hands on opportunity for you to practice and master what you've learned throughout this course.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=13)** At the beginning of each challenge, I'll give you a clear set of objectives.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=17)** If there are any sample files, I'll show you where to find those.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=21)** And I'll give you a rough estimate of how long each challenge took me to complete as well.
>
> **[0:27](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=27)** Once you complete the challenge, come back and watch the solutions video.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=32)** In the solution video, I'll show you how I completed the challenge, and I'll give you some insight on my thought process along the way.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=41)** Challenges are opportunities for you to practice what you're learning as we progress through this course, but there's also a chance for you to have some fun as well.
>
> **[0:51](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=51)** So be sure to try them out.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=53)** So that you can follow along, be sure to grab the file that contains all the links to this course.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=59)** You'll find that in other files, in the exercise files on the overview page of this course.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### Disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/disclaimer?u=76281980&t=0)** - [Narrator] Wireshark is a network analysis tool.
>
> **[0:03](https://www.linkedin.com/learning/wireshark-essential-training/disclaimer?u=76281980&t=3)** Any active capture should only be used in an environment that you have full control, or on a network that you have written permission that specifically allows you to capture and analyze traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1), traffic (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Traffic Capture Overview

[↑ Back to Table of Contents](#table-of-contents)

#### Benefits of traffic analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=0)** - [Lecturer] On today's networks there are many reasons for traffic analysis that include troubleshooting network problems, intrusion detection and forensics, and to gain a better understanding of protocols.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=14)** Wireshark is a powerful packet analysis tool where you can capture, display and filter traffic live from a network interface.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=23)** Network administrators, developers, security analysts, students, and building automation control specialists can all benefit from using Wireshark.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=34)** Network administrators have long used Wireshark to monitor network traffic.
>
> **[0:39](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=39)** To resolve bottleneck issues and it can help to build you firewall rules.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=45)** A new player with Wireshark are developers.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=48)** Developers can benefit from understanding protocol and application behavior.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=54)** They can see how the routines behave and see if the application works the was they anticipated.
>
> **[1:02](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=62)** They can also determine if it's the application or the network that causing slow response times.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=69)** Security professionals find that Wireshark is a valuable resource.
>
> **[1:14](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=74)** For example, if they suspect malicious activity they can look at the conversations and see if there's a strange port number.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=84)** They can then do a Google search and determine what program uses that port and determine whether it's malicious or not.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=93)** Using Wireshark can help students to better understand many of the common protocols used on a network today.
>
> **[1:40](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=100)** They can then study the behavior of the protocol.
>
> **[1:44](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=104)** We'll all familiar with the four packet exchange in the DHCP process, but if we drop it into Wireshark we can actually see the exchange of the discover, offer, request and acknowledge.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=120)** And then we can drill down in each individual packet to see what is happening.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=125)** With the proliferation and expansion of smart buildings, control technicians will find packet analysis invaluable as they can monitor traffic used for building automation using BACnet or LonWorks.
>
> **[2:20](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=140)** For example, we see here BACnet stack services and in this exchange the control technician might bring up a flow graph, and here we can make sure that we are communicating with the correct host.
>
> **[2:36](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=156)** The technician can then possibly follow either a UDP or TCP stream to see if the correct commands are at play.
>
> **[2:45](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=165)** Wireshark is a free protocol analysis tool.
>
> **[2:48](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=168)** It's rich in features, and it's used to examine traffic either live from a wired or wireless connection or by using pre-captured packets.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=177)** We can analyze network problems, detect network misuse, perform regulatory compliance through content monitoring the perimeter and end-point traffic.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=189)** We can monitor bandwidth usage per application and process.
>
> **[3:15](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=195)** And we can verify endpoint security status to see if there are any unwanted protocols such as SSDP traffic and multicast DNS.
>
> **[3:26](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=206)** And we can gather and report network statistics.
>
> **[3:29](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=209)** In 2004 a colleague introduced me to Ethereal, now called Wireshark.
>
> **[3:36](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=216)** I looked at the interface as it captured traffic and thought, I don't know what this is but I want to.
>
> **[3:43](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=223)** I then spent years immersing myself in packet capture.
>
> **[3:49](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=229)** Now let me help you learn Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (10), traffic (8), application (4), [[Security]] (2), [[Automation]] (2)
> **Env Vars:** dhcp (1), udp (1), tcp (1), ssdp (1), dns (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [lecturer] (1)

#### Installing Wireshark
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=0)** - [Instructor] Wireshark is a powerful network protocol analyzer that allows users to capture and inspect network traffic in real time.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=10)** In this segment, we'll cover how to choose the best option for your operating system, along with key choices you may encounter during a standard installation.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=22)** When you're ready to download and install Wireshark, head on over to [wireshark.org](https://wireshark.org), where you'll see this screen, and then you'll select Download, which takes us to this section.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=40)** Now first we see the Stable Release, which I have already selected and have already downloaded.
>
> **[0:47](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=47)** Now, within this section, you'll see the Windows installer for 64-bit, but there's also one for Mac Operating System and others.
>
> **[0:57](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=57)** Now what's important is that you should use the most recent release on your machine.
>
> **[1:03](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=63)** Now why is that?
>
> **[1:05](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=65)** Well, people submit bugs to the developers all the time, and then they do their best to fix as many issues as possible.
>
> **[1:14](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=74)** So when you get an update, you'll get a release with certain functions that have been enhanced and also bugs that have been fixed.
>
> **[1:23](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=83)** Now you can also select Old Stable Release, which, of course, is an older version, and then there's the Development Release.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=93)** Scroll down where we can see the following, More downloads and documentation can be found on the downloads page.
>
> **[1:43](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=103)** I'll select that and open it in a new tab.
>
> **[1:47](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=107)** Now once here, I'll scroll down.
>
> **[1:52](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=112)** Now what's really great is that Wireshark can be installed on a number of different platforms, including Arch Linux, Novell, Red Hat, and a lot of others.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=124)** And why?
>
> **[2:05](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=125)** Well, a lot of vendors are incorporating Wireshark right into their devices.
>
> **[2:12](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=132)** We'll go back to the Home page, and on the bottom, you'll see the news about Stratoshark.
>
> **[2:18](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=138)** Let's go there.
>
> **[2:21](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=141)** I'm here at the Home page for Stratoshark.
>
> **[2:24](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=144)** Now this is Wireshark for the cloud, and this is a powerful option as many companies are using cloud-based applications.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=155)** Next, let's step through an installation.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=158)** I have Wireshark ready to install, and you can follow along.
>
> **[2:44](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=164)** Once you've given the appropriate permissions.
>
> **[2:47](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=167)** It'll present you with this screen.
>
> **[2:49](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=169)** We'll say Next.
>
> **[2:52](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=172)** Now, this is the License Agreement.
>
> **[2:55](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=175)** Now you can read it if you want, but I'll just say Noted.
>
> **[3:02](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=182)** We'll go Next.
>
> **[3:04](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=184)** Now, on this page, it tells you to choose the components, and what I do is generally accept the default because it also includes TShark as well as Wireshark.
>
> **[3:17](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=197)** Now, TShark is a lightweight command line interface program, where if you need to do a large capture, this might be the best choice.
>
> **[3:27](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=207)** With TShark, you can do your capture and then bring it into Wireshark for analysis.
>
> **[3:33](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=213)** And we'll go to Next.
>
> **[3:36](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=216)** And here is where you can select your shortcuts if you like.
>
> **[3:40](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=220)** And in some cases, you may be prompted to reboot.
>
> **[3:44](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=224)** I'll go to the next page, and it tells us what directory to install Wireshark.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=231)** And then we also want to make sure that we have Npcap installed.
>
> **[3:56](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=236)** Now if you don't have Npcap, it will prompt you to install it.
>
> **[4:00](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=240)** Otherwise, you won't be able to capture packets.
>
> **[4:04](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=244)** And in addition, you may want to use the USBPcap.
>
> **[4:09](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=249)** Now if you haven't already used this option, this is nice if you want to do some troubleshooting with your USB.
>
> **[4:17](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=257)** Now, I'll say Next.
>
> **[4:19](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=259)** I'm going to skip USB capture and then say Install.
>
> **[4:28](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=268)** We'll say Next, and then I'll say Finish.
>
> **[4:35](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=275)** Now, once you're done, you can bring up Wireshark, and then you'll see the spark lines, and then you can begin capturing traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (11), next (7), traffic (2), cloud (2), [[Windows]] (1)
> **Prerequisites:** install (5)
> **UI Navigation:** scroll down (2), go to (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** usb (2)
> **CLI Commands:** make (1)
> **URLs:** [wireshark.org](https://wireshark.org) (1)
> **Cross-References:** go back to (1)

#### Explore the Wireshark interface
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=0)** - [Instructor] So now let's take a look at the Wireshark interface.
>
> **[0:04](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=4)** Now, when you look at this next generation, you look at it, and it seems as if there's not as much going on.
>
> **[0:11](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=11)** And yes, it is a streamlined interface, but there's pretty much everything you need in order to start capturing traffic.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=19)** Now, up at the top, you still can see some of the different things as far as menu choices, and some of the icons are available.
>
> **[0:28](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=28)** If they're dimmed out, it's simply because there's no packets to work with those icons, so they're not available.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=35)** Here, you can put in a display filter in which, again, you can do, once the capture begins or with a pre-capture packet.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=43)** And then down below, it says Open.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=45)** Now, once you open a packet capture or save it, it will remain on that Open, and then you can take a look and quickly reference it.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=54)** If you're like me, and you have maybe a dozen or so captures on there, and you want to refresh that, we can go up to File, and where it says Open Recent, you can clear the menu, and that will take it all off, and it will just be a blank area above.
>
> **[1:12](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=72)** I like to keep it there, just as I said, to reference commonly-accessed packet captures.
>
> **[1:19](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=79)** Now, down below is where you see the capture and some of the options.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=84)** Now, what these are called are sparklines, and that lets us know that we have an active connection, and it's exchanging data.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=92)** Below Capture, it says use this filter.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=95)** Now, you could put a capture filter in there.
>
> **[1:39](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=99)** I usually don't because it limits you to only what you're filtering, and you miss everything else, but you could if you wanted to put a filter there.
>
> **[1:47](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=107)** Now, what this says, All interfaces shown, if I wanted to perhaps take off External Capture, that'll take off the USBPcap, and I'll put that back on.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=120)** Now, with the ethernet, we don't have anything going on.
>
> **[2:03](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=123)** Of course, it is a wireless connection.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=126)** But let's take a look at this USBPcap.
>
> **[2:09](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=129)** Now, this is where you can see some of the devices.
>
> **[2:12](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=132)** And I'll just go into USB Input Device, and here I'll select the mouse, and let's just start it.
>
> **[2:21](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=141)** This might be good if you're doing some troubleshooting to see what exactly has happened during the connection.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=148)** I'll stop that, and I'll close, and then we'll go back to our interface.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=155)** Down below at the bottom is where you can learn about Wireshark, go to the wiki, and get some questions and answers.
>
> **[2:43](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=163)** But just because it's on this doesn't mean you can't go into capture options like we have before.
>
> **[2:49](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=169)** If you wanted to do a little bit more, go up to Capture and then Options.
>
> **[2:55](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=175)** Now, once I'm in capture options, you see there are three tabs, Input, Output, and Options.
>
> **[3:01](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=181)** Down below, we see Enable promiscuous mode on all interfaces, and of course, we want that selected.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=187)** And here we can, again, use a capture filter.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=191)** But let's take a look at Output.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=194)** Now, here, we can capture to a permanent file, and we ask, how would you like this?
>
> **[3:20](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=200)** And the PCAP Next Generation is generally what I leave it as.
>
> **[3:25](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=205)** But remember that Wireshark's only going to be putting it in a temporary file until you save it.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=210)** Now, if you want to capture for any length of time, one thing you probably should do is drop it into a ring buffer.
>
> **[3:37](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=217)** And this would occur right here, use a ring buffer after how many files.
>
> **[3:42](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=222)** For example, if you're letting a capture run, and you put a specific coloring rule in order to look for something on the network, you could just keep dropping it into a ring buffer, and it will overwrite those files over and over again.
>
> **[3:57](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=237)** Then we go to Options, and here we can see some of the display options and update list of packets in real-time, and I generally select that, and automatically scroll during life capture.
>
> **[4:09](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=249)** Now, the name resolution, this is where it's going to do a resolution of one of the three things.
>
> **[4:15](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=255)** Resolve the MAC address, it doesn't hurt to do that.
>
> **[4:18](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=258)** That would give us the manufacturer's name.
>
> **[4:21](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=261)** And that just simply comes from a file.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=264)** Resolve transport names, I do that too because then it will tell us what application it thinks it's associated with.
>
> **[4:30](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=270)** The resolve network names, I generally don't select that, and that's really because if I did select it, it would be hitting the DNS servers a lot, and it would cause a lot more traffic.
>
> **[4:42](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=282)** And then down below, stop capture automatically after how much, you would say maybe after so many packets or how much of a capture you want, and you can then begin your capture.
>
> **[4:55](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=295)** So the Wireshark interface looks a little different, but as we see, it does the same thing as Legacy and provides us everything we need in order to begin capturing packets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), next (2), traffic (2), data (1), [[Troubleshooting]] (1)
> **Env Vars:** usb (1), pcap (1), mac (1), dns (1)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Getting help
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=0)** - [Instructor] When using Wireshark, you can access built-in help resources and official documentation to better understand all the features, filters, and network analysis tools.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=14)** In this segment, we'll review the many ways to get help in Wireshark.
>
> **[0:18](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=18)** That includes the Help menu, User Guide, and Questions and Answers.
>
> **[0:24](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=24)** Let's start with the Wireshark interface, and from there we'll select the menu choice help.
>
> **[0:31](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=31)** Now, if you select the user guide, this will bring up the user guide that is stored on your machine.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=40)** Then we have the Manual pages or Man pages, and there are many choices.
>
> **[0:46](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=46)** If you select any of these choices, that will bring up the user guide on your machine and go directly to the Man page on your selection.
>
> **[0:57](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=57)** Now, there are other choices as well.
>
> **[1:00](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=60)** For example, you might want to select Check for Updates to make sure you have the latest version of Wireshark, and About Wireshark, and that tells you all the behind the scenes information on Wireshark.
>
> **[1:18](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=78)** Now, there's also Sample Captures. Let's go to this page.
>
> **[1:23](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=83)** Here we see a capture repository.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=86)** Now, this is where you can grab a capture on several different types of protocols.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=93)** Next, let's take a look at what's available below.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=98)** Now, here under Learn, you can see some of the same information we saw in the Help menu Choice.
>
> **[1:45](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=105)** Now all the choices are hyperlinks.
>
> **[1:48](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=108)** Let's go to each of those and we'll start with the User Guide.
>
> **[1:54](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=114)** Let's start with the User Guide, which takes us to the online User Guide.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=120)** In addition, we can select Wiki.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=124)** Now, this has valuable information about Wireshark, however, it isn't always updated.
>
> **[2:11](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=131)** Now, if you go to Questions and Answers, here are users just like yourself that have questions.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=139)** You can post a question to the community and people will respond.
>
> **[2:24](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=144)** To interact with this page, you'll need to create an account.
>
> **[2:29](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=149)** Here you can see the Mailing List and information about Wireshark.
>
> **[2:34](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=154)** And here you can see a ton of information.
>
> **[2:37](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=157)** Some of this is legacy information about Wireshark.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=162)** You might also want to check out SharkFest, which is a Wireshark developer end user conference that has tons of information and the latest tools and techniques available for Wireshark.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=177)** Wireshark also has a Discord page.
>
> **[3:01](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=181)** And if you're able to, you might consider donating to the Wireshark Foundation.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=189)** So when working in Wireshark, there are many ways to get help, including the Help menu, User Guide, and Questions and Answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (14), next (1)
> **UI Navigation:** go to (3), select the (2)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** make sure you have (1), you'll need (1)
> **CLI Commands:** make (1)
> **Documentation:** man page (1)
> **Tools:** discord (1)
> **Definitions:** is a  (1)

#### Tap into the data stream
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=0)** - [Instructor] Effective packet analysis begins with tapping into the network at the proper location to gather traffic for analysis.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=9)** Tapping into the data stream and what you will see will depend on the network.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=14)** In today's networks, there are two types of ethernet environments, shared or hub-based or on a switch.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=22)** If you're on a wireless network, you'll go through an access point, which is acting like a hub where we can see all the traffic.
>
> **[0:30](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=30)** If tapping into a wired network, you'll most likely go through a switch, and then you'll see only your own traffic.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=38)** If you want to see all the traffic, we have choices.
>
> **[0:42](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=42)** We can use port mirroring or SPAN, which is switched port analysis.
>
> **[0:47](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=47)** We can also monitor directly on the device, as a lot of vendors are putting Wireshark right within their device so you can monitor the traffic in real time.
>
> **[0:58](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=58)** You can also use a full-duplex tap in line with traffic, and you'll most likely need a special adapter.
>
> **[1:07](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=67)** When you launch Wireshark, a welcome screen displays the list of available network connections on your current device.
>
> **[1:14](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=74)** After you choose an interface and begin the capture, the interface gathers up network traffic.
>
> **[1:21](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=81)** All packet analysis tools work in the same way.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=84)** They gather the traffic, they decode it or break it down, and then display it in human-readable format.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=92)** The first step is to gather the traffic.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=95)** And before you do this, you'll need the correct capture engine.
>
> **[1:40](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=100)** For example, if you're using Windows, you'll be prompted to use Npcap, and in Linux, we use libpcap.
>
> **[1:49](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=109)** If you don't have the correct capture engine, you won't be able to capture the traffic.
>
> **[1:54](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=114)** Keep in mind that traffic enters the network interface card one frame at a time.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=121)** Packet analysis software converts those bits into readable form for analysis.
>
> **[2:07](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=127)** The heart of this is where the decoding takes place.
>
> **[2:11](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=131)** Wireshark was Ethereal before 2006, but the main core is still the same.
>
> **[2:17](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=137)** The Ethereal packet analyzer or EPAN is the packet analyzing engine for Wireshark.
>
> **[2:25](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=145)** Within EPAN, we see that it goes through various stages.
>
> **[2:29](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=149)** The protocol tree, dissectors, any necessary dissector plugins, and any display filters.
>
> **[2:36](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=156)** Wireshark and many other packet analysis tools provide options to enhance your graphical experience and will display the traffic in a readable format.
>
> **[2:47](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=167)** I'm here with this packet capture, and let's take a look at the interface.
>
> **[2:52](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=172)** When you see a capture, we see that it defaults with the three panels.
>
> **[2:58](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=178)** The first panel is the packet list.
>
> **[3:01](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=181)** The packet list pane is at the top of the window and it shows all the packets found in the active capture file.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=189)** Up at the top, we see columns, which we can modify.
>
> **[3:12](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=192)** We can make them larger or make them smaller, and I can also add to those very easily by right clicking, and for example, if I would like to see Version.
>
> **[3:22](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=202)** Now, keep in mind that everyone will have slightly different column headers and choices for column headers.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=210)** It really depends on how you customize those headers.
>
> **[3:35](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=215)** I could take that off by going back in and unchecking that.
>
> **[3:39](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=219)** But I can also add a column value by going directly into a field value, and for example, I want to add total length, and it says Apply as a Column.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=231)** And I'll take that off.
>
> **[3:58](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=238)** Up here in the packet list, over on the right-hand side is called the intelligent scroll bar.
>
> **[4:04](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=244)** Now, using the coloring roles, I can easily and quickly go to trouble spots.
>
> **[4:09](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=249)** For example, I see this black area, and I'll just click on it and it will take me to the trouble spots.
>
> **[4:18](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=258)** In the center are what's called the packet details, and this is where you can see all the protocols and the field values of those protocols as they're dissected.
>
> **[4:30](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=270)** We can do the same thing, if we want to, and pop it out in a single window.
>
> **[4:34](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=274)** Let's do this.
>
> **[4:35](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=275)** I'll go up at the top and I'll double click frame 73.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=281)** Now, if we take a look at this, this is helpful, for example, if I wanted to display this up on a screen and in a training and we can go through each of those field values.
>
> **[4:52](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=292)** Now, down below is the packet byte, and this is actually what we call the hex dump, and this is the raw data.
>
> **[4:59](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=299)** It's in hexadecimal, but I could make it in bits.
>
> **[5:02](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=302)** I can right click and say, Show as Bits.
>
> **[5:06](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=306)** But there's a lot of information.
>
> **[5:08](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=308)** So I'll go back in and Show bytes as hexadecimal.
>
> **[5:11](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=311)** And when you're in here, if you click on a field value, you'll see that it's mirrored down below in the packet byte.
>
> **[5:20](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=320)** Now, what you see is the default configuration and how it's presented to you.
>
> **[5:24](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=324)** We can change that.
>
> **[5:25](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=325)** We'll go to Edit and Preferences, and then to Layout.
>
> **[5:29](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=329)** And here, we can see the default layout.
>
> **[5:32](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=332)** But there's other choices.
>
> **[5:33](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=333)** For example, I might want to check this one, and let's take a look at that.
>
> **[5:38](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=338)** And as I said, we can easily go back and modify that to what the default is.
>
> **[5:45](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=345)** And we'll say Okay.
>
> **[5:47](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=347)** The last thing I generally do is I go in and I take off the packet byte.
>
> **[5:51](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=351)** So go to View and Packet Byte.
>
> **[5:54](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=354)** And this gives me a little bit more landscape when I'm doing the analysis.
>
> **[5:59](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=359)** Effective packet analysis goes through several phases.
>
> **[6:03](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=363)** First, we need to tap in at the correct location.
>
> **[6:07](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=367)** Wireshark then gathers the traffic, but you'll need the correct capture engine in order to do this.
>
> **[6:15](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=375)** Wireshark then decodes the packets using Ethereal packet analysis, which is the core engine for Wireshark.
>
> **[6:23](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=383)** It then displays the capture in a readable format for analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (13), [[Wireshark]] (8), data (2), [[Windows]] (1), [[Linux]] (1)
> **Analogies:** for example (6)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** make (3)
> **Env Vars:** epan (2), span (1)
> **Warnings:** keep in mind (2)
> **Prerequisites:** you'll need (2)
> **Definitions:** is called (1)


### 2. Getting Started with Wireshark

[↑ Back to Table of Contents](#table-of-contents)

#### Using display and capture filters
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=0)** - [Instructor] While you're working with Wireshark, you can use capture and display filters.
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=6)** A capture filter is applied prior to capture and will only capture what you filter, nothing else.
>
> **[0:15](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=15)** A display filter is used during an active capture or even on a precaptured packet.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=22)** One important thing to know is that they are different.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=26)** And also when you're working with display filters, there are shortcuts for those display filters where you can simply right click, and I'll do that during demonstrations and show you how to easily get and apply a filter.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=41)** So let's take a look at the interface here.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=44)** And I want to just show you one important thing, and why they're different is because this comes from the capture engine and the display filter is within the Wireshark and the dissectors and the decodes.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=56)** So if I go up to the display filter, and well, say, for example, I want to just display ftp traffic.
>
> **[1:05](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=65)** Now, I'll just type ftp, and it does come up with some choices, but if it just is ftp, I'll leave it at that.
>
> **[1:13](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=73)** Now, while I was typing that, I think you notice something, it's red.
>
> **[1:18](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=78)** Now, what happens in Wireshark is it's trying to help you.
>
> **[1:21](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=81)** If it's red, it means it won't work.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=84)** Green means it's good, and yellow means go ahead and try it.
>
> **[1:27](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=87)** It might work, it might not work.
>
> **[1:30](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=90)** The other thing is when I start typing, if I were to type a capital FTP, it won't work.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=98)** It never has, and it may work at some point, but at this point, a capital letter on the left-hand side won't work.
>
> **[1:47](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=107)** Now I can type ftp and just select that, and I would be able to capture ftp data.
>
> **[1:55](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=115)** But while I'm using it in a display filter, I'll also capture other types of traffic.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=121)** All right, so I'll take that off, and I want to just show you something down below here.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=125)** We'll say, for example, if I'm only interested in capturing ftp traffic, nothing else.
>
> **[2:12](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=132)** All right, and let's just type ftp.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=135)** Hmm, doesn't work.
>
> **[2:18](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=138)** Well again, that's because they're different.
>
> **[2:21](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=141)** Now, on this little green mark right here, let's just click on here.
>
> **[2:26](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=146)** I just want to show you that there are some samples in here that you can use in order for you to create a capture filter.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=155)** Now, if we look at the way it's structured, you can see that there are different protocols, different ports.
>
> **[2:43](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=163)** What I'm going to show you is I'm going to type TCP.
>
> **[2:47](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=167)** Still doesn't like it, so let's type tcp port 21.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=177)** Now, that's an ftp port.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=180)** All right, so as you can see, I simply put port 21, which is associated with ftp.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=187)** And now I'll go to an open ftp site just so we can see what we get when we capture that traffic.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=194)** And I'll double click on my wifi and begin capturing, and I'll select one of the captures.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=203)** And in here, this is a huge capture filter, and then I'll stop that.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=212)** All right, and so now you see, all I have is ftp traffic.
>
> **[3:38](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=218)** The traffic is no longer coming in, and now we take a look.
>
> **[3:43](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=223)** There's nothing else.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=225)** So if I need to do some troubleshooting, let's see.
>
> **[3:48](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=228)** I'll go to Statistics and a Flow Graph.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=231)** There's the ftp traffic, nothing else.
>
> **[3:56](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=236)** All right, now I'm going to close this, continue without saving, and I'm going to take that off so you really don't want to keep that capture filter on there because it's not going to do us any good because it will limit anything else I try to capture.
>
> **[4:14](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=254)** Once you have cleared out the capture filter, you might also want to reboot just to get out any remaining filters in your interface so that that doesn't disrupt what you're going to do moving forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (7), [[Wireshark]] (3), data (1), [[Troubleshooting]] (1), [[Statistics]] (1)
> **UI Navigation:** click on (2), go to (2)
> **Ports:** port 21 (2)
> **Env Vars:** ftp (1), tcp (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Discovering shortcuts
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=1)** - [Instructor] So I want to open up a TCP example.
>
> **[0:03](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=3)** And once I open this up, we'll just do a couple of things with the display filter.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=8)** And this is where, again, you'll take a look at Apply the Display Filter.
>
> **[0:12](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=12)** Now there's a lot of things that we can do as far as providing a display, and I'll just type TCP.
>
> **[0:18](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=18)** And again, it's turning green, so that means it's okay.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=22)** And we'll see a lot of traffic in there.
>
> **[0:30](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=30)** But within Wireshark, there's a lot of really nice shortcuts that I can do in order for me to create a filter.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=37)** I'll go to this frame 17, which is ICMP, destination unreachable, port unreachable.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=45)** Now, if you scroll up here and you drop this down, we see that it's the Type 3 destination unreachable, Code 3 port unreachable.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=56)** Now, if I right click, I can do a shortcut, Prepares a Filter, Selected.
>
> **[1:01](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=61)** When I say Prepares a Filter, that puts it up there.
>
> **[1:03](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=63)** It doesn't run it, so I'll just put that up there.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=66)** And as you see, ICMP code equals 3, and then press Enter.
>
> **[1:10](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=70)** And there we can see a number of ICMP Code 3 here.
>
> **[1:15](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=75)** And that's a nice little shortcut.
>
> **[1:17](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=77)** Now I'll just close this, and it'll do the exact same thing, but this way, I'm going to right click.
>
> **[1:22](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=82)** And this time, I'll say Apply as a Filter and say Selected.
>
> **[1:27](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=87)** And that will actually just run it.
>
> **[1:30](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=90)** Now I'll close out that and clear out the filter.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=93)** And then you can do some other things as far as expressions, and I'll just drop this down.
>
> **[1:40](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=100)** So for example, if I wanted to just see if there are any other IP headers that are using this identification field at 24028, I'll right click and I'll apply as a filter.
>
> **[1:54](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=114)** And we see one, well, okay.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=116)** That really wouldn't be enough for me to take a look at.
>
> **[1:59](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=119)** But what if I also want to say, take that IP header and also give me everything that's got Version 4, or IP Version 4.
>
> **[2:08](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=128)** I'll right click, and here I say, Prepares a Filter, and here you have your Boolean operators, and Selected.
>
> **[2:16](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=136)** I have that identification, which is 24028, and I also want any of those frames that are IP Version 4, and now, I press Enter.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=148)** And so that is going to, again, give me that single packet there.
>
> **[2:32](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=152)** So there's a lot of different shortcuts that you can use.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=155)** And in addition, you can create an expression by going to Analyze, Display Filter Expression.
>
> **[2:43](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=163)** You can build an expression, which again, you'd really know what it is you need to do.
>
> **[2:48](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=168)** Now for any additional information on display or capture filters, I have a more comprehensive example if you go onto my [[Wireshark- Malware and Forensics]].
>
> **[3:00](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=180)** And there I go into a little bit more detail on display filters and capture filters.
>
> **[3:05](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=185)** But I've given you just the highlights to show you that we can filter on many, many different field values either by using a capture filter, which only limits us to whatever I filtered on, or better yet, use the display filter, allow the capture to occur, and display only the traffic you want to see.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (2), [[Wireshark]] (2)
> **Env Vars:** icmp (3), tcp (2)
> **Versions:** version 4 (3)
> **UI Navigation:** go to (1), scroll up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Grasping the OSI model
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=0)** - [Instructor] In addition to understanding what the protocols do, a solid understanding of the OSI model and the encapsulation process is important to do effective packet analysis.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=13)** The seven-layer OSI model standardizes the functions of data transformation by breaking it down into layers.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=22)** And it outlines how that network interface card encapsulates the data as it's prepared for transit on the network.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=29)** I'll take a look at the OSI model at a high level.
>
> **[0:33](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=33)** I'll review each layer, and I'll describe the main function.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=37)** We'll talk about some common protocols in that layer and state the protocol data unit, which defines the shape of the data that it's in, in that layer.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=48)** And we'll talk about any addresses that are needed, such as MAC address or IP address.
>
> **[0:55](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=55)** Let's start with the Application Layer.
>
> **[0:58](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=58)** Application Layer is Layer 7, and this is all about initiating contact with the network.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=64)** Usually, a user who would initiate, perhaps getting a webpage.
>
> **[1:10](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=70)** The protocols that are used are HTTP, FTP, or SMTP.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=76)** The protocol data unit at this layer is simply data.
>
> **[1:20](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=80)** Nothing magical has happened, it's just simply data.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=84)** And there's no addresses that are needed.
>
> **[1:27](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=87)** The Presentation Layer will take the next step.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=91)** It will format the data.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=93)** It provides optional compression and encryption.
>
> **[1:37](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=97)** And the protocol data unit at this point is simply data.
>
> **[1:41](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=101)** Layer 5 is the Session Layer.
>
> **[1:44](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=104)** This is all about initiating, maintaining, and tearing down a session.
>
> **[1:49](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=109)** Again, the protocol data unit at this point is simply data.
>
> **[1:54](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=114)** Now, when we go to the Transport Layer, this is where we start the encapsulation process.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=121)** The Transport Layer is responsible for transporting data.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=125)** Depending on how you need it transported, you might choose a connection-oriented protocol such as TCP or connectionless protocol such as UDP.
>
> **[2:16](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=136)** The protocol data unit at this point is a segment.
>
> **[2:20](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=140)** And at this point, we need a port address.
>
> **[2:24](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=144)** We need the source and destination port address, which will logically associate with an appropriate application.
>
> **[2:32](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=152)** Layer 3 is the Network Layer.
>
> **[2:34](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=154)** This is all about the network.
>
> **[2:37](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=157)** We provide addressing and routing.
>
> **[2:40](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=160)** And when we talk about the different protocols that are in this layer, we know, of course, there is IP; and, of course, we also need ICMP; but let's take a look at that protocol that I put right in between Layer 3 and Layer 2, which is Address Resolution Protocol.
>
> **[3:01](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=181)** Now, Address Resolution Protocol is a unique protocol and that there is no IP header.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=187)** And that's because it's where it needs to be.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=190)** There's no routing involved, it's simply resolving an IP address to a MAC address.
>
> **[3:16](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=196)** The protocol data unit at this point is a packet, and the address is an IP address.
>
> **[3:24](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=204)** Layer 2 or the Data Link Layer is all about proper frame formation.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=210)** The protocol is Ethernet II, which is the most widely used protocol on the local area network.
>
> **[3:36](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=216)** And the protocol data unit at this point is a frame.
>
> **[3:40](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=220)** And the address is a MAC address.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=225)** Now, it's all ready and packaged up, it's encapsulated with proper frame formation, and it has all the necessary addresses.
>
> **[3:53](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=233)** It, then, is broken down into a stream of bits.
>
> **[3:58](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=238)** So it's able to be transmitted on whatever media you need it to be transmitted on.
>
> **[4:04](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=244)** There are no addresses and no protocols involved.
>
> **[4:07](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=247)** Again, it's just sending it off on a stream of bits.
>
> **[4:11](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=251)** So if you aren't already familiar with the OSI model, get a better understanding of each of the layers of the OSI model, what it does, the protocol data units, and the addressing.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=264)** All in all, these skills will help you to analyze traffic better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (17), application (3), [[Routing]] (2), [[Data Transformation]] (1), next (1)
> **Env Vars:** osi (5), mac (3), http (1), ftp (1), smtp (1)
> **Definitions:** is a  (5), is an  (1)
> **Analogies:** such as (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Generating a frame
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=0)** - [Instructor] Now that you understand the different layers, let's build out a frame.
>
> **[0:05](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=5)** Now when frame formation occurs and the encapsulation process takes place, we start out with a stump of data.
>
> **[0:12](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=12)** Well, the data might be a web request.
>
> **[0:15](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=15)** The next thing that happens is we create a segment and that would either be your TCP or UDP header.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=22)** And within that segment, we have the source and destination port address.
>
> **[0:28](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=28)** The next part of encapsulation is adding the IP header.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=34)** Now at the network layer, it's called a packet.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=37)** And within that, we have a source and destination IP address.
>
> **[0:42](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=42)** The last part of this frame formation is the frame header.
>
> **[0:46](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=46)** And within that, of course, we have the MAC address.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=50)** And with a frame, not only is there a header, we also have a trailer.
>
> **[0:55](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=55)** That is the frame check sequence.
>
> **[0:58](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=58)** This is to provide error detection on a network by creating a cyclic redundancy check value that the network will check as it's traveling along on its way.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=69)** Now, if we look at that frame formation and the encapsulation process, we can relate it to how it's presented to us in Wireshark.
>
> **[1:19](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=79)** So take a look at this encapsulation and all the way at the top is, of course, your frame header.
>
> **[1:25](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=85)** Frame is ethernet two and you see the source and destination MAC addresses within that frame header.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=93)** The next represents the network layer in the form of a packet.
>
> **[1:37](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=97)** And there you see the IP header and of course, within that would be your source and destination IP address.
>
> **[1:46](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=106)** Then we move to the transport layer where you see a segment and in this case, it's transmission control protocol.
>
> **[1:54](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=114)** And there you have the source and destination ports.
>
> **[1:58](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=118)** Tucked within that frame is the data.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=121)** And here we see HTTP and it might be a web request.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=126)** Keep in mind, not all frames have data this is an example of a fully encapsulated frame, just to show you how it relates in Wireshark to the OSI model.
>
> **[2:17](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=137)** So it's important to understand the OSI model because the encapsulation process is evident in Wireshark and understanding each of the layers, the protocol data unit, and the addressing, will help you to analyze traffic better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), next (3), [[Wireshark]] (3), web (2), traffic (1)
> **Env Vars:** mac (2), osi (2), tcp (1), udp (1), http (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Recognize the Wireshark interface
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=6)** - [Instructor] Let's do a visual challenge so that you can follow along.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=10)** The questions are in the exercise file that have all the links to the course.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=17)** Question one.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=19)** By default, Wireshark saves packets to a temporary file.
>
> **[0:24](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=24)** To save files using a ring buffer, select A, edit, B, go, C, capture or D, tools.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=37)** Question two.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=38)** In frame 714, what represents the transport layer header?
>
> **[0:45](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=45)** A, B or C?
>
> **[0:50](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=50)** And question three.
>
> **[0:52](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=52)** In frame 714, what represents the frame header?
>
> **[0:58](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=58)** A, B or C?
>
> **[1:02](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=62)** Check back to see the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Recognize the Wireshark interface
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=0)** (bouncy music)
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=6)** - [Narrator] All right, now let's check our work.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=10)** For question number one, by default, Wireshark saves packets to a temporary file.
>
> **[0:16](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=16)** To save files using a ring buffer, select C, capture.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=22)** Question number two.
>
> **[0:24](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=24)** In frame 714, what represents the transport layer header?
>
> **[0:30](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=30)** B represents the transport layer header, where we can see TCP.
>
> **[0:36](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=36)** Question number three.
>
> **[0:39](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=39)** In 714, what represents the frame header?
>
> **[0:44](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=44)** In frame 714, A represents the frame header.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=50)** B is not the frame header, but metadata about frame 714.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=56)** Good job!
>
> **[0:57](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=57)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1), [[Metadata]] (1)
> **Env Vars:** tcp (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bouncy music) (1)


### 3. Examining the Internet Suite

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding the TCP-IP suite
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=0)** - [Instructor] The TCP/IP suite or internet suite is a set of protocols that allows us to communicate and exchange data on the network.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=9)** The suite defines how data is packetized, addressed, transmitted, and routed.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=17)** The key protocols are TCP, UDP, IP, and ICMP.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=23)** We see the TCP/IP suite residing here at the network and transport layer.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=29)** At the network layer, the main players are IP and ICMP.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=34)** IP or the Internet Protocol is the network layer protocol used for routing the data from the source to the destination.
>
> **[0:42](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=42)** IP is responsible for addressing and does not have any error reporting functions.
>
> **[0:49](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=49)** For that, we use ICMP.
>
> **[0:52](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=52)** This is used in addition to the Internet Protocol to carry error, routing and control messages, however, it does not exchange any data between systems.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=64)** The transport layer provides data transport by using either TCP, which is a connection-oriented protocol or UDP, which is connectionless.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=76)** You will hear that other protocols ride on top of the TCP/IP suite, and those would be protocols such as those in the application layer, HTTP, FTP, or SMTP.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=91)** And we need to set, in our bindings, the ability to use TCP/IP, as pictured here in this graphic.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=98)** The TCP/IP suite or internet suite is a set of protocols that allows us to communicate and exchange data on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Routing]] (2), application (1)
> **Env Vars:** tcp (7), icmp (3), udp (2), http (1), ftp (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Explaining Transmission Control Protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=0)** - [Instructor] Transmission control protocol resides at layer four or the transport layer of the OSI model.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=7)** Transmission control protocol provides connection oriented transport.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=13)** TCP begins with a three-way handshake and data is sequenced and acknowledged.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=19)** TCP supports windowing and flow control so as not to overwhelm the host.
>
> **[0:24](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=24)** Here's the TCP header.
>
> **[0:27](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=27)** And now we'll go into Wireshark and take a look at those field values.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=32)** If you'd like to follow along, we'll go to cloudshark.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=35)** I downloaded HTTP.cap and you can go to export and download file and bring it up in Wireshark.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=43)** Now, once in Wireshark, what I did was I'll show you here, it starts out with the three panels.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=48)** I go to view and take off packet bites.
>
> **[0:51](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=51)** I want a little more landscape.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=54)** Now we'll bring this up and go to Frame 4.
>
> **[0:58](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=58)** Let's just take a look at our encapsulation.
>
> **[1:01](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=61)** Frame 4 is simply metadata about that frame.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=64)** Here's the frame header, ethernet two, the network layer header IP, the transport layer header, TCP, and then the data HTTP.
>
> **[1:17](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=77)** We're going to open up TCP.
>
> **[1:20](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=80)** Now we can take a look, I'll float this on top, so you can refer to the TCP header.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=86)** All right, first we see the source and destination port.
>
> **[1:30](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=90)** The source port is 57678.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=94)** Now sent from the client, that's simply saying when you come back, send the data to 57678.
>
> **[1:42](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=102)** The destination port is 80, which is associated with HTTP.
>
> **[1:48](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=108)** Here, we see stream index zero.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=111)** There are no field value stream index, that's a value calculated by Wireshark.
>
> **[1:57](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=117)** This helps you to keep track of the many different streams in Wireshark and if we were to look at conversations, we could go to stream index zero or stream 14 or whatever you'd like.
>
> **[2:10](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=130)** Here, we see TCP segment length 134.
>
> **[2:14](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=134)** Now, where did that value come from?
>
> **[2:16](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=136)** Well, I'll scroll down here and I'll place my cursor on the HTTP header and here you see 134 bytes.
>
> **[2:23](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=143)** Again, that's just a number calculated in Wireshark.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=148)** Now here we see the sequence number one, and it's a relative sequence number.
>
> **[2:34](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=154)** What that means it's in relationship to this stream, sequence number one, it's not the actual value.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=162)** If it were, it's a large number, let's take a look.
>
> **[2:46](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=166)** I'll right click.
>
> **[2:48](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=168)** And I'll go to protocol preferences.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=171)** Now here we can uncheck relative sequence numbers.
>
> **[2:55](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=175)** And as you see, it's a large number.
>
> **[2:59](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=179)** It's really hard to calculate values with that large number so we'll go back to relative sequence number by going to protocol preferences, and then we'll put relative sequence number back.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=191)** For example, here it says next sequence number 135.
>
> **[3:16](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=196)** Well, that's 134 plus one, and that's, what's calculated as what's coming next.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=203)** Here, you see the acknowledgement number one and again, it's a relative acknowledgement number.
>
> **[3:29](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=209)** And now here is the header length, 32 bytes.
>
> **[3:33](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=213)** Normally a TCP header will be about 20 bytes.
>
> **[3:37](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=217)** Now when we add options, that adds to the length.
>
> **[3:41](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=221)** So let's take a look, I'll place my cursor up here at the TCP header and then down below, we see that the TCP header is 32 bytes.
>
> **[3:54](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=234)** And we'll scroll up here and let's take a look at the flag section.
>
> **[3:57](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=237)** Now, there's a lot going on with the flags.
>
> **[4:00](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=240)** When you're ready to go a little more advanced, you can find out about all the flags and why we keep track of those is certainly your devices are monitoring what's happening during the conversation.
>
> **[4:12](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=252)** The flags tell the story about what's going on at that point in time.
>
> **[4:17](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=257)** Now some common ones that you'll see of course, is the syn flag and that's going to synchronize the sequence numbers.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=264)** We see acknowledgement and that's of course acknowledging the data push.
>
> **[4:29](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=269)** And the fin flag is when the conversation is over we exchange fin packets.
>
> **[4:34](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=274)** And reset is when it set, it means I don't want to talk to you and the conversation has reset or closed.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=281)** So a lot goes on with flags and it would be good to get familiar with those as you advance, because it tells a lot about the story and it is used for a number of different reasons.
>
> **[4:52](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=292)** Right now we'll go to window size.
>
> **[4:55](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=295)** Now window size, it says 46, but then there's a value here in brackets, it says calculated window size, that's a larger number.
>
> **[5:04](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=304)** Well that's because the actual value is pretty small.
>
> **[5:07](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=307)** And in the eighties, the window size of 46 would maybe be normal.
>
> **[5:11](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=311)** But as you see, there's a scaling factor of 128, which gives us the true value of 5888.
>
> **[5:17](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=317)** That's so the server knows about how much data I can send to the host without overwhelming the host.
>
> **[5:24](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=324)** It will update if the value goes up or down, for example, if the host buffer were to get too full, the number would shrink.
>
> **[5:32](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=332)** And as it processes the data, the number would then expand.
>
> **[5:36](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=336)** Now we'll look at the check sum.
>
> **[5:38](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=338)** It says unverified.
>
> **[5:40](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=340)** Well, in a lot of cases, you'll find that we're not going to try to validate that check sum and here's why.
>
> **[5:46](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=346)** Now take a look down below, there's a blue dot, cyan dot, and that's the expert system.
>
> **[5:52](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=352)** Now, what is it saying is that it's just chats.
>
> **[5:55](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=355)** Okay, so if this were to be calculated, this might be incorrect and I'll show you why.
>
> **[6:02](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=362)** We'll go to protocol preferences.
>
> **[6:04](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=364)** And here it says validate TCP checksum if possible, now I'll select that.
>
> **[6:10](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=370)** And now you see it says it's incorrect and it should be this number.
>
> **[6:14](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=374)** And as you see, there's a little note that says, TCP checksum offload, what happens is it offloads to the NIC card and it comes up in correct.
>
> **[6:24](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=384)** Down below, you see the red dot and the expert system and that's saying that there's possibly something wrong with this stream, but there isn't.
>
> **[6:33](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=393)** So we'll go back and check that and replace that with validate the TCP checksum if possible, and that'll correct that.
>
> **[6:42](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=402)** But if checksum is important to use because it's going from source to destination.
>
> **[6:47](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=407)** Many things could happen.
>
> **[6:49](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=409)** The checksum in the TCP header, monitors for error detection, not correction.
>
> **[6:55](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=415)** Now we see the urgent pointer and then down below, then what follows as you see over here, is options and data.
>
> **[7:03](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=423)** Well now here you see the options and in this case, that options is 12 bytes.
>
> **[7:09](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=429)** Now we know that it needs to be a multiple of four, so let's drop this down and see what's inside.
>
> **[7:14](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=434)** Well, you see there's the timestamp option and that's 10 bites, but it has to be 12.
>
> **[7:19](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=439)** So you see no ops, which are kind of placeholders so that it comes up to 12 bites.
>
> **[7:27](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=447)** And then following that then, you see HTTP, which is the data.
>
> **[7:33](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=453)** So that's the TCP header in Wireshark, and we've gone over all of the field values and hopefully you've got a little better understanding of TCP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Wireshark]] (7), next (2), [[Metadata]] (1)
> **Env Vars:** tcp (16), http (5), osi (1), nic (1)
> **UI Navigation:** go to (8), scroll down (1), scroll up (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Recognizing the TCP connection process
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=0)** - [Instructor] Transmission Control Protocol is a connection-oriented protocol.
>
> **[0:05](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=5)** It begins with a three-way handshake and ends by terminating the session.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=10)** A three-way handshake begins by the client sending a SYN packet to the server.
>
> **[0:16](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=16)** That SYN packet synchronizes the sequence numbers.
>
> **[0:20](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=20)** If the server accepts, it responds by a synchronization acknowledgement.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=26)** The client then sends a final acknowledgement and then we have a connection.
>
> **[0:31](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=31)** A socket is created and we can begin to exchange data.
>
> **[0:36](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=36)** Periodically, services will be refused, and then you'll see a reset.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=41)** No response may indicate a firewall.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=45)** You may receive an ICMP destination unreachable packet, and a code might indicate the network was unreachable or the host was unreachable, but most likely the target port was firewalled.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=59)** The host might try again with another SYN packet.
>
> **[1:03](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=63)** The connection can be terminated in one of several ways.
>
> **[1:07](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=67)** The connection can time out and will be closed or no password was sent, so the connection was reset, or we'll see an exchange of FIN packets and this indicates a normal termination.
>
> **[1:21](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=81)** For a normal termination, we simply see an exchange of FIN and FIN-ACK packets from the client to the server and the server back to the client, and this will close the connection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **Env Vars:** syn (3), fin (3), icmp (1), ack (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Viewing the TCP handshake and teardown
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=1)** - [Instructor] So let's step through, the handshake and termination.
>
> **[0:05](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=5)** I'm here on CloudShark, and you can either follow along in CloudShark, or you can go to Export and download the file, and open it in Wireshark.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=14)** I've opened this capture in Wireshark, and it's almost a perfect example of a complete conversation.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=22)** I'll scroll up so you can see that it's really a small capture.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=26)** But let's take a look at the flow graph.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=29)** We'll go to Statistics.
>
> **[0:31](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=31)** And we'll go to the Flow Graph.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=34)** And there's no need to filter it because its entire conversation is simply with the client to the server.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=40)** Now let's take a look at the top three packets.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=43)** There's where you see your three-way handshake.
>
> **[0:47](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=47)** And then down below we see an exchange of data, and then somewhere in the middle, you see quit and closing connection.
>
> **[0:55](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=55)** So we now know it's time to terminate the session.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=59)** And the last four packets are where we close the conversation.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=64)** I'll close that.
>
> **[1:05](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=65)** And now let's take a look at the three-way handshake.
>
> **[1:08](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=68)** I'll scroll up here and give us a little more room where we can take a look at frame one.
>
> **[1:13](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=73)** Let's just first start with frame one.
>
> **[1:17](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=77)** Now when we look at frame one, we have a frame header, we have the IP header, and the TCP header.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=86)** As you notice there's no data.
>
> **[1:28](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=88)** There won't be any because it's just a handshake.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=91)** No data is exchanged.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=94)** You can also see then, up here in the upper right-hand corner, length equals zero.
>
> **[1:40](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=100)** So let's take a look at the TCP header.
>
> **[1:42](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=102)** This indicates what's going on if we take a look at the flags, and I'll drop this down, and here you see the SYN flag set.
>
> **[1:50](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=110)** Again, that's from the client to the server, trying to initiate a conversation.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=116)** Now with that first packet, going from the client to the server, comes with it some options.
>
> **[2:03](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=123)** If I place my cursor on the TCP header and then look down below the TCP header is 40 bytes.
>
> **[2:11](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=131)** The TCP header is 20 bytes at least, but with options it's more, now at this point it's 40 bytes.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=139)** But let's take a look at the options.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=142)** Here's your options.
>
> **[2:23](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=143)** And we'll drop this down and you can see, what it is, is the client communicating to the server what options would I like to agree upon.
>
> **[2:31](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=151)** And so you understand, for example, the following.
>
> **[2:36](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=156)** Client is seeing that the maximum segment size is 1,460 bytes.
>
> **[2:41](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=161)** Also SACK is permitted and SACK is selective acknowledgment.
>
> **[2:45](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=165)** Meaning keep sending the data, even if it's not in order, I'll put it in the correct order.
>
> **[2:52](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=172)** Here we see timestamps and windows scaling.
>
> **[2:56](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=176)** Now keep in mind.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=177)** It has to be a multiple of four.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=180)** Now with each of these, and if you look down below, you can see the size of each of those options, window scaling is three bytes.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=187)** So we have to add a no op, which is essentially a placeholder, to bring that total up to 20 bytes.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=194)** And then that with the TCP header gives us our 40 bytes.
>
> **[3:20](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=200)** The server then responds with a SYN-ACK.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=203)** And I'll scroll down here, and here you can see the acknowledgement flag and the SYN flag.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=210)** Now keep in mind that SYN flag is set only on the first two packets of the three-way handshake.
>
> **[3:37](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=217)** After that, you won't see it again in that conversation.
>
> **[3:41](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=221)** Now we'll bring this up and take a look at the TCP header.
>
> **[3:46](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=226)** And again, it's 40 bytes because the server is sending the server options.
>
> **[3:52](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=232)** And as you can see, those are the following options the server sends to the client.
>
> **[4:00](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=240)** Then we go to frame three and that's our final step in this.
>
> **[4:05](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=245)** And let's take a look at the flags.
>
> **[4:08](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=248)** Now we see that the acknowledgement flag is set, and that means the conversation is ready to begin.
>
> **[4:16](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=256)** After this we can start to exchange data.
>
> **[4:21](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=261)** And in this point, you can see the TCP header is dropped to 32 bytes because there are a few less options as you can see down below.
>
> **[4:30](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=270)** Now we'll bring this back up, and now we'll take a look at the end of the conversation.
>
> **[4:36](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=276)** Down below, we'll go to frame 12.
>
> **[4:38](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=278)** And here's where you see the exchange of data from the client to the server.
>
> **[4:43](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=283)** Now here it's seeing an acknowledgement.
>
> **[4:45](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=285)** And that acknowledgement is probably at the end of the conversation where the client is saying that it's acknowledging that it's received whatever data it's received from the server.
>
> **[4:56](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=296)** The server responds with a FIN ACK saying, I'm pretty much done with everything.
>
> **[5:01](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=301)** We can close this connection.
>
> **[5:03](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=303)** Then the client then responds again with a FIN ACK, and then we see our final acknowledgement, and that will then close the connection and terminate the session.
>
> **[5:15](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=315)** So as you can see, TCP is a connection oriented protocol where you will see a three-way handshake and a tear down of the session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Wireshark]] (2), [[Statistics]] (1), [[Windows]] (1)
> **Env Vars:** tcp (9), syn (4), ack (3), sack (2), fin (2)
> **UI Navigation:** go to (5), scroll up (2), scroll down (1)
> **Warnings:** keep in mind (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Breaking down User Datagram Protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=0)** - [Instructor] User Datagram Protocol is a connectionless protocol for data transfer.
>
> **[0:05](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=5)** We see here in the OSI Model, UDP is in the transport layer.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=10)** UDP is a lightweight protocol.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=13)** It provides connectionless transport layer service, and there's no handshake or connection process.
>
> **[0:20](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=20)** UDP doesn't have any ordering or reliability services, and there's no teardown.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=26)** UDP is a lightweight protocol that's great for time-sensitive applications such as DNS, Voice over IP, routing information protocol, or trivial file transfer protocol.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=41)** Here we see the UDP Header.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=43)** It's always eight bytes long, and it includes the Source Port, Destination Port, Length, and Checksum.
>
> **[0:51](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=51)** Now, that Checksum is used for error detection, not correction.
>
> **[0:55](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=55)** The UDP Checksum is optional with IP version four.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=59)** However, it is mandatory with IP version six primarily because IP version six doesn't have a checksum.
>
> **[1:08](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=68)** Now let's take a look at a UDP header.
>
> **[1:11](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=71)** I'm at CloudShark, and if you'd like to follow along, you can download this file.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=76)** I've opened it up in Wireshark, and what I'll do up here is go to the Display filter and I'll type udp.
>
> **[1:25](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=85)** So there are my DNS packets, and what we'll do is just take a look at the User Datagram Protocol.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=93)** I'll double-click and pop out this frame.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=98)** And, again, this lightweight protocol only has four fields: the Source Port, the Destination Port, the Length, and the Checksum.
>
> **[1:50](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=110)** Now, that's pretty much it for UDP.
>
> **[1:53](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=113)** So while I'm in here, let's take a look at some other things in Wireshark.
>
> **[1:58](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=118)** Let's go to Statistics.
>
> **[1:59](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=119)** If we go to Statistics, you can see there are a lot of choices, and for more advanced training, we will get into those.
>
> **[2:07](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=127)** But for something really simple, let's just take a look at Capture File Properties.
>
> **[2:13](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=133)** Now, when you open this, this tells us a summary about this file.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=139)** Now, you can see the capture and what it knows about the hardware, the operating system.
>
> **[2:23](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=143)** Again, what it knows, it will put in there.
>
> **[2:27](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=147)** Here you can see when this packet was captured, 2011, and some more information about the statistics.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=155)** Now, down below here, in the next generation, we are able to put comments in the file.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=162)** Now, this would be handy if we were to share this information with coworkers.
>
> **[2:47](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=167)** So, for example, I might want to say, "Take a look at frame 29."
>
> **[2:55](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=175)** And I'll just say Save Comments, and then we'll close it.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=180)** Now, if you take a look up here, there is an asterisk that is right by the title.
>
> **[3:06](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=186)** That is because it knows that there's a comment, and you will want to save that so someone can reference it when they open it up.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=194)** Well, we'll go back into Statistics again.
>
> **[3:16](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=196)** I'll drop this down.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=199)** And another handy tool is a Protocol Hierarchy.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=203)** Now, this is helpful if you are taking a look at protocols that are traveling on your network and you might want to see if there's anything that shouldn't be on your network.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=212)** So this is a simple capture, nothing's really standing out, but, again, it's a nice handy tool.
>
> **[3:38](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=218)** I'll close that.
>
> **[3:40](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=220)** Another thing is we talked about coloring rules.
>
> **[3:43](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=223)** Now, they're there and in some cases, I do take them off because they're distracting.
>
> **[3:48](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=228)** If you go up here under Telephony and just hit that one time, it takes the coloring rules off, and that is something that's reflective of the older versions of Wireshark and Ethereal, and sometimes I take it off 'cause it's somewhat distracting, but I'll put it back on.
>
> **[4:06](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=246)** Now, there's another thing in Statistics that's interesting, and we've talked about some of the things with conversations and endpoints.
>
> **[4:13](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=253)** We'll take a look at endpoints.
>
> **[4:14](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=254)** Now, remember the endpoints are the two sides of the conversation.
>
> **[4:19](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=259)** These are the endpoints.
>
> **[4:21](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=261)** If we go into the Conversation, here you can see details about the conversations, and in this case we have minimal information.
>
> **[4:33](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=273)** It's a very short capture.
>
> **[4:36](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=276)** But if we go into the one conversation, and we have a little bit more detail here, I can right-click and I can say Apply as a Filter, and Selected, and here you have choices, whether you want A to B, B to A, or both ways, and I'll say Close.
>
> **[4:52](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=292)** And that puts that conversation filter right up there and it runs it for you so that you can see the whole stream.
>
> **[4:59](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=299)** So, really, that's all there is about UDP, and, again, I wanted to share with you some other things found in Wireshark.
>
> **[5:07](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=307)** So UDP is a connectionless protocol for data transfer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (5), [[Wireshark]] (4), data (2), dns (2), [[Routing]] (1)
> **Env Vars:** udp (10), dns (2), osi (1)
> **Definitions:** is a  (6), is an  (1)
> **UI Navigation:** go to (3), double-click (1), right-click (1)
> **Cross-References:** in the next (1), we talked about (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Outlining IPv4
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=0)** - [Instructor] The internet protocol resides at the network layer of the OSI model.
>
> **[0:05](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=5)** For this segment, we'll focus on IP version four.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=9)** The internet protocol is responsible for addressing and routing.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=14)** It's connectionless, meaning it's best effort.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=17)** For example, if you were to send a letter general delivery, it will get there, but there's no guarantee.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=23)** But we can provide quality of service to push the data along a little faster.
>
> **[0:28](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=28)** Here's your IP version four header.
>
> **[0:31](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=31)** And as you can see, we have several fields, and at the bottom, options and data.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=38)** Let's take a look at an IP header.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=40)** I'm in Wireshark and I've expanded one of the frames, and we'll take a look at that header.
>
> **[0:46](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=46)** And on the right-hand side, you could follow along.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=50)** All right, the first field is simply version.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=53)** And in this case, it is version four.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=56)** Not much there to show.
>
> **[0:58](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=58)** This tells us the header length, and it is 20 bytes.
>
> **[1:02](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=62)** And I can confirm if we go and place my cursor up on the top, and then look down below, that it is 20 bytes.
>
> **[1:11](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=71)** This field value here is called differentiated services.
>
> **[1:15](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=75)** That relates to what's called the type of service.
>
> **[1:19](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=79)** Now keep in mind, zero is best effort.
>
> **[1:21](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=81)** It's not prioritized, but in certain cases, we want the data to be prioritized and moved along a little faster.
>
> **[1:29](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=89)** The total length is the header and any data that follows.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=93)** And here we see 1340.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=96)** Now the next three fields relate to fragmentation.
>
> **[1:41](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=101)** Those are identification, flags, and fragment offset.
>
> **[1:45](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=105)** The specification stated that IP was responsible for addressing and fragmentation.
>
> **[1:52](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=112)** Now that was a long time ago, but things have changed.
>
> **[1:55](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=115)** We don't see fragmentation so much anymore.
>
> **[1:59](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=119)** So those three fields you see, the first one is identification.
>
> **[2:03](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=123)** So in the case of a fragmented packet, you see a number of different fragments.
>
> **[2:08](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=128)** You'll need to identify them to put 'em all back together.
>
> **[2:12](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=132)** Then there's the flags, and I'll drop this down.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=135)** Now you see the first one is the reserved bit and that's not ever used.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=139)** And the second one is don't fragment.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=142)** And sometimes that's zero, but a lot of times it simply says, don't fragment me, don't break me apart.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=148)** Now, if we were to fragment, in some cases you will, for example, if you're in a virtual environment, and you use jumbo frames.
>
> **[2:37](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=157)** Well then, you go back out to the regular network and it's a lot smaller and you have to fragment.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=162)** So in this case, you'd see more fragments and that bit would be set.
>
> **[2:46](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=166)** And the last field value in that row is a fragment offset.
>
> **[2:50](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=170)** And that identifier would help you to put back the fragments in the correct order, in the correct place.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=177)** The next field is the time to live value.
>
> **[2:59](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=179)** And that's essentially how many hops it takes around before it goes to the zero.
>
> **[3:05](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=185)** And if it does go to zero, then it's no longer going to exist.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=188)** The time to live value is in order to prevent the packets from going around and around and never getting to their final destination.
>
> **[3:17](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=197)** Now this, you see the protocol TCP.
>
> **[3:20](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=200)** That protocol field is what follows the IP header.
>
> **[3:24](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=204)** And down below here, you see TCP.
>
> **[3:26](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=206)** So that's what it identifies.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=210)** And then you see the header checksum.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=212)** And in this case, you see the validation is disabled, and we do disable the validation because sometimes it's offloaded and the checksum's incorrect.
>
> **[3:41](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=221)** So it tells you what it is, but it is not checked.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=225)** And then down below here, this is where you see your source and destination IP address.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=231)** Then after that, you see any data that would follow.
>
> **[3:55](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=235)** So that's the internet protocol version four.
>
> **[3:58](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=238)** And when we take a look at IP version six, you'll see significant differences.
>
> **[4:03](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=243)** And although the headers are significantly different, they both do the same thing.
>
> **[4:08](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=248)** They provide addressing and routing on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Routing]] (2), next (2), [[Wireshark]] (1)
> **Env Vars:** tcp (2), osi (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for example (2)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)

#### Dissecting IPv6
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=0)** - [Instructor] Internet Protocol Version 6 has a larger address space, a streamlined header, and eliminates the need for IGMP and ARP.
>
> **[0:11](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=11)** In this segment, we'll review the field values of the IPv6 header in Wireshark.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=19)** IPv6, like IPv4, resides at the Network Layer of the OSI model.
>
> **[0:27](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=27)** First, let's talk about the features of IPv6.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=32)** We'll start with the expanded address space.
>
> **[0:36](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=36)** IPv4 has a 32-bit address space and is represented by a dotted decimal notation.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=44)** IPv6 uses 128 bits in the address space, and it's represented using hexadecimal notation.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=54)** In addition to the expanded address space, IPv6 supports both stateful and stateless autoconfiguration.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=64)** With IPv6, there's no broadcast.
>
> **[1:07](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=67)** Instead, it uses multicast to communicate with multiple hosts.
>
> **[1:13](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=73)** In addition, there are optional extension headers that you can use with IPv6, including fragmentation or IP security.
>
> **[1:23](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=83)** IPv6 is still a connectionless, best-effort protocol that requires the use of ICMPv6.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=92)** The main enhancement, as you see in this illustration, is that in contrast to IPv4, IGMP and ARP are not necessary with IPv6.
>
> **[1:47](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=107)** Now let's talk about the streamlined IPv6 header and compare IPv6 with IPv4.
>
> **[1:57](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=117)** You'll see that there are a lot fewer fields in IPv6.
>
> **[2:02](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=122)** First, the internet header length doesn't exist in an IPv6 header.
>
> **[2:09](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=129)** The next three fields in an IPv4 header include Identification, Flags, and Fragment Offset, and those had to do with fragmentation.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=142)** In contrast, IPv6 seeks not to fragment, so there are no fields that deal with fragmentation.
>
> **[2:31](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=151)** You can fragment, but you'll need to use an extension header.
>
> **[2:37](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=157)** The Time to Live value still exists in an IPv6 header.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=162)** However it's called Hop Limit, and there is no Header Checksum in an IPv6 header, I've opened this packet capture, IPv6.pcapng.
>
> **[2:58](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=178)** If you'd like to follow along, I've included it in the Exercise folder.
>
> **[3:03](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=183)** Let's start with the field values of the IPv6 header in Frame 1.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=190)** Now I'll just go to Frame 1, which, it's highlighted, and I'll just move this up so that we can see a little more of the header.
>
> **[3:17](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=197)** Then I'll drop down the caret so we can see all the field values.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=203)** The first field is the Version, which is Version 6.
>
> **[3:27](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=207)** Not much to see there 'cause we know what the version is.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=212)** But the next field value is called Traffic Class.
>
> **[3:36](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=216)** Now, this has to do with quality of service.
>
> **[3:40](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=220)** The default is zero, meaning best effort.
>
> **[3:44](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=224)** But then we see the Flow Label, which is used by routers to prioritize packets containing delay-sensitive data, such as voice, video, and multimedia.
>
> **[3:57](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=237)** Now, it's not uncommon to see a zero value as it's not always being used, but in this case, we see a value.
>
> **[4:06](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=246)** Next, we'll look at the payload length, which is 144.
>
> **[4:11](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=251)** Now, the payload length is any header or data that follows the IP header.
>
> **[4:17](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=257)** So let's take a look.
>
> **[4:20](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=260)** Now, down below, we see the ICMPv6 header, and I'll place my cursor here and then down below on the status bar, we see that it's 144 bytes.
>
> **[4:34](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=274)** It says the Next Header is ICMPv6, which we know, and the Hop Limit is 255.
>
> **[4:43](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=283)** And the last two field values are the Source and Destination Address, and that summarizes the IPv6 header fields.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), data (2), [[Wireshark]] (1), [[Security]] (1), traffic (1)
> **Env Vars:** igmp (2), arp (2), osi (1)
> **Versions:** version 6 (2)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Comprehending ICMP
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=0)** - [Instructor] ICMP or Internet Control Message Protocol resides at the network layer of the OSI model.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=8)** ICMP is an integral part of the internet protocol and must be implemented by every IP module, as it's part of the original RFC.
>
> **[0:18](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=18)** The fact is the internet protocol would be nothing without ICMP.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=23)** It's a very important protocol.
>
> **[0:25](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=25)** With ICMP, there is no data exchanged.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=29)** It's simply error reporting.
>
> **[0:31](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=31)** And it's also used by the utility ping for echo request, echo reply messages.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=38)** As we see here in this graphic, we can split the ICMP messages in two categories, error reporting and queries.
>
> **[0:46](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=46)** For error reporting, you could have things such as destination unreachable, source quench, or time exceeded.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=54)** For the query, you'd see echo request reply, timestamp, or address mask.
>
> **[1:00](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=60)** ICMP messages are transmitted within an IP datagram.
>
> **[1:05](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=65)** So here we see an illustration of the IP header followed by the ICMP message.
>
> **[1:11](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=71)** within that ICMP message, you'll see some commonalities, such as the type, the code, and the checksum.
>
> **[1:19](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=79)** The contents will really depend on the type and whatever possible code that you might see.
>
> **[1:25](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=85)** IP is unreliable and doesn't guarantee delivery.
>
> **[1:29](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=89)** So it's important to notify the sender when something goes wrong.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=93)** ICMP is used to give feedback about network problems that are preventing packet delivery.
>
> **[1:39](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=99)** When an ICMP error message is sent, the message is always going to have the IP header, and then the first eight bytes of the original datagram that caused the error.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=111)** As we see here is an example, destination unreachable, the type, the code, checksum, and then the internet header and the first 64 bits of the original datagram.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=124)** I'm at this webpage IANA, and here you can see all of the different types of ICMP messages.
>
> **[2:12](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=132)** There are quite a few, but I want you to pay attention here.
>
> **[2:16](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=136)** As you can see, there are several that have been deprecated for one reason or another, and you should avoid using them.
>
> **[2:24](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=144)** The one that you will use and is important to use is the Type 3 destination unreachable.
>
> **[2:30](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=150)** Within that, you see the different code, such as the network is unreachable, the host is unreachable, or the protocol is unreachable.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=158)** So let's take a look at a couple of different examples.
>
> **[2:41](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=161)** I'm at PacketLife, and I'm going to take two of these packet captures, icmp.fragmented, and then here, this traceroute_MPLS.
>
> **[2:52](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=172)** The first one I've opened is icmp.fragmented, and in this case, what we can see is this is an echo reply.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=180)** So we see that it tests for reachability and is able to reach the host, and we're able to reply, yes, I did reach the host.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=189)** So we see the IP header, and then within the ICMP header, we see the type, the code, and the checksum, and then data, which is essentially nothing.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=199)** So nothing bad happened.
>
> **[3:20](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=200)** It's just a test for reachability.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=203)** Now, in this example, this is a traceroute.
>
> **[3:26](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=206)** We know with traceroute, it purposely times out, so it's going to report back that I was able to get to this hop and then report how long it took.
>
> **[3:36](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=216)** It comes up black because it thinks it's an error, but I'll take that coloring off.
>
> **[3:40](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=220)** But what might be fun is let's go to the statistics and do a flow graph just to show you how it made its journey.
>
> **[3:48](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=228)** And you can see all of those as it's going from one hop to another, and then reporting back.
>
> **[3:55](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=235)** Now because it's coming up as an error, we can see exactly what happens as we know that if there's an error message, the message is always going to contain the IP header and then the first eight bytes of the original datagram that caused the error to be generated.
>
> **[4:10](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=250)** So in this case, you see, there is your time to live exceeded, so there's your IP header, and then we'll blow out the ICMP header.
>
> **[4:18](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=258)** And as you see, the type, the code and the checksum, and then in that, you see the IP header and the first eight bytes of the original datagram.
>
> **[4:28](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=268)** So those are two examples of ICMP.
>
> **[4:31](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=271)** ICMP is a powerful protocol, but we have to understand that it's also used in malicious ways.
>
> **[4:38](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=278)** For example, ICMP is used in reconnaissance by Kali Linux.
>
> **[4:42](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=282)** It could be used to do reconnaissance, to do a ping sweep, or to evade firewall rules.
>
> **[4:48](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=288)** So the question is, what type of ICMP packets are are you going to allow?
>
> **[4:53](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=293)** The only really essential ICMP traffic is Type 3, that's your destination unreachable, and then the codes that fall within that.
>
> **[5:02](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=302)** The others are optional, the types 0, 8, and 11.
>
> **[5:06](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=306)** Those would be optional dependent on whether you would like to allow those on your network or not.
>
> **[5:12](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=312)** So Internet Control Message Protocol or ICMP is used by routers, intermediary devices, or hosts to communicate updates or error information.
>
> **[5:23](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=323)** ICMP is essentially a scout for the internet protocol, making sure the route is clear and communicating any errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Statistics]] (1), [[Kali Linux]] (1), traffic (1)
> **Env Vars:** icmp (20), osi (1), rfc (1), iana (1)
> **Definitions:** is an  (3), is a  (2)
> **Analogies:** such as (3), for example (1)
> **Cross-References:** coming up (1)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Discovering ICMPv6
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=0)** - [Instructor] IMP version six, like ICNP version four, resides at the network layer of the OSI model.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=9)** ICMP version six is a very important protocol.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=13)** It must be implemented by every IP module.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=17)** Now we've said this before, but now let's take a look, we'll go to the source.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=23)** I'm at RFC 4443.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=26)** And then right here, it states ICMP version six is an integral part of IP version six, and the base protocol must be fully implemented by every IP version six node.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=41)** Now just like ICMP version four, node data is exchanged.
>
> **[0:46](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=46)** It's used to communicate updates or error messages, and it's also used by the ping utility echo request/echo reply.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=56)** Now here we see the IP datagram where we see the IP version six header followed by the ICMP version six message.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=64)** Now that ICMP message is just like IP version four, where you see the type, the code, the checksum, and then the contents will depend on the type and the code.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=76)** But unlike ICMP version four, ICMP version six has a lot bigger role.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=84)** Keep in mind, IP version six does not have any AARP or IGMP.
>
> **[1:30](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=90)** As a result ICMP version six assumes those two roles.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=96)** The messages include error messages, informational messages, neighbor discovery messages, including the neighbor discovery protocol and group membership messages.
>
> **[1:49](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=109)** That includes multicast listener discovery messages.
>
> **[1:53](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=113)** We also of course, have error messages that include destination unreachable, packet too big, time exceeded and parameter problems.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=124)** The informational messages include, echo request and echo reply.
>
> **[2:10](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=130)** IMET packet captures on packet life, and you can follow along if you like.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=135)** We'll take two simple examples.
>
> **[2:18](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=138)** ICMP version six, echos and IP version six ndp.cap.
>
> **[2:25](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=145)** Now I've opened up the echos and that's just a test for reachability.
>
> **[2:30](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=150)** And as you can see, we have our ping request, ping reply, pretty simple.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=155)** And down below you can take a look, you have your IP header and then your ICMP version six header, and then the information within it.
>
> **[2:46](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=166)** Well, now sometimes you might want to just follow what is happening there with ICMP and if you right click and we say follow, well, we can't because there's no transport layer protocol.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=177)** This is an NSSL stream or an HTTP stream, but we can do this.
>
> **[3:03](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=183)** Let's go to statistics in flow graph.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=190)** You can open the flow graph and there you can see the test for reachability with the request and the replies.
>
> **[3:17](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=197)** And then you see the neighbor discovery protocol, and there's a lot of activity going on within this.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=203)** We see the multicast listener report, neighbor solicitation, and neighbor advertisement.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=210)** Again, I'll take a look in statistics in the flow graph.
>
> **[3:33](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=213)** And here you can see the flow as the traffic is going back and forth, communicating to other devices on the network.
>
> **[3:42](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=222)** And if we did take a look at the neighbor advertisement and we'll blow out here, ICMP version six, it has some options and it's telling a little bit about what's happening.
>
> **[3:52](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=232)** Here you see the link layer address.
>
> **[3:55](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=235)** Here we see a router advertisement, and there are some options there as well.
>
> **[4:00](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=240)** And we'll drop this down and scroll down.
>
> **[4:05](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=245)** And with this, you see the link layer or MAC address and MTU that's 1500 and then prefix information.
>
> **[4:17](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=257)** So ICMP version six, like ICMP version four, is a very important protocol.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=264)** But unlike ICMP version four, it assumes a couple of different roles.
>
> **[4:28](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=268)** And that is because IP version six doesn't use AARP or IGMP, and that is taken care of by ICMP version six.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** node (2), [[Statistics]] (2), data (1), traffic (1)
> **Env Vars:** icmp (16), aarp (2), igmp (2), imp (1), icnp (1)
> **UI Navigation:** go to (2), open the (1), scroll down (1)
> **Definitions:** is a  (2), is an  (2)
> **CLI Commands:** node (2)
> **Analogies:** just like (2)
> **Documentation:** rfc (1)
> **Warnings:** keep in mind (1)

#### Challenge: Evaluating a pcap
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980&t=6)** - [Instructor] Let's do a challenge.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980&t=8)** First, you'll need to go to PacketLife and download and open a packet capture in Wireshark.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980&t=17)** You'll select this one, ipv4-smtp.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980&t=21)** Select Download, and open it in Wireshark.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980&t=26)** Then go through and answer the questions.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980&t=29)** Then come back and see how I achieved the challenge.
>
> **[0:33](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980&t=33)** This challenge should take you about 10 minutes.
>
> **[0:36](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980&t=36)** Okay, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Evaluating a pcap
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=0)** (bouncy music)
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=6)** - [Narrator] Okay, how'd you do?
>
> **[0:08](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=8)** You'll want to have the instructions handy so that you can follow along.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=13)** Now I have the packet capture open and the first question is click on statistics and protocol hierarchy.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=21)** Now we go to statistics and there's a lot of things that we can choose from, but what we want is protocol hierarchy.
>
> **[0:28](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=28)** And we'll select that.
>
> **[0:30](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=30)** And this tells us about the protocols that are within this packet capture.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=34)** And it wants to know how many simple mail transfer protocol packets there are.
>
> **[0:39](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=39)** And here we can see there are five.
>
> **[0:42](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=42)** Now we'll close the window.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=45)** Now the next thing is we want to take a look at the conversations.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=48)** Click on statistics and then conversations.
>
> **[0:52](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=52)** But before I go there, I want to show you the next line is endpoints.
>
> **[0:57](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=57)** Conversations is communication between two endpoints.
>
> **[1:02](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=62)** So let's throw our focus on that.
>
> **[1:05](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=65)** Now once you open it, and as you can see that the tabs are set up so we can look at ethernet, IP version four, IP version six, TCP, or UDP.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=76)** So we wanted to take a look at the ethernet conversation and then down below it says, name resolution.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=84)** Check and uncheck the name resolution box and what are the results?
>
> **[1:28](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=88)** So we'll check it and then we'll uncheck it.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=93)** Now, when I check it, we see some writing.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=96)** Now that represents the first six bytes of the Mac address.
>
> **[1:41](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=101)** In the frame header, the addressing we use is the Mac address.
>
> **[1:46](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=106)** And the first six bytes represents the organizational unique identifier.
>
> **[1:52](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=112)** And as you see, we see Hewlett Packard and VMware.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=116)** Now using this name resolution won't hurt anything because it comes from a file.
>
> **[2:02](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=122)** Now we'll close that.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=124)** Now we want to find the first TCP handshake.
>
> **[2:07](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=127)** And what I want to do is we take a look at this.
>
> **[2:09](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=129)** And as we see in the right hand side, the intelligence scroll bar, but for this exercise, I want to take off the coloring roles and we'll just select right here.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=139)** All right. So now we see that frame one, two, and three, or packets one, two, and three are the three-way handshake.
>
> **[2:29](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=149)** Now the three-way handshake is what's going to establish that conversation.
>
> **[2:34](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=154)** So the question is, number four, what is the IP address of the host that started the handshake?
>
> **[2:41](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=161)** All right, so we'll go down below and you can see here, it's up above, under source, but I'll take a look at it down below.
>
> **[2:48](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=168)** And here we see the source is 192.168.20.70.
>
> **[2:55](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=175)** I'll pull this up.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=177)** And we'll place my cursor on that TCP header.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=180)** And I want you to take a look down below.
>
> **[3:03](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=183)** That shows us the size of the TCP header on frame one.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=188)** Now the destination port will indicate what application the host wants to use on the serving host.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=194)** So let's take a look here and we'll drop down the TCP header.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=199)** And here we see what is the client's port.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=203)** And this is that temporary port that just throws it out there and says, when you return the data, return it to port 54557.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=212)** So that's the client's port, 54557.
>
> **[3:37](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=217)** Now the question is, what application does the host want to use on the server?
>
> **[3:42](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=222)** While the destination port is 25, which is related to SMTP, which is an email server.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=231)** All right, we'll pull this back up.
>
> **[3:52](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=232)** And the next thing is, number seven, go to frame five and expand the IP header.
>
> **[3:58](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=238)** We'll go to frame five and then we'll expand the IP header.
>
> **[4:02](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=242)** And the question is, what is the time to live value?
>
> **[4:05](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=245)** And I'll place my cursor there.
>
> **[4:07](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=247)** Time to live for this frame is 64.
>
> **[4:13](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=253)** I'll pull that up.
>
> **[4:14](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=254)** Number eight says, in the lower left corner is the expert system.
>
> **[4:19](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=259)** What color is the circle?
>
> **[4:22](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=262)** And if you take a look down in the lower left-hand corner, we see it's blue.
>
> **[4:26](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=266)** And what does that color indicate?
>
> **[4:29](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=269)** Well, let's just open it up and we see that it indicates chat.
>
> **[4:34](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=274)** Now chat provides information about typical workflow, such as TCP window update or connection finish.
>
> **[4:42](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=282)** Nothing really bad, just information about what's happening.
>
> **[4:46](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=286)** All right, I'll close this.
>
> **[4:49](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=289)** Now, one other thing is, in order for the host not to be overwhelmed, we have the windowing feature.
>
> **[4:56](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=296)** So as you can take a look down below, and I'll going to expand that TCP header and make sure I'm on frame five.
>
> **[5:04](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=304)** And I want you to take a look at the window size value.
>
> **[5:07](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=307)** It's 229.
>
> **[5:09](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=309)** But there is scaling, as you can see.
>
> **[5:11](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=311)** The scaling factor.
>
> **[5:12](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=312)** So there is the calculated window size, and that means that's kind of the true value of the window size.
>
> **[5:19](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=319)** So the server can send up to that amount of data before it overwhelms the host.
>
> **[5:25](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=325)** Now I'll right click and we can say apply as a column.
>
> **[5:28](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=328)** And as you can see here, and I'll pull this down so you can see, now we have the calculated window size added to a column value.
>
> **[5:38](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=338)** Now I want to take it off by going right click.
>
> **[5:41](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=341)** And I'll just uncheck that and take off calculated window size and we've removed that column.
>
> **[5:48](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=348)** Okay, so that's the end of our challenge and I hope you had fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), next (3), application (2), data (2), feature (1)
> **Env Vars:** tcp (7), udp (1), smtp (1)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1), means that (1)
> **Ports:** port 54557 (1)
> **Versions:** 192.168.20 (1)
> **Analogies:** such as (1)


### 4. Deep Packet Analysis of Common Protocols

[↑ Back to Table of Contents](#table-of-contents)

#### Dissecting DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=0)** - [Instructor] Domain Name System or DNS resides at the Application Layer of the OSI Model.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=7)** DNS is an important protocol, as it maps a host name to an IP address.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=13)** It uses UDP port 53 for requests and uses TCP port 53 for zone transfer.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=22)** With DNS, a client will send a query to a DNS server for an IP address.
>
> **[0:27](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=27)** The server will respond with the information.
>
> **[0:30](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=30)** The server can ask other DNS servers for the information.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=35)** With DNS, there's a number of types of records.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=38)** Some commonly seen records are a type A record, that's for an IP version 4 address.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=45)** You might also see a mail exchange record.
>
> **[0:49](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=49)** This will redirect mail to a mail server.
>
> **[0:52](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=52)** And a quad A.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=54)** This shows the IP version 6 address.
>
> **[0:57](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=57)** Now, why is it called quad A?
>
> **[1:00](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=60)** Well, IP version 4 is a 32-bit address.
>
> **[1:05](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=65)** IP version 6 has 128 bits, it's four times as large as an IP version 4 address, and that's why it's called a quad A.
>
> **[1:15](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=75)** Within the DNS header, you'll see questions, answers, authority resource records, and any additional resource records.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=86)** Now, the question from the client is slightly different from the answer from the server, and we'll take a look at that in just a second.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=94)** I first want to direct you to this website and where you can find out a lot more information about DNS.
>
> **[1:41](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=101)** Now within this, you'll see that there are a ton of RFCs that deal with different issues on DNS, such as here, DNS Zone Transfer Protocol, DNS blacklists and whitelists, and DNS security, and a lot more.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=121)** So there's a lot more to DNS, but let's just take a look at a simple example.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=126)** I'm at this packet capture and there is a lot of packet.
>
> **[2:10](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=130)** I might just want to filter by DNS and I'll go to the display filter and type DNS.
>
> **[2:20](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=140)** Now down below, you'll see that there are 12 displayed, but let's take a look at just one single transaction.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=148)** I'll go here to the standard query and I'll pull this up.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=153)** And when we drop this down, you see the transaction ID.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=158)** Now it says down below, response in 80.
>
> **[2:40](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=160)** And it knows that because it matches that transaction ID.
>
> **[2:44](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=164)** I'll right-click and we'll say, apply as a filter, and it will run that.
>
> **[2:50](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=170)** Now we have them together.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=171)** Well, now, let's take a look at the query first from the client.
>
> **[2:56](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=176)** So using UDP, you see that it offers a high number port, and then it goes to the server on port 53 for a query.
>
> **[3:05](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=185)** Now, we'll drop this down and here we see the query.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=188)** And first we see the transaction ID.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=191)** And then we drop this down and these are the flags that are set.
>
> **[3:15](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=195)** Now, first we see that the first one is a zero, that means that message is a query.
>
> **[3:21](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=201)** Now, this flag means recursion desired, do query recursively.
>
> **[3:26](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=206)** Now, there are two types of queries, an iterative or recursive.
>
> **[3:31](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=211)** An iterative query would be a server is unable to provide an answer, so the client has to go back out and retrieve the answer.
>
> **[3:39](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=219)** What I would like you to do is recursive query, and that means the server will look on behalf of the client.
>
> **[3:46](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=226)** As you can see, recursion is desired.
>
> **[3:50](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=230)** Then down below you see I'm asking one question and please give me the IP address for this site.
>
> **[3:59](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=239)** Now let's take a look at the response.
>
> **[4:03](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=243)** Again, using UDP source port 53, and then return to a high number destination port.
>
> **[4:11](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=251)** And then we'll take a look at DNS, the response.
>
> **[4:14](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=254)** So again, we see the transaction ID, so we kept those together.
>
> **[4:18](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=258)** And then you look at your flags and there you see your response.
>
> **[4:21](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=261)** The message is a response and we know that.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=264)** But then down below, the server answers.
>
> **[4:27](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=267)** So as it says here, recursion desired, do query recursively.
>
> **[4:32](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=272)** And the server response, yeah, recursion is available.
>
> **[4:36](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=276)** The server can do that recursive query, and that's a good thing.
>
> **[4:43](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=283)** Now, as you can see, there is one question and two answers, and let's take a look at those.
>
> **[4:49](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=289)** Here's the question to find that IP address to that website.
>
> **[4:54](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=294)** And then let's go and look at the answers and I'll pull this down, and as you can see here, the information on both of those answers.
>
> **[5:02](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=302)** You see that there are two answers.
>
> **[5:04](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=304)** Within that, you can see the time to live value is 1489.
>
> **[5:09](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=309)** Now, what does that mean in a DNS header?
>
> **[5:12](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=312)** Well, when we have a record that's returned and you have an IP address and you have your answer down below here, what it's saying is that that record that's going to be held in the cache on any server or even at the host, is how many seconds it can live in the cache before it goes away.
>
> **[5:30](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=330)** So the time to live value means after 1,489 seconds it goes away and you'll have to re request that information and it will most likely be sent back to you.
>
> **[5:42](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=342)** So there you see a standard query and a standard response.
>
> **[5:46](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=346)** And as we understand, DNS is a very important protocol that provides a host to IP address translation so that data can transact on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** dns (18), [[Domain Name System (DNS)|Domain name system]] (1), application (1), [[Security]] (1), data (1)
> **Env Vars:** dns (18), udp (3), osi (1), tcp (1)
> **Definitions:** is a  (6), is an  (1), means that (1)
> **Versions:** version 4 (3), version 6 (2)
> **Ports:** port 53 (4)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), right-click (1)
> **Analogies:** such as (1)

#### Exploring DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=0)** - [Narrator] Dynamic host configuration protocol works at the application layer of the OSI model.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=7)** DHCP dynamically assigns IP addresses on a local area network.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=13)** DHCP uses UDP for transport, and the client will use port 68, and the server will use port 67.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=22)** DHCP uses what we call the DORA process, discover, offer, request, and acknowledge.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=32)** Let's take a look at the DORA process in Wireshark.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=38)** I captured this traffic after first going into my command line and I issued an IP config release, and then I went back in and issued IP config renew.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=50)** So I got rid of my IP address, and then I got a new one.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=54)** So when we go up here to the display filter, we're looking for DHCP.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=59)** But the actual filter is bootp.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=66)** Okay, so now let's take a look at the first one.
>
> **[1:10](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=70)** As you can see that's DHCP release.
>
> **[1:13](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=73)** And that means I'm giving up my IP address.
>
> **[1:18](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=78)** And you're seeing that what we gave up was the .129, and now my client address is 0.0.0.0.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=86)** All right, I've gotten rid of it.
>
> **[1:27](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=87)** But then the next step is to go through the DORA process.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=91)** Now, take a look at that transaction ID.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=94)** Now, we know that I don't have an IP address.
>
> **[1:37](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=97)** So the server keeps track of who I am by that transaction ID and my MAC address.
>
> **[1:43](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=103)** So the first step is to go through the DORA process by saying a discover packet will be sent out as a broadcast.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=111)** Now, this packet is essentially saying, I need an IP address.
>
> **[1:55](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=115)** Anybody? Does anybody have an IP address?
>
> **[1:59](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=119)** Now, this goes out as a broadcast in hopes that a server will hear and respond.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=125)** So as you can see that the message type is the boot request.
>
> **[2:12](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=132)** I'll pull this up and I will tell you that there are a lot of different options with DHCP.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=139)** But the one I want to show you with that discover packet is requested IP address.
>
> **[2:25](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=145)** What I'm essentially saying in that original discover packet is I like the same IP address is what I had before, that .129.
>
> **[2:37](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=157)** Now we see the offer.
>
> **[2:39](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=159)** The DHCP offer comes from a server.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=162)** Now, understand, on an enterprise network, you most likely will see two offers responding.
>
> **[2:48](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=168)** So, it'll come from two different servers.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=171)** Now the offer is saying, I have an IP address and you probably will like it.
>
> **[2:55](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=175)** Why don't you try it, .129?
>
> **[2:58](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=178)** It knows I want the same one.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=180)** And it says, you know, no one's using it.
>
> **[3:01](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=181)** Go ahead. Why don't you try it?
>
> **[3:04](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=184)** The next step is for the client then to go back out and say, you know, yeah, I think I do want that one.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=190)** And let's go to it. So I'm going to request it.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=194)** And again, I want the requested IP address, and I would like that IP address.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=199)** Could I have it? Well, sure.
>
> **[3:22](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=202)** So the server responds with the final step in the DORA process by sending an acknowledgement.
>
> **[3:28](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=208)** And now I'm sending my reply.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=210)** And again, the same transaction ID.
>
> **[3:34](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=214)** And here we say, your client IP address is .129.
>
> **[3:39](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=219)** Now, if we go down, it of course gives the MAC address and then the options.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=225)** But what happens is, remember, when I get a dynamically assigned IP address, and it's not static, I'm only borrowing it.
>
> **[3:53](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=233)** So down below in these options, this gives what we know as the lease time.
>
> **[3:57](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=237)** And in this case, you see it's seven days.
>
> **[4:00](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=240)** And that's pretty standard. It's either seven or eight days.
>
> **[4:05](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=245)** Now, what happens is after 50% of the time, or three days and 12 hours, I have to go and issue a renewal.
>
> **[4:13](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=253)** And then you see after 87.5% of the time I go into rebinding.
>
> **[4:19](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=259)** And I then make sure that I'm able to keep that IP address.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=264)** So dynamic host configuration protocol is dynamically assigning IP addresses to hosts on a local area network.
>
> **[4:32](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=272)** DHCP uses the DORA process, discover, offer, request, and acknowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (2), next (2), application (1), [[Wireshark]] (1), traffic (1)
> **Env Vars:** dhcp (8), dora (6), mac (2), osi (1), udp (1)
> **Ports:** port 68 (1), port 67 (1)
> **Versions:** 0.0.0 (1), 87.5 (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Following an FTP transaction
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=0)** - [Instructor] File transfer protocol resides at the application layer of the OSI model.
>
> **[0:05](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=5)** FTP transfers files using TCP ports 20 and 21.
>
> **[0:11](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=11)** Port 21 is the command channel on the FTP server and port 20 is the secondary port used to transfer data.
>
> **[0:20](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=20)** Once you get into the server, you're going to see a series of reply codes and this will tell us the state of the data transfer.
>
> **[0:28](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=28)** Classic FTP uses what's called an active request, meaning the client initiates that data transfer and the FTP server maintains state information such as current directory and any user authentication.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=43)** However, most likely you're going to see a passive request.
>
> **[0:47](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=47)** And this is preferred for clients that are behind a firewall as it's more secure, because the client, not the server, initiates the transfer.
>
> **[0:57](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=57)** Basically the client says to the server, you sit back, I'll do the driving.
>
> **[1:02](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=62)** It first asks the server to accept a data connection over a new TCP port and the server normally accepts with a code 227, and then the server will provide a port in which to make the connection.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=76)** I have this packet capture here, which is FTP example, and this is a standard FTP exchange of data.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=86)** Now, first of all, I will tell you that it's in plain text and there are very, very few open FTP servers out there.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=94)** In most cases, it's using some type of secure connection or encryption, but we'll be able to see everything 'cause it is in plain text.
>
> **[1:43](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=103)** So the first thing you see is the initiation of the contact from the client to the server and there you see a three-way handshake.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=111)** Now I'll go into packet five and I'll right click, and I'll say, follow the TCP stream.
>
> **[1:58](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=118)** And we'll open this up.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=120)** And this is very classic.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=121)** What you see is something on there is a banner which you would read and it would give some warnings about what the site's about and what you should or shouldn't do.
>
> **[2:11](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=131)** It will provide an anonymous login and it says, send your complete email address as your password.
>
> **[2:17](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=137)** Then once you get in, the anonymous access is granted, however restrictions will apply.
>
> **[2:24](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=144)** Now, down below here, we can see that that is asking for a passive.
>
> **[2:29](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=149)** So the client says, could we go into passive mode?
>
> **[2:32](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=152)** Then you see the response from the server 227 saying, yes, we'll do that.
>
> **[2:37](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=157)** We'll enter passive mode.
>
> **[2:39](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=159)** And then it replies with a set of numbers.
>
> **[2:43](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=163)** We'll go into that in just a second.
>
> **[2:46](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=166)** Then you'll see the complete exchange and then at the end where it says the transfer's complete and that kind of ends it.
>
> **[2:53](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=173)** But let's go into that passive.
>
> **[2:58](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=178)** So I'm on frame 50, and we'll open this up.
>
> **[3:02](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=182)** I'm going to go down to the passive mode.
>
> **[3:05](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=185)** So the request command passive.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=187)** So that saying from the client to the server, can we go into passive mode?
>
> **[3:13](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=193)** The next packet is 51 where it accepts that passive request.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=199)** And we'll go into the FTP header where it says entering passive mode.
>
> **[3:25](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=205)** And when you see that series of numbers, you may be wondering what that is.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=210)** Well what it is is the IP address and then the port number.
>
> **[3:35](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=215)** All right, so how does that work?
>
> **[3:37](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=217)** Well, each of those represents one of the octet in an IP version four address.
>
> **[3:43](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=223)** So down below here, you can see 170.225.15.40, but what about these other two numbers?
>
> **[3:51](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=231)** And it's coming up with a really large number.
>
> **[3:54](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=234)** Well, it is a formula and it has to do with those two numbers.
>
> **[3:58](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=238)** So the formula is that first number multiplied by 256 plus the second number.
>
> **[4:05](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=245)** So let's do that.
>
> **[4:08](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=248)** 232 times 256 equals, plus 57, and that gives us 59,449, which is, as you see, the passive port.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=264)** And then the data transfer continues and then it eventually gets what it needs and then you would most likely close out the connection.
>
> **[4:33](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=273)** FTP is a way to transfer files to an FTP server and update the information.
>
> **[4:39](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=279)** Although active was the original way to use FTP, more likely you'll use a passive connection where the client will initiate the data transfer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), application (1), next (1)
> **Env Vars:** ftp (11), tcp (3), osi (1)
> **Definitions:** is a  (4)
> **Ports:** port 21 (1), port 20 (1)
> **CLI Commands:** make (1)
> **Versions:** 170.225.15 (1)
> **Cross-References:** coming up (1)
> **Analogies:** such as (1)

#### Using HTTP
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=0)** - [Instructor] Hypertext Transfer Protocol is an application layer protocol for browsing the web.
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=6)** HTTP has been in use on the web since the early 1990s.
>
> **[0:12](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=12)** It's a client server model that uses TCP port 80 by default, but can use other ports as well.
>
> **[0:20](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=20)** With a typical transaction, the client will send an HTTP request and indicate what the client wants.
>
> **[0:28](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=28)** The server then will respond with a status code and server information, and then any requested data.
>
> **[0:36](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=36)** Now there are several status codes within HTTP, but most of the time, we're going to get a 200 or success, meaning everything's okay and the data will follow.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=48)** Most application layer protocols have a typical format where you have the frame header, the network layer header, and the transport layer header followed by the data.
>
> **[1:00](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=60)** Now the frame header, the network layer and the transport layer header remained pretty much the same.
>
> **[1:07](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=67)** The data in the application layer header changes according to what's happening in the conversation, and whether it's from the client or from the server.
>
> **[1:17](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=77)** So with HTTP, you could possibly get the HTTP header information that includes the general header, request and response header or the entity header, and then within that, you'd have the HTTP body which holds the HTML code or the webpage so that it can rebuild that in your browser.
>
> **[1:39](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=99)** I've opened up this packet capture and we can take a look at some HTTP traffic.
>
> **[1:45](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=105)** There's a lot of packets here, and one thing we can do is take a look at the conversations by going to statistics, and then conversations.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=116)** Now once you open this, there's a lot of column headers.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=120)** And what you could do, and in this case, we're going to sort by bytes so that we get the top talker.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=126)** Now as you can see now, that highlighted area, we can do something with that, for example, I can apply a filter.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=135)** I can do this, I can either select the entire conversation from A to B, that would be from the client to the server, from just the client to the server, or from just the server to the client.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=148)** I'll select all of that and then that will run that filter, and then we'll close that.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=153)** Before beginning anything, we start with a three-way handshake.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=158)** Now as you can see, there's no data exchanged, it's just a handshake.
>
> **[2:43](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=163)** And then once that handshaker connection is complete, then it goes into our first HTTP request from the client.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=171)** And we'll pull this up, and as you can see, the client is saying, "I would like that picture of the blue goat."
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=177)** The host is [goatrodeocheese.com](https://goatrodeocheese.com).
>
> **[3:01](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=181)** And then a little bit of information about that client, for example, what's the operating system and what their browser is, and also other information, including language, and then in this case, we want it to be in English.
>
> **[3:15](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=195)** Then down below, we now see the response from the server, and it's saying it's a 200 status code, which means it's okay.
>
> **[3:25](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=205)** Everything is good and now I can start to give you what you need.
>
> **[3:29](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=209)** It's using HTTP version 1.1 which is the most commonly used version, and the server is openresty, which is the third largest web server in use today behind a patchy and NGN IX.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=225)** It says, well, what the content is, and it's an image or JPEG.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=231)** Another information about the server.
>
> **[3:54](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=234)** Now, what I can do is right click, and I can say, follow the TCP stream.
>
> **[4:00](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=240)** Now, in this case, this shows all of the connections that are happening within that single stream, and there's more than one.
>
> **[4:07](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=247)** And in fact, when you're retrieving data and objects off of a web page, you'll have more than one stream most of the time because you want to be able to retrieve those objects quickly and rebuild the web page in your browser quickly.
>
> **[4:22](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=262)** Now as you can see, the red is from the client and the blue is from the server.
>
> **[4:26](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=266)** And I'm going to scroll down and you'll see that there's a number of requests and responses, here's another one, get, and then the HTTP status report and the HTTP status code, and then the response.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=281)** And there are a few of those within this single stream.
>
> **[4:45](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=285)** All right, now close that, and then just one more thing we'll take a look at.
>
> **[4:50](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=290)** When you're getting this data from the web server, which is very common, you see a number of areas that are black.
>
> **[4:57](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=297)** And if this is going to happen consistently, you might want to look into it.
>
> **[5:02](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=302)** One thing we can do is go to statistics and then run a stream graph, all use the TCP stream graph time sequence or Stevens graph, and we'll open this up.
>
> **[5:15](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=315)** Now as we see, that's the server to the client and we can switch directions just so you can see, but we want it to be from the server to the client.
>
> **[5:24](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=324)** All right, so when we follow this, this is showing this line's going up, it's all good, we're getting the data, and then, we're not.
>
> **[5:34](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=334)** So, this is showing nothing's happening here.
>
> **[5:37](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=337)** As you see, that's a ten second delay.
>
> **[5:40](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=340)** And I'll move this down, and as you can see, it's a keep alive.
>
> **[5:43](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=343)** Nothing's happening, it's just still waiting.
>
> **[5:47](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=347)** And we go here, and there's a seven second delay.
>
> **[5:52](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=352)** Then we have the data is coming in, it's good, oh, a little hiccup here and up, and now, we have a nine second delay, then a 10 second delay, 10 second delay, and more ten second delays.
>
> **[6:10](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=370)** Well, really nothing's happening.
>
> **[6:13](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=373)** So I'll close this and you can take a look at this and see that it's pretty much stalled.
>
> **[6:18](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=378)** But at some point at the end of the conversation here, you see that the client and the server both agree they both have what they need, and then you see the exchange of the FIN and the ACK packets from the client to the server and the server to the client, and that effectively closes the conversation.
>
> **[6:37](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=397)** So HTTP is an application layer protocol for browsing the web that's been in use since the early 1990s.
>
> **[6:45](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=405)** It uses a client server model using TCP port 80, but can use other ports as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), web (7), application (4), [[Statistics]] (2), [[HTML]] (1)
> **Env Vars:** http (12), tcp (4), html (1), ngn (1), jpeg (1)
> **UI Navigation:** select the (1), scroll down (1), go to (1)
> **Analogies:** for example (2), picture (1)
> **Ports:** port 80 (2)
> **Definitions:** is an  (2)
> **URLs:** [goatrodeocheese.com](https://goatrodeocheese.com) (1)
> **Versions:** version 1 (1)

#### Understand ARP
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=0)** - [Instructor] On a local area network, the data link layer uses the MAC address of the destination machine rather than the IP address.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=10)** Address Resolution Protocol resolves an IP address to a MAC address on a local area network.
>
> **[0:18](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=18)** Let's take a look at where ARP resides in the OSI model.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=23)** It resides in between layer three and layer two.
>
> **[0:28](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=28)** And that's because when we take a look at it, it doesn't have a network layer header, it doesn't have a transport layer header, it's simply doing a resolution.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=38)** In addition to the ARP request, ARP replies, you might also see a gratuitous ARP, which is a test for duplicate IP addresses on a local area network.
>
> **[0:51](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=51)** If you'd like to follow along, go to [packetlife.net](https://packetlife.net) and I selected ARP and this last one here ICMP across dot1Q.cap.
>
> **[1:02](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=62)** I've opened it up in Wireshark and there really aren't a lot of packets in this capture, but we'll just take a look at ARP.
>
> **[1:11](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=71)** We'll put a display filter in and you see there are a couple of types.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=76)** One is the gratuitous ARP.
>
> **[1:18](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=78)** And as we talked about that is simply a test for duplicate IP addresses on a local area network.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=86)** But then down below here, we see the ARP request and ARP reply.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=92)** Now, let's take a look at the request and then we'll drop this down.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=96)** And the hardware type is the type of data link type in use.
>
> **[1:41](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=101)** And here we can see it's ethernet and we see the protocol type IP and the hardware size which is six bytes and that is the length of the hardware address and the protocol size is the length of the protocol address.
>
> **[1:58](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=118)** Here, we see the opcode and it is a request.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=121)** Now it's from the sender here which you can see, this is the sender's MAC address, and this is the sender's IP address.
>
> **[2:09](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=129)** The target MAC address is a broadcast and remember it doesn't know the MAC address, so it goes out to everyone on the network, everyone on the network hears it, but only one should respond.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=142)** And then down below here, you see this is the IP address.
>
> **[2:26](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=146)** So looking up here in packet three it says, who has this IP address?
>
> **[2:32](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=152)** Could you tell me who has this IP address?
>
> **[2:35](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=155)** Then we see a reply and it has the same fields except it does provide the answer.
>
> **[2:41](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=161)** Now we see the opcode is a reply and the sender MAC address is words coming from, and there's the IP address and then it's responding to the one that sent the ARP request.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=177)** So, Address Resolution Protocol sits in between the network layer and the data link layer to resolve an IP address to a MAC address on a local area network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (5), data (3), [[Hardware]] (3), [[Wireshark]] (1)
> **Env Vars:** arp (10), mac (7), osi (1), icmp (1)
> **Definitions:** is a  (4)
> **Code Identifiers:** dot1q (1)
> **URLs:** [packetlife.net](https://packetlife.net) (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Examining a packet capture
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980&t=0)** (buoyant music)
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980&t=6)** - [Presenter] Let's do a challenge.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980&t=8)** First, you'll need to obtain the, "Wireshark Essential Training Challenges and Links Document," and scroll down where you will see detailed instructions, which will look like this.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980&t=22)** Now, in this challenge, you'll need to obtain two packet captures, and I provided you with the links.
>
> **[0:30](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980&t=30)** Now complete the challenge and then once you're done, check back to see the solution.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980&t=37)** This challenge should take you about 10 minutes.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980&t=40)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Prerequisites:** you'll need (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (buoyant music) (1)

#### Solution: Examining a packet capture
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=0)** - [Instructor] Okay, let's go through this challenge together.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=10)** You might want to have the document handy so that you can follow along.
>
> **[0:15](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=15)** First, you are to go to [cloudshark.org](https://cloudshark.org) and examine this packet capture.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=21)** Now once in, you were to go to analysis tools and select GeoIP World Map.
>
> **[0:27](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=27)** And the question is, what are the endpoints?
>
> **[0:31](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=31)** Well, the endpoints are either side of the conversation.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=35)** So let's take a look.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=37)** We'll go to analysis tools and GeoIP World Map and we'll let it run.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=44)** Now, the GeoIP World Map is a handy little feature that's built right into Cloud Shark.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=50)** Now here we can see the endpoints.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=53)** One is in France and one is in America.
>
> **[0:57](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=57)** And we'll close that.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=59)** Next, you are to open the file in Wireshark.
>
> **[1:03](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=63)** Well, you'll need to download it.
>
> **[1:05](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=65)** So go to export, download file, and I always select, download the original file.
>
> **[1:12](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=72)** Now you've opened it in Wireshark.
>
> **[1:15](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=75)** So let's go to the next step.
>
> **[1:18](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=78)** In DNS a time to live value specifies how long a resolver is supposed to cache the DNS query before the query expires.
>
> **[1:29](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=89)** So the question is, in frame two, what is the IP address of ocsp.[verisign.net](https://verisign.net), and what is the time to live for each DNS response?
>
> **[1:43](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=103)** Alright, so first we want to just make sure we understand what that time to live value is.
>
> **[1:50](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=110)** Now you're all familiar with the IP header and the time to live value here, but it's not the same.
>
> **[1:57](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=117)** So we want to make sure that we're on frame two and then we're going to expand the DNS header.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=125)** And I'm just going to drop this down here, pull this up.
>
> **[2:10](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=130)** And what we want to do is take a look at the answers.
>
> **[2:13](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=133)** We have both of those answers here.
>
> **[2:16](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=136)** All right, so first we see the time to live is 381 for the first answer.
>
> **[2:21](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=141)** And the second one, the time to live is one.
>
> **[2:25](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=145)** So when we take a look at that 381, that means that after 381 seconds, the entry will go away and you'll have to issue a query again.
>
> **[2:39](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=159)** All right, we'll pull that up.
>
> **[2:40](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=160)** Now the next question is in frame two, what is the source port?
>
> **[2:47](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=167)** All right, we're going to drop this down, and here we can take a look at the user datagram protocol.
>
> **[2:54](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=174)** And the source port is 53, which is associated with DNS.
>
> **[3:01](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=181)** Now the next question is a user agent and an HTTP header indicates the browser.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=189)** So go to frame seven, right click and follow the stream.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=194)** All right, we'll go to frame seven, right click and follow the stream.
>
> **[3:22](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=202)** All right, so here we can see the user agent, which is Mozilla.
>
> **[3:28](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=208)** Now there are resources online so you can further define exactly what version that is on Mozilla.
>
> **[3:36](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=216)** All right, we'll close that.
>
> **[3:39](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=219)** Next, using the link in the document, you are to obtain a file and open it in Wireshark.
>
> **[3:46](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=226)** Now this capture is the DHCP DORA process where we can see the four-step process, discover, offer, request, and acknowledge.
>
> **[3:58](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=238)** And we'll just pull this up so we can examine just all of these in general.
>
> **[4:05](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=245)** And the question is, are DHCP messages sent via UDP or TCP?
>
> **[4:12](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=252)** Well, DHCP messages are sent via UDP, which is a lightweight connectionless protocol, because you need the IP address quickly.
>
> **[4:23](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=263)** The next one is expand the DHCP header in frame one.
>
> **[4:28](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=268)** So I'll go to frame one and I'll expand the DHCP header.
>
> **[4:34](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=274)** The question is, what is the client IP address?
>
> **[4:38](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=278)** And we'll scroll down here and it says the client IP address is 0.0.0.0.
>
> **[4:48](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=288)** And that's because the client doesn't have an IP address.
>
> **[4:53](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=293)** The next question is look at the parameter request list and it'll scroll down here and expand the parameter request list.
>
> **[5:02](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=302)** And the requests are what the client is asking.
>
> **[5:06](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=306)** And those include the subnet mask, router, domain name server, and network time protocol servers.
>
> **[5:15](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=315)** Alright, we'll pull that up.
>
> **[5:17](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=317)** And the last question is, what is the value of the transaction ID in all four packets?
>
> **[5:25](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=325)** Well, it's right here.
>
> **[5:26](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=326)** So we can see that the first two end in 1D and 1D, and the last two end with 1E and 1E.
>
> **[5:36](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=336)** Now the last step has us going back to Cloud Shark to examine a packet capture.
>
> **[5:43](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=343)** Now once here, we are to go to analysis tools and follow the stream.
>
> **[5:48](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=348)** So we'll drop this down and follow the stream.
>
> **[5:52](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=352)** And I'll scroll up here and we can examine the entire contents of the stream.
>
> **[5:59](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=359)** So the question is, did the FTP server require a password?
>
> **[6:05](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=365)** Well, here we can see in plain text anonymous login okay.
>
> **[6:10](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=370)** Send your complete email address as your password.
>
> **[6:15](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=375)** So no password needed, just a complete email address.
>
> **[6:20](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=380)** All right, so that's your challenge.
>
> **[6:23](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=383)** I hope you had fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (7), dns (5), [[Wireshark]] (3), cloud (2), feature (1)
> **Env Vars:** dns (5), dhcp (5), udp (2), http (1), dora (1)
> **UI Navigation:** go to (9), scroll down (2), open the (1), scroll up (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** make (2)
> **URLs:** [cloudshark.org](https://cloudshark.org) (1), [verisign.net](https://verisign.net) (1)
> **Versions:** 0.0.0 (1)
> **Exercise Files:** download the (1)


### 5. Working with Packet Captures

[↑ Back to Table of Contents](#table-of-contents)

#### The Wireshark expert system
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=0)** - [Instructor] Built within Wireshark is the expert system.
>
> **[0:03](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=3)** The expert system helps to alert the network administrator on possible issues once a capture's been made.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=10)** Keep in mind, it's only a guide.
>
> **[0:12](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=12)** Sometimes it really isn't a problem, such as a checksum incorrectly calculated.
>
> **[0:18](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=18)** When we go into the Expert Info Console, you'll see four categories.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=23)** I say expert info because that's how you might see it referenced if you go into the Wireshark wiki.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=29)** Now they're in order of severity.
>
> **[0:31](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=31)** The first one is errors.
>
> **[0:33](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=33)** You'll see a red circle that indicates serious problems.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=37)** Yellow indicates warning.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=40)** That means there's possible problems, you'll probably want to look into them.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=44)** Cyan are notes of interest, and the blue are chats, which is typical workflow and state change.
>
> **[0:52](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=52)** I've opened up this packet capture because it's a pretty good example, as it lists all four categories.
>
> **[0:58](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=58)** Now if we take a look in the lower left-hand corner, the red circle indicates the highest level of threat, that there's possible serious problems.
>
> **[1:08](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=68)** So let's' go in and select that.
>
> **[1:11](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=71)** Now when we go in and you can see the severity, and it is grouped by summary, and then you can uncheck that and it would group it in a different way.
>
> **[1:19](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=79)** But I like to keep it grouped together.
>
> **[1:21](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=81)** If you remember in legacy, it had tabs.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=84)** This way it's just on one page, and you can see all of what's going on.
>
> **[1:28](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=88)** Now the first thing that shows up is an error, bad checksum.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=93)** And I'll blow this out.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=95)** Now as it says, the ethernet frame checksum is incorrect.
>
> **[1:39](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=99)** Well that might not be a problem.
>
> **[1:40](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=100)** Let's exit out of here, and then we'll go back over to the ethernet frame, any one, and right click.
>
> **[1:47](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=107)** Go to protocol preferences, and here I say, validate the ethernet checksum if possible, I'll uncheck that.
>
> **[1:55](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=115)** And now you see it won't be an error.
>
> **[1:57](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=117)** And again, that's a common thing, it's not always an error, it's just incorrectly calculated.
>
> **[2:02](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=122)** Now let's go into the expert infos again.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=126)** Alright, now when we take a look at any of those categories, you can blow it out and see those packets that it affected.
>
> **[2:14](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=134)** Now here you see the cipher link must not exceed this certain length, and then there's malformed packets, and there's 160 of those.
>
> **[2:23](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=143)** So those are ones you probably really wanna look as to what is happening.
>
> **[2:29](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=149)** Now then, the next category you see, there's some warnings.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=153)** This one DNS query retransmission, connection reset, and in this there's 25 connection resets.
>
> **[2:41](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=161)** You'd wanna know why were so many out there resetting.
>
> **[2:45](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=165)** This frame is a suspected out-of-order segment.
>
> **[2:49](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=169)** Then down below, you see notes.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=171)** Now again, this is things that aren't always critical, but again, you might wanna look into those.
>
> **[2:58](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=178)** There's keep alive segment, duplicate acknowledgement, and there's a lot of those.
>
> **[3:05](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=185)** And that occurs, remember the acknowledgement is expectational, meaning it's saying, "I've got this much data, and I'm ready for more.
>
> **[3:12](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=192)** "Please send it."
>
> **[3:14](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=194)** Now with the duplicate acknowledgement, it keeps duplicating and sending it until it times out.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=199)** Just simply waiting for the data.
>
> **[3:22](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=202)** The last category's in blue, and those are chats.
>
> **[3:25](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=205)** Remember, those are just some things that occur that aren't critical, certain things such as workflow, updates, or possibly state changes.
>
> **[3:35](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=215)** Here you can see the state change connection finished, and we can see the passing of the FIN and the ACK flags throughout that.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=225)** And there's quite a few of those.
>
> **[3:47](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=227)** And here we see connection established using the SYN and ACK, and there's a number of those as well.
>
> **[3:54](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=234)** So the expert system provides insight on possible issues in the packet capture.
>
> **[3:59](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=239)** Wireshark groups are reporting by level of severity, and that includes errors, warnings, notes, and chats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), data (2), next (1), dns (1)
> **Env Vars:** ack (2), dns (1), fin (1), syn (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (2)
> **Warnings:** keep in mind (1), warning (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Network latency issues
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=0)** - [Instructor] Wireshark has many built-in tools to help the network administrator identify and troubleshoot network latency issues.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=9)** Tools that include the Expert system, Coloring rules, the Intelligent Scrollbar and the time values that are built into Wireshark to identify gaps in transmission.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=22)** Within the Expert Information there are several things that are cause for concern.
>
> **[0:27](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=27)** That includes Zero window.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=29)** That means that the client is unable to receive any more data because the buffer is full.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=35)** Now on the client side that might not be a big problem, but if it's a server this could cause major bottlenecks.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=43)** Keep-alives that are saying keep this session alive and Duplicate Acknowledgements where the client is re-requesting the data over and over again until it receives it.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=54)** Retransmissions or fast retransmissions, or what we call spurious retransmissions.
>
> **[1:02](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=62)** A spurious retransmission is data that is sent again, even though it's already been acknowledged and that is because the server somehow didn't get that acknowledgement and it sends the data again.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=76)** High latency can be caused by any number of things, such as processing delays, distance itself, and something called bufferbloat.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=86)** This is a queuing delay in that the router's buffers get full and the packets are simply dropped and there's gaps in the delivery of the data.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=96)** I've opened up this packet capture and there are a lot of things going on with this packet capture and I'll take a look.
>
> **[1:43](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=103)** If I go over to the Expert Information, and here you can see a number of things in the Summary and the Severity that I might want to take a closer look at.
>
> **[1:55](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=115)** Over in the right hand side, we can just quickly look down here and see a lot of black areas that we indicate that there are some problems.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=125)** For example, let's take a look here where it says Duplicate Acknowledgement, number 17, number 18, number 19.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=135)** What that is doing is saying that I received this much data and I'm ready for more, please send it.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=142)** And it sends another one and another one.
>
> **[2:24](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=144)** It's very patiently trying to get its data.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=148)** What I'll do is follow the stream and what I want to go to, is there's two streams.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=155)** We'll do 61 and let's take a look at that.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=158)** And one of the graphs that is easy to identify gaps in transmission is the Stevens graph.
>
> **[2:45](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=165)** Go to Stastistics, then we'll go to TCP Stream Graphs and the Stevens graph.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=171)** Now this one is going back to the server and that's just your acknowledgement, so we'll switch directions.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=180)** And here's where you can see these gaps in transmission.
>
> **[3:04](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=184)** So we're getting the data, and then as you see, we've stopped.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=190)** And now we're getting a little bit more, and now we're stopped.
>
> **[3:17](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=197)** Okay, so you're seeing some gaps and delays in transmission, and again, that's gonna be adding to your latency issues.
>
> **[3:28](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=208)** What we'll do is one more, we'll go to Stream 45.
>
> **[3:34](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=214)** And we'll switch directions and... this one's another one that shows you, now we're getting the data and then it just stops and then we're getting a little bit more then there's some stops and then we're getting some.
>
> **[3:53](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=233)** It should be a nice, slow incremental graph but it's really rare today to get that because there's so much congestion on the network.
>
> **[4:02](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=242)** In addition to the Stevens graph, we can also use the time values to identify gaps in transmission.
>
> **[4:09](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=249)** I'll have to find that Conversation.
>
> **[4:11](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=251)** We'll first go to Statistics and then Conversations and then I'll have to filter down to that Conversation.
>
> **[4:19](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=259)** As you see here, 208 is the IP address.
>
> **[4:22](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=262)** When I right click, I Apply as a Filter but I want it to go from the server to the client and that would be B to A.
>
> **[4:30](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=270)** Then I'll close that.
>
> **[4:32](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=272)** And now what you wanna look at are the large gaps in between transmission, and when we first go in here we're gonna go to View, Time Display Format, and you wanna make sure that it's set correctly.
>
> **[4:44](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=284)** In this case, it says Seconds Since Previously Displayed Packet and that's what I want because now you can see that streaming in from the one source to the destination.
>
> **[4:56](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=296)** And here you can see that first gap right here in between this packet and this one is three seconds, and we did see that one.
>
> **[5:05](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=305)** And then we'll go down below and this is the Stream 45 and there's another one.
>
> **[5:11](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=311)** That's a one second.
>
> **[5:15](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=315)** And here's one that's two seconds.
>
> **[5:17](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=317)** So in addition to the Stevens graph, we can use the time values to identify gaps in transmission.
>
> **[5:23](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=323)** So, Wireshark can help the network administrator identify and troubleshoot network latency issues but the next step is to be proactive and identify where the bottleneck is occurring so that you can keep the data flowing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[Wireshark]] (3), [[Statistics]] (1), next (1)
> **UI Navigation:** go to (6)
> **CLI Commands:** find (1), make (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **Warnings:** troubleshoot (2)
> **Env Vars:** tcp (1)
> **Speakers:** - [instructor] (1)

#### Subset, save, and export
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=1)** - [Narrator] Sometimes when working with packet captures you get a really large file, and need to break it down to a smaller subset and send it off for analysis or keep it for later discovery.
>
> **[0:12](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=12)** Now this packet capture, down below, you see that there's 54,102 packets.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=19)** Well I just want to make it a little smaller.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=21)** And we'll pretend in this case that the intrusion detection system set on alert, that someone was going to a website, and they downloaded something that somehow looks suspicious.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=34)** So you pull off the file and you bring it into Wireshark, and since it was HTTP let's just go through and do a filter.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=43)** We do would display filter by typing HTTP.
>
> **[0:51](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=51)** Now the next thing is, I don't want the online certificate status protocol, so, I right click and prepares a filter, and then say, and not selected.
>
> **[1:02](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=62)** Now remember when I say prepares a filter, it simply puts it up there for me to run.
>
> **[1:07](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=67)** To make sure it's what I want.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=69)** Now I do want this, so will go up and press enter.
>
> **[1:12](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=72)** And then again, that will narrow it down, just to those requests.
>
> **[1:17](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=77)** Now one of the things we can do is export objects.
>
> **[1:21](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=81)** Now within that, I'm suspecting that there was something that was brought in.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=86)** And I want to go to see what that is.
>
> **[1:28](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=88)** I'll go to file, and export objects.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=92)** And since we were at a website will go to HTTP, and here you can see that there are a lot of objects and these are all the objects that were within the capture.
>
> **[1:41](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=101)** And this one, will take a look at this one.
>
> **[1:44](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=104)** And, we're not sure what it is, it says bluegoat, dot, jpg.
>
> **[1:48](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=108)** Now say save.
>
> **[1:53](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=113)** And, I'll put it in this Wireshark folder.
>
> **[1:58](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=118)** And then we'll close that.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=120)** Now we have this smaller file, now the next thing is, we're going to save it.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=125)** But first I want to put a comment on there.
>
> **[2:08](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=128)** So that I remember what it is I wanted to do.
>
> **[2:10](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=130)** I go to statistics and then the capture file properties.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=135)** And this just gives you a summary of this file.
>
> **[2:18](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=138)** Well down below, I can put, capture file comments.
>
> **[2:21](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=141)** And I'll put in there, not sure what's going on but this traffic caused an alert.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=148)** I'll say save the comments, and then we'll close it.
>
> **[2:32](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=152)** Now, if you do notice that the file name has a little Asterix, once I save that, that will preserve the comments.
>
> **[2:39](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=159)** But again, that was just something I did so that we could keep our reference, for future, when we go back into this file again.
>
> **[2:47](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=167)** Now and the next thing is, I'll go to file, and I could say, save as, the save as, is just as we've done before, where you can go in and save the file.
>
> **[2:59](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=179)** And we'll just put, HTTP traffic.
>
> **[3:05](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=185)** And, that is actually going to save the entire file.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=188)** It's gonna be with everything in it.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=190)** And I'll say okay.
>
> **[3:13](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=193)** And, this case I just want that subset so what I'm gonna do is go to file, and export specified packets.
>
> **[3:22](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=202)** Then will go to export specified packets, And, what we'll do is take a look at this.
>
> **[3:27](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=207)** Well, first of all, I want you to see, save file as type.
>
> **[3:31](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=211)** And, there's a lot of choices.
>
> **[3:33](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=213)** What's really great about Wireshark, is it's able to be imported into other applications so you can see all these different extensions.
>
> **[3:42](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=222)** And of course we can bring them in from other applications as well.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=225)** So we'll call this, IDS Alert.
>
> **[3:50](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=230)** Now down below, you can see the choices here is we can compress the file, and then down below is really what is, what is it you want to save.
>
> **[3:59](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=239)** And, I could say, all packets.
>
> **[4:01](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=241)** And that would be captured and I don't want that.
>
> **[4:04](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=244)** This is why we did this so we say displayed.
>
> **[4:07](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=247)** Or you can do, selected packet and that is actually the packet that we're on, right at the time, which happens to be 25067.
>
> **[4:16](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=256)** Sometimes I mark the packets and that's not what I want.
>
> **[4:19](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=259)** And I can actually do a range, so in this case I'll say, all packets and displayed.
>
> **[4:23](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=263)** And we'll save that in that Wireshark folder.
>
> **[4:29](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=269)** And now we can close that and then we'll go back in, and we'll look at the recent one we had just gotten into.
>
> **[4:37](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=277)** And will clear the filter off and you can see the entire stream.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=281)** As you see, we've got all the HTTP traffic.
>
> **[4:45](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=285)** So the last thing we'll do is, we'll take a look actually as to, what is it I did export?
>
> **[4:50](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=290)** And remember you can export those objects.
>
> **[4:52](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=292)** And we'll just open up, bluegoat.
>
> **[4:59](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=299)** Oh, well, doesn't seem like there's anything bad there, but it's always good to investigate.
>
> **[5:04](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=304)** So with Wireshark, we can take a huge file and we can subset that, we can add a comment, and then export only those selected packets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (5), next (3), traffic (3), [[Intrusion Detection]] (1), [[Statistics]] (1)
> **UI Navigation:** go to (7)
> **Env Vars:** http (5), ids (1)
> **CLI Commands:** make (2)
> **Speakers:** - [narrator] (1)

#### Using Cloudshark
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=0)** - [Instructor] CloudShark is an online packet analysis tool that provides an interface similar to Wireshark.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=8)** In this segment, we'll evaluate CloudShark's built-in analysis tools, and discover ways the file can be evaluated online or downloaded and analyzed with Wireshark.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=21)** I'm here at QA Cafe, and I'll select Analysis tools, Personal Software as a Service.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=29)** Now, once here, you can log into your account, or if you'd like to try CloudShark, scroll down, and you can sign up for a 30-day trial by completing this form.
>
> **[0:42](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=42)** I have a basic account.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=44)** Once in, as you can see, I've uploaded several packet captures.
>
> **[0:49](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=49)** I'm going to open Interesting Object, which brings us to the CloudShark interface.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=56)** Now, once here, we can check out some of the analysis tools, and I'll go over here and drop this down.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=64)** Now, once we drop down the menu choice, we see a lot of options.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=69)** For example, let's try Follow the Stream.
>
> **[1:13](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=73)** Now, this is similar to Wireshark, where we can see the entire conversation, and I'll close that.
>
> **[1:21](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=81)** In addition, there are a few graphs.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=86)** Now, one of the more powerful analysis tools is Threat Assessment.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=91)** Let's talk about how you can use this feature.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=95)** For example, you're at the office, and clients are complaining about slow response times, so you grab a capture and then upload the file, which I have here.
>
> **[1:47](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=107)** Now, once you upload it, you can make it public, and then you can share it with your team, and then you can all examine the file together.
>
> **[1:55](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=115)** We'll open the file.
>
> **[1:58](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=118)** Now, once I'm here, I'm going to check out a couple of things.
>
> **[2:02](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=122)** Because there was a lot of traffic on the network, I'm going to look at GeoIP World Map, and I'll select that right there.
>
> **[2:11](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=131)** Now, this tells us where the endpoints are located, and you can see that there seems to be a lot of different countries where there's endpoints.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=142)** Now, if I want to see the total bytes exchanged, we'll scroll down here to see the statistics, and here, we can see a number of different countries, and a lot of packets that have been exchanged changed.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=155)** Now I'll close that.
>
> **[2:40](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=160)** Now, another analysis tool I like to use is Threat Assessment.
>
> **[2:44](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=164)** We'll drop this down and go to Threat Assessment.
>
> **[2:48](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=168)** Now, this shows several levels of severity.
>
> **[2:52](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=172)** Now, once here, we can click View Advanced Threat Analysis and I'll open it in a new tab, and once in, you can examine the results.
>
> **[3:03](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=183)** In this case, we see Possible Dridex, which will prompt me to do additional research to learn more about Dridex malware and how we can mitigate this threat.
>
> **[3:17](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=197)** So, now, let's go back to Interesting Objects.
>
> **[3:20](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=200)** Of course, we can do our analysis here, but we can also export the file and open it in Wireshark, and I generally download the original file, download it and open it in Wireshark.
>
> **[3:35](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=215)** Now, once in the file, I want to see what interesting object there is within this file.
>
> **[3:41](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=221)** I'll go to File, Export Objects, and HTTP.
>
> **[3:47](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=227)** Ah, there we see an image, so I'll say Preview, and there's the interesting object.
>
> **[3:56](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=236)** So, CloudShark has several built-in analysis tools, so you can evaluate the file online, or download and analyze with Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (6), [[SaaS|Software as a service]] (1), feature (1), [[Microsoft Office|Office]] (1), traffic (1)
> **UI Navigation:** scroll down (2), go to (2), open the (1)
> **Analogies:** similar to (2), for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** http (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** download the (1)
> **Definitions:** is an  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### What's next?
> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=0)** - [Lisa] Thank you for watching.
>
> **[0:02](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=2)** In this course, I begin with a review of traffic capture and the benefits of traffic analysis.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=8)** I compared Wireshark Legacy with Wireshark Next Generation and how to install it on either a PC or a Mac.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=17)** I then moved into deep packet analysis of common protocols, such as TCP, UDP, IP, and FTP, and then summarized with working with packet captures, including Wireshark's expert system, detecting network latency issues, how to subset traffic, save and export, along with sharing captures using Cloudshark.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=41)** If you're interested in learning more, please check out the IT and Security segment of the library, where we add new courses all the time.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=50)** It's well worth your time to check out any course in the Ethical Hacking series and take a look at my CCNA Security series.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=59)** If you want to learn more about packet analysis, check out my courses on Wireshark and visit my homepage for a complete list of all courses.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=69)** Keep learning.
>
> **[1:10](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=70)** I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), traffic (3), [[Security]] (2), next (1), [[Ethical Hacking]] (1)
> **Env Vars:** tcp (1), udp (1), ftp (1), ccna (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [lisa] (1)


## Resources

- Exercise files available

## Skills Covered

- Wireshark

## Path Context

### In [[Wireshark- Network Traffic Analysis]]
**1 of 5** | [[Wireshark- Functionality]] →

## Appears In

- [[Wireshark- Network Traffic Analysis]]

## Related Courses

_Courses sharing skills:_

- [[Wireshark- Network Troubleshooting]] — Wireshark
- [[Wireshark- Functionality]] — Wireshark
- [[Wireshark- Malware and Forensics]] — Wireshark

---

[↑ Back to top](#)