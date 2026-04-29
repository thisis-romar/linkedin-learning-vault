---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: protecting-your-network-with-open-source-software-21464358
url: "https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358"
duration_minutes: 166
duration: 2h 46m
level: Intermediate
updated: 7/18/2024
learners: 5086
skills:
  - Network Administration
  - Open-Source Software
  - Network Security Implementation
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF4Rqy_zT2XWg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719436460654?e=2147483647&amp;v=beta&amp;t=gBoEWy_qQGu8mqh--H3uHjovOPqjKaRbjEuNsYT5e-c"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Computer Forensics]]'
prev_courses:
  - '[[Wireshark- Malware and Forensics]]'
next_courses:
  - '[[Learning Autopsy for Digital Forensics]]'
path_nav: '[{"path":"Explore a Career in Computer Forensics","position":6,"total":9,"prev":"Wireshark- Malware and Forensics","next":"Learning Autopsy for Digital Forensics"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/network-administration
  - skill/open-source-software
  - skill/network-security-implementation
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Protecting%20Your%20Network%20with%20Open-Source%20Software.md)

![Protecting Your Network with Open-Source Software](https://media.licdn.com/dms/image/v2/D560DAQF4Rqy_zT2XWg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719436460654?e=2147483647&amp;v=beta&amp;t=gBoEWy_qQGu8mqh--H3uHjovOPqjKaRbjEuNsYT5e-c)

# Protecting Your Network with Open-Source Software

> Network protection is vital to organizations big and small, but it doesn't have to be an expensive proposition. In this course, Jungwoo Ryoo—a professor who teaches IT, cyber security, and risk analysis at Penn State—shows you how to protect your network with open-source tools that are completely free. Find out how to set up firewalls, investigate network traffic with a packet analyzer, detect thr

> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358) | 2h 46m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Protect your network with free and open-source software
  - What you should know
  - Environment setup
- [**1. Understanding Open-Source Software**](#1-understanding-open-source-software) (5 videos)
  - What is open-source software?
  - Open-source software in networking
  - Open-source solutions in cybersecurity
  - Open-source vs. commercial software
  - Costs and savings
- [**2. Firewalls**](#2-firewalls) (6 videos)
  - What is a firewall?
  - Host firewalls
  - Network firewalls
  - Static packet filtering vs. stateful packet inspection
  - Challenge: Disable UFW
  - Solution: Disable UFW
- [**3. Host as a Router**](#3-host-as-a-router) (10 videos)
  - Netfilter and iptables
  - Setting up a host firewall using iptables
  - Automating netfilter configuration
  - Understanding hosts as routers
  - Adding a network adapter
  - Testing the second adapter
  - Setting up IP forwarding
  - Changing netfilter settings: Part 1
  - Changing netfilter settings: Part 2
  - Testing the router
- [**4. Host as a Network Firewall**](#4-host-as-a-network-firewall) (10 videos)
  - Setting up hosts as network firewalls
  - Setting up a web server
  - Port forwarding
  - Testing port forwarding
  - Understanding one-legged DMZ
  - Understanding true DMZ
  - Understanding an application proxy firewall
  - Setting up Squid
  - Challenge: Fine-tuning the Squid configuration
  - Solution: Fine-tuning the Squid configuration
- [**5. Packet Analysis**](#5-packet-analysis) (7 videos)
  - What is packet analysis?
  - ARP poisoning example
  - Packet capturing with Wireshark
  - Exploring Wireshark's advanced features
  - Wireshark hands-on
  - Challenge: Filtering with IP addresses and port numbers
  - Solution: Filtering with IP addresses and port numbers
- [**6. IDSs and Vulnerability Assessment**](#6-idss-and-vulnerability-assessment) (8 videos)
  - What is an IDS?
  - Introducing Snort
  - Snort as a packet sniffer
  - Snort as an IDS: Establishing rules
  - Snort as an IDS: Detecting pings
  - What is a network vulnerability assessment?
  - Nessus
  - Network scanning with Nessus
- [**7. Logging and Monitoring**](#7-logging-and-monitoring) (6 videos)
  - Logging
  - syslog-ng
  - Log forwarding: Part 1
  - Log forwarding: Part 2
  - Kiwi
  - SNMP
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Protect your network with free and open-source software
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980&t=0)** - Network security breaches can cost organizations millions of dollars.
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980&t=5)** After all, if your network is down, it's difficult to get anything done.
>
> **[0:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980&t=9)** In this course, you'll explore how to make network security a top priority.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980&t=15)** I'll help you develop an overall understanding of fundamental network security concepts.
>
> **[0:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980&t=20)** Then I'll demonstrate essential tools you can adopt immediately at no cost.
>
> **[0:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980&t=27)** I'll teach you how to set up firewalls, analyze packets, conduct intrusion detection and prevention, and monitor your network.
>
> **[0:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980&t=36)** I'm Jung Ryoo, and I'm excited to share my knowledge I've gained as a professor, researcher and practitioner.
>
> **[0:44](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980&t=44)** If you're ready to protect your network with open-source software, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - network (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980&t=0)** - [Instructor] This course has no prerequisites.
>
> **[0:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980&t=3)** Basic knowledge in Linux operating systems will be helpful, but don't worry if you're not familiar with the Ubuntu Linux OS I use throughout this course.
>
> **[0:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980&t=16)** Any knowledge of networking is also beneficial.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980&t=19)** I'll explain what I'm doing without assuming any prior knowledge, and you shouldn't have any problems understanding my instructions.
>
> **[0:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980&t=31)** I did all the hands-on exercises in this course using VMware Workstation, however, you can use any virtual machine solutions or hypervisors to allow you to create virtual machines in virtual networks.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980&t=47)** At a minimum, you need two Ubuntu virtual machines and one Windows virtual machine.
>
> **[0:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980&t=55)** By the end of this course, you'll have a reasonable understanding of Linux and networking in general, in addition to learning how to protect your network with open source software.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Environment setup
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=0)** - [Instructor] Deploying virtual machines, or VMs, in a virtualization environment is relatively straightforward and out of scope for this course.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=11)** However, there are some subtle things you need to keep in mind to avoid potential dead ends.
>
> **[0:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=20)** I had to create two virtual subnets with the following subnet IDs.
>
> **[0:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=27)** 192.168.70.0/24 and 192.168.35.0/24.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=41)** The 192.168/24 network does not have direct access to the internet while 192.168.70/24 does.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=57)** The 192.68.35.0/24 network eventually gets connected to the internet through the Ubuntu router host.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=70)** Make sure that you change the network gateway of your Ubuntu host to 192.168.35.136, which is the internal network interface of the Ubuntu router host, so that the Ubuntu host knows how to get to the 192.168.70.0/24 network and the internet.
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=98)** Whenever you restart your Ubuntu router VM, the forwarding option is disabled by default.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=107)** Therefore, you need to enable forwarding each time by issuing the command echo 1 > /proc/sys/net/ipv4/ip_forward
>
> **[2:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=123)** If you don't want to use VMware workstation to try out the hands-on exercises, you can check out cloud solutions like Microsoft Azure or try a hypervisor like Proxmox, which is a dedicated operating system specializing in installing VMs on a local machine.

> [!info]- Semantic Content
>
> **Versions:** 192.168.70 (3), 192.168.35 (2), 192.168 (1), 192.68.35 (1)
> **Code Keywords:** interface (1), default. (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ip_forward (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding Open-Source Software

> [↑ Back to Table of Contents](#table-of-contents)

#### What is open-source software?
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=0)** - [Instructor] Source code refers to the lines of a computer program.
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=5)** Therefore, open-source literally means software whose source code is open to the public.
>
> **[0:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=14)** Open-source licensing allows users to modify or extend the existing code as long as they keep its new versions open-source.
>
> **[0:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=24)** Please note that being open source is not the same as being free of charge.
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=30)** Many vendors out there keep some or all of their product code open-source, but still sell their software with a price tag.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=42)** Nessus, which is a vulnerability management system, or VMS is a good example.
>
> **[0:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=48)** It started as an open-source project, but eventually evolved into a commercial product.
>
> **[0:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=55)** Luckily for us, most of the software applications featured in this course are both open-source and free.
>
> **[1:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=64)** Open-source software users need to accept the specific terms of a license.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=70)** There is no restriction on how you use your open source software, but some open source licenses require users to release their changes if they modify or extend the original code.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=87)** Others also require making the modified or extended code available free of charge.
>
> **[1:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=96)** The use of open source software and networking and network security is substantial.
>
> **[1:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=102)** One such example is Linux.
>
> **[1:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=106)** Many service providers use Linux to run their backend systems, such as web servers and base operating systems to host virtual machines.
>
> **[1:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=119)** The global open-source software market is growing fast.
>
> **[2:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=124)** Many major corporations are contributing to the open-source community.
>
> **[2:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=129)** Therefore, learning and mastering open-source options is critical for students and professionals who aspire to excel in networking or network security.
>
> **[2:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=143)** Open-source solutions are still relevant even if you're not an IT professional.
>
> **[2:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=150)** If you're a home user or small business owner who wants to strengthen your network security without a hefty price tag, you're taking the right course.
>
> **[2:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=160)** I'm thrilled to be your guide for an exciting journey throughout this course.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), public (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (2)
> **Env Vars:** vms (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Open-source software in networking
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=0)** - [Instructor] When you ask any computer networking professional if they use open-source software, they'll look at you as if you are an alien.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=11)** There are so many they're using daily.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=15)** To name a few, these range from operating systems or OSs, like Linux, to popular standalone applications, such as packet sniffers.
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=29)** I'm sure many of you're already familiar with Wireshark, a popular packet sniffing program.
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=38)** Most of the networking software comes prepackaged together with an OS.
>
> **[0:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=45)** On Microsoft Windows, ipconfig is such a program.
>
> **[0:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=51)** We'll be using it frequently to check the properties of a network interface card you see here.
>
> **[0:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=58)** The most basic information ipconfig provides is the Internet protocol, or IP address, that uniquely identifies a network device.
>
> **[1:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=71)** The equivalent open-source utility to ipconfig on Linux is ifconfig or its modern version called IP.
>
> **[1:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=81)** Now, you may ask why they use two different names for an almost identical functionality.
>
> **[1:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=89)** My answer to that is nobody knows.
>
> **[1:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=93)** But these subtle differences are what makes each OS unique and special with their own individual flavors.
>
> **[1:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=103)** These also mean job security for many of us.
>
> **[1:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=108)** We'll be using Ubuntu in this course, which is popular but doesn't include software like Wireshark by default.
>
> **[1:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=118)** Several Linux distributions, like Kali and SANS Investigative Forensics Toolkit, or SIFT, specialize in network security and network forensics with Wireshark pre-installed.
>
> **[2:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=134)** Installing well-known open-source software, like Wireshark, on Linux is straightforward.
>
> **[2:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=142)** Let's give it a try on Ubuntu.
>
> **[2:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=145)** Type sudo apt update.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=154)** To get the latest software package information, press Enter.
>
> **[2:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=161)** Type your password.
>
> **[2:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=168)** Next, type sudo apt install wireshark.
>
> **[2:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=175)** Press Enter.
>
> **[2:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=178)** Type Y, and press Enter.
>
> **[3:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=183)** Choose No here, and press Enter.
>
> **[3:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=190)** That's it. There's no need to make a purchase or anything.
>
> **[3:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=195)** You can also install other open source networking tools, like Nmap and Netcat free of charge.
>
> **[3:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=204)** There are too many open-source tools to mention here, but ifconfig, IP, Wireshark, Nmap, and Netcat already cover many grounds.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (2), apt (2), make (1)
> **Code Keywords:** interface (1), default. (1), let (1)
> **Env Vars:** sans (1), sift (1)
> **Prerequisites:** install (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Open-source solutions in cybersecurity
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=0)** - [Instructor] Many cybersecurity solutions are open source and free.
>
> **[0:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=6)** Hence, this course makes perfect sense and gets to exist.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=11)** Good for us.
>
> **[0:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=13)** The cybersecurity domains I cover include firewalls, packet and protocol analysis, intrusion detection and prevention, or IDS and IPS, vulnerability assessment, logging and monitoring.
>
> **[0:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=33)** iptables is what Linux uses to control the flow of data packets in and out of a host or network.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=43)** Any firewall implementations in Linux pretty much builds on iptables.
>
> **[0:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=50)** Knowing iptables is like unlocking the secret code of controlling network packets in general.
>
> **[1:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=60)** Wireshark is one of the most popular packet snipers and allows you to intercept packets and inspect them.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=70)** Many organizations use Wireshark to troubleshoot networking problems, test software, and develop protocols.
>
> **[1:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=79)** I recommend Snort as a great tool to start with when considering an IDS or IPS solution.
>
> **[1:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=89)** Snort is versatile and can take on packet sniffing, IDS and IPS tasks, depending on your needs.
>
> **[1:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=101)** Nessus is a vulnerability management system, or VMS.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=107)** It comes through systems throughout a network and identifies weaknesses, such as zero-day vulnerabilities.
>
> **[1:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=117)** For those of you unfamiliar with the term zero-day, it means a security vulnerability whose fix is not available yet and susceptible to attacks.
>
> **[2:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=130)** syslog and syslog-ng are a mainstream way of handling, logging, and monitoring.
>
> **[2:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=139)** Networking hardware and software generate log files, which in turn enables engineers to monitor their health and look for any signs of intrusion.
>
> **[2:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=152)** There are many software options and solutions other than what I'm covering in this course, but you'll get a good feel for what's available in general by following me along with the lessons.
>
> **[2:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=165)** Once you get a decent understanding of what these tools can do in cybersecurity, migrating to other similar software applications won't be a problem.
>
> **[2:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=177)** We are lucky that there's so many choices at our fingertips, and I want you to take full advantage of these opportunities by exploring them with me.

> [!info]- Semantic Content
>
> **Env Vars:** ids (3), ips (3), vms (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Open-source vs. commercial software
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=0)** - [Instructor] There are trade offs you're making by using open source software over its commercial counterparts.
>
> **[0:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=9)** Let's talk about the advantages first.
>
> **[0:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=12)** Of course, the most obvious one is the fact that it's free.
>
> **[0:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=18)** But is it really free?
>
> **[0:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=20)** Aren't there any hidden costs?
>
> **[0:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=23)** We'll investigate this question more in depth later.
>
> **[0:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=28)** Another strength is its transparency, which contributes to security.
>
> **[0:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=34)** Users can access the source code and know exactly what they are getting into.
>
> **[0:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=40)** Usually there's a vibrant community of developers supporting an open source product who also monitor security defects.
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=49)** If there is a known bug, they know about it.
>
> **[0:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=53)** As a result, security vulnerabilities don't linger too long.
>
> **[0:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=59)** Commercial software is like a black box.
>
> **[1:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=62)** Nobody knows other than its developers what's in it, which introduces many uncertainties and potential for design flaws and coding errors.
>
> **[1:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=76)** When it comes to disadvantages, one of the biggest is support.
>
> **[1:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=80)** Yes, driving open source communities do exist and they're willing to support your product, but there's no guarantee.
>
> **[1:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=90)** Sometimes an open source project just disappears for various reasons, one of which could be the lack of funding or interest.
>
> **[1:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=101)** Therefore, sustainability is another enormous challenge.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=107)** If you need professional support for the solution you're adopting, a better route could well be commercial.
>
> **[1:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=115)** Because of the pros and cons, hybrid options are emerging, companies make their product open source, but charge fees for customer support, extra features and feature upgrades.
>
> **[2:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=131)** A good example is SNORT, which is an intrusion detection slash prevention system that monetizes intrusion detection and prevention rules.
>
> **[2:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=143)** Here you can see the various subscription options the company is providing.
>
> **[2:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=150)** You can even go for no support option if you have your own IT team with the right expertise.
>
> **[2:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=157)** The nice thing about this trend is that the market is evolving to benefit the users and consumers.
>
> **[2:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=165)** I have no problem with that.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** snort (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Costs and savings
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=0)** - [Instructor] Have you ever heard of the total cost of ownership, or TCO?
>
> **[0:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=6)** TCO is highly relevant to our discussion of open-source products.
>
> **[0:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=12)** On the surface, open-source software, which is also free, appears to be a fantastic deal.
>
> **[0:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=20)** However, there are many hidden costs when you take a closer look.
>
> **[0:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=27)** Just like anything in this world, software applications have lifespans or lifecycles.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=35)** We purchase and introduce them to a production environment, which is comparable to a person being born.
>
> **[0:44](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=44)** Ample support is necessary, especially in the beginning, because all the rough edges need to be smoothed out for the software to be fully integrated into its environment.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=57)** The users also need support, in the form of training, on how to use the software properly.
>
> **[1:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=65)** As I mentioned previously, end user support is problematic unless you have a dedicated and knowledgeable team managing your open-source software internally.
>
> **[1:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=79)** You can shift much of these support costs to vendors like Microsoft when using a commercial product.
>
> **[1:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=88)** Considering the cost incurred during its entire lifecycle, free and open-source solutions may cost you more than merely using a third party offering commercial software and technical support.
>
> **[1:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=106)** Because of this reality, many open-source providers also offer technical support and make a profit.
>
> **[1:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=114)** Therefore, you should always consider taking advantage of your support options whether the software you choose is open-source or not.
>
> **[2:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=125)** Despite the TCO, open-source is still an excellent choice when you're starting to build your cybersecurity infrastructure and want to evaluate different options before settling on one.
>
> **[2:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=140)** If you already have in-house expertise, you can download, install, and try it without worrying about speaking with sales representatives.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=154)** My job in this course is to help you develop your knowledge of some of the most popular open-source cybersecurity solutions so that you minimize your TCO.

> [!info]- Semantic Content
>
> **Env Vars:** tco (4)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. Firewalls

> [↑ Back to Table of Contents](#table-of-contents)

#### What is a firewall?
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=0)** - [Instructor] A firewall is the most basic form of defense in network security.
>
> **[0:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=7)** It provides a foundation for your overall network defense.
>
> **[0:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=12)** Therefore, it's critical to clearly understand what a firewall is and learn what you can do with it to improve your network security.
>
> **[0:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=23)** Before going any further, let's define some frequently used networking terms in this course.
>
> **[0:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=31)** A computer network refers to two or more hosts connected through a communication medium, such as a cable or radio signal to share resources.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=43)** We leave out the word computer from now on in our discussions of computer networks for gravity.
>
> **[0:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=51)** Host are any devices in the network with a unique address.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=57)** Packets are messages containing data host exchange in a network.
>
> **[1:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=64)** Firewalls restrict the flow of network traffic by dropping suspicious attack packets or accepting seemingly safe packets.
>
> **[1:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=74)** Firewalls also log the details of dropped packets for later review by administrators.
>
> **[1:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=82)** The most fundamental feature of a firewall is filtering the packets.
>
> **[1:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=88)** There are two types of filtering going on in a firewall.
>
> **[1:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=92)** The first type is called ingress filtering, which filters the incoming packets.
>
> **[1:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=100)** The second type of filtering is referred to as egress filtering, which filters the outgoing packets.
>
> **[1:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=109)** Once a packet arrives at a host based on its destination IP address, the firewall must decide whether to drop it or forwarded to an appropriate location according to its port number.
>
> **[2:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=124)** To understand the relationship between port numbers and IP addresses, you need to know the different types of addresses used in networking.
>
> **[2:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=133)** The first one is the target or destination host IP, which is used to reach a destination host.
>
> **[2:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=140)** For example, 192.168.0.1 is a host internet protocol or IP address.
>
> **[2:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=150)** Please note that the IP address range we use here is for those used only within a private network.
>
> **[2:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=158)** The second type of address is the port number.
>
> **[2:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=162)** This one is used to reach an application after a packet arrives at a host.
>
> **[2:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=169)** For example, the number 80 is used for a hypertext transfer protocol or HCTP or web server.
>
> **[2:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=179)** Therefore, based on the firewall rules, if the port is open, the packet is forwarded to a target application on the host.
>
> **[3:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=189)** If the port is closed, the packet is dropped.
>
> **[3:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=194)** The relationship between a firewall and the ports it protects, it's a big step toward mastering network security.
>
> **[3:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=204)** Congratulations on taking this crucial first step.

> [!info]- Semantic Content
>
> **Definitions:** refers to (1), is called (1), is a  (1)
> **Analogies:** for example (2), such as (1)
> **Code Keywords:** let (1), private (1)
> **Env Vars:** hctp (1)
> **Versions:** 192.168.0 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Host firewalls
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=0)** - [Instructor] Host firewalls are standalone firewalls that only protect a single host.
>
> **[0:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=6)** Firewalls can be categorized according to the scope of what they protect.
>
> **[0:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=12)** The first type is host firewalls, and the other is network firewalls.
>
> **[0:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=18)** Our focus in this lesson is host firewalls.
>
> **[0:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=23)** Host firewalls monitor activities occurring on network interfaces on a single host.
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=30)** They decide whether to accept or reject packets for a single host.
>
> **[0:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=36)** Major operating systems come with their own built-in host firewalls.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=42)** Let's first take a look at one provided by Windows.
>
> **[0:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=46)** In this case, we'll look at the Windows 11 host firewall.
>
> **[0:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=51)** To get to the Windows 11 host firewall, choose settings by typing settings in the search box.
>
> **[1:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=62)** Click on open, and then select privacy and security.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=70)** Choose Windows Security.
>
> **[1:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=75)** Now you can see firewall and network protection here.
>
> **[1:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=80)** Click on it, and here it is.
>
> **[1:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=85)** The default configuration of a Windows firewall is to drop all the incoming or ingress packets and to accept all the outgoing or egress packets.
>
> **[1:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=99)** Let's click on Public network and you see the section, incoming connections here.
>
> **[1:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=106)** Of course, you can make exceptions to this default setting and then still block all incoming connections by clicking on this box.
>
> **[2:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=120)** And we're not changing the setting right now so I'm going to click on no.
>
> **[2:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=127)** To turn Windows Firewall on or off, you can use the switch here.
>
> **[2:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=137)** Let's go back.
>
> **[2:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=141)** If you want to introduce a new Windows host firewall rule, click on Allow an app through firewall.
>
> **[2:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=152)** To add a new rule, click on change settings and then allow another app.
>
> **[2:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=162)** Next, you can choose the app you want.
>
> **[2:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=170)** If you'd like to make some changes in the advanced settings, click on advanced settings.
>
> **[3:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=181)** Say Yes.
>
> **[3:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=184)** Now you have much more flexibility.
>
> **[3:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=189)** On Linux, the Built-in firewall module is called Net Filter.
>
> **[3:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=196)** Let's check out my Ubuntu host.
>
> **[3:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=200)** The default firewall on Ubuntu is uncomplicated Firewall or UFW.
>
> **[3:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=207)** To start the firewall type pseudo UFW Enable.
>
> **[3:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=217)** Press Enter.
>
> **[3:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=219)** Type the root password that is equivalent to the administrator password in windows.
>
> **[3:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=227)** If you want to open a new port, type pseudo UFW allow,
>
> **[3:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=236)** and then the port number.
>
> **[3:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=237)** Let's say that the port number is 22222.
>
> **[4:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=245)** Press enter.
>
> **[4:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=247)** To delete the rule you just added, type pseudo UFW delete allow 22222.
>
> **[4:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=263)** Press enter.
>
> **[4:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=265)** Now you know how to manage your Windows and Linux host firewalls, and it's time for you to try this newly obtained knowledge on your own computer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), delete (2), case, (1), public (1), switch (1)
> **UI Navigation:** click on (7)
> **Env Vars:** ufw (4)
> **CLI Commands:** make (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Network firewalls
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=0)** - [Instructor] Network firewalls protect entire networks.
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=5)** Therefore, their scope of protection is much broader than that of host firewalls.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=11)** Network firewalls sometimes come in the form of appliances.
>
> **[0:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=16)** These are devices dedicated to controlling the flow of network traffic between internal and external networks.
>
> **[0:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=25)** Although network firewalls are themselves firewalls, they still need to be protected by host firewalls.
>
> **[0:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=33)** As a result, they have a dual mission.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=37)** The first one is that as a host firewall, whose goal is host protection.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=43)** The second mission is to protect the network it belongs to, which has a much wider scope.
>
> **[0:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=51)** One of the core functionalities of a network firewall is packet forwarding.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=57)** In this case, they receive packets and send them to their destinations through different network interfaces.
>
> **[1:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=65)** This functionality is very similar to data routers.
>
> **[1:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=69)** It's challenging to distinguish firewalls from routers most of the time, but the difference is that firewalls drop packets.
>
> **[1:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=80)** Making a port forwarding decision is a pure firewall feature.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=87)** In this example, the firewall intercepts a packet arriving at a host with its destination port set to 22222 and then decides to forward or drop the packet based on predefined rules.
>
> **[1:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=105)** The network firewall decides to forward the secure shell packet to a host whose IP is 192.168.35.2
>
> **[1:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=118)** behind a network firewall.
>
> **[2:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=121)** Secure shell allows a remote client to access a host.
>
> **[2:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=127)** Once the packet arrives at the internal host and the host has an open port, that is 22, the packet gets to its destination.
>
> **[2:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=138)** A secure shell server is running on the internal host.
>
> **[2:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=143)** As you saw here, the packet arrived at port 22222 of the network firewall, and then the packet got forwarded to the open port of an internal host, which was 22.
>
> **[2:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=159)** Your home router should have a built-in network firewall capability.
>
> **[2:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=163)** Often, it comes with the port forwarding feature.
>
> **[2:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=167)** Because of this reason, many of you may already have set up port forwarding.
>
> **[2:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=173)** And if you didn't know, you can set up any computer as a network firewall.
>
> **[2:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=179)** We'll try this together later in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (1), case, (1)
> **Cross-References:** as you saw (1), later in (1)
> **Prerequisites:** set up (2)
> **Ports:** port 22222 (1)
> **Versions:** 192.168.35 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Static packet filtering vs. stateful packet inspection
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=0)** - [Instructor] Another way to classify firewalls is by how they examine packets.
>
> **[0:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=6)** There are generally two ways firewalls examine packets.
>
> **[0:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=10)** One is static packet filtering, or SPF, which inspects packets one at a time.
>
> **[0:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=18)** This approach doesn't use any memory.
>
> **[0:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=21)** The second method is stateful packet inspection, or SPI, which inspects packets in relation to previous packets.
>
> **[0:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=31)** This approach uses memory that remembers the details of each packet.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=37)** And because of the use of the memory, it has substantial advantages.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=43)** What does a static packet filtering firewall examine?
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=47)** It looks at source IP, destination IP, source port number, and destination port number.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=57)** What is then the advantage of stateful packet inspection over static packet filtering?
>
> **[1:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=63)** The main advantage is that since it has memory, it doesn't need to inspect all the details of packets every time it sees a packet.
>
> **[1:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=74)** For example, let's say an incoming or ingress packet is sent in response to an egress or outgoing packet.
>
> **[1:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=84)** Since the staple packet inspection firewall knows it's a response to an outgoing packet, it doesn't inspect all the details of the incoming packet.
>
> **[1:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=95)** The SPI firewall simply accepts the packet.
>
> **[1:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=101)** However, in the case of static packet filtering firewalls, because they don't have any memory, they treat the packet as if they never saw it.
>
> **[1:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=113)** Despite this disadvantage, static packet filtering firewalls have their own advantage over stateful packet inspection firewalls.
>
> **[2:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=123)** One of the advantages is their simplicity, which makes them easy to configure and maintain.
>
> **[2:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=130)** And because they're simple, they also require less computing resources when they're running.
>
> **[2:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=138)** Most of the modern firewalls are stateful packet inspection firewalls.

> [!info]- Semantic Content
>
> **Code Keywords:** static (5), let (1), require (1)
> **Env Vars:** spi (2), spf (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Disable UFW
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=0)** - [Instructor] Imagine you are a network engineer and you have to do some troubleshooting, which sometimes involves disabling a firewall.
>
> **[0:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=16)** We learned how to enable UFW, or Uncomplicated Firewall on Ubuntu.
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=22)** Let's check the status of the UFW firewall by typing "sudo ufw status."
>
> **[0:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=36)** Press enter.
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=38)** Type the route password.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=41)** Press enter.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=42)** As you can see, it is active and up and running.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=47)** Your challenge is now to disable UFW.
>
> **[0:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=50)** Do a quick internet search and figure out how to do it on your own.
>
> **[0:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=56)** This challenge shouldn't take too long.
>
> **[0:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=59)** Maybe about five minutes.

> [!info]- Semantic Content
>
> **Env Vars:** ufw (3)
> **CLI Commands:** sudo (1)
> **Code Keywords:** let (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Disable UFW
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=5)** - [Instructor] All you have to do is type sudo, space, ufw, space, disable.
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=17)** Press Enter.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=19)** Looks like it worked.
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=22)** Type sudo ufw status again to check if it's really down.
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=30)** Press Enter.
>
> **[0:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=32)** Yes, ufw is now inactive.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=37)** Congratulations, you did it again.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Host as a Router

> [↑ Back to Table of Contents](#table-of-contents)

#### Netfilter and iptables
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=0)** - [Instructor] Netfilter is a built-in Linux firewall.
>
> **[0:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=4)** Every Linux distribution comes with Netfilter because it's part of the Linux kernel.
>
> **[0:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=12)** IP tables is a program built to configure the Netfilter firewall.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=19)** IP tables is a command line interface or CLI program, which means that you have to rely on a Linux terminal program like this to use it.
>
> **[0:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=32)** Here is what a basic IP table's command looks like.
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=38)** That's type pseudo iptables -L
>
> **[0:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=48)** and press enter.
>
> **[0:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=52)** This command displays current IP tables settings.
>
> **[0:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=58)** If you want to view the manual of the IP tables program, type man iptables.
>
> **[1:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=68)** Press enter.
>
> **[1:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=71)** You can press the space bar to see more.
>
> **[1:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=75)** Press Q to get out.
>
> **[1:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=80)** Netfilter organizes its ACL or access control list using tables.
>
> **[1:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=88)** ACL is a collection of accept and deny rules for a firewall, which is Netfilter in our case.
>
> **[1:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=99)** Netfilter tables in turn contain chains that represent actual ACL rules.
>
> **[1:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=108)** The default Netfilter table is filter table, which contains input forward and output chains.
>
> **[1:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=119)** Netfilter is a powerful tool.
>
> **[2:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=122)** However, the tricky thing is configuration and maintenance.
>
> **[2:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=128)** In this diagram, you can see a Netfilter process flow.
>
> **[2:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=133)** It visualizes all the inspection points a packet goes through when processed by Netfilter.
>
> **[2:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=142)** The process starts with pre routing.
>
> **[2:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=147)** Then depending on the routing decision, it's either forwarded or input into a local process and then goes to the output inspection point.
>
> **[2:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=162)** Finally, all the packets arrive at the post routing inspection point.
>
> **[2:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=169)** There are Netfilter built-in tables other than the filter table, which has input forward and output chains.
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=180)** For example, network address translation or NET is another Netfilter table.
>
> **[3:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=187)** Net contains output, pre routing and post routing chains.
>
> **[3:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=194)** The Mangle table is used to manipulate packets.
>
> **[3:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=199)** Netfilter and IP tables provide a foundation for Linux firewalls.
>
> **[3:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=206)** If you can configure Netfilter through IP tables, you should be able to set up any other firewall products out there.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), means that (1)
> **Env Vars:** acl (3), cli (1), net (1)
> **Code Keywords:** interface (1), case. (1), finally, (1)
> **Prerequisites:** configure (2), set up (1)
> **Tools:** command line (1), terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Setting up a host firewall using iptables
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=0)** - [Instructor] Let's set up a host firewall using IP tables.
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=5)** The default rules for host firewalls are blocking all the incoming or ingress packets, allowing all the outgoing or egress packets, and then disabling forwarding.
>
> **[0:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=21)** Forwarding is for redirecting a packet coming to a particular network interface card, or NIC, to another NIC.
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=30)** Your computer usually has only a single network interface card.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=35)** In our case, all we care about is the host itself.
>
> **[0:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=39)** Therefore, forwarding is irrelevant.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=43)** Let's start by looking at the current net filter settings.
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=49)** Type sudo, which temporarily makes you the root or super user only when you're issuing a particular command, space iptables space -L.
>
> **[1:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=68)** Press Enter.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=70)** If your operating system, or OS, asks for a password for the root, provide one.
>
> **[1:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=78)** The terminal displays the current net filter settings.
>
> **[1:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=83)** According to this output, the chain input accepts all the incoming packets.
>
> **[1:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=92)** The forward chain also accepts packets.
>
> **[1:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=96)** The output chain accepts all the outgoing or egress packets.
>
> **[1:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=102)** Let's see if the firewall rules work.
>
> **[1:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=106)** Before moving on, let's check the IP address of the Ubuntu host.
>
> **[1:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=112)** Type ip space address space show.
>
> **[2:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=120)** Press Enter.
>
> **[2:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=122)** The IP address is 192.168.35.128.
>
> **[2:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=131)** Keep this IP address in mind because we're going to ping this IP address from another host.
>
> **[2:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=138)** The ping command is used for checking if a host is up or down.
>
> **[2:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=145)** Let's now switch to a Windows machine in the same network.
>
> **[2:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=151)** First, activate a Command Prompt.
>
> **[2:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=155)** Type cmd here, click on Open.
>
> **[2:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=163)** Type ipconfig.
>
> **[2:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=166)** Press Enter.
>
> **[2:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=169)** The IP address of this host is 192.168 .35.134.
>
> **[3:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=181)** Now, I'm going to be pinging the Linux host from my Windows client by typing ping space 192.168.
>
> **[3:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=196)** .35.128, which is the IP address of the Ubuntu host.
>
> **[3:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=206)** Press Enter.
>
> **[3:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=212)** My pings are receiving responses from the Ubuntu host.
>
> **[3:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=218)** Great, the firewall rules are working because we want them to accept the incoming packets, like my pings.
>
> **[3:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=227)** Now, we are going to set up our net filter firewall to block all the incoming traffic while disabling forwarding and allowing the outgoing traffic.
>
> **[4:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=241)** The first command to give is sudo space iptables space -P.
>
> **[4:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=254)** Make sure P is capital.
>
> **[4:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=257)** - P indicates a default rule for a particular chain.
>
> **[4:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=265)** To block forwarding, let's type space FORWARD space DROP.
>
> **[4:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=277)** Press Enter.
>
> **[4:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=279)** Let's check the updated forwarding rule.
>
> **[4:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=283)** I can recall my previous commands by using the up arrow key, and that's what I am going to do.
>
> **[4:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=291)** The command is sudo space iptables space -L.
>
> **[4:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=299)** Press Enter.
>
> **[5:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=302)** Do you see the word DROP next to FORWARD?
>
> **[5:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=307)** It was accept when we checked the status last time.
>
> **[5:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=312)** Finally, let's drop all the incoming packets by typing sudo iptables.
>
> **[5:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=323)** - P INPUT space DROP.
>
> **[5:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=331)** Press Enter.
>
> **[5:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=333)** Now, let's go back to our Windows host and try to ping the Ubuntu virtual machine again.
>
> **[5:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=339)** Here I can recall my previous commands by using the up arrow key again.
>
> **[5:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=345)** The command is ping 192.168.35.128.
>
> **[5:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=355)** Press Enter.
>
> **[6:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=361)** Your ping requests are timing out.
>
> **[6:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=365)** There's no response, which means that the firewall is doing its job.
>
> **[6:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=371)** What do you think?
>
> **[6:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=373)** Setting up the host firewall using the CLI isn't that bad, right?

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), interface (2), case, (1), super (1), switch (1)
> **Env Vars:** drop (3), nic (2), forward (2), input (1), cli (1)
> **Versions:** 192.168.35 (2), 192.168 (2), 35.134 (1), 35.128 (1)
> **CLI Commands:** sudo (4), make (1)
> **Speakers:** - p (2), - [instructor] (1)
> **Tools:** terminal (1), command prompt (1)
> **UI Navigation:** switch to (1), click on (1)
> **Prerequisites:** set up (2)

#### Automating netfilter configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=0)** - [Instructor] It's cumbersome to keep typing iptables commands into our command line interface or CLI.
>
> **[0:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=8)** You can automate this process by creating a shell script.
>
> **[0:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=12)** We'll start by creating a file for the shell script.
>
> **[0:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=16)** Let's first change our working directory to documents by typing cd, space, Documents.
>
> **[0:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=25)** Press Enter, type nano, space, and the name of the file which is myfw, standing for myfirewall.sh.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=43)** Press Enter.
>
> **[0:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=45)** Nano is one of the pre-installed Linux text editors.
>
> **[0:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=50)** Now type iptables, space, -P, capital P,
>
> **[0:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=58)** meaning the default firewall rule, space, INPUT for all the incoming traffic.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=70)** We'll be dropping all the incoming traffic which is why we type DROP next.
>
> **[1:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=77)** Now the second rule is for the outgoing traffic.
>
> **[1:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=82)** The net filter chain for that is OUTPUT.
>
> **[1:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=86)** We'll allow all the outgoing traffic which is why we type iptables, space, dash capital P, space, OUTPUT, space, ACCEPT.
>
> **[1:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=102)** Press Enter.
>
> **[1:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=105)** Next type iptables, space, dash capital P, space, FORWARD, space.
>
> **[1:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=116)** The forward chain is going to be disabled.
>
> **[1:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=119)** Therefore we type DROP here.
>
> **[2:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=124)** Now save the file by pressing the Control and the X keys together.
>
> **[2:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=131)** Type Y, and then press Enter to accept the current file name which is myfw.sh.
>
> **[2:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=144)** Before running our shell script, we want to make sure our shell script is executable.
>
> **[2:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=151)** To check this, type ls, space, - l, and then press Enter.
>
> **[2:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=162)** The permissions are read-write, read-write, and read for the user of the file group and others.
>
> **[2:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=176)** We need to change the permissions to make the file executable.
>
> **[3:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=181)** To do this, type chmod, space, and chmod here stands for change mode.
>
> **[3:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=194)** ugo, plus sign, and x.
>
> **[3:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=201)** Space, and then the name of the file, myfirewall.sh.
>
> **[3:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=209)** x here means executable and ugo plus x indicates adding executable permission to the user, group and others, press Enter.
>
> **[3:44](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=224)** Let's do ls, space, -l again to see if the file permissions have been updated.
>
> **[3:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=234)** Press Enter, the color of the file name, myfirewall.sh is now green, indicating that the file is executable.
>
> **[4:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=248)** You can also see the x having been added to the file permissions.
>
> **[4:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=255)** rwx for the user.
>
> **[4:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=257)** rwx for the group, rnx for others.
>
> **[4:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=265)** Finally, we are ready to run the shell script.
>
> **[4:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=269)** Usually all you have to do is type the name of the shell script.
>
> **[4:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=274)** But in our case, the commands in the shell script require root permissions which is why we're typing sudo again.
>
> **[4:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=285)** Space, and then a period meaning the current directory, and then forward slash and the name of the file which is myfirewall.sh.
>
> **[5:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=302)** Press Enter to run the shell script and provide the root password, and press Enter.
>
> **[5:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=312)** There's no error which means the script ran successfully.
>
> **[5:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=319)** You just automated your net filter configuration process.
>
> **[5:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=324)** From now on, we'll be using shell scripts for all the net filter configuration activities.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), ls (2), chmod (2), cd (1), sudo (1)
> **Code Keywords:** let (2), this, (2), interface (1), finally, (1), case, (1)
> **Env Vars:** drop (2), output (2), cli (1), input (1), accept (1)
> **File Paths:** myfirewall.sh (4), myfw.sh (1)
> **Tools:** command line (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### Understanding hosts as routers
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=0)** - [Instructor] You can turn any ordinary computer into a router.
>
> **[0:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=4)** Here is what you need.
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=5)** Hardware wise, a second network interface card, or NIC, is necessary.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=11)** In terms of software, you could be using any Linux distribution.
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=17)** Ubuntu is our choice.
>
> **[0:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=20)** If you're using a physical computer, go ahead and plug in your second NIC and set it up.
>
> **[0:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=27)** A virtual machine or VM requires a virtual NIC.
>
> **[0:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=32)** Here is the big picture view.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=35)** Think of what a home router does.
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=38)** It allows you to share a single external IP address among multiple hosts in the same local area network, or LAN.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=47)** We call this feature network address translation, or NAT.
>
> **[0:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=53)** NAT also enables you to forward packets.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=57)** There could be two types of forwarding.
>
> **[1:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=60)** One is ingress forwarding, meaning forwarding packets from outside your network into your network.
>
> **[1:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=67)** The other is egress, meaning forwarding packets from within your network to the outside of your network.
>
> **[1:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=75)** This diagram shows the overall network architecture we are working toward throughout this course.
>
> **[1:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=82)** Previously, we set up our host firewall on a local host.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=87)** The rest of the architecture yet to be completed is grayed out.
>
> **[1:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=92)** In this chapter, we'll configure a second Ubuntu VM host as a router.
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=98)** It has two network interface cards, network interface card 0 and network interface card 1.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=107)** The forwarding happens between these two network interfaces, whether it's ingress forwarding or egress forwarding.
>
> **[1:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=116)** And behind the Ubuntu router host, you can see an additional host connected through a switch, also connected to the Ubuntu router host NIC 0.
>
> **[2:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=128)** What I'm showing you here is precisely how your home router works.
>
> **[2:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=134)** The only difference is that the entire computer, namely Ubuntu host, is now dedicated as a router.

> [!info]- Semantic Content
>
> **Env Vars:** nic (4), nat (2), lan (1)
> **Code Keywords:** interface (4), switch (1)
> **Prerequisites:** set up (1), configure (1)
> **Definitions:** we call this (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Adding a network adapter
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=0)** - [Instructor] Let's set up an Ubuntu host as a router.
>
> **[0:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=4)** I'm assuming that you already have a second network interface card, or NIC, installed on your host, either physically or virtually.
>
> **[0:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=14)** Please note that this is our Ubuntu router VM.
>
> **[0:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=20)** Type ip address show,
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=30)** and press Enter.
>
> **[0:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=32)** The output shows ens33 and ens32, which are the network interfaces.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=43)** And ens33 has the IP address of 192.168.35.136.
>
> **[0:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=55)** ens32 has the IP address of 192.168.70.128.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=70)** By the way, the network addresses starting with 192 we are using here are private.
>
> **[1:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=77)** We use these addresses only within a local area network, or LAN, which are never used as internet addresses.
>
> **[1:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=88)** Another group of popular private addresses start with 10.
>
> **[1:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=94)** To turn our Ubuntu virtual machine, or VM, into a router, we have to ensure ens32 belongs to one network, while ens33 belongs to another.
>
> **[1:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=109)** The network address of ens32 looks slightly different from ens33 because it belongs to another network or subnet.
>
> **[2:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=122)** In our example, the subnet mask is 255.255.255.0,
>
> **[2:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=132)** which means that we use the first three digits of an IP address as our subnet ID.
>
> **[2:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=139)** Therefore, 192.168.35 is a subnet ID of 192.168.35.136.
>
> **[2:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=155)** 192.168.70 is a subnet ID of 192.168.70.128.
>
> **[2:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=166)** Therefore, they belong to different networks or subnets.
>
> **[2:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=172)** Subnet here refers to a subdivided network.
>
> **[2:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=177)** We divided our local area network into two subnets here, one is 192.168.35, and the other is 192.168.70.
>
> **[3:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=193)** Excellent job.
>
> **[3:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=195)** You're now well on your way to the next step of setting up your Ubuntu host as a router.

> [!info]- Semantic Content
>
> **Versions:** 192.168.35 (4), 192.168.70 (4), 255.255.255 (1)
> **Code Keywords:** private (2), let (1), interface (1)
> **Definitions:** is a  (2), means that (1), refers to (1)
> **Env Vars:** nic (1), lan (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Testing the second adapter
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=0)** - [Instructor] Once we set up our Ubuntu host as a router, the next step is to connect another host to our Ubuntu-router host to see if it functions as a router properly.
>
> **[0:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=13)** I have an Ubuntu host already up and running.
>
> **[0:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=16)** Let's type ip space address space show to check the current network settings.
>
> **[0:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=28)** The IP address is 192.168.35.128.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=37)** Therefore, it belongs to the 192.168.35 subnet.
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=49)** As shown in this diagram, the ultimate test is to check if this Ubuntu host can talk to our Ubuntu-router host whose IP is 192.168.35.136.
>
> **[1:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=66)** Type ping space 192.168.35.136.
>
> **[1:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=78)** That's the IP address of the Ubuntu-router host.
>
> **[1:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=82)** Press Enter.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=87)** We're getting responses, and our experiment is successful.

> [!info]- Semantic Content
>
> **Versions:** 192.168.35 (4)
> **Code Keywords:** let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Setting up IP forwarding
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=0)** - [Instructor] In this lesson, we'll change our Ubuntu router host operating system settings to forward packets from its internal network interface to the external network interface.
>
> **[0:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=13)** This allows us to forward packets from the Ubuntu host connected to the Ubuntu router host to the internet.
>
> **[0:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=23)** Let's start by checking the current operating system settings.
>
> **[0:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=28)** Type more /P-R-O-C, proc,
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=38)** /sys, S-Y-S, /net/ipv4/ip_forward.
>
> **[0:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=56)** Press Enter, and the output is zero.
>
> **[1:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=62)** Zero in computer science means false.
>
> **[1:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=66)** What this indicates is that at the operating system level, forwarding is disabled.
>
> **[1:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=74)** By the way, more is a Linux command to show the content of a file.
>
> **[1:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=81)** Now our mission is to enable forwarding.
>
> **[1:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=86)** To accomplish this mission, all you have to do is set the proc, sys, net, IPv4, ip_forward to one.
>
> **[1:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=97)** How do you do that?
>
> **[1:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=99)** You use the echo command.
>
> **[1:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=102)** The echo command takes an input and outputs the same thing.
>
> **[1:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=109)** Type echo 1.
>
> **[1:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=114)** If you press Enter, the command will print the input, which is one.
>
> **[2:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=121)** Let's press Enter.
>
> **[2:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=124)** The input is one.
>
> **[2:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=125)** The output is also one.
>
> **[2:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=129)** Before going any further, let's sign in as root first and stay using the -i option because the command we're about to use requires constant root access.
>
> **[2:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=145)** Type sudo -i and press Enter.
>
> **[2:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=153)** Type echo 1 >.
>
> **[2:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=162)** In this instance, the greater than sign is called redirection in Linux, and means that whatever is coming from the previous command will be written to the file whose name and path can be specified after the greater than sign here.
>
> **[3:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=181)** Type /proc, sys, net, ipv4, ip_forward.
>
> **[3:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=193)** Press Enter.
>
> **[3:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=195)** Essentially what just happened here is the ip_forward variable is set to the value passed by echo 1.
>
> **[3:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=205)** The initial value was zero.
>
> **[3:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=208)** Therefore, the new ip_forward value should now be set to one.
>
> **[3:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=215)** Let's see if the value has been actually changed.
>
> **[3:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=219)** Rephrase, let's see if the value has been actually changed.
>
> **[3:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=225)** Type more, proc, sys, net, ipv4, ip_forward and press Enter.
>
> **[4:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=240)** As you can see, the value is now set to one.
>
> **[4:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=245)** Now we are ready to move on to the next step, which is changing the net filter settings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (2)
> **Code Identifiers:** ip_forward (6)
> **Definitions:** is a  (1), is called (1), means that (1)
> **CLI Commands:** sudo (1)
> **Speakers:** - [instructor] (1)

#### Changing netfilter settings: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=0)** - [Instructor] Next, we'll change the net filter rules on the Ubuntu router host to finish our configuration for forwarding packets between the internet and the Ubuntu local host.
>
> **[0:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=14)** The first step is to change your Ubuntu host gateway IP to the Ubuntu router host, so that your Ubuntu host knows how to access the internet.
>
> **[0:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=26)** That is through the Ubuntu router host, in our case.
>
> **[0:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=31)** To do this, let's resize this window.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=35)** Go to Show Apps, click on Settings, click on this gear icon, select IPv4, and make sure the Gateway IP is the internal interface of the router host, which is 192.168.35.136.
>
> **[1:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=63)** Now, let's test if my Ubuntu host sharing the same subnet with the Ubuntu router host has internet access.
>
> **[1:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=72)** Type ping 8.8.8.8, which is the IP address of a Google Domain Name Server, or DNS, on the internet.
>
> **[1:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=86)** Press Enter.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=87)** This command fails, because there is no internet connection yet through the Ubuntu router host.
>
> **[1:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=95)** This will change when we finish configuring our Ubuntu router host to establish the internet connection.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1), this, (1), interface (1)
> **UI Navigation:** click on (2), go to (1)
> **Versions:** 192.168.35 (1), 8.8.8 (1)
> **CLI Commands:** make (1)
> **Env Vars:** dns (1)
> **Speakers:** - [instructor] (1)

#### Changing netfilter settings: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=0)** - [Instructor] Now we are on the Ubuntu-router host.
>
> **[0:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=4)** Let's use a shell script instead of typing individual commands.
>
> **[0:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=9)** I keep my shell scripts in the Documents folder.
>
> **[0:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=14)** Type cd Documents, press Enter.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=19)** Type nano space myfw, my firewall, .sh, press Enter.
>
> **[0:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=32)** Let's start by typing iptables space -A FORWARD space -i
>
> **[0:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=46)** ens33 space -o ens32 space -j ACCEPT.
>
> **[1:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=60)** Let's check again, iptables -A FORWARD -i ens33
>
> **[1:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=69)** - o ens32 -j ACCEPT.
>
> **[1:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=76)** - A FORWARD appends a new rule to the Netfilter FORWARD chain,
>
> **[1:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=86)** - i stands for input network interface,
>
> **[1:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=91)** - o stands for output network interface.
>
> **[1:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=97)** The -j option specifies the target iptables action, which is in this case ACCEPT.
>
> **[1:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=109)** The input network interface in this scenario is ens33.
>
> **[1:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=115)** The output network interface is ens32.
>
> **[2:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=122)** The bottom line is that this rule forwards packets from an internal network interface, ens33, to the external network interface, ens32.
>
> **[2:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=138)** Let's add the next rule.
>
> **[2:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=141)** Type iptables -A FORWARD space -m state --state
>
> **[2:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=158)** space ESTABLISHED,RELATED space -j ACCEPT.
>
> **[2:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=170)** Make sure there's no space after the comma or before the comma.
>
> **[2:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=177)** So, let's check again, iptables -A FORWARD -m state
>
> **[3:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=185)** - -state ESTABLISHED,RELATED -j ACCEPT.
>
> **[3:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=195)** This rule makes Netfilter accept packets that are part of an existing connection.
>
> **[3:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=203)** As long as there are packets coming back as responses to the packets you previously sent out the Netfilter firewall will accept them.
>
> **[3:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=213)** - m stands for match, and this rule is checking whether a packet matches being in the ESTABLISHED or RELATED state.
>
> **[3:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=228)** Now let's add another rule.
>
> **[3:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=230)** Type iptables space -t space nat space -A POSTROUTING,
>
> **[4:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=241)** P-O-S-T-R-O-U-T-I-N-G, space -o ens32 space -j MASQUERADE,
>
> **[4:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=257)** M-A-S-Q-U-E-R-A-D-E.
>
> **[4:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=264)** Let's double-check again, iptables space -t nat
>
> **[4:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=270)** - A POSTROUTING space -o ens32 space -j MASQUERADE, correct.
>
> **[4:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=283)** Here -t stands for table, and the Netfilter table we are using here is NAT, or nat, or network address translation.
>
> **[4:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=297)** This rule changes the source IP of all the outgoing packets into the IP address of the external network interface card of the Ubuntu-router host.
>
> **[5:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=309)** The word MASQUERADE refers to this process of changing the source IP of all the outgoing packets so that they all appear to be coming from a single host when in fact they are from multiple internal hosts with different IPs.
>
> **[5:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=327)** Now we're done with our script.
>
> **[5:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=329)** Let's save it by pressing Control + X together, type Y, and press Enter to accept the current file name.
>
> **[5:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=342)** Don't forget to make this file executable by typing chmod ugo+x space myfw.sh.
>
> **[5:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=359)** Let's see if the file is there.
>
> **[6:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=360)** Type ls -l, my file is there.
>
> **[6:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=365)** It's executable because it's green.
>
> **[6:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=368)** Now we are ready to run the shell script.
>
> **[6:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=373)** Type sudo space .myfw.sh, press Enter.
>
> **[6:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=382)** Provide the root password, press Enter.
>
> **[6:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=388)** The shell script ran without any problems.
>
> **[6:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=391)** It just enabled forwarding.

> [!info]- Semantic Content
>
> **Env Vars:** forward (6), accept (5), established (3), related (3), masquerade (3)
> **Code Keywords:** let (9), interface (7), match, (1)
> **Speakers:** - o (2), - a (2), - [instructor] (1), - i (1), - m (1)
> **CLI Commands:** make (2), cd (1), chmod (1), ls (1), sudo (1)
> **Definitions:** stands for (4), refers to (1)
> **File Paths:** myfw.sh (2)
> **Best Practices:** don't forget (1)

#### Testing the router
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=0)** - [Instructor] Now, let's test if our Ubuntu router host is forwarding the package properly.
>
> **[0:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=7)** I'm back to our Ubuntu host, type ping 8.8.8.8.
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=17)** Press Enter.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=19)** Getting a response from the Google DNS server means that we have an internet connection.
>
> **[0:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=28)** The ultimate test is to ping the external network interface of the Ubuntu to router host whose IP is 192.168.70.128.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=42)** From the Ubuntu host network interface whose IP is 192.168.35.128.
>
> **[0:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=53)** Type ping 192.168.70.128.
>
> **[1:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=67)** Press Enter.
>
> **[1:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=68)** The ping command works, which means that the Ubuntu router host is forwarding the package properly.
>
> **[1:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=76)** Congratulations.

> [!info]- Semantic Content
>
> **Versions:** 192.168.70 (2), 8.8.8 (1), 192.168.35 (1)
> **Code Keywords:** interface (2), let (1)
> **Definitions:** means that (2)
> **Env Vars:** dns (1)
> **Speakers:** - [instructor] (1)


### 4. Host as a Network Firewall

> [↑ Back to Table of Contents](#table-of-contents)

#### Setting up hosts as network firewalls
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=0)** - [Instructor] Compared to setting up a router host, adding new network file features is fairly straightforward.
>
> **[0:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=8)** Let's discuss how to set up our Ubuntu router host as a network firewall in this lesson.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=15)** Network firewalls handle service requests by either blocking them or providing port forwarding.
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=22)** The prerequisite for port forwarding is a host set up as a router, which is in our case, the Ubuntu router host.
>
> **[0:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=31)** We need to add some new firewall rules to enable port forwarding that routes the network service request to an appropriate host behind a firewall.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=43)** The Ubuntu router host firewall adheres to some default rules already.
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=49)** For example, it's dropping all the ingress traffic or incoming traffic, and it forwards all the egress or outgoing traffic to the internet.
>
> **[1:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=61)** In addition to these default rules, we need to add the following port forwarding details.
>
> **[1:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=68)** First of all, we need to open port 80 on the Ubuntu router host.
>
> **[1:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=73)** And then send all the port 80 traffic to a host running an HTTP or web server.
>
> **[1:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=82)** Here is a big picture view.
>
> **[1:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=84)** A packet arrives whose destination port is 80 from the internet at the external network interface card of our Ubuntu router host ens 32.
>
> **[1:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=97)** The network interface card has the IP address of 192.168.70.128.
>
> **[1:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=106)** If we have our port forwarding rules set up, this packet will be then sent to the internal network interface card of the Ubuntu router host ens 33.
>
> **[1:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=118)** Next, it's sent to a switch.
>
> **[2:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=121)** The switch then passes it onto our Ubuntu host whose IP address is 192.168.35.128.
>
> **[2:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=132)** The local host has only one network interface card and the IP address of that network interface card is 192.168.35.128.
>
> **[2:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=146)** The Ubuntu local host network interface card or NIC ens 33 has its port 80 open to receive all the hyper text transfer protocol or HTTP traffic.
>
> **[2:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=159)** Now the key here is that the original packet destination IP has to be changed from 192.168.70.128 to 192.168.35.128 to arrive at the Ubuntu local host eventually.
>
> **[3:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=181)** We don't have to do anything about the destination port number because the initial port number stays the same, which is 80.
>
> **[3:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=189)** That's all we have to do on the Ubuntu router host to activate port forwarding.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), switch (2), let (1), case, (1)
> **Versions:** 192.168.35 (3), 192.168.70 (2)
> **Prerequisites:** set up (3), prerequisite (1)
> **Ports:** port 80 (3)
> **Env Vars:** http (2), nic (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), picture (1)
> **Speakers:** - [instructor] (1)

#### Setting up a web server
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=0)** - [Instructor] The area behind our Ubuntu router serving as a network firewall is a demilitarized zone or DMZ.
>
> **[0:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=9)** We call it DMZ because it's a relatively safe place after our first layer of firewall filtering.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=19)** Our goal is to provide an HTTP service on our Ubuntu local host in the DMZ.
>
> **[0:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=27)** Let's start by installing a popular Linux web server called Apache on our Ubuntu host.
>
> **[0:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=36)** Type pseudo apt install apache2.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=47)** Press enter.
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=49)** Type Y and press enter.
>
> **[0:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=55)** Now you have a working HTTP or web server on the Ubuntu local host.
>
> **[1:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=62)** Let's check the status of the Apache web server.
>
> **[1:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=65)** Type pseudo system CTL status Apache2, press enter.
>
> **[1:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=83)** As you can see, the web server is up and running.
>
> **[1:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=88)** Type Q to get out.
>
> **[1:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=90)** An ultimate test to check if the web server is up and running, is opening a web browser and loading a homepage.
>
> **[1:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=100)** Let's resize this window.
>
> **[1:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=103)** Let's open the web browser type, type local host, and press enter.
>
> **[1:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=113)** As you can see, you can load the default page from the web server on the UBUNTU local host.
>
> **[2:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=122)** The successfully loaded test page means that the web server is up and running.
>
> **[2:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=129)** To restart the web server, type pseudo systemctl restart Apache2 like this.
>
> **[2:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=146)** Let's press enter to restart the web server.
>
> **[2:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=151)** Type pseudo systemctl stop Apache2
>
> **[2:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=161)** to stop the web server.
>
> **[2:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=163)** Press enter.
>
> **[2:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=165)** Let's check the status of the web server again by typing pseudo systemctl status Apache2,
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=180)** press enter, and it says inactive.
>
> **[3:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=186)** Type Q to get out.
>
> **[3:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=189)** The web server is no longer running for now, and you can start it again by typing start pseudo systemctl start Apache2, press enter.
>
> **[3:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=207)** And the web server is up and running again, let's check.
>
> **[3:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=212)** It is up and running.
>
> **[3:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=215)** Type Q.
>
> **[3:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=217)** The hosts in our DMZ, which shares the same local area network behind the Ubuntu router host/network firewall are the only ones that can access the web server for now.
>
> **[3:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=233)** The next step is to enable port forwarding to allow hosts on the internet to send their requests to our web server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), type, (1), this. (1)
> **Env Vars:** dmz (4), http (2), ctl (1), ubuntu (1)
> **CLI Commands:** systemctl (4), apache (2), apt (1)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Port forwarding
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=0)** - [Instructor] Let's try to connect to the web server on the Ubuntu host in the DMZ, from a Windows host through the Ubuntu router host.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=11)** We'll be using the IP address of the external network interface of the Ubuntu router host to get to the web server.
>
> **[0:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=20)** Let's go to the Windows host and open a web browser.
>
> **[0:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=25)** Type the external IP of the Ubuntu router host, which is 192.168.70.128.
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=38)** Press Enter.
>
> **[0:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=40)** You're unable to connect since port forwarding is not yet enabled.
>
> **[0:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=45)** That's why we're getting this "can't reach this page" message.
>
> **[0:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=51)** Let's now go back to our Ubuntu router host and change the firewall rules to enable port forwarding.
>
> **[1:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=60)** Let's edit our firewall script.
>
> **[1:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=63)** Type cd documents.
>
> **[1:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=67)** Press Enter, type ls, press Enter.
>
> **[1:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=72)** Do you see our firewall script, myfw.sh?
>
> **[1:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=78)** Let's edit the script, type nano myfw.sh.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=87)** Press Enter.
>
> **[1:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=89)** These are the firewall rules we used to set up our Ubuntu router host initially.
>
> **[1:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=95)** Let's add a couple of more rules to enable port forwarding.
>
> **[1:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=101)** Type iptables -t space, nat, space, dash capital A, PREROUTING, P-R-E-R-O-U-T-I-N-G, PREROUTING.
>
> **[2:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=120)** PREROUTING -p, standing for protocol, in this case, tcp.
>
> **[2:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=130)** Space, -i, meaning the input interface, ens32 -d, standing for destination.
>
> **[2:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=144)** And the destination is 192.168.70.128.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=154)** And then space, --dport 80.
>
> **[2:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=161)** And dport here stands for destination port.
>
> **[2:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=166)** So, so far it's basically saying if there is an incoming packet whose destination IP is 192.168.70.128,
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=180)** and whose destination port is 80, do something.
>
> **[3:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=185)** Now space, -j DNAT --to,
>
> **[3:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=195)** space, 192.168.35.128.
>
> **[3:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=204)** Since the line is too long, we have this less than sign right here, hiding the rest of the line.
>
> **[3:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=213)** DNAT here stands for destination network address translation.
>
> **[3:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=222)** What this rule does is changing the destination IP of an incoming packet to the one we are specifying here, which is 192.168.35.128.
>
> **[3:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=239)** If the packet is coming through the external interface, which is ens32 of our Ubuntu router host, and if it's destination port is 80, the command -j DNAT --to,
>
> **[4:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=263)** this whole thing all the way to the IP 191.168 and 35.128, this whole command
>
> **[4:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=277)** is changing the destination IP of the packet from 192.168.70.128, from this one to this one,
>
> **[4:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=288)** which is 192.168.35.128.
>
> **[4:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=297)** The next rule is iptables, space, dash capital A, space, FORWARD -p tcp -i,
>
> **[5:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=314)** input interface, ens32 -o ens33,
>
> **[5:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=323)** space, --dport 80 -m,
>
> **[5:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=333)** space, state --state, space, NEW,ESTABLISHED,RELATED, space, -j ACCEPT.
>
> **[5:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=351)** Let's make sure we typed the right commands and options.
>
> **[5:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=359)** - A FORWARD -p tcp, ens32, ens33,
>
> **[6:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=369)** dport 80 -m state --state NEW,ESTABLISHED,RELATED, okay.
>
> **[6:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=383)** - j ACCEPT, okay.
>
> **[6:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=387)** This line means that we allow forwarding the package from the input interface, which is ens32, to the output interface, which is ens33, if a packet's destination port is 80 and if the packet contains a new connection request or is part of an existing connection.
>
> **[6:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=417)** Now let's go ahead and save the script by pressing CTRL and X, type Y, press Enter.
>
> **[7:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=426)** Let's run the script by typing sudo ./myfw.sh.
>
> **[7:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=436)** Press Enter and then provide the root password.
>
> **[7:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=441)** Press Enter and the script ran without any errors.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), interface (6), new, (2), case, (1)
> **Env Vars:** prerouting (3), dnat (3), forward (2), established (2), related (2)
> **Versions:** 192.168.70 (4), 192.168.35 (3), 191.168 (1), 35.128 (1)
> **CLI Commands:** cd (1), ls (1), make (1), sudo (1)
> **Definitions:** stands for (2), is an  (1), means that (1)
> **File Paths:** myfw.sh (3)
> **Speakers:** - [instructor] (1), - a (1), - j (1)
> **Cross-References:** go back to (1)

#### Testing port forwarding
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980&t=0)** - [Instructor] Let's test if port forwarding is working.
>
> **[0:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980&t=4)** We're back to the Windows host, sharing the same subnet with the Ubuntu router host external interface, ENS 32.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980&t=15)** Let's try to connect to our web server in the DMZ through the Ubuntu router host using our web browser.
>
> **[0:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980&t=24)** Just type the external network interface IP of the Ubuntu router host, 192.168.70.128.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980&t=35)** Press enter.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980&t=37)** We're now connected to the web server running on the Ubuntu host in the DMZ, behind the Ubuntu router host.
>
> **[0:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980&t=45)** Congratulations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (2)
> **Env Vars:** dmz (2), ens (1)
> **Versions:** 192.168.70 (1)
> **Speakers:** - [instructor] (1)

#### Understanding one-legged DMZ
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=0)** - [Instructor] When opening a file port and enabling port forwarding a risk is that some internal hosts, such as web servers are now accessible on the entire internet.
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=17)** There's always a chance of an attacker compromising the web server.
>
> **[0:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=21)** A compromised web server in the same network could infect other hosts and make them vulnerable too.
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=30)** DMZ is a solution to preventing this unfortunate scenario.
>
> **[0:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=36)** DMZ stands for demilitarized zone.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=41)** It's a buffer area between an internal network and an external network.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=47)** Therefore, DMZ further separates the internal network into a publicly accessible area and a protected area off limits to public access.
>
> **[1:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=60)** DMZ allows us to avoid the situation where an internal network is directly exposed to the external network.
>
> **[1:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=69)** This way, a compromised host in the DMZ does not affect other hosts in another subnet and make them less vulnerable.
>
> **[1:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=80)** DMZ also allows more fine-grained network traffic monitoring by further dividing an internal network and placing more security controls.
>
> **[1:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=92)** One-legged topology is the most basic DMZ architecture.
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=98)** Topology here means a structure of how we connect hosts.
>
> **[1:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=103)** To create a one-legged DMZ, we need to build on a network firewall host by connecting a DMZ subnet to it.
>
> **[1:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=113)** We also need one more network interface card, that is a third network interface card and a switch to connect multiple hosts in the new subnet to the third network interface card.
>
> **[2:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=128)** The diagram here shows that you could introduce a DMZ to an existing network file host by adding another switch and the third network interface card.
>
> **[2:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=143)** In a full blown DMZ instead of one-legged DMZ, there'll be two network interface cards involved.
>
> **[2:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=152)** One network interface card connected to the first network file host facing the external network, and the other connected to the second network file host facing an internal network.

> [!info]- Semantic Content
>
> **Env Vars:** dmz (12)
> **Code Keywords:** interface (6), switch (2), protected (1), public (1)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Understanding true DMZ
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=0)** - [Instructor] A true DMZ is the most secure firewall architecture.
>
> **[0:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=6)** To set up a true DMZ, what you need is two network firewall hosts and a switch.
>
> **[0:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=14)** The first network firewall host serves as an external firewall interfacing with the external network and the DMZ.
>
> **[0:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=23)** The second network firewall host acts as an internal firewall interfacing with the DMZ and the internal network.
>
> **[0:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=34)** When we have one network firewall in a much simpler topology, it only separates the external network from the internal network.
>
> **[0:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=45)** In the true DMZ topology, we introduce a second network firewall host.
>
> **[0:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=52)** Therefore, in between the two network firewall host, we're creating a new subnet, which is our DMZ.
>
> **[1:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=62)** Think of this as adding the external network interface of the second network firewall host through the internal interface of the first network firewall host.
>
> **[1:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=74)** And the true DMZ topology, we protect an internal network better because it's behind the second firewall.
>
> **[1:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=81)** There are two layers of firewalls in this architecture.
>
> **[1:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=86)** Your internal network host get additional protection and separation from the host in the DMZ.
>
> **[1:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=94)** True DMZ is a gold standard in network security.

> [!info]- Semantic Content
>
> **Env Vars:** dmz (9)
> **Code Keywords:** interface (2), switch (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Understanding an application proxy firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=0)** - [Instructor] Squid is an open-source application proxy firewall software solution for hypertext transfer protocol, or HTTP.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=11)** It has many features, but we'll focus on the website blocking functionality.
>
> **[0:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=18)** What is an application proxy firewall?
>
> **[0:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=21)** Static packet filtering, or SPF, and staple packet inspection, or SPI firewalls, do not inspect application data in a network packet.
>
> **[0:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=34)** They only look at the headers of the network packets.
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=38)** They should also inspect the payload or content of the packets.
>
> **[0:44](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=44)** It's simply too much data to handle for these SPF and SPI firewalls.
>
> **[0:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=52)** This is why we need a specialized firewall solution dedicated to looking at only the data segment of the packets.
>
> **[1:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=62)** Therefore, application proxy firewalls focus on examining the application data delivered by each network packet.
>
> **[1:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=72)** One more thing to note is that these application proxy firewalls are also application or protocol-specific.
>
> **[1:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=82)** In the case of Squid, its specialty is HTTP.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=87)** Here's a diagram we can use to think more deeply about what an application proxy firewall does.
>
> **[1:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=94)** The architecture consists of three elements, HTTP Client, HTTP Proxy, and HTTP Server.
>
> **[1:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=106)** The HTTP client is usually a web browser, like Microsoft Edge.
>
> **[1:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=113)** To the HTTP client, an HTTP proxy looks like a web server.
>
> **[2:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=120)** To the HTTP or web server, an HTTP proxy looks like a client or a web browser.
>
> **[2:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=129)** Therefore, the HTTP proxy is acting like a middle person intercepting HTTP requests from an HTTP client and passing them onto an HTTP server.
>
> **[2:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=144)** At the same time, from the perspective of the HTTP server, the HTTP proxy will be receiving packets just like HTTP clients and then passing them onto the actual HTTP client.
>
> **[2:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=162)** After all, that's why Squid is called HTTP Proxy.
>
> **[2:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=168)** Proxy servers monitor application message exchanges, examine the message content, and take actions based on security rules.
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=180)** An example of such an action is blocking a website.
>
> **[3:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=185)** If you don't want your employees to do online shopping during their work hours, you can install a proxy server to monitor the HTTP traffic.
>
> **[3:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=196)** When the proxy server detects an unwanted domain name in the HTTP packet, it can intercept the HTTP request and respond to the web browser by displaying a message like, "You're prohibited to visit the XYZ site."
>
> **[3:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=215)** In our example network, the best place for an HTTP proxy firewall is within the DMZ because the HTTP proxy will be exposed to the outside HTTP servers and still isolated from the internal network.

> [!info]- Semantic Content
>
> **Env Vars:** http (25), spf (2), spi (2), xyz (1), dmz (1)
> **Definitions:** is an  (2), is called (1)
> **Code Keywords:** static (1)
> **Analogies:** just like (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Setting up Squid
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=0)** - [Instructor] Let's install Squid, on our Ubuntu router host and block a website.
>
> **[0:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=7)** Type sudo apt install squid,
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=17)** S-Q-U-I-D.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=19)** Press Enter.
>
> **[0:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=21)** Type Y, press Enter.
>
> **[0:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=25)** To specify which site to block, we need to edit the Squid configuration file.
>
> **[0:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=32)** Type cd /etc/squid/, press Enter.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=41)** Type ls, and press Enter.
>
> **[0:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=45)** And you can see, squid.conf file, the configuration file.
>
> **[0:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=53)** Now, type sudo nano squid.conf.
>
> **[1:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=63)** Press Enter.
>
> **[1:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=64)** Press Control + W together to do a search.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=70)** Type url_regex, press Enter.
>
> **[1:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=79)** And right under that line, let's add our rule here.
>
> **[1:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=84)** Type acl banned, B-A-N-N-E-D, url_regex.
>
> **[1:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=100)** Let's make sure, acl banned url_regex.
>
> **[1:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=108)** Here, regex stands for regular expression, used to specify search patterns.
>
> **[1:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=117)** Our search pattern is a portion of a URL.
>
> **[2:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=120)** We use the label banned to name this rule.
>
> **[2:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=125)** We'll be using a file to store the banned URLs.
>
> **[2:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=129)** Therefore, we need to specify where the file is.
>
> **[2:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=134)** Type "/etc/squid is the directory location where our file is going to be, and that's why I just typed it.
>
> **[2:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=150)** And then, the name of the file, blocked, B-L-O-C-K-E-D.
>
> **[2:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=156)** And close the double quotation mark.
>
> **[2:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=159)** Now, let's find the line that says Insert your own rules.
>
> **[2:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=165)** So let's do another search by pressing Ctrl + W together.
>
> **[2:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=172)** And then type insert, press Enter.
>
> **[2:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=177)** Let's add our rule right here.
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=180)** Type http_access deny banned,
>
> **[3:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=191)** the label we created earlier.
>
> **[3:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=194)** So let's check again.
>
> **[3:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=195)** http_access deny banned.
>
> **[3:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=204)** Let's save the file by pressing Control + X together.
>
> **[3:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=210)** Type Y, press Enter.
>
> **[3:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=212)** Next, let's create our file that contains the list of blocked sites.
>
> **[3:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=218)** Type, sudo nano, and the name of the file, blocked, B-L-O-C-K-E-D.
>
> **[3:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=227)** Press Enter.
>
> **[3:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=228)** Type .[microsoft.com](https://microsoft.com).
>
> **[3:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=234)** Based on this regular expression, our proxy server, Squid, will block whatever domain name ending with .[microsoft.com](https://microsoft.com).
>
> **[4:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=244)** Let's save the file.
>
> **[4:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=246)** Press Control + X together, type Y, press Enter.
>
> **[4:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=253)** Now, let's restart Squid so that it's able to use the updated configuration file.
>
> **[4:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=262)** Type sudo systemctl restart squid.
>
> **[4:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=274)** Press Enter.
>
> **[4:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=276)** Great.
>
> **[4:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=277)** If you didn't have any typos in the configuration file, this will go without any errors.
>
> **[4:44](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=284)** Now, let's go to our Ubuntu host and open a web browser.
>
> **[4:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=289)** Click on the Open application menu.
>
> **[4:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=293)** Click on Settings.
>
> **[4:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=297)** Type proxy in the search box.
>
> **[5:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=300)** Click on Settings.
>
> **[5:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=303)** Choose Manual proxy configuration.
>
> **[5:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=309)** Our proxy server is running on our Ubuntu router host.
>
> **[5:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=313)** The IP address is 192.168.70.128.
>
> **[5:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=325)** The port number we are using here is the default port number for the proxy servers, which is 3128.
>
> **[5:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=333)** Let's also select Use this proxy for HTTPS.
>
> **[5:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=340)** Click on OK.
>
> **[5:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=343)** Let's try to visit worldwide web .[microsoft.com](https://microsoft.com) and see what happens.
>
> **[5:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=353)** Press Enter.
>
> **[5:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=355)** And it says Access Denied.
>
> **[5:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=359)** Access control configuration prevents your request from being allowed at this time.
>
> **[6:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=366)** The Squid server is now working.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), type, (1), type . (1)
> **CLI Commands:** sudo (4), apt (1), cd (1), ls (1), make (1)
> **Code Identifiers:** url_regex (3), http_access (2)
> **UI Navigation:** click on (4), go to (1)
> **URLs:** [microsoft.com](https://microsoft.com) (3)
> **Env Vars:** url (1), https (1)
> **Definitions:** stands for (1), is a  (1)
> **Prerequisites:** install (2)

#### Challenge: Fine-tuning the Squid configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=0)** (gentle bright music)
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=5)** - [Instructor] Previously, we learned how to block websites using Squid.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=11)** I don't know whether you notice this, but there is a problem.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=15)** It's blocking all the websites instead of the ones specified in the file called Blocked.
>
> **[0:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=24)** Let me try [linkedin.com](https://linkedin.com).
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=29)** Press Enter.
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=30)** You get this error message.
>
> **[0:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=33)** Our intention was to allow all the websites except for the ones with the [microsoft.com](https://microsoft.com) domain name.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=42)** Your mission is to fix this problem by revisiting the squid.conf file so that we only block the [microsoft.com](https://microsoft.com) websites.

> [!info]- Semantic Content
>
> **URLs:** [microsoft.com](https://microsoft.com) (2), [linkedin.com](https://linkedin.com) (1)
> **Code Keywords:** this, (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle bright music) (1)

#### Solution: Fine-tuning the Squid configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=0)** - [Instructor] How was your investigation?
>
> **[0:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=7)** Let's open the squid.conf file.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=11)** Type sudo space nano space squid.conf.
>
> **[0:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=18)** Press Enter.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=19)** Provide the root password, press Enter.
>
> **[0:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=23)** Let's do a search by pressing the Control and W keys together.
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=29)** Type the word insert, press Enter, and you can see the rule we added earlier.
>
> **[0:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=39)** Do you also see the line that says http_access deny all?
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=47)** What this means is, Squid is blocking all the websites in addition to the one we specified.
>
> **[0:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=54)** That is, [microsoft.com](https://microsoft.com).
>
> **[0:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=58)** You might have noticed the error messages blocking the websites were slightly different.
>
> **[1:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=65)** The websites blocked by me had this screen, and all the rest of the websites blocked by Squid, by default, looked like this.
>
> **[1:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=77)** On my custom error screen, you can even see that the route to router host is blocking the website.
>
> **[1:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=85)** The culprit is this line here that says http_access space allow space localnet,
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=98)** which will allow website access by default instead of blocking them all the time, as long as they're behind the application proxy firewall, in this case, Squid.
>
> **[1:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=112)** Let's uncomment this line.
>
> **[1:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=115)** Save the file by pressing Control and X.
>
> **[2:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=121)** Type Y, press Enter.
>
> **[2:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=124)** Let's restart the Squid server by typing sudo systemctl space squid space restart, press Enter.
>
> **[2:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=139)** Oh, my bad, sudo systemctl restart squid, press Enter.
>
> **[2:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=150)** Now let's see if Squid allows other websites.
>
> **[2:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=156)** Earlier, I typed [linkedin.com](https://linkedin.com) and got this message.
>
> **[2:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=161)** Let's reload the webpage, And it works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), default, (1), this. (1), case, (1)
> **CLI Commands:** sudo (3), systemctl (2)
> **Code Identifiers:** http_access (2)
> **URLs:** [microsoft.com](https://microsoft.com) (1), [linkedin.com](https://linkedin.com) (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Packet Analysis

> [↑ Back to Table of Contents](#table-of-contents)

#### What is packet analysis?
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=0)** - [Instructor] Packet analysis is a primary way of monitoring your network.
>
> **[0:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=6)** Computer network professionals use packet analysis to observe and diagnose the health of a network.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=15)** Cybersecurity professionals use packet analysis to conduct passive network vulnerability assessments.
>
> **[0:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=24)** The adjective passive here means that whoever is inspecting the packets doesn't take any actions affecting the packets, like dropping the packets or altering them.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=37)** Attackers use packet analysis as a passive attack tool to steal information such as passwords.
>
> **[0:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=46)** The term packet and packet analysis is misleading because frames are what's actually captured and analyzed.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=57)** Think of frames as container trucks delivering network packets in a local area network or land.
>
> **[1:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=65)** Packet analyzers intercept a frame and take a packet out of it for further inspection.
>
> **[1:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=74)** To give you an analogy, I can use the example of a Russian doll.
>
> **[1:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=79)** Let's say that the outermost shell is a frame.
>
> **[1:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=83)** Within the frame you see a packet housed, and then within the packet we have application or other protocol information.
>
> **[1:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=97)** Packet analysis results always mention frames and provide frame details in addition to the packet information.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=107)** A packet also carries data used by various network protocols such as TCP, UDP, IP,
>
> **[1:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=118)** ARP, HTTP, et cetera.
>
> **[2:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=123)** TCP stands for transmission control Protocol.
>
> **[2:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=127)** UDP stands for User Datagram protocol.
>
> **[2:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=132)** TCP and UDP govern how reliably packages travel through the internet between their sources and destinations.
>
> **[2:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=143)** ARP stands for address resolution protocol, which helps with translation between the IP addresses and physical or internet addresses.
>
> **[2:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=156)** We'll have a chance to discuss ARP or ARP more in depth in the next lesson.
>
> **[2:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=163)** Packet analysis involves inspecting protocol details delivered by packets, which is why packet analysis is also called protocol analysis.
>
> **[2:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=175)** Packet analysis is an essential element of any network or cybersecurity professional's toolbox.
>
> **[3:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=183)** It's indispensable in many different contexts of network troubleshooting and cybersecurity investigations.

> [!info]- Semantic Content
>
> **Env Vars:** arp (4), tcp (3), udp (3), http (1)
> **Definitions:** stands for (3), is a  (2), is an  (1)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### ARP poisoning example
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=0)** - [Instructor] Packet analysis has many other useful applications in network security besides troubleshooting.
>
> **[0:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=10)** One such application is network security reconnaissance.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=15)** Packet analysis helps you detect ping sweeps or port scanning attempts.
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=22)** It also allows you to detect information leakage or attacks, such as address resolution protocol, or ARP poisoning.
>
> **[0:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=33)** ARP or A-R-P is a protocol used to exchange information on mappings between IP addresses and internet addresses.
>
> **[0:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=46)** Why is ARP necessary?
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=49)** Because we have a two-tiered addressing system in computer networking.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=57)** One for local area networks or LANs and the other for the internet.
>
> **[1:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=64)** Have you heard the term internet address?
>
> **[1:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=69)** In a local area network, or LAN, we use an address type called internet address.
>
> **[1:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=76)** When we send the message outside of the LAN, we use a different type of address called IP address.
>
> **[1:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=85)** Whenever a message arrives at LAN, that message must be using the ethernet address again.
>
> **[1:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=93)** Therefore, there is this need for translating the IP address into an ethernet address, which is what ARP does.
>
> **[1:44](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=104)** To recap, there are two different types of network addresses.
>
> **[1:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=109)** The first is the internet protocol or IP address used by routers to pass packets from one network to another.
>
> **[1:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=119)** There is another type of address, which is the internet address, used by network interface cards or NICs, to pass frames from one host to another through a switch.
>
> **[2:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=134)** After a packet arrives at a router representing its destination network, it needs to be using the ethernet address to navigate the router's LAN.
>
> **[2:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=147)** Here is how ARP works.
>
> **[2:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=151)** In the very beginning, if there is a need for finding out an ethernet address version of a particular IP address, the ARP cache is first checked.
>
> **[2:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=163)** In this case, the cache is just the memory space, remembering the ethernet address and IP address mappings.
>
> **[2:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=172)** If the mapping is already there, you don't have to do any more searches.
>
> **[2:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=176)** If the mapping is not there, a new a RP request is sent.
>
> **[3:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=183)** This ARP request is sent to all the hosts in the network.
>
> **[3:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=189)** If one of the hosts has the right IP address, it knows what internet address corresponds to the IP address.
>
> **[3:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=199)** The host then sends the ethernet address information back to the host that made the ARP request originally.
>
> **[3:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=209)** Finally, the right mapping between the IP address and the ethernet address has been discovered.
>
> **[3:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=217)** ARP protocol is vulnerable to attacks.
>
> **[3:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=222)** An attacker will send a fake response to the ARP request after the legitimate host sends its IP address information back to the ARP requester.
>
> **[3:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=235)** Therefore, whoever sent out the ARP request, now recognizes the attacker as a legitimate host with the right IP.
>
> **[4:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=246)** The victim host starts sending packets to the attacker host.
>
> **[4:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=252)** The attacker host intercepts the packets and passes them onto the legitimate host.
>
> **[4:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=260)** Therefore, the attacker establishes a person in the middle attack loop at the end of the process.
>
> **[4:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=268)** In this scenario, a packet analysis tool like Wireshark can detect the duplicate responses sent back to the ARP request.
>
> **[4:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=279)** Therefore, serving as an excellent network security tool.

> [!info]- Semantic Content
>
> **Env Vars:** arp (13), lan (4)
> **Code Keywords:** pass (2), interface (1), switch (1), case, (1), finally, (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Packet capturing with Wireshark
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=0)** - [Instructor] Wireshark is one of the most well-known packet and protocol analysis software.
>
> **[0:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=8)** This type of software is also called packet sniffer because it collects and inspects packets, like dogs sniffing for evidence in a crime scene.
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=22)** In this lesson, our goal is to observe three-way handshaking using Wireshark.
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=29)** Transmission Control protocol, or TCP, is a connection-oriented protocol that ensures packets are error-free and in the correct sequence on the receiving side.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=43)** For TCP to establish a reliable connection, it has to go through this process called three-way handshaking.
>
> **[0:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=53)** The process consists of three steps, which is why it's called three-way handshaking.
>
> **[1:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=62)** The first one is SYN or synchronize.
>
> **[1:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=66)** The second one is SYN/ACK or synchronize and acknowledge.
>
> **[1:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=71)** And finally, ACK, or acknowledge.
>
> **[1:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=76)** Here is a diagram that shows how three-way handshaking occurs.
>
> **[1:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=82)** When starting your Wireshark instance, remember that you're running it as root.
>
> **[1:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=88)** The root privilege gives you access to network interfaces.
>
> **[1:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=94)** Also, familiarize yourself with the use of filters to display TCP traffic only.
>
> **[1:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=103)** To install Wireshark, type sudo apt install wireshark
>
> **[1:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=117)** and press Enter.
>
> **[2:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=120)** Type the root password.
>
> **[2:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=123)** Press Enter.
>
> **[2:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=125)** Type Y, press Enter.
>
> **[2:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=129)** Press Enter.
>
> **[2:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=132)** Wireshark has now been installed.
>
> **[2:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=136)** To start Wireshark, type sudo wireshark
>
> **[2:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=145)** and press Enter.
>
> **[2:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=149)** Wireshark is now up and running.
>
> **[2:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=151)** Choose a proper network interface here.
>
> **[2:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=157)** In our case, I'm going to choose ens32, the external network interface card of the host.
>
> **[2:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=165)** And then I'm going to click on the shark fin button.
>
> **[2:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=172)** The packets are now being captured.
>
> **[2:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=176)** To generate some more traffic, we'll be opening up a web browser.
>
> **[3:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=182)** Let's visit the website.
>
> **[3:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=185)** [Linkedin.com](https://Linkedin.com).
>
> **[3:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=191)** You can see, lots of messages are passing by.
>
> **[3:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=195)** We'll stop capturing by clicking on the red square button here.
>
> **[3:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=202)** Let's filter the packets by typing TCP in the filter window here and press Enter.
>
> **[3:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=213)** Now you only see TCP traffic.
>
> **[3:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=217)** Let's see if you can find the three-way handshaking process.
>
> **[3:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=223)** It's right here.
>
> **[3:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=225)** Here it says SYN.
>
> **[3:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=227)** And the next line says SYN/ACK.
>
> **[3:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=232)** And finally, the last line says ACK.
>
> **[3:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=236)** Congratulations, you have successfully observed the TCP three-way handshaking.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (6), syn (4), ack (4)
> **Code Keywords:** let (3), finally, (2), interface (2), case, (1)
> **CLI Commands:** sudo (2), apt (1), find (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Speakers:** - [instructor] (1)

#### Exploring Wireshark's advanced features
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=0)** - [Instructor] Once you get used to the basic features of Wireshark, it's time to learn some more advanced features to make your life easier when using Wireshark.
>
> **[0:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=12)** One of these useful extra Wireshark features is to use filters.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=19)** Wireshark sometimes gives you the experience of information overload because there's just so much to review.
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=29)** Therefore, knowing how to use filters is essential to avoid this information overload problem.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=37)** In our previous lesson, we already used a filter to hide network messages other than those using transmission control protocol or TCP.
>
> **[0:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=50)** Another useful feature is DNS resolution.
>
> **[0:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=55)** Usually, you get a bunch of numeric IP addresses in your Wireshark display.
>
> **[1:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=63)** Resolving these IP addresses into more meaningful domain names allows you to spot hosts of your interest more quickly.
>
> **[1:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=75)** Another useful feature is to start your Wireshark program and to be able to capture your packets right away without really having to navigate through the graphical user interface or GUI and then start capturing packets.
>
> **[1:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=94)** You can also use Wireshark to create rules to be used by your firewall software.
>
> **[1:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=103)** In the next lesson, we'll continue to explore the Advanced Wireshark features such as DNS resolution, capturing packets by bypassing GUI and how to create firewall rules using Wireshark.
>
> **[2:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=122)** Are you ready?

> [!info]- Semantic Content
>
> **Env Vars:** dns (2), gui (2), tcp (1)
> **Code Keywords:** interface (1), continue (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Wireshark hands-on
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=0)** - [Instructor] Let's try some more advanced Wireshark features.
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=5)** The first one I'd like to show you is how to start Wireshark packet capturing directly without going through the initial GUI screen.
>
> **[0:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=16)** Type sudo, space, wireshark, space, -i.
>
> **[0:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=25)** Here I stands for interface.
>
> **[0:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=28)** Let's make a choice in terms of which interface to monitor.
>
> **[0:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=34)** The interface number starts with 1, and I'll use the first interface for monitoring.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=41)** Therefore, I type 1.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=43)** Next type -k, which is the option that starts the capture session immediately.
>
> **[0:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=53)** Now press enter.
>
> **[0:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=56)** As you can see, we are completely bypassing the initial GUI screen.
>
> **[1:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=62)** Let's generate some more traffic by opening up our web browser.
>
> **[1:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=68)** Let's visit [linkedin.com](https://linkedin.com).
>
> **[1:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=75)** You can see a lot more traffic being generated.
>
> **[1:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=80)** There are so many IP address numbers and it would be nice if you could turn some of them into more meaningful domain names.
>
> **[1:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=90)** How do we do that?
>
> **[1:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=92)** Let's go to view and select Name Resolution, Name Resolution here, and choose Resolve Network Addresses.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=107)** As soon as I do that, some of the IP addresses are now turned into domain names.
>
> **[1:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=114)** Let's stop sniffing packets.
>
> **[1:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=118)** Lastly, let's try the Tools menu option and then choose Firewall ACL Rules or Access Control List rules.
>
> **[2:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=131)** Using this tool, you can generate a firewall rule automatically.
>
> **[2:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=137)** Note that before starting to use this tool, you need to pick and choose a particular entry in the Wireshark window.
>
> **[2:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=147)** So let's pick this one.
>
> **[2:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=151)** Let's go back to Tools.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=154)** Click on Firewall ACL Rules and select the firewall product you'll be using.
>
> **[2:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=163)** We'll keep the default option, which is net filter.
>
> **[2:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=167)** You also have options to specify more details like denying inbound traffic as part of the firewall rule.
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=180)** You can now copy the rules and add them to your NetFilter shell script.
>
> **[3:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=187)** There are many more advanced features to explore.
>
> **[3:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=191)** I recommend that you keep trying to discover them as you get more familiar with Wireshark.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), interface (4)
> **Env Vars:** gui (2), acl (2)
> **UI Navigation:** go to (1), click on (1), select the (1)
> **CLI Commands:** sudo (1), make (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Cross-References:** go back to (1)
> **Definitions:** stands for (1)
> **Warnings:** note that (1)

#### Challenge: Filtering with IP addresses and port numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=5)** - [Instructor] It's time to take your filtering skills to the next level.
>
> **[0:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=10)** Previously, I was looking for a three-way handshaking sequence in the captured packets between a browser and web server.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=19)** It took me a while to locate the right spot.
>
> **[0:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=23)** Your mission is to make this search process easier by using filters.
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=29)** The first step is to find all the packets containing my Ubuntu router host external IP, which is 192.168.70.128.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=43)** To do that, go to this window and type ip.addr, space, two equal signs, and type 192.168.70.128.
>
> **[1:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=64)** Press Enter.
>
> **[1:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=66)** Here you go. Your first mission accomplished.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=70)** Now, I want you to filter this even further and limit it to those using port 80, which is web traffic.
>
> **[1:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=79)** Please note that you want to use TCP as your protocol.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Versions:** 192.168.70 (2)
> **Ports:** port 80 (1)
> **Env Vars:** tcp (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Filtering with IP addresses and port numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=0)** - Were you able to find your solution?
>
> **[0:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=8)** Here is what you do.
>
> **[0:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=10)** I already showed you how to look for packets containing the IP 192.168.70.128.
>
> **[0:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=20)** Type IP.addr, space two equal signs,
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=29)** 192.168.70.128.
>
> **[0:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=40)** Now let's add space and type end, space, the protocol, which is TCP dot and the port is 80, space, two equal sign, 80 indicating web traffic.
>
> **[0:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=59)** Press enter.
>
> **[1:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=61)** Now you can see more clearly and quickly the three-way handshaking going on here.
>
> **[1:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=68)** SYN, SYN, ACK, ACK.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=70)** Well done.

> [!info]- Semantic Content
>
> **Env Vars:** syn (2), ack (2), tcp (1)
> **Versions:** 192.168.70 (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - were (1)
> **Non-Speech:** (upbeat music) (1)


### 6. IDSs and Vulnerability Assessment

> [↑ Back to Table of Contents](#table-of-contents)

#### What is an IDS?
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=0)** - [Instructor] An intrusion detection system, or IDS, provides an ability to receive an alert when an attacker breaches your network security.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=11)** Therefore, IDS is critical in protecting your network.
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=17)** An IDS could be an appliance or a piece of software.
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=22)** An appliance is a standalone solution.
>
> **[0:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=26)** It's a physical box you can attach to your network without having to touch anything else.
>
> **[0:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=34)** IDS is monitor networks for suspicious activities and send alarms.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=41)** IDSS are passive, meaning they don't take any actions against the network traffic.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=47)** There are different types of IDSs.
>
> **[0:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=50)** The first type is signature-based.
>
> **[0:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=54)** The signature-based IDSs rely on a predetermined set of definitions characterizing various types of attack traffic.
>
> **[1:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=65)** In this case, a definition refers to a bit pattern of network traffic.
>
> **[1:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=72)** The second type is behavior-based IDSs, the behavior-based IDSs determine what's normal and what's not in terms of network activities.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=87)** The technologies related to IDSs are intrusion prevention systems, or IPS, and Unified Threat Management, or UTM.
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=98)** Compared to IDSs, IPSs are active, meaning they take actions against packets.
>
> **[1:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=108)** That is, they drop suspicious packets.
>
> **[1:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=112)** UTMs are much more comprehensive and they do almost everything.
>
> **[1:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=118)** You can think of it as a Swiss Army knife in network security.
>
> **[2:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=123)** It acts like an IDS.
>
> **[2:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=126)** It also does IPS functions, and then they also serve as firewalls and anti-malware software security information and event management, or SIEM, collects network security relevant data from many sources.
>
> **[2:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=145)** Security information and event management, or SIEM, collects network security relevant data from many sources, including firewalls, IDSs, IPSs, and log servers.
>
> **[2:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=163)** SIEM offers powerful visualization options to correlate diverse network security data and allows network security personnel to make informed decisions on various cybersecurity threats.
>
> **[2:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=179)** A UTM solution can have a SIEM feature too.
>
> **[3:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=183)** Although a signature-based IDS is more common, more and more IDS is combine both signature-based and behavior-based approaches.
>
> **[3:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=197)** With the recent advances in artificial intelligence behavior-based IDS solutions are gaining more traction, whether it's standalone or built in as part of another product, an IDS is an essential element of your network defense.

> [!info]- Semantic Content
>
> **Env Vars:** ids (9), siem (4), ips (2), utm (2), idss (1)
> **Definitions:** is a  (1), refers to (1), is an  (1)
> **Code Keywords:** else. (1), case, (1)
> **CLI Commands:** make (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### Introducing Snort
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=0)** - [Instructor] Snort is an open-source IDS or intrusion detection system.
>
> **[0:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=6)** It's one of the most widely used IDS software solutions, both for training and use in real life settings.
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=17)** You can download and install Snort free of charge.
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=22)** However, there are aspects of Snort that aren't free.
>
> **[0:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=27)** If you want the latest Snort rules as soon as they become available, a paid subscription is necessary.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=37)** If you want the latest Snort rules as soon as they become available, a paid subscription is necessary.
>
> **[0:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=48)** To download Snort, click on the Downloads menu option.
>
> **[0:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=55)** You can find the latest Snort stable releases right here.
>
> **[1:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=60)** Windows and Linux versions are available.
>
> **[1:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=64)** Under Sources, you can download the source code too.
>
> **[1:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=69)** Snort runs in different modes, including Packet Sniffer, IDS or IPS modes.
>
> **[1:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=79)** IPS stands for Intrusion Prevention System.
>
> **[1:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=84)** In the Packet Sniffer Mode, Snort works passively and collects packets without analyzing them.
>
> **[1:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=93)** In the IDS mode, Snort continues to act passively, but it also analyzes packets to detect suspicious activities and send alerts.
>
> **[1:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=106)** In the IPS mode, Snort is active.
>
> **[1:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=110)** That is, it analyzes packets, detects suspicious activities, and takes actions against them.
>
> **[1:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=119)** Therefore, Snort drops packets if necessary in the IPS mode.
>
> **[2:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=126)** Snort can store its IDS and IPS logs locally as files, which is not always scalable.
>
> **[2:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=135)** The preferred way is to forward log messages to a dedicated log server in the cloud.
>
> **[2:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=144)** A security information and event management, or SIEM solution like Splunk, can play the role of the centralized log server.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=154)** Snort itself doesn't offer a visualization feature either, but a SIEM system such as Splunk can fill in the gap.
>
> **[2:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=163)** Another option is using a highly-scalable storage, search, and analytics solution, like Elasticsearch, combined with a visualization user interface like Kibana.
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=180)** With the support of an ecosystem consisting of log servers, data search and analytics engines and visualization, Snork remains a powerful network monitoring tool.
>
> **[3:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=196)** Many organizations adopt Snort as their primary IDS and IPS solutions.

> [!info]- Semantic Content
>
> **Env Vars:** ids (6), ips (6), siem (2)
> **Exercise Files:** download the (1), source code (1)
> **Definitions:** is an  (1), stands for (1)
> **CLI Commands:** find (1)
> **Code Keywords:** interface (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)

#### Snort as a packet sniffer
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=0)** - [Instructor] Although Snort is an intrusion detection and prevention system solution, it can also be used as a basic packet sniper.
>
> **[0:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=10)** Let's start by first installing snort.
>
> **[0:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=14)** Type pseudo apt install snort.
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=22)** Press enter.
>
> **[0:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=23)** Provide the root password Press enter.
>
> **[0:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=26)** Type Y. Press enter.
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=30)** The address range for the local network is 192.168.70.0/24.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=42)** /24 indicates that 192.168.70 is the subnet ID
>
> **[0:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=51)** for the network to monitor.
>
> **[0:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=54)** Press tab to select okay, and press enter.
>
> **[0:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=59)** Now we have our snort instance installed successfully.
>
> **[1:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=65)** To start capturing package, type pseudo snort -I, standing for interface.
>
> **[1:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=77)** Which interface do we use to snip the packets here?
>
> **[1:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=80)** We'll be using ENS32, which is the external network interface of the Ubuntu router host.
>
> **[1:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=90)** Now, -L and then the location where the packets are going to be stored.
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=98)** Here, -L stands for logging.
>
> **[1:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=103)** We'll be logging the packets in a particular location, namely /var/log/snort.
>
> **[1:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=116)** We're going to be storing the results of packet snipping in a binary format, which is why now we're typing
>
> **[2:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=124)** - b right here.
>
> **[2:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=127)** Press enter.
>
> **[2:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=129)** Now the snort application is up and running.
>
> **[2:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=133)** Let's give it a little bit of time so that we can capture some packets.
>
> **[2:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=137)** To stop capturing press control and C together.
>
> **[2:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=142)** Okay, I got my prompt back finally.
>
> **[2:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=146)** And you can see some outputs snort produced after I pressed control and C here.
>
> **[2:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=158)** Let's go to the directory where the package are captured.
>
> **[2:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=162)** Type CD /var/log/snort.
>
> **[2:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=171)** Press enter.
>
> **[2:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=172)** Type ls. Press enter.
>
> **[2:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=175)** There are four log files here and we're going to open the last one.
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=180)** Type pseudo more snort.log.1715980804.
>
> **[3:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=196)** Press enter.
>
> **[3:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=198)** We're getting weird results here because it's a binary file and we cannot read it in a text viewer.
>
> **[3:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=206)** What do we do to actually read the content properly?
>
> **[3:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=210)** Type Q to get out of this and we'll be using Wireshark to view the packet captured by snort.
>
> **[3:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=218)** Type pseudo Wireshark and then the name of the file, snort.log., the rest of the file name and press enter.
>
> **[3:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=234)** Now you can read the individual entries of the results of our packet capturing.
>
> **[4:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=241)** Packet capturing is the most basic snort mode and we tried it to get familiar with how to run Snort in general and to see what it looks like when Snort is running.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3), var (2), finally. (1)
> **CLI Commands:** apt (1), cd (1), ls (1)
> **Versions:** 192.168.70 (2)
> **UI Navigation:** go to (1), open the (1)
> **Definitions:** is an  (1), stands for (1)
> **Speakers:** - [instructor] (1), - b (1)
> **Env Vars:** ens32 (1)
> **Prerequisites:** install (1)

#### Snort as an IDS: Establishing rules
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=0)** - [Instructor] Let's run Snort as an intrusion detection system.
>
> **[0:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=4)** Before we put Snort in its intrusion detection mode, we have to do some prep work.
>
> **[0:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=10)** First, we'll introduce a new Snort rule by creating a file.
>
> **[0:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=16)** Let's go to /etc/snort/rules/ by typing cd /etc/snort/rules/.
>
> **[0:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=28)** Press Enter.
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=29)** We'll create a rule file called my.rules.
>
> **[0:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=33)** Type sudo nano my.rules.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=41)** Press Enter.
>
> **[0:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=43)** The new rule we are creating will detect any ping attempts to the interface we want to monitor.
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=49)** Type alert, meaning, whenever there is a ping attempt, send an alert.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=57)** Space.
>
> **[0:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=58)** The next thing to type is a protocol to detect.
>
> **[1:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=63)** Ping uses the Internet Control Message Protocol, or ICMP.
>
> **[1:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=69)** Therefore, type icmp, We don't care where the ping message is coming from.
>
> **[1:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=77)** It could be any IP address or any port number.
>
> **[1:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=81)** That's why we type any any in terms of where the packet is coming from.
>
> **[1:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=91)** Type -> to indicate the destination.
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=98)** We want to detect every ICMP message.
>
> **[1:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=102)** Therefore, the destination IP and the destination port number are any and any too.
>
> **[1:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=110)** Next, open parentheses.
>
> **[1:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=113)** Type msg: to indicate the start of the alert message.
>
> **[2:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=122)** The message will say Ping detected.
>
> **[2:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=125)** "Ping Detected!
>
> **[2:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=134)** and then double quote.
>
> **[2:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=137)** And then type a semicolon.
>
> **[2:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=140)** The last step is assigning an ID to the alert.
>
> **[2:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=144)** It's 1000001, which is a random number I picked.
>
> **[2:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=148)** Type lowercase sid:1000001.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=154)** That's 1000001.
>
> **[2:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=160)** SID Here stands for Snort Rule ID.
>
> **[2:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=165)** Don't forget another semicolon here at the end because if you miss it, you'll get an error.
>
> **[2:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=172)** Close parentheses.
>
> **[2:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=174)** Now, we are done with creating a rule.
>
> **[2:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=177)** Let's save the file by pressing Control + X together.
>
> **[3:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=182)** Type Y, press Enter.
>
> **[3:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=184)** For Snort to be able to use this new rule file, we have to make the Snort configuration file refer to the new rule file.
>
> **[3:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=194)** To do that, let's go to /etc/snort/.
>
> **[3:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=198)** Type cd .. to go up one level.
>
> **[3:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=205)** Press Enter.
>
> **[3:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=207)** Type ls, press Enter.
>
> **[3:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=210)** Do you see the snort.conf file?
>
> **[3:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=214)** Let's edit it.
>
> **[3:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=216)** Type sudo nano snort.conf.
>
> **[3:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=221)** Press Enter.
>
> **[3:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=223)** Let's look for the area where the rule file locations are specified.
>
> **[3:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=228)** Press Ctrl + W together to do a search.
>
> **[3:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=232)** Type site specific, site specific.
>
> **[3:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=238)** Press Enter.
>
> **[4:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=240)** Add a line to refer to the new rule file right here.
>
> **[4:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=245)** Type include $RULE_PATH/,
>
> **[4:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=254)** and then the name of the rule file, which is my.rules.
>
> **[4:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=260)** Save this file by pressing Control + X together.
>
> **[4:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=265)** Type Y, press Enter.
>
> **[4:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=267)** Now, we are ready to run Snort to use our newly-created rule file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), from. (2), interface (1)
> **CLI Commands:** cd (2), sudo (2), make (1), ls (1)
> **Env Vars:** icmp (2), sid (1), rule_path (1)
> **Definitions:** is a  (3), stands for (1)
> **UI Navigation:** go to (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Snort as an IDS: Detecting pings
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=0)** - [Instructor] We just introduced a new Snort rule to detect ping packets, and it's time to check if it actually works.
>
> **[0:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=9)** Let's start by running Snort in its IDS mode.
>
> **[0:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=14)** Type sudo snort -c,
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=22)** which indicates the location of the Snort configuration file.
>
> **[0:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=28)** We'll be using the default Snort configuration file, which is located at /etc/snort/snort.conf.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=41)** The next option is -A console.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=47)** So type -A console, which indicates that we'll be displaying the Snort alert on our terminal window.
>
> **[0:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=58)** The next option to specify is -l /var/log/snort,
>
> **[1:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=72)** which tells where the Snort log messages are going to be stored.
>
> **[1:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=77)** And finally, we have to say which network interface card Snort is going to be listening to by typing -i ens32.
>
> **[1:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=93)** We'll be listening to the external network interface card of the Ubuntu router host, which has the IP of 192.168.70.128.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=107)** Let's start Snort by pressing Enter.
>
> **[1:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=111)** Type the root password, press Enter.
>
> **[1:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=114)** Let's ping the external interface from the Ubuntu host to cause the ping detected alert Type ping 192.168.70.128,
>
> **[2:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=135)** press Enter.
>
> **[2:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=137)** Now let's go back to our Ubuntu router host.
>
> **[2:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=141)** Do you see our new rule working here?
>
> **[2:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=145)** SID 1000001, "Ping Detected."
>
> **[2:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=150)** Our new Snort rule is working, congratulations.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=154)** You did it again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (3), var (1), finally, (1)
> **Env Vars:** ids (1), sid (1)
> **Versions:** 192.168.70 (2)
> **CLI Commands:** sudo (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### What is a network vulnerability assessment?
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=0)** - Network vulnerability assessment is a way to discover potential security weaknesses in a computer network.
>
> **[0:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=7)** There are different types of network vulnerabilities.
>
> **[0:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=10)** One is vulnerable configurations such as open ports.
>
> **[0:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=14)** Another type is known software vulnerabilities for both operating systems and applications.
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=22)** The third type is vulnerabilities associated with compliance to policies and standards.
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=29)** This third one is more human factor-oriented rather than technical.
>
> **[0:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=34)** For more technical vulnerabilities, especially those related to security misconfigurations, please check out this national vulnerability database by NIST or National Institute of Standards and Technology.
>
> **[0:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=51)** A lot of vulnerability assessment tools used that common configuration enumeration, or CCE provided by NIST.
>
> **[1:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=61)** The process of removing security vulnerabilities as much as possible is referred to as system or network hardening.
>
> **[1:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=69)** The hardening can be done technically by installing patches and fixing configurations, or it could be managerial like auditing and monitoring.
>
> **[1:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=81)** To harden your system properly, you should understand the nature of network security vulnerabilities first.
>
> **[1:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=90)** The first thing to note is that the number of vulnerabilities is always too many to address.
>
> **[1:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=96)** The second problem is that the vulnerabilities themselves are dynamic.
>
> **[1:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=102)** They evolve, and new vulnerabilities show up all the time.
>
> **[1:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=108)** If you're looking for the best vulnerability assessment tool for your organization, here are things to consider.
>
> **[1:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=115)** First, you want to know whether the tool can quantify the severity of the vulnerabilities, because there's just too many vulnerabilities.
>
> **[2:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=126)** It's often necessary to prioritize and severity helps you prioritize.
>
> **[2:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=133)** Next is the presentation, which is how effectively the vulnerability assessment tool organizes and conveys the information.
>
> **[2:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=143)** How comprehensive the vulnerability assessment tool is and how much support is available are important factors too.
>
> **[2:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=152)** Another critical thing to look at is the ability to schedule periodic scans.
>
> **[2:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=159)** Network scans cannot be done just once.
>
> **[2:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=161)** It has to be done over and over again periodically.
>
> **[2:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=165)** Therefore, the tool's ability to do periodic scans automatically is imperative.
>
> **[2:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=173)** Adopting a vulnerability assessment tool is a must in securing an industrial strength network.
>
> **[3:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=182)** Finding the best tool for you is another challenge.
>
> **[3:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=185)** You learned, at least what you need to look for from this lesson.

> [!info]- Semantic Content
>
> **Env Vars:** nist (2), cce (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - network (1)

#### Nessus
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980&t=0)** - [Instructor] Nessus comes with all the standard network vulnerability assessment tool features.
>
> **[0:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980&t=7)** One of the most critical features is "vulnerability scanning with real-time updates" because new vulnerabilities show up all the time.
>
> **[0:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980&t=18)** Other features include "malware detection, web application scanning, mobile device detection, scan scheduling, email notifications, and configuration and compliance checks."
>
> **[0:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980&t=33)** Previously, we looked at the National Vulnerability Database, or NVD, by the National Institute of Standards and Technology, or NIST.
>
> **[0:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980&t=45)** NVD is a vulnerability repository that includes common vulnerability and exposure, or CVE.
>
> **[0:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980&t=55)** CVE is a standard way of specifying security vulnerabilities widely accepted by industry professionals and researchers in the cybersecurity field.
>
> **[1:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980&t=67)** Therefore, it makes sense for Nessus to adopt the standard, like CVE, to track network vulnerabilities.
>
> **[1:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980&t=76)** You can download Nessus on this website.

> [!info]- Semantic Content
>
> **Env Vars:** cve (3), nvd (2), nist (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Network scanning with Nessus
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=0)** - [Instructor] Nessus is a web application.
>
> **[0:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=3)** Once you install Nessus, you can access it through your web browser.
>
> **[0:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=8)** Make sure that you're typing the right URL, localhost:8834.
>
> **[0:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=16)** Ignore the not secure warning.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=19)** Choose register for Nessus Essentials. Click on continue.
>
> **[0:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=25)** After registering, you can create your Nessus username and set up a password.
>
> **[0:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=32)** My username is admin.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=35)** I already ran a scan called First Scan.
>
> **[0:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=39)** The first scan I ran was host Discovery, which finds all the devices connected to your network.
>
> **[0:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=46)** It also shows open ports for each discovered host.
>
> **[0:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=51)** To see the vulnerabilities message found, click on this tab.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=57)** Let's click on the first vulnerability, not a severity, which is info.
>
> **[1:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=63)** In addition to the host discovery scan type, there are many others you can run.
>
> **[1:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=68)** To do a new scan, let's go back to my scans.
>
> **[1:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=73)** Click on the plus sign here called new scan.
>
> **[1:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=78)** There are three major scan types, discovery, vulnerabilities, and compliance.
>
> **[1:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=84)** Let's run a new basic network scan.
>
> **[1:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=88)** The name of this scan is test.
>
> **[1:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=91)** The targets are the hosts to be scanned.
>
> **[1:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=94)** We can scan our entire subnet by typing 192.168.35.04/24.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=107)** Select launch, and click on it.
>
> **[1:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=111)** The scan is running now.
>
> **[1:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=113)** While the scan is going on, you can also see the status.
>
> **[1:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=117)** Nessus is already finding many vulnerabilities.
>
> **[2:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=121)** As you can see, Nessus does a good job prioritizing the vulnerabilities and allows you to tackle the most serious ones first.
>
> **[2:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=132)** The medium vulnerabilities just showed up and now it's placed on the top of the list.
>
> **[2:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=139)** Do you like what you've seen so far?
>
> **[2:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=141)** Network vulnerability assessment could be a user friendly and satisfying experience and Nessus is a proof of that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (1), type, (1)
> **UI Navigation:** click on (5)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), set up (1)
> **CLI Commands:** make (1)
> **URLs:** [localhost:8834](https://localhost:8834) (1)
> **Ports:** :8834 (1)
> **Env Vars:** url (1)


### 7. Logging and Monitoring

> [↑ Back to Table of Contents](#table-of-contents)

#### Logging
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=0)** - [Instructor] Logging goes hand in hand with monitoring.
>
> **[0:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=4)** Monitoring your network can be done in real time or after the fact.
>
> **[0:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=9)** Logging is necessary for after the fact monitoring.
>
> **[0:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=13)** It establishes an audit trail, which is often mandated.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=19)** There are many sources of logs.
>
> **[0:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=21)** For example, all the hosts in your network generate logs.
>
> **[0:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=26)** The host here refer to computers, routers, firewalls, IDSs, IPSs servers, et cetera.
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=38)** IDSs are intrusion detection systems.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=42)** IPSs are intrusion prevention systems.
>
> **[0:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=46)** Any devices connected to your network can generate these log messages therefore, there overwhelming sources of logging, which creates a need for forwarding the logs to a centralized log server where you can monitor all the logs simultaneously.
>
> **[1:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=67)** A centralized log server collects all these log messages from individual hosts in your network.
>
> **[1:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=74)** Logging is important, but if nobody analyzes the logs, it's good for nothing.
>
> **[1:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=80)** This is why logging is usually combined with a feature such as alerts, automatically generated and sent to relevant people via emails and text messages.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### syslog-ng
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=0)** - [Instructor] syslog-ng is a log server and can also be used to forward logs.
>
> **[0:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=8)** syslog is a predecessor of syslog-ng.
>
> **[0:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=12)** ng in syslog-ng stands for next generation.
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=17)** To live up to its name, syslog-ng must be better and faster than syslog.
>
> **[0:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=25)** What does syslog-ng do?
>
> **[0:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=27)** First of all, it collects logs from various sources.
>
> **[0:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=32)** It forwards the logs to another log management system or a database.
>
> **[0:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=39)** One of syslog-ng's essential features is filtering.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=42)** Without it, the number of logs will be too overwhelming to manage.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=47)** You want to be able to select the log items relevant to your security goals.
>
> **[0:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=53)** Filtering is based on the criteria, such as facility and log levels.
>
> **[0:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=59)** Facility refers to the process that generated a log message on a host.
>
> **[1:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=65)** Each facility has a unique ID.
>
> **[1:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=68)** The facility code for log messages originating from a mail system process is 2, while the code for those created by access control processes is 4.
>
> **[1:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=81)** Therefore, you can filter the log messages according to their facility identifiers.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=87)** The log levels represent the severity of the log messages.
>
> **[1:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=93)** The highest level is 0, indicating that the system is unusable.
>
> **[1:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=97)** The lowest level is 7, which is for debugging.
>
> **[1:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=102)** The levels in between are alert, critical, error, warning, notice, and informational.
>
> **[1:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=111)** The severity is in the descending order.
>
> **[1:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=115)** Another vital syslog-ng feature is processing that manipulates the collected logs.
>
> **[2:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=123)** With syslog-ng, you should be able to address most of your logging needs.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), stands for (1), refers to (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Log forwarding: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=0)** - [Instructor] In this lesson, we'll configure Snort to forward its log messages to a syslog-ng server.
>
> **[0:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=8)** Let's modify the Snort configuration file.
>
> **[0:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=11)** Type cd /etc/snort/.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=15)** Press Enter.
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=17)** Type ls.
>
> **[0:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=18)** You can see the snort.conf file here.
>
> **[0:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=23)** Let's edit the snort.conf file as root.
>
> **[0:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=27)** Type sudo nano snort.conf.
>
> **[0:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=34)** Press Enter.
>
> **[0:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=36)** Let's do a search and look for syslog.
>
> **[0:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=39)** Press Ctrl and W together.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=42)** Enter syslog as a search term. Press Enter.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=47)** We found the line we need.
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=49)** Let's uncomment this line.
>
> **[0:52](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=52)** By uncommenting, what I mean is removing the pound sign.
>
> **[0:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=58)** The line says output alert_syslog: LOG_AUTH LOG_ALERT.
>
> **[1:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=73)** Press Ctrl and X together to save the file.
>
> **[1:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=78)** Type Y, press Enter.
>
> **[1:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=81)** Now Snort is ready to send its log messages to a syslog-ng server.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=87)** However, there's one more step you should take.
>
> **[1:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=91)** When you run Snort, you need to use a special option, which is -s, to tell Snort that now the log messages are going to syslog-ng.
>
> **[1:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=105)** Let's give it a try.
>
> **[1:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=106)** Type sudo snort -s, and then use the configuration file option, which is -c /etc/snort/snort.conf.
>
> **[2:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=124)** We'll be monitoring the external network interface card of the Ubuntu router host, which is ens32.
>
> **[2:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=133)** Therefore, type -i ens32.
>
> **[2:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=139)** Press Enter.
>
> **[2:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=140)** Now Snort is running.
>
> **[2:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=143)** Because we changed the setting, the log messages are no longer coming to the console.
>
> **[2:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=149)** It's not going to the Snort log files either.
>
> **[2:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=153)** They're all being sent to syslog-ng.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), try. (1), interface (1)
> **CLI Commands:** sudo (2), cd (1), ls (1)
> **Env Vars:** log_auth (1), log_alert (1)
> **Code Identifiers:** alert_syslog (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Log forwarding: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=0)** - [Instructor] Syslog-ng is already installed on my Ubuntu router host, but the command is sudo apt install syslog-ng.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=15)** Press Enter.
>
> **[0:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=16)** As you can see, it's already installed.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=19)** Let's check if our syslog-ng service is up and running.
>
> **[0:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=24)** Type sudo systemctl status syslog-ng.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=37)** Press Enter.
>
> **[0:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=39)** As you can see, it's active.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=41)** Type Q to get out.
>
> **[0:44](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=44)** The syslog-ng service is running on our Ubuntu router host.
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=49)** Which is the same host where snort is up and running.
>
> **[0:54](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=54)** We'll be forwarding snort log messages through the syslog-ng log service.
>
> **[1:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=61)** Then we'll forward the same log messages to a centralized log server.
>
> **[1:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=67)** The centralized log server solution will be using is Kiwi.
>
> **[1:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=71)** Let's go to the syslog-ng configuration file, by typing cd /etc/syslog-ng/ and press Enter.
>
> **[1:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=83)** Type ls.
>
> **[1:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=84)** Press Enter.
>
> **[1:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=85)** And you can see that syslog-ng.conf is there.
>
> **[1:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=92)** Type sudo nano syslog-ng.conf.
>
> **[1:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=101)** Press Enter.
>
> **[1:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=102)** Let's do a search and look for the term destination.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=107)** CTRL and W Key together.
>
> **[1:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=110)** Type destination, press Enter.
>
> **[1:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=113)** Go to the line where it says, send a message to an other host.
>
> **[1:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=119)** We'll create our own destination here to define the destination for the snort log messages, being forwarded to our centralized log server Kiwi.
>
> **[2:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=132)** Type destination space and then df, standing for destination facility _snort_remote {.
>
> **[2:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=146)** We'll be using udp instead of tcp to send our log messages, because we don't really need a reliable connection.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=154)** Udp stands for User Datagram Protocol.
>
> **[2:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=158)** Type the IP of the target log server, which is 192.168.70.130.
>
> **[2:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=170)** Make sure you have the IP address in between the two double codes.
>
> **[2:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=176)** And then the port number, type port, and then the port number is 514.
>
> **[3:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=182)** We need parenthesis after udp, and then we need to close the parenthesis here, and then ;};.
>
> **[3:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=193)** Our destination is now defined.
>
> **[3:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=196)** The next step is to define our own log function, so that we can forward our messages to the third party remote log server.
>
> **[3:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=207)** Let's go down to the end of the file, type log {.
>
> **[3:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=213)** We first define what the source is.
>
> **[3:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=216)** Type source(s_src);
>
> **[3:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=225)** The syslog-ng.conf defines s_src, as all the messages coming from the local host, including the messages originating from our snort program.
>
> **[4:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=242)** Next, we'll be using a filter, a predefined one.
>
> **[4:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=248)** In this case, which is f_auth.
>
> **[4:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=253)** So type filter(f_auth);.
>
> **[4:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=260)** Do you remember that one of the log facility types used by snort was auth?
>
> **[4:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=269)** The last step is to specify the destination.
>
> **[4:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=273)** We define the custom destination earlier.
>
> **[4:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=276)** Type destination(df_snort_ remote); };.
>
> **[4:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=290)** We're now done with editing our syslog-ng.conf.
>
> **[4:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=293)** Let's save it by pressing Ctrl and X together.
>
> **[4:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=297)** Type Y. Press Enter.
>
> **[5:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=300)** Let's restart syslog-ng, so that we get to use the updated configuration information.
>
> **[5:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=308)** Type sudo systemctl restart syslog-ng.
>
> **[5:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=320)** Press Enter.
>
> **[5:21](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=321)** Our syslog-ng server has just restarted without any problems.
>
> **[5:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=327)** What this means is that from now on, all the snort log messages are being forwarded to our remote centralized log server.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (4), systemctl (2), apt (1), cd (1), ls (1)
> **Code Keywords:** let (6), function (1), case, (1)
> **Code Identifiers:** s_src (2), f_auth (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** install (1), make sure you have (1)
> **Env Vars:** ctrl (1)
> **Versions:** 192.168.70 (1)
> **Definitions:** stands for (1)

#### Kiwi
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=0)** - [Instructor] Kiwi is a Windows-based Syslog server.
>
> **[0:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=4)** You can download Kiwi by visiting the Kiwi website here.
>
> **[0:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=9)** You can also download a free version on this website.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=15)** I'm using the commercial version for my demo.
>
> **[0:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=18)** The Kiwi log server is running on my Windows host sharing the same network with the external interface of the Ubuntu router host, which is DNS 32.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=35)** Here, you can see what Kiwi Syslog Server looks like.
>
> **[0:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=39)** Do you see the stored messages forwarded by the syslog-ng service right here?
>
> **[0:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=48)** Check out all the log messages referring to the snort intrusion detection system right here.
>
> **[0:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=55)** Let's take a look at how our Kiwi Syslog Server is configured.
>
> **[1:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=60)** Go to Setup, Settings.
>
> **[1:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=62)** Select Inputs, and you can see it's using UDP, port 514.
>
> **[1:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=71)** You're now able to forward the alerts from the snort intrusion detection system all the way to the centralized Kiwi Syslog Server.
>
> **[1:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=82)** Good job.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), let (1)
> **Env Vars:** dns (1), udp (1)
> **Ports:** port 514 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### SNMP
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=0)** - [Instructor] In managing a sizable network, Simple Network Management Protocol, or SNMP, is a handy thing to have.
>
> **[0:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=9)** SNMP defines mechanisms for implementing various features needed for maintaining networks, including securing them.
>
> **[0:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=19)** SNMP specifies the standards on how to collect network device data.
>
> **[0:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=24)** It also covers the ability to control network devices remotely.
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=30)** SNMP implementations allow you to monitor the health of network devices too.
>
> **[0:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=36)** All these capabilities are necessary to enhance network security.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=41)** SNMP consists of agents, managers, management information bases, or MIBs, and managed devices.
>
> **[0:53](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=53)** An agent collects the device data from an SNMP-managed device.
>
> **[1:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=60)** It receives commands from a manager and executes them.
>
> **[1:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=64)** A manager controls a managed device through an agent.
>
> **[1:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=69)** It obtains data from an agent.
>
> **[1:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=71)** Management information base, or MIB, stores the SNMP data.
>
> **[1:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=78)** A managed device is controlled by an agent, therefore, the managed device is an SNMP information source.
>
> **[1:28](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=88)** Most of the time, agents just receive commands from their managers, but sometimes they also send messages back to their managers.
>
> **[1:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=99)** These messages sent back to the managers are called traps.
>
> **[1:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=103)** These are alerts sent by the agents when there are errors or problems on a managed device.
>
> **[1:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=111)** In summary, you have a managed device in SNMP, such as a server, or switch.
>
> **[1:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=119)** Agents sit on top of it.
>
> **[2:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=121)** There's another host on which a manager runs, and the manager talks to the agent and receives data by using a Get command.
>
> **[2:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=133)** It also controls the agent through a Set command.
>
> **[2:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=137)** An agent sometimes sends messages to its manager, and these messages are called traps.
>
> **[2:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=144)** MIB is a database used by the SNMP manager host.

> [!info]- Semantic Content
>
> **Env Vars:** snmp (10), mib (2)
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** switch (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/next-steps?u=76281980&t=0)** - Thanks for watching this course.
>
> **[0:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/next-steps?u=76281980&t=2)** We covered a lot, and you should be prepared to learn even more about network security.
>
> **[0:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/next-steps?u=76281980&t=8)** To advance your knowledge of network security and fundamental networking concepts, I recommend you take the learning path, become an IT security specialist.
>
> **[0:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/next-steps?u=76281980&t=18)** If you're interested in learning how to investigate cybersecurity incidents, take my course on learning Network Forensics.
>
> **[0:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/next-steps?u=76281980&t=26)** Finally, be sure to connect on LinkedIn and post your course completion with the #lilprotectyournetwork.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/next-steps?u=76281980&t=35)** I look forward to hearing from you.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Cross-References:** we covered (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Jungwoo Ryoo]]

## Resources

- Exercise files available

## Skills Covered

- Network Administration
- Open-Source Software
- Network Security Implementation

## Path Context

### In [[Explore a Career in Computer Forensics]]
← [[Wireshark- Malware and Forensics]] | **6 of 9** | [[Learning Autopsy for Digital Forensics]] →

## Appears In

- [[Explore a Career in Computer Forensics]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Network Administration
- [[MPLS Segment Routing]] — Network Administration
- [[Server Administration Essential Training]] — Network Administration
- [[Networking Foundations- Wide Area Networks (WANs)]] — Network Administration
- [[Networking Foundations Networking Basics]] — Network Administration

---

[↑ Back to top](#)