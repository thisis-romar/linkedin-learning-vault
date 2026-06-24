---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-intrusion-detection-and-prevention
url: "https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention"
duration_minutes: 79
duration: 1h 19m
level: Intermediate
updated: 11/8/2024
learners: 46310
skills:
  - Intrusion Detection
  - Cisco Networking
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG1vtyyLeTG2A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286464784?e=2147483647&amp;v=beta&amp;t=4VAHjGihDDel4T21azKtoLMbUF6FTYg_n2-ftVBdCpU"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)'
prev_courses:
  - '[Cisco Network Security- Cisco Firewall Technologies](Cisco%20Network%20Security-%20Cisco%20Firewall%20Technologies.md)'
next_courses:
  - '[Cisco Network Security- Content and Endpoint Security](Cisco%20Network%20Security-%20Content%20and%20Endpoint%20Security.md)'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":6,"total":7,"prev":"Cisco Network Security- Cisco Firewall Technologies","next":"Cisco Network Security- Content and Endpoint Security"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/intrusion-detection
  - skill/cisco-networking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20Intrusion%20Detection%20and%20Prevention.md)

![Cisco Network Security: Intrusion Detection and Prevention](https://media.licdn.com/dms/image/v2/D560DAQG1vtyyLeTG2A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286464784?e=2147483647&amp;v=beta&amp;t=4VAHjGihDDel4T21azKtoLMbUF6FTYg_n2-ftVBdCpU)

# Cisco Network Security: Intrusion Detection and Prevention

> A network must be able to quickly recognize threats. Intrusion detection and intrusion prevention systems (IDS/IPS) provide organizations with a proactive approach to monitoring their network, enabling them to take action against possible threats. In this course, join security ambassador Lisa Bock as she provides an overview of intrusion detection and intrusion prevention systems and explains how 

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention) | 1h 19m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Stopping Potential Threats](#stopping-potential-threats)
  - [What you should know](#what-you-should-know)
  - [Packet Tracer and exercise files](#packet-tracer-and-exercise-files)
  - [Prepare for the CCNA Security Exam (210-260)](#prepare-for-the-ccna-security-exam-210-260)
- [**1. IDS and IPS Overview**](#1-ids-and-ips-overview) (5 videos)
  - [Managing the threat landscape](#managing-the-threat-landscape)
  - [Overview and benefits of IDS and IPS](#overview-and-benefits-of-ids-and-ips)
  - [IPS versus IDS](#ips-versus-ids)
  - [Host-based versus network IDS](#host-based-versus-network-ids)
  - [Prerequisites and restrictions for IPS](#prerequisites-and-restrictions-for-ips)
- [**2. Detection and Signature Engines**](#2-detection-and-signature-engines) (6 videos)
  - [Monitoring the network](#monitoring-the-network)
  - [Signature-based IDS](#signature-based-ids)
  - [Sweep scan](#sweep-scan)
  - [Anomaly-based IDS](#anomaly-based-ids)
  - [Reputation-based IDS](#reputation-based-ids)
  - [Policy-based IDS](#policy-based-ids)
- [**3. Decisions and Actions**](#3-decisions-and-actions) (4 videos)
  - [IDS signature files](#ids-signature-files)
  - [Trigger actions and responses](#trigger-actions-and-responses)
  - [Blacklist and whitelist](#blacklist-and-whitelist)
  - [Managing IPS alarms](#managing-ips-alarms)
- [**4. Deploying an IOS-Based IPS**](#4-deploying-an-ios-based-ips) (3 videos)
  - [Analyze the flow](#analyze-the-flow)
  - [Implementing an IPS](#implementing-an-ips)
  - [Configure an IPS](#configure-an-ips)
- [**5. Practical Applications**](#5-practical-applications) (4 videos)
  - [Monitoring and analyzing](#monitoring-and-analyzing)
  - [Syslog](#syslog)
  - [Using IDS and honeypots](#using-ids-and-honeypots)
  - [The EINSTEIN system](#the-einstein-system)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary](#summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Stopping Potential Threats](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/stopping-potential-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/stopping-potential-threats?u=76281980&t=0)** - An [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) and prevention system is your network's first line of defense as it actively scans traffic and blocks threats in real time. This early intervention helps stop potential attacks before they can cause serious damage. Join me as I share my experience in detecting and responding to [Cybersecurity](../../Topics/Cybersecurity.md) threats using signature, anomaly, and reputation based detection. I'll then highlight some practical applications and then finish with a discussion on ways to deploy and manage and iOS-based intrusion detection and prevention system. Hello, my name is Lisa Bock and I'm a security ambassador. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (2), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - an (1)

#### [What you should know](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is an intermediate level course for network administrators, managers, students, and anyone with an interest in learning more about Cisco Security. Participants should have a solid knowledge of networking fundamentals, devices and cables, along with various topologies. This course, and the entire learning path, covers the components included in the Security Fundamentals section of the CCNA exam. I'll take you here to this site, where you can learn more about the CCNA exam. The exam will test your knowledge and skills related to networking, and is an excellent addition to a career in information technology. I'll scroll down where you can see the objectives, and then I'll expand the section on security fundamentals so that you can see what I'll be covering throughout the learning path. I am super excited to bring you this series on CCNA security so that you can improve your skills in securing an organization's infrastructure.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (3)
> **Definitions:** is an  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Packet Tracer and exercise files](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/packet-tracer-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/packet-tracer-and-exercise-files?u=76281980&t=0)** - [Instructor] During the course, I'll demonstrate some of the concepts using Packet Tracer, which is available here at the [Cisco Networking](../../Skills/Network%20and%20System%20Administration/Cisco%20Networking.md) Academy at [netacad.com](https://netacad.com). I put in the search Packet Tracer and it took me here, Introduction to Packet Tracer. Scroll down, and sign up, and get your own copy of Packet Tracer, along with the samples that are included. For more information, review my discussion of Packet Tracer in CCNA Security: Secure Access. If you have access to the samples in Packet Tracer, you can download them and follow along with me or you can create your own network from scratch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cisco Networking](../../Skills/Network%20and%20System%20Administration/Cisco%20Networking.md) (1)
> **URLs:** [netacad.com](https://netacad.com) (1)
> **Env Vars:** ccna (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Prepare for the CCNA Security Exam (210-260)](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prepare-for-the-ccna-security-exam-210-260?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prepare-for-the-ccna-security-exam-210-260?u=76281980&t=0)** - [Narrator] The CCNA Security Exam tests the candidate's knowledge of security concepts, secure access, VPN technologies, secure [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and switching, Cisco firewall technologies, intrusion prevention systems, along with content and [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md). The CCNA Security Exam validates a candidate's skills for securing a network to maintain the confidentiality, integrity, and availability of data, and is an excellent addition to a career in information technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) (1)
> **Env Vars:** ccna (2), vpn (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 1. IDS and IPS Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing the threat landscape](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=0)** - [Instructor] I'm here at the Check Point Live Cyber Threat Map, where we can see the many cyber attacks happening around the world at any given point in time. The reality is that even with all of your defenses in place, malicious traffic may have found a way onto your network. In this segment, we'll learn how [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) and prevention can detect and mitigate many common attacks, as well as identify potentially malicious traffic. Today, companies are faced with numerous challenges to protect the infrastructure. Network environments are complex, and can include bring your own device, [Cloud Computing](../../Topics/Cloud%20Computing.md), social media, the [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), and the new technology that is added to the mix daily. Coupled with the challenges, cyber threats are becoming more aggressive, complex, and sophisticated. Attackers range from the disgruntled employee, to crime rings and nation states. The attacks are highly organized by skilled and motivated players, and have resulted in massive amounts of sensitive information being exposed. So, now I'll take you to this website, Information is Beautiful, where we can see the world's biggest data breaches, along with all of the organizations that have been affected. Now, I'm going to start at 2004,
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=97)** and then I'll scroll up, where you can see that over the past 20 years, the amount of data breaches have increased significantly. Now, once you click on one of the bubbles, you can see that there's summary information and you can read a little bit more about the data breach, and then I'll scroll down. Now, here below, we can see the type of data that was leaked, such as email addresses, credit cards, health and personal data, and passwords. The fact is that no single application can effectively manage the many threats. As a result, the network administrator uses a layered approach to protect a computer system or network from attack. The concept of defense in depth encompasses an overall approach to organizational security, and there are a variety of methods available to secure an organization, and those include firewalls, antivirus, packet shapers, and spam filters. However, some threats can slip past all of the defense methods, possibly by an end user falling victim to a social engineering attack, and clicking on a link, releasing malware that ends up on the network. A network must be able to instantly recognize threats. Intrusion detection and prevention systems provide a proactive approach to monitor the network
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-the-threat-landscape-23650386?u=76281980&t=193)** and take action against possible threats, such as questionable processes, login attempts at odd hours, and other indicators of unusual and suspicious behavior on the network. The threat landscape continues to be a challenge. By using intrusion detection and prevention systems, the network administrator can provide countermeasures to detect and mitigate many common attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (3), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1)
> **UI Navigation:** scroll up (1), click on (1), scroll down (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Overview and benefits of IDS and IPS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=0)** - [Instructor] [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) and prevention systems monitor the network and conduct traffic analysis to identify incidents, possible policy violations, and attempted attacks. Types of attack signatures include Trojans that are communicating with command and control servers, denial of service attacks, passive attacks where a hacker scans the network to learn what's happening in the organization, active attacks, such as remote login attempts, buffer overflows and [SQL](../../Skills/Data%20Science/SQL.md) injection. The system also monitors for insider attacks, unauthorized access attempts, escalation of privilege, or excessive database reads. Intrusion detection, intrusion prevention systems can be host or network based. Many times the results are sent to a central repository, such as Sislog, for analysis via secured device event exchange and then alert the security analyst of the findings. Let's take a look at intrusion detection in action. I'm here at this website, Virus Total. This is a community based service where you can upload a file and it will do an analysis for you. Now we can take a look, there are over 60 anti-virus engines in Virus Total and here we can see a clear indication of infection. An intrusion detection system can identify traffic that's not obviously malicious,
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=94)** that may have slipped by organizational defenses. Now here we see Virus Total with some intrusion detection system results. This was a capture, and we'll take a look at what it found. When this file was uploaded, there was no indication of malware detected. However we do see some results in intrusion detection system so let's take a look. I'll go to file detail and I'll scroll down. Now I'm gonna take this out so we can have a closer look. Now when you read this, there's some things that could be interesting that you might wanna follow up on. Multiple dynamic DNS queries, as you can see, could be an indication of malware activity on your network. So you see, IP address to check [dyndns.org](https://dyndns.org) detected. Here we see SENSITIVE DATA, Email Addresses, Sensitive Data was Transmitted Across the Network. With the emerging threats rule set, we see more interesting results. Here we see Possible BitCoin Miner User Agent, A Network Trojan was Detected. An outgoing Basic Auth Base64 HTTP Password Detected unencrypted. Your next step would be to investigate these findings to get any malicious activity under control. Intrusion detection, intrusion prevention systems monitor the network to identify incidents
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overview-and-benefits-of-ids-and-ips?u=76281980&t=189)** and attempted attacks. They log the information and report the findings to the security analyst.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (7), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (1), dns (1), sensitive (1), data (1), http (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Analogies:** such as (2)
> **URLs:** [dyndns.org](https://dyndns.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [IPS versus IDS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=0)** - [Instructor] In addition to the many other security devices on a network, most organizations use [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md)/intrusion prevention systems to increase the security level of the network. Intrusion detection and prevention systems are sensors that monitor for unusual or suspicious data or activities. The systems may be a standalone device or integrated within an Adaptive Security Appliance or on a router. The systems monitor and inspect ingress and egress traffic using a combination of deep packet inspection for signature and heuristic-based analysis. Traffic is not sent out an interface until the packet has been analyzed. Both technologies do share several characteristics. However, the two have distinct differences. Intrusion detection sits out of band in promiscuous mode and passively monitors network traffic. Traffic is mirrored to the intrusion detection system where it checks the captured traffic against the signature database. If the traffic is malicious, it will detect and log information about the activity and report an attack. However, it requires other devices to respond to attacks. Because the attack is not actively stopped, damage to the network may have already happened. An intrusion detection system doesn't negatively affect the traffic flow, but is more vulnerable
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ips-versus-ids?u=76281980&t=93)** to evasion techniques used in various network attack methods. Intrusion prevention builds on intrusion detection technology, but it sits in band and actively monitors network traffic. Intrusion prevention systems can detect and block attacks by dropping the suspect traffic. However, there are some concerns. If the intrusion prevention system is not configured correctly or doesn't have enough muscle to manage the traffic, it can cause slowdowns and sluggishness and affect time-sensitive applications, such as voice over IP or multimedia. In addition, both systems must be tuned correctly to achieve the proper levels of intrusion detection and avoid excessive false positive alerts. Intrusion detection/intrusion prevention systems are sensors that monitor for unusual or suspicious data or activities in a network and provide an extra layer of protection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (7)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Host-based versus network IDS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=0)** - [Instructor] [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) systems work to enforce the security policies on what traffic is allowed and what is denied. Intrusion detection can be host-based or network-based. Host-based monitors a single host. Network-based monitors the entire network. Host-based intrusion detection systems monitor a single host or endpoint that includes servers, workstations, and mobile devices. They can be fine-tuned to the specific application, workflow, or user role, host-based systems are operating system specific and work independently to monitor the events on a host for suspicious activity. Because the intrusion detection system is on the operating system, the encrypted traffic will be decrypted, and the intrusion detection system can examine the contents. Network-based intrusion detection systems monitor malicious and unauthorized activity on the network. Sensors are deployed at the network edge to monitor ingress and egress traffic and block network level attacks. Network intrusion detection systems are comprised of numerous components, such as sensors or agents, state tables, and signature [Databases](../../Skills/Software%20Development/Databases.md). Network-based intrusion detection systems are operating system independent and monitor network traffic to identify suspicious activity
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=95)** and can visualize attacks that are occurring across the entire network. There are also disadvantages of network intrusion detection systems. Network-based intrusion detection reaches a limit when excessive growth and increased bandwidth usage influences the ability to capture and analyze all traffic. To adjust, additional sensors are placed throughout the network, which will increase overall costs. Network intrusion detection systems cannot monitor encrypted traffic, such as Secure Shell or Transport Layer Security, and this may allow malicious activity to go undetected. Fragmentation also causes issue in that the intrusion detection system in the system many times had a difficult time reconstructing the traffic for a proper analysis. A network-based intrusion detection system may be a stand-alone device or integrated within a router or adaptive security appliance and includes three key components. In order to perform intrusion detection analysis and pattern matching, the system must have a superior CPU and exceptional performance. The [network interface card](../../Glossary/Concept/NIC.md) must be able to communicate on the network and keep up with traffic that is pushed through for analysis. Adequate memory is essential, as intrusion detection is memory intensive and will affect the ability of the system
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/host-based-versus-network-ids?u=76281980&t=189)** to detect and block an attack. A typical network-based intrusion detection system works as follows. An intrusion detection system sniffs a packet from the network. The preprocessor looks at the packet header and decides whether to analyze it further, and the traffic is maintained in the state table. It then moves to normalization for a careful examination of normal TCP/IP behavior and then onto TCP flow reassembly. Concurrently, packet flow inspection takes a closer look at the traffic to examine the payload and compare against the detection signature engine and then onto flow classification where appropriate action is taken, such as an alert, or possibly the system may modify the firewall rules. In addition, flow classification may signal the system to either drop the packets, or it may travel through a packet shaper before moving onto the general traffic flow. Host-based intrusion detection systems monitor a single host or endpoint, and network-based intrusion detection systems monitor malicious and unauthorized activity on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (19), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Network interface card](../../Glossary/Concept/NIC.md) (1)
> **Env Vars:** tcp (2), cpu (1)
> **Analogies:** such as (3)
> **Speakers:** - [instructor] (1)

#### [Prerequisites and restrictions for IPS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=0)** - [Instructor] [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) monitors the network for unusual or suspicious activity. However, intrusion prevention stops or prevents an attack. The intrusion prevention system can be an effective tool in the arsenal of the security analyst. Prior to selection, it's best to conduct a thorough business requirements exercise to ensure the system is in line with the network demands. In addition to monitoring the network, an enterprise class system must be able to ensure exceptional system performance and accurate detection. Along with manufacturers' white papers and specifications, you should also research real-world testing and product reviews. The system must be able to work with a broad range of devices, network speeds, and bandwidth requirements. The device must be able to keep up with current bandwidth requirements along with variations in speed and burstiness. The device must be able to view the entire network for correlation of events for predictive analysis. It should include a centralized management system that uses encrypted communications. The system must be able to detect policy violations and identify misconfigured or vulnerable devices on the network. It should have a detection engine with a range of signatures. It should have an automatic signature database with automatic updates,
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/prerequisites-and-restrictions-for-ips?u=76281980&t=94)** as well as being able to manually update the signature database, and it should have a knowledge base so it can monitor heuristic or anomaly-based activity. The system should collect and log data for further analysis. The intrusion detection system acts as a queuing system, so it should be able to summarize the events in a form of the report, so the network administrator can further modify and improve the signature database. The system must be tuned, kept up-to-date, and hardened against all types of attacks. In any system, expect a high degree of accuracy. Excessive false positives or performance delays will impact overall network performance. Prerequisites and restrictions for intrusion prevention systems include exceptional system performance, accurate detection, ensuring a current signature database, along with logging, analysis, and reporting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (2)
> **Speakers:** - [instructor] (1)


### 2. Detection and Signature Engines

[↑ Back to Table of Contents](#table-of-contents)

#### [Monitoring the network](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=0)** - [Instructor] [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) systems monitor the network for unusual or suspicious activity. In this segment, we'll explore how sensors use signature triggers of known threats to identify and respond to malicious activity. Database compromise has affected over 8.2 billion records, to date is a level playing field as anyone and any industry can be affected. Therefore, it's essential that we carefully monitor for any evidence of data exfiltration or compromise. Intrusion detection systems are tuned to recognize viruses, worms, trojans, and bot activity along with web attacks, such as [SQL](../../Skills/Data%20Science/SQL.md) injection, cross site scripting, and denial of service. The Cisco intrusion detection system sensors are constantly vigilant for an attack signature. The device examines the traffic and breaks down each packet into the header field values and then searches for specific patterns that might flag an intrusion. This allows for a more granular inspection of traffic. Sensors use different types of signature triggers that include pattern-based, anomaly-based, policy-based, and reputation-based detection. I'd like to show you an example of following up after you have received an alert.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=94)** Let's set the stage. During the course of your day, you've received an intrusion prevention system alert. An IP address has been blocked because of reputation. In addition, there's suspicious activity on UDP port 666. Now, in most cases, you can examine the data, which contains all the information about events on the network. In this case, I pulled the capture and opened it in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). Now once in, I'll go to [Statistics](../../Skills/Data%20Science/Statistics.md) and then conversations, and I'm going to zero in on UDP, and we're going to search for that suspicious port. Now, once in, we can examine the port values, and we can sort them in which I have by just clicking that one time, and we see some standard ports, such as ports 67 and 68 used for [DHCP](../../Glossary/Standard/DHCP.md), and port 53 used for DNS, but what we do see is this port right here, port 666. So let's take another look. I'll right click, and I'll say apply as filter, selected, A to B, and then I'll close that, and once you've filtered that, there is where we can see the suspicious IP address. So now let's take a closer look at the port and the IP address. So what I did was do a search on port 666, and here I'm in speed guide, and I'll scroll down,
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/overlay-https-threatmap-checkpoint-com-overlay-http-www-informationisbeautiful-dot-net-visualizations-worlds-b?u=76281980&t=191)** and we see that there are a number of bad things that could possibly be associated with port 666, and those are ones you probably don't want on your network. Now, additionally, we'll go to Cisco Intelligence, and then we'll check the IP address. Now the Talos threat operations center constantly gathers and analyzes data on malicious activity, which then populates the Cisco sensor-based database. Any IP address with a risky reputation will be marked and used when evaluating network traffic, and I'll scroll down here and will put the IP address, and we'll search, and I'll scroll down, and here we see that the IP address has a poor reputation. So now at this point, when the IDS noticed an IP address with a poor reputation, the system blocked the stream and then alerted the administrator to help protect against an attack. So the next step is to follow up and make sure that the alert was valid and then take steps to make sure no further damage is done. So intrusion detection system sensors use signature triggers of known threats to identify and respond to malicious activity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [DHCP](../../Glossary/Standard/DHCP.md) (1)
> **Env Vars:** udp (2), sql (1), dhcp (1), dns (1), ids (1)
> **Ports:** port 666 (4), port 53 (1)
> **UI Navigation:** scroll down (3), go to (2)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Versions:** 8.2 (1)
> **Definitions:** is a  (1)

#### [Signature-based IDS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=0)** - [Instructor] Cisco [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) system security appliances primarily use signature-based technology to monitor and compare traffic as it passes through the device to detect patterns in network traffic. A signature-based intrusion detection system must contain a current database of known attack signatures that is tuned to detect intrusions and malicious activity. A signature is either atomic or composite. An atomic signature is a single packet, activity, or event. A composite signature is also called a stateful signature, because it's a sequence of events involving multiple packets dispersed across multiple hosts during a period. Because it is stateful inspection, the device must keep a state table. A signature engine has a parser and an inspector. The parser reads the text-based descriptions for all signatures. The inspector looks for malicious activity in the network traffic stream. There are several signature engines or categories that each has its own set of signatures that monitor for an allowable range or values. The service engines inspect common application layer services, such as HTTP, [MySQL](../../Skills/Software%20Development/MySQL.md), NTP, or DNS. String engines enable the intrusion detection system to search the traffic streams for regular expression strings
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=96)** that might be associated with malware. Flood engines monitor for flood activity. Atomic engines create simple single-packet signatures, and sweep engines monitor for reconnaissance activity. Flood engines monitor for any host or network sending multiple packets to a single host or network, such as in a denial of service attack. You can easily set and modify the various parameters. Here's just a sampling. For example, you can modify protocol, the type of traffic to inspect. The rate, the threshold for second, or ICMP type, which would give us the value for the header type. Atomic engines are designed so the network administrator can create a simple single-packet signature. A packet traveling across the network with a matching signature will trigger an alarm. Cisco uses several atomic signature micro engines. The atomic IP examines the headers and payloads of TCP, IP, UDP, and ICMP. Atomic IP advanced includes advanced IP options such as an IPv6 packet with a fragment option header. There is also atomic IPv6, which are defined signatures related to IPv6 malformed packets. Fixed TCP, UDP, and ICMP examines the fixed
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/signature-based-ids?u=76281980&t=193)** or what we call immutable portions of TCP, UDP, and ICMP headers. These are the portions that do not change. An atomic ARP examines ARP packets for ARP spoofing attacks. Within each atomic engine, the network administrator can customize the parameters. For example, with a TCP signature micro engine, you can configure specific parameters for the atomic.tcp, including direction, to TCP service or from TCP service. Or which TCP flags to monitor. Sweep engines monitor for the various signatures related to sweeps and scans. Now, scanning techniques can vary, but there are some common scans. Each will have a different objective. A common scan is a ping sweep. This will send a series of packets out to identify live hosts on the network. It waits for one to respond and then it knows which hosts are alive. A port scan identifies TCP and UDP ports on a live system looking for services that will respond. Intrusion detection systems use a signature database with several signature engines or categories that each has its own signature micro engines that monitor for an allowable range or value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** tcp (8), icmp (4), udp (4), arp (3), http (1)
> **Analogies:** such as (3), for example (2)
> **Definitions:** is a  (2)
> **CLI Commands:** mysql (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Sweep scan](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=0)** - [Instructor] In a signature-based [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) system, sweep engines monitor for the various signatures related to sweeps and scans. Scanning techniques can vary. In this demo, we'll take a look at a TCP scan and see the signature as if we were right in the intrusion detection system watching the traffic as it travels across the network. I'm at this webpage here at Cisco Security which talks about threat information and more specifically, intrusion prevention system signatures. Here we see TCP SYN Host Sweep. It talks a little bit about the ID, when it was released, and then down below a description. This signature fires when a series of TCP SYN packets have been sent from one single host to a number of different hosts. This could be for example an attempt to map the network. This is indicative that a reconnaissance sweep of your network may be in progress and it says this may be the prelude to a more serious attack. Let's take a look. I am in [Wireshark](../../Skills/Cybersecurity/Wireshark.md) so we can see the pattern or signature of a TCP scan. I'll first apply a filter. Now what this filter did was show me only the TCP traffic with only the SYN flag set. Now this was done in a laboratory setting so you'll see only two IP addresses, .101 and .103. To clean this up a little more,
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/sweep-scan?u=76281980&t=96)** let's take off the coloring rules and then I'll uncheck name resolution so we only see the ports. So as you can see, Wireshark does a resolution as to what service it thinks that port is associated with. I'll go into Edit, Preferences, and then Name Resolution and then I'll uncheck Resolve transport names. All right, we'll almost there. Let me do one more thing to make it super clear to you. I'll right click on Destination Port and I'll say Apply as a Column and I'll scroll down. Now you can see as if you were the inspector in the intrusion detection system this is evidence of a TCP scan. It's going through all the ports in an attempt to get one of the services to respond. Now in some cases, scanning network hosts is done because of a [Vulnerability Assessment](../../Skills/Cybersecurity/Vulnerability%20Assessment.md) exercise or even a penetration test, but scanning and sweeping is also done by hackers during reconnaissance prior to an attack. In general, unless you have initiated the scan, you should not allow active scanning or sweeping on your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (3), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Vulnerability Assessment](../../Skills/Cybersecurity/Vulnerability%20Assessment.md) (1)
> **Env Vars:** tcp (6), syn (3)
> **UI Navigation:** click on (1), scroll down (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Anomaly-based IDS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=0)** - [Instructor] [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) systems detect malicious activity by using either atomic or single-packet patterns or composite or multi-packet signature patterns. Once a specific signature is found, the device will send an atomic alert. I'm at this website Kaspersky Cyberthreat [Real-Time](../../Skills/Database%20Management/Real-Time.md) Map, where we can see there is a constant barrage of attacks. We'll take a look around on this website and I'll scroll down, it will show most infected today and some historical [Statistics](../../Skills/Data%20Science/Statistics.md) worldwide. Here we can see top local infections in the last week and some of the variants. To stop incoming malicious traffic, the network must first be able to identify it. There is a main disadvantage in pattern-based detection in that it cannot detect unknown attacks. While malware signatures are critical in monitoring the system, the one threat that will pose a significant risk to your organization is a zero-day attack. A zero-day attack exploits unknown software vulnerabilities. Here we see, in this graphic, a timeline. First, the vulnerability is found in the wild. Now there are people that specifically look for these vulnerabilities and try to exploit them. At some point, the vendor becomes aware and works on mitigating this vulnerability by creating a patch.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=94)** Then at some point the vendor will release a patch and then the public will be made aware. However, you can see down below that until you apply the patch, your system is vulnerable. Anomaly or profile-based detection can monitor virus and malware-like behavior. It can detect new and previously unpublished attacks. This detection method requires careful initial configuration and has the following modes. We have the learning mode. During this initial setup phase, the system builds a normal profile by monitoring network or host activity for at least 24 hours. After the system learns the normal behavior, the signature triggers if activity occurs beyond a specified threshold. Now this important, the network must be free of attacks while establishing normal activity, or it will become part of the normal activity. During detect mode, we have anomaly detection, which is monitoring for anomalies, but it's also recording gradual changes and builds a profile of normal system activity over time. And inactive mode, this is where we turn off anomaly detection. Now although it sounds like a better way to go, this type of intrusion detection system can be difficult to manage. It most of the time will throw many false positives, which can happen during valid user traffic. The network administrator must tune the system
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/anomaly-based-ids?u=76281980&t=189)** to adjust optimal detection thresholds. In addition, when there is any new addition to the network, the system must build a new baseline. Anomaly or profile-based detection can monitor virus and malware-like behavior and detect new and previously unpublished attacks such as a zero-day attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Reputation-based IDS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=0)** - [Instructor] In addition to using signatures to identify threats, Cisco [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) Systems can benefit from reputation-based intrusion detection using Cisco's Security Intelligence Operations. In the real world, we make our selections based on the reputation of the company or product. The collective nature of event correlation is very powerful, as it provides information to the Intrusion Detection Systems about certain IP addresses that may have a reputation associated with malicious or risky websites. The Threat Operations Center is constantly vigilant and gathers and analyzes data on malicious activity using automated, along with human interaction methods. The gathered data populates the Cisco SensorBase database. Participants contribute to the database, but also benefit from the collective wisdom and information. The first step is to agree to participate. Then, on the [Local Area Network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md), participating intrusion prevention sensors gather data and then send suspect traffic to the global correlation servers. If there is an identified event, the Intrusion Detection System will send information that includes signature ID, attacker's IP address and port, victim IP address and port, TCP options string, reputation rating and score, and data from the sensor health metrics. The reputation servers update the database and then share the results with other contributing networks.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/reputation-based-ids?u=76281980&t=95)** The Cisco SensorBase database changes often. It's best practice to set the sensor to periodically download global correlation updates from the global correlation servers. Reputation-based intrusion detection using Cisco's Security's Intelligence Operations is a powerful feature that helps prevent threats from malware and zero-day attacks by sharing a collective knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (5), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** tcp (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Policy-based IDS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=0)** - [Instructor] With Policy-Based Detection the administrator defines suspicious behavior and can create a customized policy to monitor for that activity. Policy-based [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) is like pattern-based detection, but instead of trying to define a specific pattern, policy-based signatures can be used to analyze a specific type of packet. For example, having data in the flow label in an IPv6 header. How this can be used, we can use this example. The network administrator can set up a honeypot and gather evidence of an attacker trying to exploit a vulnerability that would be indicative of a possible zero day attack. The administrator then can create a customized intrusion rule. An intrusion rule is a set of criteria listing details and conditions the intrusion detection system must match. Much like a blueprint, the rule provides details of what to look for, and what action to take once the criteria is found. A standard rule will have two sections, the header and the options. The rule header contains the action or type, the protocol, source and destination IP addresses and subnet mask, direction indicators, and source and destination ports. And the rule options section contains event messages, keywords and their parameters and arguments, patterns that a packets payload must match to trigger the rule.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/policy-based-ids?u=76281980&t=92)** If the rule is an alert rule, it generates an intrusion event. If it's a pass rule, it ignores the traffic. Here's an example of a rule header. First we see action, which is alert. This will generate an intrusion event when triggered. For the protocol this will monitor TCP traffic. For the source IP this will monitor for traffic coming from an outside network. For the source port, this will test traffic coming from any port, and the operator will test external traffic destined for [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) on your network. And the destination IP address, this will monitor traffic sent to any host specified as an internal web server. And the destination port will monitor traffic delivered to an HTTP port on the internal network. Take care when writing a custom rule. You should test prior to implementation, as a poorly written rule can affect system performance. Policy-based intrusion detection analyzes a specific type of packet. The network administrator creates an intrusion rule, listing details and conditions the intrusion detection system much match.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (4), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Env Vars:** tcp (1), http (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Decisions and Actions

[↑ Back to Table of Contents](#table-of-contents)

#### [IDS signature files](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=0)** - [Instructor] Pattern based or signature detection is the simplest triggering method as it monitors the network for a matching pattern using predefined signatures. A signature has three distinctive attributes, type, trigger, and action. The signature database is the heart of the system as it holds the signatures of known attacks and malicious behavior. A signature is either atomic or single-packet or composite, or multi-packets. When there is a match, the device executes the corresponding action, alert, logging function, or sends an alarm to the management software. For the system to be most effective, the signature file must be updated on a regular basis. Cisco collects data on malware variants and new threats as they are discovered, and updates and creates signatures on a regular basis. The signatures are then distributed to clients according to the threat level. If the threat is severe, Cisco will publish the signature files within hours of identifying the threat. Less aggressive threats are published every two weeks. In addition to signatures for newly discovered threats, the signature update will include all the signatures from the previous version as well. To obtain the signature file, we'll go to [Cisco.com](https://Cisco.com). You need to log in and if you don't have an account, you can create one, and then we'll go to downloads. Software downloads, and here you can just see that there are some most popular
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/ids-signature-files?u=76281980&t=94)** and we'll just click on one of those, and as you can see, signature updates. You would click on that and then log in with your username and password and then you would have the latest signatures. If the system can obtain signatures automatically, it's best to set this option to ensure [Real-Time](../../Skills/Database%20Management/Real-Time.md) threat defense. Using signature-based [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) reduces the strain on the system, but it does have limitations when there are unknown attacks or variables that are unpredictable, such as ports used by Trojans and their associated processes, which can randomly grab ports. The signature database is the heart of the intrusion detection system. For the system to be most effective, the signature file must be updated regularly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **UI Navigation:** go to (2), click on (2)
> **URLs:** [cisco.com](https://cisco.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Trigger actions and responses](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=0)** - [Instructor] When there is a signature match, the [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md)/intrusion prevention system executes the corresponding action, alert, or logging function. The signature can trigger any of the following actions. It can generate an alert. An atomic alert is generated every time a signature triggers. A summary alert is a single alert that indicates multiple occurrences of the same signature from the same source address or port. It can log the activity so it can be analyzed later in more detail. For example, using a honeypot-based intrusion detection where the network administrator is simply monitoring the activity. It can drop and prevent the activity. This can stop an attack before it has a chance to perform malicious activity. It could reset a TCP connection to terminate a session that is suspicious which you might see the initial SYN packet come in and a SYN-ACK, but the intrusion prevention system will send a reset and stop the connection before it does any damage. It could also block future activity. It will drop the packet and all future packets from the TCP flow by updating the access control list on one of the infrastructure devices. And it may allow the activity. Now this sounds odd, but this does happen. For example, when the administrator needs to allow exceptions to configured signatures.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=94)** This might happen possibly during an authorized event such as a vulnerability scan. Each rule header includes a parameter that specifies the action the system takes when it matches a signature. A rule that is set to alert will generate an intrusion event and log the event. Rules that are set to pass will simply allow the packet to pass with no other action taken. Pass rules by default will override alert rules. An alarm will trigger when a specific parameter is met. Triggering can also generate false positives or false negatives. If this happens, the administrator must study the existing network traffic and then tune the signatures to get a more accurate result. Events can occur throughout the network. Event correlation is a powerful process of simultaneously monitoring activity throughout the network to detect patterns or events that might be malicious. To effectively correlate all events, it's best to use network time protocol or some other time synchronization protocol among all devices so that they all have the same system time. By using consistent timestamps, the network administrator can more accurately determine when specific network events happen in relationship to other events. The device will signal an event. However, the security staff must respond quickly
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/trigger-actions-and-responses?u=76281980&t=188)** to assess the threat level. If the system is compromised, the security staff must work quickly to restore to a normal state as quickly as possible. When there is a signature match, the intrusion detection system will execute a corresponding action, alert, or logging function. Event correlation monitors activity throughout the network to detect patterns of events that might be malicious. In the case of an event, the incidents response team brings the systems back to a normal state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (3)
> **Env Vars:** tcp (2), syn (2), ack (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), such as (1)
> **Cross-References:** later in (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Blacklist and whitelist](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=0)** - [Instructor] During normal network activity you may run into malicious websites. One way to deal with malicious traffic is using either a blacklist or a whitelist. A blacklist is an access control method that allows all traffic except the traffic on the list. A whitelist is an access control method that denies all traffic except the traffic on the list. A blacklist can be a valuable resource to reduce risk by denying access to potential malicious traffic that can include websites, hosts and usernames, TCP and UDP ports, ICMP types and codes and specific file extensions. A whitelist restricts access to only trusted objects. An example would be MAC address filtering on a wireless access point. Creating a whitelist is more granular and cumbersome, especially if there is a large number of entities that need to be added to the list. However it does reduce the number of false positives that involve known benign traffic. Because it's so cumbersome blacklisting is used more often. The lists can either be static or dynamic. If you participate in the cisco Global Correlation Network that will send your [Statistics](../../Skills/Data%20Science/Statistics.md) to the Threat Operations Center for analysis and the results will be distributed to the global community and update the device's dynamic database. In addition you can also manually add entries
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=94)** to a static blacklist. One type of threat we take very seriously is botnet activity. Now this can occur if an internal host is infected and tries to communicate with other members of the bot which are most likely malicious. The botnet traffic filter address categories include known malware addresses. These addresses are on the blacklist identified by the dynamic database and the static blacklist. Known allowed addresses. These addresses are on the whitelist. Ambiguous addresses are associated with multiple domain names but not all the domain names are on the blacklist. We also call this the greylist. Unlisted addresses are unknown. And they're not included on any list. I wanted to take you to this website to show you common trojan ports. There are many websites like this but it would be good for you to familiarize yourself with websites like this so if you are concerned about some suspicious port activity you can reference these. In addition this website tells us about threat detection in the community. Here we can go to reputation lookup and search by IP, domain or network owner for real time threat data. I'll scroll down here and you can see some information as far as legitimate email, spam or malware and we can click on a marker to see more information. Here it talks about the IP address and the host name
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/blacklist-and-whitelist?u=76281980&t=188)** and the email type. And in this one it's showing malware. So one way to deal with possible malicious activity is by using blacklists which allows all traffic except the traffic on the lists and whitelists which restricts access to only trusted objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** tcp (1), udp (1), icmp (1), mac (1)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Definitions:** is an  (2), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Managing IPS alarms](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=0)** - [Instructor] When there is a signature match the device executes the corresponding action, alert, or logging function. The alarm can be false positives or false negatives, which may have to be modified or tuned to get a more accurate result. There are four types of alarms. A false positive alarm is when the system generates an alarm when processing normal benign traffic. A false negative is when an intrusion system fails to generate an alarm after processing attack traffic that the system is configured to detect. False negatives are dangerous, as the system is not detecting known attacks. A true positive is when the system generates an alarm in response to known malicious traffic. A true negative is normal network traffic that does not generate an alarm. The goal is to generate true positive alarms. To minimize false positives and false negatives the administrator should study existing network traffic, and then tune the signatures to better recognize intrusion patterns. A signature is tuned to one of four levels based on the perceived severity of the signature. High, an immediate threat is extremely likely. Possible attacks to gain access or cause a denial of service are detected. Medium, an immediate threat is likely, as abnormal network activity is detected
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/managing-ips-alarms?u=76281980&t=94)** that could be perceived as malicious. Low, an immediate threat is not likely. However, abnormal network activity is detected that could be perceived as malicious. Informational, activity that triggers the signature is not considered an immediate threat. However, the information provided is useful information. An [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) and intrusion prevention system has four types of alarms, false positive, false negative, true positive, and true negative. A signature is tuned to one of four levels based on the perceived severity of the signature. The goal is to generate true positive alarms in response to known malicious traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Deploying an IOS-Based IPS

[↑ Back to Table of Contents](#table-of-contents)

#### [Analyze the flow](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=0)** - [Instructor] Today there are more devices connecting to the network and networks are becoming larger and faster every day. Being able to analyze the flow of traffic across the network is an important function in providing the ability to troubleshoot the network and ensure system security. One tool administers can use is NetFlow. NetFlow was developed by Cisco over 20 years ago to provide a way to aggregate data as it passes through the network. It's used on routers to analyze traffic as it passes in or out of an interface. It gathers data on each flow into a compact record. This differs for the granular and somewhat cumbersome collection of traffic using standard protocol analysis tool. I'm in [Wireshark](../../Skills/Cybersecurity/Wireshark.md) where we see a number of different packets. Now, we could filter by conversation, and we'll do that. We'll narrow this by one conversation, but you still see many different records. In some cases, we simply want a transaction that reduces the amount of information collected from a communication by combining all of that into a single record. The NetFlow Collector will produce a summary of the following. Ingress interface, source IP address, destination IP address, IP protocol, source ports, destination ports, type and code for ICMP, and IP type of service.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=93)** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) monitors traffic for unusual or suspicious activity and generates an alert. We can use intrusion detection based on NetFlow. The NetFlow sensors can gather and store network transactions and can monitor traffic for anomalies, such as detecting network scans from an external source, denial of service attacks, and host communicating to a command-and-control server. NetFlow aggregates events as it passes through the network. I'd like to show you in Packet Tracer how this works. I'm in Packet Tracer, and here you see the NetFlow server. I'm going to go in and we're gonna just show you how to get to the NetFlow Collector and Analyzer. We open it up, and we do want to turn that on and start it up. Now we'll generate some traffic. I'm gonna go into laptop one, and to the web browser. Over here you see the web server and that IP address, so I'm going to enter that IP address, 192.168.40.100, and now I see this Cisco Packet Tracer webpage. Let's take a look around. Here we see a small page, copyrights, the image page, and a simple image. All right, now let's go into the NetFlow Collector and what we can see now is it's aggregated that. Now it's going to run through the aggregation, it takes just a second. And now you can see the information it's gathered, such as source address,
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/analyze-the-flow?u=76281980&t=185)** destination, where it's coming from, the protocol, direction, and other information. NetFlow remains an effective way to aggregate and store transaction data, which can be used for accounting and to identify malicious or anomalous activity, along with creating baselines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (2), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **Analogies:** such as (2)
> **Env Vars:** icmp (1)
> **Versions:** 192.168.40 (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Implementing an IPS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=0)** - [Instructor] Cisco IOS IPS monitors the network and prevents intrusions by comparing traffic against a signature database of known threats. If a threat is detected and triggers a signature the device can block the malicious traffic. There are several steps necessary to implement IOS IPS. The first thing you'll need to do is download the IOS IPS files. Older Cisco IOS releases had built-in signatures, however, newer versions do not have the built-in signatures. Therefore, you'll need to log in to [cisco.com](https://cisco.com) with your username and password. And then download the IOS IPS signature package files, along with the public crypto key from [cisco.com](https://cisco.com). You'll then need to create a configuration directory in Flash to store the signature files and configurations. You'll then configure an IOS IPS crypto key used by IOS IPS. The public key is the text file that you downloaded from Cisco. The master signature file is signed by a Cisco private key to guarantee that it's authentic and the integrity has not been modified, which is very important because you don't want anyone to modify those signature sets. Then, you'll enable IOS IPS. First, create an IPS rule name, and specify the location. Enable SDEE and logging event notification.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/implementing-an-ips?u=76281980&t=96)** And enable Syslog if it's not already enabled. All signatures are grouped into categories. This helps classify signatures for easy grouping and tuning. The three most common categories are all, basic, and advanced. You'll configure the router to support the default basic signature set. Those three commands will set the all category as retired. The next set of commands will make the IPS basic category unretired. Now, caution, do not unretire the all category. The all signature category contains all signatures in a signature release. The IOS IPS can not compile and use all the signatures at one time because it will most likely run out of memory and possibly crash the system. Now, you'll need to apply the rule to a desired interface. And here we see the IPS rule is applied to fast ethernet 0/0 in an out direction. Now you've implemented IPS, now let the system do its job of defending your network.

> [!info]- Semantic Content
>
> **Env Vars:** ips (12), ios (9), sdee (1)
> **Prerequisites:** you'll need (3), configure (2)
> **URLs:** [cisco.com](https://cisco.com) (2)
> **Exercise Files:** download the (2)
> **CLI Commands:** make (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Configure an IPS](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=0)** - [Instructor] In this demo, I'll configure iOS IPS. I'll enable iOS IPS. I'll configure logging using syslog. I'll modify an IPS signature and then I'll verify the IPS signature. As a side note, the signature files are already imported on the router. As a result, we don't have to configure the public crypto key or complete a manual import of the signature files. Now as you can take a look at our topology, we'll have over on the left-hand side would be what we consider our inside network and then over on the right-hand side the outside network. The first thing I did was verify connectivity, that those PCs A and C could talk to one another. Let's take a look. As you could see, I did ping PC C and it was successful. Over on PC C, it was able to reach A without any problem. So now we're going to go into router one. I'll need to log in. I'll go into config t and what we need to do is enable the security technology package. Now it's a long command so I'll use Tab.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=78)** I'll accept the end user license agreement and then I'll save the running config and now I'll reload to enable the security license.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=97)** Now I'll log back in and now I'll make a directory. We'll call it ipsdir. Now I'll go back to config t and I'll configure the IPS signature location. Now we'll create a rule using the ip ips name command and we'll call it iosips. Now we'll enable the timestamp service. Now I'll set the clock. Now I'll send the syslog messages to the syslog server. All right, now I wanna configure the iOS IPS to use the signature categories. So we'll retire all the signature categories with the retired true command and then unretire the ios_ips basic category. Now we'll exit and accept all changes. Now I want to apply the rule to the gigabit interface. All right, direction out means that the IPS inspects only traffic going out of that interface. Now I'm going to unretire the echo request signature and change the signature action to alert and drop. That signature 2004 subsignature zero so we want to unretire it
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/configure-an-ips?u=76281980&t=193)** so it will be retired false, enabled true. Okay, so we're going to tell it the action is to deny packet in line. And now we'll exit and accept all changes. And to just check, we'll just show ip ips all and here you can just see total active signatures one. So if you're doing any troubleshooting, we have a lot of commands that we can go in to check our work. All right, now what we're going to do is just to make sure that the IPS is working properly. We'll go back in and we're going to be able to ping A to C, but we won't be able to ping C back to A. Okay, now let's go back into C and the request has timed out. We'll go into our syslog server and we can see that it's logged some of the events. So we saw that we enabled an IPS and we verified it and made sure that the signature was working as expected.

> [!info]- Semantic Content
>
> **Env Vars:** ips (9)
> **Prerequisites:** configure (5)
> **Code Identifiers:** ios (3), ios_ips (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 5. Practical Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Monitoring and analyzing](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=0)** - [Instructor] The [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) intrusion prevention systems on the network are constantly gathering data. The network administrator has several tools in the arsenal to manage all the data. Generating via intrusion detection intrusion prevention systems, reporting using the security device event exchange format, gathering via syslog, and analysis via SIEM technology. When an attack signature is triggered the intrusion detection system will generate an alarm. Alarms are stored on the sensor and can be examined locally, or through an application such as IPS Manager Express. After an attack signature fires, the device can send a syslog message using the security device event exchange format. SDEE is a protocol that outlines the format of messages sent between security devices and security monitoring systems. An SDEE system alarm message uses this format. To log events you can use syslog, which is a standard for logging events in Unix-like systems. You can use a syslog server to collect all the logs in a central location. To analyze the data the network administrator can use SIEM technology, which integrates into the overall architecture of the network and collects, correlates, and acts on security event information. A SIEM system provides consolidated security event management, [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md), trend awareness, and auditing.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/monitoring-and-analyzing?u=76281980&t=96)** Normalization of event and log information it gathers from many sources and does [Data Mapping](../../Skills/Data%20Science/Data%20Mapping.md) to integrate into the SIEM system. Correlation of events, which gives historic or [Real-Time](../../Skills/Database%20Management/Real-Time.md) data perspective and conducts data analysis based on a set of rules. SIEM technology provides the network administrator a complete view of an organization and all possible network attack points. We must keep in mind however, although there are many tools for reporting, gathering, and analyzing, sometimes it takes human intervention to make a decision on whether the threat is real or not. The network administrator has several tools to manage all the data intrusion detection intrusion prevention systems generate. That includes reporting via SDEE, gathering using syslog, and analysis via SIEM technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (4), [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) (1), [Data Mapping](../../Skills/Data%20Science/Data%20Mapping.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** siem (6), sdee (3), ips (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Syslog](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=0)** - [Instructor] You can use the Syslog Server to collect all the logs in a central location. I'll demonstrate how to configure the Syslog Server in Cisco Packet Tracer. First we'll go into the server and take a look at the services and select Syslog. We'll turn it on and we'll close that. Next, I'll go to the router and let's go into config.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=28)** I'll issue the command to specify the Syslog Server address. And then we'll issue the command, logging trap debugging. This'll specify the type of log and the category. Exit out of that and now we'll use debug ip icmp, so we'll enable debugging for icmp. Okay, now let's ping the server to generate some traffic. Ping 192.168.40.110.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/syslog?u=76281980&t=65)** All right, let's take a look. We'll go into the Syslog services, and as you can see, it's logged the events. So you can use the Syslog Server to collect all the logs in a central location. You could do this, too, in Packet Tracer by setting up a simple network.

> [!info]- Semantic Content
>
> **Versions:** 192.168.40 (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Using IDS and honeypots](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=0)** - [Instructor] In addition to classic signature and heuristic-based [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md), another way to use intrusion detection is to implement a honeypot-based detection. A honeypot is a system to set up and lure a would-be attacker with a goal of observing their behavior and attack methods to better protect the network by distracting attackers from hitting the real target or to gather forensic evidence required to aid in the apprehension or prosecution of intruders. Placement of a honeypot depends on your objectives. It can be inside the land, outside the network boundary, or in the DMZ as a tasty treat for a would-be attacker. When using a honeypot as part of an intrusion detection system, keep in mind the main focus is on gathering information. Once an intruder breaks into a system, many times they'll come back for subsequent visits where more information can be monitored and saved. Make sure you defend the internal network, because even though this is a fake system they're essentially in your network. Some of the honeypot goals include keep the system as generic as possible. If you soup up the system too much, an attacker may disconnect. Put interesting data in the system to appear as if they hit a valuable target. By staging different types of vulnerabilities in the honeypot, administrators can analyze incoming types of attacks
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=94)** and malicious traffic patterns. They can then use this analysis to tune their sensor signatures to detect new types of malicious network traffic. Too many traps might inspire the hacker community, so be careful. There are blogs out there that share information on honeypots and honeynets. I'm here at this website where we can see a little bit of information gleaned about going in and examining a honeypot. I'll just scroll down here. We can see some stats found at most commonly guessed password and most common user ID. Of course, those are the ones we'd want to avoid using on our system. Many times if you get an out of the box honeypot, it may contain logging capabilities. Use the log. From there we can glean some information, such as if it's a human or automated system or malware. A human's going to be slow, have misspellings, and directed commands using previously gained knowledge from the targeted network. Automated will be fast, no misspellings, more of a shotgun approach, trying everything. Gather some information, such as where is the attacker? What is their target? What is the operating system they target? And what are the vulnerabilities? What could be their ultimate goal? Vandalism, theft of information? You can get a lot of information from a honeypot. Antivirus and other security vendors
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/using-ids-and-honeypots?u=76281980&t=191)** use honeypots for research. I'm here at The Honeynet Project where you can see information about honeypots and some fun information, such as challenges that are posed. You can go in and examine one of these. It tells you about the challenge and some of the outcome so that you can learn more about honeypots and honeynets. Network administrators use honeypots to lure would-be attackers, to analyze their behavior so that they can tune their sensor signatures to detect malicious activity and better defend their network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (3)
> **Analogies:** such as (3)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1), be careful (1)
> **CLI Commands:** make (1)
> **Env Vars:** dmz (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** set up (1)

#### [The EINSTEIN system](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=0)** - [Instructor] In the real world, [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) is used in many [Forms](../../Skills/Web%20Development/Forms.md). One is the Department of Homeland Security's EINSTEIN System. The EINSTEIN System is comprised of EINSTEIN 1, EINSTEIN 2, and EINSTEIN 3A. The EINSTEIN System actively monitors the traffic for threats. The United States' government is constantly at risk for many types of attack, including denial of service attacks, malware, unauthorized access, and active scanning and probing. The EINSTEIN Systems have an active role in federal government cyber security. The system uses widely available commercial technology and protects perimeter defenses to federal civilian executive branch agencies that include agriculture, homeland security, and treasury. The EINSTEIN System's two main functions are to observe and report possible cyber threats and to detect and block attacks from compromising federal agencies. The EINSTEIN Systems provide the situational awareness necessary to take a proactive approach against an active attack. The intelligence gathered helps agencies to defend against ongoing threats and records the data flow in case of an attack to conduct a forensic evaluation. Currently, there are three threat monitoring systems in the EINSTEIN family.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/the-einstein-system?u=76281980&t=94)** EINSTEIN 1 and EINSTEIN 2 act like an intrusion detection system. The first iteration is EINSTEIN 1, which monitors and records NetFlow traffic for potentially malicious activity. EINSTEIN 2 uses a signature-based sensor grid that detects suspicious traffic and sets off an alarm. EINSTEIN 3A uses a watch list to actively block threats. EINSTEIN is like the intrusion detection, intrusion prevention system used on corporate networks. But like those devices on the corporate networks, it cannot defend against all threats. However, it's an important component in providing defense in depth and managing the potential risk of cyber attacks. The EINSTEIN system observes and reports possible cyber threats, and blocks attacks from compromising federal agencies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** einstein (17)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-intrusion-detection-and-prevention/summary?u=76281980&t=0)** - [Lisa] Thank you for watching. In this course I covered the concepts of [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) and intrusion prevention systems. I have reviewed detection and signature engines and reviewed how intrusion prevention systems make decisions on what action to take. I covered best practices on how to deploy an intrusion prevention system and discussed some practical applications. If you're interested in learning more, please check out the IT segment of the library where we add new courses all the time. It's well worth your time to check out any course in the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) series. And if you want to learn more about encryption check out my course, Learning [Cryptography](../../Skills/Cybersecurity/Cryptography.md) and [Network Security](../../Skills/Cybersecurity/Network%20Security.md). If you want to learn more about packet analysis, check out my courses on [Wireshark](../../Skills/Cybersecurity/Wireshark.md). For a complete list of all my courses go to my author page. Keep learning, I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [lisa] (1)


## Instructor

- [Lisa Bock](../../Instructors/Cybersecurity/Lisa%20Bock.md)

## Skills Covered

- Intrusion Detection
- Cisco Networking

## Path Context

### In [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)
← [Cisco Network Security- Cisco Firewall Technologies](Cisco%20Network%20Security-%20Cisco%20Firewall%20Technologies.md) | **6 of 7** | [Cisco Network Security- Content and Endpoint Security](Cisco%20Network%20Security-%20Content%20and%20Endpoint%20Security.md) →

## Appears In

- [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)

## Related Courses

_Courses sharing skills:_

- [Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20Wireless%20Networks%2C%20Services%2C%20Security%2C%20and%20Virtualization.md) — Cisco Networking
- [Cisco Networking Foundations- Switching and Routing](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20Switching%20and%20Routing.md) — Cisco Networking
- [Cisco Networking Foundations- IP Addressing](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20IP%20Addressing.md) — Cisco Networking
- [Cisco Networking Foundations Fundamentals Of Cisco Networking](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations%20Fundamentals%20Of%20Cisco%20Networking.md) — Cisco Networking
- [Cisco Network Security- Content and Endpoint Security](Cisco%20Network%20Security-%20Content%20and%20Endpoint%20Security.md) — Cisco Networking

---

[↑ Back to top](#)