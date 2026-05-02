---
type: course
cssclasses:
  - lle-course
slug: it-security-foundations-network-security-15189799
url: "https://www.linkedin.com/learning/it-security-foundations-network-security-15189799"
duration_minutes: 163
duration: 2h 43m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGbAWaIPiK3Xg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663700741013?e=2147483647&amp;v=beta&amp;t=DqieY9A9jEQrQqOs4YkA2t-avMExTs1Q2GtcRYLslhE"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an IT Security Specialist]]'
  - '[[Network Administration- Build Core Skills for Network Management and Security]]'
  - '[[Cybersecurity Fundamentals]]'
prev_courses:
  - '[[IT Security Foundations- Operating System Security]]'
  - '[[Learning Network Troubleshooting- Practical Network Diagnostics and Solutions]]'
  - '[[IT Security Foundations- Operating System Security]]'
next_courses:
  - '[[TLS for Beginners- Securing Network Communications]]'
  - null
  - '[[Introduction to Identity and Access Management]]'
path_nav: '[{"path":"Become an IT Security Specialist","position":4,"total":12,"prev":"IT Security Foundations- Operating System Security","next":"TLS for Beginners- Securing Network Communications"},{"path":"Network Administration- Build Core Skills for Network Management and Security","position":6,"total":6,"prev":"Learning Network Troubleshooting- Practical Network Diagnostics and Solutions","next":null},{"path":"Cybersecurity Fundamentals","position":8,"total":12,"prev":"IT Security Foundations- Operating System Security","next":"Introduction to Identity and Access Management"}]'
path_count: 3
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - topic/cloud-computing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/IT%20Security%20Foundations-%20Network%20Security.md)

![IT Security Foundations: Network Security](https://media.licdn.com/dms/image/v2/C560DAQGbAWaIPiK3Xg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663700741013?e=2147483647&amp;v=beta&amp;t=DqieY9A9jEQrQqOs4YkA2t-avMExTs1Q2GtcRYLslhE)

# IT Security Foundations: Network Security

> Want to keep your interconnected systems and data safe? In this course, Lisa Bock covers network security and securing an organization's infrastructure. Lisa introduces security devices such as firewalls and honeypots. In addition, she reviews the importance of isolating networks with VLANS and NAT addressing, along with a review of common security protocols. She also provides overviews of how to 

> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799) | 2h 43m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Securing the network](#securing-the-network)
  - [Discovering resources](#discovering-resources)
- [**1. Recognize Security Devices**](#1-recognize-security-devices) (6 videos)
  - [Understanding firewalls](#understanding-firewalls)
  - [Comparing advanced networking devices](#comparing-advanced-networking-devices)
  - [Luring with honeypots](#luring-with-honeypots)
  - [Examining honeypot findings](#examining-honeypot-findings)
  - [Challenge: Exploring honeypot data](#challenge-exploring-honeypot-data)
  - [Solution: Exploring honeypot data](#solution-exploring-honeypot-data)
- [**2. Isolate the Network**](#2-isolate-the-network) (6 videos)
  - [Segmenting using routers and VLANS](#segmenting-using-routers-and-vlans)
  - [Configuring VLANS](#configuring-vlans)
  - [Creating server and domain isolation](#creating-server-and-domain-isolation)
  - [Translating the network address](#translating-the-network-address)
  - [Recognizing perimeter networks](#recognizing-perimeter-networks)
  - [Configuring NAT](#configuring-nat)
- [**3. Secure the Cloud**](#3-secure-the-cloud) (4 videos)
  - [Summarize cloud concepts](#summarize-cloud-concepts)
  - [Connecting to the cloud](#connecting-to-the-cloud)
  - [Outlining virtualized technology](#outlining-virtualized-technology)
  - [Safeguarding cloud services](#safeguarding-cloud-services)
- [**4. Identify Attacks**](#4-identify-attacks) (5 videos)
  - [Comparing attack methods](#comparing-attack-methods)
  - [Attacking passwords](#attacking-passwords)
  - [Sniffing the network](#sniffing-the-network)
  - [Spoofing protocols](#spoofing-protocols)
  - [Poisoning the ARP cache](#poisoning-the-arp-cache)
- [**5. Secure Protocols and Procedures**](#5-secure-protocols-and-procedures) (6 videos)
  - [Using antivirus](#using-antivirus)
  - [Safeguarding DNS](#safeguarding-dns)
  - [Securing internet protocol](#securing-internet-protocol)
  - [Protecting DHCP](#protecting-dhcp)
  - [Encrypting data in transit (VPN)](#encrypting-data-in-transit-vpn)
  - [Assessing security baselines](#assessing-security-baselines)
- [**6. Limiting Access**](#6-limiting-access) (7 videos)
  - [Using the principle of least privilege](#using-the-principle-of-least-privilege)
  - [Controlling access](#controlling-access)
  - [Restricting network access](#restricting-network-access)
  - [Protecting buildings](#protecting-buildings)
  - [Securing hardware](#securing-hardware)
  - [Challenge: Physical security requirements](#challenge-physical-security-requirements)
  - [Solution: Physical security requirements](#solution-physical-security-requirements)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary](#summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Securing the network
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=0)** - [Lisa] Managing a network today requires a proactive approach to reduce overall risk.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=7)** Data is either in motion or at rest.
>
> **[0:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=9)** And protection is implemented in a number of different ways.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=14)** Logically securing the network is not enough.
>
> **[0:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=17)** We must look at the entire organization including user policies and physical security.
>
> **[0:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=24)** In this course, I'll introduce you to some of the security devices and practices used in industry today.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=32)** I'll review the importance of network isolation and securing the cloud.
>
> **[0:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=38)** We'll discover protocol security and learn ways to avoid attacks and limit access to protected resources.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=47)** Hello, my name is Lisa Bock and I'm a security ambassador.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-the-network?u=76281980&t=51)** If you are ready to lock down and strengthen your network, then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (4), data (1), [[Representational State Transfer (REST)|Rest]] (1), cloud (1)
> **Speakers:** - [lisa] (1)

#### Discovering resources
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/discovering-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/discovering-resources?u=76281980&t=0)** - [Instructor] This course is an intermediary course designed to introduce you to network security.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/discovering-resources?u=76281980&t=7)** We'll cover concepts related to securing an organization's infrastructure.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/discovering-resources?u=76281980&t=14)** Now, I cover a lot of information but I've provided some files for you.
>
> **[0:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/discovering-resources?u=76281980&t=19)** Go to the exercise file on the welcome screen, where you will find the following: a file with the links to the resources that I reference in the course and a challenge document where you can write out responses to the challenges that I cover throughout the course.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/discovering-resources?u=76281980&t=37)** Now, how this will work is that during each segment, I will identify a challenge using the following icon along with a question from the video.
>
> **[0:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/discovering-resources?u=76281980&t=49)** So that you can follow along, select the exercise file link and that will take you to the PDF with all of the links that I reference in the course along with the challenges document.
>
> **[1:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/discovering-resources?u=76281980&t=61)** So, sharpen your pencil and let's start the learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (1)
> **UI Navigation:** go to (1), select the (1)
> **Exercise Files:** exercise file (2)
> **CLI Commands:** find (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### 1. Recognize Security Devices

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding firewalls
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=0)** - [Instructor] You're looking at a real-time cyberthreat map.
>
> **[0:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=4)** The reality is that cyberattacks occur in significant numbers every single minute of every single day.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=14)** For most organizations, a firewall is used as a first line of defense.
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=20)** A firewall is a hardware or software-based method to control incoming and outgoing traffic, and it's based on a set of rules that either permit or deny traffic on a network or host.
>
> **[0:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=34)** With a firewall, the concept is simple.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=37)** Traffic is either allowed or denied and gives the administrator greater control over the types of traffic originating from inside and outside of the protected network.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=50)** Today, there are many different types of firewalls, from software-based to dedicated appliances that defend an enterprise network.
>
> **[0:59](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=59)** First, let's talk about software-based firewalls.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=63)** Now, personal or software-based firewalls generally reside on a host, such as a laptop or desktop computer.
>
> **[1:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=72)** Most support stateful packet inspection, and some offer network address translation.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=79)** Rules can be set to allow specific applications to pass through, such as HTTPS or DNS.
>
> **[1:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=87)** Software-based firewalls work in the background on the device to protect the integrity of the system from malicious activity by controlling connections to and from a user's computer.
>
> **[1:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=100)** The firewall filters inbound and outbound traffic and alerts the user to attempted intrusions.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=109)** A good example of this is the Windows Firewall.
>
> **[1:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=113)** You can gain access to this by finding it in the Control Panel.
>
> **[1:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=117)** Now I've opened it up, and here we can see Windows Defender Firewall with Advanced Security.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=124)** And if you click on Inbound Rules, you can see a list of applications and whether they're allowed or blocked.
>
> **[2:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=132)** And the same is with Outbound Rules.
>
> **[2:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=136)** Now you can modify any of those rules or add to those.
>
> **[2:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=141)** But prior to modifying any of the rules on a firewall, be careful because, remember, it's part of a layered defense for your system.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=151)** Now, a router firewall is a physical device that can provide straightforward firewall features that block or allow certain IP addresses and port numbers and use network address translation to mask private IP addresses.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=168)** They're often ready out of the box but can be further configured to meet specific needs.
>
> **[2:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=173)** Firewalls ensure access control between networks by using what's called an access control list that filters traffic and monitors established traffic patterns.
>
> **[3:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=185)** Rules can be set on each interface for ingress and egress filtering.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=191)** Ingress filtering prevents attack packets such as malware from entering the protected network.
>
> **[3:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=200)** Egress filtering is just as important as it prevents certain packets from leaving the network.
>
> **[3:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=207)** Now some reasons to include egress filtering are as follows.
>
> **[3:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=212)** It can stop malware from connecting to the malware's command server, block unwanted services such as YouTube, and avoid contributing to distributed denial of service attacks, spamming, and botnets.
>
> **[3:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=230)** Let's test your knowledge.
>
> **[3:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=233)** Imagine you're talking to a friend about security devices.
>
> **[3:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=238)** How would you describe what is a firewall, and what can it do to protect the network?
>
> **[4:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=245)** You can record your answer on the Challenge worksheet.
>
> **[4:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=250)** Firewalls block malicious traffic and protect hosts from untrusted users.
>
> **[4:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=256)** Because of this, during selection, ensure that the firewall is robust and is able to handle the volume of traffic passing through the device.
>
> **[4:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=266)** In addition, keep the firewall updated so that it's resistant to attacks.
>
> **[4:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/understanding-firewalls?u=76281980&t=271)** On a host or on an enterprise network, firewalls provide a first line of defense against many of today's threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (9), [[Windows]] (2), [[Security]] (2), [[Real-Time]] (1), [[Hardware]] (1)
> **Analogies:** such as (4), imagine (1)
> **Definitions:** is a  (3)
> **Env Vars:** https (1), dns (1)
> **UI Navigation:** click on (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Comparing advanced networking devices
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=0)** - [Instructor] In addition to using standard devices such as firewalls to defend against threats, many networks employ advanced threat management devices.
>
> **[0:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=11)** The devices are used to proactively defend against complex threats, and include high-end hardware firewalls, unified threat management appliances, intrusion detection, intrusion prevention systems, and proxy servers.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=29)** Advanced threat management devices have additional features, such as artificial intelligence and reputation-based monitoring.
>
> **[0:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=38)** Let's talk about a few of the devices, starting with high-end hardware firewalls.
>
> **[0:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=45)** These are dedicated appliances that provide high performance for small and mid-size businesses.
>
> **[0:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=52)** These firewalls protect the edge and critical infrastructure environments without reducing network performance.
>
> **[0:59](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=59)** We use this type of firewall when the stakes are high, as the appliance is designed for high throughput requirements.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=66)** Most have intelligent features, such as built-in unified threat management.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=73)** Now, unified threat management devices are also referred to as next generation firewalls, because in addition to firewall capabilities, they have intrusion prevention, antivirus and antispyware capabilities, and some have data loss prevention and content filtering.
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=93)** Intrusion detection and prevention systems are sensors that monitor for unusual or suspicious data or activities.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=102)** These systems monitor and inspect ingress and egress traffic using deep packet inspection and a combination of signature and heuristic-based analysis.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=114)** Intrusion detection, intrusion prevention systems provide a proactive approach to monitor the network for unusual and suspicious behavior on a network, and some take action against possible threats, such as questionable processes, login attempts at odd hours, and other indicators outside the range of normal behavior.
>
> **[2:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=139)** Both technologies do share several characteristics.
>
> **[2:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=143)** However, the two have distinct differences.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=147)** Intrusion detection systems sit out of band.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=151)** Now, that means it's not in line with the traffic.
>
> **[2:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=156)** Intrusion detection will passively monitor the network traffic.
>
> **[2:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=161)** The traffic is mirrored to the system where it checks the captured traffic against the signature database.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=168)** If the traffic is malicious, it will detect and log information about the activity and report an attack.
>
> **[2:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=177)** However, it requires other devices to respond to attacks, and because the attack is not actively stopped, damage to the network may have already happened.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=188)** An intrusion prevention system is in band or in line with traffic.
>
> **[3:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=196)** An intrusion prevention system will actively monitor the traffic.
>
> **[3:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=201)** However, intrusion prevention can stop a threat.
>
> **[3:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=205)** Another device which is helpful on a network is a proxy server.
>
> **[3:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=210)** Now, for example, if a company is using a web server, it's common to have a web proxy send request to the server, instead of clients directly interacting with the server.
>
> **[3:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=224)** The proxy will monitor the traffic and then will generate logs so that you can see the type of activity that's occurring on your network.
>
> **[3:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=234)** The log files can show evidence of potentially malicious traffic, such as malware downloads, command and control check-ins, or evidence of attempted break-ins.
>
> **[4:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=246)** Now, let's test your knowledge.
>
> **[4:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=248)** Being aware of the variety of known and unknown threats that exist today, what types of advanced networking devices can be used to defend and protect an enterprise network?
>
> **[4:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=261)** You can record your answer on the Challenge worksheet.
>
> **[4:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=266)** Today the stakes are high, as malicious actors try many different ways to gain access to our critical systems.
>
> **[4:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-advanced-networking-devices?u=76281980&t=273)** Using advanced threat management helps defend against many of today's complex threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (10), management (6), [[Intrusion Detection]] (5), [[Hardware]] (2), data (2)
> **Analogies:** such as (5), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Luring with honeypots
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=0)** - [Educator] A honeypot is a system set up to lure a would-be attacker with the goal of observing their behavior.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=8)** Organizations set up a honeypot to mimic the real target so that we can learn attack methods in order to better protect the real network.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=21)** A honeypot is also used to gather forensic evidence that may be required to aid in the apprehension or prosecution of intruders.
>
> **[0:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=33)** Now, where you put your honey pot will depend on your objectives.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=37)** A honeypot can be inside the land to help monitor for possible insider threats.
>
> **[0:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=44)** You can also put the honeypot in the DMZ so that you can receive an early warning of a possible attack.
>
> **[0:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=54)** You can even put a honeypot outside the network as a tasty treat for a would-be attacker.
>
> **[1:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=61)** Placing a honeypot outside the network will provide plenty of malicious attacks to observe.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=68)** Now, there are some best practices when setting up a honeypot.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=73)** You want to keep the system as generic as possible.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=78)** You'll want to put interesting data in the system to appear as if they hit a valuable target, but be careful in how you design your system.
>
> **[1:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=89)** If you soup up the system too much, an attacker may disconnect.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=94)** And if you have too many traps, this might inspire the hacker community to come back in a more aggressive manner.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=102)** In addition, while we use a honeypot to observe behavior, keep in mind that information you obtain may not be admissible in court.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=112)** A honeypot, many times, is part of an intrusion detection system, but keep in mind the main focus is on gathering information.
>
> **[2:02](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=122)** Once an intruder breaks into a system, many times, they will come back for subsequent visits where more information can be monitored and saved.
>
> **[2:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=133)** Once you've gathered the information, use those log files to analyze the data.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=140)** From the logs, we can glean some information, such as, is it a human or an automated system, or even malware?
>
> **[2:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=150)** For example, a human will be slow, have misspellings, and directs commands using previously gained knowledge of the targeted network.
>
> **[2:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=161)** An automated attack will be fast, no misspellings, more of a shotgun approach, trying everything, such as where is the attacker?
>
> **[2:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=171)** What is their target?
>
> **[2:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=172)** What operating system did they try to target, and what are the vulnerabilities?
>
> **[2:59](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=179)** What could be their ultimate goal?
>
> **[3:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=181)** Vandalism, data exfiltration, or just a test to see how far they can go into your system.
>
> **[3:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=189)** Now, let's test your knowledge.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=191)** Imagine you are a network administrator for an enterprise network.
>
> **[3:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=196)** Describe reasons why you would use a honeypot in an organization.
>
> **[3:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=203)** You can record your answer on the challenge worksheet.
>
> **[3:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/luring-with-honeypots?u=76281980&t=207)** We can also find out other information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), generic (1), hit (1), [[Intrusion Detection]] (1)
> **Analogies:** such as (2), for example (1), imagine (1)
> **Warnings:** keep in mind (2), warning (1), be careful (1)
> **Prerequisites:** set up (2), required to (1)
> **CLI Commands:** find (1)
> **Env Vars:** dmz (1)
> **Definitions:** is a  (1)
> **Speakers:** - [educator] (1)

#### Examining honeypot findings
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=1)** - [Narrator] Many times, if you get an out of the box honeypot, it contains logging capabilities.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=8)** The honeypot acts as a sniffer and gathers data while it's traveling through the network and in the honeypot.
>
> **[0:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=15)** Now that information can be stored and then used for forensic purposes.
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=20)** Let's take a look.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=21)** Here, I have a pre captured packet that we can use to dig down and see some of the evidence contained in the capture file.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=30)** I've opened it up in Wireshark, a free protocol analysis tool.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=35)** Now, when you take a look at a capture file or a log file or any evidence that you get where you're concerned about an indication of compromise, the information doesn't always stand out.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=47)** You have to take a look and then do further analysis.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=51)** For this, what I'm going to do is go to statistics and conversations.
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=57)** Now, once here, I'll go to TCP, and then I'm going to sort by port A, because what I'm looking for is specific ports that could be associated with malicious activity.
>
> **[1:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=70)** Now I'll scroll down, and here I'm concerned about port 6,000.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=77)** And there's one more port that I'm concerned about, port 8585.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=83)** So when you're not familiar with the ports and why they're being used, it's best to investigate.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=92)** So I've looked up Port 6,000, and here we see it's identified with Trojan behavior.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=99)** Now I'll scroll down and you can see there's other information that's not related to Trojan behavior, but it's still worth taking a look.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=109)** Another port that I was concerned about was port 8585.
>
> **[1:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=113)** And here speedguide tells us, this, again, is identified with Trojan activity.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=120)** Now we don't stop there because we really want to see if there is some type of Trojan activity or other malicious activity.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=128)** So what I've done is I uploaded the file into Virus Total.
>
> **[2:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=132)** Virus Total is very handy, and what it does is it goes through and tries to detect unusual or suspicious behavior or viruses.
>
> **[2:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=143)** And when we take a look at this, we can see there's information that's interesting contained in this capture.
>
> **[2:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=150)** So Virus Total scans for viruses, but it also has a built-in intrusion detection system engine in the backend.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=159)** And here we see one vendor's identified a worm, but nothing else.
>
> **[2:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=164)** But let's go to the details right here and we'll scroll down.
>
> **[2:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=170)** And this will have other information about DNS requests, interesting HTTP requests.
>
> **[2:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=178)** And down below you see some snort alerts and suricata.
>
> **[3:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=183)** Now here we can see snort alerts.
>
> **[3:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=186)** And within those alerts you see sensitive data transmitted across the network, potentially bad traffic, and executable code was detected.
>
> **[3:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=197)** And there's other information as well.
>
> **[3:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=199)** And here we see Suricata says a network Trojan was detected.
>
> **[3:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=206)** So it's important to recognize that a honeypot can tell us a lot of information about a potential attack.
>
> **[3:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=214)** Now let's take a look at a couple of sites with information on honeypots.
>
> **[3:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=220)** Now here's one site, Project Honeypot.
>
> **[3:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=223)** It has a lot of valuable information that's found within the honeypots.
>
> **[3:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=229)** I'll go to the About Us tab, and here it talks about Project Honeypot.
>
> **[3:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=235)** This is a system that identifies spammers and spam bots, and it's really important to gather this information as spam is dangerous and accounts for about 96% of the ransomware attacks today.
>
> **[4:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=251)** There's also a lot of statistics and you can scroll down and see information about top five countries for harvesting, spam sending, and other information such as dictionary attacks.
>
> **[4:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=265)** And here's a list of malicious IP addresses that you can take a look at.
>
> **[4:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=271)** This is limited to the top 25.
>
> **[4:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=274)** You'd have to an account and log in to see the entire list, which is very large.
>
> **[4:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=280)** I'm at this website that tells us a little bit of information gleaned in a blog about some stats found on most commonly guessed passwords and most commonly used user ID.
>
> **[4:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=291)** Here we'll see some of the most commonly guessed passwords, and those include admin, default, and root.
>
> **[5:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=300)** In addition, you see some of the most commonly used user IDs, root, test, and user.
>
> **[5:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=307)** Of course, those are the ones we want to avoid using in our system.
>
> **[5:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=311)** We want to create strong passwords so that they're not easily guessed.
>
> **[5:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=317)** Okay, now let's test your knowledge.
>
> **[5:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=320)** We know that honeypots can provide a generous amount of information on methods used by malicious actors.
>
> **[5:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=328)** What kind of information do you think we might find when we investigate the activity found in a honeypot?
>
> **[5:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=338)** You can record your answer on the challenge worksheet.
>
> **[5:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=346)** The bottom line is that today there are many ways attackers can gain access into our networks.
>
> **[5:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=353)** Many times, an attacker's going to try to exploit a vulnerability such as using a weak or predictable password.
>
> **[6:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/examining-honeypot-findings?u=76281980&t=364)** It's best to be aware of possible malicious activity that can lead to an attack, and that is why a honeypot is yet another method that can help defend the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Statistics]] (2), [[Wireshark]] (1), [[Intrusion Detection]] (1), dns (1)
> **UI Navigation:** go to (4), scroll down (4)
> **Ports:** port 6 (2), port 8585 (2)
> **Env Vars:** tcp (1), dns (1), http (1)
> **Analogies:** such as (2)
> **Best Practices:** it's best to (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)

#### Challenge: Exploring honeypot data
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=0)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=7)** Now one of the jobs of a network administrator is to investigate unusual or suspicious traffic, typically in response to a possible cyber attack, such as a malware infection or a data breach.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=21)** Many times we're searching for indicators of compromise, which includes evidence related to malicious activity identified on a system or a network.
>
> **[0:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=33)** In this challenge, I'll show you a few simple ways to investigate possible indicators of compromise along with a few things to look for when hunting for network threats and malicious activity.
>
> **[0:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=45)** First, I'll show you where I obtain the file.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=48)** Now go to malware traffic analysis, which is the site dedicated to investigating captures with malware infections.
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=57)** And when you take a look at this, we're going to drill down to the page 2017/01/28, and the file is right here, which if you want, you can follow along.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=68)** And once you download it, you'll need the password, which is infected.
>
> **[1:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=74)** Now I downloaded the file and opened it in Wireshark, and this is completely optional, but you can do the same, and you can do a spot check to see if the capture contains malicious activity.
>
> **[1:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=86)** Now, for this challenge, complete the following: You'll Discover VirusTotal, and I want you to look for specific information on VirusTotal.
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=97)** You'll investigate Snort and Suricata alerts.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=101)** You'll also explore resources on CloudShark, and we'll investigate further by going to websites that will help describe possible indicators of compromise.
>
> **[1:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=113)** So follow the instructions as listed on the challenge worksheet.
>
> **[1:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=117)** This challenge should take about 10 minutes.
>
> **[2:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-exploring-honeypot-data?u=76281980&t=121)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (2), data (1), [[Wireshark]] (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Exploring honeypot data
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=0)** - [Instructor] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=8)** The first thing you are to do is to go to VirusTotal and discover a little bit about what VirusTotal is and how it can help us identify malicious activity.
>
> **[0:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=19)** There's a splash screen and this is where you would upload a file, a URL, or some other information that would analyze the suspicious file.
>
> **[0:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=28)** And I went to the about us page and it talks about VirusTotal being a free service that analyses files and URLs for malicious activities such as viruses, worms and trojans and other malicious content.
>
> **[0:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=42)** And I do use it quite a bit.
>
> **[0:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=44)** So what we also then did was go to VirusTotal where I uploaded the questionable file.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=51)** So when we first take a look at this, I've asked you, "Have any vendors or sandboxes flagged this file as malicious?"
>
> **[0:59](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=59)** And here, we could see that no security vendors and no sandboxes flagged this file as malicious.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=66)** However, we're going to go to the details tab.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=68)** Now we'll select this and now we'll find a little bit more information.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=73)** Because on the back end of VirusTotal, there is an intrusion-detection-system engine that identifies malicious and suspicious behavior.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=82)** So we'll scroll down here.
>
> **[1:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=84)** And here, we can see some of the alerts and you can pick any of those.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=91)** I wanted you to take a look at five possible alerts that you might want to look into, potentially bad traffic, attempted user privilege gain, a network trojan was detected, attempted denial of service and potentially bad traffic.
>
> **[1:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=111)** Next, you were to go to CloudShark.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=114)** And within CloudShark, I've already uploaded this traffic-analysis-exercise file for you and I want you to see what's available at CloudShark.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=125)** Now when we take a look at this, you are to drop down analysis tools and I'll drop this down.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=131)** And here, we can see threat assessment.
>
> **[2:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=134)** We'll open this up.
>
> **[2:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=136)** And here, we can see the threat assessment summary for this packet capture.
>
> **[2:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=142)** The threat assessment summary shows that there is a 60% chance that there is a high-severity threat within this packet capture.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=151)** Now what we can also then do is go here, open advanced analysis and we'll select that.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=159)** Now once you get into this, now we can take a look at seeing what type of activity there was and you can scroll down.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=168)** And here, we want to take a look at, scroll down to the following marker, 5:55:27.
>
> **[2:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=177)** And right here is where we see the ransomware, Cerber Onion Domain Lookup.
>
> **[3:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=184)** We'll select that one time.
>
> **[3:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=186)** And here, we can see some of the signatures in the alerts section.
>
> **[3:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=190)** And I'll just scroll down here.
>
> **[3:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=192)** And here, you can see the details again mirroring what VirusTotal saw.
>
> **[3:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=197)** And here, we see that a network trojan was detected and also potentially bad traffic.
>
> **[3:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=204)** Now remember that was just one part of this whole capture, so there's a lot of other indicators within this.
>
> **[3:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=210)** Now we'll go to the analysis tools and I'll select DNS activity.
>
> **[3:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=215)** I'm going to select query list and open in a new window, which will take us here.
>
> **[3:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=220)** Now once in here, I'm going to take a look at some of the queries that were issued.
>
> **[3:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=226)** And here, we see two queries that I wanted to take a closer look and see what information I could find on tyu.[benme.com](https://benme.com) and then the other one, api.[blockcypher.com](https://blockcypher.com).
>
> **[4:02](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=242)** Now what you do is if you do find something, you want to do a little more analysis on, I start doing a query.
>
> **[4:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=248)** I do a Google search and try to find more information.
>
> **[4:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=252)** So we'll go here to this one right here, Hybrid Analysis.
>
> **[4:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=256)** And here, we see the URL.
>
> **[4:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=259)** And I'm going to scroll down here.
>
> **[4:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=261)** And the antivirus results show not really much going on.
>
> **[4:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=265)** However, we'll scroll down here and there we see the Falcon Sandbox reports showing that there is malicious activity.
>
> **[4:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=274)** And then we'll go to this one here where I wanted to show you an [alienvault.com](https://alienvault.com).
>
> **[4:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=280)** And with the indicator facts, this shows 970 malicious files are communicating.
>
> **[4:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=288)** And the last question, is "Knowing what you found in the preliminary investigation, how will you proceed?"
>
> **[4:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=296)** How you would proceed is by getting your team together and locking down and locking out that type of malicious activity.
>
> **[5:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-exploring-honeypot-data?u=76281980&t=304)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (4), [[Security]] (1), next (1), dns (1), api (1)
> **UI Navigation:** go to (6), scroll down (6)
> **CLI Commands:** find (4)
> **URLs:** [benme.com](https://benme.com) (1), [blockcypher.com](https://blockcypher.com) (1), [alienvault.com](https://alienvault.com) (1)
> **Env Vars:** url (2), dns (1)
> **Definitions:** is a  (2), is an  (1)
> **Ports:** :55 (1), :27 (1)
> **Exercise Files:** exercise file (1)


### 2. Isolate the Network

[↑ Back to Table of Contents](#table-of-contents)

#### Segmenting using routers and VLANS
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=0)** - [Instructor] Properly segmenting the network using routers and VLANs provides isolation and protection of the subnetworks.
>
> **[0:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=9)** Let's explore this concept.
>
> **[0:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=11)** First, we'll talk about the differences between a switch and a router.
>
> **[0:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=15)** Switches are Layer 2 devices that switch traffic between computers on a local area network.
>
> **[0:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=22)** They use a MAC address to identify the hosts, and switches encapsulate frames in the proper format.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=30)** Routers are Layer 3 devices that route traffic between networks.
>
> **[0:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=34)** They use an IP address to identify hosts, and routers logically segment the networks.
>
> **[0:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=43)** Routers provide a logical separation between networks and can filter traffic using access control lists.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=50)** However, we can also use switches to segment networks by creating virtual local area networks.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=58)** First, let's talk about how a traditional switch works on a LAN.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=63)** When using a switch, devices are physically tethered to that switch.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=68)** Off of that switch is a single broadcast domain, which means every device that's attached to the switch will see the broadcast.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=77)** As you can see, the traffic on LAN 1 is physically separate from LAN 2, and the two are separate networks.
>
> **[1:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=86)** To get from LAN 1 to LAN 2, the traffic must go through a router.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=91)** Using a VLAN removes the physical barrier and treats the hosts as if they are all part of the same subnetwork.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=99)** This logically separates networks within networks and creates smaller broadcast domains.
>
> **[1:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=105)** Although it seems as if a VLAN is on the same network, each VLAN is a separate subnetwork with its own IP address.
>
> **[1:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=115)** Now, here we can see three computers illustrated in red, and they would all be part of the same virtual local area network.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=124)** However, they are not all attached to the same switch.
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=129)** VLANs logically separate networks, and as a result, for any traffic to go from the red VLAN to the green VLAN, they must use a router.
>
> **[2:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=139)** VLANs offer a number of advantages over traditional LANs.
>
> **[2:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=144)** One is performance by creating smaller broadcast domains.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=149)** We also use a VLAN for voiceover IP.
>
> **[2:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=152)** Now, this is common today.
>
> **[2:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=154)** With a VoIP VLAN, we can treat the VoIP traffic differently and prioritize the traffic.
>
> **[2:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=160)** This will help prevent delays in delivering voice packets and reduce latency and jitter.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=168)** We can also create virtual work groups and provide additional isolation.
>
> **[2:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=173)** For example, to prevent the manufacturing employees from viewing YouTube videos, you can create a VLAN that doesn't allow internet access but is trunked to the main network.
>
> **[3:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=185)** And VLANs can provide security.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=188)** They can also be used to restrict access between VLANs.
>
> **[3:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=193)** We can also implement wireless constraints by ensuring a user assigned to a specific VLAN will always connect to that VLAN regardless of location.
>
> **[3:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=205)** Now let's test your knowledge.
>
> **[3:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=207)** List three benefits of using a VLAN.
>
> **[3:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/segmenting-using-routers-and-vlans?u=76281980&t=211)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (8), lan (5), [[Local Area Network (LAN)|Local area network]] (2), [[Virtual Work]] (1), [[Security]] (1)
> **Env Vars:** vlan (11), lan (5), mac (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Configuring VLANS
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=0)** - [Tutor] VLANs are commonly used on a local area network as they have many benefits.
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=6)** In this segment, we'll review the steps taken to configure a VLAN on a switch.
>
> **[0:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=12)** But first, let's talk about the five main types of VLANs A data VLAN handles user-created data.
>
> **[0:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=22)** A voice VLAN carries Voice over IP traffic and is given a higher transmission priority.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=29)** A default VLAN is created automatically upon boot, and includes all interfaces on the switch.
>
> **[0:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=38)** A management VLAN is used to manage and interact with the switch, and a native VLAN moves untagged traffic across a trunk line.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=50)** Now, to configure a VLAN, you'll first need to decide what type of VLAN you'll need, typically a voice or data VLAN.
>
> **[1:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=60)** For example, we want to create vlan 30 and name the VLAN "students," and we've created some other ones as you see here.
>
> **[1:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=71)** Then, you'll need to assign the appropriate switch ports so that the switch knows how to handle the data.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=78)** And because the VLAN represents a subnetwork on a network, you'll need to assign the network address for the VLANs, and then you'll need to configure the switch ports to carry different VLAN traffic.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=92)** Now, VLANs communicate through switches, and the switch must be configured to allow VLAN traffic to pass between two switches, by using what's called a trunk line.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=106)** Let's explore this.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=108)** On a switch, the default for a port is access mode.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=112)** Now this carries traffic of a single VLAN and regular ethernet frames from host to switch.
>
> **[2:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=121)** A trunk port or trunk line is a link between switches that can carry traffic for multiple VLANs.
>
> **[2:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=130)** To use a trunk line, a switch must be configured to allow trunking, and here we see the command to enable trunking on, "interface FastEthernet0/1".
>
> **[2:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=146)** VLANs must also be tagged.
>
> **[2:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=148)** They're identified by using either inner switch link ISL or IEEE802.1Q.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=159)** Then when a switch receives data from a workstation, it tags the data with a VLAN identifier, so that the switch knows where it belongs.
>
> **[2:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=171)** Now, VLAN tags are incorporated into a frame.
>
> **[2:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=175)** Let's compare the difference between a standard ethernet frame and one that's tagged.
>
> **[3:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=181)** Here we see the standard ethernet frame, it's got the source and destination MAC address, type/length, and data.
>
> **[3:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=190)** When VLAN tagging is used, right in the center of the frame is the tag.
>
> **[3:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=199)** Now let's test your knowledge.
>
> **[3:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=201)** Compare the difference between an access port and a trunk port.
>
> **[3:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=207)** You can record your answer on the Challenge worksheet.
>
> **[3:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=212)** One last thought, because it's important to keep the database updated, Cisco devices use VLAN Trunking Protocol or VTP, and this is used to propagate VLAN information to all the switches.
>
> **[3:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-vlans?u=76281980&t=230)** VLAN Trunking Protocol maintains consistency throughout the network by synchronizing VLAN information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), traffic (6), [[Local Area Network (LAN)|Local area network]] (1), management (1), database (1)
> **Env Vars:** vlan (21), isl (1), ieee802 (1), mac (1), vtp (1)
> **Prerequisites:** you'll need (4), configure (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [tutor] (1)

#### Creating server and domain isolation
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=0)** - [Instructor] Within any network, there can be attacks, such as malware, ransomware, and data exfiltration.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=7)** How do we protect our networks from these threats?
>
> **[0:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=12)** Well, one way is by using server and domain isolation.
>
> **[0:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=17)** This zero-trust model provides an additional layer of protection by requiring IPsec authentication and encryption for communication within the domain.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=29)** Now let's step through how this works.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=32)** Computers within the domain can communicate with one another.
>
> **[0:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=36)** However, any request for communication from computers that are outside of the isolated network are ignored.
>
> **[0:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=45)** Server and domain isolation can defend against hackers, prevent malware attacks, and provide a means to encrypt data between computers, all of which can help satisfy regulatory requirements.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=63)** Now, key players in creating isolation include IPsec, Active Directory, and Kerberos.
>
> **[1:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=72)** First, let's discuss IPsec.
>
> **[1:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=76)** Internet Protocol Security, or IPsec, offers policy-based security that can provide peer authentication.
>
> **[1:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=85)** IPsec is not a single protocol, but a framework, that provides a set of security processes that have three main functions.
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=96)** The encapsulating security payload is a combination encryption and authentication protocol.
>
> **[1:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=104)** The authentication header provides support for data integrity and authentication of IP packets.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=112)** And key management.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=114)** IPsec manages the keys to ensure that they are not intercepted or used by unauthorized parties, using Internet Key Exchange, or IKE.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=125)** To create server and domain isolation, authentication is accomplished through a common trust model, in this case, membership in an Active Directory domain.
>
> **[2:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=137)** So let's talk about Active Directory.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=140)** Active Directory is a directory service that is part of the Windows server operating system that provides authentication and authorization to systems and services on a network.
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=153)** Active Directory enables the network administrator to manage permissions within the domain for objects, such as users and computers to access network resources.
>
> **[2:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=165)** And we also need Kerberos.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=168)** Kerberos is the protocol built within Active Directory that provides strong authentication and is built on symmetric key encryption.
>
> **[3:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=181)** Kerberos is used by IPsec for Internet Key Exchange authentication.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=188)** So let's take a look at how we can implement server and domain isolation.
>
> **[3:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=193)** I'm here in Windows Administrative Tools, and I'm going to go to Windows Defender Firewall with Advanced Security.
>
> **[3:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=202)** Now, in this case, I'm going to go to Connection Security Rules and create a new rule.
>
> **[3:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=209)** Now here we have some choices.
>
> **[3:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=211)** For example, we could select server-to-server.
>
> **[3:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=215)** For example, IPsec could be used to encrypt traffic between two servers, such as between two branch offices.
>
> **[3:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=223)** Now in this case, I'll select Isolation, and then I'll select Next.
>
> **[3:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=229)** Now, which type of authentication?
>
> **[3:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=232)** In this case, I'm going to select Require authentication for inbound and outbound connections.
>
> **[3:59](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=239)** Now, this is a strong method of authentication, as both inbound and outbound connections must be authenticated to be allowed.
>
> **[4:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=248)** Now we'll go to Next, and here we ask, what authentication would you like to use?
>
> **[4:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=255)** I'll select Computer and user, and this is going to use Kerberos V5, restrict communications to connections from domain-joined users and computers.
>
> **[4:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=268)** When does this rule apply?
>
> **[4:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=269)** Well, I'll just keep the defaults.
>
> **[4:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=271)** And here we have a chance to name our rule, and I'll just call it Domain Isolation, but you can name it anything that you feel is appropriate and also add a description.
>
> **[4:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=285)** So now let's test your knowledge.
>
> **[4:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=287)** What are three key elements required when creating server and domain isolation?
>
> **[4:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=294)** You can record your answer on the challenge worksheet.
>
> **[4:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=298)** To provide a little bit more information, I'm at this website, Domain Isolation Policy Design, where you can read a little bit more on policy design and best practices.
>
> **[5:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/creating-server-and-domain-isolation?u=76281980&t=312)** And I'm at this webpage where you can learn more on how to secure network traffic between two servers using IPsec.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (6), [[Security]] (6), data (3), [[Windows]] (2), traffic (2)
> **Analogies:** such as (3), for example (2)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (2)
> **Env Vars:** ike (1)
> **Speakers:** - [instructor] (1)

#### Translating the network address
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=0)** - [Instructor] IPv4 was standardized in 1981.
>
> **[0:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=4)** I'm here at this site where you can see the original request for comments.
>
> **[0:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=10)** IPv4 is a 32 bit address represented in dotted decimal.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=16)** If we think about the potential address space, it would be two to the 32nd.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=21)** Let's ask Google.
>
> **[0:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=25)** Well, here we see a pretty large number, and in 1981, this was a large number.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=32)** However, the reality is that scientists knew early on that we would run out of address space.
>
> **[0:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=38)** Efforts to conserve address space began soon after the internet became public in 1992.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=46)** In 1996, RFC 1918 outlines a method called private IP addressing that became a standard way to provide IP addressing for inside of a local area network.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=63)** RFC 1918 outlines three specific groups for private IP addressing.
>
> **[1:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=69)** The addresses are divided into groups as follows, for class A, class B, and class C.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=78)** Private IP addresses are unregistered, and they cannot exist outside of the local area network.
>
> **[1:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=87)** So what do we mean by being unregistered?
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=90)** Well, any device on the internet will use a public address, and no two hosts can have the same address.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=98)** The American Registry for Internet Numbers, or ARIN, registers IP addresses, and your ISP will assign you your own unique IP address.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=109)** You can also look up someone's IP address by going to an app such as this, Google Admin Toolbox, where I put [discordapp.com](https://discordapp.com), and press enter.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=120)** And there you can see the IP addresses below.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=124)** We know that private IP addresses are only used on a local area network.
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=129)** In order to get to the internet, a host on the inside of a lan must go through a router and be translated into a public IP address.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=140)** Network address translation operates on a router, and converts a private IP address to a public address and vice versa.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=149)** Let's see how this works.
>
> **[2:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=152)** In the search bar, I typed what is my IP, and I came to this website.
>
> **[2:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=157)** And there you'll see an IP address.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=159)** My IP address is as follows.
>
> **[2:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=162)** However, that's not my private IP address.
>
> **[2:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=165)** Let's go to the command line and see what my private IP address is.
>
> **[2:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=170)** I've issued this command, and here we see my private IP address.
>
> **[2:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=176)** When communicating on the network, any external host will only see the public IP address.
>
> **[3:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=183)** Now, the benefits of this is it provides an additional layer of security by concealing the entire internal network behind that address.
>
> **[3:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=192)** Let's test your knowledge.
>
> **[3:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=194)** List the range of private IP addresses for class A, class B, and class C.
>
> **[3:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/translating-the-network-address-20644047?u=76281980&t=201)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IP Addressing]] (3), [[Local Area Network (LAN)|Local area network]] (3), [[Google]] (2), lan (1), [[Search]] (1)
> **Env Vars:** rfc (2), arin (1), isp (1)
> **Documentation:** rfc (2)
> **URLs:** [discordapp.com](https://discordapp.com) (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Recognizing perimeter networks
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=0)** - [Lecturer] Malicious actors are constantly trying to gain access to our networks.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=8)** One way to defend against a direct attack is by using a perimeter network.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=14)** This provides a barrier between a trusted network and an untrusted network, such as the internet.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=21)** The barrier isolates the internal network.
>
> **[0:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=25)** Isolation occurs by configuring a demilitarized zone or screened subnet.
>
> **[0:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=31)** Now, this is where the traffic is filtered by a firewall placed in between the outside world and the local area network.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=40)** For example, the DMZ might be used to house a mail or a web server.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=47)** The DMZ is also a great place to put a honeypot to trap hacking attempts.
>
> **[0:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=52)** Now, the DMZ can be designed in a few ways.
>
> **[0:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=56)** One way is, as we see here, which is called multi-homed or three-legged firewall.
>
> **[1:02](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=62)** Now, there are a couple concerns about this configuration.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=66)** The firewall must be able to handle all the traffic going to the DMZ as well as the internal network.
>
> **[1:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=74)** It's essentially a single point of failure.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=78)** A more secure approach is to use a DMZ with two firewalls.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=83)** The web and mail servers are accessed by external as well as internal users, but they don't need to communicate with each other.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=92)** The front-end firewall must be configured to allow traffic destined for the DMZ only.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=99)** And the backend or internal firewall should allow traffic from the DMZ to the internal network.
>
> **[1:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=107)** Now, it's important to periodically test to ensure that the firewall is blocking unwanted traffic.
>
> **[1:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=115)** Now, I've gone to this site because I wanted to show you that there are a lot of different resources that you can use to scan your networks.
>
> **[2:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=123)** There's OpenVAS and this is what we're using here in Pentest Tools, and then there's Nmap.
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=129)** So in this case, you can run a light scan for free, two per day.
>
> **[2:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=133)** And I did, and what I did scan was scanme.[nmap.org](https://nmap.org).
>
> **[2:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=139)** Now that's okay, they want you to scan Nmap organization houses that, and it's a vulnerable server, so we can take a look here.
>
> **[2:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=148)** And it shows us all of the vulnerabilities that were found.
>
> **[2:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=154)** And I'll scroll down here.
>
> **[2:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=155)** And it also shows you exposed ports.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=159)** So these contain vulnerabilities, and you want to make sure that if you're using methods to protect your network, you need to periodically test to make sure they're working.
>
> **[2:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=171)** Okay, now let's test your knowledge.
>
> **[2:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=174)** While creating a logical drawing on the network, you notice that there is no DMZ and you're concerned that this puts your organization at risk.
>
> **[3:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=184)** You approach your manager to share your findings.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=188)** Explain the benefits of utilizing a perimeter network.
>
> **[3:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=193)** You can record your answer on the challenge worksheet.
>
> **[3:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=197)** Now, there's a couple other considerations with the DMZ.
>
> **[3:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=202)** When there's heavy traffic, load balancers can be used in the DMZ to reduce traffic on the main LAN while accessing the application servers.
>
> **[3:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=212)** And in addition to having two firewalls, it's suggested that there should be two different vendors as an even more layered approach.
>
> **[3:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=221)** And our discussion focuses on perimeter networks.
>
> **[3:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/recognizing-perimeter-networks-20644049?u=76281980&t=225)** You might want to keep in mind that the idea of a DMZ can be used inside the network as well to provide isolation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (7), web (2), [[Local Area Network (LAN)|Local area network]] (1), front-end (1), lan (1)
> **Env Vars:** dmz (11), lan (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), for example (1)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)

#### Configuring NAT
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=0)** - [Instructor] Network Address Translation works on a router and converts a private IP address to a public IP address and vice versa.
>
> **[0:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=10)** NAT is used on most networks, as it offers the ability for every host in an organization to have a public IP address.
>
> **[0:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=19)** It also provides an additional layer of security by concealing a host's actual IP address.
>
> **[0:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=26)** NAT is used in one of three ways.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=29)** Static NAT is a one-to-one mapping between a private and public IP address.
>
> **[0:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=36)** Dynamic NAT is similar to Static NAT, however, it uses a pool of addresses that are dynamically assigned.
>
> **[0:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=44)** NAT Overloading or port address translation forms a unique public IP address and port number combination.
>
> **[0:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=53)** Now, here we see a basic configuration for network address translation on a router.
>
> **[1:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=60)** During configuration, the interface will be either NAT inside or NAT outside, along with a set of rules for translating the IP addresses.
>
> **[1:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=72)** Now, understand that using either static or dynamic NAT will require enough IP addresses to do a one-to-one translation, however, this isn't the case anymore.
>
> **[1:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=84)** An organization may need 1,000 or 5,000 or more IP addresses.
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=90)** So, how do we overcome this and make that translation?
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=95)** We use NAT overloading or port address translation.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=99)** Port address translation uses an IP address and port number combination.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=106)** Let's step through the process.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=108)** Here, we see two internal hosts that need to access the internet.
>
> **[1:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=113)** They can both use the public IP address.
>
> **[1:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=116)** When they hit the router, the router will search for an available port and attach it to the public IP address as shown.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=125)** So, what about using NAT in an IPv6 environment?
>
> **[2:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=130)** Well, as many organizations migrate to IPv6, this may ultimately reduce the need for NAT, as the address base for IPv6 is extensive.
>
> **[2:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=142)** However, many may still choose to use NAT as a method to provide privacy by concealing the IP addresses of the hosts on a LAN.
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=153)** So, now let's test your knowledge.
>
> **[2:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=156)** What's the difference between NAT and PAT?
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/configuring-nat?u=76281980&t=159)** You can record your answer on the Challenges worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (1), [[Forms]] (1), hit (1), [[Search]] (1), [[Privacy]] (1)
> **Env Vars:** nat (14), lan (1), pat (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. Secure the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### Summarize cloud concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=0)** - [Instructor] For many organizations, the cloud is an extension of the network.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=5)** In this segment, we'll review the types of cloud services available for businesses and consumers.
>
> **[0:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=12)** Today, the concept of cloud computing is pervasive and is used by nearly everyone.
>
> **[0:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=19)** Cloud computing is accessing network resources, such as hardware and software services, from a provider on the internet.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=29)** While some services and data are accessed locally, for example, a server on the local area network, many see the benefits of having access to data and services from anywhere in the world.
>
> **[0:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=42)** There are several types of cloud delivery models for businesses or consumers that are public, private or hybrid.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=50)** The three main types of cloud services are infrastructure as a service, platform as a service and software as a service.
>
> **[1:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=61)** I'm here at this site where we can see a graphical representation of the three main services.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=68)** First, there's infrastructure as a service and this helps supply your infrastructure needs, such as storage, computing and network resources.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=78)** Platform as a service encompasses all those things in infrastructure as a service, but gives you an ability to create an application that includes the environment, development tools and the operating systems.
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=93)** And software as a service encompasses all those things necessary such as platform as a service and infrastructure as a service and provides the ability for you to access hosted applications, such as Microsoft Office 365.
>
> **[1:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=110)** I'm here at this webpage where we can see some common software as a service examples, and there are plenty of them.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=120)** Here's the list, but let's talk about just a few of those.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=124)** Common cloud services include Apple iCloud.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=128)** This provides online storage, backup and synchronization of all your data.
>
> **[2:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=134)** This feature helps to keep all your Apple devices up to date.
>
> **[2:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=138)** Google Drive provides personal storage and collaboration tools and you have the ability to create documents, spreadsheets and slides.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=149)** Dropbox has been around since 2007 and provides the ability to synchronize and store files along with collaboration with your coworkers.
>
> **[2:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=160)** To bring it all together, Chromebook is something that a lot of us use, because it's a laptop used for both productivity and entertainment needs where you access pretty much everything via the cloud.
>
> **[2:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=174)** Now, let's test your knowledge.
>
> **[2:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=177)** For many organizations and individuals, the cloud is an extension of the network.
>
> **[3:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=183)** Discuss the three main types of cloud services.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summarize-cloud-concepts?u=76281980&t=188)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (10), [[IaaS|Infrastructure as a service]] (4), data (3), [[PaaS|Platform as a service]] (3), [[SaaS|Software as a service]] (3)
> **Analogies:** such as (4), for example (1)
> **Definitions:** is an  (2)
> **Code Identifiers:** icloud (1)
> **Speakers:** - [instructor] (1)

#### Connecting to the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=0)** - Network administrators are tasked with managing all aspects of the network.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=5)** However, network boundaries have blurred.
>
> **[0:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=9)** In this segment, we'll outline the relationship between local, fog and cloud resources.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=16)** Let's outline each of the components so you are aware of the complexity.
>
> **[0:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=22)** A local area network is a private network in a localized area that an organization or individual owns, controls and manages.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=32)** Cloud computing is accessing network resources, such as hardware and software services, from a provider on the internet.
>
> **[0:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=42)** Today, there are multiple options for cloud connectivity.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=46)** You can have a dedicated WAN connection along with vendor options such as Google Cloud Interconnect, or IBM Cloud Direct Link.
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=57)** Businesses constantly collect data and use a good deal of the data for statistical analysis, forecasting, and data analytics.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=66)** The cloud represents opportunity, growth, and productivity.
>
> **[1:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=71)** The cloud is a resource somewhere else, and the problem with the cloud is simply distance.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=79)** Cloud servers have the power to process and mine large data sets, but they are too far away to process data and respond in real time, especially if an organization is using mission-critical data and situations where milliseconds can have fatal consequences.
>
> **[1:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=100)** For example, data might be used in a healthcare setting for diagnosis and treatment of patients, or for vehicle-to-vehicle communications to prevent collisions and accidents.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=114)** Because of the distance, the cloud model can be a problem in environments where operations are mission-critical or internet connectivity is less than ideal.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=125)** One solution to deal with the distance is to distribute the computing requirements and bring processing closer to the edge of the network, reducing the amount of data that is sent to the cloud for processing and analysis.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=140)** Bringing computing resources and application services closer to the edge is fog computing.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=147)** Fog computing is a combination of hardware and software solutions that decentralizes the cloud.
>
> **[2:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=154)** It monitors and analyzes real-time data from network connected things and then they take action.
>
> **[2:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=162)** The fog reduces data analysis time from minutes to seconds.
>
> **[2:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=167)** As the networks expand, we need to be aware of the potential of an attack on all levels of the network.
>
> **[2:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=174)** That includes local, fog and cloud resources, as each one can represent an attack vector.
>
> **[3:02](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=182)** Now, let's test your knowledge.
>
> **[3:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=184)** Compare the difference between local, fog and cloud resources.
>
> **[3:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/connecting-to-the-cloud?u=76281980&t=190)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (13), data (10), [[Hardware]] (2), [[Local Area Network (LAN)|Local area network]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** wan (1), ibm (1)
> **Warnings:** be aware (1)
> **Speakers:** - network (1)

#### Outlining virtualized technology
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=0)** - [Instructor] Virtualization uses the hardware of a single device and shares the processing, memory, and storage among multiple virtual machines.
>
> **[0:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=10)** In this segment, we'll review virtualization concepts related to cloud technologies.
>
> **[0:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=18)** A virtual platform requires at least three components.
>
> **[0:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=23)** We'll need the host hardware.
>
> **[0:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=24)** Now this represents the platform that will host the virtual environment.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=30)** Another essential element is the hypervisor or virtual machine monitor.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=35)** This manages the virtual machine environment and facilitates interaction with the computer hardware and the network, and the guest operating systems.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=46)** This represents the operating systems installed under the virtual environment.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=51)** Now, there's two ways to look at virtualization.
>
> **[0:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=54)** You could use either hosted or bare metal.
>
> **[0:59](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=59)** Hosted is installed onto a host operating system.
>
> **[1:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=65)** Any virtual machines that are created are a guest and ride on top of the native operating system.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=73)** Examples of host-based hypervisors include VMware Workstation, Parallels, and Oracle VirtualBox.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=82)** In contrast to the host-based model, a bare metal model isn't riding on top of a native operating system.
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=90)** Instead, the virtualization software is installed directly on the hardware.
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=96)** In an enterprise network, it's common to use a bare metal virtual platform.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=101)** Once the hypervisor is installed, the virtual machines can then be installed.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=106)** The resources are then managed by the hypervisor.
>
> **[1:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=111)** Bare metal applications include VMware ESXi server, Citrix Send server, and Microsoft's Hyper-V.
>
> **[2:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=121)** One concept that is now part of the networking environment is the use of cloud storage containers.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=128)** Containers provide a simplified, secure method to provision-specific infrastructure requirements and are a lightweight alternative to virtual machines.
>
> **[2:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=138)** Cloud containers are referred to as buckets or blobs that can host data objects, which are the equivalent of files in a local file system.
>
> **[2:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=148)** In addition, a container can have customizable metadata attributes.
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=153)** Containers also have an advantage of enforcing resource separation at the operating system level.
>
> **[2:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=160)** On the left hand side, we see how virtual machines virtualize a machine down to the hardware layers and use a hypervisor to manage the machines.
>
> **[2:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=170)** On the right, we see how containers virtualize the software layers above the operating system level and use a container engine to manage the containers.
>
> **[3:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=183)** Containers are being widely used in all types of organizations.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=188)** It's essential to monitor security-relevant container activities that include process activity, along with communications, among containerized services, between containerized services, and with external clients and servers.
>
> **[3:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=208)** In addition, properly manage all secrets, such as API keys, tokens, and passwords, to reduce container security risks and vulnerabilities.
>
> **[3:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=219)** Now let's test your knowledge.
>
> **[3:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=222)** What is the difference between virtualization and cloud containers?
>
> **[3:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/outlining-virtualized-technology?u=76281980&t=227)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtualization]] (5), [[Hardware]] (5), [[Virtual Machines]] (5), cloud (4), [[Security]] (2)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Safeguarding cloud services
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=0)** - [Instructor] Cloud computing has become extremely popular in the past decade as it represents a flexible and dynamic option for provisioning resources.
>
> **[0:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=10)** With cloud computing, an organization can access and manage data and applications from any host anywhere in the world.
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=20)** Even though cloud services are offsite, it's essential to monitor the environment.
>
> **[0:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=26)** In this segment, we'll review best practices for virtualization and container security.
>
> **[0:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=34)** Virtualization and containers are an extension of the network, and security vulnerabilities exist.
>
> **[0:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=41)** Some of those include the elastic and flexible nature of virtualization.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=46)** This actually is a benefit of virtualization, however, it makes it difficult to enforce policies.
>
> **[0:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=54)** There is an increased attack surface.
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=57)** Cloud computing has become popular, but this can result in cloud and virtualization sprawl where instances of virtual machines and containers become unmanageable.
>
> **[1:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=72)** There is a lack of visibility because, unlike locally hosted hardware and applications, the cloud providers have full control over their infrastructure layer, which is largely hidden from the customer.
>
> **[1:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=87)** And secrets management.
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=90)** Poorly managing secrets, such as passwords, certificates, and API keys, can lead to a costly breach.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=99)** There are several best practices for virtualization and cloud asset management, which are similar to managing assets on a local area network, and those include controlling access.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=112)** You need to control access only to authorized individuals using robust methods to ensure proper identification of entities.
>
> **[2:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=123)** And authorize access using the principle of least privilege.
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=129)** Ensure system integrity by identifying and correcting system flaws.
>
> **[2:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=135)** With configuration management, we need to establish and maintain a secure baseline configuration of all images.
>
> **[2:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=145)** And with auditing activity, we define the activity to be monitored and issue alerts whenever there is a policy violation.
>
> **[2:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=154)** Now, some of these guidelines you might not be familiar with, but some of them are embedded in regulations, such as PCI DSS.
>
> **[2:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=163)** Now that is Payment Card Industry Data Security Standard.
>
> **[2:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=167)** There's granular references to how we secure our environments when dealing with cardholder data, and the link is included in your link document, but here it talks about requirements and testing procedures.
>
> **[3:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=181)** Now, I've drilled down and what I want to show you is Appendix A1 where additional PCI DSS requirement for multi-tenant service providers, and that would be your cloud environment.
>
> **[3:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=194)** And here it talks about additional requirements for that environment, such as protect and separate all customer environments and data, and facilitate logging and incident response for all customers.
>
> **[3:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=211)** And you could read more about this, but a lot of these are good practice and things that you would do in a local area network as well.
>
> **[3:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=221)** Now, let's test your knowledge.
>
> **[3:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=223)** What are three good practice activities to secure cloud services?
>
> **[3:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-cloud-services?u=76281980&t=229)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (9), [[Virtualization]] (6), data (4), [[Security]] (3), management (2)
> **Env Vars:** pci (2), dss (2), api (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** such as (3), similar to (1)
> **Best Practices:** good practice (2)
> **Speakers:** - [instructor] (1)


### 4. Identify Attacks

[↑ Back to Table of Contents](#table-of-contents)

#### Comparing attack methods
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=0)** - [Presenter] On any network, security controls are needed on multiple levels, as without a layered approach, you could be victim of an attack.
>
> **[0:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=10)** Passive attacks are things such as traffic sniffing or scanning, and these are done during reconnaissance to discover information about a network.
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=20)** Active attacks are designed to interrupt service, destroy data, or steal information.
>
> **[0:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=27)** Here we see a depiction of the seven-layer OSI model.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=32)** There is a potential for attacks in every layer of the OSI model.
>
> **[0:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=38)** We'll take one more step and separate this and I'll show you that the first two layers, layer one and layer two, are essentially hardware attacks.
>
> **[0:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=49)** Layers three through seven are more directed at software attacks.
>
> **[0:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=55)** So now let's go through each layer starting at layer seven, the application layer.
>
> **[1:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=60)** The application layer is where we initiate contact with the network.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=66)** Attacks can include software attacks, and these are designed to exploit some weakness in the code.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=73)** There could be phishing via email or popups, and malware such as viruses, ransomware, Trojans, and worms.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=82)** The presentation layer is where the data is presented to the application so we can view it.
>
> **[1:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=89)** Attacks include forced browsing, and this is also called a failure to restrict URL access.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=98)** Now, this will allow access to authenticated areas without proper credentials.
>
> **[1:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=105)** And then there's an SSL/TLS strip.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=108)** Now, this is a man-in-the-middle attack, where a malicious actor is between a client and a server.
>
> **[1:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=116)** Here we see the attacker in the middle, and the malicious actor will monitor, capture, and control the communication with the goal of obtaining sensitive information such as usernames and passwords.
>
> **[2:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=133)** The session layer is responsible for initiating, maintaining, and tearing down a session.
>
> **[2:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=139)** A couple of attacks can take place at this layer.
>
> **[2:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=143)** Session hijacking is also known as cookie hijacking.
>
> **[2:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=148)** It grabs the session key to gain access to the services.
>
> **[2:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=154)** A session initiation protocol or SIP flood is where clients are flooded with multiple invite messages in order to take down the phone, and A DNS poison attack, and now this is where fake address records are inserted into the DNS cache so that any request for the address are answered with a fake IP address.
>
> **[2:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=178)** The transport layer is responsible for transportation of the data.
>
> **[3:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=183)** At the transport layer, there are a few attacks that include port scanning.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=188)** This is simply a reconnaissance attack to see what ports are open and listening, and a SYN flood.
>
> **[3:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=196)** Now, this floods the server with multiple SYN packets with no final acknowledgement.
>
> **[3:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=203)** The result is that it overwhelms the server so that legitimate users are locked out.
>
> **[3:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=210)** The network layer is responsible for addressing and routing.
>
> **[3:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=214)** In this layer, we can see the following.
>
> **[3:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=217)** We can see operating system fingerprinting using ICMP.
>
> **[3:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=222)** Now, this again is a passive attack to determine the operating system of the host.
>
> **[3:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=229)** There could be routing attacks, which are done to misdirect traffic.
>
> **[3:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=234)** An IP spoofing attack is where data appears to be coming from another source.
>
> **[4:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=240)** A replay attack is where a malicious actor intercepts credentials and then uses the credentials to gain access to a protected resource.
>
> **[4:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=251)** And there are numerous ICMP attacks, such as a smurf attack, which is a distributed denial-of-service attack.
>
> **[4:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=262)** At the data link layer, this is where the data is ready to be transmitted onto the network.
>
> **[4:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=268)** Here we could see the following.
>
> **[4:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=271)** We can see network sniffing, which is simply eavesdropping, and this is common in a local area network, WPA cracking, which is done on a wireless network to decrypt the encrypted packets, and ARP cache poisoning, which is used in a man-in-the-middle attack.
>
> **[4:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=292)** Now, the physical layer is really simply a physical attack, and that can include theft of devices, cutting cables, or a skimming attack, where someone attaches a device to an ATM or a point of sale system to gather credit card numbers.
>
> **[5:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=313)** Now let's test your knowledge.
>
> **[5:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=316)** List one type of attack that can occur in each layer of the OSI model and you can record your answer on the Challenge worksheet.
>
> **[5:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/comparing-attack-methods?u=76281980&t=327)** On a network, security controls are needed on multiple levels, as an attack can happen at every layer of the OSI model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), application (3), [[Security]] (2), traffic (2), dns (2)
> **Env Vars:** osi (4), dns (2), syn (2), icmp (2), url (1)
> **Definitions:** is a  (4), known as (1)
> **Analogies:** such as (4)
> **Speakers:** - [presenter] (1)

#### Attacking passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=0)** - [Instructor] A password is something you know.
>
> **[0:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=3)** It's a series of numbers and characters, and it provides access control.
>
> **[0:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=9)** It's important to create strong passwords and protect them because if you obtain someone's password, you'll have the same rights as the user.
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=20)** Now, there are a number of different password attacks.
>
> **[0:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=23)** Let's talk about a few.
>
> **[0:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=26)** One way to do a password attack is by using a keystroke logger.
>
> **[0:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=31)** A keystroke logger is either a physical device or software that captures keystrokes.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=37)** When logging someone's keystrokes, you'll probably get a lot of information, but you might capture a username and password.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=47)** Password sniffing is pulling the password or hash via packet analysis using an app such as Wireshark.
>
> **[0:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=56)** Another password attack is a brute force attack.
>
> **[1:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=61)** A brute force attack is a trial and error method where thousands and thousands of possible combinations are tried.
>
> **[1:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=70)** A dictionary attack is a subset of a brute force attack where all common passwords are tried.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=78)** Because it's easier to reset a password than to guess or crack one, an attacker might try to reset a password.
>
> **[1:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=86)** In this case, the goal is for the attacker to obtain a reset token.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=94)** And a very common method today is by using a social engineering attack.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=99)** Here we see a social engineering email.
>
> **[1:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=103)** The attacker has set up a bogus webpage and simply waits for the victim to visit the page and enter new information.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=112)** The email is carefully crafted.
>
> **[1:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=115)** Here it begins with, "As part of our ongoing security efforts, the Landon Hotel has conducted a security audit.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=125)** We have found that your username and password were previously exposed on other sites.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=131)** We are requiring you to reset your password in order to continue to have access to your account information."
>
> **[2:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=141)** And here's the call to action.
>
> **[2:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=144)** There's a hyperlink that will go to the attacker's website, and then once the victim enters the information, the attacker then has your username and password.
>
> **[2:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=156)** So, let's review some best practices.
>
> **[2:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=160)** One really important one is to avoid using common passwords.
>
> **[2:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=166)** Let's take a look at 10 of the most common passwords.
>
> **[2:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=169)** I'm here at this site, and I'll just scroll down here, and you can see that they're very simple, 123456, password, 11111.
>
> **[3:02](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=182)** These passwords would most likely be tried first in a dictionary attack.
>
> **[3:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=187)** You might also consider using a password manager.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=191)** In addition, you should change your passwords periodically.
>
> **[3:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=196)** Now, if you need a strong password, there are plenty of sites that will help you generate a strong password.
>
> **[3:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=203)** Let's take a look.
>
> **[3:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=205)** Here I'm at [random.org](https://random.org) and you can just generate five very strong passwords.
>
> **[3:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=211)** In addition, you might also consider using a passphrase, which is easier to remember and many times just as strong.
>
> **[3:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=220)** And if your organization supports this, you might consider using multifactor authentication.
>
> **[3:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=228)** This requires a second form of authentication.
>
> **[3:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=231)** That would mean that in addition to your password, you'll get a one-time token on your cell phone.
>
> **[3:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=238)** So now, let's test your knowledge.
>
> **[4:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=241)** List some best practice methods used to prevent a password attack.
>
> **[4:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=247)** You can record your answer on the challenge worksheet.
>
> **[4:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=251)** Now, I have a few more sites for you.
>
> **[4:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=253)** One is that you might want to check to see, haveibeenpwned.
>
> **[4:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=258)** At this site you can check if your email or phone was involved in a data breach.
>
> **[4:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/attacking-passwords?u=76281980&t=264)** And here is a graphic that you can share with your family and friends to remind them to create strong passwords and protect them to avoid becoming a victim of a password attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Engineering]] (2), [[Security]] (2), [[Wireshark]] (1), data (1)
> **Definitions:** is a  (4)
> **UI Navigation:** go to (1), scroll down (1)
> **URLs:** [random.org](https://random.org) (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Sniffing the network
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=0)** - [Instructor] Network sniffing uses a packet sniffer, network monitor, or analyzer.
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=6)** The sniffer captures the packets and deciphers the bits.
>
> **[0:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=11)** It then displays the field values in a readable format.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=16)** Now, sniffing can help the network administrator with troubleshooting network issues.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=21)** However, this also could be done for malicious reasons.
>
> **[0:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=26)** If an attacker has physical access to a device, they can tap into the data stream to see even more of the traffic.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=35)** This is because sniffing can also be used as a reconnaissance technique on either a wired or wireless network.
>
> **[0:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=43)** If the traffic is in plaintext and not encrypted while in transit, the contents can be read.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=51)** I'm going to show you three examples of packet sniffing and how we can see the data that's not encrypted.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=58)** If you'd like to follow along, go to this website, wiki.[wireshark.org](https://wireshark.org), and we'll find three captures.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=66)** Here, we'll select this one, mysql_complete.pcap.
>
> **[1:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=72)** Another one is Network_Join_Nokia_Mobile.pcap.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=77)** And then, we'll also select telnet-cooked.pcap.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=82)** Then, I'll open them in Wireshark.
>
> **[1:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=84)** So, first we'll select mysql_complete.pcap.
>
> **[1:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=89)** Now, your screen might look a little different because I've increased the font so that you can see this.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=94)** Now, this is the entire packet capture, and I'm going to show you first one stream.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=101)** Now, we'll go here and say Follow, TCP Stream, and here it is.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=109)** It's in plaintext, but here we can see SELECT DATABASE, and then down below, show tables.
>
> **[1:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=118)** Now, we can see the names of the tables.
>
> **[2:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=121)** Now, this is something we wouldn't want anyone to see.
>
> **[2:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=123)** The details of your database, including the names of the tables.
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=129)** I'll close that.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=131)** Next, we'll go to Network_Join_Nokia_Mobile.pcap.
>
> **[2:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=136)** This example shows an access point broadcasting the SSID.
>
> **[2:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=141)** Now, let me pull these columns over so we can focus in on the information.
>
> **[2:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=148)** Okay, now there we have this information.
>
> **[2:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=152)** We can see that the SSID is broadcast.
>
> **[2:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=156)** Broadcasting makes it one step closer for a hacker or even a neighbor to get access to your network.
>
> **[2:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=163)** So, to conceal your access point, disable SSID broadcasting.
>
> **[2:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=169)** Now, my last example is Telnet.
>
> **[2:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=173)** Telnet is a protocol that is used for terminal emulation.
>
> **[2:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=177)** It is deprecated in the Windows operating system, meaning it's off by default, but Telnet can still be used, but you should encrypt it using PuTTY or Secure Shell.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=188)** Here in this Telnet transaction, it's not encrypted.
>
> **[3:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=192)** So, I'll follow the stream, Follow, TCP Stream, and there we can see the information in plaintext.
>
> **[3:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=204)** Now, this is actually just a test and we're going to go here and show you the login fake, password user.
>
> **[3:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=212)** But the key here is that the data is not encrypted, and many times we can obtain information from a site that's not secure.
>
> **[3:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=222)** As shown, network sniffing can be used for reconnaissance techniques, and if the data isn't encrypted, I can see it in plaintext, which can lead to data leakage.
>
> **[3:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=235)** Now, let's test your knowledge.
>
> **[3:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=237)** What is the best way to prevent data traveling across the network from being exposed?
>
> **[4:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/sniffing-the-network?u=76281980&t=243)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), traffic (2), [[Wireshark]] (2), database (2), [[Troubleshooting]] (1)
> **Env Vars:** ssid (3), tcp (2), select (1), database (1)
> **Code Identifiers:** mysql_complete (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **URLs:** [wireshark.org](https://wireshark.org) (1)
> **SQL:** select (1)
> **Tools:** terminal (1)

#### Spoofing protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=0)** - Protocol spoofing is when a malicious actor impersonates another entity on the network.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=7)** This is done with the objective of stealing data, spreading malware or circumventing access controls.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=14)** An attacker has several tools in his or her arsenal.
>
> **[0:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=18)** Common methods include spoofing DNS entries, IP addresses, email or address resolution protocol.
>
> **[0:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=27)** Let's talk about a few examples of protocol spoofing.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=32)** Domain name system is a host name to IP address resolution.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=37)** It's essential to any network.
>
> **[0:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=41)** A spoof will modify the DNS server cache.
>
> **[0:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=44)** Now, on your own system, you have a DNS cache, so you can access websites quickly.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=51)** To see your own cache go into the command prompt on a Windows operating system, and there I will type IP config display DNS, and press Enter.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=63)** Now there is where you can see your own local cache.
>
> **[1:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=67)** Now, if we were to modify the server cache or any cache for that matter, it would direct us to websites we probably wouldn't want to visit.
>
> **[1:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=76)** An IP address uniquely identifies a host on a network.
>
> **[1:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=80)** Spoofing an IP address will conceal the actual IP.
>
> **[1:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=86)** Now, it doesn't change the IP address because if it did, it wouldn't be able to return data because it wouldn't know where to go.
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=95)** Anonymous browsing uses proxies to hide the sender's location, and hackers commonly use this technique to conceal their true location.
>
> **[1:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=105)** If they don't spoof or conceal their IP address somehow, then we'll know exactly where the location is of the IP address.
>
> **[1:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=113)** Let's take a look.
>
> **[1:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=115)** Let's say I received traffic from 172.217.12.238.
>
> **[2:02](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=122)** I went into search and it came up with this, [ipinfo.io](https://ipinfo.io).
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=129)** Now this shows me, and I'll scroll down here, that the IP address belongs to Google as we see information listing Google's addresses and the geolocation, and I'll scroll down.
>
> **[2:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=141)** Here, is where we can see geolocation information.
>
> **[2:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=146)** Here we can see that the traffic is coming from around the Washington DC area.
>
> **[2:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=152)** If I do want to spoof my IP address, there are many sites that can help you achieve this.
>
> **[2:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=158)** Here I go to Hide My IP where I can conceal my IP address.
>
> **[2:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=164)** So hackers have this in their arsenal, as well.
>
> **[2:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=169)** An email spoof makes an email look like it came from someone else with the goal of obtaining information.
>
> **[2:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=176)** This technique is used as part of a social engineering strategy when someone wants you to read an email.
>
> **[3:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=183)** I found this site where it talks about the seven best sites to prank your friends with fake email messages.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=191)** And I selected Deadfake.
>
> **[3:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=196)** And then I went to send fake mail.
>
> **[3:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=200)** And here you can put in whatever name somebody important and have the inclusion of something like, please read this and send information.
>
> **[3:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=210)** So as we can see, there are many ways to spoof protocols.
>
> **[3:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=214)** So let's test your knowledge.
>
> **[3:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=217)** List some reasons why a malicious actor might use protocol spoofing.
>
> **[3:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/spoofing-protocols?u=76281980&t=223)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** dns (4), data (2), traffic (2), [[Google]] (2), [[Domain Name System (DNS)|Domain name system]] (1)
> **Env Vars:** dns (4)
> **UI Navigation:** scroll down (2), go to (1)
> **URLs:** [ipinfo.io](https://ipinfo.io) (1)
> **Versions:** 172.217.12 (1)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Speakers:** - protocol (1)

#### Poisoning the ARP cache
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=0)** - [Instructor] Address resolution protocol is used on a local network to associate an IP address with a hardware address so a device can deliver data to the correct host.
>
> **[0:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=13)** It's also used to test for duplicate IP addresses.
>
> **[0:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=18)** Normal ARP traffic is simply a request and a reply.
>
> **[0:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=23)** ARP is not routable and there's no IP header because it's already in the correct network.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=29)** Poisoning the ARP cache is a man-in-the-middle attack that redirects traffic to an attacker's computer.
>
> **[0:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=36)** Most systems have an ARP cache, which is a table of IP addresses to MAC address pairings.
>
> **[0:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=44)** Let's take a look.
>
> **[0:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=45)** I'm at the command prompt, and I'll issue the command arp -a, and here we can see my own local ARP cache.
>
> **[0:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=55)** Now that we understand how the ARP cache works, let's discuss how an ARP cache poisoning attack works.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=63)** With ARP spoofing, a fake or spoofed MAC address is placed on the LAN.
>
> **[1:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=69)** This then allows the attacker to redirect traffic to somewhere else in order to steal information by performing a man-in-the-middle attack.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=79)** To launch this attack, a malicious actor will use a tool such as Ettercap, which is a suite for a man-in-the-middle attack on a LAN, and you can learn more here.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=92)** Now, we'll step through the process.
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=95)** Here we see the attacker using Ettercap.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=99)** The malicious actor is now the Ettercap poisoner and is positioned right in the center of the network.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=106)** Here we see the players, the Ettercap poisoner, and then over on the right-hand side, we see Aaron's computer.
>
> **[1:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=115)** The Ettercap poisoner is attached to Port 1, and Aaron's computer is attached to Port 4.
>
> **[2:02](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=122)** We see the switch, and then over on the right-hand side, we see the router.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=128)** In the upper left-hand corner, we see what's called a CAM, or content addressable memory table.
>
> **[2:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=135)** You might also hear this being called a Mac address table or a switching table.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=140)** Now, this table is used by the switch, and it associates the Mac address to the port.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=147)** Before the attack, the Ettercap poisoner has the last two digits of the Mac address as 69.
>
> **[2:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=154)** And on Aaron's computer, the last two digits of the Mac address is 87.
>
> **[2:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=161)** After the poison takes place, now you can see that the Ettercap poisoner holds the Mac address of 87, just like Aaron.
>
> **[2:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=171)** Now, traffic destined for Aaron's computer will be sent to Aaron and the attacker.
>
> **[2:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=177)** Now, to show you what this might look like on a LAN, I'll take you out to CloudShark.
>
> **[3:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=183)** And here we can see a packet capture that shows an ARP poison attack.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=188)** Now, I'll go to this here 'cause I wanted to highlight this to show you that in this capture, you can see the IP addresses of two hosts.
>
> **[3:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=198)** .1 and .254 are both using the same Mac address.
>
> **[3:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=203)** This traffic appears to be unique, but as you can see, the traffic has been poisoned.
>
> **[3:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=209)** Now, keep in mind, ARP is not routable.
>
> **[3:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=213)** So while this attack is possible, this attack only works on a local area network, meaning you have to be in the local area network where an ARP poison attack can be launched.
>
> **[3:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=226)** Now, let's test your knowledge.
>
> **[3:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=228)** What are the possible consequences of an ARP cache poison attack?
>
> **[3:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/poisoning-the-arp-cache?u=76281980&t=233)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** traffic (6), lan (3), [[Local Area Network (LAN)|Local area network]] (2), [[Hardware]] (1), data (1)
> **Env Vars:** arp (12), lan (3), mac (2), cam (1)
> **Definitions:** is a  (3)
> **Ports:** port 1 (1), port 4 (1)
> **Analogies:** such as (1), just like (1)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)


### 5. Secure Protocols and Procedures

[↑ Back to Table of Contents](#table-of-contents)

#### Using antivirus
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=0)** - [Narrator] Antivirus and anti-malware protection are part of a layered security approach, as there are many avenues for viruses to attack your system.
>
> **[0:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=12)** A common way to get a computer virus is by opening an email attachment that has an infected file.
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=20)** You could also be a victim of a malware attack by clicking on a malicious ad or simply surfing by what is called a drive-by download.
>
> **[0:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=31)** Or you could go to a site to download software, which may contain malware.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=37)** Or you became a victim because you had unpatched software or didn't update your operating system, and that made it possible for you to get a virus.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=48)** Antivirus runs in the background and monitors your system as you download software, open documents, or extract files.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=58)** Signature based matches a signature of a known virus.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=63)** Now, virus definitions contain signatures for virus in other malware that have been defined.
>
> **[1:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=70)** Updated definitions are downloaded daily or in some cases more often.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=77)** A compliment to this method is heuristics.
>
> **[1:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=80)** Heuristics works by how something behaves and can generally detect an unknown program, such as a new and possibly undetected virus.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=92)** Depending on your antivirus program, the process may be called background or realtime protection or something similar.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=101)** Antivirus will check the file or executable before you open it and possibly damage your system.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=108)** Many users are unaware of this process until they get a notification from their antivirus software that the file that they downloaded was quarantined for being a known threat.
>
> **[2:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=121)** Once identified, the antivirus may quarantine your file.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=125)** Now you may be able to open the file and run it anyway if you're confident it's safe.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=131)** However, some programs may even delete the file.
>
> **[2:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=135)** Most antivirus programs set up full system scans often once a week to ensure that the latest virus definitions are used to check for dormant or hidden viruses.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=147)** A manual scan is not always necessary as antivirus should pick up a virus signature if you did download malware.
>
> **[2:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=155)** However, a manual scan should be run after you install a new antivirus program to ensure that there are no dormant viruses present.
>
> **[2:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=167)** False positives sometimes occur and they'll flag a file as it's malware, well, it's really a safe file.
>
> **[2:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=175)** Heuristics may increase the rate of false positives because the antivirus inappropriately felt the program was behaving like a virus.
>
> **[3:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=185)** Despite this, false positives are fairly rare.
>
> **[3:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=189)** If your antivirus says that the file is malicious, you should generally believe it.
>
> **[3:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=196)** Now, let's test your knowledge.
>
> **[3:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=198)** Describe how signature based and heuristics work together to protect a system.
>
> **[3:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=206)** You can record your answer on the challenge worksheet.
>
> **[3:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-antivirus?u=76281980&t=210)** Best practices to prevent getting a virus include use programs that automatically update and scan, update your browser and operating system when prompted, and follow safe computing practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (1)
> **UI Navigation:** go to (1), open the (1)
> **Prerequisites:** set up (1), install (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Safeguarding DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=0)** - [Instructor] Domain Name System is an application layer protocol that's essential to any network.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=7)** DNS resolves host names to an IP address, and it uses Port 53 over UDP or TCP.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=16)** In general, DNS will use UDP because we want our responses fast.
>
> **[0:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=22)** However, for a full zone transfer, TCP is used.
>
> **[0:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=27)** Normal queries and responses occur when a client sends a request to a DNS server for an IP address.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=35)** The server then responds with information, but it can ask other servers for the information as well.
>
> **[0:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=42)** DNS failures will prevent hosts from communicating or locating each other.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=47)** There are many different types of DNS records, as we see here.
>
> **[0:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=52)** Let's point out a couple of examples.
>
> **[0:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=55)** Here is an A record, which is a 32-bit IP version four address.
>
> **[1:02](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=62)** A quad A is for IP version six.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=66)** And an MX record is for a mail exchange server.
>
> **[1:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=71)** Using DNS started back in 1983.
>
> **[1:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=76)** During this time, there was no consideration for any security methods to protect DNS.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=83)** As networks grew and evolved, DNS remained an insecure protocol that had no way to provide authentication between entities.
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=93)** When we request information, there are two types of servers.
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=97)** An authoritative server contains a master set of data, which is updated whenever there is a change.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=106)** A non-authoritative server is a cache server containing copies of normal back and forth user queries.
>
> **[1:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=113)** Data could be outdated on a non-authoritative server.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=120)** One concern we have with DNS is a man in the middle attack.
>
> **[2:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=126)** Now, here you see the attacker sitting in the middle when there's a request for a website.
>
> **[2:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=132)** The IP address may come back correct, but the man in the middle attack can change it, and then it would be redirected to possibly a website you wouldn't want to go.
>
> **[2:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=144)** DNS security extensions add security to the domain name system.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=149)** This is designed to protect against attacks such as DNS cache poisoning.
>
> **[2:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=155)** The extensions provide origin authentication of data and data integrity.
>
> **[2:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=161)** However, DNS security does not provide confidentiality.
>
> **[2:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=165)** I wanted to show you an example of some of the extensions.
>
> **[2:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=169)** I'm here at CloudShark, where we can take a look at a precaptured packet.
>
> **[2:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=175)** Now, within this capture, we have a standard query and response session, but DNS has added some new resource record types.
>
> **[3:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=185)** Now within this, and using DNS security, a digital signature will help to provide authentication.
>
> **[3:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=192)** Now, to see that, I've clicked on frame four, and then I've modified the interface so that we can drill down to the answer section.
>
> **[3:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=202)** There you can see some of those extensions.
>
> **[3:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=205)** Keep in mind, DNS security must be supported on the DNS servers to check the authentication and integrity values.
>
> **[3:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=214)** This will then reassure the resolvers that the information is correct and complete.
>
> **[3:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=222)** Now let's test your knowledge.
>
> **[3:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=226)** Explain how DNS security can help protect against attacks.
>
> **[3:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/safeguarding-dns?u=76281980&t=231)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** dns (17), [[Security]] (7), data (4), [[Domain Name System (DNS)|Domain name system]] (2), application (1)
> **Env Vars:** dns (17), udp (2), tcp (2)
> **Definitions:** is a  (4), is an  (2)
> **Ports:** port 53 (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Securing internet protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=0)** - [Presenter] Internet protocol is a best-effort connectionless protocol, used to transfer data across networks by routing and addressing each packet.
>
> **[0:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=11)** IP on its own is not secure.
>
> **[0:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=15)** So how do we secure IP communications?
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=20)** Well, that is where Internet Protocol Security or IPsec comes into play.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=29)** IPsec is a protocol suite for securing IP communications.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=35)** IPsec can both encrypt and authenticate each IP packet of a session between hosts or networks within a private land or across the internet.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=48)** We can add IPsec to IPv4 or IPv6 by using additional headers.
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=57)** If we take a look at our figure and security methods used in the TCP/IP stack, we see that IPsec provides security at the network layer.
>
> **[1:09](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=69)** Unlike an SSL/TLS VPN, IPsec requires the use of proprietary software.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=78)** In addition, the network administrator will need to set up and maintain the connection.
>
> **[1:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=85)** Many feel because of the added steps when setting up an IPsec VPN, this provides improved security.
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=96)** IPsec is not a single protocol, but a framework that provides a set of security processes and has three main elements, the Encapsulating Security Payload, the Authentication Header and key management.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=114)** Let's first talk about the Encapsulating Security Payload protocol.
>
> **[2:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=121)** This is a robust protocol that's a combination of encryption and authentication protocols that provide confidentiality, authentication, integrity, and anti-replay services for both IPv4 and IPv6.
>
> **[2:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=139)** The Authentication Header protocol provide support for data integrity and authentication of IP packets using a message authentication code.
>
> **[2:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=152)** Now, why would we use the Authentication Header?
>
> **[2:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=156)** Because we have just seen that the Encapsulating Security Payload also provides authentication.
>
> **[2:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=163)** Well, sometimes all we need is authentication because when devices on the network communicate with one another, the Authentication Header can provide assurance that a neighbor advertisement comes from an authorized router.
>
> **[3:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=180)** However, you need to keep in mind that the Authentication Header does not provide data confidentiality as it does not encrypt the data.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=191)** And then there's key management.
>
> **[3:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=194)** IPsec provides key management by managing the session keys to ensure that they are not intercepted or used by unauthorized parties.
>
> **[3:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=205)** Key management can be done in one of two ways.
>
> **[3:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=210)** Manual is practical for small, relatively static environments.
>
> **[3:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=215)** With this method, the network administrator will need to configure each system with its own keys and the keys of other communicating systems.
>
> **[3:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=224)** However, most enterprise networks use an automated key management system.
>
> **[3:50](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=230)** This is the most flexible, as it enables on demand creation of keys during a session and an automated system will facilitate the use of keys in a large distributed system.
>
> **[4:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=245)** So now let's test your knowledge.
>
> **[4:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=248)** What are the three main elements of the IPsec framework?
>
> **[4:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=254)** You can record your answer on the challenge worksheet.
>
> **[4:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=259)** IPsec provides flexibility in the way you implement an IPsec VPN.
>
> **[4:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=266)** It depends on your needs and what level of security is required.
>
> **[4:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=272)** You can implement an IPsec VPN in one of three ways.
>
> **[4:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=277)** Host to host.
>
> **[4:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=278)** Now, this is simply one host to another.
>
> **[4:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=283)** Gateway to gateway.
>
> **[4:44](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=284)** This is between a pair of routers.
>
> **[4:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=289)** And then remote access, this is from an outside host to the gateway and vice versa.
>
> **[4:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-internet-protocol?u=76281980&t=296)** IPsec is a framework that can encrypt and authenticate each IP packet of a session between endpoints.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (9), management (5), data (4), vpn (4), [[Routing]] (1)
> **Env Vars:** vpn (4), tcp (1), ssl (1), tls (1)
> **Definitions:** is a  (4)
> **Prerequisites:** set up (1), configure (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [presenter] (1)

#### Protecting DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=0)** - [Instructor] Dynamic Host Configuration Protocol dynamically assigns IP addresses.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=8)** The four step process is called the DORA Process, Discover, Offer, Request, and Acknowledge.
>
> **[0:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=17)** Let's step through the process.
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=20)** When a host joins a network, it doesn't have an IP address, so it begins the DORA Process by broadcasting a Discover Packet out onto the network.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=32)** The server will then respond with an offer.
>
> **[0:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=36)** The client then formally requests an IP address, and the server will then formally acknowledge by sending a DHCP ACK.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=48)** The acknowledgement contains critical configuration information, such as the IP address of the DNS server and the default gateway.
>
> **[1:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=60)** Now, let's test your knowledge.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=63)** What are the four steps in the DORA process?
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=68)** You can record your answer on the Challenge Worksheet.
>
> **[1:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=75)** We know that DHCP is widely used.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=78)** However, there are threats to the process.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=82)** One main concern is that DHCP doesn't have a Native Authentication Process.
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=90)** Now, whenever a client requests an IP address from a DHCP server, the client has no reassurance that the server is legitimate.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=101)** In addition, the server has no way of knowing that the client requesting the address is a legitimate client on the network.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=112)** The client can then be a victim of DHCP Spoofing.
>
> **[1:59](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=119)** As we see in the graphic, when a client requests an IP address, a reply can come from a legitimate server or a Rogue DHCP server.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=131)** Rogue clients and servers on a network can cause serious problems, as they can be used in a Man in the Middle Attack.
>
> **[2:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=141)** The attacker will configure the Rogue server with bogus DNS server and default gateway information.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=149)** This will then misdirect traffic to other rogue devices.
>
> **[2:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=155)** Now, there are a few Best Practices to prevent an attack.
>
> **[2:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=162)** One main thing is that the network administrator can reduce the risk of an attack by configuring devices to monitor for trusted hosts.
>
> **[2:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=173)** Now, there are several things that we can do to help assure trust.
>
> **[2:59](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=179)** One is to authorize DHCP servers in Active Directory.
>
> **[3:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=184)** In a Windows environment, Active Directory will authorize DHCP servers before they can start leasing addresses to the clients.
>
> **[3:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=195)** Another technique is to use VLAN Access Control Lists.
>
> **[3:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=200)** Now, a regular Access Control List resides on a router's interface, and it's used only for routed packets.
>
> **[3:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=210)** However, a VLAN Access Control List provides access control on a switch.
>
> **[3:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=217)** And here we see an example of a VLAN Access Control List on a switch.
>
> **[3:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=223)** Another technique is to employ DHCP Snooping.
>
> **[3:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=227)** Now, this works on the concept of trusted ports and untrusted ports.
>
> **[3:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=234)** Trusted ports are interfaces that connect to authorized DHCP servers and switch uplinks, and untrusted ports are user access ports.
>
> **[4:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=247)** So DHCP is widely used.
>
> **[4:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-dhcp?u=76281980&t=251)** It's important to prevent DHCP Spoofing by configuring devices to monitor for trusted and authorized hosts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** dns (2), [[Active Directory]] (2), traffic (1), [[Windows]] (1)
> **Env Vars:** dhcp (12), dora (3), vlan (3), dns (2), ack (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Encrypting data in transit (VPN)
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=0)** - [Instructor] Today when you click on a hyperlink, you'll want to access a remote resource.
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=6)** In most cases, we must transport data over an insecure network, such as the internet.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=14)** We access resources in the cloud or remote office via a laptop or home office or on a mobile device in an airport or even another country.
>
> **[0:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=26)** As a result, many businesses and consumers use virtual private network, or VPN, technology to transmit data.
>
> **[0:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=38)** A VPN is a secure channel or tunnel between two endpoints.
>
> **[0:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=45)** It protects your communication and can protect your identity when traversing the internet.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=51)** VPNs provide confidentiality by encrypting the data, authentication to ensure only authorized entities are communicating, and integrity by detecting any message modification.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=68)** VPNs can protect at different layers of the OSI model, from the data link all the way to the application layer.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=78)** Today there are many choices in the ways that you create a VPN.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=83)** Commonly used VPNs include IPsec, Secure Shell, multi-protocol label switching, SSL/TLS, OpenVPN, and browser-based VPNs for consumers.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=101)** Now let's talk about a couple of different types of VPNs.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=106)** An IPsec VPN can be used with both IPv4 and IPv6 and is commonly used to secure remote access between offices in different locations.
>
> **[1:59](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=119)** IPsec uses symmetric encryption such as AES to secure the data between the endpoints.
>
> **[2:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=127)** IPsec can run into trouble with network address translation and firewall rules, so you'll need to carefully configure your device.
>
> **[2:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=137)** Secure Shell, or SSH, offers VPN tunneling and built-in username and password authentication to establish a connection to a single computer.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=149)** Now, this would be used in case you need to administer a different computer in a different location.
>
> **[2:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=156)** It uses port 22 by default when initiating the connection, however that can be changed.
>
> **[2:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=163)** Putty is an application that you can use to create the connection for Secure Shell.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=168)** I'm here at the Putty download page, and you would be able to download the appropriate version for your system.
>
> **[2:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=176)** I downloaded and installed Putty, and here you can see the interface.
>
> **[3:01](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=181)** It's pretty well straightforward in where you put the host name or IP address.
>
> **[3:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=186)** And there it is, defaulted at port 22.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=191)** Once you connect, your interface would look something like this.
>
> **[3:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=195)** Another type of VPN is a Secure Socket Layer/Transport Layer Security VPN.
>
> **[3:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=202)** These VPNs have been around since the early 1990s and were first developed by Netscape.
>
> **[3:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=209)** Eventually they were adopted by nearly everyone to create tunnels between specific applications, primarily in web browsers.
>
> **[3:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=219)** SSL/TLS VPNs provide encryption and reliability for the upper layers, layers five through seven, of the OSI model.
>
> **[3:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=231)** We use an SSL/TLS VPN for transmitting sensitive information, such as banking or credit card information, to a server using HTTPS.
>
> **[4:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=244)** Businesses commonly use an SSL certificate to reassure clients that their data transfer is secure.
>
> **[4:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=254)** Unlike SSH, it doesn't require any authentication and typically uses port 443 to make a connection.
>
> **[4:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=263)** OpenVPN is an open source solution that has many security and control features.
>
> **[4:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=271)** I'm here at this webpage where you can learn more about this.
>
> **[4:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=275)** OpenVPN uses SSL/TLS and is able to cross NAT and firewalls.
>
> **[4:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=282)** In some cases, you might simply want or need a browser-based created VPN, and you can go online to select a couple of them, such as this one I found here, HTTPS Everywhere.
>
> **[4:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=296)** As you can see, you can download and install it so it will work with your browser.
>
> **[5:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=304)** ZenMate is another option.
>
> **[5:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=307)** With this option, you can browse anonymously when a secure connection is not available.
>
> **[5:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=313)** Now let's test your knowledge.
>
> **[5:16](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=316)** Name three types of VPNs.
>
> **[5:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/encrypting-data-in-transit-vpn?u=76281980&t=319)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** vpn (9), data (6), [[Microsoft Office|Office]] (2), application (2), [[Security]] (2)
> **Env Vars:** vpn (9), ssl (5), tls (4), osi (2), ssh (2)
> **Definitions:** is a  (2), is an  (2)
> **Analogies:** such as (4)
> **CLI Commands:** ssh (2), make (1)
> **Ports:** port 22 (2), port 443 (1)
> **Prerequisites:** you'll need (1), configure (1), install (1)
> **UI Navigation:** click on (1)

#### Assessing security baselines
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=0)** - [Instructor] Threats can come from a number of different sources that include hackers, malware, or even a disgruntled employee.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=8)** Hardening is taking steps to protect our systems and minimize our exposure to threats.
>
> **[0:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=15)** Let's review some common best practice methods to protect and defend our systems.
>
> **[0:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=23)** Use antivirus and anti-spyware protection and schedule daily automatic definition updates and scans.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=32)** Secure email system to minimize threats.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=35)** Do not open suspicious email attachments or respond to requests from unknown senders.
>
> **[0:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=41)** Backup and secure all data files.
>
> **[0:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=45)** Make sure you use strong passwords or passphrases for all user accounts.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=51)** Disable any unneeded user accounts and remove any unnecessary programs.
>
> **[1:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=60)** As you can see, there are a number of things that we can do to harden a system.
>
> **[1:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=65)** A security baseline ensures that the configuration settings for all devices are in line with an organization's minimum security standards and that all devices are properly secured.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=79)** Keep in mind, an enterprise network will have thousands of managed devices that include routers, laptops, desktops, and even IoT devices.
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=90)** All of the devices must be hardened to meet the minimum security standards.
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=95)** In most cases, the organization will assign a person responsible for security who will manage the network and ensure that all devices are in compliance with the organization's security posture.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=108)** Now, for example, I brought you to this webpage and this shows mandatory security baselines, and it talks about a security baseline, defining a set of security objectives, which must be met by any given service or system.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=125)** Now, it is an older document, but keep in mind, the guidelines are updated, and I'll scroll down and show you some of the documents.
>
> **[2:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=134)** Now, I went to one here, you can see security baseline for hardened PCs and laptops, and this was last modified in 2019.
>
> **[2:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=145)** Now I've opened it up and I've drilled down, and here, it shows security baseline requirements, and it talks about what are the requirements for access control and accounts.
>
> **[2:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=157)** For example, restrict access to privileged accounts, and there's comments as well, so you really understand what it is and why you're doing it.
>
> **[2:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=167)** Applying the rule of least privilege reduces the scope a successful attacker can have.
>
> **[2:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=174)** It also covers network interfaces, physical security, and more.
>
> **[3:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=180)** And here's another one, security baseline for industrial embedded devices.
>
> **[3:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=186)** Again, I've opened it and I drilled down, and again, it talks about all elements of how do we secure this system, including access control, industrial devices, network configuration, monitoring, and logging, and more.
>
> **[3:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=203)** Now, let's test your knowledge.
>
> **[3:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=205)** A security baseline ensures that all device configuration settings are in line with the organization's minimum security standards.
>
> **[3:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=214)** List five good practice techniques to minimize the impact of an attack.
>
> **[3:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/assessing-security-baselines?u=76281980&t=220)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (14), data (1), [[IoT]] (1)
> **Analogies:** for example (2)
> **Best Practices:** best practice (1), good practice (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 6. Limiting Access

[↑ Back to Table of Contents](#table-of-contents)

#### Using the principle of least privilege
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=0)** - [Instructor] In any organization, permissions are given in order to perform certain duties, complete operations, or access applications and files.
>
> **[0:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=10)** Everyone plays a role in keeping an organization's information and systems safe and secure.
>
> **[0:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=17)** However, with the many different groups and individuals within an organization, this makes the job of managing permissions difficult.
>
> **[0:25](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=25)** Even if permissions are carefully given, removing the privilege isn't always a trivial task.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=32)** Over time, individuals in an organization are granted extra rights as their roles and responsibilities change.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=40)** Permitting permissions beyond minimal rights increases the risk that privileges will be abused, and this can result in a condition known as permission creep.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=51)** One of the best defenses against a costly data breach is by using the principle of least privilege.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=58)** The principle of least privilege states assign only the privileges needed to a program, process or privileged user of a system for the shortest time necessary, and in as small a domain as possible to complete a task without hindrance.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=77)** Implementing the principle of least privilege is many times as part of compliance requirements, and this again will help prevent a costly breach.
>
> **[1:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=88)** Now, let's take a look at some examples of how we can minimize threats by implementing the principle of least privilege.
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=96)** Now, one example is by properly using the administrator's role.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=101)** In any organization, it's best to issue an administrator two accounts, and an administrator account for administrative work only.
>
> **[1:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=111)** When that individual is not doing administrative tasks, they should be logged in as a regular user.
>
> **[1:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=118)** Additionally, run any applications with the least privilege needed to complete a job.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=124)** If administrative privileges are unnecessary when running applications, log in as a general user instead of an administrator.
>
> **[2:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=134)** This will reduce the risk of malware escalating privileges to the administrator level.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=140)** And active directory security groups can be used to assign role-based permissions to all members of a group according to what is needed to perform the functions.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=151)** Now, this makes managing permissions easier, as you apply permissions only once for the entire group of users.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=159)** If someone leaves the group, their permissions are no longer valid.
>
> **[2:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=165)** Let's take a look at a few other suggestions.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=168)** I'm here at this website where you can read more about least privilege, and I'll scroll down, there is a graphic here.
>
> **[2:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=177)** And we'll go to that graphic, and it talks about some key things that you can do to prevent a service account compromise.
>
> **[3:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=184)** A couple of things that we talk about is remove unnecessary service accounts, rotate credentials, and monitor all privileged account activity to detect suspicious behavior.
>
> **[3:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=198)** Okay, now let's test your knowledge.
>
> **[3:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=201)** List three activities used to ensure network clients will adhere to the principle of least privilege.
>
> **[3:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=208)** You can record your answer on the challenge worksheet.
>
> **[3:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=212)** Today's complex multiuser environments make it challenging to successfully implement the principle of least privilege.
>
> **[3:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/using-the-principle-of-least-privilege?u=76281980&t=219)** However, efforts should be made to adhere to this rule, as this will minimize the potential for an attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), [[Active Directory]] (1), [[Security]] (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** make (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Controlling access
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=0)** - [Instructor] Access control is a framework comprised of methods that limit access to only authorized subjects, such as a person or a process, to objects or resources, such as a Word doc or spreadsheet on the network.
>
> **[0:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=18)** Controlling access helps ensure confidentiality, integrity, and availability of the company assets.
>
> **[0:27](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=27)** Confidentiality protects information from unauthorized disclosure.
>
> **[0:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=33)** Integrity protects information from unauthorized modification.
>
> **[0:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=38)** And availability ensures that only authorized individuals can access resources.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=46)** With a wide range of data available on the network, including the internet, controls are put into place to allow or disallow access to objects.
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=57)** Access control can be enforced in one of three main categories: Administrative, logical, and physical.
>
> **[1:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=65)** Now, let's talk about each of these.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=68)** Administrative access control works in the following way: It enforces rules through policies and procedures that define acceptable behavior.
>
> **[1:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=80)** Some of the elements include: Credit and background checks, classifying data, along with security training and awareness.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=91)** Logical access control enforces the rules using technical controls.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=98)** Some of the elements would include firewalls, encryption, and anti-malware.
>
> **[1:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=105)** Physical access control limits physical access to hardware or specific locations.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=112)** And this is enforced by using locks, gates, and surveillance.
>
> **[1:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=118)** Because no single method can provide enough protection, most organizations implement a layered approach using multiple methods according to the level of security required.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=131)** In addition, all access control models should follow the least privilege rule.
>
> **[2:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=137)** When implementing access control, consider the way objects and subjects are identified and what decisions are necessary in order to allow or deny access.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=149)** You also want to think about the level of security required along with the impact of the security measures.
>
> **[2:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=156)** And the reason is, if access control is too cumbersome, the subject may try to circumvent the access control method.
>
> **[2:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=166)** For example, if a complex password is required that must be changed every month, users might write down the password, which can be a security risk.
>
> **[2:58](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=178)** Now let's test your knowledge.
>
> **[3:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=180)** Discuss three main methods used to ensure access control.
>
> **[3:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/controlling-access?u=76281980&t=186)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (5), data (2), [[Microsoft Word|Word]] (1), [[Hardware]] (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Restricting network access
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=0)** - [Instructor] When dealing with network security, we use the term Triple-A, which is a security model that provides authentication, authorization, and accounting.
>
> **[0:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=12)** Authentication asks, who are you?
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=14)** You'll need to provide proof.
>
> **[0:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=17)** With authorization, now that I know who you are, let's see what you're allowed to do while you're here.
>
> **[0:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=24)** And with accounting, I'm going to monitor and log what you do while you're here.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=30)** When providing centralized management of Triple-A, the network administrator commonly will use RADIUS or TACACS+ with an access control server.
>
> **[0:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=41)** Let's compare the two.
>
> **[0:43](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=43)** Remote access dial-in user service is used for the communication between a client and an access control server.
>
> **[0:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=52)** RADIUS uses UDP as the transport protocol and combines authentication and authorization.
>
> **[1:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=60)** RADIUS has more extensive accounting support than TACACS+, however, it only encrypts the passwords.
>
> **[1:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=67)** Terminal access controller access control system is used as an authentication program on Unix and Linux-based systems and is commonly used on Cisco routers.
>
> **[1:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=81)** It's an extension of the RADIUS protocol and uses TCP as the transport agent, and many feel it's more reliable than RADIUS.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=92)** TACACS+ will encrypt the entire payload and separates authentication and authorization.
>
> **[1:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=100)** Let's step through an example.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=102)** The client wants to access the network remotely, but they'll first need to provide authentication.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=109)** The login process can either use PAP, which is password authentication protocol, CHAP, which is challenge handshake authentication protocol, and in most cases will add multifactor authentication.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=124)** So with PAP, a username and password are sent in plain text to the server to authenticate.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=131)** An alternative is to use CHAP.
>
> **[2:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=135)** Now, after a login request is sent to the remote access server, the remote access server sends a challenge to the remote access client.
>
> **[2:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=144)** The remote access client sends a CHAP challenge response message, which is the hash of the user's response.
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=153)** After that, the remote access server checks the CHAP response message from the client and sends back a response message.
>
> **[2:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=161)** The remote access client verifies the authentication response, and if it's correct, uses the connection.
>
> **[2:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=169)** In most cases today, an organization will include multifactor authentication where a code is sent to the user in some way to provide an additional method to verify the user.
>
> **[3:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=183)** Once the client is authenticated, the RADIUS server then checks the user account to see their permissions.
>
> **[3:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=190)** If the user has proper rights to access network resources, it then grants the user access to the network.
>
> **[3:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=200)** Let's check your knowledge.
>
> **[3:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=202)** Outline the components of Triple-A security.
>
> **[3:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/restricting-network-access?u=76281980&t=206)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (2), [[Network Security]] (1), management (1), [[Linux]] (1)
> **Env Vars:** radius (6), chap (4), tacacs (3), pap (2), udp (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Protecting buildings
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=0)** - [Instructor] Physical security is one of the most overlooked forms of security there is today.
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=6)** Any object can be stolen, damaged, destroyed, or observed by an unauthorized individual.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=14)** When planning for physical security, we want to design with security in mind.
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=20)** If we take a look here at the designing of a courthouse, we'll see that there are granular specifications, and I'll scroll down here and it talks about some of the attributes that are necessary.
>
> **[0:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=33)** But when designing for security in mind, we don't want it to look like a fortress.
>
> **[0:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=39)** We want to keep in mind the visually appealing nature of the building while providing security.
>
> **[0:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=45)** It has to be comfortable and provide easy access to individuals that inhabit the building.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=51)** So let's talk about some of the physical security elements.
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=57)** Now, interior protection includes a number of different components such as secure equipment rooms or possibly a vault or a strong room.
>
> **[1:10](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=70)** Now inside of the building and designing for security in mind is one thing, but we also have to take a look at the outside in.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=79)** Take a look at manholes, crates and storage drains.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=83)** Are there any that could lead to access inside of your building?
>
> **[1:28](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=88)** And what about roof openings?
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=90)** Are there any?
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=91)** Is anyone able to gain access to the roof and then get in through somewhere on the roof?
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=99)** Consider fire escapes and building walls.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=102)** Fire escapes are very important in case of a fire, but are they too easy to access by someone on the bottom trying to get into the building?
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=114)** Exterior protection includes physical barriers to slow down a would be intruder.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=120)** Now gates are one thing, but we also want to include sufficient lighting on the exterior of the building.
>
> **[2:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=127)** We don't want to have an area where someone could hide or conceal themselves to gain access to restricted areas.
>
> **[2:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=135)** Doors have to be able to provide sufficient protection, but we also want to make sure that those that are inside can have easy egress outside in case of an emergency.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=151)** Consideration of the windows includes factors such as, how high off the ground should they be?
>
> **[2:37](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=157)** Should they be able to be opened?
>
> **[2:41](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=161)** Would we want to put some type of bars on those windows or alarms?
>
> **[2:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=169)** In addition, we might want to put some type of diffusion or shading on those windows so someone can't see in.
>
> **[2:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=177)** We also want to include physical access controls, and that might include biometric systems such as an iris scan or fingerprint reader, or other devices such as mechanical or electronic devices and locks.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=191)** Any method that would stop a would-be attacker from simply traipsing through your building should be in place.
>
> **[3:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=198)** Even something as simple as a receptionist will slow someone down.
>
> **[3:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=203)** Along with designing for security in mind, we have to promote security education, training, and awareness.
>
> **[3:33](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=213)** For example, if we put a keyless entry system in place, we will need to tell those that are using it to notify someone if someone tries to get in without using the keyless entry system.
>
> **[3:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=225)** And train them, that they should be told to go back up to the reception or other authorized individual to obtain entry into a restricted area.
>
> **[3:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=235)** Now with a possible physical breach, there will be indications, for example, damage to a door or fence.
>
> **[4:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=243)** Ask yourself, was it there before? Has anyone been notified?
>
> **[4:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=248)** Are there missing or unaccountable items or items that have all of the sudden appeared?
>
> **[4:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=254)** Why are they there? Does anyone know about this item?
>
> **[4:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=259)** Unexplained loss of communications is another indicator.
>
> **[4:24](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=264)** All of these things should be followed up because early detection in location of intruders is also an important concept.
>
> **[4:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=272)** You'll want to delay intruders as long as possible from achieving their goal and respond as quickly as possible to any intrusion attempts, and then afterwards, assess or determine the cause of the intrusion to prevent any further breaches.
>
> **[4:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=289)** Finally, create an incident response plan.
>
> **[4:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=292)** The team should know what to do in case of an obvious breach, such as, who do I call in case of a breach, and what steps do I need to take to minimize damage?
>
> **[5:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=305)** Now let's test your knowledge.
>
> **[5:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=307)** List five areas to include when designing for physical security.
>
> **[5:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/protecting-buildings?u=76281980&t=312)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (11), [[Windows]] (3), [[Forms]] (1), [[Incident Response]] (1)
> **Analogies:** such as (5), for example (2)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Securing hardware
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=0)** - [Instructor] Physical computer security involves preventing theft, destruction, or tampering of computers, network hardware, or devices, such as an overhead projector.
>
> **[0:12](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=12)** Some physical attacks can include cutting a fiber optic backbone, theft of a computer or handheld device, or removing RAM or components from a desktop or laptop.
>
> **[0:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=26)** Now, there are several best practices for physical security.
>
> **[0:31](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=31)** For example, secure access to buildings and rooms, such as a server room, by using locks or access cards.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=40)** You might want to consider surveillance and monitor those who enter and exit the rooms.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=46)** Audit or log services, users, and administrators to verify compliance with security policies.
>
> **[0:55](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=55)** Secure any backup media.
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=57)** Even though this is your backup and not live data, many times sensitive information is held on that backup media.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=66)** Disable any external drives so it isn't a method to gain access to your data.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=73)** And protect your printers.
>
> **[1:14](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=74)** Many times, printers have large hard drives that can contain a lot of sensitive information.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=82)** Some other recommendations include don't leave laptops or handheld devices unattended ever.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=92)** There are times that theft can occur right in the office while you're away or on on a perceived short break.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=99)** Stow any devices left in the car in your trunk, and don't forget to lock your car.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=106)** Purchase and use a laptop cable lock.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=109)** They're inexpensive and easy to use.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=112)** For air travel, don't check portable IT equipment.
>
> **[1:56](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=116)** Bring it with you on the plane as a carry-on and protect it.
>
> **[2:02](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=122)** And set your devices to require a user password or biometric for login.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=128)** If someone was able to obtain your handheld device or laptop, they might not be able to get into it if your password or biometric is required.
>
> **[2:18](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=138)** And when purchasing a laptop bag or backpack when traveling, use something simple so you don't advertise that there's expensive equipment within the bag.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=149)** And protect your storage devices, such as flash drives or removable hard drives, by using encryption.
>
> **[2:36](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=156)** And you might even select one that will activate a self-wipe if 10 unsuccessful login attempts occur.
>
> **[2:45](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=165)** Now let's test your knowledge.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=168)** List five recommendations to protect computer hardware.
>
> **[2:52](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/securing-hardware?u=76281980&t=172)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (3), [[Hardware]] (2), data (2), [[Microsoft Office|Office]] (1)
> **Analogies:** such as (3), for example (1)
> **Env Vars:** ram (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Physical security requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=0)** (bright music) (bright music fades)
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=5)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=7)** In this challenge, we'll take a look at physical security requirements, but first, let me give you a little bit of background.
>
> **[0:15](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=15)** Payment Card Industry Data Security Standard, or PCI DSS, is a set of widely accepted requirements to secure credit card transactions.
>
> **[0:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=26)** Several major credit card companies developed PCI DSS, and that included American Express, Discover, JCB International, MasterCard, and Visa.
>
> **[0:39](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=39)** The credit card industry developed the standard in order to help organizations that deal with credit cards to have more control over cardholder data and reduce the risk of possible exposure and fraud.
>
> **[0:53](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=53)** PCI DSS requirements covers management policy, network security, and best practices for handling transactions and cardholder data.
>
> **[1:04](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=64)** In this challenge, we'll take a look at the physical security requirements as outlined by PCI DSS version 4.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=73)** You'll find the link and the details in the Challenge Worksheet.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=77)** Once there, you'll go to Requirement 9.2.
>
> **[1:21](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=81)** Then list four key elements that should be in place to ensure physical security.
>
> **[1:26](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=86)** I'll start you out, and this is what you should see when you open the document, and then drill down to page 197.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=94)** This challenge should take you about five minutes.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/challenge-physical-security-requirements?u=76281980&t=98)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (4), data (3), express (1), management (1), [[Network Security]] (1)
> **Env Vars:** pci (4), dss (4), jcb (1)
> **Versions:** version 4 (1), 9.2 (1)
> **UI Navigation:** go to (1), open the (1)
> **Non-Speech:** (bright music) (1), (bright music fades) (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Physical security requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980&t=5)** - [Instructor] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980&t=8)** I've marked up this document because I wanted to highlight some areas that provide guidance and best practice suggestions to secure your data.
>
> **[0:17](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980&t=17)** 9.2.1 states we really need to restrict physical access to systems in the cardholder data environment, and then, over on the right, lists some guidance and good practice techniques to help secure your system.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980&t=35)** 9.2.2 pretty much says that we need to put controls in place to restrict the use of publicly accessible network jacks within the facility.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980&t=47)** 9.2.3 goes further where we want to restrict access to wireless access points, gateways, networking communications hardware, and telecommunication lines within the facility.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980&t=63)** And 9.2.4 states "Access to consoles in sensitive areas is restricted via locking when not in use."
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980&t=73)** So I wanted you to take the broad strokes of this document to see some really good practice guidelines and how you can secure any organization.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/solution-physical-security-requirements?u=76281980&t=83)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Hardware]] (1)
> **Versions:** 9.2.1 (1), 9.2.2 (1), 9.2.3 (1), 9.2.4 (1)
> **Best Practices:** good practice (2), best practice (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Summary
> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summary?u=76281980&t=0)** - [Narrator] Thank you for watching, "Foundations of IT Security: Network Security."
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summary?u=76281980&t=6)** In this course, we covered network security concepts, including an overview of security devices, ways to isolate the network and secure the cloud.
>
> **[0:19](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summary?u=76281980&t=19)** We discussed how to implement protocol security, identify various network attacks, along with the importance of limiting access to protected system resources.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summary?u=76281980&t=32)** If you're interested in learning more, please check out the library where new courses are added all the time.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summary?u=76281980&t=40)** If you're interested in learning more about packet analysis, please check out my Wireshark series.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summary?u=76281980&t=48)** Discover more about the billions of devices designed to improve the quality of life in my course, "Securing the IoT: Introduction," and any course in the "Cisco CyberOps" series will be well worth your time.
>
> **[1:07](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summary?u=76281980&t=67)** For a complete list of courses, visit my author page.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-network-security-15189799/summary?u=76281980&t=73)** Keep learning, I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (3), [[Network Security]] (2), cloud (1), [[Wireshark]] (1), [[IoT]] (1)
> **Cross-References:** we covered (1), we discussed (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Lisa Bock]]

## Path Context

### In [[Become an IT Security Specialist]]
← [[IT Security Foundations- Operating System Security]] | **4 of 12** | [[TLS for Beginners- Securing Network Communications]] →

### In [[Network Administration- Build Core Skills for Network Management and Security]]
← [[Learning Network Troubleshooting- Practical Network Diagnostics and Solutions]] | **6 of 6**

### In [[Cybersecurity Fundamentals]]
← [[IT Security Foundations- Operating System Security]] | **8 of 12** | [[Introduction to Identity and Access Management]] →

## Appears In

- [[Become an IT Security Specialist]]
- [[Network Administration- Build Core Skills for Network Management and Security]]
- [[Cybersecurity Fundamentals]]

---

[↑ Back to top](#)