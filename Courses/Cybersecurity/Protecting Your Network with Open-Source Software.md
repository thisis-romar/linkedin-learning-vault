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
created: 2026-05-03
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
  - [Protect your network with free and open-source software](#protect-your-network-with-free-and-open-source-software)
  - [What you should know](#what-you-should-know)
  - [Environment setup](#environment-setup)
- [**1. Understanding Open-Source Software**](#1-understanding-open-source-software) (5 videos)
  - [What is open-source software?](#what-is-open-source-software)
  - [Open-source software in networking](#open-source-software-in-networking)
  - [Open-source solutions in cybersecurity](#open-source-solutions-in-cybersecurity)
  - [Open-source vs. commercial software](#open-source-vs-commercial-software)
  - [Costs and savings](#costs-and-savings)
- [**2. Firewalls**](#2-firewalls) (6 videos)
  - [What is a firewall?](#what-is-a-firewall)
  - [Host firewalls](#host-firewalls)
  - [Network firewalls](#network-firewalls)
  - [Static packet filtering vs. stateful packet inspection](#static-packet-filtering-vs-stateful-packet-inspection)
  - [Challenge: Disable UFW](#challenge-disable-ufw)
  - [Solution: Disable UFW](#solution-disable-ufw)
- [**3. Host as a Router**](#3-host-as-a-router) (10 videos)
  - [Netfilter and iptables](#netfilter-and-iptables)
  - [Setting up a host firewall using iptables](#setting-up-a-host-firewall-using-iptables)
  - [Automating netfilter configuration](#automating-netfilter-configuration)
  - [Understanding hosts as routers](#understanding-hosts-as-routers)
  - [Adding a network adapter](#adding-a-network-adapter)
  - [Testing the second adapter](#testing-the-second-adapter)
  - [Setting up IP forwarding](#setting-up-ip-forwarding)
  - [Changing netfilter settings: Part 1](#changing-netfilter-settings-part-1)
  - [Changing netfilter settings: Part 2](#changing-netfilter-settings-part-2)
  - [Testing the router](#testing-the-router)
- [**4. Host as a Network Firewall**](#4-host-as-a-network-firewall) (10 videos)
  - [Setting up hosts as network firewalls](#setting-up-hosts-as-network-firewalls)
  - [Setting up a web server](#setting-up-a-web-server)
  - [Port forwarding](#port-forwarding)
  - [Testing port forwarding](#testing-port-forwarding)
  - [Understanding one-legged DMZ](#understanding-one-legged-dmz)
  - [Understanding true DMZ](#understanding-true-dmz)
  - [Understanding an application proxy firewall](#understanding-an-application-proxy-firewall)
  - [Setting up Squid](#setting-up-squid)
  - [Challenge: Fine-tuning the Squid configuration](#challenge-fine-tuning-the-squid-configuration)
  - [Solution: Fine-tuning the Squid configuration](#solution-fine-tuning-the-squid-configuration)
- [**5. Packet Analysis**](#5-packet-analysis) (7 videos)
  - [What is packet analysis?](#what-is-packet-analysis)
  - [ARP poisoning example](#arp-poisoning-example)
  - [Packet capturing with Wireshark](#packet-capturing-with-wireshark)
  - [Exploring Wireshark's advanced features](#exploring-wiresharks-advanced-features)
  - [Wireshark hands-on](#wireshark-hands-on)
  - [Challenge: Filtering with IP addresses and port numbers](#challenge-filtering-with-ip-addresses-and-port-numbers)
  - [Solution: Filtering with IP addresses and port numbers](#solution-filtering-with-ip-addresses-and-port-numbers)
- [**6. IDSs and Vulnerability Assessment**](#6-idss-and-vulnerability-assessment) (8 videos)
  - [What is an IDS?](#what-is-an-ids)
  - [Introducing Snort](#introducing-snort)
  - [Snort as a packet sniffer](#snort-as-a-packet-sniffer)
  - [Snort as an IDS: Establishing rules](#snort-as-an-ids-establishing-rules)
  - [Snort as an IDS: Detecting pings](#snort-as-an-ids-detecting-pings)
  - [What is a network vulnerability assessment?](#what-is-a-network-vulnerability-assessment)
  - [Nessus](#nessus)
  - [Network scanning with Nessus](#network-scanning-with-nessus)
- [**7. Logging and Monitoring**](#7-logging-and-monitoring) (6 videos)
  - [Logging](#logging)
  - [syslog-ng](#syslog-ng)
  - [Log forwarding: Part 1](#log-forwarding-part-1)
  - [Log forwarding: Part 2](#log-forwarding-part-2)
  - [Kiwi](#kiwi)
  - [SNMP](#snmp)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Protect your network with free and open-source software](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/protect-your-network-with-free-and-open-source-software?u=76281980&t=0)** - [[Network Security]] breaches can cost organizations millions of dollars. After all, if your network is down, it's difficult to get anything done. In this course, you'll explore how to make network security a top priority. I'll help you develop an overall understanding of fundamental network security concepts. Then I'll demonstrate essential tools you can adopt immediately at no cost. I'll teach you how to set up firewalls, analyze packets, conduct [[Intrusion Detection]] and prevention, and monitor your network. I'm Jung Ryoo, and I'm excited to share my knowledge I've gained as a professor, researcher and practitioner. If you're ready to protect your network with [[Open-Source Software]], let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (3), [[Intrusion Detection]] (1), [[Open-Source Software]] (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - network (1)

#### [What you should know](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-you-should-know?u=76281980&t=0)** - [Instructor] This course has no prerequisites. Basic knowledge in [[Linux]] operating systems will be helpful, but don't worry if you're not familiar with the [[Ubuntu]] Linux OS I use throughout this course. Any knowledge of networking is also beneficial. I'll explain what I'm doing without assuming any prior knowledge, and you shouldn't have any problems understanding my instructions. I did all the hands-on exercises in this course using VMware Workstation, however, you can use any virtual machine solutions or hypervisors to allow you to create [[Virtual Machines]] in virtual networks. At a minimum, you need two Ubuntu virtual machines and one [[Windows]] virtual machine. By the end of this course, you'll have a reasonable understanding of Linux and networking in general, in addition to learning how to protect your network with open source software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Ubuntu]] (2), [[Virtual Machines]] (2), [[Windows]] (1)
> **Speakers:** - [instructor] (1)

#### [Environment setup](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=0)** - [Instructor] Deploying [[Virtual Machines]], or VMs, in a virtualization environment is relatively straightforward and out of scope for this course. However, there are some subtle things you need to keep in mind to avoid potential dead ends. I had to create two virtual subnets with the following subnet IDs. 192.168.70.0/24 and 192.168.35.0/24. The 192.168/24 network does not have direct access to the internet while 192.168.70/24 does.
>
> **[0:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=57)** The 192.68.35.0/24 network eventually gets connected to the internet through the [[Ubuntu]] router host. Make sure that you change the network gateway of your Ubuntu host to 192.168.35.136, which is the internal network interface of the Ubuntu router host, so that the Ubuntu host knows how to get to the 192.168.70.0/24 network and the internet. Whenever you restart your Ubuntu router VM, the forwarding option is disabled by default. Therefore, you need to enable forwarding each time by issuing the command echo 1 > /proc/sys/net/ipv4/ip_forward
>
> **[2:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/environment-setup?u=76281980&t=123)** If you don't want to use VMware workstation to try out the hands-on exercises, you can check out cloud solutions like [[Microsoft Azure]] or try a hypervisor like Proxmox, which is a dedicated operating system specializing in installing VMs on a local machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (5), [[Virtual Machines]] (1), [[Microsoft Azure]] (1)
> **Versions:** 192.168.70 (3), 192.168.35 (2), 192.168 (1), 192.68.35 (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ip_forward (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding Open-Source Software

[↑ Back to Table of Contents](#table-of-contents)

#### [What is open-source software?](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=0)** - [Instructor] Source code refers to the lines of a computer program. Therefore, open-source literally means software whose source code is open to the public. Open-source licensing allows users to modify or extend the existing code as long as they keep its new versions open-source. Please note that being open source is not the same as being free of charge. Many vendors out there keep some or all of their product code open-source, but still sell their software with a price tag. Nessus, which is a vulnerability management system, or VMS is a good example. It started as an open-source project, but eventually evolved into a commercial product. Luckily for us, most of the software applications featured in this course are both open-source and free. [[Open-Source Software]] users need to accept the specific terms of a license. There is no restriction on how you use your open source software, but some open source licenses require users to release their changes if they modify or extend the original code. Others also require making the modified or extended code available free of charge.
>
> **[1:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-open-source-software?u=76281980&t=96)** The use of open source software and networking and [[Network Security]] is substantial. One such example is [[Linux]]. Many service providers use Linux to run their backend systems, such as [[Web Servers]] and base operating systems to host [[Virtual Machines]]. The global open-source software market is growing fast. Many major corporations are contributing to the open-source community. Therefore, learning and mastering open-source options is critical for students and professionals who aspire to [[Microsoft Excel|excel]] in networking or network security. Open-source solutions are still relevant even if you're not an IT professional. If you're a home user or small business owner who wants to strengthen your network security without a hefty price tag, you're taking the right course. I'm thrilled to be your guide for an exciting journey throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (3), [[Open-Source Software]] (2), [[Linux]] (2), [[Web Servers]] (1), [[Virtual Machines]] (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (2)
> **Env Vars:** vms (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Open-source software in networking](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=0)** - [Instructor] When you ask any [[Computer Networking]] professional if they use [[Open-Source Software]], they'll look at you as if you are an alien. There are so many they're using daily. To name a few, these range from operating systems or OSs, like [[Linux]], to popular standalone applications, such as packet sniffers. I'm sure many of you're already familiar with [[Wireshark]], a popular packet sniffing program. Most of the networking software comes prepackaged together with an OS. On [[Microsoft]] [[Windows]], ipconfig is such a program. We'll be using it frequently to check the properties of a [[NIC|network interface card]] you see here. The most basic information ipconfig provides is the Internet protocol, or IP address, that uniquely identifies a network device. The equivalent open-source utility to ipconfig on Linux is ifconfig or its modern version called IP. Now, you may ask why they use two different names for an almost identical functionality. My answer to that is nobody knows. But these subtle differences are what makes each OS unique
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=98)** and special with their own individual flavors. These also mean job security for many of us. We'll be using [[Ubuntu]] in this course, which is popular but doesn't include software like Wireshark by default. Several Linux distributions, like Kali and SANS Investigative Forensics Toolkit, or SIFT, specialize in [[Network Security]] and [[Network Forensics]] with Wireshark pre-installed. Installing well-known open-source software, like Wireshark, on Linux is straightforward. Let's give it a try on Ubuntu. Type sudo apt update.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-software-in-networking?u=76281980&t=154)** To get the latest software package information, press Enter. Type your password. Next, type sudo apt install wireshark. Press Enter. Type Y, and press Enter. Choose No here, and press Enter. That's it. There's no need to make a purchase or anything. You can also install other open source networking tools, like [[Nmap]] and [[Netcat]] free of charge. There are too many open-source tools to mention here, but ifconfig, IP, Wireshark, Nmap, and Netcat already cover many grounds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (6), [[Linux]] (4), [[Open-Source Software]] (2), [[Ubuntu]] (2), [[Nmap]] (2)
> **CLI Commands:** sudo (2), apt (2), make (1)
> **Env Vars:** sans (1), sift (1)
> **Prerequisites:** install (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Open-source solutions in cybersecurity](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=0)** - [Instructor] Many [[Cybersecurity]] solutions are open source and free. Hence, this course makes perfect sense and gets to exist. Good for us. The cybersecurity domains I cover include firewalls, packet and protocol analysis, [[Intrusion Detection]] and prevention, or IDS and IPS, [[Vulnerability Assessment]], logging and monitoring. iptables is what [[Linux]] uses to control the flow of data packets in and out of a host or network. Any firewall implementations in Linux pretty much builds on iptables. Knowing iptables is like unlocking the secret code of controlling network packets in general. [[Wireshark]] is one of the most popular packet snipers and allows you to intercept packets and inspect them. Many organizations use Wireshark to troubleshoot networking problems, test software, and develop protocols. I recommend Snort as a great tool to start with when considering an IDS or IPS solution. Snort is versatile and can take on packet sniffing,
>
> **[1:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-solutions-in-cybersecurity?u=76281980&t=94)** IDS and IPS tasks, depending on your needs. Nessus is a vulnerability management system, or VMS. It comes through systems throughout a network and identifies weaknesses, such as zero-day vulnerabilities. For those of you unfamiliar with the term zero-day, it means a security vulnerability whose fix is not available yet and susceptible to attacks. syslog and syslog-ng are a mainstream way of handling, logging, and monitoring. Networking [[Hardware]] and software generate log files, which in turn enables engineers to monitor their health and look for any signs of intrusion. There are many software options and solutions other than what I'm covering in this course, but you'll get a good feel for what's available in general by following me along with the lessons. Once you get a decent understanding of what these tools can do in cybersecurity, migrating to other similar software applications won't be a problem. We are lucky that there's so many choices at our fingertips, and I want you to take full advantage of these opportunities by exploring them with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (3), [[Linux]] (2), [[Wireshark]] (2), [[Intrusion Detection]] (1), [[Vulnerability Assessment]] (1)
> **Env Vars:** ids (3), ips (3), vms (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Open-source vs. commercial software](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=0)** - [Instructor] There are trade offs you're making by using open source software over its commercial counterparts. Let's talk about the advantages first. Of course, the most obvious one is the fact that it's free. But is it really free? Aren't there any hidden costs? We'll investigate this question more in depth later. Another strength is its transparency, which contributes to security. Users can access the source code and know exactly what they are getting into. Usually there's a vibrant community of developers supporting an open source product who also monitor security defects. If there is a known bug, they know about it. As a result, security vulnerabilities don't linger too long. Commercial software is like a black box. Nobody knows other than its developers what's in it, which introduces many uncertainties and potential for design flaws and coding errors. When it comes to disadvantages, one of the biggest is support. Yes, driving open source communities do exist and they're willing to support your product, but there's no guarantee. Sometimes an open source project just disappears
>
> **[1:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/open-source-vs-commerical-software?u=76281980&t=95)** for various reasons, one of which could be the lack of funding or interest. Therefore, [[Sustainability]] is another enormous challenge. If you need professional support for the solution you're adopting, a better route could well be commercial. Because of the pros and cons, hybrid options are emerging, companies make their product open source, but charge fees for [[Customer Support]], extra features and feature upgrades. A good example is SNORT, which is an [[Intrusion Detection]] slash prevention system that monetizes intrusion detection and prevention rules. Here you can see the various subscription options the company is providing. You can even go for no support option if you have your own IT team with the right expertise. The nice thing about this trend is that the market is evolving to benefit the users and consumers. I have no problem with that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (2), [[Sustainability]] (1), [[Customer Support]] (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** snort (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Costs and savings](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=0)** - [Instructor] Have you ever heard of the total cost of ownership, or TCO? TCO is highly relevant to our discussion of open-source [[Microsoft Products|products]]. On the surface, [[Open-Source Software]], which is also free, appears to be a fantastic deal. However, there are many hidden costs when you take a closer look. Just like anything in this world, software applications have lifespans or lifecycles. We purchase and introduce them to a production environment, which is comparable to a person being born. Ample support is necessary, especially in the beginning, because all the rough edges need to be smoothed out for the software to be fully integrated into its environment. The users also need support, in the form of training, on how to use the software properly. As I mentioned previously, end user support is problematic unless you have a dedicated and knowledgeable team managing your open-source software internally. You can shift much of these support costs to vendors like [[Microsoft]] when using a commercial product. Considering the cost incurred during its entire lifecycle, free and open-source solutions may cost you more
>
> **[1:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/costs-and-savings?u=76281980&t=99)** than merely using a third party offering commercial software and [[Technical Support]]. Because of this reality, many open-source providers also offer technical support and make a profit. Therefore, you should always consider taking advantage of your support options whether the software you choose is open-source or not. Despite the TCO, open-source is still an excellent choice when you're starting to build your [[Cybersecurity]] infrastructure and want to evaluate different options before settling on one. If you already have in-house expertise, you can download, install, and try it without worrying about speaking with sales representatives. My job in this course is to help you develop your knowledge of some of the most popular open-source cybersecurity solutions so that you minimize your TCO.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Open-Source Software]] (2), [[Technical Support]] (2), [[Cybersecurity]] (2), [[Microsoft Products|Products]] (1), [[Microsoft]] (1)
> **Env Vars:** tco (4)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. Firewalls

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a firewall?](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=0)** - [Instructor] A firewall is the most basic form of defense in [[Network Security]]. It provides a foundation for your overall network defense. Therefore, it's critical to clearly understand what a firewall is and learn what you can do with it to improve your network security. Before going any further, let's define some frequently used networking terms in this course. A computer network refers to two or more hosts connected through a communication medium, such as a cable or radio signal to share resources. We leave out the [[Microsoft Word|word]] computer from now on in our discussions of computer networks for gravity. Host are any devices in the network with a unique address. Packets are messages containing data host exchange in a network. Firewalls restrict the flow of network traffic by dropping suspicious attack packets or accepting seemingly safe packets. Firewalls also log the details of dropped packets for later review by administrators. The most fundamental feature of a firewall is filtering the packets. There are two types of filtering going on in a firewall. The first type is called ingress filtering,
>
> **[1:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=96)** which filters the incoming packets. The second type of filtering is referred to as egress filtering, which filters the outgoing packets. Once a packet arrives at a host based on its destination IP address, the firewall must decide whether to drop it or forwarded to an appropriate location according to its port number. To understand the relationship between port numbers and IP addresses, you need to know the different types of addresses used in networking. The first one is the target or destination host IP, which is used to reach a destination host. For example, 192.168.0.1 is a host internet protocol or IP address. Please note that the IP address range we use here is for those used only within a private network. The second type of address is the port number. This one is used to reach an application after a packet arrives at a host. For example, the number 80 is used for a hypertext transfer protocol or HCTP or web server. Therefore, based on the firewall rules, if the port is open, the packet is forwarded to a target application on the host. If the port is closed, the packet is dropped.
>
> **[3:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-a-firewall?u=76281980&t=194)** The relationship between a firewall and the ports it protects, it's a big step toward mastering network security. Congratulations on taking this crucial first step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (3), [[Microsoft Word|Word]] (1)
> **Definitions:** refers to (1), is called (1), is a  (1)
> **Analogies:** for example (2), such as (1)
> **Env Vars:** hctp (1)
> **Versions:** 192.168.0 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Host firewalls](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=0)** - [Instructor] Host firewalls are standalone firewalls that only protect a single host. Firewalls can be categorized according to the scope of what they protect. The first type is host firewalls, and the other is network firewalls. Our focus in this lesson is host firewalls. Host firewalls monitor activities occurring on network interfaces on a single host. They decide whether to accept or reject packets for a single host. Major operating systems come with their own built-in host firewalls. Let's first take a look at one provided by [[Windows]]. In this case, we'll look at the Windows 11 host firewall. To get to the Windows 11 host firewall, choose settings by typing settings in the search box. Click on open, and then select [[Privacy]] and security. Choose Windows Security. Now you can see firewall and network protection here. Click on it, and here it is. The default configuration of a Windows firewall is to drop all the incoming or ingress packets and to accept all the outgoing or egress packets.
>
> **[1:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=99)** Let's click on Public network and you see the section, incoming connections here. Of course, you can make exceptions to this default setting and then still block all incoming connections by clicking on this box. And we're not changing the setting right now so I'm going to click on no. To turn Windows Firewall on or off, you can use the switch here. Let's go back. If you want to introduce a new Windows host firewall rule, click on Allow an app through firewall. To add a new rule, click on change settings and then allow another app. Next, you can choose the app you want. If you'd like to make some changes in the advanced settings, click on advanced settings. Say Yes. Now you have much more flexibility. On [[Linux]], the Built-in firewall module is called Net Filter.
>
> **[3:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=196)** Let's check out my [[Ubuntu]] host. The default firewall on Ubuntu is uncomplicated Firewall or UFW. To start the firewall type pseudo UFW Enable.
>
> **[3:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=217)** Press Enter. Type the root password that is equivalent to the administrator password in windows. If you want to open a new port, type pseudo UFW allow,
>
> **[3:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=236)** and then the port number. Let's say that the port number is 22222. Press enter. To delete the rule you just added, type pseudo UFW delete allow 22222.
>
> **[4:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/host-firewalls?u=76281980&t=263)** Press enter. Now you know how to manage your Windows and Linux host firewalls, and it's time for you to try this newly obtained knowledge on your own computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (9), [[Linux]] (2), [[Ubuntu]] (2), [[Privacy]] (1)
> **UI Navigation:** click on (7)
> **Env Vars:** ufw (4)
> **CLI Commands:** make (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Network firewalls](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=0)** - [Instructor] Network firewalls protect entire networks. Therefore, their scope of protection is much broader than that of host firewalls. Network firewalls sometimes come in the form of appliances. These are devices dedicated to controlling the flow of network traffic between internal and external networks. Although network firewalls are themselves firewalls, they still need to be protected by host firewalls. As a result, they have a dual mission. The first one is that as a host firewall, whose goal is host protection. The second mission is to protect the network it belongs to, which has a much wider scope. One of the core functionalities of a network firewall is packet forwarding. In this case, they receive packets and send them to their destinations through different network interfaces. This functionality is very similar to data routers. It's challenging to distinguish firewalls from routers most of the time, but the difference is that firewalls drop packets. Making a port forwarding decision is a pure firewall feature. In this example, the firewall intercepts a packet arriving at a host with its destination port set to 22222
>
> **[1:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=97)** and then decides to forward or drop the packet based on predefined rules. The network firewall decides to forward the secure shell packet to a host whose IP is 192.168.35.2
>
> **[1:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-firewalls?u=76281980&t=118)** behind a network firewall. Secure shell allows a remote client to access a host. Once the packet arrives at the internal host and the host has an open port, that is 22, the packet gets to its destination. A secure shell server is running on the internal host. As you saw here, the packet arrived at port 22222 of the network firewall, and then the packet got forwarded to the open port of an internal host, which was 22. Your home router should have a built-in network firewall capability. Often, it comes with the port forwarding feature. Because of this reason, many of you may already have set up port forwarding. And if you didn't know, you can set up any computer as a network firewall. We'll try this together later in this course.

> [!info]- Semantic Content
>
> **Cross-References:** as you saw (1), later in (1)
> **Prerequisites:** set up (2)
> **Ports:** port 22222 (1)
> **Versions:** 192.168.35 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Static packet filtering vs. stateful packet inspection](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=0)** - [Instructor] Another way to classify firewalls is by how they examine packets. There are generally two ways firewalls examine packets. One is static packet filtering, or SPF, which inspects packets one at a time. This approach doesn't use any memory. The second method is stateful packet inspection, or SPI, which inspects packets in relation to previous packets. This approach uses memory that remembers the details of each packet. And because of the use of the memory, it has substantial advantages. What does a static packet filtering firewall examine? It looks at source IP, destination IP, source port number, and destination port number. What is then the advantage of stateful packet inspection over static packet filtering? The main advantage is that since it has memory, it doesn't need to inspect all the details of packets every time it sees a packet. For example, let's say an incoming or ingress packet is sent in response to an egress or outgoing packet. Since the staple packet inspection firewall knows it's a response to an outgoing packet, it doesn't inspect all the details of the incoming packet.
>
> **[1:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/static-packet-filtering-vs-stateful-packet-inspection?u=76281980&t=95)** The SPI firewall simply accepts the packet. However, in the case of static packet filtering firewalls, because they don't have any memory, they treat the packet as if they never saw it. Despite this disadvantage, static packet filtering firewalls have their own advantage over stateful packet inspection firewalls. One of the advantages is their simplicity, which makes them easy to configure and maintain. And because they're simple, they also require less computing resources when they're running. Most of the modern firewalls are stateful packet inspection firewalls.

> [!info]- Semantic Content
>
> **Env Vars:** spi (2), spf (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Disable UFW](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=0)** - [Instructor] Imagine you are a network engineer and you have to do some troubleshooting, which sometimes involves disabling a firewall. We learned how to enable UFW, or Uncomplicated Firewall on [[Ubuntu]]. Let's check the status of the UFW firewall by typing "sudo ufw status."
>
> **[0:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-disable-ufw?u=76281980&t=36)** Press enter. Type the route password. Press enter. As you can see, it is active and up and running. Your challenge is now to disable UFW. Do a quick internet search and figure out how to do it on your own. This challenge shouldn't take too long. Maybe about five minutes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (1)
> **Env Vars:** ufw (3)
> **CLI Commands:** sudo (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Disable UFW](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=5)** - [Instructor] All you have to do is type sudo, space, ufw, space, disable.
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-disable-ufw?u=76281980&t=17)** Press Enter. Looks like it worked. Type sudo ufw status again to check if it's really down. Press Enter. Yes, ufw is now inactive. Congratulations, you did it again.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Host as a Router

[↑ Back to Table of Contents](#table-of-contents)

#### [Netfilter and iptables](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=0)** - [Instructor] Netfilter is a built-in [[Linux]] firewall. Every Linux distribution comes with Netfilter because it's part of the Linux kernel. IP tables is a program built to configure the Netfilter firewall. IP tables is a command line interface or [[CLI]] program, which means that you have to rely on a Linux terminal program like this to use it. Here is what a basic IP table's command looks like. That's type pseudo iptables -L
>
> **[0:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=48)** and press enter. This command displays current IP tables settings. If you want to view the manual of the IP tables program, type man iptables. Press enter. You can press the space bar to see more. Press Q to get out. Netfilter organizes its ACL or access control list using tables. ACL is a collection of accept and deny rules for a firewall, which is Netfilter in our case. Netfilter tables in turn contain chains that represent actual ACL rules. The default Netfilter table is filter table, which contains input forward and output chains. Netfilter is a powerful tool. However, the tricky thing is configuration and maintenance. In this diagram, you can see a Netfilter process flow. It visualizes all the inspection points a packet goes through when processed by Netfilter. The process starts with pre [[Routing]].
>
> **[2:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/netfilter-and-iptables?u=76281980&t=147)** Then depending on the routing decision, it's either forwarded or input into a local process and then goes to the output inspection point. Finally, all the packets arrive at the post routing inspection point. There are Netfilter built-in tables other than the filter table, which has input forward and output chains. For example, network address translation or NET is another Netfilter table. Net contains output, pre routing and post routing chains. The Mangle table is used to manipulate packets. Netfilter and IP tables provide a foundation for Linux firewalls. If you can configure Netfilter through IP tables, you should be able to set up any other firewall [[Microsoft Products|products]] out there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5), [[Routing]] (5), [[CLI]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (5), means that (1)
> **Env Vars:** acl (3), cli (1), net (1)
> **Prerequisites:** configure (2), set up (1)
> **Tools:** command line (1), terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Setting up a host firewall using iptables](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=0)** - [Instructor] Let's set up a host firewall using IP tables. The default rules for host firewalls are blocking all the incoming or ingress packets, allowing all the outgoing or egress packets, and then disabling forwarding. Forwarding is for redirecting a packet coming to a particular [[NIC|network interface card]], or [[NIC]], to another NIC. Your computer usually has only a single network interface card. In our case, all we care about is the host itself. Therefore, forwarding is irrelevant. Let's start by looking at the current net filter settings. Type sudo, which temporarily makes you the root or super user only when you're issuing a particular command, space iptables space -L. Press Enter. If your operating system, or OS, asks for a password for the root, provide one. The terminal displays the current net filter settings. According to this output, the chain input accepts all the incoming packets. The forward chain also accepts packets.
>
> **[1:36](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=96)** The output chain accepts all the outgoing or egress packets. Let's see if the firewall rules work. Before moving on, let's check the IP address of the [[Ubuntu]] host. Type ip space address space show. Press Enter. The IP address is 192.168.35.128. Keep this IP address in mind because we're going to ping this IP address from another host. The ping command is used for checking if a host is up or down. Let's now switch to a [[Windows]] machine in the same network. First, activate a Command Prompt. Type cmd here, click on Open. Type ipconfig. Press Enter. The IP address of this host is 192.168 .35.134. Now, I'm going to be pinging the [[Linux]] host from my Windows client by typing ping
>
> **[3:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=190)** space 192.168. .35.128, which is the IP address of the Ubuntu host. Press Enter. My pings are receiving responses from the Ubuntu host. Great, the firewall rules are working because we want them to accept the incoming packets, like my pings. Now, we are going to set up our net filter firewall to block all the incoming traffic while disabling forwarding and allowing the outgoing traffic. The first command to give is sudo space iptables space -P. Make sure P is capital.
>
> **[4:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=257)** - P indicates a default rule for a particular chain. To block forwarding, let's type space FORWARD space DROP. Press Enter. Let's check the updated forwarding rule. I can recall my previous commands by using the up arrow key, and that's what I am going to do. The command is sudo space iptables space -L. Press Enter. Do you see the [[Microsoft Word|word]] DROP next to FORWARD? It was accept when we checked the status last time. Finally, let's drop all the incoming packets by typing sudo iptables.
>
> **[5:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-host-firewall-using-iptables?u=76281980&t=323)** - P INPUT space DROP. Press Enter. Now, let's go back to our Windows host and try to ping the Ubuntu virtual machine again. Here I can recall my previous commands by using the up arrow key again. The command is ping 192.168.35.128. Press Enter. Your ping requests are timing out. There's no response, which means that the firewall is doing its job. What do you think? Setting up the host firewall using the [[CLI]] isn't that bad, right?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (4), [[Windows]] (3), [[NIC|Network interface card]] (2), [[NIC]] (2), [[Linux]] (1)
> **Env Vars:** drop (3), nic (2), forward (2), input (1), cli (1)
> **Versions:** 192.168.35 (2), 192.168 (2), 35.134 (1), 35.128 (1)
> **CLI Commands:** sudo (4), make (1)
> **Speakers:** - p (2), - [instructor] (1)
> **Tools:** terminal (1), command prompt (1)
> **UI Navigation:** switch to (1), click on (1)
> **Prerequisites:** set up (2)

#### [Automating netfilter configuration](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=0)** - [Instructor] It's cumbersome to keep typing iptables commands into our command line interface or [[CLI]]. You can automate this process by creating a shell script. We'll start by creating a file for the shell script. Let's first change our working directory to documents by typing cd, space, Documents. Press Enter, type nano, space, and the name of the file which is myfw, standing for myfirewall.sh. Press Enter. Nano is one of the pre-installed [[Linux]] text editors. Now type iptables, space, -P, capital P,
>
> **[0:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=58)** meaning the default firewall rule, space, INPUT for all the incoming traffic. We'll be dropping all the incoming traffic which is why we type DROP next. Now the second rule is for the outgoing traffic. The net filter chain for that is OUTPUT. We'll allow all the outgoing traffic which is why we type iptables, space, dash capital P, space, OUTPUT, space, ACCEPT. Press Enter. Next type iptables, space, dash capital P, space, FORWARD, space. The forward chain is going to be disabled. Therefore we type DROP here. Now save the file by pressing the Control and the X keys together. Type Y, and then press Enter to accept the current file name which is myfw.sh.
>
> **[2:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=144)** Before running our shell script, we want to make sure our shell script is executable. To check this, type ls, space, - l, and then press Enter. The permissions are read-write, read-write, and read for the user of the file group and others. We need to change the permissions to make the file executable. To do this, type chmod, space, and chmod here stands for change mode. ugo, plus sign, and x. Space, and then the name of the file, myfirewall.sh.
>
> **[3:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=209)** x here means executable and ugo plus x indicates adding executable permission to the user, group and others, press Enter. Let's do ls, space, -l again to see if the file permissions have been updated. Press Enter, the color of the file name, myfirewall.sh is now green, indicating that the file is executable. You can also see the x having been added to the file permissions. rwx for the user. rwx for the group, rnx for others. Finally, we are ready to run the shell script. Usually all you have to do is type the name of the shell script. But in our case, the commands in the shell script require root permissions which is why we're typing sudo again. Space, and then a period meaning the current directory, and then forward slash and the name of the file which is myfirewall.sh. Press Enter to run the shell script
>
> **[5:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/automating-netfilter-configuration?u=76281980&t=306)** and provide the root password, and press Enter. There's no error which means the script ran successfully. You just automated your net filter configuration process. From now on, we'll be using shell scripts for all the net filter configuration activities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), [[Linux]] (1)
> **CLI Commands:** make (2), ls (2), chmod (2), cd (1), sudo (1)
> **Env Vars:** drop (2), output (2), cli (1), input (1), accept (1)
> **File Paths:** myfirewall.sh (4), myfw.sh (1)
> **Tools:** command line (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Understanding hosts as routers](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=0)** - [Instructor] You can turn any ordinary computer into a router. Here is what you need. [[Hardware]] wise, a second [[NIC|network interface card]], or [[NIC]], is necessary. In terms of software, you could be using any [[Linux]] distribution. [[Ubuntu]] is our choice. If you're using a physical computer, go ahead and plug in your second NIC and set it up. A virtual machine or VM requires a virtual NIC. Here is the big picture view. Think of what a home router does. It allows you to share a single external IP address among multiple hosts in the same [[Local Area Network (LAN)|local area network]], or LAN. We call this feature network address translation, or NAT. NAT also enables you to forward packets. There could be two types of forwarding. One is ingress forwarding, meaning forwarding packets from outside your network into your network. The other is egress, meaning forwarding packets from within your network to the outside of your network. This diagram shows the overall network architecture we are working toward throughout this course. Previously, we set up our host firewall on a local host. The [[Representational State Transfer (REST)|rest]] of the architecture yet to be completed is grayed out. In this chapter,
>
> **[1:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-hosts-as-routers?u=76281980&t=93)** we'll configure a second Ubuntu VM host as a router. It has two network interface cards, network interface card 0 and network interface card 1. The forwarding happens between these two network interfaces, whether it's ingress forwarding or egress forwarding. And behind the Ubuntu router host, you can see an additional host connected through a switch, also connected to the Ubuntu router host NIC 0. What I'm showing you here is precisely how your home router works. The only difference is that the entire computer, namely Ubuntu host, is now dedicated as a router.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (5), [[NIC]] (4), [[NIC|Network interface card]] (3), [[Hardware]] (1), [[Linux]] (1)
> **Env Vars:** nic (4), nat (2), lan (1)
> **Prerequisites:** set up (1), configure (1)
> **Definitions:** we call this (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Adding a network adapter](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=0)** - [Instructor] Let's set up an [[Ubuntu]] host as a router. I'm assuming that you already have a second [[NIC|network interface card]], or [[NIC]], installed on your host, either physically or virtually. Please note that this is our Ubuntu router VM. Type ip address show,
>
> **[0:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=30)** and press Enter. The output shows ens33 and ens32, which are the network interfaces. And ens33 has the IP address of 192.168.35.136.
>
> **[0:55](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=55)** ens32 has the IP address of 192.168.70.128.
>
> **[1:10](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=70)** By the way, the network addresses starting with 192 we are using here are private. We use these addresses only within a [[Local Area Network (LAN)|local area network]], or LAN, which are never used as internet addresses. Another group of popular private addresses start with 10. To turn our Ubuntu virtual machine, or VM, into a router, we have to ensure ens32 belongs to one network, while ens33 belongs to another. The network address of ens32 looks slightly different from ens33 because it belongs to another network or subnet. In our example, the subnet mask is 255.255.255.0,
>
> **[2:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=132)** which means that we use the first three digits of an IP address as our subnet ID. Therefore, 192.168.35 is a subnet ID of 192.168.35.136.
>
> **[2:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=155)** 192.168.70 is a subnet ID of 192.168.70.128.
>
> **[2:46](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/adding-a-network-adapter?u=76281980&t=166)** Therefore, they belong to different networks or subnets. Subnet here refers to a subdivided network. We divided our local area network into two subnets here, one is 192.168.35, and the other is 192.168.70. Excellent job. You're now well on your way to the next step of setting up your Ubuntu host as a router.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (4), [[Local Area Network (LAN)|Local area network]] (2), [[NIC|Network interface card]] (1), [[NIC]] (1)
> **Versions:** 192.168.35 (4), 192.168.70 (4), 255.255.255 (1)
> **Definitions:** is a  (2), means that (1), refers to (1)
> **Env Vars:** nic (1), lan (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Testing the second adapter](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=0)** - [Instructor] Once we set up our [[Ubuntu]] host as a router, the next step is to connect another host to our Ubuntu-router host to see if it functions as a router properly. I have an Ubuntu host already up and running. Let's type ip space address space show to check the current network settings. The IP address is 192.168.35.128.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=37)** Therefore, it belongs to the 192.168.35 subnet.
>
> **[0:49](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=49)** As shown in this diagram, the ultimate test is to check if this Ubuntu host can talk to our Ubuntu-router host whose IP is 192.168.35.136.
>
> **[1:06](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=66)** Type ping space 192.168.35.136.
>
> **[1:18](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-second-adapter?u=76281980&t=78)** That's the IP address of the Ubuntu-router host. Press Enter. We're getting responses, and our experiment is successful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (6)
> **Versions:** 192.168.35 (4)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Setting up IP forwarding](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=0)** - [Instructor] In this lesson, we'll change our [[Ubuntu]] router host operating system settings to forward packets from its internal network interface to the external network interface. This allows us to forward packets from the Ubuntu host connected to the Ubuntu router host to the internet. Let's start by checking the current operating system settings. Type more /P-R-O-C, proc,
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=38)** /sys, S-Y-S, /net/ipv4/ip_forward.
>
> **[0:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=56)** Press Enter, and the output is zero. Zero in computer science means false. What this indicates is that at the operating system level, forwarding is disabled. By the way, more is a [[Linux]] command to show the content of a file. Now our mission is to enable forwarding. To accomplish this mission, all you have to do is set the proc, sys, net, IPv4, ip_forward to one. How do you do that? You use the echo command. The echo command takes an input and outputs the same thing. Type echo 1. If you press Enter, the command will print the input, which is one. Let's press Enter. The input is one. The output is also one. Before going any further, let's sign in as root first and stay using the -i option because the command we're about to use requires constant root access. Type sudo -i and press Enter. Type echo 1 >.
>
> **[2:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=162)** In this instance, the greater than sign is called redirection in Linux, and means that whatever is coming from the previous command will be written to the file whose name and path can be specified after the greater than sign here. Type /proc, sys, net, ipv4, ip_forward.
>
> **[3:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=193)** Press Enter. Essentially what just happened here is the ip_forward variable is set to the value passed by echo 1. The initial value was zero. Therefore, the new ip_forward value should now be set to one. Let's see if the value has been actually changed. Rephrase, let's see if the value has been actually changed. Type more, proc, sys, net, ipv4, ip_forward and press Enter.
>
> **[4:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-ip-forwarding?u=76281980&t=240)** As you can see, the value is now set to one. Now we are ready to move on to the next step, which is changing the net filter settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (3), [[Linux]] (2)
> **Code Identifiers:** ip_forward (6)
> **Definitions:** is a  (1), is called (1), means that (1)
> **CLI Commands:** sudo (1)
> **Speakers:** - [instructor] (1)

#### [Changing netfilter settings: Part 1](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=0)** - [Instructor] Next, we'll change the net filter rules on the [[Ubuntu]] router host to finish our configuration for forwarding packets between the internet and the Ubuntu local host. The first step is to change your Ubuntu host gateway IP to the Ubuntu router host, so that your Ubuntu host knows how to access the internet. That is through the Ubuntu router host, in our case. To do this, let's resize this window. Go to Show Apps, click on Settings, click on this gear icon, select IPv4, and make sure the Gateway IP is the internal interface of the router host, which is 192.168.35.136.
>
> **[1:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-1?u=76281980&t=63)** Now, let's test if my Ubuntu host sharing the same subnet with the Ubuntu router host has internet access. Type ping 8.8.8.8, which is the IP address of a [[Google]] Domain Name Server, or DNS, on the internet. Press Enter. This command fails, because there is no internet connection yet through the Ubuntu router host. This will change when we finish configuring our Ubuntu router host to establish the internet connection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (10), [[Google]] (1)
> **UI Navigation:** click on (2), go to (1)
> **Versions:** 192.168.35 (1), 8.8.8 (1)
> **CLI Commands:** make (1)
> **Env Vars:** dns (1)
> **Speakers:** - [instructor] (1)

#### [Changing netfilter settings: Part 2](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=0)** - [Instructor] Now we are on the [[Ubuntu]]-router host. Let's use a shell script instead of typing individual commands. I keep my shell scripts in the Documents folder. Type cd Documents, press Enter. Type nano space myfw, my firewall, .sh, press Enter.
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
> **[1:31](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=91)** - o stands for output network interface. The -j option specifies the target iptables action, which is in this case ACCEPT. The input network interface in this scenario is ens33. The output network interface is ens32. The bottom line is that this rule forwards packets from an internal network interface, ens33, to the external network interface, ens32. Let's add the next rule. Type iptables -A FORWARD space -m state --state
>
> **[2:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=158)** space ESTABLISHED,RELATED space -j ACCEPT.
>
> **[2:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=170)** Make sure there's no space after the comma or before the comma. So, let's check again, iptables -A FORWARD -m state
>
> **[3:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=185)** - -state ESTABLISHED,RELATED -j ACCEPT.
>
> **[3:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=195)** This rule makes Netfilter accept packets that are part of an existing connection. As long as there are packets coming back as responses to the packets you previously sent out the Netfilter firewall will accept them.
>
> **[3:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=213)** - m stands for match, and this rule is checking whether a packet matches being in the ESTABLISHED or RELATED state. Now let's add another rule. Type iptables space -t space nat space -A POSTROUTING,
>
> **[4:01](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=241)** P-O-S-T-R-O-U-T-I-N-G, space -o ens32 space -j MASQUERADE,
>
> **[4:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=257)** M-A-S-Q-U-E-R-A-D-E. Let's double-check again, iptables space -t nat
>
> **[4:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=270)** - A POSTROUTING space -o ens32 space -j MASQUERADE, correct.
>
> **[4:43](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=283)** Here -t stands for table, and the Netfilter table we are using here is NAT, or nat, or network address translation. This rule changes the source IP of all the outgoing packets into the IP address of the external [[NIC|network interface card]] of the Ubuntu-router host. The [[Microsoft Word|word]] MASQUERADE refers to this process of changing the source IP of all the outgoing packets so that they all appear to be coming from a single host when in fact they are from multiple internal hosts with different IPs. Now we're done with our script. Let's save it by pressing Control + X together, type Y, and press Enter to accept the current file name. Don't forget to make this file executable by typing chmod ugo+x space myfw.sh.
>
> **[5:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=359)** Let's see if the file is there. Type ls -l, my file is there. It's executable because it's green. Now we are ready to run the shell script. Type sudo space .myfw.sh, press Enter.
>
> **[6:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/changing-netfilter-settings-part-2?u=76281980&t=382)** Provide the root password, press Enter. The shell script ran without any problems. It just enabled forwarding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (2), [[NIC|Network interface card]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** forward (6), accept (5), established (3), related (3), masquerade (3)
> **Speakers:** - o (2), - a (2), - [instructor] (1), - i (1), - m (1)
> **CLI Commands:** make (2), cd (1), chmod (1), ls (1), sudo (1)
> **Definitions:** stands for (4), refers to (1)
> **File Paths:** myfw.sh (2)
> **Best Practices:** don't forget (1)

#### [Testing the router](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=0)** - [Instructor] Now, let's test if our [[Ubuntu]] router host is forwarding the package properly. I'm back to our Ubuntu host, type ping 8.8.8.8. Press Enter. Getting a response from the [[Google]] DNS server means that we have an internet connection. The ultimate test is to ping the external network interface of the Ubuntu to router host whose IP is 192.168.70.128.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=42)** From the Ubuntu host network interface whose IP is 192.168.35.128. Type ping 192.168.70.128.
>
> **[1:07](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-the-router?u=76281980&t=67)** Press Enter. The ping command works, which means that the Ubuntu router host is forwarding the package properly. Congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (5), [[Google]] (1)
> **Versions:** 192.168.70 (2), 8.8.8 (1), 192.168.35 (1)
> **Definitions:** means that (2)
> **Env Vars:** dns (1)
> **Speakers:** - [instructor] (1)


### 4. Host as a Network Firewall

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up hosts as network firewalls](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=0)** - [Instructor] Compared to setting up a router host, adding new network file features is fairly straightforward. Let's discuss how to set up our [[Ubuntu]] router host as a network firewall in this lesson. Network firewalls handle service requests by either blocking them or providing port forwarding. The prerequisite for port forwarding is a host set up as a router, which is in our case, the Ubuntu router host. We need to add some new firewall rules to enable port forwarding that routes the network service request to an appropriate host behind a firewall. The Ubuntu router host firewall adheres to some default rules already. For example, it's dropping all the ingress traffic or incoming traffic, and it forwards all the egress or outgoing traffic to the internet. In addition to these default rules, we need to add the following port forwarding details. First of all, we need to open port 80 on the Ubuntu router host. And then send all the port 80 traffic to a host running an HTTP or web server. Here is a big picture view. A packet arrives whose destination port is 80 from the internet at the external [[NIC|network interface card]] of our Ubuntu router host ens 32.
>
> **[1:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=97)** The network interface card has the IP address of 192.168.70.128. If we have our port forwarding rules set up, this packet will be then sent to the internal network interface card of the Ubuntu router host ens 33. Next, it's sent to a switch. The switch then passes it onto our Ubuntu host whose IP address is 192.168.35.128. The local host has only one network interface card and the IP address of that network interface card is 192.168.35.128. The Ubuntu local host network interface card or [[NIC]] ens 33 has its port 80 open to receive all the hyper text transfer protocol or HTTP traffic. Now the key here is that the original packet destination IP has to be changed from 192.168.70.128 to 192.168.35.128 to arrive at the Ubuntu local host eventually. We don't have to do anything about the destination port number because the initial port number stays the same, which is 80. That's all we have to do on the Ubuntu router host
>
> **[3:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-hosts-as-network-firewall?u=76281980&t=192)** to activate port forwarding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (10), [[NIC|Network interface card]] (6), [[NIC]] (1)
> **Versions:** 192.168.35 (3), 192.168.70 (2)
> **Prerequisites:** set up (3), prerequisite (1)
> **Ports:** port 80 (3)
> **Env Vars:** http (2), nic (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), picture (1)
> **Speakers:** - [instructor] (1)

#### [Setting up a web server](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=0)** - [Instructor] The area behind our [[Ubuntu]] router serving as a network firewall is a demilitarized zone or DMZ. We call it DMZ because it's a relatively safe place after our first layer of firewall filtering. Our goal is to provide an HTTP service on our Ubuntu local host in the DMZ. Let's start by installing a popular [[Linux]] web server called Apache on our Ubuntu host. Type pseudo apt install apache2.
>
> **[0:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=47)** Press enter. Type Y and press enter. Now you have a working HTTP or web server on the Ubuntu local host. Let's check the status of the Apache web server. Type pseudo system CTL status Apache2, press enter.
>
> **[1:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=83)** As you can see, the web server is up and running. Type Q to get out. An ultimate test to check if the web server is up and running, is opening a web browser and loading a homepage. Let's resize this window. Let's open the web browser type, type local host, and press enter. As you can see, you can load the default page from the web server on the UBUNTU local host. The successfully loaded test page means that the web server is up and running. To restart the web server, type pseudo systemctl restart Apache2 like this.
>
> **[2:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=146)** Let's press enter to restart the web server. Type pseudo systemctl stop Apache2
>
> **[2:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=161)** to stop the web server. Press enter. Let's check the status of the web server again by typing pseudo systemctl status Apache2,
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=180)** press enter, and it says inactive. Type Q to get out. The web server is no longer running for now, and you can start it again by typing start pseudo systemctl start Apache2, press enter.
>
> **[3:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-a-webserver?u=76281980&t=207)** And the web server is up and running again, let's check. It is up and running. Type Q. The hosts in our DMZ, which shares the same [[Local Area Network (LAN)|local area network]] behind the Ubuntu router host/network firewall are the only ones that can access the web server for now. The next step is to enable port forwarding to allow hosts on the internet to send their requests to our web server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (6), [[Linux]] (1), [[Local Area Network (LAN)|Local area network]] (1)
> **Env Vars:** dmz (4), http (2), ctl (1), ubuntu (1)
> **CLI Commands:** systemctl (4), apache (2), apt (1)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Port forwarding](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=0)** - [Instructor] Let's try to connect to the web server on the [[Ubuntu]] host in the DMZ, from a [[Windows]] host through the Ubuntu router host. We'll be using the IP address of the external network interface of the Ubuntu router host to get to the web server. Let's go to the Windows host and open a web browser. Type the external IP of the Ubuntu router host, which is 192.168.70.128.
>
> **[0:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=38)** Press Enter. You're unable to connect since port forwarding is not yet enabled. That's why we're getting this "can't reach this page" message. Let's now go back to our Ubuntu router host and change the firewall rules to enable port forwarding. Let's edit our firewall script. Type cd documents. Press Enter, type ls, press Enter. Do you see our firewall script, myfw.sh? Let's edit the script, type nano myfw.sh.
>
> **[1:27](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=87)** Press Enter. These are the firewall rules we used to set up our Ubuntu router host initially. Let's add a couple of more rules to enable port forwarding. Type iptables -t space, nat, space, dash capital A, PREROUTING, P-R-E-R-O-U-T-I-N-G, PREROUTING. PREROUTING -p, standing for protocol, in this case, tcp. Space, -i, meaning the input interface, ens32 -d, standing for destination. And the destination is 192.168.70.128.
>
> **[2:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=154)** And then space, --dport 80. And dport here stands for destination port. So, so far it's basically saying if there is an incoming packet whose destination IP is 192.168.70.128,
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=180)** and whose destination port is 80, do something. Now space, -j DNAT --to,
>
> **[3:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=195)** space, 192.168.35.128.
>
> **[3:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=204)** Since the line is too long, we have this less than sign right here, hiding the [[Representational State Transfer (REST)|rest]] of the line. DNAT here stands for destination network address translation. What this rule does is changing the destination IP of an incoming packet to the one we are specifying here, which is 192.168.35.128. If the packet is coming through the external interface, which is ens32 of our Ubuntu router host, and if it's destination port is 80, the command -j DNAT --to,
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
> **[5:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=333)** space, state --state, space, NEW,ESTABLISHED,RELATED, space, -j ACCEPT. Let's make sure we typed the right commands and options.
>
> **[5:59](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=359)** - A FORWARD -p tcp, ens32, ens33,
>
> **[6:09](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=369)** dport 80 -m state --state NEW,ESTABLISHED,RELATED, okay.
>
> **[6:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=383)** - j ACCEPT, okay. This line means that we allow forwarding the package from the input interface, which is ens32, to the output interface, which is ens33, if a packet's destination port is 80 and if the packet contains a new connection request or is part of an existing connection. Now let's go ahead and save the script by pressing CTRL and X, type Y, press Enter. Let's run the script by typing sudo ./myfw.sh.
>
> **[7:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/port-forwarding?u=76281980&t=436)** Press Enter and then provide the root password. Press Enter and the script ran without any errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (7), [[Windows]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** prerouting (3), dnat (3), forward (2), established (2), related (2)
> **Versions:** 192.168.70 (4), 192.168.35 (3), 191.168 (1), 35.128 (1)
> **CLI Commands:** cd (1), ls (1), make (1), sudo (1)
> **Definitions:** stands for (2), is an  (1), means that (1)
> **File Paths:** myfw.sh (3)
> **Speakers:** - [instructor] (1), - a (1), - j (1)
> **Cross-References:** go back to (1)

#### [Testing port forwarding](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980&t=0)** - [Instructor] Let's test if port forwarding is working. We're back to the [[Windows]] host, sharing the same subnet with the [[Ubuntu]] router host external interface, ENS 32. Let's try to connect to our web server in the DMZ through the Ubuntu router host using our web browser. Just type the external network interface IP of the Ubuntu router host, 192.168.70.128.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/testing-port-forwarding?u=76281980&t=35)** Press enter. We're now connected to the web server running on the Ubuntu host in the DMZ, behind the Ubuntu router host. Congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (5), [[Windows]] (1)
> **Env Vars:** dmz (2), ens (1)
> **Versions:** 192.168.70 (1)
> **Speakers:** - [instructor] (1)

#### [Understanding one-legged DMZ](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=0)** - [Instructor] When opening a file port and enabling port forwarding a risk is that some internal hosts, such as [[Web Servers]] are now accessible on the entire internet. There's always a chance of an attacker compromising the web server. A compromised web server in the same network could infect other hosts and make them vulnerable too. DMZ is a solution to preventing this unfortunate scenario. DMZ stands for demilitarized zone. It's a buffer area between an internal network and an external network. Therefore, DMZ further separates the internal network into a publicly accessible area and a protected area off limits to public access. DMZ allows us to avoid the situation where an internal network is directly exposed to the external network. This way, a compromised host in the DMZ does not affect other hosts in another subnet and make them less vulnerable. DMZ also allows more fine-grained network traffic monitoring by further dividing an internal network and placing more security controls. One-legged topology is the most basic DMZ architecture.
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-one-legged-dmz?u=76281980&t=98)** Topology here means a structure of how we connect hosts. To create a one-legged DMZ, we need to build on a network firewall host by connecting a DMZ subnet to it. We also need one more [[NIC|network interface card]], that is a third network interface card and a switch to connect multiple hosts in the new subnet to the third network interface card. The diagram here shows that you could introduce a DMZ to an existing network file host by adding another switch and the third network interface card. In a full blown DMZ instead of one-legged DMZ, there'll be two network interface cards involved. One network interface card connected to the first network file host facing the external network, and the other connected to the second network file host facing an internal network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIC|Network interface card]] (5), [[Web Servers]] (1)
> **Env Vars:** dmz (12)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Understanding true DMZ](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-true-dmz?u=76281980&t=0)** - [Instructor] A true DMZ is the most secure firewall architecture. To set up a true DMZ, what you need is two network firewall hosts and a switch. The first network firewall host serves as an external firewall interfacing with the external network and the DMZ. The second network firewall host acts as an internal firewall interfacing with the DMZ and the internal network. When we have one network firewall in a much simpler topology, it only separates the external network from the internal network. In the true DMZ topology, we introduce a second network firewall host. Therefore, in between the two network firewall host, we're creating a new subnet, which is our DMZ. Think of this as adding the external network interface of the second network firewall host through the internal interface of the first network firewall host. And the true DMZ topology, we protect an internal network better because it's behind the second firewall. There are two layers of firewalls in this architecture. Your internal network host get additional protection and separation from the host in the DMZ. True DMZ is a gold standard in [[Network Security]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (1)
> **Env Vars:** dmz (9)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Understanding an application proxy firewall](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=0)** - [Instructor] Squid is an open-source application proxy firewall software solution for hypertext transfer protocol, or HTTP. It has many features, but we'll focus on the website blocking functionality. What is an application proxy firewall? Static packet filtering, or SPF, and staple packet inspection, or SPI firewalls, do not inspect application data in a network packet. They only look at the headers of the network packets. They should also inspect the payload or content of the packets. It's simply too much data to handle for these SPF and SPI firewalls. This is why we need a specialized firewall solution dedicated to looking at only the data segment of the packets. Therefore, application proxy firewalls focus on examining the application data delivered by each network packet. One more thing to note is that these application proxy firewalls are also application or protocol-specific. In the case of Squid, its specialty is HTTP. Here's a diagram we can use to think more deeply about what an application proxy firewall does.
>
> **[1:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=94)** The architecture consists of three elements, HTTP Client, HTTP Proxy, and HTTP Server. The HTTP client is usually a web browser, like [[Microsoft]] Edge. To the HTTP client, an HTTP proxy looks like a web server. To the HTTP or web server, an HTTP proxy looks like a client or a web browser. Therefore, the HTTP proxy is acting like a middle person intercepting HTTP requests from an HTTP client and passing them onto an HTTP server. At the same time, from the perspective of the HTTP server, the HTTP proxy will be receiving packets just like HTTP clients and then passing them onto the actual HTTP client. After all, that's why Squid is called HTTP Proxy. Proxy servers monitor application message exchanges, examine the message content, and take actions based on security rules. An example of such an action is blocking a website. If you don't want your employees to do online shopping
>
> **[3:08](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/understanding-an-application-proxy-firewall?u=76281980&t=188)** during their work hours, you can install a proxy server to monitor the HTTP traffic. When the proxy server detects an unwanted domain name in the HTTP packet, it can intercept the HTTP request and respond to the web browser by displaying a message like, "You're prohibited to visit the XYZ site." In our example network, the best place for an HTTP proxy firewall is within the DMZ because the HTTP proxy will be exposed to the outside HTTP servers and still isolated from the internal network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Env Vars:** http (25), spf (2), spi (2), xyz (1), dmz (1)
> **Definitions:** is an  (2), is called (1)
> **Analogies:** just like (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Setting up Squid](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=0)** - [Instructor] Let's install Squid, on our [[Ubuntu]] router host and block a website. Type sudo apt install squid,
>
> **[0:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=17)** S-Q-U-I-D. Press Enter. Type Y, press Enter. To specify which site to block, we need to edit the Squid configuration file. Type cd /etc/squid/, press Enter.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=41)** Type ls, and press Enter. And you can see, squid.conf file, the configuration file. Now, type sudo nano squid.conf.
>
> **[1:03](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=63)** Press Enter. Press Control + W together to do a search. Type url_regex, press Enter.
>
> **[1:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=79)** And right under that line, let's add our rule here. Type acl banned, B-A-N-N-E-D, url_regex.
>
> **[1:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=100)** Let's make sure, acl banned url_regex. Here, regex stands for regular expression, used to specify search patterns. Our search pattern is a portion of a URL. We use the label banned to name this rule. We'll be using a file to store the banned URLs. Therefore, we need to specify where the file is. Type "/etc/squid is the directory location where our file is going to be, and that's why I just typed it. And then, the name of the file, blocked, B-L-O-C-K-E-D. And close the double quotation mark. Now, let's find the line that says Insert your own rules. So let's do another search by pressing Ctrl + W together. And then type insert, press Enter. Let's add our rule right here. Type http_access deny banned,
>
> **[3:11](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=191)** the label we created earlier. So let's check again. http_access deny banned.
>
> **[3:24](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=204)** Let's save the file by pressing Control + X together. Type Y, press Enter. Next, let's create our file that contains the list of blocked sites. Type, sudo nano, and the name of the file, blocked, B-L-O-C-K-E-D. Press Enter. Type .[microsoft.com](https://microsoft.com). Based on this regular expression, our proxy server, Squid, will block whatever domain name ending with .[microsoft.com](https://microsoft.com). Let's save the file. Press Control + X together, type Y, press Enter. Now, let's restart Squid so that it's able to use the updated configuration file. Type sudo systemctl restart squid.
>
> **[4:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=274)** Press Enter. Great. If you didn't have any typos in the configuration file, this will go without any errors. Now, let's go to our Ubuntu host and open a web browser. Click on the Open application menu. Click on Settings. Type proxy in the search box. Click on Settings. Choose Manual proxy configuration. Our proxy server is running on our Ubuntu router host. The IP address is 192.168.70.128.
>
> **[5:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/setting-up-squid?u=76281980&t=325)** The port number we are using here is the default port number for the proxy servers, which is 3128. Let's also select Use this proxy for HTTPS. Click on OK. Let's try to visit worldwide web .[microsoft.com](https://microsoft.com) and see what happens. Press Enter. And it says Access Denied. Access control configuration prevents your request from being allowed at this time. The Squid server is now working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (3), [[Microsoft]] (3)
> **CLI Commands:** sudo (4), apt (1), cd (1), ls (1), make (1)
> **Code Identifiers:** url_regex (3), http_access (2)
> **UI Navigation:** click on (4), go to (1)
> **URLs:** [microsoft.com](https://microsoft.com) (3)
> **Env Vars:** url (1), https (1)
> **Definitions:** stands for (1), is a  (1)
> **Prerequisites:** install (2)

#### [Challenge: Fine-tuning the Squid configuration](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=0)** (gentle bright music)
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-finetuning-squid-configuration?u=76281980&t=5)** - [Instructor] Previously, we learned how to block websites using Squid. I don't know whether you notice this, but there is a problem. It's blocking all the websites instead of the ones specified in the file called Blocked. Let me try [linkedin.com](https://linkedin.com). Press Enter. You get this error message. Our intention was to allow all the websites except for the ones with the [microsoft.com](https://microsoft.com) domain name. Your mission is to fix this problem by revisiting the squid.conf file so that we only block the [microsoft.com](https://microsoft.com) websites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[LinkedIn]] (1)
> **URLs:** [microsoft.com](https://microsoft.com) (2), [linkedin.com](https://linkedin.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle bright music) (1)

#### [Solution: Fine-tuning the Squid configuration](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=0)** - [Instructor] How was your investigation? Let's open the squid.conf file. Type sudo space nano space squid.conf. Press Enter. Provide the root password, press Enter. Let's do a search by pressing the Control and W keys together. Type the [[Microsoft Word|word]] insert, press Enter, and you can see the rule we added earlier. Do you also see the line that says http_access deny all? What this means is, Squid is blocking all the websites in addition to the one we specified. That is, [microsoft.com](https://microsoft.com). You might have noticed the error messages blocking the websites were slightly different. The websites blocked by me had this screen, and all the [[Representational State Transfer (REST)|rest]] of the websites blocked by Squid, by default, looked like this. On my custom error screen, you can even see that the route to router host is blocking the website. The culprit is this line here that says http_access space allow space localnet,
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=98)** which will allow website access by default instead of blocking them all the time, as long as they're behind the application proxy firewall, in this case, Squid. Let's uncomment this line. Save the file by pressing Control and X. Type Y, press Enter. Let's restart the Squid server by typing sudo systemctl space squid space restart, press Enter.
>
> **[2:19](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=139)** Oh, my bad, sudo systemctl restart squid, press Enter.
>
> **[2:30](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-finetuning-squid-configuration?u=76281980&t=150)** Now let's see if Squid allows other websites. Earlier, I typed [linkedin.com](https://linkedin.com) and got this message. Let's reload the webpage, And it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Microsoft]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[LinkedIn]] (1)
> **CLI Commands:** sudo (3), systemctl (2)
> **Code Identifiers:** http_access (2)
> **URLs:** [microsoft.com](https://microsoft.com) (1), [linkedin.com](https://linkedin.com) (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Packet Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [What is packet analysis?](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=0)** - [Instructor] Packet analysis is a primary way of monitoring your network. Computer network professionals use packet analysis to observe and diagnose the health of a network. [[Cybersecurity]] professionals use packet analysis to conduct passive network vulnerability assessments. The adjective passive here means that whoever is inspecting the packets doesn't take any actions affecting the packets, like dropping the packets or altering them. Attackers use packet analysis as a passive attack tool to steal information such as passwords. The term packet and packet analysis is misleading because frames are what's actually captured and analyzed. Think of frames as container trucks delivering network packets in a [[Local Area Network (LAN)|local area network]] or land. Packet analyzers intercept a frame and take a packet out of it for further inspection. To give you an analogy, I can use the example of a Russian doll. Let's say that the outermost shell is a frame. Within the frame you see a packet housed, and then within the packet we have application or other protocol information.
>
> **[1:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=97)** Packet analysis results always mention frames and provide frame details in addition to the packet information. A packet also carries data used by various network protocols such as TCP, UDP, IP,
>
> **[1:58](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-packet-analysis?u=76281980&t=118)** ARP, HTTP, et cetera. TCP stands for transmission control Protocol. UDP stands for User Datagram protocol. TCP and UDP govern how reliably packages travel through the internet between their sources and destinations. ARP stands for address resolution protocol, which helps with translation between the IP addresses and physical or internet addresses. We'll have a chance to discuss ARP or ARP more in depth in the next lesson. Packet analysis involves inspecting protocol details delivered by packets, which is why packet analysis is also called protocol analysis. Packet analysis is an essential element of any network or cybersecurity professional's toolbox. It's indispensable in many different contexts of [[Network Troubleshooting]] and cybersecurity investigations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (3), [[Local Area Network (LAN)|Local area network]] (1), [[Network Troubleshooting]] (1)
> **Env Vars:** arp (4), tcp (3), udp (3), http (1)
> **Definitions:** stands for (3), is a  (2), is an  (1)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [ARP poisoning example](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=0)** - [Instructor] Packet analysis has many other useful applications in [[Network Security]] besides troubleshooting. One such application is network security reconnaissance. Packet analysis helps you detect ping sweeps or port scanning attempts. It also allows you to detect information leakage or attacks, such as address resolution protocol, or ARP poisoning. ARP or A-R-P is a protocol used to exchange information on mappings between IP addresses and internet addresses. Why is ARP necessary? Because we have a two-tiered addressing system in [[Computer Networking]]. One for local area networks or LANs and the other for the internet. Have you heard the term internet address? In a [[Local Area Network (LAN)|local area network]], or LAN, we use an address type called internet address. When we send the message outside of the LAN, we use a different type of address called IP address. Whenever a message arrives at LAN, that message must be using the ethernet address again. Therefore, there is this need for translating the IP address
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=98)** into an ethernet address, which is what ARP does. To recap, there are two different types of network addresses. The first is the internet protocol or IP address used by routers to pass packets from one network to another. There is another type of address, which is the internet address, used by network interface cards or NICs, to pass frames from one host to another through a switch. After a packet arrives at a router representing its destination network, it needs to be using the ethernet address to navigate the router's LAN. Here is how ARP works. In the very beginning, if there is a need for finding out an ethernet address version of a particular IP address, the ARP cache is first checked. In this case, the cache is just the memory space, remembering the ethernet address and IP address mappings. If the mapping is already there, you don't have to do any more searches. If the mapping is not there, a new a RP request is sent. This ARP request is sent to all the hosts in the network. If one of the hosts has the right IP address,
>
> **[3:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/arp-poisoning-example?u=76281980&t=192)** it knows what internet address corresponds to the IP address. The host then sends the ethernet address information back to the host that made the ARP request originally. Finally, the right mapping between the IP address and the ethernet address has been discovered. ARP protocol is vulnerable to attacks. An attacker will send a fake response to the ARP request after the legitimate host sends its IP address information back to the ARP requester. Therefore, whoever sent out the ARP request, now recognizes the attacker as a legitimate host with the right IP. The victim host starts sending packets to the attacker host. The attacker host intercepts the packets and passes them onto the legitimate host. Therefore, the attacker establishes a person in the middle attack loop at the end of the process. In this scenario, a packet analysis tool like [[Wireshark]] can detect the duplicate responses sent back to the ARP request. Therefore, serving as an excellent network security tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (3), [[Computer Networking]] (1), [[Local Area Network (LAN)|Local area network]] (1), [[Wireshark]] (1)
> **Env Vars:** arp (13), lan (4)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Packet capturing with Wireshark](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=0)** - [Instructor] [[Wireshark]] is one of the most well-known packet and protocol analysis software. This type of software is also called packet sniffer because it collects and inspects packets, like dogs sniffing for evidence in a crime scene. In this lesson, our goal is to observe three-way handshaking using Wireshark. Transmission Control protocol, or TCP, is a connection-oriented protocol that ensures packets are error-free and in the correct sequence on the receiving side. For TCP to establish a reliable connection, it has to go through this process called three-way handshaking. The process consists of three steps, which is why it's called three-way handshaking. The first one is SYN or synchronize. The second one is SYN/ACK or synchronize and acknowledge. And finally, ACK, or acknowledge. Here is a diagram that shows how three-way handshaking occurs. When starting your Wireshark instance, remember that you're running it as root. The root privilege gives you access to network interfaces. Also, familiarize yourself with the use of filters
>
> **[1:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=99)** to display TCP traffic only. To install Wireshark, type sudo apt install wireshark
>
> **[1:57](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=117)** and press Enter. Type the root password. Press Enter. Type Y, press Enter. Press Enter. Wireshark has now been installed. To start Wireshark, type sudo wireshark
>
> **[2:25](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=145)** and press Enter. Wireshark is now up and running. Choose a proper network interface here. In our case, I'm going to choose ens32, the external [[NIC|network interface card]] of the host. And then I'm going to click on the shark fin button. The packets are now being captured. To generate some more traffic, we'll be opening up a web browser. Let's visit the website. [Linkedin.com](https://Linkedin.com). You can see, lots of messages are passing by. We'll stop capturing by clicking on the red square button here. Let's filter the packets by typing TCP in the filter window here and press Enter. Now you only see TCP traffic. Let's see if you can find the three-way handshaking process. It's right here. Here it says SYN. And the next line says SYN/ACK. And finally, the last line says ACK. Congratulations, you have successfully observed
>
> **[4:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/packet-capturing-with-wireshark?u=76281980&t=240)** the TCP three-way handshaking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (9), [[NIC|Network interface card]] (1), [[LinkedIn]] (1)
> **Env Vars:** tcp (6), syn (4), ack (4)
> **CLI Commands:** sudo (2), apt (1), find (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Speakers:** - [instructor] (1)

#### [Exploring Wireshark's advanced features](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=0)** - [Instructor] Once you get used to the basic features of [[Wireshark]], it's time to learn some more advanced features to make your life easier when using Wireshark. One of these useful extra Wireshark features is to use filters. Wireshark sometimes gives you the experience of information overload because there's just so much to review. Therefore, knowing how to use filters is essential to avoid this information overload problem. In our previous lesson, we already used a filter to hide network messages other than those using transmission control protocol or TCP. Another useful feature is DNS resolution. Usually, you get a bunch of numeric IP addresses in your Wireshark display. Resolving these IP addresses into more meaningful domain names allows you to spot hosts of your interest more quickly. Another useful feature is to start your Wireshark program and to be able to capture your packets right away without really having to navigate through the graphical user interface or GUI and then start capturing packets. You can also use Wireshark to create rules
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/exploring-wireshark-s-advanced-features?u=76281980&t=98)** to be used by your firewall software. In the next lesson, we'll continue to explore the Advanced Wireshark features such as DNS resolution, capturing packets by bypassing GUI and how to create firewall rules using Wireshark. Are you ready?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (9)
> **Env Vars:** dns (2), gui (2), tcp (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Wireshark hands-on](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=0)** - [Instructor] Let's try some more advanced [[Wireshark]] features. The first one I'd like to show you is how to start Wireshark packet capturing directly without going through the initial GUI screen. Type sudo, space, wireshark, space, -i. Here I stands for interface. Let's make a choice in terms of which interface to monitor. The interface number starts with 1, and I'll use the first interface for monitoring. Therefore, I type 1. Next type -k, which is the option that starts the capture session immediately. Now press enter. As you can see, we are completely bypassing the initial GUI screen. Let's generate some more traffic by opening up our web browser. Let's visit [linkedin.com](https://linkedin.com). You can see a lot more traffic being generated. There are so many IP address numbers and it would be nice if you could turn some of them into more meaningful domain names. How do we do that?
>
> **[1:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=92)** Let's go to view and select Name Resolution, Name Resolution here, and choose Resolve Network Addresses. As soon as I do that, some of the IP addresses are now turned into domain names. Let's stop sniffing packets. Lastly, let's try the Tools menu option and then choose Firewall ACL Rules or Access Control List rules. Using this tool, you can generate a firewall rule automatically. Note that before starting to use this tool, you need to pick and choose a particular entry in the Wireshark window. So let's pick this one. Let's go back to Tools. Click on Firewall ACL Rules and select the firewall product you'll be using. We'll keep the default option, which is net filter. You also have options to specify more details like denying inbound traffic as part of the firewall rule.
>
> **[3:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/wireshark-hands-on?u=76281980&t=180)** You can now copy the rules and add them to your NetFilter shell script. There are many more advanced features to explore. I recommend that you keep trying to discover them as you get more familiar with Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (5), [[LinkedIn]] (1)
> **Env Vars:** gui (2), acl (2)
> **UI Navigation:** go to (1), click on (1), select the (1)
> **CLI Commands:** sudo (1), make (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Cross-References:** go back to (1)
> **Definitions:** stands for (1)
> **Warnings:** note that (1)

#### [Challenge: Filtering with IP addresses and port numbers](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=5)** - [Instructor] It's time to take your filtering skills to the next level. Previously, I was looking for a three-way handshaking sequence in the captured packets between a browser and web server. It took me a while to locate the right spot. Your mission is to make this search process easier by using filters. The first step is to find all the packets containing my [[Ubuntu]] router host external IP, which is 192.168.70.128. To do that, go to this window and type ip.addr, space, two equal signs, and type 192.168.70.128.
>
> **[1:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/challenge-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=64)** Press Enter. Here you go. Your first mission accomplished. Now, I want you to filter this even further and limit it to those using port 80, which is web traffic. Please note that you want to use TCP as your protocol.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 192.168.70 (2)
> **Ports:** port 80 (1)
> **Env Vars:** tcp (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Filtering with IP addresses and port numbers](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=0)** - Were you able to find your solution? Here is what you do. I already showed you how to look for packets containing the IP 192.168.70.128. Type IP.addr, space two equal signs,
>
> **[0:29](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=29)** 192.168.70.128.
>
> **[0:40](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/solution-filtering-with-ip-addresses-and-port-numbers?u=76281980&t=40)** Now let's add space and type end, space, the protocol, which is TCP dot and the port is 80, space, two equal sign, 80 indicating web traffic. Press enter. Now you can see more clearly and quickly the three-way handshaking going on here. SYN, SYN, ACK, ACK. Well done.

> [!info]- Semantic Content
>
> **Env Vars:** syn (2), ack (2), tcp (1)
> **Versions:** 192.168.70 (2)
> **CLI Commands:** find (1)
> **Speakers:** - were (1)
> **Non-Speech:** (upbeat music) (1)


### 6. IDSs and Vulnerability Assessment

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an IDS?](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=0)** - [Instructor] An [[Intrusion Detection]] system, or IDS, provides an ability to receive an alert when an attacker breaches your [[Network Security]]. Therefore, IDS is critical in protecting your network. An IDS could be an appliance or a piece of software. An appliance is a standalone solution. It's a physical box you can attach to your network without having to touch anything else. IDS is monitor networks for suspicious activities and send alarms. IDSS are passive, meaning they don't take any actions against the network traffic. There are different types of IDSs. The first type is signature-based. The signature-based IDSs rely on a predetermined set of definitions characterizing various types of attack traffic. In this case, a definition refers to a bit pattern of network traffic. The second type is behavior-based IDSs, the behavior-based IDSs determine what's normal and what's not in terms of network activities. The technologies related to IDSs are intrusion prevention systems, or IPS, and Unified Threat Management, or UTM.
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=98)** Compared to IDSs, IPSs are active, meaning they take actions against packets. That is, they drop suspicious packets. UTMs are much more comprehensive and they do almost everything. You can think of it as a Swiss Army knife in network security. It acts like an IDS. It also does IPS functions, and then they also serve as firewalls and anti-malware software security information and event management, or SIEM, collects network security relevant data from many sources. Security information and event management, or SIEM, collects network security relevant data from many sources, including firewalls, IDSs, IPSs, and log servers. SIEM offers powerful visualization options to correlate diverse network security data and allows network security personnel to make informed decisions on various [[Cybersecurity]] threats. A UTM solution can have a SIEM feature too. Although a signature-based IDS is more common, more and more IDS is combine both signature-based and behavior-based approaches.
>
> **[3:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-an-ids?u=76281980&t=197)** With the recent advances in [[Artificial Intelligence (AI)|artificial intelligence]] behavior-based IDS solutions are gaining more traction, whether it's standalone or built in as part of another product, an IDS is an essential element of your network defense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (6), [[Intrusion Detection]] (1), [[Cybersecurity]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** ids (9), siem (4), ips (2), utm (2), idss (1)
> **Definitions:** is a  (1), refers to (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Introducing Snort](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=0)** - [Instructor] Snort is an open-source IDS or [[Intrusion Detection]] system. It's one of the most widely used IDS software solutions, both for training and use in real life settings. You can download and install Snort free of charge. However, there are aspects of Snort that aren't free. If you want the latest Snort rules as soon as they become available, a paid subscription is necessary. If you want the latest Snort rules as soon as they become available, a paid subscription is necessary. To download Snort, click on the Downloads menu option. You can find the latest Snort stable releases right here. [[Windows]] and [[Linux]] versions are available. Under Sources, you can download the source code too. Snort runs in different modes, including Packet Sniffer, IDS or IPS modes. IPS stands for Intrusion Prevention System. In the Packet Sniffer Mode, Snort works passively and collects packets without analyzing them. In the IDS mode, Snort continues to act passively,
>
> **[1:39](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=99)** but it also analyzes packets to detect suspicious activities and send alerts. In the IPS mode, Snort is active. That is, it analyzes packets, detects suspicious activities, and takes actions against them. Therefore, Snort drops packets if necessary in the IPS mode. Snort can store its IDS and IPS logs locally as files, which is not always scalable. The preferred way is to forward log messages to a dedicated log server in the cloud. A security information and event management, or SIEM solution like Splunk, can play the role of the centralized log server. Snort itself doesn't offer a visualization feature either, but a SIEM system such as Splunk can fill in the gap. Another option is using a highly-scalable storage, search, and analytics solution, like [[Elasticsearch]], combined with a visualization user interface like Kibana. With the support of an ecosystem consisting of log servers, data search and analytics engines and visualization, Snork remains a powerful network monitoring tool.
>
> **[3:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/introducing-snort?u=76281980&t=196)** Many organizations adopt Snort as their primary IDS and IPS solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1), [[Windows]] (1), [[Linux]] (1), [[Elasticsearch]] (1)
> **Env Vars:** ids (6), ips (6), siem (2)
> **Exercise Files:** download the (1), source code (1)
> **Definitions:** is an  (1), stands for (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)

#### [Snort as a packet sniffer](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=0)** - [Instructor] Although Snort is an [[Intrusion Detection]] and prevention system solution, it can also be used as a basic packet sniper. Let's start by first installing snort. Type pseudo apt install snort. Press enter. Provide the root password Press enter. Type Y. Press enter. The address range for the local network is 192.168.70.0/24.
>
> **[0:42](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=42)** /24 indicates that 192.168.70 is the subnet ID
>
> **[0:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=51)** for the network to monitor. Press tab to select okay, and press enter. Now we have our snort instance installed successfully. To start capturing package, type pseudo snort -I, standing for interface.
>
> **[1:17](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=77)** Which interface do we use to snip the packets here? We'll be using ENS32, which is the external network interface of the [[Ubuntu]] router host. Now, -L and then the location where the packets are going to be stored. Here, -L stands for logging. We'll be logging the packets in a particular location, namely /var/log/snort.
>
> **[1:56](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=116)** We're going to be storing the results of packet snipping in a binary format, which is why now we're typing
>
> **[2:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=124)** - b right here. Press enter. Now the snort application is up and running. Let's give it a little bit of time so that we can capture some packets. To stop capturing press control and C together. Okay, I got my prompt back finally. And you can see some outputs snort produced after I pressed control and C here. Let's go to the directory where the package are captured. Type CD /var/log/snort.
>
> **[2:51](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=171)** Press enter. Type ls. Press enter. There are four log files here and we're going to open the last one. Type pseudo more snort.log.1715980804.
>
> **[3:16](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-a-packet-sniffer?u=76281980&t=196)** Press enter. We're getting weird results here because it's a binary file and we cannot read it in a text viewer. What do we do to actually read the content properly? Type Q to get out of this and we'll be using [[Wireshark]] to view the packet captured by snort. Type pseudo Wireshark and then the name of the file, snort.log., the [[Representational State Transfer (REST)|rest]] of the file name and press enter. Now you can read the individual entries of the results of our packet capturing. Packet capturing is the most basic snort mode and we tried it to get familiar with how to run Snort in general and to see what it looks like when Snort is running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Intrusion Detection]] (1), [[Ubuntu]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** apt (1), cd (1), ls (1)
> **Versions:** 192.168.70 (2)
> **UI Navigation:** go to (1), open the (1)
> **Definitions:** is an  (1), stands for (1)
> **Speakers:** - [instructor] (1), - b (1)
> **Env Vars:** ens32 (1)
> **Prerequisites:** install (1)

#### [Snort as an IDS: Establishing rules](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=0)** - [Instructor] Let's run Snort as an [[Intrusion Detection]] system. Before we put Snort in its intrusion detection mode, we have to do some prep work. First, we'll introduce a new Snort rule by creating a file. Let's go to /etc/snort/rules/ by typing cd /etc/snort/rules/. Press Enter. We'll create a rule file called my.rules. Type sudo nano my.rules. Press Enter. The new rule we are creating will detect any ping attempts to the interface we want to monitor. Type alert, meaning, whenever there is a ping attempt, send an alert. Space. The next thing to type is a protocol to detect. Ping uses the Internet Control Message Protocol, or ICMP. Therefore, type icmp, We don't care where the ping message is coming from. It could be any IP address or any port number. That's why we type any any in terms of where the packet is coming from. Type -> to indicate the destination.
>
> **[1:38](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=98)** We want to detect every ICMP message. Therefore, the destination IP and the destination port number are any and any too. Next, open parentheses. Type msg: to indicate the start of the alert message.
>
> **[2:02](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=122)** The message will say Ping detected. "Ping Detected!
>
> **[2:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=134)** and then double quote. And then type a semicolon. The last step is assigning an ID to the alert. It's 1000001, which is a random number I picked. Type lowercase sid:1000001. That's 1000001. SID Here stands for Snort Rule ID. Don't forget another semicolon here at the end because if you miss it, you'll get an error. Close parentheses. Now, we are done with creating a rule. Let's save the file by pressing Control + X together. Type Y, press Enter. For Snort to be able to use this new rule file, we have to make the Snort configuration file refer to the new rule file. To do that, let's go to /etc/snort/. Type cd .. to go up one level. Press Enter. Type ls, press Enter. Do you see the snort.conf file? Let's edit it. Type sudo nano snort.conf. Press Enter. Let's look for the area where the rule file locations are specified.
>
> **[3:48](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=228)** Press Ctrl + W together to do a search. Type site specific, site specific. Press Enter. Add a line to refer to the new rule file right here. Type include $RULE_PATH/,
>
> **[4:14](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-establishing-rules?u=76281980&t=254)** and then the name of the rule file, which is my.rules. Save this file by pressing Control + X together. Type Y, press Enter. Now, we are ready to run Snort to use our newly-created rule file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (2)
> **CLI Commands:** cd (2), sudo (2), make (1), ls (1)
> **Env Vars:** icmp (2), sid (1), rule_path (1)
> **Definitions:** is a  (3), stands for (1)
> **UI Navigation:** go to (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Snort as an IDS: Detecting pings](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=0)** - [Instructor] We just introduced a new Snort rule to detect ping packets, and it's time to check if it actually works. Let's start by running Snort in its IDS mode. Type sudo snort -c,
>
> **[0:22](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=22)** which indicates the location of the Snort configuration file. We'll be using the default Snort configuration file, which is located at /etc/snort/snort.conf.
>
> **[0:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=41)** The next option is -A console. So type -A console, which indicates that we'll be displaying the Snort alert on our terminal window. The next option to specify is -l /var/log/snort,
>
> **[1:12](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=72)** which tells where the Snort log messages are going to be stored. And finally, we have to say which [[NIC|network interface card]] Snort is going to be listening to by typing -i ens32.
>
> **[1:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=93)** We'll be listening to the external network interface card of the [[Ubuntu]] router host, which has the IP of 192.168.70.128.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=107)** Let's start Snort by pressing Enter. Type the root password, press Enter. Let's ping the external interface from the Ubuntu host to cause the ping detected alert Type ping 192.168.70.128,
>
> **[2:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snort-as-an-ids-detecting-pings?u=76281980&t=135)** press Enter. Now let's go back to our Ubuntu router host. Do you see our new rule working here? SID 1000001, "Ping Detected." Our new Snort rule is working, congratulations. You did it again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (3), [[NIC|Network interface card]] (2)
> **Env Vars:** ids (1), sid (1)
> **Versions:** 192.168.70 (2)
> **CLI Commands:** sudo (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [What is a network vulnerability assessment?](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=0)** - Network [[Vulnerability Assessment]] is a way to discover potential security weaknesses in a computer network. There are different types of network vulnerabilities. One is vulnerable configurations such as open ports. Another type is known software vulnerabilities for both operating systems and applications. The third type is vulnerabilities associated with compliance to policies and standards. This third one is more human factor-oriented rather than technical. For more technical vulnerabilities, especially those related to security misconfigurations, please check out this national vulnerability database by [[NIST]] or National Institute of Standards and Technology. A lot of vulnerability assessment tools used that common configuration enumeration, or CCE provided by NIST. The process of removing security vulnerabilities as much as possible is referred to as system or network hardening. The hardening can be done technically by installing patches and fixing configurations, or it could be managerial like auditing and monitoring. To harden your system properly, you should understand the nature of [[Network Security]] vulnerabilities first. The first thing to note is that the number
>
> **[1:32](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=92)** of vulnerabilities is always too many to address. The second problem is that the vulnerabilities themselves are dynamic. They evolve, and new vulnerabilities show up all the time. If you're looking for the best vulnerability assessment tool for your organization, here are things to consider. First, you want to know whether the tool can quantify the severity of the vulnerabilities, because there's just too many vulnerabilities. It's often necessary to prioritize and severity helps you prioritize. Next is the presentation, which is how effectively the vulnerability assessment tool organizes and conveys the information. How comprehensive the vulnerability assessment tool is and how much support is available are important factors too. Another critical thing to look at is the ability to schedule periodic scans. Network scans cannot be done just once. It has to be done over and over again periodically. Therefore, the tool's ability to do periodic scans automatically is imperative. Adopting a vulnerability assessment tool is a must in securing an industrial strength network. Finding the best tool for you is another challenge.
>
> **[3:05](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/what-is-network-vulnerability-assessment?u=76281980&t=185)** You learned, at least what you need to look for from this lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vulnerability Assessment]] (6), [[NIST]] (2), [[Network Security]] (1)
> **Env Vars:** nist (2), cce (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - network (1)

#### [Nessus](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/nessus?u=76281980&t=0)** - [Instructor] Nessus comes with all the standard network [[Vulnerability Assessment]] tool features. One of the most critical features is "vulnerability scanning with [[Real-Time]] updates" because new vulnerabilities show up all the time. Other features include "[[Malware Detection]], web application scanning, mobile device detection, scan scheduling, email notifications, and configuration and compliance checks." Previously, we looked at the National Vulnerability Database, or NVD, by the National Institute of Standards and Technology, or [[NIST]]. NVD is a vulnerability repository that includes common vulnerability and exposure, or CVE. CVE is a standard way of specifying security vulnerabilities widely accepted by industry professionals and researchers in the [[Cybersecurity]] field. Therefore, it makes sense for Nessus to adopt the standard, like CVE, to track network vulnerabilities. You can download Nessus on this website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vulnerability Assessment]] (1), [[Real-Time]] (1), [[Malware Detection]] (1), [[NIST]] (1), [[Cybersecurity]] (1)
> **Env Vars:** cve (3), nvd (2), nist (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Network scanning with Nessus](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=0)** - [Instructor] Nessus is a web application. Once you install Nessus, you can access it through your web browser. Make sure that you're typing the right URL, localhost:8834. Ignore the not secure warning. Choose register for Nessus Essentials. Click on continue. After registering, you can create your Nessus username and set up a password. My username is admin. I already ran a scan called First Scan. The first scan I ran was host Discovery, which finds all the devices connected to your network. It also shows open ports for each discovered host. To see the vulnerabilities message found, click on this tab. Let's click on the first vulnerability, not a severity, which is info. In addition to the host discovery scan type, there are many others you can run. To do a new scan, let's go back to my scans. Click on the plus sign here called new scan. There are three major scan types, discovery, vulnerabilities, and compliance. Let's run a new basic network scan. The name of this scan is test. The targets are the hosts to be scanned.
>
> **[1:34](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=94)** We can scan our entire subnet by typing 192.168.35.04/24.
>
> **[1:47](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/network-scanning-with-nessus?u=76281980&t=107)** Select launch, and click on it. The scan is running now. While the scan is going on, you can also see the status. Nessus is already finding many vulnerabilities. As you can see, Nessus does a good job prioritizing the vulnerabilities and allows you to tackle the most serious ones first. The medium vulnerabilities just showed up and now it's placed on the top of the list. Do you like what you've seen so far? Network [[Vulnerability Assessment]] could be a user friendly and satisfying experience and Nessus is a proof of that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vulnerability Assessment]] (1)
> **UI Navigation:** click on (5)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), set up (1)
> **CLI Commands:** make (1)
> **URLs:** [localhost:8834](https://localhost:8834) (1)
> **Ports:** :8834 (1)
> **Env Vars:** url (1)


### 7. Logging and Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### [Logging](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/logging?u=76281980&t=0)** - [Instructor] Logging goes hand in hand with monitoring. Monitoring your network can be done in real time or after the fact. Logging is necessary for after the fact monitoring. It establishes an audit trail, which is often mandated. There are many sources of logs. For example, all the hosts in your network generate logs. The host here refer to computers, routers, firewalls, IDSs, IPSs servers, et cetera. IDSs are [[Intrusion Detection]] systems. IPSs are intrusion prevention systems. Any devices connected to your network can generate these log messages therefore, there overwhelming sources of logging, which creates a need for forwarding the logs to a centralized log server where you can monitor all the logs simultaneously. A centralized log server collects all these log messages from individual hosts in your network. Logging is important, but if nobody analyzes the logs, it's good for nothing. This is why logging is usually combined with a feature such as alerts, automatically generated and sent to relevant people via emails and text messages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [syslog-ng](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=0)** - [Instructor] syslog-ng is a log server and can also be used to forward logs. syslog is a predecessor of syslog-ng. ng in syslog-ng stands for next generation. To live up to its name, syslog-ng must be better and faster than syslog. What does syslog-ng do? First of all, it collects logs from various sources. It forwards the logs to another log management system or a database. One of syslog-ng's essential features is filtering. Without it, the number of logs will be too overwhelming to manage. You want to be able to select the log items relevant to your security goals. Filtering is based on the criteria, such as facility and log levels. Facility refers to the process that generated a log message on a host. Each facility has a unique ID. The facility code for log messages originating from a mail system process is 2, while the code for those created by access control processes is 4. Therefore, you can filter the log messages according to their facility identifiers. The log levels represent the severity of the log messages.
>
> **[1:33](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/syslog-ng?u=76281980&t=93)** The highest level is 0, indicating that the system is unusable. The lowest level is 7, which is for debugging. The levels in between are alert, critical, error, warning, notice, and informational. The severity is in the descending order. Another vital syslog-ng feature is processing that manipulates the collected logs. With syslog-ng, you should be able to address most of your logging needs.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), stands for (1), refers to (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Log forwarding: Part 1](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=0)** - [Instructor] In this lesson, we'll configure Snort to forward its log messages to a syslog-ng server. Let's modify the Snort configuration file. Type cd /etc/snort/. Press Enter. Type ls. You can see the snort.conf file here. Let's edit the snort.conf file as root. Type sudo nano snort.conf. Press Enter. Let's do a search and look for syslog. Press Ctrl and W together. Enter syslog as a search term. Press Enter. We found the line we need. Let's uncomment this line. By uncommenting, what I mean is removing the pound sign. The line says output alert_syslog: LOG_AUTH LOG_ALERT.
>
> **[1:13](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=73)** Press Ctrl and X together to save the file. Type Y, press Enter. Now Snort is ready to send its log messages to a syslog-ng server. However, there's one more step you should take. When you run Snort, you need to use a special option, which is -s, to tell Snort that now the log messages are going to syslog-ng. Let's give it a try. Type sudo snort -s, and then use the configuration file option, which is -c /etc/snort/snort.conf.
>
> **[2:04](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-1?u=76281980&t=124)** We'll be monitoring the external [[NIC|network interface card]] of the [[Ubuntu]] router host, which is ens32. Therefore, type -i ens32. Press Enter. Now Snort is running. Because we changed the setting, the log messages are no longer coming to the console. It's not going to the Snort log files either. They're all being sent to syslog-ng.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIC|Network interface card]] (1), [[Ubuntu]] (1)
> **CLI Commands:** sudo (2), cd (1), ls (1)
> **Env Vars:** log_auth (1), log_alert (1)
> **Code Identifiers:** alert_syslog (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Log forwarding: Part 2](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=0)** - [Instructor] Syslog-ng is already installed on my [[Ubuntu]] router host, but the command is sudo apt install syslog-ng.
>
> **[0:15](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=15)** Press Enter. As you can see, it's already installed. Let's check if our syslog-ng service is up and running. Type sudo systemctl status syslog-ng.
>
> **[0:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=37)** Press Enter. As you can see, it's active. Type Q to get out. The syslog-ng service is running on our Ubuntu router host. Which is the same host where snort is up and running. We'll be forwarding snort log messages through the syslog-ng log service. Then we'll forward the same log messages to a centralized log server. The centralized log server solution will be using is Kiwi. Let's go to the syslog-ng configuration file, by typing cd /etc/syslog-ng/ and press Enter.
>
> **[1:23](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=83)** Type ls. Press Enter. And you can see that syslog-ng.conf is there. Type sudo nano syslog-ng.conf.
>
> **[1:41](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=101)** Press Enter. Let's do a search and look for the term destination. CTRL and W Key together. Type destination, press Enter. Go to the line where it says, send a message to an other host. We'll create our own destination here to define the destination for the snort log messages, being forwarded to our centralized log server Kiwi. Type destination space and then df, standing for destination facility _snort_remote {.
>
> **[2:26](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=146)** We'll be using udp instead of tcp to send our log messages, because we don't really need a reliable connection. Udp stands for User Datagram Protocol. Type the IP of the target log server, which is 192.168.70.130.
>
> **[2:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=170)** Make sure you have the IP address in between the two double codes. And then the port number, type port, and then the port number is 514. We need parenthesis after udp, and then we need to close the parenthesis here, and then ;};. Our destination is now defined. The next step is to define our own log function, so that we can forward our messages to the third party remote log server. Let's go down to the end of the file, type log {. We first define what the source is. Type source(s_src);
>
> **[3:45](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=225)** The syslog-ng.conf defines s_src, as all the messages coming from the local host, including the messages originating from our snort program. Next, we'll be using a filter, a predefined one. In this case, which is f_auth. So type filter(f_auth);. Do you remember that one of the log facility types used by snort was auth? The last step is to specify the destination. We define the custom destination earlier. Type destination(df_snort_ remote); };.
>
> **[4:50](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=290)** We're now done with editing our syslog-ng.conf. Let's save it by pressing Ctrl and X together. Type Y. Press Enter. Let's restart syslog-ng, so that we get to use the updated configuration information. Type sudo systemctl restart syslog-ng.
>
> **[5:20](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/log-forwarding-part-2?u=76281980&t=320)** Press Enter. Our syslog-ng server has just restarted without any problems. What this means is that from now on, all the snort log messages are being forwarded to our remote centralized log server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (2)
> **CLI Commands:** sudo (4), systemctl (2), apt (1), cd (1), ls (1)
> **Code Identifiers:** s_src (2), f_auth (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** install (1), make sure you have (1)
> **Env Vars:** ctrl (1)
> **Versions:** 192.168.70 (1)
> **Definitions:** stands for (1)

#### [Kiwi](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=0)** - [Instructor] Kiwi is a [[Windows]]-based Syslog server. You can download Kiwi by visiting the Kiwi website here. You can also download a free version on this website. I'm using the commercial version for my demo. The Kiwi log server is running on my Windows host sharing the same network with the external interface of the [[Ubuntu]] router host, which is DNS 32.
>
> **[0:35](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/kiwi?u=76281980&t=35)** Here, you can see what Kiwi Syslog Server looks like. Do you see the stored messages forwarded by the syslog-ng service right here? Check out all the log messages referring to the snort [[Intrusion Detection]] system right here. Let's take a look at how our Kiwi Syslog Server is configured. Go to Setup, Settings. Select Inputs, and you can see it's using UDP, port 514. You're now able to forward the alerts from the snort intrusion detection system all the way to the centralized Kiwi Syslog Server. Good job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Intrusion Detection]] (2), [[Ubuntu]] (1)
> **Env Vars:** dns (1), udp (1)
> **Ports:** port 514 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [SNMP](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=0)** - [Instructor] In managing a sizable network, Simple Network Management Protocol, or SNMP, is a handy thing to have. SNMP defines mechanisms for implementing various features needed for maintaining networks, including securing them. SNMP specifies the standards on how to collect network device data. It also covers the ability to control network devices remotely. SNMP implementations allow you to monitor the health of network devices too. All these capabilities are necessary to enhance [[Network Security]]. SNMP consists of agents, managers, management information bases, or MIBs, and managed devices. An agent collects the device data from an SNMP-managed device. It receives commands from a manager and executes them. A manager controls a managed device through an agent. It obtains data from an agent. Management information base, or MIB, stores the SNMP data. A managed device is controlled by an agent, therefore, the managed device is an SNMP information source. Most of the time, agents just receive commands from their managers, but sometimes they also send messages
>
> **[1:37](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/snmp?u=76281980&t=97)** back to their managers. These messages sent back to the managers are called traps. These are alerts sent by the agents when there are errors or problems on a managed device. In summary, you have a managed device in SNMP, such as a server, or switch. Agents sit on top of it. There's another host on which a manager runs, and the manager talks to the agent and receives data by using a Get command. It also controls the agent through a Set command. An agent sometimes sends messages to its manager, and these messages are called traps. MIB is a database used by the SNMP manager host.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (1)
> **Env Vars:** snmp (10), mib (2)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/protecting-your-network-with-open-source-software-21464358/next-steps?u=76281980&t=0)** - Thanks for watching this course. We covered a lot, and you should be prepared to learn even more about [[Network Security]]. To advance your knowledge of network security and fundamental networking concepts, I recommend you take the learning path, become an IT security specialist. If you're interested in learning how to investigate [[Cybersecurity]] incidents, take my course on learning [[Network Forensics]]. Finally, be sure to connect on [[LinkedIn]] and post your course completion with the #lilprotectyournetwork. I look forward to hearing from you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (2), [[Cybersecurity]] (1), [[Network Forensics]] (1), [[LinkedIn]] (1)
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