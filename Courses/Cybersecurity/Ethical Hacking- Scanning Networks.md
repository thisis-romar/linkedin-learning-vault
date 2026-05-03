---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-scanning-networks-20213513
url: "https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513"
duration_minutes: 135
duration: 2h 15m
level: Intermediate
updated: 12/15/2023
learners: 54600
skills:
  - Network Monitoring Tools
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGFV-f3EJ14fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702507055898?e=2147483647&amp;v=beta&amp;t=YaHg5sNP2dyA9PLuM1A0dzLqPQjYaa0LxcUUdMsndfs"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Footprinting and Reconnaissance]]'
next_courses:
  - '[[Ethical Hacking- Enumeration]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":3,"total":19,"prev":"Ethical Hacking- Footprinting and Reconnaissance","next":"Ethical Hacking- Enumeration"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-monitoring-tools
  - skill/ethical-hacking
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Scanning%20Networks.md)

![Ethical Hacking: Scanning Networks](https://media.licdn.com/dms/image/v2/D4D0DAQGFV-f3EJ14fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702507055898?e=2147483647&amp;v=beta&amp;t=YaHg5sNP2dyA9PLuM1A0dzLqPQjYaa0LxcUUdMsndfs)

# Ethical Hacking: Scanning Networks

> After footprinting and reconnaissance, scanning is the second phase of information gathering that hackers use to size up a network. Network scans are a key tool in the arsenal of ethical hackers, who work to prevent attacks on an organization's infrastructure and data. This course investigates the scanning tools and techniques used to obtain information from a target system. Instructor Lisa Bock d

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513) | 2h 15m | Intermediate | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Scanning the LAN](#scanning-the-lan)
  - [Discovering resources](#discovering-resources)
  - [Hacking ethically](#hacking-ethically)
  - [Setting up your virtual network](#setting-up-your-virtual-network)
- [**1. Scanning Purpose and Methodology**](#1-scanning-purpose-and-methodology) (6 videos)
  - [Roadmapping a scan](#roadmapping-a-scan)
  - [Outlining the TCP flags](#outlining-the-tcp-flags)
  - [Leveraging the TCP three-way handshake](#leveraging-the-tcp-three-way-handshake)
  - [Summarizing scanning tools](#summarizing-scanning-tools)
  - [Discovering Nmap](#discovering-nmap)
  - [Using hping3](#using-hping3)
- [**2. Discovering Hosts**](#2-discovering-hosts) (5 videos)
  - [Locating network hosts](#locating-network-hosts)
  - [Comparing ping scans](#comparing-ping-scans)
  - [Sending SYN and ACK scans](#sending-syn-and-ack-scans)
  - [Challenge: Identify a scanning signature](#challenge-identify-a-scanning-signature)
  - [Solution: Identify a scanning signature](#solution-identify-a-scanning-signature)
- [**3. Identifying Open Services**](#3-identifying-open-services) (5 videos)
  - [Evaluating port scanning methods](#evaluating-port-scanning-methods)
  - [Scanning IPv6 networks](#scanning-ipv6-networks)
  - [Identifying listening hosts using SCTP](#identifying-listening-hosts-using-sctp)
  - [Using SSDP for discovery](#using-ssdp-for-discovery)
  - [Optimizing scans with Nmap Script Engine](#optimizing-scans-with-nmap-script-engine)
- [**4. Determining Operating Systems**](#4-determining-operating-systems) (5 videos)
  - [Fingerprinting the OS](#fingerprinting-the-os)
  - [Using Wireshark for OS discovery](#using-wireshark-for-os-discovery)
  - [Employing IPv6 fingerprinting](#employing-ipv6-fingerprinting)
  - [Harnessing the TTL value](#harnessing-the-ttl-value)
  - [Mapping the network using Nmap](#mapping-the-network-using-nmap)
- [**5. Moving through the Network**](#5-moving-through-the-network) (4 videos)
  - [Generating less noise](#generating-less-noise)
  - [Understanding the idle scan](#understanding-the-idle-scan)
  - [Firewalking the network](#firewalking-the-network)
  - [Implementing stealth scans](#implementing-stealth-scans)
- [**6. Avoiding Detection**](#6-avoiding-detection) (4 videos)
  - [Manipulating packets](#manipulating-packets)
  - [Spoofing and cloaking](#spoofing-and-cloaking)
  - [Employing proxies](#employing-proxies)
  - [Leveraging anonymizers](#leveraging-anonymizers)
- [**7. Counteracting Scanning**](#7-counteracting-scanning) (5 videos)
  - [Preventing scanning](#preventing-scanning)
  - [Detecting spoofing](#detecting-spoofing)
  - [Challenge: Draw a network diagram](#challenge-draw-a-network-diagram)
  - [Solution: Draw a network diagram](#solution-draw-a-network-diagram)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Scanning the LAN](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980&t=0)** - [Instructor] After a thorough footprinting exercise, the team is armed with more information on the target and is ready to move into the second phase of [[Ethical Hacking]], scanning the network.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980&t=13)** In this course, I'll explore scanning techniques and ways to obtain information from the target system, including using specially crafted packets, TCP flags, SYN scans, and ping sweeps.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980&t=28)** All described methods used to discover hosts, operating systems, and listening services on a network, and outline techniques to avoid detection.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980&t=39)** We'll finish with learning how to counteract network spoofing and scanning.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980&t=45)** By the end of this course, you'll understand the tools, techniques, and logic of scanning.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980&t=51)** Hello, my name is Lisa Bock and I'm a security ambassador.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980&t=56)** This course is part of the Ethical Hacking Series.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980&t=60)** Are you ready? Then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (2)
> **Env Vars:** tcp (1), syn (1)
> **Speakers:** - [instructor] (1)

#### [Discovering resources](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980&t=0)** - [Instructor] This course is a basic to intermediate course intended for anyone with an interest in learning more about [[Ethical Hacking]].
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980&t=10)** This course is part of the Ethical Hacking series.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980&t=15)** I'll cover several topics, but I have provided a file for you so that you can follow along.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980&t=22)** Go to the Exercise File link on the Welcome screen, where you will find a Challenges and Links document.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980&t=30)** In the document, I have included the links to the resources that I reference throughout the course.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980&t=38)** Additionally, during each segment, I will identify a challenge using the following icon, along with a question from the video.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980&t=47)** Use the document to write out responses to challenges that I cover throughout the course.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980&t=54)** I am super excited to bring you this course, so sharpen your pencil, and let's start learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hacking ethically](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/hacking-ethically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/hacking-ethically?u=76281980&t=0)** - [Instructor] The goal of the [[Ethical Hacking]] series is to help system administrators understand how to better protect the assets they manage.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/hacking-ethically?u=76281980&t=11)** I'll focus on the concepts of ethical hacking in order to explain why it's essential in any organization's overall security framework.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/hacking-ethically?u=76281980&t=21)** The tests and procedures I explore should only be executed on your own system or a system that you are charged with protecting.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/hacking-ethically?u=76281980&t=32)** If ownership and responsibility lie with another party, be sure to get clear written instructions with explicit permission to conduct ethical hacking activities.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/hacking-ethically?u=76281980&t=45)** Do not investigate individuals, websites, servers, or conduct any illegal activities on any system you do not have permission to analyze.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (3)
> **Speakers:** - [instructor] (1)

#### [Setting up your virtual network](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=0)** - [Instructor] To demonstrate some of the tools used in [[Ethical Hacking]], I've set up a small network using pre-made images and [[Virtual Machines]].
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=10)** As we see in this graphic, we have [[Kali Linux]] and [[Windows]] using the virtual switch, which is created automatically, all inside the VMware Player or VirtualBox environment.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=25)** Let's take a look at where we can obtain these resources.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=31)** To run your virtual machines, you can either use VMware or VirtualBox.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=37)** For an evaluation copy of VMware Workstation Player, you'll go here.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=45)** And here's where you'll go for a copy of VirtualBox.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=49)** For the virtual machines, you can visit [[Microsoft]]'s Developer page for a 90 day version of the latest Windows operating system.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=60)** And go to [kali.org](https://kali.org) for the latest version of Kali.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=66)** And prebuilt virtual machines for Kali Linux are found here.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=71)** And take note that these images have the default credentials, kali/kali.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=80)** Once you set up your network, make sure you can ping all installed machines.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=85)** Additionally, you may have to adjust your firewall settings, then you should be good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (4), [[Kali Linux]] (2), [[Windows]] (2), [[Ethical Hacking]] (1), [[Microsoft]] (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **URLs:** [kali.org](https://kali.org) (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 1. Scanning Purpose and Methodology

[↑ Back to Table of Contents](#table-of-contents)

#### [Roadmapping a scan](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=0)** - [Instructor] The second phase of [[Ethical Hacking]] is scanning, which helps develop a profile of the target.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=7)** In this segment, we'll learn how scanning helps discover responding hosts, check for listening services, determine the operating systems in use, and generate a map of the network.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=23)** First, let's outline how structured ethical hacking works.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=28)** Ethical hacking typically has five phases: reconnaissance, scanning, gaining access, maintaining access, and covering tracks.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=42)** Scanning or port scanning uses a variety of tools and techniques to dissect network resources.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=50)** Let's talk about how this works.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=54)** After completing a reconnaissance exercise and gathering details, such as the IP address range and what data or services might be of value, the ethical hacker has more knowledge about the target.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=69)** Armed with this information, the team has a better idea of how to get deeper into the system.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=76)** The goal in this phase is to learn more about the network.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=81)** We want to identify the type of devices that are in place.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=86)** We'll also check for any defense methods that might exist, such as firewalls and [[Intrusion Detection]] systems.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=95)** In addition, the team will check for listening services, determine the operating systems, and monitor for evidence of data being sent in clear text.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=107)** Prior to starting, the team will outline a plan that includes how and what network devices to scan.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=115)** The process begins by attempting to connect with listening hosts on the network.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=120)** We then check for open TCP and UDP ports on a system and continue by building a logical topology or layout of the network.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=131)** Scanning techniques can vary, but there are some common scans, each having a different objective.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=139)** Ping sweeps send a succession of probe packets to an IP range on a network with the goal of identifying which hosts are alive and responding.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=151)** Port scanning identifies listening TCP and UDP ports on a system with the goal of identifying the services that are active on the target.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=163)** Operating system fingerprinting determines the target's operating system based on response behavior.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=172)** And network mapping identifies the logical topology and creates a map.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=180)** Now let's test your knowledge.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=182)** Discuss how scanning helps discover responding hosts, check for listening services, determine the operating systems in use, and generate a map of the network.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=195)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (3), [[Intrusion Detection]] (1)
> **Env Vars:** tcp (2), udp (2)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Outlining the TCP flags](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=0)** - [Instructor] TCP is a connection-oriented protocol that uses flags that helps to tell the story of the data transaction.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=9)** In this segment, we'll learn how TCP flags can be used when scanning to get a response, avoid detection, or determine the presence of a firewall.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=22)** First, let's compare how the two predominant transport layer protocols, TCP and UDP, are used during scanning.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=33)** UDP is a connectionless protocol based on speed.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=38)** The UDP header only has four fields and no flags to manipulate.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=44)** When using UDP, you'll never get a response from the host.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=49)** Instead, a response from a UDP probe might be an ICMP type three, code three, port unreachable.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=57)** Or if the network is blocking ICMP, no message will be returned.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=64)** Because of the limited response we get when using UDP when scanning, we mostly focus on TCP.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=73)** The reason is that TCP has many more opportunities to manipulate the header than UDP.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=80)** TCP is a connection-oriented protocol that establishes a connection to the remote host via a three-way handshake.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=90)** A TCP header contains 11 fields, which includes a one byte field that holds the flags.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=99)** Let's talk about each of the flags and their function.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=104)** Now, the first group of flags are not used during scanning, and those include reserved.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=111)** Now, this is for future use and should be set to zero.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=116)** Explicit congestion notification, congestion window reduced, and ECN Echo are used during congestion control.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=128)** Urgent indicates that this packet should have priority, and this is rarely seen.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=135)** Now the next grouping of flags are what you'll commonly use when scanning.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=141)** The ACK flag acknowledges that the packets have been received.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=146)** All packets after the initial SYN packet sent by the client should have this flag set.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=154)** PSH informs TCP that data should be sent immediately.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=159)** Many times PSH is used within.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=164)** Reset is designed to allow a station to abort the TCP connection.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=169)** Now, this can happen for a number of reasons, such as sensing an abnormal connection.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=177)** The SYN flag will synchronize the sequence number.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=181)** Only the first packet sent from each end should have this flag set, and that would be the first two packets of the handshake.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=191)** FIN means the process is complete, and there's no more data from the sender.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=198)** Now, most scanners use the TCP flags.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=201)** For example, [[Nmap]] can use the following techniques.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=207)** A full connect scan completes the handshake and is the most reliable scan.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=213)** Now this works with most systems, but it's also the most obvious.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=219)** Open ports will respond with a SYN/ACK, whereas closed ports will respond with a reset.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=227)** SYN stealth scan is a half open scan as the connection is never established.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=233)** Now, this works with most systems as well and has this same responses as the full connect.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=241)** A FIN scan can send a FIN packet to the target port.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=246)** FIN packets can sneak through undetected.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=250)** Now, closed ports should send back a reset.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=254)** Now, a [[Windows]] machine will send resets regardless of the port state.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=259)** So a Windows machine really isn't susceptible to this type of scan.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=266)** With a NULL scan, null flags are set and closed ports should return a reset.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=274)** An ACK scan sends ACKS.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=276)** And if a reset is returned, this gives the attacker data on whether or not there's a firewall present.
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=284)** For example, an ICMP destination unreachable response will indicate that the port is most likely filtered.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=294)** And a Christmas tree scan means that the packet is lit like a Christmas tree, and this one has the FIN, URG, and PSH flag set.
>
> **[5:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=305)** Now let's test your knowledge.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=307)** Outline how the TCP flags can be used when scanning the network to get a response, avoid detection, or determine if there is a firewall.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=319)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Nmap]] (1)
> **Env Vars:** tcp (11), udp (7), fin (5), syn (4), icmp (3)
> **Definitions:** is a  (5)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging the TCP three-way handshake](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=0)** - [Instructor] TCP is a connection-oriented process, and several network scans use part of the handshake and termination process to get responses from a host.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=12)** In this segment, we'll step through a TCP handshake and termination, and identify the flags that are set during this process.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=23)** First, let's talk about a normal TCP session.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=28)** To begin, Host A will send a synchronization or SYN packet to Host B.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=35)** The syn packet is used to synchronize sequence numbers.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=39)** If Host B accepts, it responds with a synchronization acknowledgement.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=46)** Host A then responds with an acknowledgement.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=51)** Next, a socket on both ends is created, which is an IP address and a port, and the session begins, and both sides can then exchange data.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=63)** Normally, everything goes well.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=66)** However, periodically, when beginning a session, services will be refused.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=72)** For example, no password was sent, so the connection is reset.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=78)** No response might indicate a firewall, or you might receive an ICMP "destination unreachable" packet.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=89)** The code might indicate that the network was unreachable or the host was unreachable, but most likely the target port is firewalled.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=100)** At that point, the host may try again with another SYN packet.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=105)** At the end of a conversation, generally, there's a proper termination with an exchange of FIN packets, and you'll see the following.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=114)** You'll see an ACK and a FIN, an ACK and a FIN, or you might see this combination.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=121)** But sometimes the connection will simply time out and close.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=127)** Now I'd like to show you an example of a TCP handshake and FIN exchange between a client and a server.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=135)** If you'd like to follow along, get the file "TCP_Start&End" found in the exercise folder, and open the file in [[Wireshark]].
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=145)** We'll first look at the three-way handshake.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=149)** Now the three-way handshake begins by going to frame 1.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=155)** And here we see that the client at 10.0.0.148 initiates contact with the server at 178.255.83.1.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=168)** Now in this case, I'm going to open the TCP header and I'll scroll down so we can take a look at the flags.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=176)** And here we see that the Syn flag is set.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=182)** Now we'll go to frame 2, and at this point, the server then responds to the client with a SYN, ACK.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=190)** Again, looking at the flags, we see the Acknowledgement flag is set along with the Syn flag.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=197)** Then in frame 3, the client will return a final acknowledgement.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=202)** And going down to the flags, we see that the Acknowledgement flag is set.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=209)** Now keep in mind, no data is exchanged during this time, it's just a handshake.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=215)** However, once the final acknowledgement is set, the two endpoints can begin to send data.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=223)** Now, TCP starts with a three-way handshake.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=226)** At the end, we'll have a tear down with an exchange of FIN packets.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=231)** I'll go down to frame 7, and that's where the session terminates.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=237)** Here we see in this case, it's sending a FIN and a ACK, so you see the Fin flag set along with the Acknowledgement flag set, and the same happens in frame 8.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=250)** And then in frame 9 and 10, both sides send a final acknowledgement.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=257)** At that point, the session will complete.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=261)** Now let's test your knowledge, step through the TCP handshake and termination, and identify the flags that are set during each process.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=273)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Env Vars:** tcp (7), fin (6), ack (4), syn (3), icmp (1)
> **UI Navigation:** open the (2), scroll down (1), go to (1)
> **Versions:** 10.0.0 (1), 178.255.83 (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Summarizing scanning tools](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=0)** - [Instructor] Today, there are many tools available to identify devices, services, operating systems, and vulnerabilities on a network.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=11)** In this segment, we'll discuss some general functions of scanners and outline a few apps used to audit the network.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=21)** First, let's discuss the various functions found in scanners and what you might do when scanning the network.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=30)** Typically, network scanning begins with host discovery, which identifies active devices on a network.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=39)** This is done by sending probes to a range of IP addresses to see which hosts will respond.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=47)** Some common methods for host discovery includes ICMP echo requests, or ping scans, TCP ACK or SYN packets, and ARP requests.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=60)** After the team identifies the listening hosts, the next step is to run a port scan.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=68)** This determines which port on a device are open, closed, or filtered.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=75)** Methods include the SYN scan, full connect scan, and the ACK scan.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=81)** Beyond identifying services on a host, the team often conducts scans to determine the operating system of the target.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=92)** This is achieved using a method known as fingerprinting, which estimates the operating system based on the analysis of responses from the host.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=104)** For instance, consider the output of a scan that indicates with 99% accuracy that the operating system is [[Windows 10]].
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=116)** Finally, upon completing all scans, the scanner can identify the topology and construct a logical map of the network.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=127)** Next, let's talk about some of the tools you might use when scanning.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=132)** If you do a keyword search on apps to scan the network, you'll find a wide variety of tools that are either free or for pay, and some are built into [[Kali Linux]].
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=146)** Apps include the Angry IP Scanner.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=149)** This is a freely available scanner for [[Linux]], [[Windows]], and Mac OS.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=157)** Nessus is a widely used vulnerability scanner that's commercially available but free for personal use.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=165)** Aircrack-ng is a suite of tools for [[Wi-Fi|wireless LAN]] auditing.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=171)** OpenVAS is an open-source vulnerability scanner, and [[Nmap]] is another open-source tool for network discovery and vulnerability scanning.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=184)** Unicornscan comes pre-installed with Kali Linux and is a fast, efficient scanner.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=191)** Let's take a look.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=194)** I'm here at this page where we can learn more about the key features of Unicornscan.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=200)** I'll scroll down.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=204)** One key difference is that Unicornscan uses asynchronous scanning where instead of waiting for each scan to finish, each scan is started independently and can run simultaneously, which results in faster responses.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=222)** However, you will need a device with enough muscle to handle the resources required for this type of scanning.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=231)** In addition, the team may be tasked with scanning mobile devices.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=236)** There are also a wide range of tools available.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=240)** Drozer is an [[Application Security]] testing framework that's specifically designed for [[Android]] devices.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=249)** Quark Engine is an open-source Android and iOS malware scoring system.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=256)** Mobile Security Framework is an automated app used to test Android, iOS, and Windows systems, and Fing can help you troubleshoot your network.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=270)** I'm here at Fing's homepage where, if we scroll down, we can see how Fing can show you what's happening on your network.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=283)** Now let's test your knowledge.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=285)** Discuss some common functions of network scanners and outline a few apps used to audit the network.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=294)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (3), [[Kali Linux]] (2), [[Windows]] (2), [[Windows 10]] (1), [[Linux]] (1)
> **Definitions:** is a  (4), is an  (4), known as (1)
> **Env Vars:** ack (2), syn (2), icmp (1), tcp (1), arp (1)
> **Code Identifiers:** ios (2)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)

#### [Discovering Nmap](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=0)** - [Instructor] [[Nmap]] is a powerful and flexible open source network discovery tool.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=6)** In this segment, we'll outline some of the Nmap scans available that include host discovery, port scanning, and operating system detection, along with some additional features to help streamline your scans.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=23)** Once you understand the basics of scanning, you'll want to evaluate some of the tools that are available.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=30)** One of the more popular scanning tools is Nmap.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=35)** Nmap, or [[Nmap|Network Mapper]], provides a wide range of scans and options.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=40)** In addition to standard scans, Nmap has a wide range of features to optimize scanning on any size network.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=49)** Let's take a look.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=52)** I'm here at [nmap.org](https://nmap.org) where we can see the online version of the Nmap book.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=58)** Once here, you can read about all the available techniques that include finding live hosts and listening services.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=67)** I'll scroll down where you can read more about host discovery or ping scanning, learn all the methods available for port scanning, along with diving into ways to perform operating system detection.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=86)** One thing to keep in mind is that Nmap is highly efficient.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=90)** However, there are times when scans take a lot longer, and they will generate a lot of traffic.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=97)** This is common when scanning a large complex network.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=101)** It's possible to reduce Nmap scan times, and the guide lists several methods.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=108)** I'll go to chapter six, and I've opened it in a new tab where we'll find multiple methods to optimize scanning.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=117)** Methods include the following: omit noncritical test, for example, disabled DNS resolution and scan only 100 ports, instead of the default 1,000 ports.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=132)** Optimize timing parameters, for example, slow the rate of probes per second, or we can increase available bandwidth and CPU time.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=144)** I encourage you to check out this valuable resource where you'll find plenty of scanning information and examples within the book.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=154)** Now, let's test your knowledge, outline some of the Nmap scans available that include host discovery, port scanning, and operating system detection, along with features to help streamline your scans.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=170)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (10), [[Nmap|Network mapper]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** dns (1), cpu (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Analogies:** for example (2)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### [Using hping3](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=0)** - [Instructor] Hping3 is a command line tool that can create specially crafted packets to send to a remote host.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=9)** In this segment, we'll learn how we can use Hping3 to scan, spoof, or launch an attack.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=17)** Hping3 is very flexible, and depending on your objective, specific flags and options can be set.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=25)** The tool can craft and send ICMP, UDP, or TCP packets to a remote host and print the results.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=36)** It could be used to spoof a source address and determine firewall rules with the goal of evading the firewall.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=45)** Hping3 can also be used as a backdoor to create a shell that redirects the output and input to a service, so it can be accessed remotely.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=56)** And it can also be used to launch an attack.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=61)** With Hping3 we can do standard scans such as a ping sweep, SYN scan, or a Christmas tree scan.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=70)** We can specify IP options such as randomized IP source and destination address, along with other options such as timing intervals and setting specific flags.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=85)** Let's jump into Kali and see how this works.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=89)** I've opened up a terminal so we can do a simple ping scan using Hping3.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=95)** I'm going to pinging scanme.[nmap.org](https://nmap.org), which is a site that allows you to test and do some pinging and scanning.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=105)** So I've entered the command and I'll press Enter, and I'll stop that.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=111)** Okay, so you can see that's a simple ping scan, but what is truly neat about this tool is that it allows you to spoof your source address and it will throw a bunch of random source IP addresses during an attack.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=128)** Let's talk about how I can use this feature.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=132)** A SYN flood is a denial-of-service attack that floods a server with bogus SYN request with the goal of locking out legitimate users.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=144)** To improve the effectiveness of the attack, it should appear as if the packets are coming from multiple sources.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=151)** That way security devices are unable to tell where the attack is coming from and whether the requests are legitimate or not.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=162)** So to launch a denial-of-service attack and use a bunch of random IP addresses, I'll go into Hping3 and run a SYN scan using the random source mode.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=174)** And here we see the command.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=177)** Now, so we can see the random IP addresses that Hping3 generates, I'll launch [[Wireshark]] here within Kali and start the capture.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=187)** So we're going to move this over and I'll launch Wireshark.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=194)** I'm going to start the capture, and I'll minimize this, and now I'll begin the attack.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=203)** Now I'll stop the attack and I'll go back into Wireshark.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=209)** I'll stop the capture.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=211)** And now what I'm going to do, you probably can see some of the IP addresses, but I'll filter by TCP and now you'll really be able to see the random source IP addresses.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=224)** Now because I used the random source mode, we see a bunch of bogus IP addresses that are pretty much all over the map.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=233)** Now, with a denial-of-service attack, the idea is to throw multiple IP addresses at the host so they really have no idea where the attack is coming from and whether the requests are legitimate or not.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=249)** Now I'll minimize this, and I'm at the man page for Hping3.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=256)** Once there, you can check out all the options that you can use when using Hping3.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=264)** Now let's test your knowledge.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=266)** Describe how we can use Hping3 to scan, spoof, or launch an attack.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=273)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Nmap]] (1)
> **Env Vars:** syn (4), tcp (2), icmp (1), udp (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (3)
> **Tools:** command line (1), terminal (1)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Documentation:** man page (1)
> **Speakers:** - [instructor] (1)


### 2. Discovering Hosts

[↑ Back to Table of Contents](#table-of-contents)

#### [Locating network hosts](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=0)** - [Instructor] Scanning the network begins by using various tools and techniques to test for responding hosts.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=7)** In this segment, we'll learn how to identify live hosts for a range of IP addresses and the importance of selecting the correct IP range.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=20)** One of the first objectives of scanning is to identify live or responding hosts on the network.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=27)** This is commonly done by using a technique called ping sweep or ping scanning, which sends multiple probe packets to an IP address range on a network.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=40)** The packets are specifically crafted to obtain responses and gather attributes.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=47)** Let's check the [[Nmap]] book for more information.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=51)** I'm here at [nmap.org](https://nmap.org) in chapter three of the online version of the Nmap book, which focuses on host discovery.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=60)** And I'll scroll down where we can see that this section covers methods used to scan a network for hosts.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=68)** Now, I'll go to a new tab because I wanted to show you here that this chapter also outlines the importance of first selecting the correct IP range and to carefully research the target IP range before scanning anything.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=86)** Well, let's talk about this concept.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=90)** Network scanning helps develop a profile of a target organization.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=95)** When properly done, it's a valuable tool for the security analyst.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=100)** The team can use various tools to determine the IP address of an organization.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=106)** For example, we can use command line tools such as nslookup, dig, or whois, or we can use traceroute and ping.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=117)** We can check email headers or even use online [[Databases]] and directories.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=124)** Let's take a look.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=127)** I'm here at this website Netcraft, where we can search web by domain.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=133)** For example, in this case, I used [example.com](https://example.com) and I selected search.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=139)** And I've opened it in a new tab and then down below here you can see where it says Site Report, and I selected that.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=149)** Now, once I open the site report, and I'll scroll down here, here's where we can find information such as the IP version four address and the IP version six address.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=162)** Now, one essential rule to keep in mind is even though you have an IP address, you should double check the IP address or net block.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=172)** Now, even if the client supplied the address, it might not be correct.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=177)** As we see here, clients sometimes have out of date records or simply write down the wrong information.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=186)** Now, why is this important?
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=188)** There are certain IP address ranges that are protected from scans, even pings, which mostly include government and military networks.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=198)** For example, don't scan range 128 or range 129, but there are others.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=207)** Here I found an exclusion list which lists all the IP addresses that you should not scan.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=218)** In some cases, they aren't on the list, but they're protected nonetheless.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=222)** Let's take a look.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=225)** I've opened a command line prompt and entered ping [nationalguard.com](https://nationalguard.com), and I'll press Enter.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=234)** We'll see how the request will time out due to packet filtering, or in some cases, a silent discard to the [[Bitbucket]].
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=244)** Now let's test your knowledge.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=247)** Explain how to identify live network hosts for a range of IP addresses and the importance of selecting the right IP range.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=257)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (3), [[Databases]] (1), [[Bitbucket]] (1)
> **Analogies:** for example (3), such as (2)
> **UI Navigation:** scroll down (2), go to (1), open the (1)
> **URLs:** [nmap.org](https://nmap.org) (1), [example.com](https://example.com) (1), [nationalguard.com](https://nationalguard.com) (1)
> **Tools:** command line (2), bitbucket (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Comparing ping scans](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=0)** - [Narrator] When scanning, there are several ping scans that we can use to test for liveness.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=6)** In this segment, we'll compare the differences between ARP, UDP and ICMP ping scans.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=15)** First, let's talk about ARP scanning.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=19)** ARP scanning, also called ARP ping or ARP sweep is a simple and effective way to determine the live hosts on a [[Local Area Network (LAN)|local area network]].
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=30)** Let's see how this works in [[Wireshark]].
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=33)** I've opened up ARP scan, where we can view the signature.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=37)** In the capture, we see multiple ARP broadcasts that are sent out onto the network, and I'll scroll down, and any live host will respond with their MAC address.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=51)** For example, we see in frame one, the broadcast is sent, who has this IP address?
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=58)** And in frame two, we see a response.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=61)** I'm at this MAC address, so we know that the host at .68 is alive and responding.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=70)** Another scan we can use to test for liveness is a UDP ping.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=75)** With this scan, [[Nmap]] will send a UDP packet to some common ports.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=81)** For example, port 53, which is used for DNS, it sends it out and will wait for a response.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=90)** A responding host will return an answer or an ICMP port unreachable error and not responding or offline.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=99)** You could see various ICMP error messages.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=104)** For example, in Zenmap, which is the [[Windows]] version of Nmap, I use the following command as we see here, and we let this run.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=117)** And then down below, we see the host 10.001, which is the router, has port 53 open.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=128)** I'm in Wireshark and we'll see how this works.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=130)** I've opened up a UDP scan and I'll go to frame two and we're going to drop down the DNS header and I'll open up the flags and I'll select the Opcode.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=145)** The Opcode for the DNS request is server status request, which is asking what's your status, and then we'll go down to frame four, which is the response.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=158)** In this case, the DNS server returned a response code of four or not implemented.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=165)** This response indicates that it recognizes the query type, but it doesn't support it.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=172)** However, the server did reply with a recursion available, server can do recursive queries.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=179)** With a response from the server, we can safely assume that the DNS server is up and operational.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=188)** Now, UDP scans are slower and less reliable than other scans.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=192)** However, they are used many times because they can bypass some firewall rules.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=199)** Now, the last scan we'll talk about isn't ICMP pinging, which is a classic example of a ping sweep.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=208)** ICMP can be used to discover live hosts, detect the presence of firewalls, fingerprint the operating system, and map the network.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=220)** When using ICMP during a ping sweep, you'll commonly see some query messages.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=225)** Those include echo request/reply, which is used to test for reachability and timestamp request/reply, which is used to compute delay between timestamps.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=239)** In addition, you'll see error messages, and those include destination unreachable, redirect, time exceeded, and parameter problem.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=251)** I'm in Wireshark and I've opened ICMP scan signature, where you can see the many requests, replies, and error messages, and I'll scroll down.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=263)** All total, they provide information about the network.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=268)** However, keep in mind when using ICMP ping sweeps, many times they're blocked by a firewall or [[Intrusion Detection]] system.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=279)** Now let's test your knowledge.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=281)** Compare the differences between ARP, UDP and ICMP ping scans.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=288)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Nmap]] (2), [[Local Area Network (LAN)|Local area network]] (1), [[Windows]] (1), [[Intrusion Detection]] (1)
> **Env Vars:** icmp (9), arp (8), udp (6), dns (5), mac (2)
> **UI Navigation:** scroll down (2), go to (1), select the (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **Ports:** port 53 (2)
> **Versions:** 10.001 (1)
> **Warnings:** keep in mind (1)

#### [Sending SYN and ACK scans](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=0)** - [Instructor] A TCP header has multiple flags that can be manipulated, which can be a powerful ally when scanning a network.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=9)** In this segment, we'll learn how the TCP SYN and ACK flags can be used to detect live hosts on the network and identify firewall rules.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=21)** During host discovery, the team will send probes to a range of IP addresses to see which hosts respond.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=30)** While there are many methods we can use, leveraging the power of the TCP flags can achieve solid results when assessing the network.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=40)** More specifically, we'll see how using the TCP SYN flag can determine which hosts are alive and the TCP ACK flag can help determine the presence of a firewall.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=54)** First, let's talk about how a TCP SYN scan works.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=59)** The TCP SYN or half open scan sends probes out onto the network to determine if hosts are alive and responding without making a full connection.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=71)** This makes it less likely to be logged by certain systems and harder to detect than a full connect scan.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=79)** The SYN scan is one of the most popular scanning methods because of its speed and also because it's a bit stealthier.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=88)** Let's talk about how this works.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=91)** In a standard TCP handshake, the sequence is as follows.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=95)** From Host A, we send a SYN packet to initiate the connection.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=100)** Host B returns a SYN-ACK, and host A returns a final acknowledgement, and that begins the connection.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=110)** When using a SYN scan, the scanner only sends the SYN packet or the initial packet in the TCP handshake, and the results are as follows.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=121)** If the host returns a SYN-ACK, that means the port is open.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=126)** If the host returns a reset, that means the port is closed.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=132)** No response or if an ICMP destination unreachable error is returned, this means that the port might be filtered by a firewall.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=143)** If a target returns a SYN-ACK, this indicates that the port is open.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=148)** In response, the scanner will send a reset packet to abort the connection to make sure a full connection is not made with the target.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=159)** Next, let's talk about the TCP ACK scan.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=164)** This scan is similar to the SYN scan, however, in this scan, the TCP ACK flag is set instead of the SYN flag.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=173)** A key consideration is that the TCP ACK scan isn't concerned about open or closed ports in the traditional sense.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=182)** Instead, it will help map out firewall rules by identifying whether a port is filtered by a firewall or unfiltered.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=191)** Responses will be as follows.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=195)** If the host returns a reset, this means that the packet reached the host and the port is considered unfiltered.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=203)** No response means that the port is considered filtered by a firewall which has prevented the packet from reaching the host.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=213)** Now, let's test your knowledge.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=215)** Outline how the TCP SYN and ACK flags can be used to detect live hosts on the network and identify existing firewall rules.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=227)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** syn (14), tcp (13), ack (9), icmp (1)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Identify a scanning signature](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=0)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=7)** For this challenge, we'll evaluate a scanning signature using [[Wireshark]].
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=13)** For this challenge, we'll begin by going to the Exercise folder and opening the file [[Nmap]] Scan.pcapng in Wireshark.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=24)** And here's what you should see when you open the file.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=28)** Now for this challenge, you're going to investigate what's happening in this capture.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=35)** First, you'll filter by arp, describe the pattern you see, and then clear the filter.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=42)** Filter by tcp, describe the pattern you see, and then clear the filter.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=49)** Filter by icmp, describe the pattern you see, and then clear the filter.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=56)** Now let's take a look at the signature.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=60)** Filter by frame matches "(?i)nmap" exactly as it's written.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=66)** Take a look at the results.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=68)** How many packets are present?
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=71)** Right-click on any of the packets and then select "Follow the Stream."
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=77)** Can you see the text nmap in the pop-up window?
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=81)** Clear the filter.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=83)** And then finally, you'll filter by tcp.stream eq 3204.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=90)** Take a look at the results.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=92)** What does it say on the User Agent line?
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=98)** This challenge should take you about 20 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (3), [[Wireshark]] (2)
> **UI Navigation:** open the (1), right-click (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Identify a scanning signature](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=0)** - [Instructor] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=8)** For this challenge, you were to open [[Nmap]] Scan.pcapng, and then I wanted you to filter by several protocols.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=18)** So when we begin, I want you to imagine that you are an [[Intrusion Detection]] system and you're monitoring all the traffic that goes through your device for unusual or suspicious behavior.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=31)** And more specifically in this case, we're going to be able to see some patterns of a scan.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=38)** So first we were to filter by ARP, so we'll go into the display filter and type ARP and then press Enter.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=47)** Now, I wanted you to describe the pattern that you see.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=51)** Well, it's pretty evident that the scanner is actually going through and saying, "Who has this IP address?"
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=58)** And it's going through .1, .2, .3, .4, et cetera.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=64)** And it will go through the entire range of IP addresses for that network.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=70)** It's waiting for a response so it can then know that that host is alive and responding.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=77)** So we'll clear the filter.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=80)** Next, we'll filter by TCP.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=83)** TCP and press Enter.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=87)** And then you were to describe the pattern you see.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=91)** Now again, the scanner is just sending out multiple SYN packets to all the IP addresses in the range.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=100)** Now, if we remember what happens during a scan that any hosts that are responding will generally send a SYN/ACK back in response to the SYN packet.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=111)** The scanner then sends a reset, so it does not have a full connection with the host.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=117)** So that's what you see, as well.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=121)** Now we'll clear the filter.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=123)** Next, we'll filter by ICMP, and then we'll take a look at that pattern.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=131)** Now, in this case, what we're doing is sending a series of ping requests out onto the network.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=138)** And what we could do, we could filter by destination, so that could just clear it up, as well.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=146)** And what you'll see is it going through a range of IP addresses requesting some type of reply.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=155)** Remember, the ping request is a test for reachability.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=160)** Then I'll clear the filter.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=162)** Now, this one we wanted to filter by frame matches Nmap, and we want to do that exactly.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=168)** So we'll go back in here and frame matches Nmap and then I'll press Enter.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=175)** Now, we see a number of different responses here and they are related to HTTP.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=182)** So for this question, how many packets are present?
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=186)** And if you go down below, you'll see displayed 32.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=191)** Now, if we right click any of the packets and then select follow the stream, and we'll bring this right over here.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=199)** The question was, can you see the text Nmap in the popup window?
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=204)** And yes, right here we see Nmap scripting engine.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=210)** So there's a signature.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=212)** And I want you to clear the filter, as well.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=216)** And the last one is to filter by a specific stream.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=219)** So we'll go in here and put TCP stream equals 3204, and we'll press Enter.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=228)** And again, we're going to right click, follow the TCP stream, and here again look at the user agent line, and I'll select that.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=243)** And what that says is Nmap scripting engine, and it refers back to the Nmap book.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=251)** So clearly a pattern of scanning using Nmap.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=256)** So understanding how a scan works will help you to tune your devices so you can avoid having scanning on your network.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=265)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (8), [[Intrusion Detection]] (1)
> **Env Vars:** tcp (4), syn (3), arp (2), ack (1), icmp (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Identifying Open Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Evaluating port scanning methods](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=0)** - [Instructor] Once a ping scan determines what hosts are alive and responding, the team then moves to identify open services on each live host.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=11)** In this segment, we'll discover how port scanning can help identify the types of devices, check for listening services, and determine the operating systems in use on a network.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=25)** Once the ping sweep is complete, the next step is to identify listening TCP and UDP ports on any of the hosts that are alive and listening.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=37)** Another task done during port scanning is called service discovery, which is done to identify services that are running, and if possible, determine the version of those services.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=51)** The added benefit is that by gathering information obtained during scanning, the scanner can identify a wide range of [[Statistics]] and data.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=62)** Information includes the types of devices, such as firewalls, that are on the network, along with the operating systems that are in use.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=73)** Let's talk about the process of running a service discovery, and more specifically, describe what ports we scan.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=82)** Now, keep in mind that some ports are more exposed than others, in that the nature of the port represents a juicier target.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=92)** On a system, there's a potential for 65,535 TCP and UDP ports.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=102)** The port numbers are used to identify a specific application or process and fall into three main classes.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=111)** The well-known ports are in the range of 1 to 1023.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=116)** You should be familiar with these.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=118)** Some examples include port 53, DNS, port 80, HTTP, and port 88, Kerberos.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=129)** In addition, the team may choose to scan other ports as well.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=133)** For example, ports 1024 through 49151, which are the registered ports that are commonly used by vendors for specific applications.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=146)** These include port 3389, RDP, and services such as SOCKS, Open VPN, and gaming applications.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=157)** Ports in the range of 49152 and higher are dynamic, private, or ephemeral, and are generally used by the client as a receiving port while in a communication with a server.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=173)** Another scan might involve checking for malware ports, for example, port 1001, Silencer.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=181)** Next, let's talk about some techniques that you might use when port scanning.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=188)** A SYN scan or half-open scan is the most common method, and this is where the scanner sends a SYN packet to each target port.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=198)** If the target port responds with a SYN/ACK packet, that means the port is open.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=205)** A full connect scan is when the scanner attempts to establish a full connection using the three-way handshake.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=214)** A UDP scan tests UDP ports instead of TCP.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=219)** Now, this method is slower and less reliable than TCP scanning.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=224)** However, it does help to identify services that use UDP, such as DNS, SNMP, and [[DHCP]].
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=234)** And there's also stealth scans, such as the FIN, NULL, and Xmas Tree scan, which are designed to probe ports without completing a full handshake or connection.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=247)** Now, once done, the scanner will present you with a list of identified services, and here we see some examples of open ports here at [nmap.org](https://nmap.org), so you know what to look for once the scan is complete.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=263)** Now, let's test your knowledge.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=266)** Outline how scanning can help identify the types of devices, check for listening services, and determine the operating systems in use on a network.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=277)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[DHCP]] (1), [[Nmap]] (1)
> **Env Vars:** udp (5), tcp (4), syn (3), dns (2), http (1)
> **Analogies:** such as (4), for example (2)
> **Ports:** port 53 (1), port 80 (1), port 88 (1), port 3389 (1), port 1001 (1)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Scanning IPv6 networks](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=0)** - [Instructor] When scanning the network, the address space for IPv6 can seem overwhelming.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=7)** In this segment, we'll discover some approaches to take when scanning a v6 network and list some guidelines that can reduce the predictable nature of IPv6.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=20)** First, let's talk about IPv6.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=24)** At this writing, the share of IPv6 traffic is at about 43%, and this growth will continue.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=34)** When comparing IPv4 to IPv6, there is a potential of a massive address range.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=43)** With IPv6, a standard subnet size for a LAN is a /64, which is required in order for stateless address auto configuration, or SLAAC, to work.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=58)** With 64 bits, a subnet has the potential for up to 18.4 quintillion host addresses, an insanely large number that would prevent any type of scanning.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=73)** However, scanning and locating devices is possible in an IPv6 network by using tools that predict patterns.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=82)** Let's talk about how this works.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=86)** In IPv6, there are three ways to configure a host with an IP address: manual, SLAAC, and DHCPv6.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=98)** Manually configured addresses in IPv6 are generally assigned in a pattern.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=105)** Although they can be assigned randomly, a network administrator will most likely assign addresses in a pattern that can be detected by a scanner without having to scan the entire network.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=119)** Another method to assign addresses is by using SLAAC.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=124)** In this case, the host uses an extended unique identifier to assign itself a unique 64-bit IPv6 address, and this then removes the need for manual configuration or [[DHCP]].
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=142)** Here's how this works.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=144)** We take a 48-bit MAC address from the [[NIC]].
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=148)** We separate the organizationally unique identifier and the NIC serial number.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=155)** We then insert a 16-bit identifier, FFFE.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=160)** We convert the first grouping to binary and invert the U bit, which is the seventh bit from the left.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=168)** So 07 will become 05.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=172)** We then add the link local prefix, and the MAC address would then become the following extended unique identifier.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=183)** The pattern here is evident, as every SLAAC uses FFFE in the fourth and fifth bytes.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=192)** In addition, a group of hosts on a network commonly share the same NIC card vendor, again, offering a pattern that can be used to further reduce the search space.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=205)** And the last way to assign addresses is by using DHCPv6, which issues an address from a pool, which many times has a predictable pattern.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=219)** This, again, can reduce the search space.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=224)** IPv6 scanning tools can be set to check for live hosts in a specific address range, and can be a starting point to locate other hosts.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=235)** So now that we understand how IPv6 can be predictable, let's talk about ways to reduce the predictability.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=245)** One recommendation to foil the pattern is to start the address pools with a high address and randomize the sequence of assigned addresses.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=256)** In addition, because of the pattern when using SLAAC, it is suggested that you use semantically opaque interface identifiers, which are not based on the MAC address.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=269)** Now let's test your knowledge.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=272)** Discuss some approaches that administrators can take when scanning an IPv6 network, and list some guidelines that can reduce the predictable nature of IPv6.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=285)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIC]] (3), [[DHCP]] (1)
> **Env Vars:** slaac (5), mac (3), nic (3), fffe (2), lan (1)
> **Versions:** 18.4 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Identifying listening hosts using SCTP](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=0)** - [Instructor] The stream control transmission protocol can be used to identify live hosts and open ports on a target system.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=9)** In this segment, we'll review how the SCTP INIT and COOKIE ECHO scans can gather system information while evading detection.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=22)** First, let's talk about the stream control transmission protocol.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=27)** SCTP is a newer transport-layer protocol used to ensure reliable, message-oriented communication.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=37)** It has minimal overhead and is used to transmit multimedia.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=43)** It's often referred to as TCP next generation.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=48)** With SCTP, data can be sent in chunks between two endpoints as opposed to TCP, where data is sent in a stream of bytes, which can be inefficient for certain applications.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=65)** Let's take a look at SCTP in [[Wireshark]].
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=69)** If you'd like to follow along, go to the Wireshark Wiki and select this packet capture.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=76)** Now, once here, I'm going to go to [[Statistics]] and open a flow graph.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=82)** In this flow graph, we see the communication between two endpoints.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=88)** Now, the first four packets show a standard SCTP association setup.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=95)** The initiating end sends an INIT chunk, and if the port is open, the receiving end replies with an INIT-ACK chunk.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=106)** That is then followed by a COOKIE ECHO, and then a cookie ACK.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=113)** Now let's talk about how we can use an SCTP INIT and COOKIE ECHO scan to identify active services and open ports on a target system.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=125)** Well, the benefit of using these scans is that they're considered to be half-open scanning because you don't create an association.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=136)** The idea is that by not completing a full connection setup, the scans might avoid tripping an alarm.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=145)** An SCTP INIT scan takes advantage of the way SCTP establishes a connection between the client and the server.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=155)** This scan will help to determine the state, whether open or closed, of a target port without establishing a full association.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=165)** Now how this works is the scanner will send an INIT chunk to the target port.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=172)** If the port is open, it will receive an INIT-ACK chunk.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=177)** If the port is closed, it will receive an abort chunk.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=183)** The SCTP COOKIE ECHO scan exploits another stage of the SCTP association setup.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=191)** In this scan, the scanner sends a COOKIE ECHO chunk without the INIT and INIT-ACK.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=199)** If the port is open and there's no previous association, the target will respond with an abort chunk.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=207)** If the port is closed, it will also respond with an abort chunk.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=213)** Now, this is a more advanced scan with additional benefits.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=219)** First of all, it's not as obvious a port scan as the INIT scan.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=224)** Also, there might be non-stateful firewall rulesets that block INIT chunks, but not COOKIE ECHO chunks.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=233)** The downside is that an SCTP COOKIE ECHO scan can't differentiate between open and filtered.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=242)** However, it can be useful in some situations, for example, when combined with other techniques or when trying to observe certain behaviors from a target.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=254)** Now let's test your knowledge.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=257)** Review how SCTP INIT and COOKIE ECHO scans can gather system information while evading detection.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=266)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Statistics]] (1)
> **Env Vars:** sctp (12), init (12), cookie (8), echo (8), ack (4)
> **Prerequisites:** setup (3)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using SSDP for discovery](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=0)** - [Instructor] Simple Service Discovery Protocol, or SSDP, is a protocol that enables clients to discover network services, with minimal configuration.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=12)** In this segment, we'll learn how SSDP can be used for passive discovery of network devices.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=21)** In today's internet of everything, all types of devices, routers, phones, cameras, and servers are connecting to the internet.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=32)** A self configuring network enables devices to join, leave, and learn about other devices.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=41)** First, let's talk about the concepts that help devices find one another, Universal Plug and Play, or UPNP, and Simple Service Discovery Protocol, or SSDP.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=57)** Universal Plug and Play is a framework that provides discovery and advertisements so that the network is aware of what services and devices are available.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=69)** SSDP enables clients to discover network services.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=75)** Universal Plug and Play-capable devices or programs send a notification message at regular intervals to announce their services.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=86)** When sharing information using SSDP, you'll commonly see the following.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=92)** M-SEARCH is a multicast from a Universal Plug and Play client that wants to discover available services on a network.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=103)** NOTIFY is also a multicast that announces what services are available.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=110)** So that we can better understand how SSDP works, I'd like to show you, in [[Wireshark]], some of the information that SSDP provides for passive discovery of network devices.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=124)** If you'd like to follow along, go to [cloudshark.org](https://cloudshark.org), and then once you're there, we'll go to Export, Download File, Download the original file, and open it in Wireshark.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=139)** Now, once here, I'll filter by SSDP.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=146)** Here, we see quite a few packets.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=149)** I'd also like to do a flow graph.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=152)** Now we'll go to [[Statistics]] and Flow Graph, and we'll limit it to display filter.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=159)** And here, we see some notifies, along with M-SEARCH.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=164)** Now, in this network communication, we see that SSDP packets are sent via multicast using HTTP over UDP.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=175)** Now, I'll close this.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=178)** I also want to follow the stream, so we're going to select one of the notifies, right-click, and say Follow, UDP Stream.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=188)** Now, once here, this is where we can see the information that the devices are sharing.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=195)** I'll go right here to LOCATION, I'm going to highlight this.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=199)** The location is where the device can download and provide information about the services, such as what's the manufacturer, even the icon that should be displayed on the file system.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=213)** Now I'll also look here at the server, and I'll select this right here.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=219)** I'll copy that, and then I'll do a quick search.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=225)** And here, we see that that device is a Wireless N Gigabit Router.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=230)** So, as we can see, during the discovery phase, we can learn a lot about the devices on our network by examining the SSDP transactions.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=242)** Now let's test your knowledge.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=245)** Explain how SSDP can be used for passive discovery of network devices.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=251)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Statistics]] (1)
> **Env Vars:** ssdp (11), search (2), udp (2), upnp (1), notify (1)
> **UI Navigation:** go to (3), right-click (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (1)
> **URLs:** [cloudshark.org](https://cloudshark.org) (1)
> **Exercise Files:** download the (1)
> **Analogies:** such as (1)

#### [Optimizing scans with Nmap Script Engine](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=0)** - [Instructor] On its own, [[Nmap]] provides an exceptional ability to scan networks.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=6)** In this segment, we'll learn how we can use Nmap Scripting Engine to streamline and power up our scanning results.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=16)** Nmap is a powerful network scanner.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=19)** However, to make scanning more efficient, we can use pre-configured scripts during an [[Ethical Hacking]] exercise.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=28)** Let's talk about how this works.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=32)** A script is a short program that could be used to automate a process.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=39)** Nmap Scripting Engine scripts are a core component of Nmap that allows users to customize and automate the scanning process.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=50)** The team can use scripts to achieve the following.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=54)** We can detect software versions and then once detected, attempt to brute force the service.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=62)** Determine vulnerabilities, and then take steps to exploit the vulnerability.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=68)** Uncover malware such as Trojans and backdoors.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=73)** To use an Nmap script type the following.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=78)** nmap --script <name of script>.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=82)** Scripts are grouped into several different categories, and those include malware.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=88)** These are scripts capable of detecting a variety of different types of malware.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=94)** Discovery are scripts that can discover network services and hosts.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=100)** Vulnerabilities can test for vulnerabilities on a host.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=106)** Nmap has a full library of scripts.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=110)** You can find them here by visiting the online Nmap guide.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=115)** Now, once here we can see the wide range of scripts that are available.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=123)** We can also see some examples along with a list of script categories.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=132)** I'd like to show you an example.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=134)** I'm here in Zenmap, which is the [[Windows]] version of Nmap, and I use the following script.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=141)** Here we can see the script as follows.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=144)** Now this script performed a basic banner grab on scanme.[nmap.org](https://nmap.org), which is a site that we can use for testing scans.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=154)** And here we see the output as follows.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=159)** Using Nmap scripts provides flexible options when scanning.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=164)** For example, you can use more than one script in a command.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=168)** You'll just need to use a comma between each script.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=173)** And for a more powerful option, you can run all scripts in a category.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=180)** For example, I'm back in Zenmap, and here I run a scan on scanme.[nmap.org](https://nmap.org), which checks for all the vulnerabilities.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=193)** And here we can take a look at the command.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=197)** Now I'll scroll down, which you can see it ran a thorough check of all the vulnerabilities.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=206)** Now keep in mind, using this option will run multiple scans and will most likely take a while.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=214)** In addition, the scanning can either cause a system to crash and or create excessive network congestion.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=222)** As a result, you'll need to evaluate whether running an intrusive scan is appropriate for the environment.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=231)** Now, let's test your knowledge, explain how we can use Nmap Scripting Engine to streamline and power up our scanning results.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=241)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (14), [[Ethical Hacking]] (1), [[Windows]] (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [nmap.org](https://nmap.org) (2)
> **UI Navigation:** scroll down (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)


### 4. Determining Operating Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Fingerprinting the OS](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=0)** - [Narrator] Prior to launching an attack, the team must determine the operating system in use.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=6)** In this segment, we'll learn how fingerprinting and banner grabbing can determine the operating system and provide information on services that are running.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=18)** While scanning, identifying the operating system in use can provide valuable information on any security vulnerabilities that exist, so we can launch a more effective attack.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=31)** Two techniques commonly used to determine the operating system are banner grabbing and fingerprinting.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=39)** Both are used in the initial stages of a [[Cybersecurity]] assessment, commonly during reconnaissance and enumeration.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=48)** While the two techniques are somewhat related, they serve different purposes and use different methods.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=55)** First, let's talk about how banner grabbing works.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=60)** Banner grabbing is used to identify the details of a particular service or operating system running on a server.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=68)** This is achieved by establishing a connection to a server and then capturing or grabbing the response.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=76)** The response commonly includes a banner that displays information about the software, its version, and other details.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=86)** I'm hereat [nmap.org](https://nmap.org), where we see an example from an [[Nmap]] script that we can use to grab a banner.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=94)** If we were to connect to an FTP server, it might yield this banner as shown in the script output.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=102)** Now, let's talk about fingerprinting, which is used to determine the specific type and version of an operating system or service running on a remote server.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=113)** This can be done using either passive fingerprinting, which analyzes network traffic to gather information on the host or active fingerprinting, which sends specially crafted packets to the target.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=129)** It then analyzes the response, which can hint at or reveal the underlining operating system or service that is running.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=139)** Fingerprinting can often determine the operating system or service type, even if banners have been altered or are misleading.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=147)** Now, keep in mind when using Nmap, this is just a guess and you can learn more about understanding an Nmap fingerprint here at [nmap.org](https://nmap.org).
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=160)** Here is the key difference.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=162)** Banner grabbing relies on the responses from the host, whereas fingerprinting analyzes the behavior or characteristics of the traffic to make an educated guess about the system or service.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=179)** Now, let's test your knowledge.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=181)** Explain how banner grabbing and fingerprinting can determine the operating system and different services that are running.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=190)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (5), [[Cybersecurity]] (1)
> **URLs:** [nmap.org](https://nmap.org) (2)
> **CLI Commands:** make (1)
> **Env Vars:** ftp (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Using Wireshark for OS discovery](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=0)** - [Instructor] In addition to active operating system discovery, the team can leverage passive techniques to determine the target's operating system.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=10)** In this segment, we'll learn how [[Wireshark]] can capture identifiers to help discover the operating system in use.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=19)** Passive operating system discovery can be done by using Wireshark.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=25)** The team can launch a packet capture and monitor the traffic for various identifiers that appear in unencrypted protocols.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=34)** Two protocols that can provide information are the browser protocol and HTTP.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=42)** Let's talk about each of these.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=45)** One protocol that shares information about devices and services on the network is the browser protocol, which collects and shares the work groups, domains, and servers on the network.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=59)** The browser protocol operates on top of Server Message Block, which is a network communication protocol used for sharing files, printers, and various resources among computers on a LAN or over the internet.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=75)** I'd like to show you an example in Wireshark.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=78)** If you'd like to follow along, open Browser Protocol.pcapng, which you'll find in the Exercise folder.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=86)** Now, in the capture, there's a single announcement, so we can take a look at the information that you can see.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=94)** Now I'll expand this, and here we see Server Message Block.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=97)** And then I'll drop down [[Microsoft]] [[Windows]] Browser Protocol, and I'll scroll down here.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=103)** Now, looking at the packet details, we can see that the host name is RECORDING-PC, and here we see the Windows version is [[Windows 10]].
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=114)** And it tells us about the server type, which here, I'll select that.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=118)** And it shows us that this is a server.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=122)** So as you can see, the browser protocol is plainly sharing information that could be used to launch an attack.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=131)** Another method of discovery is looking at HTTP headers.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=137)** HTTP is a stateless protocol and contains information in the headers that act like a handshake.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=145)** This helps the server and the browser provide the best way to present the requested information.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=153)** For this example, we'll look at HTTP Header Information.pcapng, which is also found in the Exercise folder.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=163)** For this capture, I went to some webpage and captured some HTTP traffic, and I'll select one of the packets, right click, and say Follow the TCP Stream.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=175)** And I'll move that up.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=176)** Now, up here at the top, this is from the client, and then down below this would be the server information.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=185)** So one thing we can take a look at here, and I'll just highlight this, it's called User Agent.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=192)** Now the User Agent header identifies the application requesting the information from the server, which is typically a browser.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=201)** Now, to determine the browser in use, go to this site, where then you'll copy and paste the user agent string in the field and then select analyze, and I did, and you can find out it provides additional information about the user agent.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=218)** And then down below, we see for the server right here, the server is nginx, which is a lightweight version of Apache.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=228)** So without any scanning, we can conduct passive operating system discovery just by looking at various indicators while sniffing and/or capturing traffic.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=240)** Now let's test your knowledge.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=243)** Explain how Wireshark can capture identifiers to help discover the operating system in use.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=250)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), [[Windows]] (2), [[Microsoft]] (1), [[Windows 10]] (1)
> **Env Vars:** http (5), lan (1), recording (1), tcp (1)
> **CLI Commands:** find (2), nginx (1), apache (1)
> **Definitions:** is a  (4)
> **UI Navigation:** scroll down (1), go to (1)
> **Speakers:** - [instructor] (1)

#### [Employing IPv6 fingerprinting](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=0)** - [Instructor] In addition to standard scans, the team can use IP version six when probing the network to determine the operating systems that are in use.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=11)** In this segment, we'll learn how IP version six fingerprinting can help identify the operating system and open services on the target.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=22)** When using [[Nmap]], IP version six fingerprinting is pretty much the same as when scanning with IP version four.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=31)** To scan with IP version six, you would use the dash six option.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=37)** Now at a high level, the technique is the same.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=41)** Nmap sends a series of probes with the goal of receiving enough information back to determine the operating system along with listening services.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=52)** The differences are in the specific probes Nmap uses and in the way they are matched.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=60)** What I'd like to do is talk about a few specific features, and then show you the probe in [[Wireshark]].
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=67)** To follow along, open IP version six probe Nmap.pcapng, which you'll find in the Exercise folder.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=77)** Now because there's multiple errors, I'll remove the coloring rules right here.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=83)** So first, let's hop out to the Nmap book, where we can see the types of probes that are used during discovery when using IP version six, and I'll scroll down.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=96)** Now the benefit of using IP version six is that there are a few IP version six-specific features, and that includes the use of ICMP version six, which I've highlighted a couple here, and one of those is called a node information query.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=115)** Now this query will ask a target for its host names, IP version four addresses, as well as IP version six addresses.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=127)** So once in Wireshark, I'll filter just to see that node information query.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=132)** And here we have that it is a type 139.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=136)** And we see that there are three of those.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=139)** Now the target might not respond, but Nmap will still send it in hopes of getting a response.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=147)** The next type I'd like to show you is an ICMP version six echo, and this is the second one.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=154)** Now this is an unusual probe.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=157)** It has an echo request with a type 128, and a code of zero.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=163)** And the ICMP version six ID is ABCD.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=168)** And the sequence is one.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=170)** And there is no data payload.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=173)** But what makes this probe interesting is that it uses faulty extension headers, and I'll just go here to show you that there are four of them, and they're hop-by-hop, destination options, [[Routing]], hop-by-hop.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=191)** Now we'll go back into Wireshark, and in this case, we're going to go down to the expert information.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=198)** And once you open that, you'll see Wireshark recognizes this as an error.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=203)** The second error shows us that IP version six hop-by-hop extension header must appear immediately after the IP version six header.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=214)** And we'll right click and apply as a filter to take a look at those errors.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=219)** And again, it's clearly an error.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=223)** I'm going to close that.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=226)** I'll go back to the expert information, and there's also another one that Wireshark recognized as an error.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=233)** Right here it says, under Note, routing header is deprecated.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=237)** And again, I'll apply as a filter.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=239)** Now we know that certain types are deprecated, in this case, it was recognized as an error.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=247)** So the last thing I'd like to show you is that when using IP version six, we might identify where the firewall is not blocking ports, because the access control lists are not in sync for IP version four and IP version six.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=263)** For example, I ran a scan using IP version four and IP version six on scanme.[nmap.org](https://nmap.org).
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=272)** Now here we see that I was able to get through port 9929 using IP version four, but not in IP version six.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=283)** So in that case, you'd want to address that issue.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=287)** So in some cases, it's worth using an IP version six scan when assessing the network.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=295)** Now let's test your knowledge.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=297)** Describe how using IP version six fingerprinting can help identify the operating system and open services on the target.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=307)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (7), [[Wireshark]] (5), [[Routing]] (2)
> **Env Vars:** icmp (3), abcd (1)
> **Definitions:** is an  (2), is called (1), is a  (1)
> **CLI Commands:** node (2), find (1)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Ports:** port 9929 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)

#### [Harnessing the TTL value](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=0)** - [Lecturer] The Time to Live value in an IP header can be used to help determine the operating system.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=7)** In this segment, we'll learn how [[Nmap]] uses the Time to Live value to make a best-guess effort as to the target's operating system.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=18)** Nmap sends probes to identify the operating system based on specific behavior from the target system.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=27)** A few of the values used in determining the operating system includes the window size in a TCP header, along with the Time to Live value in an IP header.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=40)** First, let's talk about what the field value, Time to Live, means in an IP header.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=48)** Time to Live represents the number of hops or routers the packet can take along its journey.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=56)** Every time it passes through a router, it's decremented by one.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=61)** Now, this is to prevent the packets from endlessly circling the globe to find their final destination.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=69)** Here, we see a Time to Live value in an IP version 4 header.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=75)** And in an IP version 6 header, the Time to Live value is called Hop Limit.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=81)** They're both the same things.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=84)** Now, the Time to Live value is not predetermined according to the RFC, instead, the value will differ according to the operating system.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=95)** Some common values are as follows.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=99)** For [[Linux]], it's 64 hops, [[Windows]], 128 hop, and Cisco routers, 255 hops.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=111)** I'd like to show you an example of an active operating system scan in [[Wireshark]].
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=117)** If you'd like to follow along, you can download activeosfingerprinting.pcapng, here, at [chrissanders.org](https://chrissanders.org).
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=128)** Chris Sanders is a very good author who has written books on Wireshark.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=133)** You'll select this file, and I've opened it up in a new tab, and here you'll select View raw.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=141)** Now I've downloaded it and opened it in Wireshark, and once there, I'll take off the coloring rules.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=149)** Now, once here, we can see that this is a scan.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=152)** So we can see it better, let's do a flow graph.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=155)** We'll go to [[Statistics]], and then to Flow Graph.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=160)** We see that the host at .128 has sent several probes out to host .150, and is waiting for responses.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=170)** Nmap collects the information that the target returns.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=175)** Nmap then makes a best-effort guess as to what kind of operating system is in use.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=182)** Now, whenever you do techniques to determine the operating system, they should be on the same network as the target machine, as the return packets should not cross any routers, because the Time to Live value will be altered.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=197)** In addition, these probes don't always work, as the tool might not be able to identify the operating system, but Nmap will give it its best shot.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=209)** Now let's test your knowledge.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=211)** Outline how Nmap uses the Time to Live values received from the target host to make a best-guess effort as to the target's operating system.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=223)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (6), [[Wireshark]] (3), [[Linux]] (1), [[Windows]] (1), [[Statistics]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** tcp (1), rfc (1)
> **Versions:** version 4 (1), version 6 (1)
> **URLs:** [chrissanders.org](https://chrissanders.org) (1)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)

#### [Mapping the network using Nmap](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=0)** - [Instructor] The Ethical Hacker has numerous scanning tools available for network discovery.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=6)** In this segment, we'll learn how [[Nmap]] can provide detailed information during host discovery, and review some common scans and options.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=17)** Nmap, or [[Nmap|Network Mapper]], is a popular tool that can find live hosts, identify listening services, and evade [[Intrusion Detection]] systems.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=30)** Nmap has a ton of scans, options, and scripts.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=34)** A helpful reference that lists options can be found here, at [nmap.org](https://nmap.org).
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=41)** Let's talk about some common scans.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=44)** Now, keep in mind, as we go through these, when using Nmap, you might need to run as administrator for certain scans.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=52)** Some scans include the following.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=55)** A ping scan, or host discovery scan, sends ICMP ECHO requests, or ping packets, to determine if network hosts are live and responding.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=67)** A TCP SYN scan, or half-open scan, sends a SYN packet to each target port.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=74)** If the target port responds with the SYN ACK packet, this means that the port is open.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=81)** Because it doesn't fully connect with the target, it's a stealthier scan.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=87)** The TCP full connect scan is when the scanner attempts to establish a full connection using the TCP three-way handshake.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=97)** An intense, or aggressive, scan is a comprehensive scan that includes version detection, operating system detection, script scanning, and trace route.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=111)** Nmap also has several options to enhance your scan.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=115)** For example, the -v, that provides verbose output.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=121)** Or -T, this is a timing option, where -5 is faster.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=129)** When using Nmap, we enter the command as follows, nmap, options, and then the target host name or IP address.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=139)** And we can even save the output to a text file by using this command.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=146)** Nmap will let you know the status as it searches.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=149)** For example, here we have a standard ping scan.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=154)** When scanning, Nmap will commonly identify the [[NIC]] vendor.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=159)** Now, this could be helpful, as some NIC cards have vulnerabilities.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=164)** The information comes from a plain-text file, and is easily searchable as well.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=170)** Let's see how this works.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=173)** I've entered the first six digits of a MAC address, which represents the organizationally unique identifier, and I'll select Search.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=183)** And here, we see that the company is Cisco.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=187)** Now, once Nmap knows the NIC vendor, it can help identify a possible network device, such as a Cisco router.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=196)** Now, we know it's called Nmap, or Network Mapper, however, Nmap doesn't natively create a map, as it's a command-line tool.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=206)** For a graphical user interface, use Zenmap, the sister product that has all the functionality of Nmap, and provides a rich, interactive experience.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=218)** Zenmap will identify the topology and create a map.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=222)** Let's take a look.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=224)** I'm in Zenmap, and I ran a scan, and we go to the Topology tab.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=230)** And this is an example of what you might see after scanning your network.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=236)** Now here, I did a scan on scanme.[nmap.org](https://nmap.org), and this shows a trace route of scanme.[nmap.org](https://nmap.org).
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=245)** Now, this can be very helpful in identifying the hops from you to the target.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=252)** For a quick demonstration of scanning a site, we'll take a look at this website, and I put in [example.com](https://example.com), which is a site we can scan.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=262)** And I'll say I'm not a robot, and do a QUICK NMAP SCAN.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=269)** And here, we see the results.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=272)** Now let's test your knowledge.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=274)** Discuss how Nmap can provide detailed information during host discovery, and review some common scans and options.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=283)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (18), [[NIC]] (3), [[Nmap|Network mapper]] (2), [[Intrusion Detection]] (1)
> **Env Vars:** tcp (3), syn (3), nic (3), icmp (1), echo (1)
> **Definitions:** is a  (4), means that (1), is an  (1)
> **URLs:** [nmap.org](https://nmap.org) (3), [example.com](https://example.com) (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)


### 5. Moving through the Network

[↑ Back to Table of Contents](#table-of-contents)

#### [Generating less noise](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=0)** - [Instructor] Scanning a network can generate a great deal of traffic.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=4)** In this segment, we'll outline methods to quietly scan and avoid detection by [[Intrusion Detection]] systems and firewalls.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=14)** First, let's talk about two security devices commonly found on a network.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=21)** A firewall is a security device or software application designed to filter traffic.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=28)** A firewall will either allow or deny traffic based on a set of rules.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=34)** Intrusion detection systems, intrusion prevention systems are security appliances that monitor networks for unusual or suspicious activity.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=45)** Scans are often described as noisy as they generate a significant amount of traffic.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=52)** And have a recognizable pattern that can be picked up by intrusion detection systems and firewalls.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=61)** To avoid being dropped by a firewall or setting off an alarm, the team will most likely conduct scanning activities in stealth mode.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=71)** Let's talk about some options.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=74)** Stealthy techniques use scans designed to avoid detection.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=79)** Techniques include the following, we can use slow scans.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=85)** Instead of scanning ports or systems rapidly, the scan is spread out over a longer period, making the scan harder to detect.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=95)** Strobe mode quietly checks a few ports at a time.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=100)** The team can enlist the help of an innocent bystander or zombie and use an idle scan to send packets through the network, making the scan harder to trace.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=113)** And to discover the details of an internal network that's protected by a firewall, the team can use firewalking, which uses a combination of traceroute and port scanning.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=126)** We can also manipulate packets.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=129)** We can use inverse TCP flag scans that include the Xmas tree, FIN, and NULL scans, which are many times harder to detect.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=140)** We might modify packets by fragmenting, crafting, and randomizing the order of packets to spoof network defenses.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=150)** The team can also use spoofing and concealing.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=154)** We might want to spoof the Mac and IP addresses to hide the source of the scan.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=161)** We can use proxies during scanning, which will enable the team to move through a network without fear of being identified.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=171)** Anonymizers can also be used during [[Ethical Hacking]] to protect the identity and location of the team.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=181)** Now, let's test your knowledge.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=183)** Outline methods to quietly scan and avoid detection by intrusion detection systems and firewalls.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=192)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (4), [[Ethical Hacking]] (1)
> **Env Vars:** tcp (1), fin (1), null (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the idle scan](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=0)** - [Instructor] In order to be totally in stealth mode, the team can use the idle scan.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=6)** In this segment, we'll learn how the idle scan uses an innocent bystander or zombie to send packets to a target, which makes the scan harder to trace.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=20)** The idle scan is a clever way to be in total stealth mode.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=24)** However, the idle scan is more complex than other scans.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=30)** With an idle scan, we're scanning a target via a third party or zombie host.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=37)** The first step is to find a suitable zombie.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=42)** This is done by initiating contact with a potential zombie.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=47)** If the zombie increments the IP header identification field, then the zombie is a good target candidate for the scan.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=57)** Let's step through what happens during an idle scan.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=62)** First, the team will send a TCP SYN-ACK to the zombie on a port that we expect to be closed.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=70)** Now, this is done in order to obtain the IP header ID.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=75)** Now, because the zombie is not in a conversation with us, the zombie will send a reset.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=82)** Once we get the reset, then we'll note the identification field value in the IP header.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=90)** For example, here we see the value as 27694.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=96)** Next, we'll send a TCP SYN packet to the target using the zombie's IP address.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=105)** Now, if the port is open on our target, it will return a SYN-ACK to the zombie.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=112)** And because the zombie never sent something, it will send a reset and the IP ID will increment by one.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=121)** If the port is closed on our target, our reset will be sent to the zombie.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=127)** The zombie will discard the packet and the IP ID will not change.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=134)** The third step is to repeat the first step and send a SYN-ACK to the zombie and wait for the reset.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=141)** We'll then check the ID field in the IP header.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=146)** If the ID field header is incremented by one, we assume that the reset was sent and the target port is closed.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=155)** If the zombie's IP ID field is incremented by two, we assume that the port at the target is open.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=164)** Although using simple math in determining whether a target port is open sounds like a great idea in concept, the idle scan is difficult to accomplish for a number of different reasons.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=178)** Most modern operating systems are immune from being used in this type of attack, so finding a suitable zombie can be difficult.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=188)** The zombie must truly be idle in that there can't be any other interactions with other machines.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=196)** A stateful firewall between you and your zombie machines will most likely block suspicious SYN-ACK packets without a previous initialized connection.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=208)** And the last thing is that the IP ID is only mandatory if fragmentation is allowed, and in some cases, the ID field is set at zero.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=223)** Now let's test your knowledge.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=225)** Explain how the idle scan uses an innocent bystander or zombie to send packets to a target, which makes the scan harder to trace.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=237)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** syn (5), ack (4), tcp (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Firewalking the network](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=0)** - [Instructor] Many times to gather information about the network, the team will encounter a firewall.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=7)** In this segment, we'll learn how Firewalking can help discover the details of an internal network that's protected by a firewall.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=16)** On any network, you'll commonly find security devices that protect and defend the network.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=24)** In most organizations, a firewall is used as a first line of defense.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=30)** A firewall is designed to filter traffic and will either allow or deny traffic based on a set of rules.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=38)** Many times, on an enterprise network, the firewall is built into a router.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=44)** When scanning the network, the team can use Firewalking to see what traffic can pass through a device.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=51)** Firewalking creates specially crafted packets to determine the hop count or distance to a target machine.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=60)** By using a combination of tracer route and port scanning, the team can potentially discover firewalls, routers, and network devices that will prevent a probe from reaching the target.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=75)** to gather information, Firewalking exploits the time to live value in an IP header and waits for an error message.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=84)** Let's outline how the time to live value works.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=88)** Every IP packet that is sent over a network has a time to live value in the header.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=96)** This value is decremented by one each router it passes through.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=102)** When the time to live value reaches zero, the packet is dropped, and an ICMP time exceeded message is returned to the sender.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=113)** As shown in the graphic, the scanner sends probes out, each with a time to live value that is one more than the previous probe.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=122)** Eventually, reaching the target.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=126)** By monitoring the responses, the team can infer which ports the firewall will allow and what ports will be blocked.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=135)** If no responses received, it means that the packet either made it through the firewall or was dropped by the firewall.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=144)** For example, I'm here at [Kali.org](https://Kali.org) where we can see an example of some of the responses returned by the Firewalk tool.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=154)** The team can conduct fire walking in one of several ways.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=159)** You can use tracer route on a Unix [[Linux]] system, tracer on a [[Windows]] system, or use the Firewalk tool available on Cali Linux.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=172)** Now, let's test your knowledge, describe how Firewalking can help discover the details of an internal network that's protected by a firewall.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=183)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Windows]] (1)
> **CLI Commands:** find (1)
> **URLs:** [kali.org](https://kali.org) (1)
> **Env Vars:** icmp (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Implementing stealth scans](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=0)** - [Instructor] To avoid being dropped by a firewall or setting off an alarm, the team will most likely conduct scanning in stealth mode.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=9)** In this segment, we'll outline what makes inverse TCP flag scans harder to detect.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=17)** There are several stealth scans that we can use to avoid detection.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=22)** The TCP SYN, or half-open scan is the original stealth scan.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=28)** However, there are other scans the team can use to avoid detection.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=33)** Inverse TCP flag scans are designed to circumvent firewall rules and gather information on open ports without fully connecting with the target.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=45)** The scans are called inverse as they are opposite of how TCP flags are normally set, and include the Christmas tree, FIN, NULL, and Maimon scans.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=58)** Let's talk about how each one of these works to avoid detection.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=63)** The Christmas tree scan will set the FIN, PSH, and URG flags in the TCP header, which lights up the packet like a Christmas tree.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=74)** A FIN scan will send a FIN packet to the target port.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=79)** A NULL scan won't have any TCP flag set.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=84)** And with the Maimon scan, the scanner sends a TCP ACK packet with the FIN flag set to the target port.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=93)** When using inverse TCP flag scans, [[Nmap]] will indicate the state as follows.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=101)** If there's no response, the port is either open or filtered.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=107)** If the target returns a reset, the port is closed.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=112)** If the target returns an ICMP unreachable error, the port is considered to be filtered by a firewall.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=120)** Here are some things to consider when using these scans.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=125)** The scans can't always distinguish open ports from filtered ones.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=130)** For example, if an ICMP destination unreachable error is returned, we know that a port is filtered, but most filters will drop suspicious probes without any response making the ports appear open.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=147)** Since NMAP cannot be sure which one is the case, it marks any non-responsive ports as open filtered.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=156)** With a FIN scan, closed ports should send back a reset.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=161)** However, a [[Windows]] machine will send a reset regardless of the port state, so a Windows machine is not susceptible to this type of scan.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=172)** In addition, some scans, for example, the Maimon scan won't work on a newer operating system.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=179)** Because inverse TCP FLAG scans use flags to probe systems in ways that most TCP/IP implementations don't expect, it may be able to stay under the radar of an [[Intrusion Detection]] system or firewall.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=197)** However many newer devices are tuned to recognize the signature of these scans.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=203)** That is of course, if they're properly configured, so it might be worth a try to see if you can move through the network undetected.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=215)** Now, let's test your knowledge.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=217)** Describe what makes inverse TCP flag scans using the Christmas tree, FIN, NULL, and Maimon scans harder to detect.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=228)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (2), [[Windows]] (2), [[Intrusion Detection]] (1)
> **Env Vars:** tcp (11), fin (7), null (3), nmap (2), icmp (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 6. Avoiding Detection

[↑ Back to Table of Contents](#table-of-contents)

#### [Manipulating packets](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=0)** - [Instructor] The goal when scanning is to move through the network quietly and gather information on the target.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=7)** In this segment, we'll learn a variety of ways to manipulate packets, such as: fragmenting, crafting, and randomizing the order of probes to avoid detection.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=19)** It's rare to use only one method when scanning.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=23)** Today, there is a wide variety of scanning techniques available.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=28)** Packets can be manipulated and used as part of a planned attack to: discover live hosts, determine network topology, detect firewalls, and fingerprint the operating system.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=43)** Let's talk about some of the ways to manipulate packets.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=48)** One method is to randomize the order of probes.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=52)** To make scans less obvious, you can randomize the probes sent out onto the network.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=58)** When you combine randomizing with slow scanning options, this can make it more difficult for devices to detect scanning activity.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=68)** The --randomize-hosts option in [[Nmap]] will randomize the order of hosts.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=75)** This option will shuffle groups of up to 16,384 hosts before scanning.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=84)** Another option is to use fragmentation.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=88)** In this case, the idea is to split up the TCP header over several packets to make it harder for packet filters and [[Intrusion Detection]] systems to identify what you're doing.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=102)** To use fragmentation, use the -f option, which causes the scan, including ping scans, to use tiny fragmented IP packets.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=113)** Let's take a look.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=114)** I ran a fragmented scan in Zenmap, and then I ran a capture in [[Wireshark]].
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=121)** To follow along, grab the capture Frag Scan.pcapng, which you'll find in the Exercise folder.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=129)** First, I'll run a flow graph so we can view the conversation and how the scan checked the ports.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=135)** We'll go to [[Statistics]] and then Flow Graph.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=139)** And here we can see the different ports that are checked: 443, 80, 21, 1720.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=147)** And there's about 1,000 ports which Zenmap checked.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=152)** Now I'll close that.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=154)** Now we'll look at the fragmented packets.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=157)** I've selected frame two, and it says Fragmented IP protocol.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=162)** Now we know that there are three here that have been fragmented.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=166)** And what we'll do is, I'll drop down the IP header, and we'll take a look at the identification field.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=173)** So here we see identification for all three are the same.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=180)** Now, keep in mind that this scan will only work if fragmentation is allowed.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=186)** Finally, let's talk about crafting packets.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=190)** Now, this involves modifying the packets' content, header, or field values to obtain specific responses or behaviors from the target system.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=202)** One app you can use is Nping.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=205)** This allows you to easily customize the values of most fields in common protocols, such as TCP, UDP, ARP, and ICMP.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=217)** For example, we can craft an ICMP packet by using the following command.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=223)** Now let's step through what this does.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=227)** This sets ICMP as the protocol to use.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=231)** And here, this sets the ICMP type and code.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=236)** This will set the source and destination IP addresses.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=241)** And this will set the ICMP identifier of the request packet.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=246)** And finally, a fun option is where you can modify the data string.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=253)** Now let's test your knowledge.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=255)** Outline ways to manipulate packets, such as fragmenting, crafting, and randomizing the order of probes to avoid detection.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=265)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1), [[Intrusion Detection]] (1), [[Wireshark]] (1), [[Statistics]] (1)
> **Env Vars:** icmp (5), tcp (2), udp (1), arp (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** such as (3), for example (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Spoofing and cloaking](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=0)** - [Instructor] Spoofing is done to conceal the identity of a malicious actor so they can either launch an attack or move through the network undetected.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=10)** In this segment, we'll review how we can use IP and MAC address spoofing to avoid detection or launch an attack.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=20)** Address spoofing conceals the identity and location of a malicious actor where the address appears to have come from another machine.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=29)** Techniques include spoofing an IP address or spoofing a MAC address.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=36)** First, let's talk about IP address spoofing.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=41)** An IP address uniquely identifies a host on a network.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=46)** Spoofing an IP address is achieved by crafting an IP header with a forged source IP address.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=54)** Now, generally this is done when there is no expectation of receiving a reply, as when the source IP address is spoofed, the message cannot be returned to the sender.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=67)** When scanning with [[Nmap]], you can use the -D or decoy option.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=73)** This will then launch an attack using bogus IP addresses instead of the actual address.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=81)** A malicious actor will commonly use this technique to conceal their true location.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=86)** If they don't spoof or conceal their IP address somehow, then we'll know exactly the location of the IP address.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=96)** Let's take a look.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=98)** If I'm receiving traffic from this IP address, I can go into Search, and then once there, we can see the geolocation and information about that IP address.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=110)** We see that it belongs to [[Google]], and if we scroll down, we can see information listing Google's addresses and the geolocation.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=122)** Now let's talk about MAC address spoofing.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=126)** On a [[Local Area Network (LAN)|local area network]], a device is identified by its MAC address.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=131)** MAC address spoofing changes or spoofs the MAC address on a [[NIC|network interface card]] to someone else's MAC address.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=141)** This will allow an attacker to intercept traffic to launch a man-in-the-middle attack.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=147)** Let's see how this works.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=150)** Here, you see a small network with several devices.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=154)** On the left, you see the IP address and MAC address of the attacker.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=159)** What you see crossed off was the attacker's MAC address, but the attacker has spoofed the MAC address to appear to be the same as Host A.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=171)** When traffic is delivered, Host A and the attacker will receive the data.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=178)** There are a number of different tools available to change your MAC address and a number of different software [[Microsoft Products|products]].
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=185)** I'm here at this website, where you can see one example of a MAC address changer.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=192)** However, if you do a search, you will come up with many different options to change your MAC address.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=200)** Now, let's test your knowledge.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=202)** Review how we can use IP and MAC address spoofing to avoid detection or launch an attack.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=209)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Nmap]] (1), [[Local Area Network (LAN)|Local area network]] (1), [[NIC|Network interface card]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** mac (14)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Employing proxies](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=0)** - [Narrator] Using proxies during scanning enables the team to move through a network without fear of being identified.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=9)** In this segment, we'll outline how proxy chaining can help conceal the team's IP address and location.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=18)** A proxy is someone who acts on your behalf.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=22)** For example, if you are in a legal battle, a lawyer would be your proxy, so you would not have to deal directly with the other entity.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=32)** Malicious actors use proxy servers to conceal their existence.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=37)** Proxy chaining uses a chain of proxy servers in a series to route network traffic.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=45)** Encrypting the traffic will conceal the contents of the packets.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=50)** The servers use Socket Secure, or SOCKS5, which provides the necessary authentication, so that only authorized users may access a server.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=63)** Proxy chaining is used to conceal a malicious actor's location and it makes it more difficult to trace the origin of the traffic.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=73)** The team can also use proxy chaining when scanning to stay anonymous.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=79)** There are several tools available, such as Proxy Switcher, Proxifier, and Proxy Workbench.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=87)** On [[Kali Linux]], you can use the ProxyChains utility, which will redirect connections through proxy servers.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=95)** Most of the time, you'll need to complete a few steps.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=99)** For example, install Tor along with ProxyChains, and then once done, you would issue a command, such as this one, which will use ProxyChains to scan the target and will output the following.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=115)** Now, let's test your knowledge.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=118)** Outline how proxy chaining can help conceal the team's IP address and location.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=125)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (1)
> **Analogies:** for example (2), such as (2)
> **Prerequisites:** you'll need (1), install (1)
> **Env Vars:** socks5 (1)
> **Speakers:** - [narrator] (1)

#### [Leveraging anonymizers](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=0)** - [Instructor] During an [[Ethical Hacking]] exercise, there are several tools that can be used to protect the identity and location of the team.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=9)** In this segment, we'll describe how anonymizers and censorship circumvention tools can help prevent exposure and gain access to restricted or blocked sites.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=22)** First, let's outline how the tools work.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=26)** Anonymizers are tools or services that are designed to provide [[Privacy]] when moving through a network.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=34)** Censorship circumvention uses various techniques, tools, or strategies to allow an individual to bypass or evade restricted sites.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=47)** One way to stay anonymous when moving through the network is by using The Onion [[Routing]].
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=53)** The Onion Routing, or Tor, is an open framework that encrypts and moves traffic within the Tor network.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=62)** Tor enables anonymous browsing, which allows participants to browse freely without fear of being tracked or having anyone identify their location.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=74)** Tor builds a circuit where each node, or Onion Router, in its path knows its neighbors but no one else.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=82)** Once in Tor, a path is chosen through the network.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=88)** You can learn more and download the browser here on the Tor website.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=93)** And I'll scroll down so you can see a lot of the features that Tor offers.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=101)** Two other tools the team can use are Alkasir and Tails.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=107)** Alkasir is a censorship circumvention tool designed to help users access blocked or censored web pages and content on the internet.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=118)** Alkasir employs various techniques, including: proxy servers, tunneling, and encryption.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=126)** Tails is a live operating system used for secure and anonymous web browsing and communication by routing traffic through the Tor network.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=137)** Tails doesn't leave any traces of activity or save any data locally, as it runs entirely from a USB drive.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=146)** Now let's test your knowledge.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=149)** Describe how anonymizers and censorship circumvention tools help prevent exposure and gain access to restricted or blocked sites.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=159)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[Ethical Hacking]] (1), [[Privacy]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** node (1)
> **Env Vars:** usb (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 7. Counteracting Scanning

[↑ Back to Table of Contents](#table-of-contents)

#### [Preventing scanning](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=0)** - [Instructor] Scanning is an information gathering method that identifies services and operating systems in use.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=9)** In this segment, we'll outline methods to defend your network against unauthorized scanning.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=16)** Scanning is a popular information gathering method.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=20)** Scanning can identify which ports are open and responding, along with the services that are running.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=27)** Scanning records how they respond to the queries to gather information on the target.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=34)** Once we have the information, the next step is to determine if any of the services are vulnerable.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=42)** This information can then be used to launch an attack.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=47)** Because the information may be used as a precursor to an attack, methods should be in place to prevent unauthorized scanning attempts.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=56)** Port scanning has an identifiable signature.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=60)** A firewall or host will respond to a port scan in one of three ways.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=66)** Open and listening.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=68)** Open means the host indicates a service is listening and will respond.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=73)** Closed means the host responds by denying connections to the port, meaning, I'm alive but I'm not talking to you.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=82)** No reply, well, in this case, the host is filtered, blocked, or quietly dropped the request and is in stealth mode.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=91)** Meaning, if you can't see me, you can't attack me.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=96)** Some next generation firewalls and intrusion prevention systems use adaptive behavior and that they block ports if a suspected port scan is in play.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=107)** In addition, alerts and alarms can be set to notify if they detect multiple connection requests on all ports from a single host.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=118)** Scanning is easy to do and most devices will experience a scan at some point.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=125)** It's ultimately a business's responsibility to protect against port scans.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=131)** Testing your own system is always a good idea.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=135)** For example, I'm in Zenmap and I ran a scan.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=138)** Now, we'll go to the ports and we'll see which ones are open.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=143)** And once you identify any unnecessary ports that are open, you can disable or block the ports.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=151)** You'll also want to tune your security devices.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=155)** On routers and firewalls, implement rate limiting to slow down the scanning process, which can discourage attackers and give the admin more time to respond.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=168)** On switches, use port security features to limit the number of Mac addresses allowed on a specific port.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=176)** This can prevent unauthorized devices from connecting to the network.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=182)** And other suggestions include, use firewalls to block unnecessary incoming and outgoing traffic.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=190)** Tune [[Intrusion Detection]] prevention systems to detect suspicious scanning activities and take action such as blocking the source IP or alerting administrators.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=203)** Properly segment the network using routers and VLANs to provide isolation and protection of the sub-networks.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=212)** And because vulnerabilities and outdated software can sometimes be detected with network scans, you should regularly update and patch, keep all systems, software and devices updated with the latest patches.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=229)** Now, let's test your knowledge.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=232)** Outline methods to defend your network against unauthorized scanning.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=238)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Detecting spoofing](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=0)** - [Instructor] Spoofing is done to conceal the identity of a malicious actor.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=5)** In this segment, we'll review best practice methods to detect spoofing and reduce the risk of an attack.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=14)** First, let's talk about spoofing.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=17)** A malicious actor will spoof their IP or MAC address to conceal their identity and location, and any traffic received will appear to have come from another machine.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=30)** Spoofing is dangerous, as many times, it's part of an attack.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=36)** If there is a suspicion that a machine may be spoofing a communication, you can use one of the following methods.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=45)** One method is using direct Time to Live probes.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=50)** The Time to Live, or hop limit, represents the number of hops or routers the packet can take during its journey.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=59)** A spoofed packet will have a Time to Live value set by the attacker, and if it differs significantly from the expected Time to Live value for packets to that destination, it's a good indication of spoofing.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=76)** In this method, a Time to Live probe is sent to the actual host.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=82)** We then compare the Time to Live with the suspect packet.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=86)** If the Time to Live in the reply is not the same as the packet being checked, it's a strong indication that the packet is coming from a spoofed machine.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=97)** Now, this technique is successful when the attacker is in a different subnet from the victim, and that's because, as it passes through a router, the time to live value will change.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=109)** Another method is using the IP identification number.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=115)** Now, in every IP header, there's an ID field, and for the most part, the ID field values will be predictable.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=123)** Let's take a look.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=126)** I'm in [[Wireshark]], and if you'd like to follow along, open the file IP ID.pcapng found in the exercise folder.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=137)** Now, when you're in here, there's only three packets, and they're all part of the same communication stream going in one direction.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=144)** So, what I've done is drop down the IP header, and here we can take a look at the identification field.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=151)** Here, it is 3844, 3845, and 3846.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=159)** When using this method, a probe is sent to the actual host, and then we compare the IP ID with the suspect packet.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=169)** If the IP ID and the reply are not near the value of the packet being checked, it's a strong indication that the traffic is being spoofed.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=179)** Now, this technique is successful even if the attacker is in the same subnet.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=185)** Now, this technique monitors the window size field in a TCP header.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=191)** So, how does this work?
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=193)** Well, the TCP header includes a window size field which is used to communicate the maximum amount of data the recipient can currently receive.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=204)** The value changes as the receiving host is able to accept more data, and will communicate a new window size with a [[Windows]] update message.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=214)** A zero window size means that the host can no longer receive traffic.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=221)** Now, if a host advertises a zero window size, the sender should not send any more data.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=229)** Therefore, one clue to detect spoofing is to return a crafted packet advertising a zero window size.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=238)** The attacker sending the spoofed TCP packets will not receive the target zero window size update and won't be responsive to change in the congestion window size.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=250)** When the target continues to receive traffic after advertising a zero window, this is a strong indication that the packets are spoofed.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=260)** So, now let's talk about best practices to reduce the risk from a spoofed IP address.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=267)** You should use cryptographic authentication methods, such as IPsec.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=273)** Monitor networks for atypical activity, for example, source IP addresses that don't match those on the organization's network.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=283)** This could be indicative of a malicious insider launching IP spoofing attacks.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=290)** And you'll also want to monitor for bogons, or bogus IP addresses on the network.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=297)** And to prevent MAC address spoofing, you can do the following.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=301)** Use ARP monitoring software.
>
> **[5:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=304)** This checks for duplicate MAC addresses.
>
> **[5:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=308)** And for switch security, you can employ dynamic ARP inspection.
>
> **[5:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=314)** Now, let's test your knowledge.
>
> **[5:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=316)** Review best practice methods to detect spoofing and reduce the risk of an attack.
>
> **[5:23](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=323)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1), [[Windows]] (1)
> **Env Vars:** mac (3), tcp (3), arp (2)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** such as (1), for example (1)
> **Best Practices:** best practice (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Draw a network diagram](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=0)** - [Narrator] Let's do a challenge.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=6)** But first, a little background information.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=10)** During an [[Ethical Hacking]] exercise, it's helpful to have a logical drawing of the network.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=17)** In this challenge, we'll create a network drawing.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=21)** You can use any tool such as Visio, [[Microsoft PowerPoint|PowerPoint]], or an online solution.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=27)** Now here's the simple network drawing.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=30)** Over on the right-hand side, you can see what I would suggest as far as components, but you can always add more.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=39)** When you're done, I have two questions for you to answer.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=44)** What are the ways you can use this network drawing, and what's the difference between a logical and a physical network drawing?
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=54)** This challenge should take you about 15 minutes.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=58)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Microsoft PowerPoint|Powerpoint]] (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Draw a network diagram](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=0)** - Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=8)** I wanted you to draw a simple network using some type of tool.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=12)** In my case, I found one online called Glyphy.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=16)** Now, once I got in here, I signed up for a free trial, and as you can see, there are 13 days left in my trial.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=24)** Now, this will allow me to show you how to do a simple drawing.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=29)** Now, as you can see, I've already added some of the components, internet, cable modem, router firewall, and switch.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=39)** I've also added a connecting tool right here, and we do need to add a couple more components.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=46)** Now in tools such as Glyphy, they have a number of library items that you can search for.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=53)** For example, I searched for server and it came up with those results.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=59)** Now, once you begin compiling your drawing, you'll see a little library of most used objects.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=65)** And in this case, I wanted to add a laptop, and I'll just pull this over here.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=71)** And it allows me to enter text and I'm going to put laptop.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=77)** And then I'll click outside, but now go back in and modify the text, so it is a larger font.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=86)** Here I'll add a computer, increase the font, and I'll modify the size, which you can do pretty easily by just shrinking it down.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=104)** And the last thing is a server.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=115)** Again, I'll modify the size.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=119)** All right, so now all of our devices are connected and we have a simple network.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=125)** I also had two questions for you, and I'll scroll down and we'll answer the two questions.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=132)** What are ways you can use a network drawing?
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=135)** Well, now there's lots of ways you could use a network drawing.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=139)** Of course, you might just want to visualize the data flow, but you also might want to see the attack vectors.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=146)** And you can use this to educate others as to the complexity of the network.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=152)** And it's also good for troubleshooting.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=155)** Now the second question is, what's the difference between a logical and a physical drawing?
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=162)** Well, a logical network drawing shows the data flow.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=166)** Now, this is something that if you wanted to add a device, you might want to look for potential bottlenecks.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=172)** And it's important that when you're doing an assessment as to where trouble may have occurred.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=178)** Now, a physical network drawing is a little different as it will show the physical layout of the devices in your organization.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=188)** Now, we use a physical drawing for things such as when you're experiencing electromagnetic interference and you want to pinpoint where that might be, you can then see the devices and which ones are close to a big piece of machinery, which could cause the interference.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=206)** So both logical and physical network drawings are valuable tools.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=211)** So that's it, and I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Analogies:** such as (1), for example (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)

#### [Next steps](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=0)** - [Lisa] Thank you for watching!
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=2)** [[Ethical Hacking]]: Scanning.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=5)** In this course, we explored scanning techniques and ways to obtain information from the target system, such as specially crafted packets, TCP flags, UDP scans, and ping sweeps.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=20)** I described methods to discover hosts, operating systems, and listening services on a network, and outlined several techniques to avoid detection.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=31)** We summarized with learning how to counteract network spoofing and scanning.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=38)** If you're interested in learning more, please check out the other courses in our library.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=44)** New content is added all the time.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=48)** If you're interested in learning more about packet analysis, check out my learning path, Improve Your [[Wireshark]] Skills.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=57)** If you're ready to continue your journey as an ethical hacker, be sure to watch the other courses in the series.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=65)** And you might want to see what my colleague Malcolm Shore has for you on his homepage.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=73)** Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Wireshark]] (1)
> **Env Vars:** tcp (1), udp (1)
> **Analogies:** such as (1)
> **Speakers:** - [lisa] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Network Monitoring Tools
- Ethical Hacking

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Footprinting and Reconnaissance]] | **3 of 19** | [[Ethical Hacking- Enumeration]] →

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